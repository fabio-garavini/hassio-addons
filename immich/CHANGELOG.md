# v1.133.1

## Highlights

- Lower disk usage during VectorChord migration
- Adds move to locked album button to more views on the web
- Fixes a bug where the missing button for the duplicate detection job is not working
- Fixes a bug where a hard link does not navigate to the asset location on the timeline
- Fixes a bug where styling information is missing in some cases
- Fixes a bug where locked assets show up in local album view if it is presented on the phone
- Fixes some translation issues

<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### 🌟 Enhancements
* feat: lower disk usage during migration by @mertalev in https://github.com/immich-app/immich/pull/18440
* fix: mobile user agent set to immich_platform_version by @zackpollard in https://github.com/immich-app/immich/pull/18478
* feat(web): add to locked folder in album and search by @wuzihao051119 in https://github.com/immich-app/immich/pull/18488
### 🐛 Bug fixes
* fix(server): missing button for duplicate detection not working by @mertalev in https://github.com/immich-app/immich/pull/18433
* fix(web): pin code input by @wuzihao051119 in https://github.com/immich-app/immich/pull/18456
* fix(web): Locked folder by @mmomjian in https://github.com/immich-app/immich/pull/18438
* fix: translations from background service by @shenlong-tanwen in https://github.com/immich-app/immich/pull/18473
* fix: more z-index issue by @alextran1502 in https://github.com/immich-app/immich/pull/18493
* fix(web): multi-select by @wuzihao051119 in https://github.com/immich-app/immich/pull/18485
* fix: translation vibes by @shenlong-tanwen in https://github.com/immich-app/immich/pull/18490
* fix(mobile): chinese translation by @alextran1502 in https://github.com/immich-app/immich/pull/18491
* fix: hard link navigation by @alextran1502 in https://github.com/immich-app/immich/pull/18489
* fix(mobile): don't show locked asset in local album view by @alextran1502 in https://github.com/immich-app/immich/pull/18536
* fix: tailwind issues by @danieldietzler in https://github.com/immich-app/immich/pull/18528
### 📚 Documentation
* fix(docs): more vchord details by @mmomjian in https://github.com/immich-app/immich/pull/18435
* fix(docs): mention `DB_VECTOR_EXTENSION` env in pgvector->vchord migration guide by @mertalev in https://github.com/immich-app/immich/pull/18508
### 🌐 Translations
* fix: typo in english translation by @cgkantidis in https://github.com/immich-app/immich/pull/18434
* chore(web): update translations by @weblate in https://github.com/immich-app/immich/pull/18391

## New Contributors
* @cgkantidis made their first contribution in https://github.com/immich-app/immich/pull/18434

**Full Changelog**: https://github.com/immich-app/immich/compare/v1.133.0...