Spoolman has a new web client. It's a rewrite from scratch, and from this release on it's what you get by default. It's faster, much better phone compatibility, and it brings a pile of things the old client couldn't do:
* New Library view, that combines the old manufacturer/filament/spool pages into a single unified view. Much better user experience, and no longer do you need to mess with wide column problems.
* Much better support for adding and maintaining large number of spools. The library collapses unused spools, the add spool form lets you add many spools in an easier way, etc.
* New unified spool adding flow, add both spool, filament and manufacturer info in one go.
* Custom label designs, a new editor lets you design the labels in much better detail.
* Free text search with color-similarity support.
* Locations page has been renamed to "Dashboard" instead, and it can now group spools by not only Location, but any spool-based extra field. So it can be used to organize by status, etc.
* Full mobile support, with proper button sizes and an UI that reshapes itself to fit any size of screen.
* And many more small quality of life improvements throughout the frontend.

The old React client still ships in every image. If the new one misbehaves on your setup, set `SPOOLMAN_LEGACY_CLIENT=TRUE` to go back to it. Both talk to the same API, so your data is untouched either way. Please open an issue if you have to do that, so it can be fixed.

The new frontend having been made from scratch does mean a lot of text needs to be translated again, but I've tried reusing old translations as much as possible.

## Frontend
* Brand new web client, served by default. Both clients ship in the image, `SPOOLMAN_LEGACY_CLIENT=TRUE` switches back to the old one.

## Backend
* New cross-entity search endpoint. Search now matches every whitespace-separated term, matches filaments by their vendor's name, and can also search by color similarity!
* Rename a field value, location, material, and so on, across every spool at once.
* The external filament library's display name is now configurable via `EXTERNAL_DB_NAME`.
* Performance: extra fields load in a single extra query instead of a join, color similarity search scales with the number of matches rather than the catalog size, and editing a filament no longer fans out one websocket message per spool.
* Security hardening: cross-origin writes and websockets are refused, CORS credentials are dropped under a wildcard origin, CSV export values are escaped against formula injection, extra-field sizes are bounded, and there's an opt-in host guard.
* Backup rotation no longer deletes your restore history.
* Fixed a 500 on `/info` when the external database name couldn't be resolved.
* Malformed sort parameters return 400 instead of 500.
* Extra field values can be cleared again.
* Builds now run on Node 24 and Vite 8.

**Full Changelog**: https://github.com/Donkie/Spoolman/compare/v0.25.0..https://github.com/Donkie/Spoolman/compare/v0.26.0