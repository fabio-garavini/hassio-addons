# :rocket: Jellyfin Server 10.11.7

We are pleased to announce the latest stable release of Jellyfin, version 10.11.7! This minor release brings several bugfixes to improve your Jellyfin experience. As always, please ensure you take a full backup before upgrading!

**WARNING**: This release contains several **extremely important security fixes**. These vulnerabilities will be disclosed in **14 days** as per our security policy. Users of **all versions prior to 10.11.7 are advised to upgrade immediately**.

You can find more details about and discuss this release [on our forums](https://forum.jellyfin.org/t-new-jellyfin-server-web-release-10-11-7).

## Changelog (29)

### :lock: Security
* Fix for GHSA-j2hf-x4q5-47j3, by @Shadowghost 
* Fix for GHSA-8fw7-f233-ffr8, by @Shadowghost 
* Fix for GHSA-v2jv-54xj-h76w, by @Shadowghost 
* Fix for GHSA-jh22-fw8w-2v9x, by @Shadowghost 

### 📈 General Changes
* Fix CA1810 build error [PR #16522], by @Bond-009
* Fix Null was not checked before using the H264 profile [PR #16519], by @nyanmisaka
* Remove -copyts and add -flush_packets 1 to subtitle extraction [PR #16440], by @Molier
* Fix lint issue [PR #16514], by @theguymadmax
* Fix nullref ex in font handling [PR #16369], by @Bond-009
* Fix restore backup metadata location [PR #16425], by @theguymadmax
* Fix NFO saver using wrong provider ID for collectionnumber [PR #16449], by @theguymadmax
* Fix readrate options in FFmpeg 8.1 [PR #16423], by @nyanmisaka
* Apply analyzeduration and probesize for subtitle streams to improve codec parameter detection [PR #16293], by @IceStormNG
* Fix filter detection in FFmpeg 8.1 [PR #16392], by @nyanmisaka
* Fix subtitle extraction caching empty files [PR #16257], by @lowbit
* Fix hls segment length adjustment for remuxed content [PR #16341], by @crimsonspecter
* Fix broken library subtitle download settings [PR #16204], by @MBR-0001
* Checkpoint WAL before moving library.db in migration [PR #16253], by @theguymadmax
* Fix nullref in Season.GetEpisodes when the season is detached from a series [PR #16150], by @dfederm
* Reattach user data after item removal during library scan [PR #16227], by @dfederm
* Deduplicate provider IDs during MigrateLibraryDb migration [PR #16226], by @dfederm
* Skip image checks for empty folders [PR #16231], by @theguymadmax
* Fix TMDB image URLs missing size parameter [PR #16116], by @saltpi
* Fix random sort returning duplicate items [PR #16098], by @theguymadmax
* Fix SessionInfoWebSocketListener not using SessionInfoDto [PR #16109], by @nielsvanvelzen
* Fix HLS playlist generation for transcodes with fractional framerate [PR #16053], by @IceStormNG
* Rehydrate cached UserData after reattachment [PR #16071], by @MarcoCoreDuo
* Fix TMDB crew department mapping [PR #16066], by @theguymadmax
* Revert hidden directory ignore pattern [PR #16077], by @theguymadmax