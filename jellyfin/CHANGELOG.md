# :rocket: Jellyfin Server 10.11.2

We are pleased to announce the latest stable release of Jellyfin, version 10.11.2! This minor release brings several bugfixes to improve your Jellyfin experience. As always, please ensure you take a full backup before upgrading!

You can find more details about and discuss this release [on our forums](https://forum.jellyfin.org/t-new-jellyfin-server-web-release-10-11-2).

## Changelog (6)

### 🔒 Security
* Update password reset to always return the same response structure [PR #15254], by @thornbill
### 📈 General Changes
* Fix legacy migration file checks [PR #15322], by @crobibero
* Update file size when refreshing metadata [PR #15325], by @vinnyspb
* Skip too large extracted season numbers [PR #15326], by @Shadowghost
* fix: in optimistic locking, key off table is locked [PR #15328], by @evanreichard
* Ignore initial delay in audio-only containers [PR #15247], by @nyanmisaka