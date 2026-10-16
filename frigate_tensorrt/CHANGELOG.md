This is a maintenance release for Frigate 0.18 that includes some security fixes.

## Images

- [ghcr.io/blakeblackshear/frigate:0.18.2](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/1391143005?tag=0.18.2)
- [ghcr.io/blakeblackshear/frigate:0.18.2-standard-arm64](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/1391102931?tag=0.18.2-standard-arm64)
- [ghcr.io/blakeblackshear/frigate:0.18.2-tensorrt](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/1391215249?tag=0.18.2-tensorrt)
- [ghcr.io/blakeblackshear/frigate:0.18.2-rk](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/1391162041?tag=0.18.2-rk)
- [ghcr.io/blakeblackshear/frigate:0.18.2-rocm](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/1391271833?tag=0.18.2-rocm)
- [ghcr.io/blakeblackshear/frigate:0.18.2-tensorrt-jp6](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/1391116063?tag=0.18.2-tensorrt-jp6)
- [ghcr.io/blakeblackshear/frigate:0.18.2-synaptics](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/1391150122?tag=0.18.2-synaptics)

## What's Changed

### Security Fixes
* [source scheme bypasses go2rtc exec-filter in Frigate allowing admin-authenticated RCE as root  (GHSA-qjjw-3v66-279f)](https://github.com/blakeblackshear/frigate/security/advisories/GHSA-qjjw-3v66-279f)
* [direct websocket paths allows viewers to perform RCE as root (GHSA-93xj-hg88-ffg7)](https://github.com/blakeblackshear/frigate/security/advisories/GHSA-93xj-hg88-ffg7)
* [the /auth media and stream checks classify the raw request path, not the one nginx serves (GHSA-3cxh-fj2f-h497)](https://github.com/blakeblackshear/frigate/security/advisories/GHSA-3cxh-fj2f-h497)

## What's Changed
* Security patches by @blakeblackshear in https://github.com/blakeblackshear/frigate/pull/24658
* Normalize request paths in media auth by @hawkeye217 in https://github.com/blakeblackshear/frigate/pull/24662

**Full Changelog**: https://github.com/blakeblackshear/frigate/compare/v0.18.1...v0.18.2