# :rocket: Jellyfin Server 12.3

We are pleased to announce the latest stable release of Jellyfin, version 12.3! This minor release brings several bugfixes to improve your Jellyfin experience. As always, please ensure you take a full backup before upgrading!

Discuss this release further [on our forums](https://forum.jellyfin.org/t-new-jellyfin-server-web-release-12-3).

## Changelog (7)

### 🏗️  Enhancements
* Suppresses useless warnings [PR #18337], by @thedreaddpirate
### 📈 General Changes
* Do not store ratings or gains that are not finite numbers [PR #18267], by @martimarkov
* Fix unbalanced parenthesis in the HalfTopAndBottom image extraction filter [PR #18325], by @cinadr
* Update Microsoft [PR #18418], by @Bond-009
* Treat a year off by one as a tie in TMDb result ranking [PR #18343], by @HaraldNordgren
* Fix crash when a subtitle charset has no .NET encoding [PR #18309], by @p27ZuH6CNAdzr
* Fix crash probing streams without frame size [PR #18243], by @myristate