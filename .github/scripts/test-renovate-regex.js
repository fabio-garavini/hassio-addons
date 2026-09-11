/**
 * Tests that the Renovate custom regex managers in .github/renovate.json
 * correctly parse every renovate annotation in this repository.
 *
 * Run: node .github/scripts/test-renovate-regex.js
 *
 * The regexes are loaded from the live config, so any future edit to
 * renovate.json is automatically validated against all current files.
 *
 * Emulates Renovate's regex-manager semantics as documented at
 * https://docs.renovatebot.com/modules/manager/regex/ :
 *   - RE2 flavor: lookarounds and backreferences are rejected
 *   - matches are per-file, so ^ and $ anchor the whole file (warned)
 *   - required info via named capture groups OR *Template config fields
 *
 * Regression fixtures at the bottom pin known-good annotation shapes.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const CONFIG = path.join(ROOT, '.github', 'renovate.json');

let failures = 0;
let checks = 0;

function fail(msg) {
  failures++;
  console.error(`  FAIL ${msg}`);
}

function ok(msg) {
  checks++;
  console.log(`  ok   ${msg}`);
}

function assert(cond, msg) {
  if (cond) ok(msg);
  else fail(msg);
}

/** Recursively list all files (hidden dirs included; only .git is skipped). */
function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === '.git') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(path.relative(ROOT, full).split(path.sep).join('/'));
  }
  return out;
}

/**
 * Convert a Renovate pattern to a JS RegExp.
 * - "/.../flags"  -> regex with flags (used by managerFilePatterns)
 * - bare string   -> regex without flags (used by matchStrings)
 */
function toRegex(pattern) {
  const m = /^\/(.*)\/([gimsuy]*)$/.exec(pattern);
  if (m) return new RegExp(m[1], m[2]);
  return new RegExp(pattern);
}

/** Ensure the regex has the global flag (Renovate applies matchStrings globally). */
function withGlobal(re) {
  return re.flags.includes('g') ? re : new RegExp(re.source, re.flags + 'g');
}

/** Strip surrounding quotes the way Docker strips them from ARG values. */
function shellUnquote(value) {
  if (
    (value.startsWith('"') && value.endsWith('"') && value.length >= 2) ||
    (value.startsWith("'") && value.endsWith("'") && value.length >= 2)
  ) {
    return value.slice(1, -1);
  }
  return value;
}

/**
 * RE2 compatibility lint. Renovate compiles matchStrings with RE2
 * (uhop/node-re2), which rejects these constructs. A pattern passing
 * plain JS RegExp compilation may still crash real Renovate.
 */
function lintRe2(source, label, { warnAnchors = true } = {}) {
  const lookarounds = [
    ['(?=', 'lookahead assertion'],
    ['(?!', 'negative lookahead assertion'],
    ['(?<=', 'lookbehind assertion'],
    ['(?<!', 'negative lookbehind assertion'],
  ];
  for (const [token, name] of lookarounds) {
    if (source.includes(token)) {
      fail(`${label}: uses ${name} "${token}" which RE2 (Renovate) does not support`);
    }
  }
  if (/\\\d/.test(source)) {
    fail(`${label}: uses backreferences which RE2 (Renovate) does not support`);
  }
  if (warnAnchors && (/^\^/.test(source) || /\$$/.test(source))) {
    console.log(
      `  warn ${label}: ^/$ anchor the whole FILE in Renovate (per-file matching), not a line`
    );
  }
}

const config = JSON.parse(fs.readFileSync(CONFIG, 'utf8'));

if (!config.customManagers?.length) {
  console.error('No customManagers found in renovate.json');
  process.exit(1);
}

const allFiles = walk(ROOT);

// The walk now includes hidden dirs; make sure we did not accidentally
// pull in huge/irrelevant trees (only .git is excluded).
if (!allFiles.some((f) => f.startsWith('.github/'))) {
  console.error('Walk failed: .github files not found');
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Validate each custom manager
// ---------------------------------------------------------------------------

const matchResults = new Map(); // label -> { targets, matched }

for (const [i, manager] of config.customManagers.entries()) {
  const label = manager.description || `custom manager #${i + 1}`;
  console.log(`\n=== Manager: ${label} ===`);

  // Only regex custom managers are emulated here. Anything else must
  // fail loudly rather than be silently misinterpreted.
  assert(
    manager.customType === 'regex',
    `${label}: customType is "regex" (got "${manager.customType}")`
  );
  if (manager.customType !== 'regex') continue;

  assert(
    manager.matchStrings?.length > 0,
    `${label}: has matchStrings`
  );
  if (!manager.matchStrings?.length) continue;

  assert(
    !manager.matchStringsStrategy,
    `${label}: no matchStringsStrategy (not emulated by this test)`
  );

  const regexes = manager.matchStrings.map((s) => {
    const re = withGlobal(toRegex(s));
    lintRe2(re.source, label);
    try {
      new RegExp(re.source); // syntax validation
    } catch (e) {
      fail(`${label}: matchString compiles as JS regex (${e.message})`);
    }
    // Renovate requires currentValue OR currentDigest.
    assert(
      re.source.includes('(?<currentValue>') ||
        re.source.includes('(?<currentDigest>'),
      `${label}: regex captures "currentValue"/"currentDigest" named group`
    );
    return re;
  });

  // Required dependency info: capture groups OR *Template fields.
  const hasGroupOrTemplate = (name) =>
    regexes.some((re) => re.source.includes(`(?<${name}>`)) ||
      manager[`${name}Template`] !== undefined;
  assert(
    hasGroupOrTemplate('datasource'),
    `${label}: datasource via capture group or datasourceTemplate`
  );
  assert(
    hasGroupOrTemplate('depName') || hasGroupOrTemplate('packageName'),
    `${label}: depName/packageName via capture group or *Template`
  );

  // managerFilePatterns must be "/.../flags" regexes; bare strings are
  // minimatch globs in Renovate and are deliberately not emulated.
  const filePatterns = [];
  for (const p of manager.managerFilePatterns || []) {
    if (!/^\/.*\/[gimsuy]*$/.test(p)) {
      fail(`${label}: managerFilePattern "${p}" is not a /regex/ (globs are not emulated)`);
      continue;
    }
    filePatterns.push(toRegex(p));
  }
  const targets = allFiles.filter((f) => filePatterns.some((p) => p.test(f)));
  assert(
    targets.length > 0,
    `${label}: managerFilePatterns match at least one file (${targets.length} files)`
  );

  const matched = new Map(); // file -> array of match objects
  for (const file of targets) {
    const content = fs.readFileSync(path.join(ROOT, file), 'utf8');
    const ms = [];
    for (const re of regexes) {
      for (const m of content.matchAll(re)) ms.push(m);
    }
    matched.set(file, ms);
  }
  matchResults.set(label, { targets, matched });
}

// ---------------------------------------------------------------------------
// Annotation coverage + value hygiene
// ---------------------------------------------------------------------------

console.log('\n=== Annotation coverage ===');

for (const [label, { targets, matched }] of matchResults) {
  for (const file of targets) {
    const content = fs.readFileSync(path.join(ROOT, file), 'utf8');
    const ms = matched.get(file);

    if (/renovate/i.test(content) && ms.length === 0) {
      fail(`${file}: mentions "renovate" but no regex matched it`);
      continue;
    }

    for (const m of ms) {
      const g = m.groups || {};
      const value = g.currentValue;

      if (!g.datasource) fail(`${file}: missing "datasource" capture`);
      if (!g.depName && !g.packageName)
        fail(`${file}: missing "depName"/"packageName" for ${g.datasource}`);

      if (value === undefined || value === '') {
        fail(`${file}: empty currentValue`);
        continue;
      }
      // The original bug: greedy capture swallowed the closing quote.
      if (/["']/.test(value))
        fail(`${file}: currentValue contains a quote character: "${value}"`);
      if (/\s/.test(value))
        fail(`${file}: currentValue contains whitespace: "${value}"`);
      if (value.startsWith('"') || value.startsWith("'"))
        fail(`${file}: currentValue includes an opening quote: "${value}"`);

      // Cross-check against the ARG/ENV assignment immediately following
      // the annotation (next non-empty, non-comment line). Only applies
      // to Dockerfile-style annotations; addon_info captures the value
      // on the same line.
      if (!file.endsWith('.yaml') && !file.endsWith('.yml')) {
        const rest = content.slice(m.index);
        const lines = rest.split('\n');
        let assign = null;
        for (const line of lines.slice(0, 5)) {
          const trimmed = line.trim();
          if (!trimmed || trimmed.startsWith('#')) continue;
          assign = /^(?:ARG|ENV)\s+(\S+)\s*=\s*(.+)$/.exec(trimmed);
          break;
        }
        if (assign) {
          const actual = shellUnquote(assign[2].trim());
          if (actual !== value)
            fail(
              `${file}: captured "${value}" != assigned value "${actual}" for ${assign[1]}`
            );
        } else {
          fail(`${file}: annotation not directly followed by an ARG/ENV assignment`);
        }
      }
    }
  }
  console.log(
    `  ${label}: ${[...matched.values()].reduce((a, b) => a + b.length, 0)} matches across ${targets.length} files`
  );
}

// ---------------------------------------------------------------------------
// Versioning sanity: currentValue must match its own declared versioning
// ---------------------------------------------------------------------------

console.log('\n=== Versioning consistency ===');

for (const [, { targets, matched }] of matchResults) {
  for (const file of targets) {
    const content = fs.readFileSync(path.join(ROOT, file), 'utf8');
    for (const m of matched.get(file)) {
      const { versioning, currentValue } = m.groups || {};
      if (!versioning || !versioning.startsWith('regex:')) continue;
      if (versioning.includes('{{')) continue; // handlebars templates, skip
      lintRe2(versioning.slice('regex:'.length), `${file} versioning`, {
        warnAnchors: false,
      });
      let re;
      try {
        re = new RegExp(versioning.slice('regex:'.length));
      } catch (e) {
        fail(`${file}: versioning regex does not compile: ${versioning}`);
        continue;
      }
      if (!re.test(currentValue))
        fail(
          `${file}: currentValue "${currentValue}" does not match its versioning regex ${versioning}`
        );
      else ok(`${file}: "${currentValue}" matches ${versioning}`);
    }
  }
}

// ---------------------------------------------------------------------------
// Regression fixtures: exact annotation shapes that must keep parsing
// ---------------------------------------------------------------------------

console.log('\n=== Regression fixtures ===');

const findManager = (needle) =>
  config.customManagers.find((m) =>
    (m.managerFilePatterns || []).some((p) => p.includes(needle))
  );

const dockerFixture = {
  prefix: '# renovate:',
  text: [
    '# renovate: datasource=github-releases packageName=hassio-addons/bashio',
    'ARG BASHIO_VERSION="v0.18.1"',
    '',
    '# renovate: datasource=github-releases packageName=hassio-addons/bashio',
    'ARG BASHIO_VERSION=v0.18.1',
    '',
    '# renovate: datasource=github-releases packageName=hassio-addons/bashio',
    "ARG BASHIO_VERSION='v0.18.1'",
    '',
    '# renovate: datasource=github-releases packageName=home-assistant/tempio',
    'ARG TEMPIO_VERSION="2024.11.2"',
    '',
    '# renovate: datasource=github-releases packageName=just-containers/s6-overlay versioning=regex:^(?<major>\\d+)\\.(?<minor>\\d+)\\.(?<patch>\\d+)\\.(?<other>\\d+)$',
    'ARG S6_OVERLAY_VERSION="3.2.1.0"',
    '',
    '# renovate: datasource=github-tags packageName=pgvector/pgvector',
    'ARG PGVECTOR_VERSION="v0.8.6"',
    '',
    '# renovate: datasource=github-releases packageName=kovidgoyal/calibre',
    'ARG MOD_VERSION="v9.12.0"',
    '',
    '# renovate: datasource=github-releases packageName=opencloud-eu/web-extensions versioning=regex:^unzip-v(?<major>\\d+)\\.(?<minor>\\d+)\\.(?<patch>\\d+)$',
    'ARG APPS_UNZIP_VERSION="unzip-v2.1.0"',
  ].join('\n'),
  expected: ['v0.18.1', '2024.11.2', '3.2.1.0', 'v0.8.6', 'v9.12.0', 'unzip-v2.1.0'],
};

const addonInfoFixture = {
  prefix: 'source:',
  text: [
    'source:',
    '  type: docker',
    '  repo: ghcr.io/advplyr/audiobookshelf',
    '  current_version: 2.36.0',
    '  version_template: regex:^(?<major>\\d+)\\.(?<minor>\\d+)\\.(?<patch>\\d+)$',
    '',
    'source:',
    '  type: github-releases',
    '  repo: linuxserver/docker-calibre',
    "  current_version: 'v9.14.0-ls419'",
    '  version_template: regex:^v(?<major>\\d+)\\.(?<minor>\\d+)\\.(?<patch>\\d+)-ls(?<build>\\d+)$',
    '',
    'source:',
    '  type: github-releases',
    '  repo: luanti-org/luanti',
    '  current_version: 5.15.2-ls36',
  ].join('\n'),
  expected: ['2.36.0', 'v9.14.0-ls419', '5.15.2-ls36'],
};

for (const [needle, fixture] of [
  ['Dockerfile', dockerFixture],
  ['addon_info', addonInfoFixture],
]) {
  const manager = findManager(needle);
  if (!manager) {
    console.error(`No custom manager for ${needle} found`);
    process.exit(1);
  }
  const regexes = manager.matchStrings.map((s) => withGlobal(toRegex(s)));

  for (const re of regexes) {
    const ms = [...fixture.text.matchAll(re)];
    for (const fx of fixture.expected) {
      const hit = ms.find((m) => m.groups.currentValue === fx);
      assert(hit !== undefined, `${needle} fixture parses: ${fx}`);
      if (hit && /["']/.test(hit.groups.currentValue))
        fail(`fixture ${fx}: captured value contains quotes`);
    }
    // Every annotation line must produce exactly one match.
    const annotationCount = fixture.text
      .split('\n')
      .filter((l) => l.startsWith(fixture.prefix)).length;
    assert(
      ms.length === annotationCount,
      `all ${annotationCount} ${needle} fixture annotations matched exactly once (got ${ms.length})`
    );
  }
}

// ---------------------------------------------------------------------------
// Summary
// ---------------------------------------------------------------------------

console.log(`\n${checks} passed, ${failures} failed`);
if (failures > 0) process.exit(1);
