# v2.5.6

This patch release addresses the following issues

- Fixed an issue where thumbnail generation runs every night when `full-size image generation` option is enabled.
- Fixed an issue where iOS is slow to start in some cases.
- Fixed an issue where Android device cannot delete asset using Free Up Space feature if it has more than a few thousand assets



<!-- Release notes generated using configuration in .github/release.yml at v2.5.6 -->

### 🐛 Bug fixes
* fix: enhance album sorting functionality with order handling by @LeLunZ in https://github.com/immich-app/immich/pull/24816
* fix: add missing translations for image editor by @michelheusschen in https://github.com/immich-app/immich/pull/25957
* fix: image and video download complete notification shows "file_name" by @romoisverycool in https://github.com/immich-app/immich/pull/25975
* fix: user profile refetched each time on opening app dialog by @shenlong-tanwen in https://github.com/immich-app/immich/pull/25992
* fix: improve albums page load time on firefox by @michelheusschen in https://github.com/immich-app/immich/pull/26025
* fix: reduce queue graph jitter and include paused count by @michelheusschen in https://github.com/immich-app/immich/pull/26023
* fix(web): toast fixed location by @YarosMallorca in https://github.com/immich-app/immich/pull/25966
* fix: scroll jump when opening show & hide people by @michelheusschen in https://github.com/immich-app/immich/pull/25932
* fix(web): display storage unit next to value instead of absolute positioning in admin user page by @K0lin in https://github.com/immich-app/immich/pull/25985
* fix: iOS slow start by @alextran1502 in https://github.com/immich-app/immich/pull/26043
* fix: profile dialog auto dismiss after opening on iPad by @alextran1502 in https://github.com/immich-app/immich/pull/26046
* fix(web): prevent context menu from overflowing viewport by @ttpss930141011 in https://github.com/immich-app/immich/pull/26041
* fix: slideshow setting dropdown overflow by @michelheusschen in https://github.com/immich-app/immich/pull/26066
* fix: free up space using small batch size to reliably work on Android by @alextran1502 in https://github.com/immich-app/immich/pull/26047
* fix(web): removing a person in an asset, doesn't remove the asset in … by @dolfje in https://github.com/immich-app/immich/pull/26068
* fix(mobile): handle image stream completion when no image is emitted by @LeLunZ in https://github.com/immich-app/immich/pull/25984
* fix: evict image from cache on error during image loading by @LeLunZ in https://github.com/immich-app/immich/pull/26078
* fix(server): thumbnail queueing by @mertalev in https://github.com/immich-app/immich/pull/26077
* fix: create face exif orientation handling by @bwees in https://github.com/immich-app/immich/pull/26108
* fix(web): refresh text by @jrasm91 in https://github.com/immich-app/immich/pull/26071
* fix: correctly cancel select all assets by @michelheusschen in https://github.com/immich-app/immich/pull/26067
* fix: person thumbnail generation on edited assets by @bwees in https://github.com/immich-app/immich/pull/26112
* fix: local date time group fall back by @alextran1502 in https://github.com/immich-app/immich/pull/26110
### 📚 Documentation
* feat(docs): version policy by @mmomjian in https://github.com/immich-app/immich/pull/25979
* feat(deployment): rootless compose file  by @mmomjian in https://github.com/immich-app/immich/pull/25931
* docs: update ml-hardware-acceleration.md by @cmrtdev in https://github.com/immich-app/immich/pull/25755
### 🌐 Translations
* chore(web): update translations by @weblate in https://github.com/immich-app/immich/pull/25947

## New Contributors
* @ttpss930141011 made their first contribution in https://github.com/immich-app/immich/pull/26041
* @dolfje made their first contribution in https://github.com/immich-app/immich/pull/26068
* @cmrtdev made their first contribution in https://github.com/immich-app/immich/pull/25755
* @nicosemp made their first contribution in https://github.com/immich-app/immich/pull/25599

**Full Changelog**: https://github.com/immich-app/immich/compare/v2.5.5...v2.5.6