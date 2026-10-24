#### Important: New authentication system was added in [v2.26.0](https://github.com/advplyr/audiobookshelf/releases/tag/v2.26.0). See https://github.com/advplyr/audiobookshelf/discussions/4460 for details.

### Fixed

- File copy and move fails with EPERM on some systems (e.g. TrueNAS) #5637 by @nichwall in #5668
- RSS feed cover images not updating after cover change #5306 by @SharonZhu0122 in #5418
- Audible search when API returns null products #5176 by @boqiaok in #5430
- Upload crash when multipart form repeats file fields by @rtainaan in #5437
- Debian package ships `audiobookshelf.service` with executable bit causing systemd warnings on install/upgrade #5629

### Updated

- `ROUTER_BASE_PATH` env variable normalized (leading slash, no trailing slash)
- Docker image rebuilt with Node.js 24.22.1 (October 2026 security release)

### Internal

- Server init rejects creating a second root user
- Dev container updated to Node.js 24

## New Contributors
* @rtainaan made their first contribution in https://github.com/advplyr/audiobookshelf/pull/5437
* @boqiaok made their first contribution in https://github.com/advplyr/audiobookshelf/pull/5430

**Full Changelog**: https://github.com/advplyr/audiobookshelf/compare/v2.37.1...v2.37.2