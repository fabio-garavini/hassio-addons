# :rocket: Jellyfin Server 10.11.4

We are pleased to announce the latest stable release of Jellyfin, version 10.11.4! This minor release brings several bugfixes to improve your Jellyfin experience. As always, please ensure you take a full backup before upgrading!

You can find more details about and discuss this release [on our forums](https://forum.jellyfin.org/t-new-jellyfin-server-web-release-10-11-4).

## Changelog (10)

### 📈 General Changes
* Fix ResolveLinkTarget crashing on exFAT drives [PR #15568], by @theguymadmax
* Cache OpenApi document generation [PR #15672], by @crobibero
* Revert "Localization/iso6392.txt: change pob and pop" [PR #15555], by @MBR-0001
* Add hidden file check in BdInfoDirectoryInfo.cs. [PR #15582], by @QuintonQu
* Fix isMovie filter logic [PR #15594], by @theguymadmax
* Fix locked fields not saving [PR #15564], by @theguymadmax
* Save item to database before providers run to prevent FK errors [PR #15563], by @theguymadmax
* Prevent copying HDR streams when only SDR is supported [PR #15556], by @gnattu
* Fix NullReferenceException in filesystem path comparison [PR #15548], by @theguymadmax
* Restrict first video frame probing to file protocol [PR #15557], by @gnattu