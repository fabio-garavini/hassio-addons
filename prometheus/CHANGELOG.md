## What's Changed

- [SECURITY] Bump golang.org/x/text to v0.39.0 (CVE-2026-56852) and google.golang.org/grpc to v1.82.1 (GHSA-hrxh-6v49-42gf). #19290 by @krajorama
- [BUGFIX] PromQL: Preallocate the active query tracker file to avoid SIGBUS crashes when the data disk is full. #19289 by @akshajrawat

**Full Changelog**: https://github.com/prometheus/prometheus/compare/v3.13.1...v3.13.2