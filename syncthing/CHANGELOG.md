# v1.29.6

## What's Changed

### Fixes

* fix(config): deep copy configuration defaults (fixes #9916) by @hazemKrimi in https://github.com/syncthing/syncthing/pull/10101
* fix(config): mark audit log options as needing restart (fixes #10099) by @marbens-arch in https://github.com/syncthing/syncthing/pull/10100
* fix(versioner): fix perms of created folders (fixes #9626) by @ashishbhate in https://github.com/syncthing/syncthing/pull/10105
* fix(syncthing): ensure both config and data dirs exist at startup (fixes #10126) by @calmh in https://github.com/syncthing/syncthing/pull/10127
* fix(gui): update `uncamel()` to handle strings like 'IDs' (fixes #10128) by @luckman212 in https://github.com/syncthing/syncthing/pull/10131

### Features

* feat(gui): close a modal when pressing ESC after switching modal tabs (fixes #9489) by @hazemKrimi in https://github.com/syncthing/syncthing/pull/10092

### Other

* chore(gui): add Serbian (sr) translation template by @acolomb in https://github.com/syncthing/syncthing/pull/10116
* build: reactivate golangci-lint by @calmh in https://github.com/syncthing/syncthing/pull/10118
* chore: move golangci-lint & meta to separate PR-only workflow by @calmh in https://github.com/syncthing/syncthing/pull/10119
* refactor: use slices.Contains to simplify code by @pullmerge in https://github.com/syncthing/syncthing/pull/10121
* build: process for automatic release tags by @calmh in https://github.com/syncthing/syncthing/pull/10133
* refactor: use slices package for sort by @mrclmr in https://github.com/syncthing/syncthing/pull/10132
* refactor: use slices package for sorting by @mrclmr in https://github.com/syncthing/syncthing/pull/10136
* docs: general notes about v2 coming by @calmh in https://github.com/syncthing/syncthing/pull/10135
* build: add labeler workflow for PRs by @calmh in https://github.com/syncthing/syncthing/pull/10143

## New Contributors

* @hazemKrimi made their first contribution in https://github.com/syncthing/syncthing/pull/10092
* @pullmerge made their first contribution in https://github.com/syncthing/syncthing/pull/10121
* @ashishbhate made their first contribution in https://github.com/syncthing/syncthing/pull/10105
* @mrclmr made their first contribution in https://github.com/syncthing/syncthing/pull/10132

**Full Changelog**: https://github.com/syncthing/syncthing/compare/v1.29.6...v1.29.7"
