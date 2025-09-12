# v1.142.0

## Highlights

Welcome to release `v1.142.0` of Immich. Starting with this version, the beta timeline is now the default version for the app. When you first open the app after updating, it will check and run the on-device migration steps for those that are on the old timeline, after that you can close and relaunch the app to start with a better app experience. We want to express our sincere gratitude again for the users who have been using the new version to help us polish it, and for those who work closely with us to tackle weird bugs. As always, this version comes with many bug fixes for the server, web and the mobile app. Let’s dive into some of the highlights below.

* Resume all paused jobs
* Geolocation utility improvements
* Read-only mode toggle on the mobile app has changed to a long-press behavior instead of a double-tap
* Notable fix: Raspberry Pi 4 crashes when generating thumbnails
  * If you were affected by this bug and set the environmental variable `VIPS_NOVECTOR=1`, you should remove this variable when upgrading to this Immich release or above

### Resume all paused jobs

The job administration page now comes with a resume all button. This is especially helpful for users who are importing their libraries to Immich via [immich-go](https://github.com/simulot/immich-go), which pauses all jobs during upload, including background jobs not visible in the UI. If the process fails mid-way, the jobs stay paused until the admin either recreates the Redis container or manually resumes them. If you’ve been having problems with the trash not clearing or memories not generating, make sure to check this button.

<img width="800" alt="image" src="https://github.com/user-attachments/assets/a55362b7-21bc-48d1-acbc-47a7fdf395db" />

### Geolocation utility improvements

The geolocation utility has been converted to a timeline view, so you can easily scroll through your entire library while investigating  

<img width="800" alt="image" src="https://github.com/user-attachments/assets/e38c7b39-1b0d-4552-94b2-444579f2e137" />

You can now browse the timeline, and at the same time, fill in the missing coordinates for your assets. Thanks @Johannbr for your continued work on this.

## Support Immich


<p align="center">

<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjY2eWc5Y2F0ZW56MmR4aWE0dDhzZXlidXRmYWZyajl1bWZidXZpcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/87CKDqErVfMqY/giphy.gif" width="450" title="SUPPORT THE PROJECT!"> 

</p>

If you find the project helpful, you can support Immich by purchasing a product key at https://buy.immich.app or our merchandise at https://immich.store

## What's Changed

### 🫥 Deprecated Changes

* feat: add partner create endpoint by @jrasm91 in <https://github.com/immich-app/immich/pull/21625>
* chore: deprecate `replaceAsset` by @jrasm91 in <https://github.com/immich-app/immich/pull/21791>

### 🚀 Features

* feat: workflow for automated translations merge by @bo0tzz in <https://github.com/immich-app/immich/pull/21639>
* chore: make beta timeline the default by @alextran1502 in <https://github.com/immich-app/immich/pull/21751>

### 🌟 Enhancements

* feat: add button to unpause all queues by @bo0tzz in <https://github.com/immich-app/immich/pull/21685>
* feat(web): use timeline in geolocation manager by @Johannbr in <https://github.com/immich-app/immich/pull/21492>

### 🐛 Bug fixes

* fix(server): remove pcm from default accepted codecs by @mertalev in <https://github.com/immich-app/immich/pull/21655>
* fix(server): valid backups with `DB_URL` env variable config by @peterbuga in <https://github.com/immich-app/immich/pull/21669>
* feat: sync AuthUserV1 by @shenlong-tanwen in <https://github.com/immich-app/immich/pull/21565>
* fix: prevent isolate deadlock by @alextran1502 in <https://github.com/immich-app/immich/pull/21692>
* fix: use relative path in [start.sh](http://start.sh) by @dvdkon in <https://github.com/immich-app/immich/pull/20434>
* fix: prefer Creation Date over Create Date by @jrasm91 in <https://github.com/immich-app/immich/pull/21756>
* fix(web): cancel uploads on logout by @jrasm91 in <https://github.com/immich-app/immich/pull/21760>
* fix(web): transparent background color by @jrasm91 in <https://github.com/immich-app/immich/pull/21747>
* fix(web): website frozen after modal closes by @jrasm91 in <https://github.com/immich-app/immich/pull/21752>
* fix(web): map popup accessibility by @jrasm91 in <https://github.com/immich-app/immich/pull/21759>
* fix(server): correct immich-cli symlink in Immich docker image by @skatsubo in <https://github.com/immich-app/immich/pull/21318>
* fix: welcome email password by @jrasm91 in <https://github.com/immich-app/immich/pull/21732>
* fix(mobile): Change read-only mode activation method to remove double click lag by @goalie2002 in <https://github.com/immich-app/immich/pull/21743>
* fix(web): memory viewer arrow navigation by @YarosMallorca in <https://github.com/immich-app/immich/pull/19400>
* chore(deps): update base image to trixie by @mertalev in <https://github.com/immich-app/immich/pull/21786>
* fix(web): asset refresh by @jrasm91 in <https://github.com/immich-app/immich/pull/21788>
* fix(web): map in album shared link by @jrasm91 in <https://github.com/immich-app/immich/pull/21793>
* fix(server): validate token permission by @jrasm91 in <https://github.com/immich-app/immich/pull/21802>
* fix: android background backups by @shenlong-tanwen in <https://github.com/immich-app/immich/pull/21795>
* fix: concurrency issue by @alextran1502 in <https://github.com/immich-app/immich/pull/21830>
* fix: always use en locale for parsing timeline datetime by @shenlong-tanwen in <https://github.com/immich-app/immich/pull/21796>
* fix(web): handle buckets before year 1000 by @jrasm91 in <https://github.com/immich-app/immich/pull/21832>

### 📚 Documentation

* docs: be explicit about which container exposes metrics by @per-review in <https://github.com/immich-app/immich/pull/20424>
* docs: add community immich drop uploader project by @papuass in <https://github.com/immich-app/immich/pull/21775>
* fix(docs): fix the SQL query for finding assets with missing thumbnails by @skatsubo in <https://github.com/immich-app/immich/pull/21770>
* docs: improve and clarify XMP sidecar behavior by @trommegutten in <https://github.com/immich-app/immich/pull/20334>
* docs: update tag details by @jrasm91 in <https://github.com/immich-app/immich/pull/21815>

### 🌐 Translations

* chore: update README by @zvirja in <https://github.com/immich-app/immich/pull/21718>
* chore(web): update translations by @weblate in <https://github.com/immich-app/immich/pull/21624>
* chore(web): update translations by @weblate in <https://github.com/immich-app/immich/pull/21814>

## New Contributors

* @peterbuga made their first contribution in <https://github.com/immich-app/immich/pull/21669>
* @per-review made their first contribution in <https://github.com/immich-app/immich/pull/20424>
* @papuass made their first contribution in <https://github.com/immich-app/immich/pull/21775>
* @zvirja made their first contribution in <https://github.com/immich-app/immich/pull/21718>
* @trommegutten made their first contribution in <https://github.com/immich-app/immich/pull/20334>

**Full Changelog**: <https://github.com/immich-app/immich/compare/v1.141.1...v1.142.0>