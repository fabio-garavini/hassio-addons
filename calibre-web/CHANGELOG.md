!Attention! For this update nh3 has to be installed !Attention!

**New features:**
- MOBI files now support metadata extraction on upload
- Reverse proxy login with shared secret header implemented

**Bug Fixes:**
- Cover path is now selected based on the correct setting instead of the presence of `split_path` (#3527)
- Title sort with "l'" now works correctly in French
- Exclamation marks removed from HTML strings
- Kobo sync behind reverse proxy now works correctly: `library_sync` URL is rewritten in init response
- Add-to-shelves dropdown menu now renders correctly
- Kobo "Sync to last page read" popup no longer appears repeatedly due to float/int mismatch
- Kobo "Return to last page read" popup when ProgressPercent is 0 now handled correctly
- Kobo PUT `/state` response now includes PriorityTimestamp
- Downloaded filenames now use native UTF-8 encoding for browsers that support it
- Series list view now sorts by the correct sort field, preventing incorrect article-inclusive sorting (#3583)
- natsort is now used for comic cover page detection when available
- Login failure now returns HTTP 401
- Registration and password reset emails are now sent in the recipient's language
- Crash when User-Agent header is missing is now fixed
- Infinite scroll now triggers correctly on mobile browsers (#3664)
- Case-insensitive duplicate tags are no longer created
- UNIQUE constraint crash on transliteration-identical authors is now fixed (#3403, #3170)
- Caliblur eReader toolbar dropdown overflow is now fixed
- Unauthenticated OPDS requests no longer cause an AttributeError (#3592)
- Metadata search no longer crashes when ComicVine or Douban return no results (#3606)
- Kobo API results are now correctly filtered
- kepubify path is now properly cleared when removed
- OPDS `atom:updated` now reflects the last modification date instead of date added
- Staged temporary download files are now cleaned up after the response is sent
- Cover sibling files are no longer created on every book download (`--dont-save-cover`)
- lubimyczytać.pl metadata provider is now working correctly
- Error handling for series display and book/user table sorting is now improved
- Book conversion format validation now works correctly with HTML-based formats
- Circular import issue in format conversion is now fixed
- File upload temp folder is now instance-specific
- Reverse proxy login now shows user warning when enabled
- Rate limiter reset for reverse proxy header login is now deactivated
- Reverse proxy login now restricts IP addresses and uses shared secret header
- Dialog size of Server side file picker is now limited
- Search metadata provider selection has been improved
- GDrive file type condition error is now fixed
- OPDS error handling for unauthenticated requests is improved

** Security **
- XSS payload in book comments imported via Calibre is now sanitized before display (reported by @Nozomu Sasaki)
- External binary names (e.g. unrar) are now restricted to prevent remote command execution (CVE-2025-7404)
- ReDoS vulnerability in whitespace stripping is now fixed (CVE-2025-6998)
- Stored XSS via author names in `author.html` is now prevented
- Magic link login flow is now hardened against misuse
- SQL injection via the database path parameter is now prevented
- LDAP injection in `bind_user` / `get_object_details` is now prevented
- XXE injection in EPUB, FB2 and Goodreads API parsing is now prevented
- IDOR in Kobo tokens is now fixed
- OAuth account relinking by unauthorized users is now prevented
- Shelf editing is now restricted to users with appropriate permissions
- Unauthorized access to book files via `/show/` is now prevented
- Server credentials are no longer exposed in debug output
- Encryption key file now has restrictive file permissions (0o600)
- CSP nonce entropy increased from 32 to 128 bits
- SQL comment column names are now properly escaped
- A Format check during conversion is now performed
- Whitespace stripping performance is improved
- Non-admin users no longer see full stack traces on HTTP 500 errors
- Bleach library replaced with nh3 for improved security and performance
- Python 3.14 compatibility with lxml v6
- Comments are now cleaned/sanitized to prevent injection attacks