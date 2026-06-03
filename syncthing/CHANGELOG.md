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

* Docker image: `docker.io/syncthing/syncthing:2.1.1` or `ghcr.io/syncthing/syncthing:2.1.1`
  (`{docker,ghcr}.io/syncthing/syncthing:2` to follow just the major version)

## What's Changed
### Fixes
* fix(syncthing): properly upgrade via REST when Syncthing is running (fixes #10697) by @calmh in https://github.com/syncthing/syncthing/pull/10699
* fix(versioner): ensure user read/write/execute on archived dirs (fixes #10532) by @calmh in https://github.com/syncthing/syncthing/pull/10696
* fix(discover): only announce wildcard for TCP punching when listening on wildcard address (fixes #10503) by @calmh in https://github.com/syncthing/syncthing/pull/10691
* fix(stcrashreceiver): close source loader responses on errors by @mattn in https://github.com/syncthing/syncthing/pull/10704
* fix(protocol): handle zero-size requests (fixes #10709) by @calmh in https://github.com/syncthing/syncthing/pull/10710
### Other
* build: be explicit about workflow permissions by @calmh in https://github.com/syncthing/syncthing/pull/10690
* chore(syncthing): include runtime context in GC crashes by @calmh in https://github.com/syncthing/syncthing/pull/10702
* build(deps): x/net for govulncheck by @calmh in https://github.com/syncthing/syncthing/pull/10703
* chore: use path/filepath for local file system paths by @mattn in https://github.com/syncthing/syncthing/pull/10705

## New Contributors
* @mattn made their first contribution in https://github.com/syncthing/syncthing/pull/10704

**Full Changelog**: https://github.com/syncthing/syncthing/compare/v2.1.0...v2.1.1