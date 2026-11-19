## Security fixes
- [NGINX2Root (CVE-2026-123007): bundled nginx 1.27.4 with HTTP/2 enabled allows unauthenticated RCE as root](https://github.com/blakeblackshear/frigate/security/advisories/GHSA-7822-v38f-8p44)

## What's Changed
* bump version in docs by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/24673
* Fix nginx uninitialized variable warning by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/24682
* Restrict go2rtc ffmpeg and ngrok options without arbitrary exec by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/24709
* plus docs update by @blakeblackshear in https://github.com/blakeblackshear/frigate/pull/24686
* Restrict go2rtc variable expansion in stream sources by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/24734
* docs: Adds a note that disabling V8 optimisations may cause live view issues by @andrewpwade in https://github.com/blakeblackshear/frigate/pull/24754
* Remove ptz camera recommendation table from docs by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/24739
* Check ownership before stopping a camera watch from chat by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/24776
* Add reostream to third party extensions by @VoltTech21 in https://github.com/blakeblackshear/frigate/pull/24747
* docs: add FrigatePiP to third party extensions by @maciejgornicz in https://github.com/blakeblackshear/frigate/pull/24863
* update recommended camera list by @blakeblackshear in https://github.com/blakeblackshear/frigate/pull/24919
* docs: add yuFriEye (iOS/macOS client) to third party extensions by @yufretti in https://github.com/blakeblackshear/frigate/pull/24942
* Add MJPEG stream warning back to docs by @NickM-27 in https://github.com/blakeblackshear/frigate/pull/24954
* Add Frigate+ model selection guide by @blakeblackshear in https://github.com/blakeblackshear/frigate/pull/24981
* Clarify region size in model guide by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/24984
* Update third_party_extensions.md with Home Assistant Marketplace integrations that support Frigate by @jeyrb in https://github.com/blakeblackshear/frigate/pull/24965
* Organize extensions for Frigate by @NickM-27 in https://github.com/blakeblackshear/frigate/pull/24991
* Update nginx and backport module changes by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/25009
* Bump version by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/25011

## New Contributors
* @andrewpwade made their first contribution in https://github.com/blakeblackshear/frigate/pull/24754
* @VoltTech21 made their first contribution in https://github.com/blakeblackshear/frigate/pull/24747
* @maciejgornicz made their first contribution in https://github.com/blakeblackshear/frigate/pull/24863
* @yufretti made their first contribution in https://github.com/blakeblackshear/frigate/pull/24942
* @jeyrb made their first contribution in https://github.com/blakeblackshear/frigate/pull/24965

**Full Changelog**: https://github.com/blakeblackshear/frigate/compare/v0.18.2...v0.18.3