> _To update the prebuilt executable you can run `./pocketbase update`._

- Added `nullString()`, `nullInt()`, `nullFloat()`, `nullBool`, `nullArray()`, `nullObject()` JSVM helpers for scanning nullable columns ([#7396](https://github.com/pocketbase/pocketbase/issues/7396)).

- Store the correct `image/png` as attrs content type when generating a thumb fallback _(e.g. for `webp`)_.

- Trimmed custom uploaded file name and extension from leftover `.` characters after `filesystem.File` normalization.
    _This was done to prevent issues with external files sync programs that may have special handling for "invisible" files._

- Updated `modernc.org/sqlite` _(v1.41.0 includes prepared statements optimization)_ and other minor Go deps.