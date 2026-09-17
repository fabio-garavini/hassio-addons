#### Important: New authentication system was added in [v2.26.0](https://github.com/advplyr/audiobookshelf/releases/tag/v2.26.0). See https://github.com/advplyr/audiobookshelf/discussions/4460 for details.

### Fixed

- Collapse series not working when filters are enabled #2807 #3049 by @schummar in #5280
- Podcast rescan emitting stale episodes on `item_updated` by @mikiher in #5409
- Updating or deleting a narrator in one library applying the change to all libraries
- Author endpoints not checking user can access the author's library
- Share endpoints not sending 404 status
- Upload endpoint not handling directory creation errors
- sqlite3 bindings not installing when using npm v12 #5412 by @Vito0912 in #5429

### Updated

- Comic book extractor file path sanitization by @Vito0912
- Auth settings PATCH sanitizes `authLoginCustomMessage` HTML
- API: Settings PATCH endpoint only accepts a fixed set of general settings (auth settings must go through the auth-settings endpoint)
- API: Cover endpoints only allow `webp`, `jpeg` and `png` as optional format param
- API: Library item media update no longer accepts `ebookFile`, `chapters` and `audioFiles` in request body
- More strings translated
  - Belarusian by @pavel-miniutka
  - Bengali by @ShamiaAkterShanta
  - Chinese (Simplified Han script) by @FiendFEARing
  - Chinese (Traditional Han script) by @JBlond @violawang0401-cloud
  - Croatian by Igor Dobrača
  - Czech by @kuci-JK
  - Danish by Kim Josefsen
  - Dutch by @Kwintenc
  - Finnish by @JBlond
  - French by Charlie, J. Lavoie
  - German by @VoltKraft; J. Lavoie, Zarakkas
  - Greek by J. Lavoie
  - Hungarian by @ugyes
  - Italian by @lollos78; J. Lavoie
  - Lithuanian by @Haya25 @PovilasID
  - Polish by @MarcinKlejna @TheMatrixan
  - Portuguese (Brazil) by @AgenteGabrielofc
  - Russian by @vmakeev

### Internal

- Restore the mount prefix when handing requests to Next.js by @mikiher in #5507
- Github workflow to generate translator credits for release notes by @nichwall in #5558

## New Contributors
* @schummar made their first contribution in https://github.com/advplyr/audiobookshelf/pull/5280

**Full Changelog**: https://github.com/advplyr/audiobookshelf/compare/v2.36.0...v2.36.1