#### Important: New authentication system was added in [v2.26.0](https://github.com/advplyr/audiobookshelf/releases/tag/v2.26.0). See https://github.com/advplyr/audiobookshelf/discussions/4460 for details.

### Added

- Access token refresh grace period (fixes frequently needing to re-login) #4630 by @nichwall in #5004

### Fixed

- Listening sessions from Android app showing device name as `Abs iOS`
- RSS feeds serving m4b files with incorrect Content-Type #5041 by @brandonfhall in #5221

### Changed

- Book & podcast descriptions from audio files are sanitized
- `cancel_scan` and `set_log_listener` socket events validate account type and log level
- More strings translated
  - Belarusian by @pavel-miniutka
  - Polish by @TheMatrixan

## New Contributors
* @brandonfhall made their first contribution in https://github.com/advplyr/audiobookshelf/pull/5221

**Full Changelog**: https://github.com/advplyr/audiobookshelf/compare/v2.34.0...v2.35.0