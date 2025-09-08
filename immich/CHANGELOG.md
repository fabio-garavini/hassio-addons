# v1.141.1
## Highlight
Welcome to the release `v1.141.1` of Immich, as hot as this summer gets, the beta timeline is ready to be taken out of the kitchen, now with more features and bug fixes. Let’s dive right in while it’s still hot


* \[beta\] Auto-add uploaded assets to albums
* View similar photos
* DigitalOcean 1-click deployment
* Notable fix - thumbnail generation for 200MP HEIC images


### \[beta\] Auto-add uploaded assets to albums.

This feature has made its way back to the beta timeline. You can enable this feature on the `Backup Options` page. The current selected albums for backup will be linked with the album of the same name on the server, or a new album will be created if those albums don’t exist. Assets uploaded will be placed in the respective linked album.

<p align="center">
<img width="300" alt="image" src="https://github.com/user-attachments/assets/06aee5e9-c228-47af-8f66-1e42954e4964" />
</p>

### View similar photos

On the web, you can now look for similar photos or videos when viewing an asset by clicking on the `context menu > Find similar photos`. Powered by CLIP search to quickly identify photos with similar scenery and context

<p align="center">
<img width="600" alt="image" src="https://github.com/user-attachments/assets/88e92f5d-28a3-44c6-8a35-7205ec901b1b" />
<img width="600" alt="image" src="https://github.com/user-attachments/assets/bd9ce189-652c-490b-8e3b-f07c981aaa1a" />
</p>

### Digital Ocean 1-Click Deployment

To help users who are interested in trying out the application without setting it up on their infrastructure, or who do not have the infrastructure available yet. We now have the option to deploy Immich directly on DigitalOcean.

The default configuration is the smallest pod size that can run Immich comfortably. The new instance is set up with a default reverse proxy that handles TLS. For more information, you can read [here](https://marketplace.digitalocean.com/apps/immich).

You can give it a try by clicking the button below

<p align="center">
<a href="https://cloud.digitalocean.com/droplets/new?onboarding_origin=marketplace&appId=198842662&image=futo-immich&activation_redirect=%2Fdroplets%2Fnew%3FappId%3D198842662%26image%3Dfuto-immich">
 <img width="252"  alt="image" src="https://github.com/user-attachments/assets/096b2035-9a3f-4288-9302-13cbd1d720b9" />
</a>
</p>

## Support Immich


<p align="center">

<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjY2eWc5Y2F0ZW56MmR4aWE0dDhzZXlidXRmYWZyajl1bWZidXZpcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/87CKDqErVfMqY/giphy.gif" width="450" title="SUPPORT THE PROJECT!"> 

</p>

If you find the project helpful, you can support Immich by purchasing a product key at https://buy.immich.app or our merchandise at https://immich.store

<!-- Release notes generated using configuration in .github/release.yml at v1.141.1 -->

## What's Changed
### 🚀 Features
* feat: view similar photos by @normana10 in https://github.com/immich-app/immich/pull/21108
* feat: album info sync by @alextran1502 in https://github.com/immich-app/immich/pull/21103
### 🌟 Enhancements
* fix(web): wait for image to load before playing memories. by @dagstuan in https://github.com/immich-app/immich/pull/19757
* feat(mobile): copy file name by long-press by @YarosMallorca in https://github.com/immich-app/immich/pull/21469
* feat(mobile): add to albums from existing albums by @pedrosimao in https://github.com/immich-app/immich/pull/21554
* feat(mobile): scrubber haptics (beta timeline) by @YarosMallorca in https://github.com/immich-app/immich/pull/21351
### 🐛 Bug fixes
* fix(mobile): readonly mode disable tabs when in landscape mode by @bwees in https://github.com/immich-app/immich/pull/21475
* fix(web): Show full date when hovering over photos date groups by @Snowknight26 in https://github.com/immich-app/immich/pull/21462
* fix(mobile): increase thumbnail resolution by @mertalev in https://github.com/immich-app/immich/pull/21502
* fix: show TabShellRoute when cold starting from deeplink by @bwees in https://github.com/immich-app/immich/pull/21376
* fix: filter null duplicate assets by @ItzDerock in https://github.com/immich-app/immich/pull/21507
* fix(mobile): decoding at higher resolution than necessary by @mertalev in https://github.com/immich-app/immich/pull/21503
* fix(mobile): ensure current asset is set in asset viewer by @mertalev in https://github.com/immich-app/immich/pull/21504
* fix: handle datetime outside the valid range supported by dart by @shenlong-tanwen in https://github.com/immich-app/immich/pull/21526
* fix: set specific AssetUpload permission on checkBulkUpload endpoint by @bo0tzz in https://github.com/immich-app/immich/pull/21470
* fix: iOS portrait photo saved as jpg extension by @alextran1502 in https://github.com/immich-app/immich/pull/21388
* fix: local sync task never runs on iOS by @shenlong-tanwen in https://github.com/immich-app/immich/pull/21491
* fix: keyboard not dismissed in places page by @shenlong-tanwen in https://github.com/immich-app/immich/pull/21583
* fix(mobile): pause image loading on inactive state by @mertalev in https://github.com/immich-app/immich/pull/21543
* fix(mobile): readonly mode fixes by @Sud-Puth in https://github.com/immich-app/immich/pull/21545
* fix(mobile): Hide system UI when entering immersive mode in asset viewer by @goalie2002 in https://github.com/immich-app/immich/pull/21539
* fix(web): Make Manage location utility header responsive by @Snowknight26 in https://github.com/immich-app/immich/pull/21480
* fix(mobile): pinch + move scale by @waclaw66 in https://github.com/immich-app/immich/pull/21332
* fix: retain filter and sort options when pulling to refresh by @bwees in https://github.com/immich-app/immich/pull/21452
* fix: sidecar check job by @jrasm91 in https://github.com/immich-app/immich/pull/21312
* fix: use lock to synchronise foreground and background backup by @shenlong-tanwen in https://github.com/immich-app/immich/pull/21522
* fix: asset upload metadata validation by @jrasm91 in https://github.com/immich-app/immich/pull/21594
* chore(deps): bump sharp to 0.34.3 by @mertalev in https://github.com/immich-app/immich/pull/21596
* fix(mobile): Correction of image creation date by using mtime instead… by @StarGest in https://github.com/immich-app/immich/pull/21508
* fix(mobile): location button map beta timeline by @YarosMallorca in https://github.com/immich-app/immich/pull/21590
* fix(server): consider asset creation date when EXIF is missing by @riccardoruspoli in https://github.com/immich-app/immich/pull/21586
* fix: memory not getting refreshed on new day by @alextran1502 in https://github.com/immich-app/immich/pull/21623
* chore: robust isolation tasks coordination by @alextran1502 in https://github.com/immich-app/immich/pull/21605
### 🌐 Translations
* chore(web): update translations by @weblate in https://github.com/immich-app/immich/pull/21130
* chore(web): update translations by @weblate in https://github.com/immich-app/immich/pull/21464

## New Contributors
* @ItzDerock made their first contribution in https://github.com/immich-app/immich/pull/21507
* @pedrosimao made their first contribution in https://github.com/immich-app/immich/pull/21554
* @goalie2002 made their first contribution in https://github.com/immich-app/immich/pull/21539
* @StarGest made their first contribution in https://github.com/immich-app/immich/pull/21508
* @riccardoruspoli made their first contribution in https://github.com/immich-app/immich/pull/21586

**Full Changelog**: https://github.com/immich-app/immich/compare/v1.140.1...v1.141.1