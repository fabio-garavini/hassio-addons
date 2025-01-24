# v1.125.2

## ImageGenius Changes

support GPU acceleration with CUDA for machine-learning

## Immich Changes

This release addresses the following issues, most of which originate from our migration to Kysely.

- Fixed a bug where the timeline shows a placeholder in some sections
- Fixed a bug where using server URL with sslmode doesn't get parsed correctly
- Fixed a bug where LivePhotos doesn't generate thumbnails
- Fixed a bug where no EXIF data is returned for the deduplication view
- Fixed a bug where albums with archived assets don't show up on the mobile app
- Fixed a bug where hard refresh only refreshed assets and not albums
- Fixed a bug where the updatedAt column doesn't update on some assets and album actions
- Fixed a bug where searchRandom doesn't return the correct data format

Thank you for reporting the bugs you have found! We added a treat to the login page as a thank you 😄
