This is a maintenance release for Frigate 0.18 that includes bugfixes and minor changes.

## Images

- [ghcr.io/blakeblackshear/frigate:0.18.1](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/1374545719?tag=0.18.1)
- [ghcr.io/blakeblackshear/frigate:0.18.1-standard-arm64](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/1374513342?tag=0.18.1-standard-arm64)
- [ghcr.io/blakeblackshear/frigate:0.18.1-tensorrt](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/1374612898?tag=0.18.1-tensorrt)
- [ghcr.io/blakeblackshear/frigate:0.18.1-rk](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/1374563329?tag=0.18.1-rk)
- [ghcr.io/blakeblackshear/frigate:0.18.1-rocm](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/1374662412?tag=0.18.1-rocm)
- [ghcr.io/blakeblackshear/frigate:0.18.1-tensorrt-jp6](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/1374527092?tag=0.18.1-tensorrt-jp6)
- [ghcr.io/blakeblackshear/frigate:0.18.1-synaptics](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/1374552118?tag=0.18.1-synaptics)

## What's Changed

### Security Fixes
* [GHSA-x2ch-x8hv-75xf](https://github.com/blakeblackshear/frigate/security/advisories/GHSA-x2ch-x8hv-75xf): Fix camera name collision bypassing admin check by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/24516
* [GHSA-935r-r3xx-6gmw](https://github.com/blakeblackshear/frigate/security/advisories/GHSA-935r-r3xx-6gmw): Pass only the request path to auth by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/24602
* [GHSA-6hh9-gv48-g8q6](https://github.com/blakeblackshear/frigate/security/advisories/GHSA-6hh9-gv48-g8q6): Skip malformed webpush subscriptions at startup by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/24604

### Notable Changes
* Reduce Intel QSV hwaccel CPU usage for cameras with a high incoming frame rate by @NickM-27  in https://github.com/blakeblackshear/frigate/pull/24384
* Fix semantic search reindexing by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/24407
* Back off restarts when a recording stream goes stale by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/24420
* Lock ZMQ sockets shared across threads by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/24607

## Other Changes
* update labels/faq by @blakeblackshear in https://github.com/blakeblackshear/frigate/pull/23759
* Clarify profile docs by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/24267
* Add UI field messages for recording and notifications by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/24272
* Handle sub labeled objects to still show up in review filter by @NickM-27 in https://github.com/blakeblackshear/frigate/pull/24391
* Fix explore paging for non-date sorts by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/24392
* Remove invalid hardware acceleration step in recording troubleshooting by @NickM-27 in https://github.com/blakeblackshear/frigate/pull/24395
* Add version/release link to docs site by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/24410
* Update keywords used in docs to match UI by @NickM-27 in https://github.com/blakeblackshear/frigate/pull/24436
* Add more guards for dynamically removed cameras by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/24450
* Fix ffmpeg default record preset in reference config by @lin-xianming in https://github.com/blakeblackshear/frigate/pull/24451
* Clarify MQTT docs by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/24441
* Tweaks by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/24484
* Detail XDNA2 community detector by @mitchins in https://github.com/blakeblackshear/frigate/pull/24480
* Delete timeline entries when expiring events without clips by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/24510
* Apply data check to all cases when validating a segment by @NickM-27 in https://github.com/blakeblackshear/frigate/pull/24515
* Fix record status stuck offline after ffmpeg restart by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/24522
* Fix deleting the only camera when the cameras key has a trailing comment by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/24542
* Miscellaneous fixes (0.18) by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/24567
* Revise embedding model details in config.md by @NickM-27 in https://github.com/blakeblackshear/frigate/pull/24586
* Update camera docs by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/24594
* Fix untrained classification models not saving images by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/24597
* Check export thumbnail image access by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/24603
* Save GenAI debug thumbnails on early requests by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/24615
* Reject dot-only usernames by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/24611
* Hide camera group edit button from non-admins by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/24622
* Clarify Intel GPU stats requirements by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/24632
* Fix environment_vars not reaching ffmpeg processes by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/24635
* Fix MSE buffer trim loop by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/24643
* Fix docs shm calculator by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/24649

## New Contributors
* @lin-xianming made their first contribution in https://github.com/blakeblackshear/frigate/pull/24451
* @mitchins made their first contribution in https://github.com/blakeblackshear/frigate/pull/24480

**Full Changelog**: https://github.com/blakeblackshear/frigate/compare/v0.18.0...v0.18.1