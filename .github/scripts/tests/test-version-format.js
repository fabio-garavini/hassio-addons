const assert = require('assert');
const { formatVersion } = require('../version-format');

const semverRegex = /^v(?<major>\d+)\.(?<minor>\d+)(\.(?<patch>\d+))?$/;
const flavorRegex = /^(?<major>\d+)\.(?<minor>\d+)\.(?<patch>\d+)-(?<flavor>tensorrt)?$/;
const lsBuildRegex = /^(?<major>\d+)\.(?<minor>\d+)\.(?<patch>\d+)-ls(?<build>\d+)$/;

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    console.log(`✅ ${name}`);
    passed++;
  } catch (e) {
    console.error(`❌ ${name}`);
    console.error(`   ${e.message}`);
    failed++;
  }
}

test('full version renders all groups', () => {
  assert.strictEqual(
    formatVersion('v10.11.11', semverRegex, '{{major}}.{{minor}}.{{patch|0}}'),
    '10.11.11'
  );
});

test('partial version applies default', () => {
  assert.strictEqual(
    formatVersion('v12.0', semverRegex, '{{major}}.{{minor}}.{{patch|0}}'),
    '12.0.0'
  );
});

test('default with surrounding text', () => {
  assert.strictEqual(
    formatVersion('v12.0', semverRegex, 'v{{major}}.{{minor}}.{{patch|0}}-ls{{build|0}}'),
    'v12.0.0-ls0'
  );
});

test('unmatched group without default throws error naming the group', () => {
  assert.throws(
    () => formatVersion('v12.0', semverRegex, '{{major}}.{{minor}}.{{patch}}'),
    /Placeholder "patch" did not resolve for input "v12\.0"/
  );
});

test('app_build counter resolves placeholders not present in the regex', () => {
  const lsBuildRegex = /^v(?<major>\d+)\.(?<minor>\d+)\.(?<patch>\d+)-ls(?<build>\d+)$/;
  assert.strictEqual(
    formatVersion('v9.14.0-ls419', lsBuildRegex, '{{major}}.{{minor}}.{{patch}}-ha{{app_build}}', { app_build: 4 }),
    '9.14.0-ha4'
  );
  assert.strictEqual(
    formatVersion('v10.11.11', semverRegex, '{{major}}.{{minor}}.{{patch|0}}-v{{app_build}}', { app_build: 4 }),
    '10.11.11-v4'
  );
  assert.strictEqual(
    formatVersion('v10.11.11', semverRegex, '{{major}}.{{minor}}.{{patch|0}}-ha{{app_build}}', { app_build: 4 }),
    '10.11.11-ha4'
  );
});

test('upstream build group still resolves when no extra is provided', () => {
  const lsBuildRegex = /^(?<major>\d+)\.(?<minor>\d+)\.(?<patch>\d+)-ls(?<build>\d+)$/;
  assert.strictEqual(
    formatVersion('9.14.0-ls419', lsBuildRegex, 'v{{major}}.{{minor}}.{{patch}}-ls{{build}}'),
    'v9.14.0-ls419'
  );
});

test('extra values take precedence over defaults', () => {
  assert.strictEqual(
    formatVersion('v12.0', semverRegex, '{{major}}.{{minor}}.{{patch|0}}-v{{app_build|0}}', { app_build: 7 }),
    '12.0.0-v7'
  );
});

test('missing extra value falls back to default', () => {
  assert.strictEqual(
    formatVersion('v12.0', semverRegex, '{{major}}.{{minor}}.{{patch|0}}-v{{app_build|0}}'),
    '12.0.0-v0'
  );
});

test('missing extra value without default throws', () => {
  assert.throws(
    () => formatVersion('v12.0', semverRegex, '{{major}}.{{minor}}.{{patch|0}}-v{{app_build}}'),
    /Placeholder "app_build" did not resolve/
  );
});

test('no match returns null', () => {
  assert.strictEqual(formatVersion('release-42', semverRegex, '{{major}}'), null);
});

test('empty default renders empty string', () => {
  assert.strictEqual(
    formatVersion('0.17.2-tensorrt', flavorRegex, '{{major}}.{{minor}}.{{patch}}-{{flavor|}}'),
    '0.17.2-tensorrt'
  );
  assert.strictEqual(
    formatVersion('0.17.2-', flavorRegex, '{{major}}.{{minor}}.{{patch}}-{{flavor|}}'),
    '0.17.2-'
  );
  assert.strictEqual(
    formatVersion('0.17.2', flavorRegex, '{{major}}.{{minor}}.{{patch}}-{{flavor|}}'),
    null
  );
});

test('matched optional group wins over default', () => {
  assert.strictEqual(
    formatVersion('1.2.3-ls42', lsBuildRegex, '{{major}}.{{minor}}.{{patch}}-ls{{build|0}}'),
    '1.2.3-ls42'
  );
});

test('default containing pipe-like or special chars', () => {
  assert.strictEqual(
    formatVersion('v12.0', semverRegex, '{{major}}.{{minor}}.{{patch|00}}'),
    '12.0.00'
  );
});

test('template without placeholders is returned unchanged on match', () => {
  assert.strictEqual(formatVersion('v12.0', semverRegex, 'latest'), 'latest');
});

test('jellyfin config round trip', () => {
  const jellyfinRegex = /^v(?<major>\d+)\.(?<minor>\d+)(?<rest>\.(?<patch>\d+))?$/;
  assert.strictEqual(
    formatVersion('v10.11.11', jellyfinRegex, '{{major}}.{{minor}}.{{patch|0}}-v{{app_build}}', { app_build: 4 }),
    '10.11.11-v4'
  );
  assert.strictEqual(
    formatVersion('v12.0', jellyfinRegex, '{{major}}.{{minor}}.{{patch|0}}-v{{app_build}}', { app_build: 4 }),
    '12.0.0-v4'
  );
});

test('optional rest group preserves partial versions for upstream tags', () => {
  const jellyfinRegex = /^v(?<major>\d+)\.(?<minor>\d+)(?<rest>\.(?<patch>\d+))?$/;
  assert.strictEqual(
    formatVersion('v10.11.11', jellyfinRegex, '{{major}}.{{minor}}{{rest|}}'),
    '10.11.11'
  );
  assert.strictEqual(
    formatVersion('v12.0', jellyfinRegex, '{{major}}.{{minor}}{{rest|}}'),
    '12.0'
  );
  assert.strictEqual(
    formatVersion('v10.11.11', jellyfinRegex, 'v{{major}}.{{minor}}{{rest|}}'),
    'v10.11.11'
  );
  assert.strictEqual(
    formatVersion('v12.0', jellyfinRegex, 'v{{major}}.{{minor}}{{rest|}}'),
    'v12.0'
  );
});

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
