This is a maintenance release for Frigate 0.16 that includes bugfixes and minor changes.

## Images

- [ghcr.io/blakeblackshear/frigate:0.16.1](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/505907123?tag=0.16.1)
- [ghcr.io/blakeblackshear/frigate:0.16.1-standard-arm64](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/505903703?tag=0.16.1-standard-arm64)
- [ghcr.io/blakeblackshear/frigate:0.16.1-tensorrt](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/503603061?tag=0.16.1-tensorrt)
- [ghcr.io/blakeblackshear/frigate:0.16.1-rk](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/505941098?tag=0.16.1-rk)
- [ghcr.io/blakeblackshear/frigate:0.16.1-rocm](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/503608623?tag=0.16.1-rocm)
- [ghcr.io/blakeblackshear/frigate:0.16.1-tensorrt-jp6](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/503598754?tag=0.16.1-tensorrt-jp6)

## What's Changed

### Frontend Changes

- Improve recording playback startup time on slow connections (https://github.com/blakeblackshear/frigate/pull/19503)
- Fix export dialog overflowing due to i18n time lengths (https://github.com/blakeblackshear/frigate/pull/19736)
- Ensure audio support is correctly queried from go2rtc streams (https://github.com/blakeblackshear/frigate/pull/19708)
- Allow users with the viewer role to register for webpush notifications (https://github.com/blakeblackshear/frigate/pull/19640)
- Video dimension layout fix for Chrome (https://github.com/blakeblackshear/frigate/pull/19636, https://github.com/blakeblackshear/frigate/pull/19805)
- Remind users to restart after enabling face recognition (https://github.com/blakeblackshear/frigate/pull/19601)
- Always allow sorting by score in Explore page (https://github.com/blakeblackshear/frigate/pull/19501)
- Fix recognized license plate filter being incorrectly hidden in Explore filters in certain circumstances (https://github.com/blakeblackshear/frigate/pull/19491)
- Fix unscrollable languages menu on small mobile devices (https://github.com/blakeblackshear/frigate/pull/19797)
- Fix label in streaming stats (https://github.com/blakeblackshear/frigate/pull/19874)

### Backend Changes

- Fix i965 hwaccel driver for older Intel iGPUs (https://github.com/blakeblackshear/frigate/pull/19590)
- Return correct mime type for some image endpoints (https://github.com/blakeblackshear/frigate/pull/19708)
- Cleanup vod clip handling and add padding arg (https://github.com/blakeblackshear/frigate/pull/19813)
- Catch invalid keys in genai prompts (https://github.com/blakeblackshear/frigate/pull/19657)
- Run autotracking setup method in asyncio coroutine (https://github.com/blakeblackshear/frigate/pull/19614)
- Fix autotracking calibration crash when zooming is disabled (https://github.com/blakeblackshear/frigate/pull/19776)
- Fix autotracking hang for some cameras (https://github.com/blakeblackshear/frigate/pull/19873, https://github.com/blakeblackshear/frigate/pull/19879)
- Deprecate include_thumbnails field in events API (https://github.com/blakeblackshear/frigate/pull/19584)
- Ensure bird classification still runs if no other enrichments are enabled (https://github.com/blakeblackshear/frigate/pull/19576)
- Latest image API endpoint fixes (https://github.com/blakeblackshear/frigate/pull/19573 and https://github.com/blakeblackshear/frigate/pull/19555)
- Fix percentage display in recording emergency cleanup logs (https://github.com/blakeblackshear/frigate/pull/19525)
- Support `input-dtype` config for Frigate+ models (https://github.com/blakeblackshear/frigate/pull/19799)
- Set lower bound on `retry_interval` (https://github.com/blakeblackshear/frigate/pull/19883)