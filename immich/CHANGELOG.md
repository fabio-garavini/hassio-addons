# v2.6.2

This release addresses the following issues

- Fixed a bug where the shared link would error out when public users upload to the shared link
- Fixed a bug where the URL switching feature doesn't work with external URLs
- Fixed a bug where the "add to album" selection box on the web doesn't include albums that are shared with the user
- Fixed several issues regarding the search filter on the mobile app and the web


<!-- Release notes generated using configuration in .github/release.yml at v2.6.2 -->

## What's Changed
### 🐛 Bug fixes
* fix(mobile): simplified chinese not available by @YarosMallorca in https://github.com/immich-app/immich/pull/27066
* fix(web): allow showing combobox items outside modals by @michelheusschen in https://github.com/immich-app/immich/pull/27075
* fix(web): preserve album scroll when adding to other albums by @michelheusschen in https://github.com/immich-app/immich/pull/27078
* fix(server): queue version check job when config changed by @uhthomas in https://github.com/immich-app/immich/pull/27094
* fix: shared link add to album by @jrasm91 in https://github.com/immich-app/immich/pull/27063
* fix: svelte reactivity issues by @danieldietzler in https://github.com/immich-app/immich/pull/27109
* fix(mobile): cronet image cache clearing on android by @LeLunZ in https://github.com/immich-app/immich/pull/27054
* fix(mobile): view similar photos from search by @YarosMallorca in https://github.com/immich-app/immich/pull/27149
* fix(mobile): no results before applying filter by @YarosMallorca in https://github.com/immich-app/immich/pull/27155
* fix(mobile): star rating always defaults to 0 by @YarosMallorca in https://github.com/immich-app/immich/pull/27157
* fix: download original stale cache when edited by @danieldietzler in https://github.com/immich-app/immich/pull/27195
* fix(web): restore duplicate viewer arrow key navigation by @michelheusschen in https://github.com/immich-app/immich/pull/27176
* fix(web): update upload summary when removing items (#27035) by @Nicolas-micuda-becker in https://github.com/immich-app/immich/pull/27139
* fix(mobile): option padding on search dropdowns by @YarosMallorca in https://github.com/immich-app/immich/pull/27154
* fix(mobile): add keys to people list by @YarosMallorca in https://github.com/immich-app/immich/pull/27112
* fix(mobile): add cookie for auxiliary url by @mertalev in https://github.com/immich-app/immich/pull/27209
* fix: album picker show all albums by @danieldietzler in https://github.com/immich-app/immich/pull/27211
* fix(server): album permissions for editors by @YarosMallorca in https://github.com/immich-app/immich/pull/27214
* fix(mobile/web): album cover buttons consistency by @YarosMallorca in https://github.com/immich-app/immich/pull/27213
### 📚 Documentation
* fix(docs): clarify ML CPU architecture by @mmomjian in https://github.com/immich-app/immich/pull/27187

## New Contributors
* @Nicolas-micuda-becker made their first contribution in https://github.com/immich-app/immich/pull/27139

**Full Changelog**: https://github.com/immich-app/immich/compare/v2.6.1...v2.6.2