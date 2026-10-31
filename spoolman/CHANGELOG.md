Many fixes and some new features!

If your standalone install refused to start after updating to v0.27.0, this fixes it. It was being installed on Python 3.15, which one of our dependencies doesn't support yet, and updating moves it back to Python 3.14.

A spool tare of 0 is now kept as 0 instead of falling back to the filament or manufacturer's empty spool weight. If you have spools with a tare of 0 that relied on that fallback, check their remaining weight after updating.

## Highlights
* Added filament and manufacturer lists, this was highly requested in the new client, hope it fits the needs!
* OpenPrintTag tags can now be decoded. `/tag/scan` with format `openprinttag` returns what's on the tag, and can create the manufacturer, filament and spool for a tag it doesn't know yet (#1112 by @goeland86, with help from @Ricky1966).
* The QR scanner lets you pick which camera to use (#1184 by @IdefixRC).
* Tags read by the phone's own NFC now open the matching spool or filament.
* The library has a Show lot numbers toggle and remembers its page size.
* Slovenian and Korean are now in the language picker.

## Notable fixes
* Typing in an inspector field no longer drops characters while it autosaves (#1307).
* The Manufacturer filter no longer gets stuck on Loading when two manufacturers share a name (#1306).
* Nightly backups work on network shares again, and a backup can no longer hang.
* A typed 0 is kept for tare, price, temperatures and low-stock thresholds.
* `/metrics` no longer exports archived and deleted spools.
* Importing from SpoolmanDB reuses an existing manufacturer with the same name instead of creating a duplicate.
* Locations with a slash in their name can be renamed.
* Scanning an OpenPrintTag tag without an instance UUID no longer fails on Python 3.10 and 3.11.

## Full change list
* Speed up armv7 image builds when the layer cache misses by @Donkie in https://github.com/Donkie/Spoolman/pull/1186
* Add update available indicator by @Donkie in https://github.com/Donkie/Spoolman/pull/1193
* Resolve label fields in custom QR URL templates by @Donkie in https://github.com/Donkie/Spoolman/pull/1194
* Let the QR scanner pick between cameras by @IdefixRC in https://github.com/Donkie/Spoolman/pull/1184
* Auto-navigate on tags read by the phone's own NFC by @Donkie in https://github.com/Donkie/Spoolman/pull/1187
* Filament and manufacturer lists in the Library by @Donkie in https://github.com/Donkie/Spoolman/pull/1248
* Keep an explicit 0 tare when measuring a spool by @Donkie in https://github.com/Donkie/Spoolman/pull/1253
* Stop exporting archived and deleted spools in /metrics by @Donkie in https://github.com/Donkie/Spoolman/pull/1254
* Probe data dir writability with a uniquely named temp file by @Donkie in https://github.com/Donkie/Spoolman/pull/1255
* Fix nightly backups failing on network shares, and the backup hang by @Donkie in https://github.com/Donkie/Spoolman/pull/1256
* Open deep-linked items the list hasn't loaded by @Donkie in https://github.com/Donkie/Spoolman/pull/1257
* Keep a stored threshold of 0 across reloads by @Donkie in https://github.com/Donkie/Spoolman/pull/1258
* Let dashboard cards use the screen height by @Donkie in https://github.com/Donkie/Spoolman/pull/1260
* Offer empty dashboard locations in the location pickers by @Donkie in https://github.com/Donkie/Spoolman/pull/1262
* Wait for page data before taking Argos screenshots by @Donkie in https://github.com/Donkie/Spoolman/pull/1263
* Decode inverted QR codes in client_v2 scanner on Firefox by @Donkie in https://github.com/Donkie/Spoolman/pull/1195
* Page through filament spools and dashboard groups by @Donkie in https://github.com/Donkie/Spoolman/pull/1259
* Run CI on bot PRs and merge Weblate PRs weekly by @Donkie in https://github.com/Donkie/Spoolman/pull/1264
* Keep a typed 0 for tare, price and temperatures by @Donkie in https://github.com/Donkie/Spoolman/pull/1265
* Allow renaming a location whose name contains a slash by @Donkie in https://github.com/Donkie/Spoolman/pull/1267
* Mention filaments in the unknown-tag and any-reader texts by @Donkie in https://github.com/Donkie/Spoolman/pull/1268
* Bump dependencies within their declared ranges by @Donkie in https://github.com/Donkie/Spoolman/pull/1269
* Reuse a same-name manufacturer when importing from SpoolmanDB by @Donkie in https://github.com/Donkie/Spoolman/pull/1266
* Page the filament picker when printing labels by @Donkie in https://github.com/Donkie/Spoolman/pull/1275
* Add a Show lot numbers toggle to the library by @Donkie in https://github.com/Donkie/Spoolman/pull/1274
* Drop the unused influxdb-client dependency by @Donkie in https://github.com/Donkie/Spoolman/pull/1272
* Offer Slovenian and Korean in the language picker by @Donkie in https://github.com/Donkie/Spoolman/pull/1279
* Make websocket subscriber cleanup idempotent by @dajiaohuang in https://github.com/Donkie/Spoolman/pull/1216
* Reject booleans for integer extra fields by @dajiaohuang in https://github.com/Donkie/Spoolman/pull/1214
* Reject odd-length tag UIDs by @dajiaohuang in https://github.com/Donkie/Spoolman/pull/1231
* Remember the Library page size by @Donkie in https://github.com/Donkie/Spoolman/pull/1284
* Pin Redoc to v2 in generated API docs by @devtechedge in https://github.com/Donkie/Spoolman/pull/1288
* Stop the NFC reader after a single-read scan by @Donkie in https://github.com/Donkie/Spoolman/pull/1283
* feat(nfc): OpenPrintTag NDEF/CBOR codec by @goeland86 in https://github.com/Donkie/Spoolman/pull/1112

## New Contributors
* @IdefixRC made their first contribution in https://github.com/Donkie/Spoolman/pull/1184
* @dajiaohuang made their first contribution in https://github.com/Donkie/Spoolman/pull/1216
* @devtechedge made their first contribution in https://github.com/Donkie/Spoolman/pull/1288
* @goeland86 made their first contribution in https://github.com/Donkie/Spoolman/pull/1112

**Full Changelog**: https://github.com/Donkie/Spoolman/compare/v0.27.0...v0.27.1