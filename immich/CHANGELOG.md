# v1.138.0


> [!IMPORTANT]
>
> For users that are using the **beta timeline**, please update your server to `v1.138.0` so that the sync mechanism can work correctly. `v1.138.0` of the mobile app doesn’t sync the data correctly if your server is `v1.137.2` or below.

## Highlights

Welcome to the release `v1.138.0` of Immich, this release adds many bugfixes and brings the beta timeline closer to feature parity; thank you all for helping with testing and giving feedback. Please let us know if the release fixes the issues you are facing. Let’s dive into some of the highlights below

* Reset PIN code with password
* Reset the OAuth ID
* \\[beta\\] swipe to delete album
* \\[beta\\] improvement in the upload and sync process
* \\[beta\\] map view with SQLite


## Reset PIN code with password

In order to reset a forgotten PIN code, the admin user used to have to click the “Reset PIN code” button for the user. Now, users can reset their own PIN code by supplying their current password. 


Note: when password login is disabled, this option is unavailable.


Reset via password

<img width=\"400\" height=\"622\" alt=\"image\" src=\"https://github.com/user-attachments/assets/c274499d-38b1-4030-8918-a8ada9707824\" />


<img width=\"800\" height=\"753\" alt=\"image\" src=\"https://github.com/user-attachments/assets/66b9afb5-d738-4aff-abf2-01abd4b85962\" />


Reset via admin account

<img width=\"800\" height=\"321\" alt=\"image\" src=\"https://github.com/user-attachments/assets/6d1bb049-1620-459e-8b63-8735ec45d707\" />

<img width=\"800\" height=\"358\" alt=\"image\" src=\"https://github.com/user-attachments/assets/900236c7-7f0c-4d52-82a1-a937e87d6bf6\" />



## Reset OAuth ID

Immich stores some configuration in the database to keep track of which OAuth accounts are linked to which Immich users. When migrating to a new authentication system or provider, this configuration becomes invalid and can prevent the user from logging in with the new system. A button and accompanying reminder now exists in the OAuth settings to clear or reset this configuration for all users.

<img width=\"800\" height=\"498\" alt=\"image\" src=\"https://github.com/user-attachments/assets/e6fbdf1e-a81d-437e-9064-11fef4196ca7\" />

<img width=\"800\" height=\"507\" alt=\"image\" src=\"https://github.com/user-attachments/assets/bbc5300a-9f82-4431-98e5-df1b2df2f219\" />



<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed

### 🚨 Breaking Changes

* fix: album asset sync must sync new assets in a shared album by @zackpollard in <https://github.com/immich-app/immich/pull/20655>

### 🚀 Features

* feat(mobile): create shared link for albums by @bwees in <https://github.com/immich-app/immich/pull/20652>
* feat(mobile): remove from album in asset viewer bar by @bwees in <https://github.com/immich-app/immich/pull/20672>
* feat(mobile): album shared user editing by @bwees in <https://github.com/immich-app/immich/pull/20671>
* feat: use sqlite for logging by @bwees in <https://github.com/immich-app/immich/pull/20414>
* feat: batch change date and time relatively by @mkuehne707 in <https://github.com/immich-app/immich/pull/17717>
* feat(web): reset pin code by @jrasm91 in <https://github.com/immich-app/immich/pull/20766>
* feat: reset oauth ids by @jrasm91 in <https://github.com/immich-app/immich/pull/20798>
* feat: edit image in beta timeline by @bwees in <https://github.com/immich-app/immich/pull/20709>
* feat: swipe to delete album by @alextran1502 in <https://github.com/immich-app/immich/pull/20765>

### 🌟 Enhancements

* chore: tweak photo sphere fov and zoom speed constants by @kNoAPP in <https://github.com/immich-app/immich/pull/20595>
* feat: add server.versionCheck permission by @mib1185 in <https://github.com/immich-app/immich/pull/20555>
* refactor(mobile): sqlite-based map view by @mertalev in <https://github.com/immich-app/immich/pull/20665>
* chore(web): remove arbitrary search result limit by @uhthomas in <https://github.com/immich-app/immich/pull/20719>
* feat(web): don't scroll to visible assets by @uhthomas in <https://github.com/immich-app/immich/pull/20729>
* fix: change all download icons to `mdiDownload` for clarity and consistency by @NicholasFlamy in <https://github.com/immich-app/immich/pull/20821>
* feat: add i18n formatting to `make translation` in mobile makefile by @NicholasFlamy in <https://github.com/immich-app/immich/pull/20807>
* feat: format date and time in /admin/users/ -> Profile section by @miroslawlis in <https://github.com/immich-app/immich/pull/20811>

### 🐛 Bug fixes

* fix(mobile): use right translation function for pluralized ICU message format by @zigarn in <https://github.com/immich-app/immich/pull/20404>
* fix: add assets to album by @alextran1502 in <https://github.com/immich-app/immich/pull/20626>
* fix: hide navigation bar in search page during multi-selection by @shenlong-tanwen in <https://github.com/immich-app/immich/pull/20616>
* fix: adjust search bar padding and visibility based on input state by @wojtaszek171 in <https://github.com/immich-app/immich/pull/20598>
* fix(mobile): fetch serverConfig before building shared link by @bwees in <https://github.com/immich-app/immich/pull/20638>
* fix: exif rating rounding by @cford256 in <https://github.com/immich-app/immich/pull/20457>
* fix: improvements to sync and upload when resuming app by @zackpollard in <https://github.com/immich-app/immich/pull/20524>
* fix(mobile): cleanly handle logout when no host is set by @bwees in <https://github.com/immich-app/immich/pull/20521>
* fix: not clearing local data when logging out while sync is running by @bwees in <https://github.com/immich-app/immich/pull/20646>
* fix: adjust margin and gap for trailing elements in control app bar by @wojtaszek171 in <https://github.com/immich-app/immich/pull/20645>
* fix(mobile): use storageIndicator setting for beta timeline by @bwees in <https://github.com/immich-app/immich/pull/20639>
* fix(mobile): disable memory lane when memories are disabled by @bwees in <https://github.com/immich-app/immich/pull/20642>
* fix: expand sheet when album search is focused by @bwees in <https://github.com/immich-app/immich/pull/20651>
* fix: exclude assets that haven't been hashed yet from uploads by @shenlong-tanwen in <https://github.com/immich-app/immich/pull/20684>
* fix(mobile): use cached thumbnail in full size image provider by @mertalev in <https://github.com/immich-app/immich/pull/20637>
* feat(mobile): use custom headers when connecting in widget by @bwees in <https://github.com/immich-app/immich/pull/20666>
* fix: empty custom header prevent logging in by @alextran1502 in <https://github.com/immich-app/immich/pull/20693>
* fix: delete local asset show twice by @alextran1502 in <https://github.com/immich-app/immich/pull/20700>
* fix(mobile): filter people that have less than 3 faces by @bwees in <https://github.com/immich-app/immich/pull/20705>
* fix: shared link custom URL photo access authentication by @gaurav-yadav in <https://github.com/immich-app/immich/pull/20534>
* fix: custom-url ssr by @jrasm91 in <https://github.com/immich-app/immich/pull/20704>
* fix(mobile): show video controls when in locked view by @bwees in <https://github.com/immich-app/immich/pull/20707>
* fix: server version not fetched after auto login by @shenlong-tanwen in <https://github.com/immich-app/immich/pull/20713>
* fix: video thumbnail generation for short videos by @patrickgoering in <https://github.com/immich-app/immich/pull/20629>
* fix: disk info is cleared when profile picture is uploaded by @Lauritz-Tieste in <https://github.com/immich-app/immich/pull/20411>
* fix(web): use correct sliding window offset for search results by @uhthomas in <https://github.com/immich-app/immich/pull/20726>
* fix(web): prevent thumbhashes from covering search bar by @uhthomas in <https://github.com/immich-app/immich/pull/20720>
* fix(web): limit max height of search results by @uhthomas in <https://github.com/immich-app/immich/pull/20727>
* fix(mobile): person birthday viewing/editing by @bwees in <https://github.com/immich-app/immich/pull/20731>
* fix(web): shared-link autocomplete by @jrasm91 in <https://github.com/immich-app/immich/pull/20761>
* fix(web): fix layout loop with single row grids in explore page by @gabrielsoldani in <https://github.com/immich-app/immich/pull/20833>
* fix: age info cut off by @alextran1502 in <https://github.com/immich-app/immich/pull/20872>
* fix(mobile): newest/oldest album sort by @bwees in <https://github.com/immich-app/immich/pull/20743>
* fix: asset_viewer page viewing experience by @alextran1502 in <https://github.com/immich-app/immich/pull/20889>

### 📚 Documentation

* docs: update TrueNAS docs by @Xiticks in <https://github.com/immich-app/immich/pull/19990>
* docs: remove warning about the removed repair page by @aamirazad in <https://github.com/immich-app/immich/pull/20746>
* feat(docs): add `make dev-docs` by @NicholasFlamy in <https://github.com/immich-app/immich/pull/20572>
* docs: include openapi.json by @jrasm91 in <https://github.com/immich-app/immich/pull/20760>
* feat: more cursed knowledge by @jrasm91 in <https://github.com/immich-app/immich/pull/20794>
* docs: vectorchord migration instructions, deprecation log on startup by @mertalev in <https://github.com/immich-app/immich/pull/20867>

### 🌐 Translations

* fix(mobile): enable person age pluralization by @waclaw66 in <https://github.com/immich-app/immich/pull/20881>

## New Contributors

* @kNoAPP made their first contribution in <https://github.com/immich-app/immich/pull/20595>
* @wojtaszek171 made their first contribution in <https://github.com/immich-app/immich/pull/20598>
* @cford256 made their first contribution in <https://github.com/immich-app/immich/pull/20457>
* @mib1185 made their first contribution in <https://github.com/immich-app/immich/pull/20555>
* @gaurav-yadav made their first contribution in <https://github.com/immich-app/immich/pull/20534>
* @patrickgoering made their first contribution in <https://github.com/immich-app/immich/pull/20629>
* @Xiticks made their first contribution in <https://github.com/immich-app/immich/pull/19990>
* @ufizo made their first contribution in <https://github.com/immich-app/immich/pull/20538>
* @mkuehne707 made their first contribution in <https://github.com/immich-app/immich/pull/17717>
* @gabrielsoldani made their first contribution in <https://github.com/immich-app/immich/pull/20833>
* @miroslawlis made their first contribution in <https://github.com/immich-app/immich/pull/20811>

**Full Changelog**: <https://github.com/immich-app/immich/compare/v1.137.3...v1.138.0>