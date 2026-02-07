**New features:**
* Enabled multi-edit of books in the book list
* Added Instapaper configuration to Kobo sync
* Renamed Google Books Metadata provider
* Renamed environment variable `CACHE_DIR` to `CACHE_DIRECTORY`
* Improved performance during certain search operations (#3476)
* Added Books button to EPUB reader to return to Calibre-Web
* Added page count display in EPUB reader (e.g. `1/1234` locations)
+ Added an additional EPUB reader theme

**Bug Fixes:**
* Fixed compatibility with **Calibre 9**
* Added `certifi` to requirements on macOS (fixes #3385)
* Fixed read status not updating when a book is archived and a custom column is used
* Fixed Caliblur theme display issues
* Added missing texts to the Caliblur theme
* Fixed language icon in Caliblur theme
* Fixed issue where the console remains open when started on Windows via console, allowing Calibre-Web to be stopped even after an in-app restart
* Fixed inability to download books from Calibre-Web OPDS in Readest 0.9.95 (iOS & macOS)
* Replaced archive icon with an open folder instead of a trashcan
* Fixed exclusion of shelves in advanced search
* Fixed support for route `kobo/auth/refresh`
* Fixed public registration not applying default allowed/denied tags to new users (#3522)
* Removed invalid `sort_param` GET parameter (#3447)
* Generated valid session cookie paths (fixes #3459)
* Fixed mass removal of books from shelves (#3520)

** Security **
* Prevented exposure of sensitive information in `config_sql.py` — API keys are no longer exported.
