# :rocket: Jellyfin Server 10.11.6

We are pleased to announce the latest stable release of Jellyfin, version 10.11.6! This minor release brings several bugfixes to improve your Jellyfin experience. As always, please ensure you take a full backup before upgrading!

You can find more details about and discuss this release [on our forums](https://forum.jellyfin.org/t-new-jellyfin-server-web-release-10-11-6).

## Changelog (20)

### 📈 General Changes
* Prioritize better matches on search [PR #15983], by @Shadowghost
* Fix artist display order [PR #15816], by @theguymadmax
* Restore weekly refresh for library folder images [PR #16046], by @theguymadmax
* Be more strict about PersonType assignment [PR #15872], by @Shadowghost
* Fix birthplace not saving correctly [PR #16020], by @theguymadmax
* Trim music artist names [PR #15808], by @theguymadmax
* Add mblink creation logic to library update endpoint. [PR #15965], by @Collin-Swish
* Fix watched state not kept on Media replace/rename [PR #15899], by @MarcoCoreDuo
* Skip hidden directories and .ignore paths in library monitoring [PR #16029], by @theguymadmax
* Revert "always sort season by index number" [PR #15950], by @theguymadmax
* Fix crash when plugin repository has an invalid URL [PR #15961], by @theguymadmax
* Fix tag inheritance for Continue Watching queries [PR #15931], by @theguymadmax
* Fix playlist item de-duplication [PR #15858], by @Collin-Swish
* Prefer US rating on fallback [PR #15793], by @Shadowghost
* Fix missing H.264 and AV1 SDR fallbacks in HLS playlist [PR #15833], by @nyanmisaka
* add CultureDto cache [PR #15826], by @cvium
* Fix the use of HWA in unsupported H.264 Hi422P/Hi444PP [PR #15819], by @nyanmisaka
* Enforce more strict webm check [PR #15807], by @gnattu
* Fix video lacking SAR and DAR are marked as anamorphic [PR #15834], by @nyanmisaka
* Use hvc1 codectag for Dolby Vision 8.4 [PR #15835], by @gnattu