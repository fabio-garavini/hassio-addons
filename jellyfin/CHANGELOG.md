# :rocket: Jellyfin Server 10.11.9

We are pleased to announce the latest stable release of Jellyfin, version 10.11.9! This minor release brings several bugfixes to improve your Jellyfin experience. As always, please ensure you take a full backup before upgrading!

You can find more details about and discuss this release [on our forums](https://forum.jellyfin.org/t-new-jellyfin-server-web-release-10-11-9).

## Changelog (5)

### 📈 General Changes
* Fix rate control in av1_amf encoder [PR #16819], by @nyanmisaka
* Fix UserManager after EFcore refactor [PR #15368], by @JPVenson
* Update log for user session related concurrency update fails [PR #16845], by @JPVenson
* Allow HDR10 for VPP tonemapping [PR #16718], by @gnattu
* Use strict QSV CPB size for less powerful H.264 decoder [PR #16743], by @nyanmisaka