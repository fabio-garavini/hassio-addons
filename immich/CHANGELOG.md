# v1.139.4

> \[!WARNING]
> **BREAKING CHANGES**: from this release HTTPS is enabled by default! 
>
> If you already have a `/ssl/certfile.pem` and `/ssl/privkey.pem` setup, it will use that certificate.
> Otherwise it will generate a self signed certificate. 
>
> You can always change this in the `Configuration` tab

## Hassio addon
* add support for ssl certificate
* improved documentation

## What's Changed
### 🐛 Bug fixes
* fix: cannot load thumbnail from unknown content length by @alextran1502 in https://github.com/immich-app/immich/pull/21192
* fix: border around dark theme button on onboarding page by @NicholasFlamy in https://github.com/immich-app/immich/pull/20846
* fix(web): handle edge cases in timeToSeconds function to prevent crashes by @baldarn in https://github.com/immich-app/immich/pull/21019
* fix: use composite cache key in user circle avatar by @shenlong-tanwen in https://github.com/immich-app/immich/pull/21220
* fix: wait for watched files to finish being written (#17100) by @TapuCosmo in https://github.com/immich-app/immich/pull/21180

## New Contributors
* @baldarn made their first contribution in https://github.com/immich-app/immich/pull/21019

**Full Changelog**: https://github.com/immich-app/immich/compare/v1.139.3...
