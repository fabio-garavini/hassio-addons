# v1.140.0

## Highlights

Welcome to the release `v1.140.0` of Immich, one more release, and one more day closer to 🐴 Stable-Day 🐴. This release continues the ramp-up effort to bring the beta timeline up to the same feature parity as the old one, while also addressing as many bugs as possible. Thanks to our active contributors, some cool features also made their way into this release. We encourage all Immich users to switch to the beta timeline and use it to help us identify and resolve issues. Let’s dive into the highlights of this release.

* \[beta\] Background sync
* \[beta\] Read-only mode
* Location management utility

### \[beta\] Background sync

The background sync feature has now been added to the beta timeline. New assets are now detected and pushed to an upload queue, which will be handled automatically by the OS. 

Some tasks, such as local and remote data sync, now also run in the background periodically. So that, as soon as you open the app, the newly taken assets are immediately available on the timeline.

**For those who have been using the beta timeline, please toggle the upload button off then on again to enable the background workers.**

### **\[beta\] Read-only mode**

For parents who have kids who want to look over photos but don’t want them to accidentally delete or perform any action on them, this feature is for you. By double-tapping on the profile photo in the app, you can only view assets in the main timeline, and all the action buttons will be hidden. Thanks, @Sud-Puth, for proposing and initiating work on this nifty feature!


<img width="200" alt="image" src="https://github.com/user-attachments/assets/95c1dd1b-9dde-43a5-998d-3d974fe4e279" />

### Location management utility

Thanks to @Johannbr for putting in time and effort into this feature. You can now find and edit missing location data on a specific date. By going to `Utilities > Manage location` on the web, you will be presented with an interface to select the date to find the assets with missing GPS location and to update them in bulk

<img width="800" alt="image" src="https://github.com/user-attachments/assets/add62194-c88b-4a8b-82ee-36586c49591d" />


<img width="800" alt="image" src="https://github.com/user-attachments/assets/8b49b418-26e8-4877-9084-80ef851a6960" />

## Support Immich


<p align="center">

<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjY2eWc5Y2F0ZW56MmR4aWE0dDhzZXlidXRmYWZyajl1bWZidXZpcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/87CKDqErVfMqY/giphy.gif" width="450" title="SUPPORT THE PROJECT!"> 

</p>

If you find the project helpful, you can support Immich by purchasing a product key at https://buy.immich.app or our merchandise at https://immich.store


## What's Changed

### 🚀 Features

* feat: beta background sync by @shenlong-tanwen in <https://github.com/immich-app/immich/pull/21243>
* feat(web): geolocation utility by @Johannbr in <https://github.com/immich-app/immich/pull/20758>
* feat(mobile): read only mode by @Sud-Puth and @bwees in <https://github.com/immich-app/immich/pull/19368>

### 🌟 Enhancements

* feat: add support for custom headers to TS SDK by @LukeHagar in <https://github.com/immich-app/immich/pull/21205>
* feat: expose createdAt in getAssetInfo by @Wingysam in <https://github.com/immich-app/immich/pull/21184>
* feat(web): Refresh album page after sharing by @Snowknight26 in <https://github.com/immich-app/immich/pull/21283>
* feat(web): Album picker shortcut info by @xCJPECKOVERx in <https://github.com/immich-app/immich/pull/21273>

### 🐛 Bug fixes

* fix: devcontainer after pnpm changes by @midzelis in <https://github.com/immich-app/immich/pull/21227>
* fix(web): Album multi-select 'm' shortcut prevents typing m in title box by @xCJPECKOVERx in <https://github.com/immich-app/immich/pull/21249>
* refactor: service worker by @jrasm91 in <https://github.com/immich-app/immich/pull/21250>
* fix(web): allow numeric input fields to be zero by @jrasm91 in <https://github.com/immich-app/immich/pull/21258>
* fix(web): Duplicate arrow shortcuts go to next/previous duplicate when viewing assets by @xCJPECKOVERx in <https://github.com/immich-app/immich/pull/21200>
* fix(web): handle multiple downloads in safari by @jrasm91 in <https://github.com/immich-app/immich/pull/21259>
* fix: album start/end dates on shared links by @jrasm91 in <https://github.com/immich-app/immich/pull/21268>
* fix: prevent an offline asset from being used as a person feature photo by @jrasm91 in <https://github.com/immich-app/immich/pull/21278>
* fix(web): suppress auto-play errors by @jrasm91 in <https://github.com/immich-app/immich/pull/21282>
* fix(mobile): caching thumbnails to disk by @mertalev in <https://github.com/immich-app/immich/pull/21275>
* fix(mobile): skip animation for offscreen thumbnails by @mertalev in <https://github.com/immich-app/immich/pull/21277>
* fix: invalid storage quota with decimals by @jrasm91 in <https://github.com/immich-app/immich/pull/21271>
* fix(mobile): user storage quota not showing by @YarosMallorca in <https://github.com/immich-app/immich/pull/21263>
* fix(web): album multi-select filter doesn't include other selected albums by @xCJPECKOVERx in <https://github.com/immich-app/immich/pull/21322>
* fix(mobile): capitalize month & day labels in beta timeline by @YarosMallorca in <https://github.com/immich-app/immich/pull/21323>
* fix: timeline scroll error handling by @jrasm91 in <https://github.com/immich-app/immich/pull/21324>
* fix(web): sign up double click by @jrasm91 in <https://github.com/immich-app/immich/pull/21349>
* fix: motion video extraction race condition by @jrasm91 in <https://github.com/immich-app/immich/pull/21285>
* fix(web): add primary text color to file upload toast by @Prajwalg19 in <https://github.com/immich-app/immich/pull/21340>
* fix(mobile): thumbnail requests not being cancelled by @mertalev in <https://github.com/immich-app/immich/pull/21331>
* fix(mobile): memory lane rebuild by @mertalev in <https://github.com/immich-app/immich/pull/21350>
* fix(mobile): fast animations when "disable animations" enabled by @YarosMallorca in <https://github.com/immich-app/immich/pull/21309>
* fix(web): middle click not working on videos by @YarosMallorca in <https://github.com/immich-app/immich/pull/21304>
* fix(mobile): allow gestures in asset viewer before image is loaded by @mertalev in <https://github.com/immich-app/immich/pull/21354>
* fix(web): Slideshow fade occurs when not in slideshow by @xCJPECKOVERx in <https://github.com/immich-app/immich/pull/21326>

### 📚 Documentation

* docs: update italian README: better wording, add some important sections, fixed links and alt texts by @gablilli in <https://github.com/immich-app/immich/pull/21221>
* fix: docs typo by @jrasm91 in <https://github.com/immich-app/immich/pull/21269>
* chore: faq commercial guidelines by @alextran1502 in <https://github.com/immich-app/immich/pull/21320>

### 🌐 Translations

* fix(web): Translate confirmation modal header and action buttons by @Snowknight26 in <https://github.com/immich-app/immich/pull/21330>

## New Contributors

* @gablilli made their first contribution in <https://github.com/immich-app/immich/pull/21221>
* @LukeHagar made their first contribution in <https://github.com/immich-app/immich/pull/21205>
* @Prajwalg19 made their first contribution in <https://github.com/immich-app/immich/pull/21340>
* @Johannbr made their first contribution in <https://github.com/immich-app/immich/pull/20758>
* @Sud-Puth made their first contribution in <https://github.com/immich-app/immich/pull/19368>

**Full Changelog**: <https://github.com/immich-app/immich/compare/v1.139.4...v1.140.0>