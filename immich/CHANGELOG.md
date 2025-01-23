# v1.125.1

There was a hiccup with the release pipeline for v1.125.0 so we have to change the version

## Highlights

Welcome to release `v1.125.1` of Immich. The release improves how the server queries the database, using a type-safe query builder, Kysely, instead of relying on the magic of TypeORM. Many queries have been given a speed boost to be much faster; some got several times faster. You should see a quicker app experience overall. It has been the work for the last couple of months and a foundation we have been building for many changes in the coming months to the data model of the whole app, which is needed to enable some long-awaited features. Kudos to the entire team for completing it. Alongside that improvement, this release also brings new features, enhancements, and bug fixes. Please see some of the highlights below:

- Node.js security update
- Share-to mechanism on the mobile app
- Enable slideshow everywhere on the web app.
- Fixed a bug where the Android app cannot get newly taken photos from the gallery. However, this fix requires us to roll back another mechanism that allows the app to choose empty albums as targets for backup.
- Fixed a bug where playing particular video codecs would crash the Android mobile app.

## Node.js security update

This release includes a Node.js security update. While we don’t believe any of these vulnerabilities affect Immich, we still recommend updating soon to avoid any risk.
Share-to Immich

You can now directly share media from other apps to Immich without saving them to the phone’s local gallery first.

> [!Important]
>
>For uploading photos from the gallery, it is still recommeded to use the built-in backup feature since the share-to mechanism that can cause mismatching upload status. Additionally, iOS defaults to sharing an exported JPEG image instead of the original for formats like HEIC. You can change this by tapping “Options” near the top of the iOS sharing menu and selecting “Current” instead of “Automatic”.

### Slideshow everywhere

You can now toggle the slideshow mode from all the views on the web app.

### Lens information

This release includes the lens information in the detail panel for our photographer users, making it easier to know which of your favorite lenses was used to capture the photo.

![Screenshot 2025-01-19 at 8 59 41 PM](https://private-user-images.githubusercontent.com/30203091/404751187-783ab479-08ae-4525-abf5-23cf27c312cc.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzc2NzQxNjAsIm5iZiI6MTczNzY3Mzg2MCwicGF0aCI6Ii8zMDIwMzA5MS80MDQ3NTExODctNzgzYWI0NzktMDhhZS00NTI1LWFiZjUtMjNjZjI3YzMxMmNjLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAxMjMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMTIzVDIzMTEwMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTVlYzk2MTk5MmM2OGQyODE5NzJlYzA5MGQ3MzY3ZmU1YWExZDZhN2M0M2M1ODM2M2U1ZTU2YmE2NjBmYzMzOTImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.5s87OMhcPYZMbCq-dku0cTfVYhfRH5sWHZPLjj8Fszc)
Support Immich

![SUPPORT THE PROJECT!](https://camo.githubusercontent.com/0e4a4c9c33927ac9cf93907ec12a9b5e22f2d825954b6f2c50290269d3fa3aea/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f76312e59326c6b505463354d4749334e6a4578626a593265576335593246305a5735364d6d5234615745306444687a5a586c696458526d59575a79616a6c3162575a6964585a7063795a6c634431324d563970626e526c636d35686246396e61575a66596e6c666157516d593351395a772f3837434b4471457256664d71592f67697068792e676966)

If you find the project helpful, you can support Immich by purchasing a product key at https://buy.immich.app/.

Cheers! 🍻

## What's Changed

### 🚨 Breaking Changes

- chore(server)!: default max bitrate unit to kbps by @mertalev in #15264
- feat: better spec urls by @jrasm91 in #15487

### 🚀 Features

- feat: Upgrade devcontainer setup by @Zer0x00 in #14419
- feat(web): immich-ui components by @jrasm91 in #14263
- feat(mobile): share to mechanism by @alextran1502 in #15229
- feat: Allow multiple ML models to be preloaded by @1-tempest in #15418

### 🌟 Enhancements

- refactor(server): use kysely by @mertalev in #12857
- feat: #15237 toggle password visibility on shared albums by @imakida in #15238
- feat(web): Slideshow is enabled everywhere. It no longer needs assetStore. by @matitalatina in #15077
- feat: Add additional env variables for Machine Learning by @1-tempest in #15326
- feat(web): Context menu scrolls on small devices by @matitalatina in #15367
- feat: Add additional env variables to ML container by @1-tempest in #15398
- feat: Add rule on robots.txt to allow robots access og tags by @r1235613 in #15470
- feat(web): Show lens model in the asset viewer detail panel by @bxtdvd in #15460

### 🐛 Bug fixes

- fix(mobile): 15072 Fix issue with boolean filters filtering out results when they shouldn't by @Tyris in #15208
- fix(web): escape key to clear selection and go to previous page (#15142) by @jinxuan-owyong in #15219
- fix(mobile): don't crash android app when video player throws exception by @mertalev in #15236
- fix(web): mismatched deviceAssetId when uploading images by @jinxuan-owyong in #15130
- fix(cli): handle folders with single quotes by @desmondgc in #15283
- fix(web): end selection after click when choosing thumbnail, and notify by @imakida in #15373
- fix(web): map settings by @jrasm91 in #15375
- fix(mobile): 14983 Images upload to shared album with common name by @Tyris in #15127
- fix(web): Update asset count when deleting assets from person page by @imakida in #15416
- fix(web): scrolling memory timeline reset position by @alextran1502 in #15429
- fix(mobile): Cannot type date format on Samsung phone by @alextran1502 in #15430
- fix(deps): use node-addon-api v8 by @dotlambda in #15438
- fix(server): searching for multiple people yields false positives by @dav-wolff in #15447
- fix(mobile): cannot get new photos on Android by @alextran1502 in #15461
- fix: incorrect event configuration by @jrasm91 in #15530

### 📚 Documentation

- chore(docs): clarify experimental network features by @mmomjian in #15228
- docs: clarify filesystem backup paths by @bo0tzz in #15243
- fix(docs): Fix link label to refer to correct location on page by @austin-dudzik in #15279
- fix(docs): fix admonition in mobile section by @Dr-Electron in #15291
- fix(docs): database name for restore commands by @mmomjian in #15276
- fix(docs): Update unraid.md to use correct image url by @swils23 in #15427
- fix: grammar on docs homepage by @aaronjrodrigues in #15455
- fix: broken link on monitoring page by @jsloyer in #15478
- feat(docs): CIFS/Samba in-Docker example by @mmomjian in #15502

### 🌐 Translations

- chore(web): update translations by @weblate in #15145
- chore(web): update translations by @weblate in #15335

## New Contributors

- @jinxuan-owyong made their first contribution in #15219
- @fholzer made their first contribution in #15266
- @desmondgc made their first contribution in #15283
- @austin-dudzik made their first contribution in #15279
- @Dr-Electron made their first contribution in #15291
- @Zer0x00 made their first contribution in #14419
- @yonran made their first contribution in #12794
- @1-tempest made their first contribution in #15326
- @swils23 made their first contribution in #15427
- @dav-wolff made their first contribution in #15447
- @r1235613 made their first contribution in #15470
- @jsloyer made their first contribution in #15478
- @bxtdvd made their first contribution in #15460

**Full Changelog:** [v1.124.2...v1.125.0](https://github.com/immich-app/immich/compare/v1.124.2...v1.125.0)
