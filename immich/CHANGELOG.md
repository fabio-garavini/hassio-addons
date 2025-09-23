# v1.143.0

> [!NOTE]
> *If you're still experiencing issues with remote assets or albums not showing up on the mobile app, please ensure that your server is updated to the latest version. If you are still having issues, try logging out and back in.*

## Highlights

Welcome to release `v1.143.0` of Immich. Like all releases, this one includes the latest batch of translations. A special thanks to everyone who has contributed so far to translating the project. If you are interested in helping translate yourself, check out our project on [Weblate](https://hosted.weblate.org/projects/immich/immich/). Other than that, this release is *mostly* bug fixes, with a few minor enhancements. Now let’s dive right in!

* Material 3 switch/toggle (web) #22100
* Bring back configurable backup settings (mobile) #22114
* Concurrent hashing & hashing progress (mobile) #21997
* Download progress (mobile) #22178
* Notable fix: Web modals #22079
* Notable fix: Mobile “freezes” #22111
* Notable fix: Copy image on Safari


### Material 3 switch/toggle (web)

The web project has an updated switch/toggle, thanks to @SevereCloud (<https://github.com/immich-app/ui/pull/267>) for that.

<img width="400" alt="image" src="https://github.com/user-attachments/assets/9968ec63-1eb8-4e22-a59c-59ed37f11d42" />


### Bring back configurable backup settings (Android)

Just like the previous timeline implementation, the new version now has similar settings for 

* Backup only while charging
* Upload only after a minimum amount of elapsed time


### Concurrent hashing & hashing progress (mobile)

Improvements have been made to the client-side hashing implementation, which now enables hashing to happen *concurrently*. This significantly increases throughput, and now the speed is mostly limited by how fast files can be read from internal storage. The hashing process has also been updated to only hash assets from the albums selected for backups, which reduces the number of downloads for iCloud users.

<img width="400" src="https://github.com/user-attachments/assets/d20499ae-0764-44fb-8679-2c07318b09e3"/>

### Download progress (mobile)

The mobile app now has a built-in download progress indicator, which makes it easy to see the progress of files being downloaded onto the device. 

<p align="center">


<img width="300"  alt="image" src="https://github.com/user-attachments/assets/2372ac4d-f7f5-48e6-9d75-1a0d29ceb7b7" />


<img width="300" alt="image" src="https://github.com/user-attachments/assets/03f63e7e-85cd-4ba3-ada5-9a6774913cae" />

<p/>

### Notable fix: Web modals

Previous to this release, the web application would often “freeze” or become unusable after using a modal (creating a shared link, creating an api key, confirming the deletion of assets, etc.). This issue has been fixed.


### Notable fix: Mobile “freezes”

This release fixes an issue that the mobile application could occasionally “freeze”, with the thumbnails would stop loading, and certain pages would become unusable until the application was forced closed. This has proved much more challenging to solve. We determined that the cause was due to concurrent access to SQLite from background/foreground processes, which could have put the app into this state. We have taken measures to address these situations and believe the application should be much more *stable*. If you are still running into these types of issues, please let us know!


### Notable fix: Copy image on Safari

The “copy image to clipboard” functionality has long worked on non-Safari browsers, but in this release, we were finally able to identify and implement a fix. Copying an image to the clipboard should now also work on Safari. 

## Support Immich


<p align="center">

<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjY2eWc5Y2F0ZW56MmR4aWE0dDhzZXlidXRmYWZyajl1bWZidXZpcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/87CKDqErVfMqY/giphy.gif" width="450" title="SUPPORT THE PROJECT!"> 

</p>

If you find the project helpful, you can support Immich by purchasing a product key at https://buy.immich.app or our merchandise at https://immich.store


<!-- Release notes generated using configuration in .github/release.yml at v1.143.0 -->

## What's Changed

### 🚀 Features

* chore: bump immich/ui by @jrasm91 in <https://github.com/immich-app/immich/pull/22100>
* feat: add configurable backup on charging only and delay settings for android by @shenlong-tanwen in <https://github.com/immich-app/immich/pull/22114>

### 🌟 Enhancements

* feat(web): toggle theme shortcut by @jrasm91 in <https://github.com/immich-app/immich/pull/22139>
* refactor: hashing service by @shenlong-tanwen in <https://github.com/immich-app/immich/pull/21997>
* fix: download feedback by @alextran1502 in <https://github.com/immich-app/immich/pull/22178>
* feat: availability checks by @jrasm91 in <https://github.com/immich-app/immich/pull/22185>
* feat: show preparing/hashing status in backup page by @alextran1502 in <https://github.com/immich-app/immich/pull/22222>

### 🐛 Bug fixes

* fix: close menu anchor on navigation by @shenlong-tanwen in <https://github.com/immich-app/immich/pull/22021>
* fix: sidebar link hightlight by @alextran1502 in <https://github.com/immich-app/immich/pull/22035>
* fix(oauth): omit blank pkce from url when not supported by @uphillcheddar in <https://github.com/immich-app/immich/pull/21976>
* fix(server): bulk edit rating by @jrasm91 in <https://github.com/immich-app/immich/pull/21839>
* fix: distance of segment label overlapsed scrubber label by @alextran1502 in <https://github.com/immich-app/immich/pull/22043>
* fix: navigate to time by @alextran1502 in <https://github.com/immich-app/immich/pull/22078>
* fix(web): issue with modal locking the page by @jrasm91 in <https://github.com/immich-app/immich/pull/22079>
* fix(mobile): prevent concurrent refresh and processing tasks by @mertalev in <https://github.com/immich-app/immich/pull/22111>
* chore(deps): bump flutter to 3.35.3 by @mertalev in <https://github.com/immich-app/immich/pull/22054>
* fix: poll counts from DB rather than using callbacks from library by @shenlong-tanwen in <https://github.com/immich-app/immich/pull/22117>
* fix: beta migration check by @shenlong-tanwen in <https://github.com/immich-app/immich/pull/22092>
* fix: ensure background worker is scheduled when the app is dismissed by @alextran1502 in <https://github.com/immich-app/immich/pull/22032>
* fix: display album image in selection mode by @vitoksmile in <https://github.com/immich-app/immich/pull/22087>
* fix: initial size of bottom sheet by @vitoksmile in <https://github.com/immich-app/immich/pull/22085>
* fix: Refresh photo after updating featured photo by @stewx in <https://github.com/immich-app/immich/pull/21971>
* fix(mobile): load original image by @mertalev in <https://github.com/immich-app/immich/pull/22142>
* fix: show delete on device when asset has a local match by @shenlong-tanwen in <https://github.com/immich-app/immich/pull/22143>
* fix: do not migrate existing users by @shenlong-tanwen in <https://github.com/immich-app/immich/pull/22146>
* fix(web): download panel by @jrasm91 in <https://github.com/immich-app/immich/pull/22150>
* fix(mobile): thumbnail shimmering effect by @mertalev in <https://github.com/immich-app/immich/pull/22158>
* fix: asset viewer background isn't shown by @alextran1502 in <https://github.com/immich-app/immich/pull/22161>
* fix: show thumbnail instantly when jumping to top of the page by @alextran1502 in <https://github.com/immich-app/immich/pull/22163>
* fix(mobile): stack row blocking gestures and not showing up by @mertalev in <https://github.com/immich-app/immich/pull/21854>
* chore: refresh backup stats when entering backup page by @alextran1502 in <https://github.com/immich-app/immich/pull/21977>
* fix: display thumbnail while scrubbing paused by @alextran1502 in <https://github.com/immich-app/immich/pull/22164>
* fix(web): do not upscale small pictures by @jrasm91 in <https://github.com/immich-app/immich/pull/22191>
* fix: get scrubber in search view working by @alextran1502 in <https://github.com/immich-app/immich/pull/22175>
* fix: sqlite parameters limit by @shenlong-tanwen in <https://github.com/immich-app/immich/pull/22119>
* fix(mobile): smaller search page size by @jrasm91 in <https://github.com/immich-app/immich/pull/22210>
* fix: automatically remove leading/trailing whitespace from search que… by @jrasm91 in <https://github.com/immich-app/immich/pull/22214>
* fix(web): show danger/warning when taken dates overlap by @jrasm91 in <https://github.com/immich-app/immich/pull/22213>
* fix(web): copy to clipboard on safari by @jrasm91 in <https://github.com/immich-app/immich/pull/22217>
* fix(web): only copy images via canvas by @jrasm91 in <https://github.com/immich-app/immich/pull/22225>
* fix: local share action not working on iPad by @shenlong-tanwen in <https://github.com/immich-app/immich/pull/22238>
* fix: retain scroll position on scale update by @shenlong-tanwen in <https://github.com/immich-app/immich/pull/22237>

### 📚 Documentation

* docs: add community immich-birthday and immich-stack projects by @sid3windr in <https://github.com/immich-app/immich/pull/21934>
* chore(docs): add an updated Podman/Quadlets community guide by @linux-universe in <https://github.com/immich-app/immich/pull/20744>

### 🌐 Translations

* chore(web): update translations by @weblate in <https://github.com/immich-app/immich/pull/21842>

## New Contributors

* @uphillcheddar made their first contribution in <https://github.com/immich-app/immich/pull/21976>
* @sid3windr made their first contribution in <https://github.com/immich-app/immich/pull/21934>
* @linux-universe made their first contribution in <https://github.com/immich-app/immich/pull/20744>
* @vitoksmile made their first contribution in <https://github.com/immich-app/immich/pull/22087>

**Full Changelog**: <https://github.com/immich-app/immich/compare/v1.142.1...v1.143.0>