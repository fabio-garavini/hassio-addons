## Images

- [ghcr.io/blakeblackshear/frigate:0.16.3](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/601904217?tag=0.16.3)
- [ghcr.io/blakeblackshear/frigate:0.16.3-standard-arm64](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/601903526?tag=0.16.3-standard-arm64)
- [ghcr.io/blakeblackshear/frigate:0.16.3-tensorrt](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/601906947?tag=0.16.3-tensorrt)
- [ghcr.io/blakeblackshear/frigate:0.16.3-rk](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/601908239?tag=0.16.3-rk)
- [ghcr.io/blakeblackshear/frigate:0.16.3-rocm](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/601910787?tag=0.16.3-rocm)
- [ghcr.io/blakeblackshear/frigate:0.16.3-tensorrt-jp6](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/601905114?tag=0.16.3-tensorrt-jp6)

## Security Advisory
A security vulnerability was reported and addressed with this release.
- [Broken access control viewer user can delete admin and other users account](https://github.com/blakeblackshear/frigate/security/advisories/GHSA-vg28-83rp-8xx4)

Exploiting this vulnerability requires authenticated access to Frigate.

## Improvements

- Improve recording playback efficiency
- Fix certificate generation crash when using webpush notifications

## What's Changed
* version bump in docs by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/20501
* Fix YOLOv9 export script by @NickM-27 in https://github.com/blakeblackshear/frigate/pull/20514
* Fix model exports by @NickM-27 in https://github.com/blakeblackshear/frigate/pull/20540
* Update Azure OpenAI genai docs by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/20549
* Improve Reolink Camera Documentation by @NickM-27 in https://github.com/blakeblackshear/frigate/pull/20605
* Update PWA requirements and add usage section by @NickM-27 in https://github.com/blakeblackshear/frigate/pull/20562
* Update coral docs / links by @NickM-27 in https://github.com/blakeblackshear/frigate/pull/20674
* Update recommended hardware to list more models by @NickM-27 in https://github.com/blakeblackshear/frigate/pull/20777
* docs: remove webrtc not support H.265 tips by @ZhaiSoul in https://github.com/blakeblackshear/frigate/pull/20769
* Update hailo installation instructions by @NickM-27 in https://github.com/blakeblackshear/frigate/pull/20847
* Fix RF-DETR docs heading by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/20963
* add comment about unifi g5 and newer cams by @h-leth in https://github.com/blakeblackshear/frigate/pull/21003
* Fixes by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/21061
* Version bump in docs by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/21111
* Add Axis Q-6155E camera configuration details by @munit85 in https://github.com/blakeblackshear/frigate/pull/21105
* Pin onnx in rfdetr model generation command by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/21127
* Pin cryptography package version by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/21126
* Fix jetson build by @NickM-27 in https://github.com/blakeblackshear/frigate/pull/21173

## New Contributors
* @h-leth made their first contribution in https://github.com/blakeblackshear/frigate/pull/21003
* @munit85 made their first contribution in https://github.com/blakeblackshear/frigate/pull/21105

**Full Changelog**: https://github.com/blakeblackshear/frigate/compare/v0.16.2...v0.16.3