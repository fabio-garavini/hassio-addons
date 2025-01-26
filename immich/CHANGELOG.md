# v1.125.2

## ImageGenius Changes

support GPU acceleration with CUDA for machine-learning

## Immich Changes

This release continues the bug-squashing effort from migration to Kysely.

- Fixed an issue where changing the machine learning model doesn't change the vector size requirement
- Fixed an issue where the bulk location edit triggered an error
- Fixed an issue where the album cannot be loaded in the mobile app if any of the assets in the album are in the trash
- Fixed an issue where searchRandom endpoint doesn't return randomize items
- Fixed some issues regarding the timezone topic

## Support Immich

![SUPPORT THE PROJECT](https://camo.githubusercontent.com/0e4a4c9c33927ac9cf93907ec12a9b5e22f2d825954b6f2c50290269d3fa3aea/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f76312e59326c6b505463354d4749334e6a4578626a593265576335593246305a5735364d6d5234615745306444687a5a586c696458526d59575a79616a6c3162575a6964585a7063795a6c634431324d563970626e526c636d35686246396e61575a66596e6c666157516d593351395a772f3837434b4471457256664d71592f67697068792e676966)

If you find the project helpful, you can support Immich by purchasing a product key at https://buy.immich.app/.

Cheers! 🍻

## What's Changed

### 🌟 Enhancements

- chore(server): print stack in case of worker error by @etnoy in immich-app/immich#15632
- fix: increase upload timeout by @jdicioccio in immich-app/immich#15588
- fix(mobile): improve timezone picker by @gaganyadav80 in immich-app/immich#15615

### 🐛 Bug fixes

- fix(server): changing vector dim size by @mertalev in immich-app/immich#15630
- fix(server): bulk update location by @alextran1502 in immich-app/immich#15642
- fix(server): do not reset fileCreatedDate by @C-Otto in immich-app/immich#15650
- fix(server): do not count deleted assets for album summary by @C-Otto in immich-app/immich#15668
- fix(server): avoid duplicate rows in album queries by @mertalev in immich-app/immich#15670
- fix(web): neon overflow on mobile screen by @alextran1502 in immich-app/immich#15676
- fix(server): /search/random API returns same assets every call by @sudbrack in immich-app/immich#15682

## New Contributors

- @jdicioccio made their first contribution in immich-app/immich#15588
- @idkwhyiusethisname made their first contribution in immich-app/immich#15637
- @gaganyadav80 made their first contribution in immich-app/immich#15615
- @ferraridamiano made their first contribution in immich-app/immich#15683
- @sudbrack made their first contribution in immich-app/immich#15682

Full Changelog: https://github.com/immich-app/immich/compare/v1.125.2...v1.125.3
