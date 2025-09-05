# v1.140.1

> \[!WARNING\] 
> **BREAKING CHANGES**: from this release HTTPS is enabled by default!  
> 
> If you already have a `/ssl/certfile.pem` and `/ssl/privkey.pem` setup, it will use that certificate. 
> Otherwise it will generate a self signed certificate.  
> 
> You can always change this in the `Configuration` tab

## Hassio addon

* workaround for no thumbnail generation on aarch64
* clean Redis cache

### 📦 More storage please 📦

* added support to mount external hard drives inside the Immich addon
* added support for internal SMB and NFS shares mount


### 🚄 Faster then ever 🚄

* Now connections from Immich to Postgres and Redis use Unix sockets, which **reduce overhead and improve performance**

### 🎉 Storage Migration 🎉

Moving your media library has never been easier, just change the Media Library path

### 🔓 HTTPS by default 🔓
 * add support for ssl certificate
 * self signed certificate enabled by default

## What's Changed
### 🐛 Bug fixes
* fix(server): folder sort order by @skatsubo in https://github.com/immich-app/immich/pull/21383
* fix(server): refresh faces query by @mertalev in https://github.com/immich-app/immich/pull/21380
* fix(devcontainer): logging typo by @aaronliu0130 in https://github.com/immich-app/immich/pull/21415
* fix(mobile): memory lane query causes Photos page render a gray screen by @mertalev in https://github.com/immich-app/immich/pull/21422
* fix: default zoom level when location is not set by @bwees in https://github.com/immich-app/immich/pull/21428
* fix(web): Prevent changing asset location triggering keyboard shortcuts by @Snowknight26 in https://github.com/immich-app/immich/pull/21451
* fix: network criteria for upload LivePhotos by @alextran1502 in https://github.com/immich-app/immich/pull/21386
* fix: show "preparing" when sharing in beta timeline by @bwees in https://github.com/immich-app/immich/pull/21390
### 📚 Documentation
* chore(docs): Avoid /data in external library examples by @skatsubo in https://github.com/immich-app/immich/pull/21357

## New Contributors
* @aaronliu0130 made their first contribution in https://github.com/immich-app/immich/pull/21415

**Full Changelog**: https://github.com/immich-app/immich/compare/v1.140.0...v1.140.1