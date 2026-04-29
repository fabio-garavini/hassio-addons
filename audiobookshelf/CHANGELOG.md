#### Important: New authentication system was added in [v2.26.0](https://github.com/advplyr/audiobookshelf/releases/tag/v2.26.0). See https://github.com/advplyr/audiobookshelf/discussions/4460 for details.

### Added

- Japanese language and Japan as podcast search region by @na3shkw in #5211
- Autocomplete attributes on login and setup fields for password manager support by @meek2100 in #5089

### Fixed

- Recent episodes not updating from cache when media progress changes in #5159
- Error logging when a podcast's auto-download schedule has an invalid cron expression

### Changed

- Public media item shares: use start time passed in query parameter for existing sessions by @pjkottke in #5163
- Podcast episode downloads use SSRF filtering on the HTTP request (matches other external requests)
- Podcast create and update validate the auto-download schedule cron expression and sanitizes the HTML description
- Playlists, collections, and library item batch API routes enforce library and per-item access
- More strings translated
  - Belarusian by @pavel-miniutka
  - Hungarian by @ugyes
  - Japanese by @na3shkw

### Internal

- ApiCacheManager test coverage for recent-episodes cache invalidation

## New Contributors
* @pjkottke made their first contribution in https://github.com/advplyr/audiobookshelf/pull/5163
* @meek2100 made their first contribution in https://github.com/advplyr/audiobookshelf/pull/5089
* @na3shkw made their first contribution in https://github.com/advplyr/audiobookshelf/pull/5211

**Full Changelog**: https://github.com/advplyr/audiobookshelf/compare/v2.33.2...v2.34.0