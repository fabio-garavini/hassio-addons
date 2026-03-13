#### Important: New authentication system was added in [v2.26.0](https://github.com/advplyr/audiobookshelf/releases/tag/v2.26.0). See https://github.com/advplyr/audiobookshelf/discussions/4460 for details.

### Added

- Slovak language option by @belpe in #5077
- Belarusian language option by @pavel-miniutka in #5071
- Database indexes for discover query performance by @kevingatera in #5073

### Fixed

- IDOR vulnerabilities in listening sessions, media progress, and bookmark endpoints #5062 by @mandreko in #5063
- Server crash filtering by decade with collapsed series
- Server crash on `/me/progress/:libraryItemId/:episodeId?` when episodeId is not passed in for a podcast library item #5058
- Updating author name merging with same name authors in a different library #4628
- Home page check current user from socket event when updating hide from continue listening
- UI/UX: Match tab "click to use current value" incorrect title attribute
- UI/UX: Aria-label for jump backward button by @KiwiHour in #4973

### Changed

- Improved personalized shelves performance by parallelizing shelf queries and reducing search payload size by @kevingatera in #5073
- Improved API cache invalidation for high-churn models (sessions, media progress) by @kevingatera in #5073
- Improved subtitle parsing to account for bare colon in title by @kctdfh in #5036
- Sanitize session DeviceInfo `clientDeviceInfo` fields
- Sanitize server settings `authLoginCustomMessage` on save and load
- Fix OpenAPI spec description by @openam in #5042
- UI/UX: Display localized/styled text for selected filter by @sir-wilhelm in #4952
- More strings translated
  - Belarusian by @pavel-miniutka
  - Catalan by @enboig
  - Chinese (Simplified Han script) by @FiendFEARing
  - Czech by @Plazec
  - Danish by @xxzp3
  - French by @dapitch666
  - German by @ShaikaJar @Maxklos @B0rax
  - Greek by @lambolighting
  - Hebrew by @enosh
  - Hungarian by @Kabika82 @ugyes
  - Japanese by @litoma
  - Lithuanian by @mantas3
  - Norwegian Bokmål by @Torstein-Eide @soteland
  - Polish by @Jarsey45
  - Portuguese (Brazil) by @lribeiro
  - Romanian by @hac3ru
  - Slovak by @goozi12345 @pecer
  - Slovenian by @thehijacker
  - Swedish by @Cotignac @karlbe

## New Contributors
* @KiwiHour made their first contribution in https://github.com/advplyr/audiobookshelf/pull/4973
* @openam made their first contribution in https://github.com/advplyr/audiobookshelf/pull/5042
* @belpe made their first contribution in https://github.com/advplyr/audiobookshelf/pull/5077
* @pavel-miniutka made their first contribution in https://github.com/advplyr/audiobookshelf/pull/5071
* @kctdfh made their first contribution in https://github.com/advplyr/audiobookshelf/pull/5036
* @mandreko made their first contribution in https://github.com/advplyr/audiobookshelf/pull/5063
* @kevingatera made their first contribution in https://github.com/advplyr/audiobookshelf/pull/5073

**Full Changelog**: https://github.com/advplyr/audiobookshelf/compare/v2.32.1...v2.33.0