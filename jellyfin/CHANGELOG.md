# :rocket: Jellyfin Server 10.11.3

We are pleased to announce the latest stable release of Jellyfin, version 10.11.3! This minor release brings several bugfixes to improve your Jellyfin experience. As always, please ensure you take a full backup before upgrading!

You can find more details about and discuss this release [on our forums](https://forum.jellyfin.org/t-new-jellyfin-server-web-release-10-11-3).

## Changelog (25)

### 📈 General Changes
* Fix series DateLastMediaAdded not updating when new episodes are added [PR #15472], by @theguymadmax
* Fix movie titles using folder name when NFO saver is enabled [PR #15529], by @theguymadmax
* Fix tmdbid not detected in single movie folder [PR #14955], by @theguymadmax
* Fix font extraction for certain transcoding settings [PR #15502], by @Iksas
* Fix playlist DateCreated and DateLastMediaAdded not being set [PR #15508], by @theguymadmax
* Add 1 minute tolerance for NFO change detection [PR #15514], by @theguymadmax
* Remove InheritedTags and update tag filtering logic [PR #15493], by @theguymadmax
* Fix .ignore handling for directories [PR #15501], by @theguymadmax
* Fix gitignore-style not working properly on windows. [PR #15487], by @CBPJ
* Improve season folder parsing [PR #15404], by @theguymadmax
* Don't error out when searching for marker files fails [PR #15466], by @Bond-009
* Fix NullReferenceException in GetPathProtocol when path is null [PR #15462], by @theguymadmax
* Resolve symlinks for static media source infos [PR #15263], by @revam
* Check if target exists before trying to follow it [PR #15468], by @Bond-009
* Fix collection grouping in mixed libraries [PR #15373], by @theguymadmax
* Fix AncestorIds not migrating [PR #15446], by @theguymadmax
* Fix System.NullReferenceException when people's role is null (10.11.z) [PR #15441], by @IceStormNG
* Invalidate parent folder's cache on deletion/creation [PR #15423], by @theguymadmax
* Fix name filters to use only SortName [PR #15381], by @theguymadmax
* Don't enforce a minimum amount of free space for the tmp and log dirs [PR #15390], by @Bond-009
* Fixed missing sort argument [PR #15413], by @JPVenson
* Fix item count display for collapsed items [PR #15380], by @theguymadmax
* Update branding in Swagger page [PR #15422], by @nielsvanvelzen
* Fix search terms using diacritics [PR #15435], by @theguymadmax
* feat(sqlite): add timeout config [PR #15369], by @evanreichard