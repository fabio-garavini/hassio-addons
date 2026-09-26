This release adds NFC/RFID tag support and a round of improvements to the new client.

## Highlights
* **NFC/RFID tags.** Spools and filaments can now have tags linked to them. A tag is keyed on its hardware UID alone, so blank NTAG stickers work, and so do read-only vendor tags like Bambu, Creality, Qidi and Prusa. A reader posts to `/tag/scan` and gets the matching spool or filament back. If you pair a browser with a reader in Settings > Tag Scanning, that browser jumps to the item when you tap the tag. On Android over HTTPS the phone can read tags itself, no reader needed. See the wiki for reader setup with ESPHome and Home Assistant: https://github.com/Donkie/Spoolman/wiki/Tag-scanners
* The library filter menu shows colours and materials and lets you pick several values at once. You can also show filaments you have no spools of.
* The SpoolmanDB search in the filament pickers now pages through its results, so you're no longer stuck with the first batch.
* The add flow separates manufacturer, filament and spool into clear steps. It also offers quick-pick roll sizes and lets you create a new filament while changing what a spool holds.
* The library remembers its grouping and sorting, has resizable columns and can filter by date. Its long toolbar menus are now searchable.
* Label export now supports AML.
* Numeric fields accept decimal commas everywhere.

## Notable fixes
* SQLite searches are now case-insensitive for non-ASCII characters too (#1078 by @romasku).
* Measuring a spool now falls back to the manufacturer's empty spool weight when the spool and filament don't set one (#1164 by @Niko11111).
* The dashboard total weight now shows spool weight instead of filament weight (#1113 by @itCarl).
* Writing a backup now closes the SQLite connections it opens (#1104 by @jpapiez).
* Filtering on a location or other text value that contains a comma now works.
* Labels printed on sheets now keep the right size, shape and orientation.

## What's Changed
* client_v2: make the library list column resizable by @Donkie in https://github.com/Donkie/Spoolman/pull/1039
* client_v2: remember the library's grouping and sorting by @Donkie in https://github.com/Donkie/Spoolman/pull/1041
* client_v2: pluggable label export formats, add AML by @Donkie in https://github.com/Donkie/Spoolman/pull/1042
* client_v2: accept decimal commas in every numeric field by @Donkie in https://github.com/Donkie/Spoolman/pull/1046
* client_v2: separate manufacturer, filament and spool in the add flow by @Donkie in https://github.com/Donkie/Spoolman/pull/1056
* client_v2: filter the library by date by @Donkie in https://github.com/Donkie/Spoolman/pull/1054
* client_v2: quick-pick roll sizes when adding spools by @Donkie in https://github.com/Donkie/Spoolman/pull/1065
* client_v2: bring back translucent filament colors by @Donkie in https://github.com/Donkie/Spoolman/pull/1067
* client_v2: make the long toolbar menus searchable by @Donkie in https://github.com/Donkie/Spoolman/pull/1068
* client_v2: edit the manufacturer's extra fields when the add flow creates one by @Donkie in https://github.com/Donkie/Spoolman/pull/1070
* client_v2: point at missing required fields instead of disabling the add button by @Donkie in https://github.com/Donkie/Spoolman/pull/1071
* client_v2: create a filament while changing what a spool holds by @Donkie in https://github.com/Donkie/Spoolman/pull/1072
* client_v2: filter menu colours, materials, checkmarks and multi-select by @Donkie in https://github.com/Donkie/Spoolman/pull/1094
* fix(database): close the sqlite connections used to write a backup by @jpapiez in https://github.com/Donkie/Spoolman/pull/1104
* chore(client): let prettier respect the working tree's line endings by @jpapiez in https://github.com/Donkie/Spoolman/pull/1105
* client_v2: sort direction, out-of-stock filaments and truncation tooltips by @Donkie in https://github.com/Donkie/Spoolman/pull/1097
* Identify spools by NFC/RFID tags by @Donkie in https://github.com/Donkie/Spoolman/pull/1096
* Replace Ko-fi buttons with GitHub Sponsors by @Donkie in https://github.com/Donkie/Spoolman/pull/1111
* fix: dashboard total weight displayes filament weight instead of actual spool weight by @itCarl in https://github.com/Donkie/Spoolman/pull/1113
* Key the tag scan debounce on the resolved match by @Donkie in https://github.com/Donkie/Spoolman/pull/1116
* Offer the reader's last UID in the Add tag dialog by @Niko11111 in https://github.com/Donkie/Spoolman/pull/1120
* Keep the spool weight unit on one line in the library list by @Donkie in https://github.com/Donkie/Spoolman/pull/1160
* Page through SpoolmanDB search results in the filament pickers by @Donkie in https://github.com/Donkie/Spoolman/pull/1161
* fix(labels): page the print tab's spool list by @Donkie in https://github.com/Donkie/Spoolman/pull/1163
* fix(api): keep quoted string filter terms whole when they contain commas by @Donkie in https://github.com/Donkie/Spoolman/pull/1185
* Resolve the empty spool weight up to the vendor when measuring by @Niko11111 in https://github.com/Donkie/Spoolman/pull/1164
* fix: make SQLite searches Unicode case-insensitive by @romasku in https://github.com/Donkie/Spoolman/pull/1078

## New Contributors
* @jpapiez made their first contribution in https://github.com/Donkie/Spoolman/pull/1104
* @itCarl made their first contribution in https://github.com/Donkie/Spoolman/pull/1113
* @Niko11111 made their first contribution in https://github.com/Donkie/Spoolman/pull/1120
* @romasku made their first contribution in https://github.com/Donkie/Spoolman/pull/1078

**Full Changelog**: https://github.com/Donkie/Spoolman/compare/v0.26.1...v0.27.0