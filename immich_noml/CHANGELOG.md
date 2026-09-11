Welcome to Immich `v3.1.0`!

This release includes several quality of life improvements and another round of bug fixes. Keep reading below for the complete highlights.

## Highlights

- Upload wakelock (web)
- Undo archive (web)
- Filter assets by server filepath (workflows)
- Quick navigate to maintenance page (web)
- Better slideshow button accessibility (web)
- OIDC role claim sync improvements (OAuth)
- Invalidate sessions on password reset (admin-cli)

### Upload wakelock (web)

Similar to mobile, the web application will now automatically acquire a wakelock to prevent the screen from dimming while uploads are happening. This feature will require an HTTPS connection.

### Undo archive (web)

After archiving assets, the success notification now has an “undo” button to undo the action.

![Undo button on success notification](https://static.immich.cloud/blog/48ff8c50-260a-4114-a8a0-117d8989f622/48fe5c0071ecd3700696ea24516267dd.webp)

### Filter assets by server filepath (workflows)

The asset file filter has a new option “Use path”. When set to true, it will filter based on the actual path on the server rather than the original file name.

![](https://static.immich.cloud/blog/48ff8c50-260a-4114-a8a0-117d8989f622/f75b6701af0ad0acd16f281106e5d571.webp)

### Filter assets by EXIF metadata (workflows)

A new workflow filter has been added that allows you to filter assets based on their EXIF metadata fields. For now it only supports string comparisons, with numerical comparisons expected to come soon.

<img width="700" alt="Filter by EXIF metadata step configuration options" src="https://static.immich.cloud/blog/48ff8c50-260a-4114-a8a0-117d8989f622/10dbcaddcbeb9bfa7cab1e4029e0f70b.webp" />

### Quick navigate to maintenance page (web)

The command palette (`CTRL+K` or `/`) now includes an item for the maintenance page.

<img width="600" alt="Command palette with a maintenance page item" src="https://static.immich.cloud/blog/48ff8c50-260a-4114-a8a0-117d8989f622/28134831c6b1a5f1919ceecdadc1ae54.webp" />

### Better slideshow button visibility (web)

The slideshow buttons on the web are now wrapped in a container with a backdrop blur, making them easier to view when the current asset is very light.

![Slideshow controls on a low contrast image](https://static.immich.cloud/blog/48ff8c50-260a-4114-a8a0-117d8989f622/496215825fbad61a3b2a0c640b5c3aeb.webp)

### OIDC role claim sync improvements (OAuth)

The OAuth integration in Immich supports setting an initial `isAdmin` value for new users via a role claim. This same process has been updated to now _sync_ `isAdmin` on subsequent logins. Additionally, the role claim now supports both single values (`immich_role: 'admin'`) in addition to lists of values ( `immich_role: ["admin", "user"]`), making in more flexible.

### Invalidate sessions on password reset (admin-cli)

When using the admin command line interface to reset a password, there is now a new option to invalidate existing sessions.

```none
immich-admin reset-admin-password
Found Admin:
- ID=e65e6f88-2a30-4dbe-8dd9-1885f4889b53
- OAuth ID=
- Email=admin@example.com
- Name=Immich Admin
? Please choose a new password (optional) immich-is-cool
? Invalidate existing sessions? Yes
The admin password has been updated.
```

### Date range for map (mobile)

Similar to web, mobile now also supports filtering the map for assets within a given date range.

<img width="500" alt="Mobile map settings page date range options" src="https://static.immich.cloud/blog/48ff8c50-260a-4114-a8a0-117d8989f622/be25f538bcb69574ff21c15c2aa64b27.webp" />

---

<!-- Release notes generated using configuration in .github/release.yml at v3.1.0 -->

## What's Changed

### 🚨 Breaking Changes

- chore(mobile): drop support for iOS 14 by @agg23 in <https://github.com/immich-app/immich/pull/29780>

### 🚀 Features

- feat(cli): Add --visibility flag to immich CLI upload subcommand by @yuxincs in <https://github.com/immich-app/immich/pull/29614>
- feat(mobile): custom date range for map by @YarosMallorca in <https://github.com/immich-app/immich/pull/26205>

### 🌟 Enhancements

- feat(web): Keep show more open on duplicates by @MontejoJorge in <https://github.com/immich-app/immich/pull/29734>
- fix(server/workflow): add trigger for external libraries AssetCreate by @cratoo in <https://github.com/immich-app/immich/pull/29597>
- chore(seo): remove redundant twitter metadata tags by @cevdetta in <https://github.com/immich-app/immich/pull/29801>
- feat(web): add wake lock when uploading assets by @diogotcorreia in <https://github.com/immich-app/immich/pull/29820>
- feat(web): undo archive from toast by @YarosMallorca in <https://github.com/immich-app/immich/pull/27061>
- feat: workflow filter assets by upload path by @benbeckford in <https://github.com/immich-app/immich/pull/30000>
- feat(web): add maintenance link to command palette by @yamishi13 in <https://github.com/immich-app/immich/pull/30016>
- feat: add album asset event handling by @timonrieger in <https://github.com/immich-app/immich/pull/29008>
- fix(web): improve slideshow controls visibility on bright backgrounds by @tech00exploere in <https://github.com/immich-app/immich/pull/29950>
- fix: re-evaluate OIDC role claim on every login and support array values by @ImperatorRuscal in <https://github.com/immich-app/immich/pull/29991>
- feat: exif metadata workflow filter by @benbeckford in <https://github.com/immich-app/immich/pull/29295>
- feat: password invalidate sessions by @jrasm91 in <https://github.com/immich-app/immich/pull/30125>

### 🐛 Bug fixes

- fix(mobile): apply exif orientation to remote raw photos on android by @santoshakil in <https://github.com/immich-app/immich/pull/29906>
- fix(web): hide stack thumbnail tray in slideshow mode by @tech00exploere in <https://github.com/immich-app/immich/pull/29918>
- fix(web): use Container component for responsive admin maintenance la… by @tech00exploere in <https://github.com/immich-app/immich/pull/29917>
- fix(server): updated default CSP config to support videos from V3 player by @l0ll098 in <https://github.com/immich-app/immich/pull/29830>
- fix(server): workflow date filter, make end date inclusive by @kigrup in <https://github.com/immich-app/immich/pull/29876>
- fix(web): URI encode slug and reduce confusion for users by @meesfrensel in <https://github.com/immich-app/immich/pull/29796>
- fix(web): clear birth date by @danieldietzler in <https://github.com/immich-app/immich/pull/29959>
- fix(server): disable heif security limit by @mertalev in <https://github.com/immich-app/immich/pull/29954>
- fix: zero byte image uploads by @rrrockey in <https://github.com/immich-app/immich/pull/29426>
- fix(server): return workflow steps in ascending order by @benbeckford in <https://github.com/immich-app/immich/pull/29999>
- fix(mobile): update album creation to use user-defined name from dialog by @LeLunZ in <https://github.com/immich-app/immich/pull/30002>
- fix: long press share quality override preference settings by @alextran1502 in <https://github.com/immich-app/immich/pull/30030>
- fix(web): align ContextMenu z-index with design-system token by @tech00exploere in <https://github.com/immich-app/immich/pull/30015>
- fix(web): refresh folder view after asset deletion by @tech00exploere in <https://github.com/immich-app/immich/pull/29899>
- fix: do not show the whats new page on fresh login by @shenlong-tanwen in <https://github.com/immich-app/immich/pull/30072>
- fix(mobile): prevent crash on video widget dispose by @agg23 in <https://github.com/immich-app/immich/pull/30078>
- fix(web): attach file picker input to DOM so iOS Safari fires change … by @mrxder in <https://github.com/immich-app/immich/pull/29660>
- fix: timebuckets locked permissions by @danieldietzler in <https://github.com/immich-app/immich/pull/30066>
- fix: search statistics locked folder permissions by @danieldietzler in <https://github.com/immich-app/immich/pull/30063>
- fix(web): fix Country/State filters when set to Unknown by @compscitwilight in <https://github.com/immich-app/immich/pull/30026>
- fix(server): file uploads for files with extension only filenames by @compscitwilight in <https://github.com/immich-app/immich/pull/30024>
- fix(mobile): stop double close animation when dismissing an asset by @santoshakil in <https://github.com/immich-app/immich/pull/29413>
- fix(mobile): back up files moved into a watched folder on android by @santoshakil in <https://github.com/immich-app/immich/pull/29872>
- fix(web): lens model search by @jrasm91 in <https://github.com/immich-app/immich/pull/30088>
- fix(mobile): add album picker to the partner view bottom sheet by @santoshakil in <https://github.com/immich-app/immich/pull/30099>
- fix(mobile): prevent duplicate album creation during submission by @LeLunZ in <https://github.com/immich-app/immich/pull/30003>
- fix(mobile): properly group download tasks for Live Photos by @agg23 in <https://github.com/immich-app/immich/pull/29952>
- fix(mobile): show real error when an asset can't be added to an album by @santoshakil in <https://github.com/immich-app/immich/pull/29754>
- fix(mobile): treat wired ethernet as unmetered on ios by @santoshakil in <https://github.com/immich-app/immich/pull/29351>
- fix(server): send id\_token\_hint on OIDC logout by @lorypota in <https://github.com/immich-app/immich/pull/29720>
- fix(mobile): refresh asset stack after deleting viewer item by @PeterOmbodi in <https://github.com/immich-app/immich/pull/28164>
- fix: limit ocr overlay to images by @YarosMallorca in <https://github.com/immich-app/immich/pull/30116>
- fix: disable slideshow crossfade on reduced motion by @YarosMallorca in <https://github.com/immich-app/immich/pull/29826>
- fix(mobile): map unresponsive after viewing asset by @YarosMallorca in <https://github.com/immich-app/immich/pull/27036>
- fix(mobile): send date-only value for memories query param by @ajuijas in <https://github.com/immich-app/immich/pull/30049>
- fix: admin user details responsive layout by @YarosMallorca in <https://github.com/immich-app/immich/pull/30114>
- fix: backup delay translation key parsing by @YarosMallorca in <https://github.com/immich-app/immich/pull/30112>
- fix(web): use correct date field for shift-click range in Recently Added by @okxint in <https://github.com/immich-app/immich/pull/30071>
- fix(server): dissolve stack when its non-primary assets are deleted by @justadityaraj in <https://github.com/immich-app/immich/pull/29354>
- fix: always set extension from provided file by @bo0tzz in <https://github.com/immich-app/immich/pull/29839>
- fix: locked view and asset view provider by @shenlong-tanwen in <https://github.com/immich-app/immich/pull/30136>
- fix(mobile): birthday picker date order follows locale by @santoshakil in <https://github.com/immich-app/immich/pull/29419>
- fix(web): restore correct back route when opening person asset via direct URL by @okxint in <https://github.com/immich-app/immich/pull/30129>
- fix(web): mirror asset viewer navigation icons in RTL by @noboike in <https://github.com/immich-app/immich/pull/30151>
- fix(mobile): allow URL validation to pass when scheme is not provided by @agg23 in <https://github.com/immich-app/immich/pull/30142>
- fix: run background tasks in root isolate by @shenlong-tanwen in <https://github.com/immich-app/immich/pull/30101>
- fix(web): mirror onboarding navigation icons in RTL by @noboike in <https://github.com/immich-app/immich/pull/30158>
- fix: min faces user preference by @jrasm91 in <https://github.com/immich-app/immich/pull/30177>
- fix(web): use RTL transform origin in AdaptiveImage by @noboike in <https://github.com/immich-app/immich/pull/30182>
- fix: don't skip person thumbnail generation if ML is disabled by @bo0tzz in <https://github.com/immich-app/immich/pull/30194>
- fix: shared by user detail panel by @danieldietzler in <https://github.com/immich-app/immich/pull/30187>
- fix(mobile): prevent timeline scroll to top on unrelated pages by @agg23 in <https://github.com/immich-app/immich/pull/30281>

### 📚 Documentation

- chore(security.txt): bump expired Expires field (RFC 9116) by @kobihikri in <https://github.com/immich-app/immich/pull/29932>
- fix(docs): remove ref to synology channel by @mmomjian in <https://github.com/immich-app/immich/pull/30051>
- fix: hypertext link to example docker-compose.rootless.yml by @upmcplanetracker in <https://github.com/immich-app/immich/pull/30155>

### 🌐 Translations

- feat(docs): add bulgarian readme by @nedevski in <https://github.com/immich-app/immich/pull/29427>
- chore(web): update translations by @weblate in <https://github.com/immich-app/immich/pull/29781>

## New Contributors

- @kobihikri made their first contribution in <https://github.com/immich-app/immich/pull/29932>
- @kigrup made their first contribution in <https://github.com/immich-app/immich/pull/29876>
- @yuxincs made their first contribution in <https://github.com/immich-app/immich/pull/29614>
- @cevdetta made their first contribution in <https://github.com/immich-app/immich/pull/29801>
- @mrxder made their first contribution in <https://github.com/immich-app/immich/pull/29660>
- @compscitwilight made their first contribution in <https://github.com/immich-app/immich/pull/30026>
- @nedevski made their first contribution in <https://github.com/immich-app/immich/pull/29427>
- @yamishi13 made their first contribution in <https://github.com/immich-app/immich/pull/30016>
- @lorypota made their first contribution in <https://github.com/immich-app/immich/pull/29720>
- @ImperatorRuscal made their first contribution in <https://github.com/immich-app/immich/pull/29991>
- @ajuijas made their first contribution in <https://github.com/immich-app/immich/pull/30049>
- @justadityaraj made their first contribution in <https://github.com/immich-app/immich/pull/29354>
- @pavel-miniutka made their first contribution in <https://github.com/immich-app/immich/pull/29939>
- @noboike made their first contribution in <https://github.com/immich-app/immich/pull/30151>
- @upmcplanetracker made their first contribution in <https://github.com/immich-app/immich/pull/30155>

**Full Changelog**: <https://github.com/immich-app/immich/compare/v3.0.3...v3.1.0>