## Images

- [ghcr.io/blakeblackshear/frigate:0.16.2](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/544574015?tag=0.16.2)
- [ghcr.io/blakeblackshear/frigate:0.16.2-standard-arm64](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/544572653?tag=0.16.2-standard-arm64)
- [ghcr.io/blakeblackshear/frigate:0.16.2-tensorrt](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/544546613?tag=0.16.2-tensorrt)
- [ghcr.io/blakeblackshear/frigate:0.16.2-rk](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/544580630?tag=0.16.2-rk)
- [ghcr.io/blakeblackshear/frigate:0.16.2-rocm](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/544553226?tag=0.16.2-rocm)
- [ghcr.io/blakeblackshear/frigate:0.16.2-tensorrt-jp6](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/544535127?tag=0.16.2-tensorrt-jp6)

## Security Advisory
A security vulnerability was reported and addressed with this release.
- [Arbitrary File Read via Export Thumbnail "image_path" parameter](https://github.com/blakeblackshear/frigate/security/advisories/GHSA-8gv4-5jr9-v96j)

Exploiting this vulnerability requires authenticated access to Frigate.

## What's Changed
* Fix best thumbnail endpoint by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/19930
* Fix model selection type in Frigate+ settings pane by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/19952
* Fixes by @NickM-27 in https://github.com/blakeblackshear/frigate/pull/19984
* Improve live loading by not blocking UI by @NickM-27 in https://github.com/blakeblackshear/frigate/pull/19998
* feat: add github mirror download endpoint by @ZhaiSoul in https://github.com/blakeblackshear/frigate/pull/20007
* add robots.txt by @ZhaiSoul in https://github.com/blakeblackshear/frigate/pull/20093
* Improve rf-detr export by @NickM-27 in https://github.com/blakeblackshear/frigate/pull/20485
* Ensure that a user must provide an image in an expected location by @NickM-27 in https://github.com/blakeblackshear/frigate/pull/20491

## New Contributors
* @laviddichterman made their first contribution in https://github.com/blakeblackshear/frigate/pull/19951
* @AmirHoseinOmidi made their first contribution in https://github.com/blakeblackshear/frigate/pull/20306
* @mpking828 made their first contribution in https://github.com/blakeblackshear/frigate/pull/20343

**Full Changelog**: https://github.com/blakeblackshear/frigate/compare/v0.16.1...v0.16.2