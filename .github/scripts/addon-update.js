#!/usr/bin/env node

'use strict';

let yaml;
try {
  yaml = require('yaml');
} catch {
  const { execSync } = require('child_process');
  execSync('npm install yaml', { stdio: 'inherit' });
  yaml = require('yaml');
}

const fs = require('fs');
const path = require('path');
const { formatVersion } = require('./version-format');

const GITHUB_API_BASE = 'https://api.github.com';
const CHANGELOG_TIMEOUT_MS = 30_000;
const CHANGELOG_FALLBACK_HEADER = '# ';

main(process.argv[2]).catch((err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
});

async function main(addonSlug) {
  if (!addonSlug) {
    throw new Error('Usage: node addon-update.js <addon-slug>');
  }

  const ctx = loadContext(addonSlug);

  const previousVersion = ctx.config.version;
  ctx.info.config.build = incrementBuildCounter(ctx.info.config);
  const configVersion = renderVersionTemplate(ctx, ctx.info.config.version_template);
  ctx.config.version = configVersion;

  const changelog = await renderChangelog(ctx);
  const buildResult = renderBuild(ctx);
  resolveImage(ctx, buildResult != null);

  writeAll(ctx, { changelog, buildResult });

  console.log(`updated ${addonSlug}: ${previousVersion} -> ${configVersion}`);
}

function loadContext(addonSlug) {
  if (!fs.existsSync(addonSlug)) {
    throw new Error(`Add-on directory "${addonSlug}" does not exist`);
  }

  const addonInfoFile = path.join(addonSlug, 'addon_info.yaml');
  const configFile = path.join(addonSlug, 'config.yaml');

  const info = readYamlFile(addonInfoFile);
  const config = readYamlFile(configFile);

  if (!info?.source) throw new Error(`${addonInfoFile}: missing "source" section`);
  if (!info?.config) throw new Error(`${addonInfoFile}: missing "config" section`);
  if (!info.source.current_version) {
    throw new Error(`${addonInfoFile}: missing "source.current_version"`);
  }
  if (!info.config.version_template) {
    throw new Error(`${addonInfoFile}: missing "config.version_template"`);
  }

  return {
    addonSlug,
    addonInfoFile,
    configFile,
    info,
    config,
    currentVersion: info.source.current_version,
    versionRegex: resolveVersionRegex(info.source.version_template, addonInfoFile),
  };
}

function resolveVersionRegex(versionTemplate, source) {
  if (typeof versionTemplate !== 'string' || !versionTemplate.startsWith('regex:')) {
    throw new Error(
      `${source}: unsupported version_template ${JSON.stringify(versionTemplate)} (only "regex:" is supported)`
    );
  }
  return new RegExp(versionTemplate.slice('regex:'.length));
}

function readYamlFile(file) {
  try {
    return yaml.parse(fs.readFileSync(file, 'utf8'));
  } catch (err) {
    throw new Error(`Failed to read/parse ${file}: ${err.message}`);
  }
}

function incrementBuildCounter(configSection) {
  if (configSection.build == null) configSection.build = 0;
  configSection.build += 1;
  return configSection.build;
}

function renderVersionTemplate(ctx, template) {
  try {
    return formatVersion(ctx.currentVersion, ctx.versionRegex, template, {
      app_build: ctx.info.config.build,
    });
  } catch (err) {
    throw new Error(
      `${ctx.addonInfoFile}: failed to render version template ${JSON.stringify(template)}: ${err.message}`
    );
  }
}

function resolveImage(ctx, buildEnabled) {
  if (buildEnabled) {
    if (ctx.info.config?.image != null) ctx.config.image = ctx.info.config.image;
  } else {
    ctx.config.image = ctx.info.source.image ?? ctx.info.config.image;
  }
}

async function renderChangelog(ctx) {
  const { info, addonSlug } = ctx;
  if (!(info.changelog?.enabled ?? true)) return null;

  const changelogVersion = renderVersionTemplate(ctx, info.changelog.version_template);
  const fallback = `# ${changelogVersion}`;

  const changelogSource = info.changelog?.source ?? info.source?.type ?? 'none';
  if (changelogSource !== 'github-releases') {
    return fallback;
  }

  const repo = info.changelog?.repo ?? info.source?.repo;
  const tag = info.changelog?.source != null ? changelogVersion : ctx.currentVersion;
  const body = await fetchGithubReleaseBody(ctx.addonInfoFile, repo, tag);
  return body ?? fallback;
}

async function fetchGithubReleaseBody(source, repo, tag) {
  if (!repo) {
    console.error(`${source}: changelog source is "github-releases" but no repo is configured, using fallback`);
    return null;
  }

  const url = `${GITHUB_API_BASE}/repos/${repo}/releases/tags/${encodeURIComponent(tag)}`;
  const headers = {
    'User-Agent': 'hassio-addons-renovate',
    'Accept': 'application/vnd.github+json',
  };
  if (process.env.RENOVATE_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.RENOVATE_TOKEN}`;
  }

  try {
    const res = await fetch(url, { headers, signal: AbortSignal.timeout(CHANGELOG_TIMEOUT_MS) });
    if (!res.ok) {
      console.error(`Changelog fetch for ${repo}@${tag} failed with HTTP ${res.status}, using fallback`);
      return null;
    }
    const release = await res.json();
    return release?.body || null;
  } catch (err) {
    console.error(`Changelog fetch for ${repo}@${tag} failed: ${err.message}, using fallback`);
    return null;
  }
}

function renderBuild(ctx) {
  const { info, config, addonSlug } = ctx;
  if (info.build == null || !(info.build?.enabled ?? true)) return null;

  const buildFile = path.join(addonSlug, 'build.yaml');
  const dockerfile = path.join(addonSlug, 'Dockerfile');

  const build = readYamlFile(buildFile);

  const buildVersion =
    info.build?.version_template != null ? renderVersionTemplate(ctx, info.build.version_template) : null;
  const buildFromImage = `${info.build?.image ?? info.source.image}${buildVersion != null ? `:${buildVersion}` : ''}`;

  if (!Array.isArray(config.arch) || config.arch.length === 0) {
    throw new Error(`${ctx.configFile}: "config.arch" must be a non-empty list when a build section is present`);
  }
  build.build_from = {};
  for (const arch of config.arch) {
    build.build_from[arch] = replaceArchPlaceholder(buildFromImage, arch);
  }

  if (!fs.existsSync(dockerfile)) {
    throw new Error(`${dockerfile} not found but a build section is present`);
  }
  let dockerfileContent = fs.readFileSync(dockerfile, 'utf8');
  dockerfileContent = replaceDockerfileArg(
    dockerfileContent,
    'BUILD_FROM',
    replaceArchPlaceholder(buildFromImage, 'amd64'),
    dockerfile,
    true
  );
  // BUILD_VERSION may legitimately be declared without an inline default
  // (e.g. "ARG BUILD_VERSION \" with the value passed as a build arg)
  dockerfileContent = replaceDockerfileArg(dockerfileContent, 'BUILD_VERSION', config.version, dockerfile, false);

  return { build, buildFile, dockerfileContent, dockerfile };
}

function replaceArchPlaceholder(value, arch) {
  return value.replaceAll('{{arch}}', arch).replaceAll('{arch}', arch);
}

function replaceDockerfileArg(content, name, value, file, required) {
  const argRegex = new RegExp(`^ARG ${name}=.*$`, 'm');
  if (!argRegex.test(content)) {
    if (!required) return content;
    throw new Error(`${file}: missing "ARG ${name}=" line`);
  }
  return content.replace(argRegex, `ARG ${name}=${value}`);
}

function writeAll(ctx, { changelog, buildResult }) {
  fs.writeFileSync(ctx.addonInfoFile, yaml.stringify(ctx.info), 'utf8');
  fs.writeFileSync(ctx.configFile, yaml.stringify(ctx.config), 'utf8');

  if (changelog != null) {
    fs.writeFileSync(path.join(ctx.addonSlug, 'CHANGELOG.md'), changelog, 'utf8');
  }

  if (buildResult != null) {
    fs.writeFileSync(buildResult.buildFile, yaml.stringify(buildResult.build), 'utf8');
    fs.writeFileSync(buildResult.dockerfile, buildResult.dockerfileContent, 'utf8');
  }
}
