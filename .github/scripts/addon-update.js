const {execSync} = require('child_process');

execSync("npm install yaml");


const fs = require('fs');
const yaml = require('yaml');

const args = process.argv.slice(2);
const addonSlug = args[0];

const addonInfoFile = `${addonSlug}/addon_info.yaml`;
const info = yaml.parse(fs.readFileSync(addonInfoFile, 'utf8'));

const configFile = `${addonSlug}/config.yaml`;
const config = yaml.parse(fs.readFileSync(configFile, 'utf8'));

const currentVersion = info.source.current_version;
const versionRegex = new RegExp(info.source.version_template.replace("regex:", ""));

const match = currentVersion.match(versionRegex);

if (!match) {
  console.error(`Current version "${currentVersion}" does not match regex`);
  process.exit(1);
}

const configVersionTemplate = info.config.version_template;
let configVersion = normalizeString(match, configVersionTemplate);

if (config.version.replace(/(-v|\+).*$/, '') == configVersion && fs.existsSync(`${addonSlug}/Dockerfile`)) {
  info.config.patch += 1;
  configVersion += `+${info.config.patch}`;
} else {
  info.config.patch = 0;
}

config.version = configVersion;

if(info.config?.image != null) config.image = info.config.image;

if(info.changelog?.enabled??true) {
  const changelogVersion = normalizeString(match, info.changelog.version_template);
  switch (info.changelog?.source??info.source?.type??'none') {
    case 'github-releases': {
      execSync(`curl "https://api.github.com/repos/${info.changelog?.repo??info.source?.repo}/releases/tags/${info.changelog?.source != null ? changelogVersion : currentVersion}" | jq -r .body > ${addonSlug}/CHANGELOG.md`);
      break;
    }
    default: {
      execSync(`echo "# ${changelogVersion}" > ${addonSlug}/CHANGELOG.md`);
      break;
    }
  }
}

if(info.build != null && (info.build?.enabled??true)) {
  updateBuildConfig();
} else {
  config.image = info.source.image??info.config.image;
}

fs.writeFileSync(addonInfoFile, yaml.stringify(info), 'utf8');
fs.writeFileSync(configFile, yaml.stringify(config), 'utf8');

function normalizeString(match, template) {
  let normalized = template;
  for (const [key, value] of Object.entries(match.groups)) {
    normalized = normalized.replace(`{{${key}}}`, value);
  }
  return normalized;
}

function updateBuildConfig() {

  const buildFile = `${addonSlug}/build.yaml`;
  const build = yaml.parse(fs.readFileSync(buildFile, 'utf8'));

  const buildVersion = info.build?.version_template != null ? normalizeString(match, info.build.version_template) : info.source.current_version;
  let buildFromImage = `${info.build?.image??info.source.image}:${buildVersion}`;

  build.build_from = {};
  for (let arch of config.arch) {
    build.build_from[arch] = buildFromImage.replace("{{arch}}", arch).replace("{arch}", arch);
  }

  try {
    let dockerfile = fs.readFileSync(`${addonSlug}/Dockerfile`, 'utf8');
    const fromRegex = /^ARG BUILD_FROM=.*$/m;
    const versionRegex = /^ARG BUILD_VERSION=.*$/m;

    dockerfile = dockerfile.replace(fromRegex, `ARG BUILD_FROM=${buildFromImage.replace("{{arch}}", "amd64").replace("{arch}", "amd64")}`);
    dockerfile = dockerfile.replace(versionRegex, `ARG BUILD_VERSION=${config.version}`);

    fs.writeFileSync(`${addonSlug}/Dockerfile`, dockerfile, 'utf-8');
  } catch (err) {d
    console.error('❌ Error editing Dockerfile:', err);
  }

  if (info.build.codenotary != null) {
    build.codenotary ??= {};
    build.codenotary.signer = info.build.codenotary;
    config.codenotary = info.build.codenotary;
  } else if (build.codenotary != null || config.codenotary != null) {
    delete build.codenotary?.signer;
    if (build.codenotary?.size == 0) delete build.codenotary;
    delete config.codenotary;
  }

  fs.writeFileSync(buildFile, yaml.stringify(build), 'utf8');
}