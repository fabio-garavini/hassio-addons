## Major changes in 2.1

- Devices and folders can now be grouped in the GUI by setting the new
  `group` attribute.

- HTTP and HTTPS proxies with support for CONNECT can now be used, in
  addition to the existing support for SOCKS proxies (the environment
  variable `all_proxy=https://...`).

- Block indexing can be turned off for folders where it's more desirable to
  optimise for reduced database size and overhead than minimal transfer
  size (the `blockIndexing` attribute on folder configuration).

- GUI login session duration can be configured to be longer or shorter than
  the default one week, or set to infinitely long. The cookie path can also
  be adjusted. (The `sessionCookieDurationS` and `sessionCookiePath`
  attributes in the GUI configuration.)

This release is also available as:

* APT repository: https://apt.syncthing.net/

* Docker image: `docker.io/syncthing/syncthing:2.1.2` or `ghcr.io/syncthing/syncthing:2.1.2`
  (`{docker,ghcr}.io/syncthing/syncthing:2` to follow just the major version)

## What's Changed
### Fixes
* fix: on Windows don't allocate console if not opened inside one by @Shablone in https://github.com/syncthing/syncthing/pull/10726
* fix(connections): do not report connection metrics for self (ref #10509) by @calmh in https://github.com/syncthing/syncthing/pull/10724
* fix: let umask do the thing by @calmh in https://github.com/syncthing/syncthing/pull/10723
* fix(fs, model): improve symlink resilience in file shortcut by @calmh in https://github.com/syncthing/syncthing/pull/10739
* fix(protocol): always expect & validate block hash in requests by @calmh in https://github.com/syncthing/syncthing/pull/10738
* fix(protocol): be more stringent about blocks in non-file entries by @calmh in https://github.com/syncthing/syncthing/pull/10737
* fix(protocol): loosen restriction on size of directory entries by @calmh in https://github.com/syncthing/syncthing/pull/10743
* fix(folder): check if context canceled when scanning (fixes #10363) by @henriksb1 in https://github.com/syncthing/syncthing/pull/10757
* fix(config): remove extraneous defaults setting while unmarshalling folder options (fixes #10746, fixes #10389) by @calmh in https://github.com/syncthing/syncthing/pull/10763
* fix(sqlite): update last migration to set schema version, counts by @calmh in https://github.com/syncthing/syncthing/pull/10768
### Other
* chore(syncthing): open URLs via Windows API instead via cmd.exe by @Shablone in https://github.com/syncthing/syncthing/pull/10712
* chore(db, model): separate methods to drop a device vs its files by @imsodin in https://github.com/syncthing/syncthing/pull/10480
* build(deps): update dependencies by @calmh in https://github.com/syncthing/syncthing/pull/10740
* build: use Go 1.26 for Windows as well by @calmh in https://github.com/syncthing/syncthing/pull/10744
* chore(osutil): fixup test for symlinked folder root by @calmh in https://github.com/syncthing/syncthing/pull/10758
* chore(model): increase default value for num hashers by @calmh in https://github.com/syncthing/syncthing/pull/10761
* chore: stop treating dirs as having size 128 by @imsodin in https://github.com/syncthing/syncthing/pull/10750
* chore(versioner): attempt to prevent blatantly unsafe external versioner commands (fixes #10721) by @calmh in https://github.com/syncthing/syncthing/pull/10722

## New Contributors
* @Shablone made their first contribution in https://github.com/syncthing/syncthing/pull/10712
* @henriksb1 made their first contribution in https://github.com/syncthing/syncthing/pull/10757

**Full Changelog**: https://github.com/syncthing/syncthing/compare/v2.1.1...v2.1.2