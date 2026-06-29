This is a maintenance release for Frigate 0.17 that includes fixes and minor changes.

## Images

- [ghcr.io/blakeblackshear/frigate:0.17.2](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/982004562?tag=0.17.2)
- [ghcr.io/blakeblackshear/frigate:0.17.2-standard-arm64](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/981112840?tag=0.17.2-standard-arm64)
- [ghcr.io/blakeblackshear/frigate:0.17.2-tensorrt](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/982014308?tag=0.17.2-tensorrt)
- [ghcr.io/blakeblackshear/frigate:0.17.2-rk](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/981127205?tag=0.17.2-rk)
- [ghcr.io/blakeblackshear/frigate:0.17.2-rocm](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/982027592?tag=0.17.2-rocm)
- [ghcr.io/blakeblackshear/frigate:0.17.2-tensorrt-jp6](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/981119391?tag=0.17.2-tensorrt-jp6)
- [ghcr.io/blakeblackshear/frigate:0.17.2-synaptics](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/981125957?tag=0.17.2-synaptics)

## What's Changed

### Security Advisories

These advisories impact users with publicly exposed instances with no authentication and users with viewer roles where it is important to restrict access to some cameras.

- [go2rtc WebSocket live stream camera access bypass (role-restricted users)](https://github.com/blakeblackshear/frigate/security/advisories/GHSA-hh3j-7g2f-43j2)
- [Incomplete patch of CVE-2025-62382: `image_path` backslash-separator bypass of `pathvalidate.sanitize_filepath` + `startswith(CLIPS_DIR)` reaches `shutil.copy` arbitrary host-file read](https://github.com/blakeblackshear/frigate/security/advisories/GHSA-pqfr-m69j-4mq2)
- [Incomplete patch of CVE-2026-25643: go2rtc exec:/echo:/expr: prefix block is bypassed when a stream value is a YAML mapping with a `url` key (RCE + container escape)](https://github.com/blakeblackshear/frigate/security/advisories/GHSA-r57j-5jm9-hpcc)
- [RTSP credentials leak to viewer role via nginx proxy_cache](https://github.com/blakeblackshear/frigate/security/advisories/GHSA-4vfc-hxpj-f7x7)
- [Authenticated Admin Can Achieve RCE via go2rtc Stream API — exec: Filter Not Enforced at API Layer](https://github.com/blakeblackshear/frigate/security/advisories/GHSA-wwww-5h25-jf98)
- [Authenticated viewer can read /api/logs/frigate and /api/logs/nginx, exposing the auto-generated admin password and camera RTSP/ONVIF credentials (viewer-to-admin privilege escalation)](https://github.com/blakeblackshear/frigate/security/advisories/GHSA-c4qf-xxq4-vf55)
- [Camera ACL bypass via Nginx static locations allows authenticated users to access recordings from unauthorized cameras](https://github.com/blakeblackshear/frigate/security/advisories/GHSA-74x4-gw64-2mq5)
- [Viewer-Role User Can Access go2rtc Internal API to obtain sensitive information](https://github.com/blakeblackshear/frigate/security/advisories/GHSA-mgh5-cr9h-g6hr)
- [WebSocket Missing Authorization — Viewer Can Execute Admin-Only Operations](https://github.com/blakeblackshear/frigate/security/advisories/GHSA-r5fm-h944-8chq)

### Notable Changes

- Exports can optionally include recording segment information as chapters in mp4 metadata
- Performance improvements when displaying previews in the live page

### All Commits
* Update docs for DEIMv2 support by @NickM-27 in https://github.com/blakeblackshear/frigate/pull/22598
* Add role-based auth to websocket message handler by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/22710
* Update MemryX section documentation by @abinila4 in https://github.com/blakeblackshear/frigate/pull/22712
* Memryx docs update by @abinila4 in https://github.com/blakeblackshear/frigate/pull/22746
* Docs update by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/22864
* Update restream.md docs and clarify output config by @Feni85 in https://github.com/blakeblackshear/frigate/pull/22860
* Fix broken docs links with hash fragments that resolve wrong on reload by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/22925
* Fix yolonas colab notebook by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/22936
* Fixes by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/23235
* Add metadata for creation time in recordings / exports by @NickM-27 in https://github.com/blakeblackshear/frigate/pull/23239
* Fix admin response cache leak to non-admin users via nginx proxy_cache by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/23261
* Docs update by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/23280
* Docs update by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/23282
* Filter motion review by allowed cameras by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/23294
* Add ability to control chapters set on MP4 Export by @NickM-27 in https://github.com/blakeblackshear/frigate/pull/23310
* Chapter tweaks by @NickM-27 in https://github.com/blakeblackshear/frigate/pull/23440
* Catch edge cases in security protections by @NickM-27 in https://github.com/blakeblackshear/frigate/pull/23493
* Offload preview encoding and Plus upload off the API event loop by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/23552
* Fix cache control header for current hour preview mp4s by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/23553
* Allow non-admin users to use PTZ controls for cameras they have access to by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/23578

## New Contributors
* @Feni85 made their first contribution in https://github.com/blakeblackshear/frigate/pull/22860

**Full Changelog**: https://github.com/blakeblackshear/frigate/compare/v0.17.1...v0.17.2