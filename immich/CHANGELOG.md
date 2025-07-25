# v1.136.0

> [!CAUTION]
> # BREAKING CHANGES
> 
> ## API Key changes (#20113)
>
> Note: This change may affect the use of third-party applications, such as ImmichGo, ImmichKios, or ImmichFrame.
>
> This release includes a change to how API Keys work, specifically when used with routes that don’t require a specific permission. Previously, a scoped API Key could access these routes, but they will now throw a forbidden error. Routes without a declared scope now implicitly require the “all” permission.  


# Highlights

Welcome to release `v1.136.0`. This midsummer release is the culmination of the team's labor of love for the Immich community, featuring the introduction of a new timeline and sync mechanism in beta mode, Android widgets, and one of the last breaking changes we want to make before reaching the stable release milestone. Let’s dive right into it.

* Beta mode for the new timeline, sync, and upload mechanism
* Android widgets
* iOS widget improvements
* Deep links

## Beta timeline, sync, and upload mechanism

> [!NOTE]
> This is only supported when both the server and the mobile app are updated to `v1.136.0`

This is a series of work that has been happening for months under the hood, from the changes in the database query engine, server’s queries, and support logic, to integrating a whole new database on the mobile app, and rewriting almost all aspects of the mobile app, you can now try the new timeline with data sync mechanism, and upload rework by go to the `App Settings > Toggle the Beta timeline button`. After toggling, you will be directed to a screen where data migration is executed automatically. You can then proceed to the new experience.

<p align="center">
<img width="500"  alt="image" src="https://github.com/user-attachments/assets/ede61e01-974d-4351-b074-b3dd461f71e6" />
</p>

You can distinguish the beta timeline from the old one by the beta symbol next to the Immich logo in the app bar.

<p align="center">
<img width="500" alt="image" src="https://github.com/user-attachments/assets/90ac6296-1315-4881-b2b1-dd4fbc7baf53" />
</p>

### Why?

Over the past year, the major complaints we've received from users have primarily centered around the mobile app. The app simply doesn't feel premium or responsive—it's often janky and takes too long to become usable when first opened, especially when you have a large number of albums. Users can't even view their local albums unless they've selected them as backup targets. Our technical debt in the data structure has created some truly frustrating behaviors, like forcing users to re-upload everything (only to have it rejected by the server) when they switch phones and end up with a different device ID. Or local photos and videos don’t show up until they are all hashed, which could take a while.

We've realized we can't honestly call the application stable or confidently recommend it to everyone until we resolve these fundamental problems. We genuinely want this app to be excellent. We want the user experience to be seamless and delightful—we want you to feel genuinely happy when you open Immich to browse through your precious memories.

### What’s new?

#### Data sync
- The data sync is now running in a background thread, separate from the UI thread. This means that during data synchronization, the app will remain smooth to browse.
- The data sync speed should be improved drastically. The data is being streamed to the mobile app instead of being sent there in a single large chunk. This will help users with a massive library.
- The calculation of which data needs to be retrieved from the server is now performed on the server, rather than being calculated by the mobile app previously. This means lower CPU usage on the mobile app and quicker incremental sync.
- The mobile app will now retrieve data from the server and maintain similar database tables within the app. This restructuring enables better offline operation and supports more complex usage behaviors.
   
#### Timeline/Display experience
- The new timeline has been rewritten from the ground up to enhance scrolling and dragging behavior, making it easier for you to navigate the timeline.
- The detail viewer is now more interactive, allowing you to scroll between photos or videos when the bottom detail sheet is opened.
- The album views and other collection views are more lively, featuring a parallax effect to make your album/collection feel alive with *mesmerizing* animation.
- You can now view all albums on the device, regardless of which album you have selected as the target for backing up. You can view them in the \`Library > On this device\` section. For users who want to select individual assets to back up to the server, they can perform that operation from here.
   
#### Upload
- The upload mechanism has been rewritten from the ground up.
- Upload is now handled by the OS, allowing for a better background upload operation. Instead of handling the uploading ourselves, we are now placing the photos and videos in a queue, which will run continuously when the Immich app is opened in the foreground and for a few minutes after it is put into the background. Then the OS will take over and start pulling tasks from the queue, handling the upload process by itself.
- Starting the upload progress is now invoked from a toggle button

<p align="center">
<img width="400" alt="image" src="https://github.com/user-attachments/assets/270216ff-4698-412b-a9c6-37b795612e44" />
</p>

- Uploads are now running **in parallel** . The new upload detail page displays which assets are being uploaded and whether they are experiencing issues or stuck. You can tap on each item to see exactly which asset is causing the problem.

<p align="center">
<img width="400" alt="image" src="https://github.com/user-attachments/assets/8e319945-8b59-4bee-b41c-3172bef0b4fd" />
</p>

<p align="center">
<img width="400" alt="image" src="https://github.com/user-attachments/assets/bdfa4f7d-dabf-49fe-9ad4-661fdabc192c" />
</p>

- On Android, there is no longer a virtual `Recents` album that includes all assets. Instead, there is a button to select all albums for backup.
- In the backup album selection screen, you can now search for the album you want to back up.

#### Expectations of the beta version of the mentioned mechanisms

* The app should be very smooth to browse around during the initial login and subsequent app openings.
* Collections (favorite, archived, locked folder, etc.) and album views should make you feel nice, cozy, and delighted.
* Background queuing of newly taken photos is not yet implemented. We will start working on this next.
* Some views are not yet ported over to the new implementation, such as, but not limited to
  * People view
  * Map view
* Some mechanisms are still missing from the previous implementation, such as, but not limited to
  * Add to album from multi-selection
  * Album sync when uploading
* There are still some buggy behaviors/animations we will be ironing out in the coming days.

### How can you help us?

* Use the beta timeline and the new upload rework.
* Report any bugs and weirdness you experience on GitHub’s issue tracker `[beta] <your-title-here>` as the title
* Reach out and provide direct feedback on [Discord](https://discord.com/invite/immich)
* Feedback from iCloud users is greatly appreciated

## Android Widgets

<p align="center">
<img width="400" alt="image" src="https://github.com/user-attachments/assets/86a12419-2ce8-4791-ba8c-a56911ccc659" />
</p>

This is a follow-up to one of our most requested features: Home screen widgets! In `v1.135.0` We introduced Immich widgets on iOS, which included a memory widget and a random widget. With `v1.136.0`, we bring these widgets to Android! Many of the improvements to iOS widgets listed below have also been incorporated into the Android version.

## iOS Widget Improvements

iOS widgets have been improved with feedback from the community:

* iOS widgets now support servers that use insecure HTTP connections
* iOS widgets now support servers that use WebP as their preview thumbnail format
* Tapping on the widget now takes you directly to the image in the app
* Widgets now render properly when used on a tinted home screen
* iOS widgets now cache the latest image for use if network access is unavailable during update. You should see fewer “Unable to connect to your Immich instance” errors on your home screen!
* You can now choose to show images from your Favorites in the Random Widget
* Improved error descriptions

## Deep Links

You can now deep link into the Immich app. Supported URLs include:

* `immich://asset?id=<asset id>`
* `immich://album?id=<album id>`
* `immich://memory?id=<memory id>`

Some `my.immich.app` URLs will also now open inside the mobile app:

* `https://my.immich.app/photos/<asset id>`
* `https://my.immich.app/albums/<album id>`

Navigating to any of these URLs (via the browser, Apple Shortcuts, NFC, or other automation frameworks) will open the corresponding resource inside the mobile app.

## In other news

We missed capturing the moment when the project reached `69_420` stars, 😔

<p align="center">

<img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExamxub2V4MTRzaHc0dXV5b3JiemEza2I0eWViN2h5bHluc2RjdWxoMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WrNfErHio7ZAc/giphy.gif" width="500" > 

</p>


- - - -

## Support Immich


<p align="center">

<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjY2eWc5Y2F0ZW56MmR4aWE0dDhzZXlidXRmYWZyajl1bWZidXZpcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/87CKDqErVfMqY/giphy.gif" width="450" title="SUPPORT THE PROJECT!"> 

</p>

If you find the project helpful, you can support Immich by purchasing a product key at https://buy.immich.app or our merchandise at https://immich.store


<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### 🚨 Breaking Changes
* feat!: absolute file paths by @jrasm91 in https://github.com/immich-app/immich/pull/19995
* fix: default route permission by @jrasm91 in https://github.com/immich-app/immich/pull/20113
### 🚀 Features
* feat(server): person delete by @jrasm91 in https://github.com/immich-app/immich/pull/19511
* feat: nightly tasks by @jrasm91 in https://github.com/immich-app/immich/pull/19879
* feat: add license page to app bar dialog by @shenlong-tanwen in https://github.com/immich-app/immich/pull/19971
* feat(mobile): android widgets by @bwees in https://github.com/immich-app/immich/pull/19310
* feat(mobile): beta sync stats page by @bwees in https://github.com/immich-app/immich/pull/19950
### 🌟 Enhancements
* fix(web): consistent merge people icons by @jrasm91 in https://github.com/immich-app/immich/pull/19473
* feat(mobile): deep links by @bwees in https://github.com/immich-app/immich/pull/19232
* feat(mobile): ios widget deeplink to asset in app by @bwees in https://github.com/immich-app/immich/pull/19510
* feat(server): check additional exif date tags by @midzelis in https://github.com/immich-app/immich/pull/19216
* feat: use request host as default SSR domain by @bo0tzz in https://github.com/immich-app/immich/pull/19485
* feat: oauth role claim by @danieldietzler in https://github.com/immich-app/immich/pull/19758
* chore: Use a contrasted color for text avatar by @ferraridamiano in https://github.com/immich-app/immich/pull/19756
* feat(web): update icons by @Hamster45105 in https://github.com/immich-app/immich/pull/19831
* feat(mobile): cache latest ios widget entry for fallback by @bwees in https://github.com/immich-app/immich/pull/19824
* feat: adds option to search only for untagged assets by @SkwalExe in https://github.com/immich-app/immich/pull/19730
* feat(web): better coordinate parsing by @Hamster45105 in https://github.com/immich-app/immich/pull/19832
* feat(widgets): iOS widget improvements by @bwees in https://github.com/immich-app/immich/pull/19893
* feat(mobile): new upload by @alextran1502 in https://github.com/immich-app/immich/pull/18726
* feat: play live photos on hover by @bo0tzz in https://github.com/immich-app/immich/pull/19962
* feat(web): Remove from Stack by @xCJPECKOVERx in https://github.com/immich-app/immich/pull/19703
### 🐛 Bug fixes
* fix(web): map cluster by @wuzihao051119 in https://github.com/immich-app/immich/pull/19433
* fix: storage template onboarding save by @bwees in https://github.com/immich-app/immich/pull/19405
* fix(web): map broken after redirect from details by @YarosMallorca in https://github.com/immich-app/immich/pull/19424
* fix(server): filter parameters by database and role by @mertalev in https://github.com/immich-app/immich/pull/19392
* fix(web): toggle favorite by @wuzihao051119 in https://github.com/immich-app/immich/pull/19453
* fix(web): timeline timezone by @wuzihao051119 in https://github.com/immich-app/immich/pull/19418
* fix(web): oauth quota display by @wuzihao051119 in https://github.com/immich-app/immich/pull/19417
* fix(server): include hidden assets in missing metadata extraction query by @jrasm91 in https://github.com/immich-app/immich/pull/19471
* fix: iOS widget webp support by @bwees in https://github.com/immich-app/immich/pull/19469
* fix: return 404 for invalid shared link pages by @jrasm91 in https://github.com/immich-app/immich/pull/19493
* fix(web): load day group in asset viewer by @wuzihao051119 in https://github.com/immich-app/immich/pull/19523
* feat(deployment): add shm_size for PG by @mmomjian in https://github.com/immich-app/immich/pull/19472
* fix: enable photo manager custom filter by default by @shenlong-tanwen in https://github.com/immich-app/immich/pull/19520
* fix(web): absolute path match in external library by @wuzihao051119 in https://github.com/immich-app/immich/pull/19551
* fix(web): modal race condition by @wuzihao051119 in https://github.com/immich-app/immich/pull/19625
* fix(server): prevent duplicate geodata temp table by @mertalev in https://github.com/immich-app/immich/pull/18580
* fix(web): viewing asset lock by @wuzihao051119 in https://github.com/immich-app/immich/pull/19499
* fix: add quiet zone to QR code by @matthieu-db in https://github.com/immich-app/immich/pull/19771
* fix(server): clear activity when asset is removed from album by @dahool in https://github.com/immich-app/immich/pull/19019
* fix: allow insecure connections in iOS WidgetExtension by @made2k in https://github.com/immich-app/immich/pull/19863
* fix: startup log level by @jrasm91 in https://github.com/immich-app/immich/pull/19885
* fix(web): allow renaming person without merging by @lukashass in https://github.com/immich-app/immich/pull/19923
* fix(web): adjust button size in person side panel by @lukashass in https://github.com/immich-app/immich/pull/19924
* fix: use IMMICH_HOST env var in ML healthcheck by @bo0tzz in https://github.com/immich-app/immich/pull/19844
* fix(web): prevent flashing white background in dark mode on page load/reload by @evan314159 in https://github.com/immich-app/immich/pull/19934
* fix: send filename when viewing the original file by @MeguminSama in https://github.com/immich-app/immich/pull/20005
* fix: ML recognition distance UI form validation by @danieldietzler in https://github.com/immich-app/immich/pull/20107
* fix: unset prewarn param by @jrasm91 in https://github.com/immich-app/immich/pull/20109
### 📚 Documentation
* fix(docs): portainer absolute paths by @mmomjian in https://github.com/immich-app/immich/pull/19459
* fix(docs): add DB_USERNAME when needed by @mmomjian in https://github.com/immich-app/immich/pull/19578
* chore(docs): add instruction for trusting self-signed certificates with Immich and an OAuth server by @seifer44 in https://github.com/immich-app/immich/pull/18624
* docs: document `DB_STORAGE_TYPE` environment variable by @ramonsmits in https://github.com/immich-app/immich/pull/19609
* docs: fix typo of webp listed under jpeg by @OffsetMonkey538 in https://github.com/immich-app/immich/pull/19743
* fix(docs): library and folders minor adjustments by @skatsubo in https://github.com/immich-app/immich/pull/19642
* fix: path in external library docs by @DominikVogel in https://github.com/immich-app/immich/pull/19901
* fix(docs): Nightly Tasks Settings by @skatsubo in https://github.com/immich-app/immich/pull/19907
* chore: also redirect docs/ with trailing slash by @bo0tzz in https://github.com/immich-app/immich/pull/19965
### 🌐 Translations
* feat(mobile): enable Croatian (hr) translations by @fmis13 in https://github.com/immich-app/immich/pull/19428
* chore: adjust setting subtitle to less clumsy expression by @lcs-crr in https://github.com/immich-app/immich/pull/19970
* chore(web): update translations by @weblate in https://github.com/immich-app/immich/pull/19228
* chore(web): update translations by @weblate in https://github.com/immich-app/immich/pull/20076
* fix: more inclusive language by @maybeanerd in https://github.com/immich-app/immich/pull/20092
* chore(web): update translations by @weblate in https://github.com/immich-app/immich/pull/20082

## New Contributors
* @fmis13 made their first contribution in https://github.com/immich-app/immich/pull/19428
* @seifer44 made their first contribution in https://github.com/immich-app/immich/pull/18624
* @ramonsmits made their first contribution in https://github.com/immich-app/immich/pull/19609
* @OffsetMonkey538 made their first contribution in https://github.com/immich-app/immich/pull/19743
* @matthieu-db made their first contribution in https://github.com/immich-app/immich/pull/19771
* @Hamster45105 made their first contribution in https://github.com/immich-app/immich/pull/19831
* @SkwalExe made their first contribution in https://github.com/immich-app/immich/pull/19730
* @made2k made their first contribution in https://github.com/immich-app/immich/pull/19863
* @DominikVogel made their first contribution in https://github.com/immich-app/immich/pull/19901
* @evan314159 made their first contribution in https://github.com/immich-app/immich/pull/19934
* @lcs-crr made their first contribution in https://github.com/immich-app/immich/pull/19970
* @MeguminSama made their first contribution in https://github.com/immich-app/immich/pull/20005
* @maybeanerd made their first contribution in https://github.com/immich-app/immich/pull/20092

**Full Changelog**: https://github.com/immich-app/immich/compare/v1.135.3...v1.136.0
