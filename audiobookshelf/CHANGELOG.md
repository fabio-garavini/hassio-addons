#### Testers needed: Help us test Audiobookshelf version 3 using the [v3](https://github.com/advplyr/audiobookshelf/pkgs/container/audiobookshelf/1579171039?tag=v3) docker image tag. [See new client repo](https://github.com/audiobookshelf/audiobookshelf-client-react)

#### Important: New authentication system was added in [v2.26.0](https://github.com/advplyr/audiobookshelf/releases/tag/v2.26.0). See https://github.com/advplyr/audiobookshelf/discussions/4460 for details.

### Fixed

- Server crash when scanning a book that lists the same author more than once #5319 by @mikiher in #5691
- Server crash during a library scan when a series or book link already exists by @mikiher in #5714
- Server crash when saving a book if a series or author link already exists (e.g. series names containing emoji) #5692 by @mikiher in #5715
- Server crash on logout when OpenID is not configured
- iTunes match splitting credentials out of an author name into a separate author #2661 #1022 by @mikiher in #5694
- Unauthenticated multipart uploads leaving temp files on disk by @mikiher in #5686
- Non-admin users able to access another user's playback session
- Media progress endpoints not checking library item access
- Library list including every library when access to all libraries is off and the allow list is empty
- Empty tag allow list treated as access to every book, podcast, and series
- Collection socket events sent to every connected user
- `rss_feed_open` and `rss_feed_closed` socket events not checking library access
- `notifications_updated` socket event sent to all users
- Local login throwing when username or password is not a string

### Updated

- Removing a book from a collection requires update permission instead of delete permission
- Podcast episode description and subtitle from audio file tags are sanitized
- Library scan error log includes the item title and folder by @mikiher in #5691
- More strings translated
  - Basque by Aoxiang
  - Czech by petr-prikryl
  - Danish by Kasper B, Mario
  - Estonian by @husjon
  - German by cebo29
  - Hindi by Qazi Hanzala Qadri
  - Hungarian by ugyes
  - Italian by Nicholas Martini
  - Japanese by koichiro hatsuse
  - Latvian by Ēriks Remess
  - Norwegian Bokmål by @husjon
  - Persian by Abbas
  - Polish by @TheMatrixan; Artur
  - Slovak by @misko903; misko903
  - Swedish by @husjon
  - Vietnamese by @husjon

### Internal

- Github workflow for building Docker images with the v3 tag


**Full Changelog**: https://github.com/advplyr/audiobookshelf/compare/v2.37.2...v2.38.0