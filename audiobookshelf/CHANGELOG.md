#### Important: New authentication system was added in [v2.26.0](https://github.com/advplyr/audiobookshelf/releases/tag/v2.26.0). See https://github.com/advplyr/audiobookshelf/discussions/4460 for details.

### Fixed

- Duplicate refresh tokens across sessions can cause unexpected logout #5253 by @nichwall in #5255
- Server crash when renaming an author to another author when they are both on the same book #5247 by @nichwall in #5256
- Server crash when invalid `metadata.json` is scanned in #5268
- Sequelize user queries to use direct case-insensitive username/email matching

**Full Changelog**: https://github.com/advplyr/audiobookshelf/compare/v2.35.0...v2.35.1