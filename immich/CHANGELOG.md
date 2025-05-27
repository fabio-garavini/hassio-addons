# v1.134.0

Welcome to release `v1.134.0` of Immich. This release focuses on bug fixes and enhancements from the previous release. Please find some of the highlights below:

- Adds a new API endpoint to check the application version status
- Adds a mechanism to handle startup reindexing after a failed model change
- Improves pinch-to-zoom action on the mobile app
- Replaces the administration user edit button with the action button to go straight to the user's detail page
- Fixes a bug where generated memories include locked assets
- Fixes a bug where the search filter panel anchors to the top of the page instead of the viewport
- Fixes a bug where `ctrl/cmd + click` doesn't open the photo on a new page 
- Fixes various minor issues related to styling and z-index


## Support Immich

<p align=\"center\">

<img src=\"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjY2eWc5Y2F0ZW56MmR4aWE0dDhzZXlidXRmYWZyajl1bWZidXZpcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/87CKDqErVfMqY/giphy.gif\" width=\"450\" title=\"SUPPORT THE PROJECT!\"> 

</p>

<!-- Release notes generated using configuration in .github/release.yml at v1.134.0 -->

## What's Changed
### 🌟 Enhancements
* fix(web): enhance face tagging confirmation and fix #18605 by @dvbthien in https://github.com/immich-app/immich/pull/18610
* feat: version check endpoint by @danieldietzler in https://github.com/immich-app/immich/pull/18572
### 🐛 Bug fixes
* feat: clean up memory with locked assets by @alextran1502 in https://github.com/immich-app/immich/pull/18532
* fix: more z-index issue by @alextran1502 in https://github.com/immich-app/immich/pull/18598
* fix(mobile): pinch to zoom + move acceleration by @toamz in https://github.com/immich-app/immich/pull/18569
* fix(web): center memory lane buttons by @lukashass in https://github.com/immich-app/immich/pull/18613
* fix(web): modal anchor by @alextran1502 in https://github.com/immich-app/immich/pull/18621
* fix: meta+click on thumbnail by @alextran1502 in https://github.com/immich-app/immich/pull/18648
* fix: use single bulkTagAssets call instead of loop by @bo0tzz in https://github.com/immich-app/immich/pull/18672
* fix(server): reverse isTrash field by @wuzihao051119 in https://github.com/immich-app/immich/pull/18665
* fix(web): move support & feedback button to user modal by @bwees in https://github.com/immich-app/immich/pull/18651
* fix(server): handle period in database name by @mertalev in https://github.com/immich-app/immich/pull/18590
* fix(web): handle nullable assets duration by @alextran1502 in https://github.com/immich-app/immich/pull/18679
* fix: replace edit user button with view button for user details screen by @zackpollard in https://github.com/immich-app/immich/pull/18683
* fix(web): update after permanently delete by @wuzihao051119 in https://github.com/immich-app/immich/pull/18684
* fix(server): handle startup reindexing after failed model change by @mertalev in https://github.com/immich-app/immich/pull/18688
### 🌐 Translations
* feat(mobile): add Estonian by @IndrekHaav in https://github.com/immich-app/immich/pull/18666

## New Contributors
* @toamz made their first contribution in https://github.com/immich-app/immich/pull/18569
* @arnonm made their first contribution in https://github.com/immich-app/immich/pull/18285
* @IndrekHaav made their first contribution in https://github.com/immich-app/immich/pull/18666

**Full Changelog**: https://github.com/immich-app/immich/compare/v1.133.1...v1.134.0"