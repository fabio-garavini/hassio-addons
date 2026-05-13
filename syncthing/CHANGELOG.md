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

* Docker image: `docker.io/syncthing/syncthing:2.1.0` or `ghcr.io/syncthing/syncthing:2.1.0`
  (`{docker,ghcr}.io/syncthing/syncthing:2` to follow just the major version)

## What's Changed
### Fixes
* fix(stdiscosrv): close file descriptor on flush error in write by @cuiweixie in https://github.com/syncthing/syncthing/pull/10615
* fix(gui): disable autocomplete for folder password by @bt90 in https://github.com/syncthing/syncthing/pull/10342
* fix(protocol): limit size of incoming request messages by @calmh in https://github.com/syncthing/syncthing/pull/10629
* fix(gui): don't show local device under remote devices (ref #10563) by @maen-bn in https://github.com/syncthing/syncthing/pull/10631
* fix(gui): order folders alphabetically and ensure local device stays hidden (ref #10563, ref #10631) by @maen-bn in https://github.com/syncthing/syncthing/pull/10637
* fix(gui): fallback to folder ID when label is empty in remove dialog by @RealCharlesChia in https://github.com/syncthing/syncthing/pull/10657
* fix(gui): fix tabs visually disabled but still clickable during ignore patterns setup (fixes #10634) by @JRNitre in https://github.com/syncthing/syncthing/pull/10651
* fix(strelaysrv): properly use bind address for outgoing requests (fixes #10658) by @calmh in https://github.com/syncthing/syncthing/pull/10659
* fix(stdiscosrv): only read certificate proxy headers with --http by @calmh in https://github.com/syncthing/syncthing/pull/10674
### Features
* feat(gui, config): support simple folder grouping (fixes #2070) by @maen-bn in https://github.com/syncthing/syncthing/pull/10563
* feat: make http session cookie path & duration configurable by @vvaswani in https://github.com/syncthing/syncthing/pull/10632
* feat(dialer): add HTTP/HTTPS proxy support via CONNECT by @luizluca in https://github.com/syncthing/syncthing/pull/10572
* feat: make block indexing configurable by @calmh in https://github.com/syncthing/syncthing/pull/10608
### Other
* chore: remove tracking inode change time by @calmh in https://github.com/syncthing/syncthing/pull/10579
* build(deps): temporarily switch to fork of gateway discovery library (fixes #10593) by @marbens-arch in https://github.com/syncthing/syncthing/pull/10594
* build: extract github.ref_name expression to env mapping by @dagecko in https://github.com/syncthing/syncthing/pull/10624
* build: pin 20 third-party actions to immutable commit SHAs by @dagecko in https://github.com/syncthing/syncthing/pull/10625
* build: have dependabot group PRs and use cooldown by @calmh in https://github.com/syncthing/syncthing/pull/10630
* chore: trivial fixes by @calmh in https://github.com/syncthing/syncthing/pull/10650
* chore(model): more efficient tracking of renames during scan by @calmh in https://github.com/syncthing/syncthing/pull/10653
* chore(model): deflake cluster config tests by @calmh in https://github.com/syncthing/syncthing/pull/10662
* chore(model): deflake TestCompletionEmptyGlobal by @calmh in https://github.com/syncthing/syncthing/pull/10663
* chore(scanner): deflake TestStopWalk by @calmh in https://github.com/syncthing/syncthing/pull/10664
* build: parallelise linux builds slightly by @calmh in https://github.com/syncthing/syncthing/pull/10666
* chore(api): deflake TestHTTPLogin on Windows by @calmh in https://github.com/syncthing/syncthing/pull/10667
* chore(api): use ldap package escape functions by @calmh in https://github.com/syncthing/syncthing/pull/10672
* build: only run the periodic build jobs in the syncthing org by @calmh in https://github.com/syncthing/syncthing/pull/10675
* build(deps): update dependencies by @calmh in https://github.com/syncthing/syncthing/pull/10683
* chore(model): slightly improve handling of pulling empty blocks by @calmh in https://github.com/syncthing/syncthing/pull/10679
* chore(gui): upgrade jQuery to 3.7.1 to fix CVE-2020-11022, CVE-2020-11023, CVE-2015-9251 by @Umer-Azaz in https://github.com/syncthing/syncthing/pull/10673
* chore(fs): remove unused SymlinksSupported() method by @calmh in https://github.com/syncthing/syncthing/pull/10684

## New Contributors
* @cuiweixie made their first contribution in https://github.com/syncthing/syncthing/pull/10615
* @dagecko made their first contribution in https://github.com/syncthing/syncthing/pull/10624
* @maen-bn made their first contribution in https://github.com/syncthing/syncthing/pull/10563
* @RealCharlesChia made their first contribution in https://github.com/syncthing/syncthing/pull/10657
* @JRNitre made their first contribution in https://github.com/syncthing/syncthing/pull/10651
* @vvaswani made their first contribution in https://github.com/syncthing/syncthing/pull/10632
* @luizluca made their first contribution in https://github.com/syncthing/syncthing/pull/10572
* @Umer-Azaz made their first contribution in https://github.com/syncthing/syncthing/pull/10673

**Full Changelog**: https://github.com/syncthing/syncthing/compare/v2.0.16...v2.1.0