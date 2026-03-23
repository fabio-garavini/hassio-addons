This is a maintenance release for Frigate 0.17 that includes bugfixes and minor changes.

## Images

- [ghcr.io/blakeblackshear/frigate:0.17.1](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/746059848?tag=0.17.1)
- [ghcr.io/blakeblackshear/frigate:0.17.1-standard-arm64](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/746055204?tag=0.17.1-standard-arm64)
- [ghcr.io/blakeblackshear/frigate:0.17.1-tensorrt](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/746069732?tag=0.17.1-tensorrt)
- [ghcr.io/blakeblackshear/frigate:0.17.1-rk](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/746093696?tag=0.17.1-rk)
- [ghcr.io/blakeblackshear/frigate:0.17.1-rocm](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/746079109?tag=0.17.1-rocm)
- [ghcr.io/blakeblackshear/frigate:0.17.1-tensorrt-jp6](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/746064399?tag=0.17.1-tensorrt-jp6)
- [ghcr.io/blakeblackshear/frigate:0.17.1-synaptics](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/746087341?tag=0.17.1-synaptics)

## What's Changed

### Security Fixes
* Restrict raw config endpoint to admin role by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/22523
* Fix cross-camera auth in timeline and media endpoints by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/22522

### Notable Changes
* Fix/rknn arcface input format master by @begetan in https://github.com/blakeblackshear/frigate/pull/22319
* Don't try to run storage cleanup if frigate is in safe mode by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/22492

## Other Changes
* docs: fix image address by @ZhaiSoul in https://github.com/blakeblackshear/frigate/pull/22067
* docs: fix hailo setup numbering error by @ZhaiSoul in https://github.com/blakeblackshear/frigate/pull/22066
* Fix script for downloading RF-DETR by @f0ff886f in https://github.com/blakeblackshear/frigate/pull/22083
* docs: Add frame selection and clean copy details to snapshots docs by @webmasterkai in https://github.com/blakeblackshear/frigate/pull/21946
* Update line breaks in video_pipeline.md diagram by @GrumpyMeow in https://github.com/blakeblackshear/frigate/pull/21919
* docs: Add detail to face recognition MQTT update docs by @webmasterkai in https://github.com/blakeblackshear/frigate/pull/21942
* Update HA docs with MQTT example by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/22098
* Docs: fix YOLOv9 onnx export by @tremby in https://github.com/blakeblackshear/frigate/pull/22107
* Docs updates by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/22131
* updates for yolov9 coral support by @blakeblackshear in https://github.com/blakeblackshear/frigate/pull/22136
* 0.17 Release by @blakeblackshear in https://github.com/blakeblackshear/frigate/pull/19787
* Fix link to Coral YOLOv9 Frigate+ models by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/22164
* Fix go2rtc stream alias auth by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/22097
* Birdseye fixes by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/22166
* Fix genai by @NickM-27 in https://github.com/blakeblackshear/frigate/pull/22203
* Docs updates by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/22222
* Fix menu display conditions by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/22237
* docs: updated the guides detectors section by @ZhaiSoul in https://github.com/blakeblackshear/frigate/pull/22241
* Docs update by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/22251
* Update docs for new HA language by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/22258
* Update docs for AVX2 CPU requirement by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/22305
* Improve playback of videos in Tracking Details by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/22301
* Fix broken link to Home Assistant apps page by @ARandomGitHubUser in https://github.com/blakeblackshear/frigate/pull/22320
* Fix preview retrieval to handle missing previews gracefully by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/22331
* Fix thumbnail encoding logic by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/22329
* Environment variable fixes by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/22335
* Fix go2rtc config handling by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/22346
* Save detect dimensions to config on add camera wizard save by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/22349
* docs: add highlight magic comments by @ZhaiSoul in https://github.com/blakeblackshear/frigate/pull/22367
* Various Fixes by @NickM-27 in https://github.com/blakeblackshear/frigate/pull/22376
* Filter push notifications by user role camera access by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/22385
* Keep Tracked Object Details nav buttons visible by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/22384
* Add handler for license plate which is not expected to be stationary by @NickM-27 in https://github.com/blakeblackshear/frigate/pull/22416
* Consistently sort class names by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/22415
* Update dev contrib docs with Python checks by @leccelecce in https://github.com/blakeblackshear/frigate/pull/22419
* UI tweak by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/22420
* Hide set password menu option when native auth is disabled by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/22439
* Disable pip for animated event cards by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/22438
* Sync Tracking Details timeline with keyframe-snapped vod clip start by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/22454
* Add Strix to third party extensions by @eduard256 in https://github.com/blakeblackshear/frigate/pull/22488
* Fix audio event maintainer by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/22495
* docs: remove onvif host environment variable by @ZhaiSoul in https://github.com/blakeblackshear/frigate/pull/22517
* Validate preview filename and camera access by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/22530

## New Contributors
* @f0ff886f made their first contribution in https://github.com/blakeblackshear/frigate/pull/22083
* @webmasterkai made their first contribution in https://github.com/blakeblackshear/frigate/pull/21946
* @tremby made their first contribution in https://github.com/blakeblackshear/frigate/pull/22107
* @begetan made their first contribution in https://github.com/blakeblackshear/frigate/pull/22319
* @ARandomGitHubUser made their first contribution in https://github.com/blakeblackshear/frigate/pull/22320
* @eduard256 made their first contribution in https://github.com/blakeblackshear/frigate/pull/22488

**Full Changelog**: https://github.com/blakeblackshear/frigate/compare/v0.17.0...v0.17.1