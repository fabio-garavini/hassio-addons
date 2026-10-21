## What's Changed

Built with Go 1.27.3.

### Fixes
* fix: handle missing max-sequence file entries by @calmh in https://github.com/syncthing/syncthing/pull/10912
* fix(sqlite): avoid early garbage collection of deleted recv-enc files by @calmh in https://github.com/syncthing/syncthing/pull/10916
* fix(sqlite): do not generate unbounded prepared statements (ref #10913) by @calmh in https://github.com/syncthing/syncthing/pull/10915
* fix(discover): skip unnecessary identical global announce updates; obey retry-after by @calmh in https://github.com/syncthing/syncthing/pull/10918
* fix(protocol): convert panics on bad data to protocol errors by @calmh in https://github.com/syncthing/syncthing/pull/10923
* fix(model): verify local change before applying metadata shortcut (fixes #10924) by @calmh in https://github.com/syncthing/syncthing/pull/10925
* fix(model): ensure parent ownership is copied properly (fixes #8399) by @calmh in https://github.com/syncthing/syncthing/pull/10926
* fix(model): properly compare blocks when reconciling receive-only (fixes #10928) by @calmh in https://github.com/syncthing/syncthing/pull/10929
### Other
* build(deps): update dependencies by @calmh in https://github.com/syncthing/syncthing/pull/10917
* chore(protocol): add protovalidate validation of incoming messages, reasonable limits by @calmh in https://github.com/syncthing/syncthing/pull/10838

**Full Changelog**: https://github.com/syncthing/syncthing/compare/v2.1.6...v2.1.7