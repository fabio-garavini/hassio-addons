**New features:**
* Improved error handling for invalid libraries
* Enhanced dependency check and stability for the Windows EXE version
* Added binary paths support for FreeBSD
* Updated Kobo links to support "reading_service_host"
* Added <title> tag to OPDS feed
* EPUB Reader now supports the Kepub format
* Added bulk functions: delete, archive, and mark as read in the book table
* Added Storygraph to identifier links
* Lazy loading of cover images implemented
* Added smashwords.com and ebooks.com to recognized identifiers
* Improved error handling for invalid recipient addresses in emails
* Improved generation of unique identifiers for sending emails to readers
* Logged activities now include IP addresses
* Logger output improved: file name is logged instead of responsible logger
* Modal dialog in EPUB reader can now be closed on smartphones
* Added Arabic translation
* Official Support for python 3.12

**Bug Fixes:**
* Version detection now works with SQLAlchemy 2.0.36.dev0 (Arch Linux)
* Fixed error 500 when uploading metadata with non-numeric series_index (#3230)
* Invisible books are no longer counted in the archived page (#3221)
* Covers and metadata are now displayed correctly when sharing a public book via WhatsApp (and other Open Graph-enabled apps)
* Amazon identifiers beside amazon_uk are now correctly converted
* Fixed layout of identifiers on the book edit page when starting with none
* Connection handling to metadata.db is now request-based, solving upload issues with multiple files at once
* Fixed typo in security settings
* Updated MIME type handling: distinct MIME types are used for download vs. upload validation (#3245, #3243)
* Permission errors when generating new folders during author rename are now handled correctly (#3261)
* Upload of AZW, MOBI, and RTF files works again (#3263)
* Fixed issue where uploaded cover images appeared too dark (#3275)
* PDF Viewer now loads correctly on Windows (MIME type issue fixed) (#3277)
* Kindle browser downloads now handle ASCII-only filenames correctly (#3266)
* Improved error handling when proxying Kobo requests (#3334)
* Fixed Kobo sync failure when “Synchronize Notebooks” was enabled
* Locale and language names are now sorted alphabetically; duplicate “English” entry removed
* Improved error output for empty author sort values
* Unhandled errors in background tasks are now logged
* UI improvements for Caliblur theme on the book edit page
* Correct check of DjVu MIME type implemented
* Fixed issue with Overdrive where returning borrowed books partially failed (#3398)
* Fixed 403 error when accessing /ajax/updateThumbnails from a session authenticated by reverse proxy