#### Important: New authentication system was added in [v2.26.0](https://github.com/advplyr/audiobookshelf/releases/tag/v2.26.0). See https://github.com/advplyr/audiobookshelf/discussions/4460 for details.

### Added

- Logout all devices button on account page (in #5395)
- Auth sessions table on account page w/ ability to logout of individual sessions (in #5400)

### Fixed

- Weak protocol validation for OIDC post-login callback URL by @mikiher in #5386
- User delete endpoint allowing for root account deletion by @mikiher in #5370
- API and websocket authentication allowing refresh tokens by @mikiher in #5387
- Bulk library item download endpoint not checking access on individual items by @mikiher in #5388
- Manual podcast episode match not setting the enclosure url #5317 by @mikiher in #5318

### Updated

- Changing user password invalidates all auth sessions (in #5393)
- Extend refresh token grace period to 10 minutes and allow `REFRESH_TOKEN_GRACE_PERIOD` env variable override #5281 by @DanielAshley in #5376
- API: New GET endpoints `/api/me/progress`, `/api/me/bookmarks`, `/api/me/bookmarks/:libraryItemId` by @Vito0912 in #5363
- API: Add all minified fields to expanded library item JSON by @mikiher in #5341
- API: Server settings now include `timeZone` for server timezone (for giving accurate cron job next schedule date)
- API: `/logout` endpoint now supports `?allDevices=1` query param to delete all other sessions and rotate current (in #5395)
- API: New endpoint GET `/api/me/sessions` to get all auth sessions (in #5400 and #5405)
- API: New endpoint DELETE `/api/me/sessions/:id` to delete an auth session (in #5405)
- New socket event `authors_num_books_updated` is emitted during a scan when author book count changes by @mikiher in #5354
- Socket event `author_added` is now emitted during scans by @mikiher in #5354
- UI/UX: Update outdated help links for new docs site by @francisrath in #5336
- More strings translated
  - Chinese (Simplified Han script) by @FiendFEARing
  - Danish by @MikkelOlesen @hhjuhl
  - Greek by @no1ta
  - Icelandic by @axelbjornsson
  - Portuguese (Brazil) by @AgenteGabrielofc
  - Tamil by @TamilNeram

### Internal

- Read AllowedDevOrigins from dev.js into ALLOWED_DEV_ORIGINS env var by @mikiher in #5291
- Setup internal-api file upload passthrough for next.js by @mikiher in #5325
- Readme update about frontend rewrite by @nichwall in #5407

## New Contributors
* @DanielAshley made their first contribution in https://github.com/advplyr/audiobookshelf/pull/5376
* @francisrath made their first contribution in https://github.com/advplyr/audiobookshelf/pull/5336

**Full Changelog**: https://github.com/advplyr/audiobookshelf/compare/v2.35.1...v2.36.0