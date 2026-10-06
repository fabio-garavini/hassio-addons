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

* Docker image: `docker.io/syncthing/syncthing:2.1.6` or `ghcr.io/syncthing/syncthing:2.1.6`
  (`{docker,ghcr}.io/syncthing/syncthing:2` to follow just the major version)

## What's Changed
### Fixes
* fix(model): introducers should not be able to add themselves to folders by @calmh in https://github.com/syncthing/syncthing/pull/10880
* fix(gui): add accessible labels to buttons in Edit Device modal (fixes #10873) by @tomasz1986 in https://github.com/syncthing/syncthing/pull/10874
* fix(model): properly error out when a temp file can't be created by @calmh in https://github.com/syncthing/syncthing/pull/10883
* fix: disable keepalive on most outgoing HTTP connections by @calmh in https://github.com/syncthing/syncthing/pull/10891
* fix(monitor): continue log writes when stdout is unavailable on detached Windows consoles (fixes #10882) by @Shablone in https://github.com/syncthing/syncthing/pull/10889
* fix(gui): improve header and button color contrast (fixes #10488) by @giri256 in https://github.com/syncthing/syncthing/pull/10815
* fix: use global short lived HTTP client with proper HTTP/2 support by @calmh in https://github.com/syncthing/syncthing/pull/10901
* fix: remove unnecessary delay in index transmission by @calmh in https://github.com/syncthing/syncthing/pull/10908
* fix(watchaggregator): properly convert floating-point time duration (fixes #10899) by @calmh in https://github.com/syncthing/syncthing/pull/10900

## New Contributors
* @giri256 made their first contribution in https://github.com/syncthing/syncthing/pull/10815

**Full Changelog**: https://github.com/syncthing/syncthing/compare/v2.1.5...v2.1.6