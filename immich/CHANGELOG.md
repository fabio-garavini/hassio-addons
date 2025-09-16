# v1.142.1

_Hey guys, Alex here._ 

_Sorry about the rocky release of version `v1.142.0`. Instead of giving you guys a better experience with the timeline, a mistake in the migration flow code that I wrote put the app into an erroneous state that makes it seem like the new timeline isn't working at all, and the only way to fix that was to log out and log back in manually. For that, I personally apologize for the inconvenience and the frustration that I caused over the weekend. This patch release addresses those issues and some other bugs that were reported over the weekend. If you have problems, please don't hesitate to reach out to me or the team on Discord or GitHub_

_Alex_

- - - - 

In release `v1.142.0`, during the migration from the old timeline to the new one on the mobile app, the sync checkpoint isn't getting reset, leading to the data not being pulled from the server. During the development of the new timeline, while on the old timeline, the sync endpoint might have been triggered at some points. The missing sync information creates a perception of data loss and mismatched sync information for the mobile app. This release reset the sync checkpoints so that they can be pulled down correctly for everyone.

> [!TIP]
> For the new timeline to pull the correct information, please consider updating your server to the latest version. We have seen reports that the timeline isn't working because it was connecting to an older version of the server

This patch release also addresses the reliability of background sync on Android. We suggest that you don't swipe away to dismiss the app, but keep it in the background; this will prevent the background worker from being terminated by the OS. Further optimization of the background worker's operation when the app is dismissed will be implemented in the next few days, pending additional testing.


## What's Changed
### 🐛 Bug fixes
* fix: format point count numbers on map view by @stewx in https://github.com/immich-app/immich/pull/21848
* chore: improve context button accessibility by @stewx in https://github.com/immich-app/immich/pull/21876
* fix: z-index of top bar on show/hide people view by @stewx in https://github.com/immich-app/immich/pull/21847
* fix: keep adequate space around page title by @stewx in https://github.com/immich-app/immich/pull/21881
* chore: improve date text slide-in transition by @stewx in https://github.com/immich-app/immich/pull/21879
* fix: context menu jank  by @stewx in https://github.com/immich-app/immich/pull/21844
* fix: do not show stack action if there is only one selection by @shenlong-tanwen in https://github.com/immich-app/immich/pull/21868
* fix: show view in timeline from search page by @shenlong-tanwen in https://github.com/immich-app/immich/pull/21873
* fix(mobile): double hero animation by @mertalev in https://github.com/immich-app/immich/pull/21927
* fix: complete does not destroy engine on close by @shenlong-tanwen in https://github.com/immich-app/immich/pull/21943
* feat: disable snapping when a timeline has less than 12 months by @bwees in https://github.com/immich-app/immich/pull/21649
* fix: do not listen for store updates in isolates by @shenlong-tanwen in https://github.com/immich-app/immich/pull/21947
* fix: check if preferencesStore is defined by @piscis in https://github.com/immich-app/immich/pull/21958
* fix: reset sqlite on beta migration by @shenlong-tanwen in https://github.com/immich-app/immich/pull/20735
* fix: move startInitialization to inside the doWork method by @shenlong-tanwen in https://github.com/immich-app/immich/pull/21984
* chore: making order of background tasks better by @alextran1502 in https://github.com/immich-app/immich/pull/21928
* chore(mobile): minor changes to bottom sheet by @YarosMallorca in https://github.com/immich-app/immich/pull/22008

## New Contributors
* @stewx made their first contribution in https://github.com/immich-app/immich/pull/21848
* @piscis made their first contribution in https://github.com/immich-app/immich/pull/21958

**Full Changelog**: https://github.com/immich-app/immich/compare/v1.142.0...v1.142.1