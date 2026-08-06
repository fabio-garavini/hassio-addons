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

* Docker image: `docker.io/syncthing/syncthing:2.1.3` or `ghcr.io/syncthing/syncthing:2.1.3`
  (`{docker,ghcr}.io/syncthing/syncthing:2` to follow just the major version)

## What's Changed
### Fixes
* fix(ignore, fs): allow loading ignore patterns behind symlink (fixes #10785) by @calmh in https://github.com/syncthing/syncthing/pull/10786
* fix: avoid warning on does-not-exist scan error (fixes #10465) by @calmh in https://github.com/syncthing/syncthing/pull/10791
* fix(strelaypoolsrv): locking correctness by @calmh in https://github.com/syncthing/syncthing/pull/10801
* fix(model): properly health-check up-to-date folders (fixes #10546) by @calmh in https://github.com/syncthing/syncthing/pull/10773
* fix(gui): fix expanding one folder not collapsing others in group by @tbodt in https://github.com/syncthing/syncthing/pull/10809
* fix(gui): add bottom margin to folder action buttons for wrapped spacing by @rohitanwar in https://github.com/syncthing/syncthing/pull/10728
* fix(upnp): guard against out of index string access by @calmh in https://github.com/syncthing/syncthing/pull/10834
* fix(ignore): handle pattern resulting in empty string by @calmh in https://github.com/syncthing/syncthing/pull/10835
* fix(versioner): handle invalid empty command by @calmh in https://github.com/syncthing/syncthing/pull/10836
* fix(api): handle empty path in static request by @calmh in https://github.com/syncthing/syncthing/pull/10837
* fix(db, model): better handle db connections, puller concurrency, avoid deadlock (fixes #10841) by @calmh in https://github.com/syncthing/syncthing/pull/10842
### Other
* chore(fs): use x/sys/windows where possible by @greatroar in https://github.com/syncthing/syncthing/pull/10766
* chore(model): simplify FileInfoBatch size computation by @calmh in https://github.com/syncthing/syncthing/pull/10776
* build: allow inotify on Android amd64 (ref #8710) by @chenxiaolong in https://github.com/syncthing/syncthing/pull/10783
* chore: fix a couple of unclosed http connections by @calmh in https://github.com/syncthing/syncthing/pull/10806
* chore(gui): lazy-render collapsed panels to reduce watcher count by @Finomosec in https://github.com/syncthing/syncthing/pull/10772
* build(deps): update dependencies by @calmh in https://github.com/syncthing/syncthing/pull/10824
* chore: new code contribution guidelines by @calmh in https://github.com/syncthing/syncthing/pull/10821
* chore: remove ignore file caching entirely by @calmh in https://github.com/syncthing/syncthing/pull/10813
* chore: slightly optimise rename detection (ref #10777) by @calmh in https://github.com/syncthing/syncthing/pull/10819
* chore(gui): better describe when a pending folder/device notification will reappear by @tbodt in https://github.com/syncthing/syncthing/pull/10808
* chore: deflake TestRecvOnlyRevertNeeds by @calmh in https://github.com/syncthing/syncthing/pull/10827
* chore(model): don't check existing file twice in rename detection by @imsodin in https://github.com/syncthing/syncthing/pull/10833
* chore(fs): optimise casefs caching performance by @calmh in https://github.com/syncthing/syncthing/pull/10830
* chore(model): optimise fsync calls by @calmh in https://github.com/syncthing/syncthing/pull/10831
* chore(syncthing): include local db entries in perfstats by @calmh in https://github.com/syncthing/syncthing/pull/10839

## New Contributors
* @chenxiaolong made their first contribution in https://github.com/syncthing/syncthing/pull/10783
* @Finomosec made their first contribution in https://github.com/syncthing/syncthing/pull/10772
* @tbodt made their first contribution in https://github.com/syncthing/syncthing/pull/10809
* @rohitanwar made their first contribution in https://github.com/syncthing/syncthing/pull/10728

**Full Changelog**: https://github.com/syncthing/syncthing/compare/v2.1.2...v2.1.3