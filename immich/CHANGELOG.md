# v2.5.0

> [!NOTE]
> - 20:23 GMT: We are halting the release of the mobile app as there are some reported issues with migration
> - 22:00 GMT: Found the issue with the migration for the experimental sync-delete feature on Android. Will fix and release a new update soon. ETA tomorrow CTS time
> - 22:24 GMT: iOS is released as the migration doesn't affect iOS users
> 
> Sorry for the inconvenience

## Highlights

Happy New Year! Welcome to Immich `v2.5.0`. This release is our fireworks to celebrate both the new year and reaching *90,000* stars on GitHub. It is packed with major features that have been in the works for quite some time, and the team has kicked off the year with incredible momentum that we're excited to carry forward. We couldn't wait to share this with you. Let's dive right in:

* Free Up Space
* Non-destructive editing
* Database backup and restore (web)
* Upload improvements
* Visual refresh across all platforms
* Disable admin setup
* Star rating (mobile)
* Additional fine-grained permissions (api keys)
* Progressive JPEGs
* Slideshow loop option (web)
* Native HTTP clients for HTTP/2 and HTTP/3 image loading

### Free Up Space

*This feature was requested ages ago. So long in fact, that it has a 3-digit ID (#165)! Given the rapid iteration and development pace of the pre-stable era, it was risky to include it in the app due to its bulk-delete nature. But it is now 2026* :smile:*, so here we are.*


**Free Up Space** allows you to remove local media files from your device that have already been successfully backed up to your Immich server (and are not in Immich trash). This helps reclaim storage on your mobile device without losing your memories. The feature can be accessed from the user profile panel or from the Settings page in the mobile app.

<img width="300" alt="image" src="https://github.com/user-attachments/assets/2985ea6c-4392-414e-aef3-83c70ffe5570" />

<img  alt="image" src="https://github.com/user-attachments/assets/cf7b7d2c-5d37-4c13-a6ad-cacb53a71acb" />

There are configuration options and steps to make sure that everything is verified before deleting from the app.


1. **Configuration:**
   * **Cutoff date:** Free Up Space will only look for photos and videos **on or before** this date.
   * **Keep albums:** Hold all photos and videos in the selected albums on your device, regardless of other settings. By default, `**WhatsApp**` related albums are selected to be kept on the device. Assets that are not already on the device will not be redownloaded.
   * **Keep favorites:** This works the same way `**Keep albums**` . By default, favorited assets are preserved on your device.
   * **Keep on device:** You can choose to restrict removal to `**Always keep**` **All photos** or **All videos**, regardless of other settings. This setting can hamper freeing up space significantly — with 80 GB of videos and 40 GB of photos, selecting `**Always keep photos**` retains thousands of photos on your device.

   
> [!TIP]
>   These configurations are persistent to make it convenient for those who perform this task often.

2. **Scan & Review:** Before any files are removed, you are presented with a review screen to confirm which items will be deleted and how much storage will be reclaimed.
3. **Deletion:** Confirmed items are moved to your device's native Trash/Recycle Bin.


> [!NOTE]
> **Reclaim storage**
> To use the reclaimed space right away, you must manually empty the system/gallery trash outside Immich.


For more information about this feature, please read it [here](https://docs.immich.app/features/mobile-app#free-up-space)


### Non-destructive editing

Immich now supports non-destructive photo editing. This means that any edits you make to an asset do not modify the original file; instead, the modifications are stored in the database, and new thumbnails are generated based on those changes. This means you can always revert to the original asset if needed. 

When you download an edited asset, Immich provides the edited version by default. However, you can choose to download the original version if needed. Immich always generates an edited full-size version based on your full-size quality settings. This occurs regardless of whether the "Enable full-size image generation" setting is enabled or disabled.


> [!NOTE]
> **Limitations:** 
>
> * Mobile clients must be updated to v2.5.0 in order view the edited version of an asset. Clients will continue to > see the original asset if on a mobile app version <2.5.0
> * As of this version, the edited download won't include the EXIF metadata of the original asset. This feature will come in future releases.
> * Mobile editing still uses the old edit system (saving a new version of the photo). The mobile editor will be upgraded to use the new non-destructive editing system in a future release.


You can click on the following icon to enter edit mode

<img width="400" alt="image" src="https://github.com/user-attachments/assets/7f2092cf-c149-492c-af08-a04c8de16915" />

Currently, Immich supports the following types of edits:

* Cropping
* Rotation
* Mirroring

<img  width="800" alt="image" src="https://github.com/user-attachments/assets/b1c0b1e7-5074-4b19-ac23-449931a233f3" />

Opening the editor on an edited asset will load the existing edits back in so you can make adjustments and changes.

<img width="800" alt="image" src="https://github.com/user-attachments/assets/0346e1ac-eb8c-490a-8d47-a3b79626b5b6" />

### Backup and restore from the web UI

Backup and restore are an important part of any self-hosted application; this feature helps you maintain reliable access to your instance during unexpected events, such as database corruption caused by system failure or power loss. 

Historically, restoring an Immich instance to a specific point required the user to have access to the command line, which proved challenging for many users, especially those new to self-hosting and software maintenance.

Now, we have the entire backup and restore pipeline built into Immich, which allows you to quickly restore a database backup directly from the web UI. You can perform the steps either from the `Administration > Maintenance` page, or from a brand new instance on the welcome page.

**Restore from Administration's Maintenance page**

<img width="800" alt="image" src="https://github.com/user-attachments/assets/7a608442-bd1c-4e0c-b255-1df45699fa9f" />

**Restore from Onboarding page**

<img width="800" alt="image" src="https://github.com/user-attachments/assets/6012a0e6-ba32-45d0-aec4-c24d19bd4a25" />

For more detailed steps, please read them in [our documentation](https://docs.immich.app/administration/backup-and-restore)

### Upload improvement

This release also improves foreground upload in the mobile app. The previous implementation improves background uploads but leaves foreground uploads less reliable by leveraging the queue system to offload upload handling to the OS, which can be throttled under specific criteria. 

We are taking back more control over handling uploads with the *try-and-true* method used in the old timeline, but this time it is supercharged with concurrent uploads and also correctly handles assets with missing file extensions from software such as DJI or Fusion Camera.

<img width="300" alt="image" src="https://github.com/user-attachments/assets/87d317ed-933b-48c7-88e3-d267e928b9d1" />

Upload now will also send unique metadata for each asset to the server, so it can be used to quickly retrieve the checksum when reinstalling the app, saving time and CPU resources. This is especially useful for iCloud users, as the hashing process can take a long time.

For iOS and iCloud users, it is recommended to go to App Settings > Sync Status and tap the "Sync Cloud IDs" button to backfill the metadata for the uploaded content. You only need to do this once.

<img width="300" alt="image" src="https://github.com/user-attachments/assets/0470e707-f913-418c-94a5-3fb83ae95fae" />


### Visual refresh across all platforms

This release also brings you a refreshed look and feel across the web, mobile app, and the documentation sites, with a new font face ("The-name-must-not-be-named" Sans) that improves reading legibility, especially for numbers and smaller text. 

<img width="300" alt="image" src="https://github.com/user-attachments/assets/83fc22ab-c3c8-4dfe-99c2-4620c6f03938" />


The UI library (https://ui.immich.app/) components have also been added to the web app in more places. You should see a more standardized, coherent, and better hierarchy for UI components across the app. 

<img width="300" alt="image" src="https://github.com/user-attachments/assets/80157cb0-e77f-4219-9648-373a21ebfd6e" />

All icon buttons now come with a tooltip, so you don't have to guess what function the button serves

<img width="300" alt="image" src="https://github.com/user-attachments/assets/df2119dc-d3a9-43ae-a002-593710d3d226" />


### Star rating (mobile)

Mobile now has the star-rating feature, similar to the web application. If you don't see a star rating on either platform, make sure the feature is enabled [here](https://my.immich.app/user-settings?isOpen=feature+rating).


<img width="400" alt="image" src="https://github.com/user-attachments/assets/e6a3e6a4-a18a-41a4-9eb0-845be68904a9" />



### Disable admin setup

New installs show a welcome page and allow anyone to sign up / register as an admin. To have more control over whether this is allowed or not, we have added the following environment variable:

```typescript
IMMICH_ALLOW_SETUP=true|false
```


This is especially useful if you have already initialized Immich and never want this situation to be possible in the future, which can happen if for whatever reason the database is reset.


### Additional fine-grained permissions (api keys)

Some existing endpoints have been assigned fine-grained permissions, allowing the creation of API keys with limited access. The new permissions include:\n

* `map.read` - Retrieve a list of latitude and longitude coordinates for every asset with location data
* `map.search` - Retrieve location information for latitude & longitude coordinates
* `folder.read` - Retrieve information about folders and which assets they contain 


### Progressive JPEGs

All image-generation settings now include a new option to enable progressive JPEGs. When enabled, supported browsers will progressively render the image.

<img width="800" alt="image" src="https://github.com/user-attachments/assets/ac62bb63-41da-419b-808f-b81ef90f7183" />



### Slideshow loop option (web)

The slideshow settings on the web now include an option to automatically start the slideshow over.

<img width="500" alt="image" src="https://github.com/user-attachments/assets/b9122b7b-ae6f-4536-bf4c-fc295f6bd486" />



### Native HTTP clients

All remote images are now requested using optimized HTTP clients, meaning images load more quickly and can keep up with your scrolling. Caching is also improved: not only does this make images even snappier to load after being downloaded, it also improves the offline experience with better responsiveness and a larger cache size.

- - - -

As always, there are many more QoL improvements, bug fixes, and enhancements in this release. Please find the full release note below

## Support Immich


<p align="center">

<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjY2eWc5Y2F0ZW56MmR4aWE0dDhzZXlidXRmYWZyajl1bWZidXZpcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/87CKDqErVfMqY/giphy.gif" width="450" title="SUPPORT THE PROJECT!"> 

</p>

If you find the project helpful, you can support Immich by purchasing a product key at https://buy.immich.app or our merchandise at https://immich.store
<!-- Release notes generated using configuration in .github/release.yml at main -->



## What's Changed

### 🚀 Features

* feat: workflow ui by @alextran1502 in <https://github.com/immich-app/immich/pull/24190>
* feat: disable admin setup by @jrasm91 in <https://github.com/immich-app/immich/pull/24628>
* feat: free up space by @alextran1502 in <https://github.com/immich-app/immich/pull/24999>
* feat: use fastlane sigh to manage signing profiles by @alextran1502 in <https://github.com/immich-app/immich/pull/25089>
* feat: image editing by @bwees in <https://github.com/immich-app/immich/pull/24155>
* feat: add cloud id during native sync by @shenlong-tanwen in <https://github.com/immich-app/immich/pull/20418>
* feat: restore database backups by @insertish in <https://github.com/immich-app/immich/pull/23978>
* feat(mobile): star rating by @YarosMallorca in <https://github.com/immich-app/immich/pull/24457>
* feat(mobile): scrollbar for album page by @alextran1502 in <https://github.com/immich-app/immich/pull/25507>

### 🌟 Enhancements

* feat: focus jumped-to item in timeline by @bo0tzz in <https://github.com/immich-app/immich/pull/24738>
* chore: web editor improvements by @bwees in <https://github.com/immich-app/immich/pull/25169>
* feat: modal routes by @jrasm91 in <https://github.com/immich-app/immich/pull/24726>
* feat: prefer admin settings page over users page by @jrasm91 in <https://github.com/immich-app/immich/pull/24780>
* feat: shared link edit by @jrasm91 in <https://github.com/immich-app/immich/pull/24783>
* feat(mobile): use tabular figures in backup info card by @wrbl606 in <https://github.com/immich-app/immich/pull/24820>
* feat(mobile): album options to kebab menu by @idubnori in <https://github.com/immich-app/immich/pull/24204>
* feat: Hide/show controls when zoom state changes by @Lauritz-Tieste in <https://github.com/immich-app/immich/pull/24784>
* feat(server): Support camera `make`, `model`, and `lensModel` in Storage Template by @rahul-kumar-saini in <https://github.com/immich-app/immich/pull/24650>
* feat(ml): update ONNX Runtime, OpenVINO and ROCm stack by @savely-krasovsky in <https://github.com/immich-app/immich/pull/23458>
* chore(server): Vchord 1.0 support by @mmomjian in <https://github.com/immich-app/immich/pull/23845>
* feat(web): Add coordinate pair location searching. by @GustavJones in <https://github.com/immich-app/immich/pull/24799>
* feat: show asset owners for editors in shared albums by @ama156 in <https://github.com/immich-app/immich/pull/24890>
* feat(web): undo delete single asset by @YarosMallorca in <https://github.com/immich-app/immich/pull/24439>
* feat(server): implement switchable logging formats (console/json) by @DanielRamosAcosta in <https://github.com/immich-app/immich/pull/24791>
* chore(web): bump immich/ui for tooltips by @jrasm91 in <https://github.com/immich-app/immich/pull/24632>
* feat(web): star rating keyboard shortcut by @cbochs in <https://github.com/immich-app/immich/pull/24620>
* feat: bulk asset metadata endpoints by @jrasm91 in <https://github.com/immich-app/immich/pull/25133>
* feat(mobile): 2026 font by @alextran1502 in <https://github.com/immich-app/immich/pull/25213>
* feat(web): search albums by description by @YarosMallorca in <https://github.com/immich-app/immich/pull/25244>
* feat(web): 2026 font by @alextran1502 in <https://github.com/immich-app/immich/pull/25174>
* chore: dart http foreground upload by @alextran1502 in <https://github.com/immich-app/immich/pull/24883>
* feat: update intel compute driver by @savely-krasovsky in <https://github.com/immich-app/immich/pull/25259>
* feat: download original asset by @danieldietzler in <https://github.com/immich-app/immich/pull/25302>
* feat: allow /memory?id= in AndroidManifest by @arne182 in <https://github.com/immich-app/immich/pull/25373>
* fix: add scoped API permissions to map endpoints by @meesfrensel in <https://github.com/immich-app/immich/pull/25423>
* fix(server): scoped permissions for more endpoints by @meesfrensel in <https://github.com/immich-app/immich/pull/25452>
* feat: generate progressive JPEGs for thumbnails by @midzelis in <https://github.com/immich-app/immich/pull/25463>
* feat: loop slideshows by @GeneralZero in <https://github.com/immich-app/immich/pull/25462>
* feat(mobile): native clients by @mertalev in <https://github.com/immich-app/immich/pull/21459>

### 🐛 Bug fixes

* fix(maintenance): prevent enable/disable maintenance CLI hanging on occasion by @insertish in <https://github.com/immich-app/immich/pull/24713>
* fix(web): display jxl original by @mertalev in <https://github.com/immich-app/immich/pull/24766>
* fix(web): stale album info by @jrasm91 in <https://github.com/immich-app/immich/pull/24787>
* fix: album card timezone by @danieldietzler in <https://github.com/immich-app/immich/pull/24855>
* fix(web): let slideshow videos play (#19601) by @keanucz in <https://github.com/immich-app/immich/pull/24914>
* fix(server): update exiftool-vendored to v34.3 for correct colon-less timezone parsing by @dosten in <https://github.com/immich-app/immich/pull/24979>
* fix(mobile): hide delete action for remote-only assets by @skrmc in <https://github.com/immich-app/immich/pull/25010>
* fix: import config from json by @MontejoJorge in <https://github.com/immich-app/immich/pull/25030>
* fix: search input has incorrect focus state after closing the search filter modal by @alextran1502 in <https://github.com/immich-app/immich/pull/24886>
* fix(web): duplicate key error and enable expiration editing for expired shared links by @timonrieger in <https://github.com/immich-app/immich/pull/24686>
* fix: shared-link-mapper by @jrasm91 in <https://github.com/immich-app/immich/pull/24794>
* fix(server): migrate motion part of live photo by @NikhilAlapati in <https://github.com/immich-app/immich/pull/24688>
* fix(web): use asset date for change date popup when single asset selected by @majiayu000 in <https://github.com/immich-app/immich/pull/25076>
* fix(web): long text taking more width than expected in duplicate manager by @HemendraSinghShekhawat in <https://github.com/immich-app/immich/pull/24547>
* fix(web): broken asset urls if shared link has photos in name by @YarosMallorca in <https://github.com/immich-app/immich/pull/24451>
* fix(server): search statistics with personIds returns 500 by @majiayu000 in <https://github.com/immich-app/immich/pull/25074>
* fix(web): server stats layout by @meesfrensel in <https://github.com/immich-app/immich/pull/25085>
* fix: enter now submits the date modals by @fabb in <https://github.com/immich-app/immich/pull/25053>
* fix(web): improve text contrast in minimized upload panel by @majiayu000 in <https://github.com/immich-app/immich/pull/25075>
* fix: propagate iCloud Shared Album flag by @alextran1502 in <https://github.com/immich-app/immich/pull/25060>
* fix: description does not rerender when navigating between assets by @alextran1502 in <https://github.com/immich-app/immich/pull/25137>
* fix(server): avoid upserting empty metadata array by @timonrieger in <https://github.com/immich-app/immich/pull/25143>
* fix(server): Document HTTP 200 response for duplicate uploads in OpenAPI by @timonrieger in <https://github.com/immich-app/immich/pull/25148>
* fix(web): person asset count doesn't update when navigating by @YarosMallorca in <https://github.com/immich-app/immich/pull/24438>
* fix(mobile): remove weird zooming behaviour on videos and play/pause button delay by @goalie2002 in <https://github.com/immich-app/immich/pull/24006>
* fix: unlock properties after successful sidecar write by @danieldietzler in <https://github.com/immich-app/immich/pull/25168>
* fix(web): show relevant navbar options for partner assets by @YarosMallorca in <https://github.com/immich-app/immich/pull/24832>
* fix(web): added background gradient for video time visibility by @HemendraSinghShekhawat in <https://github.com/immich-app/immich/pull/25138>
* feat(mobile): do not restore locally deleted assets during trash sync (Android) by @PeterOmbodi in <https://github.com/immich-app/immich/pull/24218>
* fix: asset local type casting by @alextran1502 in <https://github.com/immich-app/immich/pull/25214>
* fix(web): ocr button not clickable for stacked assets by @YarosMallorca in <https://github.com/immich-app/immich/pull/25210>
* fix(web): Handle upload failures from public users by @juliancarrivick in <https://github.com/immich-app/immich/pull/24826>
* fix(mobile): prevent system UI from hiding on drag down gesture by @goalie2002 in <https://github.com/immich-app/immich/pull/25240>
* fix: migration order by @jrasm91 in <https://github.com/immich-app/immich/pull/25249>
* fix(web): redirect to login by @jrasm91 in <https://github.com/immich-app/immich/pull/25254>
* fix(mobile): improve asset transition back to timeline by @goalie2002 in <https://github.com/immich-app/immich/pull/24485>
* fix: dark mode appbar color by @akashKarmakar02 in <https://github.com/immich-app/immich/pull/24976>
* fix(web): add min-width to setting input field by @K0lin in <https://github.com/immich-app/immich/pull/25317>
* fix(server): api key update checks by @jrasm91 in <https://github.com/immich-app/immich/pull/25363>
* fix(mobile): album selector icon visibility by @ByteSizedMarius in <https://github.com/immich-app/immich/pull/25311>
* fix(mobile): indicators not showing on thumbnail tile after asset change in viewer by @goalie2002 in <https://github.com/immich-app/immich/pull/25297>
* fix(web): handle deletion from asset viewer on map page by @meesfrensel in <https://github.com/immich-app/immich/pull/25393>
* fix: tag update race condition by @danieldietzler in <https://github.com/immich-app/immich/pull/25371>
* fix(web): allow exiting pin setup flow by @meesfrensel in <https://github.com/immich-app/immich/pull/25413>
* fix: upload file without extension by @alextran1502 in <https://github.com/immich-app/immich/pull/25419>
* fix: incorrect asset viewer scale on image frame update by @shenlong-tanwen in <https://github.com/immich-app/immich/pull/25430>
* fix(mobile): bring back map settings by @shenlong-tanwen in <https://github.com/immich-app/immich/pull/25448>
* fix(web): fix badge value in queues page by @beinganukul in <https://github.com/immich-app/immich/pull/25445>
* fix(mobile): backfill asset dimensions to exif table by @bwees in <https://github.com/immich-app/immich/pull/25483>
* fix(mobile): do not try to load video as image by @mertalev in <https://github.com/immich-app/immich/pull/25495>

### 📚 Documentation

* fix: product keys wording in commercial guidelines faq by @bo0tzz in <https://github.com/immich-app/immich/pull/24765>
* docs: config options for hardware transcoding by @Javex in <https://github.com/immich-app/immich/pull/24853>
* fix: use my.immich.app as url placeholder in docs by @bo0tzz in <https://github.com/immich-app/immich/pull/25153>
* chore:  update Thai README (remove "under active development" lines) by @ppnplus in <https://github.com/immich-app/immich/pull/25208>
* fix(docs): add missing mermaid dependency and configuration by @bdoerfchen in <https://github.com/immich-app/immich/pull/25247>
* chore(docs): update RAM req by @mmomjian in <https://github.com/immich-app/immich/pull/25344>
* feat(docs): add Free Up Space section by @aviv926 in <https://github.com/immich-app/immich/pull/25253>
* docs: update README_de_DE.md by @solluh in <https://github.com/immich-app/immich/pull/25443>
* fix(docs): document that fullsize thumbnail might redirect to original by @meesfrensel in <https://github.com/immich-app/immich/pull/25416>
* docs: update documentation by @alextran1502 in <https://github.com/immich-app/immich/pull/25440>

## New Contributors

* @wrbl606 made their first contribution in <https://github.com/immich-app/immich/pull/24820>
* @keanucz made their first contribution in <https://github.com/immich-app/immich/pull/24914>
* @rahul-kumar-saini made their first contribution in <https://github.com/immich-app/immich/pull/24650>
* @dosten made their first contribution in <https://github.com/immich-app/immich/pull/24979>
* @GustavJones made their first contribution in <https://github.com/immich-app/immich/pull/24799>
* @skrmc made their first contribution in <https://github.com/immich-app/immich/pull/25010>
* @ama156 made their first contribution in <https://github.com/immich-app/immich/pull/24890>
* @DanielRamosAcosta made their first contribution in <https://github.com/immich-app/immich/pull/24791>
* @NikhilAlapati made their first contribution in <https://github.com/immich-app/immich/pull/24688>
* @flpcury made their first contribution in <https://github.com/immich-app/immich/pull/24867>
* @Javex made their first contribution in <https://github.com/immich-app/immich/pull/24853>
* @majiayu000 made their first contribution in <https://github.com/immich-app/immich/pull/25076>
* @HemendraSinghShekhawat made their first contribution in <https://github.com/immich-app/immich/pull/24547>
* @cbochs made their first contribution in <https://github.com/immich-app/immich/pull/24620>
* @fabb made their first contribution in <https://github.com/immich-app/immich/pull/25053>
* @ppnplus made their first contribution in <https://github.com/immich-app/immich/pull/25208>
* @juliancarrivick made their first contribution in <https://github.com/immich-app/immich/pull/24826>
* @bdoerfchen made their first contribution in <https://github.com/immich-app/immich/pull/25247>
* @akashKarmakar02 made their first contribution in <https://github.com/immich-app/immich/pull/24976>
* @K0lin made their first contribution in <https://github.com/immich-app/immich/pull/25317>
* @NAM-MAN made their first contribution in <https://github.com/immich-app/immich/pull/25320>
* @ByteSizedMarius made their first contribution in <https://github.com/immich-app/immich/pull/25311>
* @arne182 made their first contribution in <https://github.com/immich-app/immich/pull/25373>
* @solluh made their first contribution in <https://github.com/immich-app/immich/pull/25443>
* @beinganukul made their first contribution in <https://github.com/immich-app/immich/pull/25445>
* @GeneralZero made their first contribution in <https://github.com/immich-app/immich/pull/25462>

**Full Changelog**: <https://github.com/immich-app/immich/compare/v2.4.1...v2.5.0>
