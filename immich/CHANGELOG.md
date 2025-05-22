# v1.133.0 - The Hot Summer Release


> [!CAUTION]
> # BREAKING CHANGES
>
> 1. ## Mobile app version
>
>    Please make sure to have the mobile app and the server on the same version for this release. Older versions of the mobile app will not work correctly with version `v1.133.0` of the server. At the time of this release, the updated version of the mobile app should be available on the app stores.
>
>
> 2. ## Upgrading the server from a very old release
>
>    As of 1.133.0, Immich only supports upgrading directly from 1.107.2 or later. If you’re trying to upgrade a version of Immich below this, please upgrade to 1.107.2 first and ensure Immich starts up successfully before continuing to the latest release.
>
>
> 3. ## New database vector extension
>
>    We are migrating off the deprecated pgvecto.rs database extension to its successor [VectorChord](https://github.com/tensorchord/VectorChord), which comes with performance improvements in almost all aspects. This change is a major milestone we want to perform prior to the stable release.
>
>
> Before making any other changes, please **back up your addon**. While every effort has been made to make this migration as smooth as possible, there’s always a chance that something can go wrong.


You can start Immich as normal. Immich will make some changes to the DB during startup, which can take seconds to minutes to finish, depending on hardware and library size. In particular, it’s normal for the server logs to be seemingly stuck at `Reindexing clip_index` and `Reindexing face_index`for some time if you have over 100k assets in Immich and/or Immich is on a relatively weak server. If you see these logs and there are no errors, just give it time.

> [!IMPORTANT]
> Note: after upgrading, you should not downgrade Immich below 1.133.0.
>


Please don’t hesitate to contact us here on GitHub or [Discord](https://discord.immich.app/) if you encounter migration issues.

## VectorChord FAQ

### Why does it matter whether my database is on an SSD or an HDD?

These storage mediums have different performance characteristics. As a result, the optimal settings for an SSD are not the same as those for an HDD. Either configuration is compatible with SSD and HDD, but using the right configuration will make Immich snappier. As a general tip, we recommend users store the database on an SSD whenever possible.

- - - -

## Highlights

Welcome to the release `v1.133.0` of Immich, which is the hottest release yet for this summer, with more than 200 commits since the last version. This version brings you a new database extension, an even more optimized and faster timeline, more unified components on the web, some cool new features that have been requested for a long time, and many bug fixes and improvements. Let’s dive in!

* VectorChord database extension
* In-app notification
* Show map in albums view (web only)
* Locked folder
* Google Cast Support (web only)
* User detail page
* RTL text support on the web
* Performance improvement in web timeline
* Notable fix: thumbnail caching issue on the mobile app
* Notable fix: For users who use OAuth, you can now configure `TOKEN_ENDPOINT_AUTH_METHOD` to either `client_sect_post` or `client_secret_basic` after entering the `CLIENT_SECRET`
* Sneak peek

### In-app notification

Introducing an in-app, or internal, notification system. Previously, there was no way to notify you on the client if a database backup failed. Now, the failed backup will show up under a new notification section on the web. This mechanism paves the way for other helpful notifications, such as when a new album is shared with you or when new assets are added to a shared album, directly in the app.


### Show map in albums view

On the web, you can now click this button to see the map view that shows the location of all the photos and videos in an album.

### Locked folder

Have you ever taken embarrassing selfies that you don’t want anyone to see, and worry that you could accidentally reveal them while showcasing your superb Immich library? **Locked folder** view got you covered, with a personal PIN code, and an option to use biometric verification on the mobile app. You can access the page from the sidebar on the web or in the `Library` page on the app

You can select any assets and add them to the locked folder. They will only be shown in the locked folder view.

### Google Cast Support


We now have casting support! Immich now supports casting to Google Cast enabled devices like the Google Chromecast. This feature is currently only available on the web, with mobile app support coming in the near future. You can use images, videos and slideshows with casting.


> [!NOTE]
>
> Your Immich instance must be accessed through a public HTTPS endpoint in order for the casting device to successfully load media. Accessing the instance and casting from a private HTTPS endpoint (or an HTTP endpoint) will result in the cast receiver failing to load any media.


### User detail page

From the user management page of the admin view, you can now get a more in-depth view of individual users for their information, usage statistics, and which features they have enabled, etc, by clicking on the email from the user’s table

### RTL text support on the web

The web styling has been changed to accommodate RTL languages

### Performance improvement in web timeline

Last time, we discussed thinking that the timeline performance has reached its prime and that adding more gains would be difficult. In this release, we managed to squeeze that gain like a ripe orange.

The timeline will automatically cancel the requests to the server when you scroll very fast, displaying the thumbnails instantaneously when the scrolling stops. Previously, the web needed to finish the requests for the thumbnails being scrolled by, even if they are not displayed on the viewport. This change significantly reduces the load time.

An additional optimization has been made to reduce the data packet for each thumbnail to about 30% of its original size. This optimization contributes to a greater loading speed on the timeline.

We hope you enjoy these impressive improvements.


### Sneak Peak

Besides the cool features and enhancements that made their way into the application, along with many bug fixes, our highest priority at the moment is moving toward the stable release. A big chunk of time and dedication from the team is now spent on improving the mobile app synchronization system, basically rewriting the flow and designing the data model from the ground up. At the same time, we’re working to properly allocate CPU-intensive tasks to background threads to avoid app stuttering and jerkiness when the data sync between the server and the mobile app happens.

Below is the chart result comparing the local album sync between the current version and the reworked version.

**Current version**
![image](https://github.com/user-attachments/assets/e105606e-dc31-494e-b28f-2ee6bbbb309c)


**Improved version**
![image](https://github.com/user-attachments/assets/d92aa2ca-2b35-4380-bee2-2257664472bf)


We are working hard to get it into the application in the coming months and are very excited about this new improvement.


Cheers!

The Immich Team

## Support Immich

If you find the project helpful, you can support Immich by purchasing a product key at https://buy.immich.app or purchase our merchandise at https://immich.store



<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### 🚨 Breaking Changes
* refactor: user avatar color by @jrasm91 in https://github.com/immich-app/immich/pull/17753
* chore: remove old memory lane implementation by @jrasm91 in https://github.com/immich-app/immich/pull/18000
* feat: vectorchord by @mertalev in https://github.com/immich-app/immich/pull/18042
### 🚀 Features
* feat: rtl by @jrasm91 in https://github.com/immich-app/immich/pull/17860
* feat: notifications by @jrasm91 in https://github.com/immich-app/immich/pull/17701
* feat(web): Map in albums & shared albums by @davidpcrd in https://github.com/immich-app/immich/pull/17906
* feat(server): visibility column by @alextran1502 in https://github.com/immich-app/immich/pull/17939
* feat: user pin-code by @alextran1502 in https://github.com/immich-app/immich/pull/18138
* feat(web): user detail page by @jrasm91 in https://github.com/immich-app/immich/pull/18230
* feat: locked/private view by @alextran1502 in https://github.com/immich-app/immich/pull/18268
* feat: add session creation endpoint by @bwees in https://github.com/immich-app/immich/pull/18295
* feat(web): continue after login by @jrasm91 in https://github.com/immich-app/immich/pull/18302
* feat: bulk change description by @koostamas in https://github.com/immich-app/immich/pull/18288
* feat: locked view mobile by @alextran1502 in https://github.com/immich-app/immich/pull/18316
* feat(web): add support for casting by @bwees in https://github.com/immich-app/immich/pull/18231
### 🌟 Enhancements
* feat: api response compression by @zackpollard in https://github.com/immich-app/immich/pull/17878
* feat(mobile): Capitalize month names in asset grid by @atollk in https://github.com/immich-app/immich/pull/17898
* feat: preload and cancel images with a service worker by @midzelis in https://github.com/immich-app/immich/pull/16893
* feat(mobile): save grid size on gesture resize by @YarosMallorca in https://github.com/immich-app/immich/pull/17891
* feat(web): move duplicates controls above preview of duplicate images by @LukeTowers in https://github.com/immich-app/immich/pull/17837
* feat(server): JXL previews from DNG 1.7+ by @eligao in https://github.com/immich-app/immich/pull/17861
* feat(web): responsive date group header height by @midzelis in https://github.com/immich-app/immich/pull/17944
* feat: configure token endpoint auth method by @jrasm91 in https://github.com/immich-app/immich/pull/17968
* feat: Add DB_SSL_MODE environment variable for Postgres sslmode by @typokign in https://github.com/immich-app/immich/pull/18025
* feat(web): stat card tweaks by @jrasm91 in https://github.com/immich-app/immich/pull/18189
* feat(web): clear person birthdate by @jrasm91 in https://github.com/immich-app/immich/pull/18330
* fix(web): format dates with the locale preference by @Sese-Schneider in https://github.com/immich-app/immich/pull/18259
* feat(web): lighter timeline buckets by @midzelis in https://github.com/immich-app/immich/pull/17719
* feat(server): sort images in duplicate groups by date by @GeoffreyFrogeye in https://github.com/immich-app/immich/pull/18347
* feat(server): lighter buckets by @midzelis in https://github.com/immich-app/immich/pull/17831
### 🐛 Bug fixes
* fix(web): Make date-time formatting follow locale by @atollk in https://github.com/immich-app/immich/pull/17899
* fix(mobile): Share page URL by @mmomjian in https://github.com/immich-app/immich/pull/17834
* fix(server): handle orientation of imported face regions by @skatsubo in https://github.com/immich-app/immich/pull/18021
* fix: update assets when `duplicateId` is provided as `null` by @TitanNano in https://github.com/immich-app/immich/pull/18071
* fix(mobile): empty translation placeholders by @shenlong-tanwen in https://github.com/immich-app/immich/pull/18063
* fix(server): more robust person thumbnail generation by @mertalev in https://github.com/immich-app/immich/pull/17974
* fix(mobile): Remote video playback and asset download on Android with mTLS by @rovo89 in https://github.com/immich-app/immich/pull/16403
* fix: z-index war in the asset viewer by @danieldietzler in https://github.com/immich-app/immich/pull/18091
* fix: properly work with languages with multiple scripts by @LPkkjHD in https://github.com/immich-app/immich/pull/18167
* fix(web): user restore by @jrasm91 in https://github.com/immich-app/immich/pull/18188
* fix(server): vacuum after deleting people by @mertalev in https://github.com/immich-app/immich/pull/18299
* refactor(server): \"on this day\" memory creation by @mertalev in https://github.com/immich-app/immich/pull/18333
* fix(web): Make QR code colors solid by @Snowknight26 in https://github.com/immich-app/immich/pull/18340
* fix: delay settings apply for slideshow popup by @dj0024javia in https://github.com/immich-app/immich/pull/18028
* fix(mobile): reduce stutter/jank on search pages by @Saschl in https://github.com/immich-app/immich/pull/18363
* fix(mobile): stale thumbnail cache by @alextran1502 in https://github.com/immich-app/immich/pull/18351
* fix(server): select main stream according to bitrate by @wuzihao051119 in https://github.com/immich-app/immich/pull/18375
* fix(mobile): do not continue on remote stream parse error by @shenlong-tanwen in https://github.com/immich-app/immich/pull/18344
### 📚 Documentation
* fix: documentation - synology install docker link by @peterdenham in https://github.com/immich-app/immich/pull/18084
* fix(docs): update nginx reverse proxy by @mmomjian in https://github.com/immich-app/immich/pull/18104
* fix(docs): remove old patch versions from version switcher by @NicholasFlamy in https://github.com/immich-app/immich/pull/18130
* chore: update truenas install guide by @DjP-iX in https://github.com/immich-app/immich/pull/18142
* docs: face lift, botox x3 by @alextran1502 in https://github.com/immich-app/immich/pull/18184
* fix(docs): Update old jellyfin docs links by @tetrois in https://github.com/immich-app/immich/pull/18311
* chore: update docker-compose to add storage type configuration by @zackpollard in https://github.com/immich-app/immich/pull/18415
* fix(docs): vchord migration  by @mmomjian in https://github.com/immich-app/immich/pull/18418
* chore: remove duplicate finder from community projects by @bo0tzz in https://github.com/immich-app/immich/pull/18424
* chore: update milestones by @danieldietzler in https://github.com/immich-app/immich/pull/18426
### 🌐 Translations
* chore(mobile): translate toast messages by @ben-basten in https://github.com/immich-app/immich/pull/17964
* fix: add missing translations to face editor by @danieldietzler in https://github.com/immich-app/immich/pull/17993
* chore(web): update translations by @weblate in https://github.com/immich-app/immich/pull/17817
* chore: add language requests from weblate by @danieldietzler in https://github.com/immich-app/immich/pull/18050
* chore(web): update translations by @weblate in https://github.com/immich-app/immich/pull/18083

## New Contributors
* @LukeTowers made their first contribution in https://github.com/immich-app/immich/pull/17837
* @davidpcrd made their first contribution in https://github.com/immich-app/immich/pull/17906
* @peterdenham made their first contribution in https://github.com/immich-app/immich/pull/18084
* @TitanNano made their first contribution in https://github.com/immich-app/immich/pull/18071
* @typokign made their first contribution in https://github.com/immich-app/immich/pull/18025
* @dahool made their first contribution in https://github.com/immich-app/immich/pull/18127
* @LPkkjHD made their first contribution in https://github.com/immich-app/immich/pull/18167
* @tetrois made their first contribution in https://github.com/immich-app/immich/pull/18311
* @koostamas made their first contribution in https://github.com/immich-app/immich/pull/18288
* @dj0024javia made their first contribution in https://github.com/immich-app/immich/pull/18028
* @TomK32 made their first contribution in https://github.com/immich-app/immich/pull/17309

**Full Changelog**: https://github.com/immich-app/immich/compare/v1.132.3..."