# v3.0.3

- various bug fixes
- we push to our own F-Droid repo at https://app.futo.org/fdroid/repo now. If you're using F-Droid, please pull the application from there from now on
- fixes an issue where LivePhotos upload from the background isn't showing up. 

> [!Note]
> In some specific circumstances, newly uploaded Live Photos could have broken thumbnails. If you see any such cases, please run the "missing" job for thumbnails or wait for the respective nightly job to clear it up.

<!-- Release notes generated using configuration in .github/release.yml at v3.0.3 -->

## What's Changed
### 🚀 Features
* feat: publish app releases to FUTO F-Droid repo by @bo0tzz in https://github.com/immich-app/immich/pull/29804
### 🐛 Bug fixes
* fix(web): closing plugin method picker selects "unknown" method by @benbeckford in https://github.com/immich-app/immich/pull/29784
* fix: unauthorized album owner update by @danieldietzler in https://github.com/immich-app/immich/pull/29883
* fix: still part of live photo hidden on bg upload by @shenlong-tanwen in https://github.com/immich-app/immich/pull/29884
* fix: system appbar icon color has incorrect color in asset viewer by @alextran1502 in https://github.com/immich-app/immich/pull/29885
* fix: locked visibility in search random endpoint by @danieldietzler in https://github.com/immich-app/immich/pull/29887
* fix(mobile): send a full datetime from the android memories widget by @santoshakil in https://github.com/immich-app/immich/pull/29689
* fix: memory search date validation by @danieldietzler in https://github.com/immich-app/immich/pull/29907
* fix(server): set hvc1 tag when using hwa by @mertalev in https://github.com/immich-app/immich/pull/29908
* fix(mobile): clear zoom state when swapping assets by @agg23 in https://github.com/immich-app/immich/pull/29909
* fix: Ken Burns effect on sliver app bar jittery on Android by @alextran1502 in https://github.com/immich-app/immich/pull/29890
### 📚 Documentation
* fix(docs): update fdroid link  by @mmomjian in https://github.com/immich-app/immich/pull/29797
* feat: system integrity docs by @danieldietzler in https://github.com/immich-app/immich/pull/29911
### 🌐 Translations
* chore(web): update translations by @weblate in https://github.com/immich-app/immich/pull/29774
* fix(mobile): correct person age singular pluralization by @tech00exploere in https://github.com/immich-app/immich/pull/29868

## New Contributors
* @tech00exploere made their first contribution in https://github.com/immich-app/immich/pull/29868

**Full Changelog**: https://github.com/immich-app/immich/compare/v3.0.2...v3.0.3