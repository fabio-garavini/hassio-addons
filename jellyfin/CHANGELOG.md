# :rocket: Jellyfin Server 12.1

We are pleased to announce the latest stable release of Jellyfin, version 12.1! This minor release brings several bugfixes to improve your Jellyfin experience. As always, please ensure you take a full backup before upgrading!

Discuss this release further [on our forums](https://forum.jellyfin.org/t-new-jellyfin-server-web-release-12-1).

## Changelog (47)

### 📈 General Changes
* Stop resolving items with every field where only stored columns are read [PR #18039], by @Shadowghost
* Fix nested unnumbered season folders collapsing onto the first one [PR #18044], by @Shadowghost
* Release a folder's children once its subtree has been scanned [PR #17884], by @Shadowghost
* Enforce channel mediasource id [PR #18037], by @Shadowghost
* Fix Norwegian ratings [PR #18017], by @theguymadmax
* Stop the library monitor from refreshing against a disposed host [PR #18020], by @Shadowghost
* Don't queue by-name items for playback and reject source requests for them [PR #17999], by @Shadowghost
* Fix forced-only not overriding remembered subtitles [PR #17998], by @Shadowghost
* Fix SyncPlay authentication error handling and limit group member wait time [PR #17938], by @Shadowghost
* Fix /UserViews exhausting memory and reporting random child counts [PR #17881], by @Shadowghost
* Fix device access revocation not logging out existing sessions [PR #18026], by @fmarcac
* Fix database optimization memory use and pre-migration backup integrity [PR #17836], by @Shadowghost
* Stop wrong-type alternate version cleanup from recursing [PR #18030], by @Shadowghost
* Fix incorrect color range during CSC after VK tonemapping [PR #18025], by @nyanmisaka
* Preserve active scans when requesting a background library refresh [PR #18006], by @orut34iop
* Clean up orphaned people when deleting items [PR #17897], by @nintwentydo
* Check Live TV access for a single user instead of enumerating all users [PR #18003], by @Shadowghost
* Fix slashed rating handling [PR #18002], by @Shadowghost
* Skip empty ZIP comments for ComicBookInfo [PR #17971], by @Shadowghost
* Fix EPG issues [PR #17935], by @Shadowghost
* Avoid full people scans and writes for unchanged credits [PR #18004], by @orut34iop
* Clean up invalid data before running migrations [PR #17835], by @Shadowghost
* Restore [JsonIgnore] on AggregateFolder.Children [PR #18011], by @Shadowghost
* Correct SyncPlay sessions that report playback at a stale position [PR #17797], by @fmarcac
* Don't let a torn-down WebSocket take down the request handler [PR #17958], by @Shadowghost
* Fix SimilarItemsManager concurrency [PR #17982], by @Shadowghost
* Delete the full ownership closure when deleting items [PR #17873], by @Shadowghost
* Fix versions of a video still listing separately from their group and preserve manual merges [PR #17842], by @Shadowghost
* Preserve library items when directory enumeration fails [PR #18007], by @orut34iop
* Don't resample or sharpen images Skia isn't actually resizing [PR #17956], by @Shadowghost
* Drop dead item data and fix query ordering and bound parameters [PR #17980], by @Shadowghost
* Stop requesting unused credits when looking up a TMDb person [PR #17973], by @Shadowghost
* Use thumbs for image tmdb image preview [PR #17924], by @enter-a-random-username
* Fix playlist encoding recognition [PR #17930], by @Shadowghost
* Populate missing tags array in Filters2 [PR #17898], by @Shadowghost
* Fix collection creation when the collections library was just added [PR #17950], by @Shadowghost
* Don't record a failed refresh as a completed one [PR #17947], by @Shadowghost
* Fix Italian ratings [PR #17933], by @Shadowghost
* Fix ContainsSubPath check [PR #17929], by @Shadowghost
* Fix trickplay using the wrong video stream [PR #17883], by @crobibero
* Fix metadata provider order needing a restart to apply [PR #17939], by @Shadowghost
* Fix decimal point handling in version names [PR #17931], by @Shadowghost
* Improve SeriesNameRegex [PR #17858], by @Shadowghost
* Report image resolutions for TMDb images when no image size is configured [PR #17859], by @Shadowghost
* Fix transcode throttling not enabling on supported systems (caused by race condition) [PR #17906], by @SimonvBez
* Only group episodes as versions on a confident path parse [PR #17890], by @Shadowghost
* Match parental ratings case-insensitively [PR #17844], by @Jellyfrog