# v2.5.2

_`v2.5.1` has been sacrificed for the release God, so the Android app can now be released_


> [!NOTE]
> This version of the mobile app will pull down some data from the server to fix the incorrect data in the mobile app local database, so you will see the sync icon running for a little bit

## Hotfixes

- Fixed a bug where the video aspect ratio is played incorrectly for the remote asset
- Fixed a bug where memory generation failed
- Fixed a bug where memories don't show on the web until the page is refreshed
- Fixed a bug where the `Load original image` option doesn't render the image on iOS


## What's Changed
### 🐛 Bug fixes
* fix: deleting asset from asset-viewer on search results by @midzelis in https://github.com/immich-app/immich/pull/25596
* fix: escape handling in search asset viewer by @danieldietzler in https://github.com/immich-app/immich/pull/25621
* fix: correctly show owner in album options modal by @danieldietzler in https://github.com/immich-app/immich/pull/25618
* fix(server): don't assume maintenance action is set by @insertish in https://github.com/immich-app/immich/pull/25622
* fix: album card ranges by @danieldietzler in https://github.com/immich-app/immich/pull/25639
* fix(mobile): show controls by default on motion photos by @goalie2002 in https://github.com/immich-app/immich/pull/25638
* fix: escape handling by @danieldietzler in https://github.com/immich-app/immich/pull/25627
* fix(mobile): set correct system-ui mode on asset viewer init by @goalie2002 in https://github.com/immich-app/immich/pull/25610
* fix(mobile): actually load original image by @mertalev in https://github.com/immich-app/immich/pull/25646
* fix: width and height migration issue by @alextran1502 in https://github.com/immich-app/immich/pull/25643
* fix: memory lane by @jrasm91 in https://github.com/immich-app/immich/pull/25652
* fix: memory generation by @jrasm91 in https://github.com/immich-app/immich/pull/25650
* fix(mobile): tall image scrolling by @ByteSizedMarius in https://github.com/immich-app/immich/pull/25649


**Full Changelog**: https://github.com/immich-app/immich/compare/v2.5.0...v2.5.2