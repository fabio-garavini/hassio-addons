#### Important: New authentication system was added in [v2.26.0](https://github.com/advplyr/audiobookshelf/releases/tag/v2.26.0). See https://github.com/advplyr/audiobookshelf/discussions/4460 for details.

### Fixed

- Matroska audiobooks (`.mka`) with the Opus codec failing to play in web client by @rktjmp in #5115
- UI/UX: Share player not using libraries cover aspect ratio setting
- Backup uploads leaving temporary files behind when the uploaded file failed validation
- Path traversal check on the filesystem path-exists endpoint not handling all edge cases

### Changed

- Bulk download endpoint now ensures all requested items belong to the library being requested
- Backup load and upload now validate the backup `details` entry exists and is within a reasonable size limit
- Podcast create endpoint validates that the podcast path is inside the selected library folder
- Author and library item cover image endpoints now clamp width/height query params to a maximum of 4096
- Podcast episode subtitles parsed from RSS feeds are now sanitized for HTML
- `author_updated`/`author_added` socket events emitted when updating authors in the book details edit modal by @mikiher in #5158
- `item_removed` socket event payload now includes `libraryId` so clients can ignore events for other libraries by @mikiher in #5160
- More strings translated
  - Belarusian by @pavel-miniutka
  - Bulgarian by @lembata
  - German by @JBlond @LaurinSorgend
  - Italian by @tizio04
  - Russian by @Hopelite @vmakeev
  - Spanish by @cyphra

## New Contributors
* @rktjmp made their first contribution in https://github.com/advplyr/audiobookshelf/pull/5115

**Full Changelog**: https://github.com/advplyr/audiobookshelf/compare/v2.33.1...v2.33.2