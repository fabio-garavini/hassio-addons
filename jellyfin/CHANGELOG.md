# :rocket: Jellyfin Server 10.11.5

We are pleased to announce the latest stable release of Jellyfin, version 10.11.5! This minor release brings several bugfixes to improve your Jellyfin experience. As always, please ensure you take a full backup before upgrading!

You can find more details about and discuss this release [on our forums](https://forum.jellyfin.org/t-new-jellyfin-server-web-release-10-11-5).

## Changelog (17)

### 📈 General Changes
* Fix unnecessary database JOINs in ApplyNavigations [PR #15666], by @andrewrabert
* Skip invalid ignore rules [PR #15746], by @Shadowghost
* Fix backdrop images being deleted when stored with media [PR #15766], by @theguymadmax
* Fix NullReferenceException in ApplyOrder method [PR #15768], by @theguymadmax
* Fix AV1 decoding hang regression on RK3588 [PR #15776], by @nyanmisaka
* Fix collections display order [PR #15767], by @theguymadmax
* Fix parental rating filtering with sub-scores [PR #15786], by @theguymadmax
* Fix case sensitivity edge case [PR #15752], by @Collin-Swish
* Fix trickplay images using wrong item on alternate versions [PR #15757], by @theguymadmax
* Fix blocking in async context in LimitedConcurrencyLibraryScheduler [PR #15662], by @SapientGuardian
* Use original name for MusicAritist matching [PR #15689], by @gnattu
* Backport dependencies [PR #15723], by @Shadowghost
* Fix symlinked file size [PR #15681], by @ivanjx
* Fix ItemAdded event triggering when updating metadata [PR #15680], by @theguymadmax
* Fix: Add .ts fallback for video streams to prevent crash [PR #15690], by @martenumberto
* Fix stack overflow during scan (#15000) [PR #15698], by @myzhysz
* Fix the empty output of trickplay on RK3576 [PR #15670], by @nyanmisaka