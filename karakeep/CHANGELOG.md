# 0.31.0

Welcome to the 0.31.0 release of Karakeep! This release brings synchronized reading progress, LLM-based OCR, a revamped import pipeline, drag-and-drop for lists, highlights on mobile, a lot of mobile polish, and fixes for some long standing bugs. Huge thanks to our contributors for this release @esimkowitz, @WieserDaniel, @chen-ye, @SnowSquire, @mokhovyk, @evan6seven, @ElectricTea, @RobertRosca, @sweepies, @usr3 and everyone who shipped code, triaged bugs, or shared feedback for this release.

> If you enjoy using Karakeep, consider supporting the project [here ☕️](https://buymeacoffee.com/mbassem) or via GitHub [here](https://github.com/sponsors/MohamedBassem).

<a href="https://www.buymeacoffee.com/mbassem" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" width="auto" height="50" ></a>

And in case you missed it, we now have a ☁️ managed offering ☁️ for those who don't want to self-host. You can signup [here](https://cloud.karakeep.app) 🎉.

# New Features 🚀

- Synchronized reading progress across all your devices (#2302). By @esimkowitz!
  - Your reading position is now saved and synced, so you can pick up right where you left off on any device.
- LLM-based OCR as an alternative to Tesseract (#2442)
  - You can now use your configured LLM for OCR instead of Tesseract, which produces significantly better results for image and asset bookmarks.
- Revamped Import pipeline (#2378)
  - The import experience got another big overhaul: a new import details page (#2451), a dedicated low-priority queue for import crawling (#2452), better progress tracking, ability to pause an import and more resilient error handling.
- Drag-and-drop bookmarks into lists (#2469)
- Highlights support on mobile (#2494)
  - You can now view and create highlights in the mobile app's reader view.
- AI tag suggestions: instructs the model to limit auto-tagging to a subset of your existing tags for more consistent results (#2444).
- Export lists in backups and exports (#2484)
  - Automated backups and full exports now include your lists.
- Others:
  - Retry buttons for dangling (aka pending) bookmarks in the admin panel (#2341).
  - Add signup support to the mobile app.
  - OpenAI service tier configuration via `OPENAI_SERVICE_TIER` (#2339). By @RobertRosca!
  - Import from Instapaper (#2434). By @WieserDaniel!
  - Privacy-respecting bookmark debugger admin tool (#2373)
  - MCP server now supports custom configurable HTTP headers (#2436). By @chen-ye!
  - New search qualifiers:
    - `source:` filter to search by bookmark source (mobile, extension, web, etc.) (#2465).
    - `tag:` alias for `#` and `!` alias for negation (#2425).
    - New "Title Contains" condition in the Rule Engine (#2354). By @mokhovyk!

# UX Improvements ✨

- Mobile app overhaul:
  - Native tabs and more native-feeling screens.
  - Animated UI feedback in the sharing modal (#2427).
  - Show bookmark count in the all lists view.
- Better looking content fetching loading state in the bookmark preview.
- Two-phase metadata updates so bookmarks show up faster while crawling is still in progress (#2467).
- Links to apps, extensions and docs in the profile dropdown.
- Extension autofocuses on note field on open (#2366). By @SnowSquire!
- Improving the visual consistency of the settings page.
- Opt-in OAuth auto-redirect for single-provider passwordless setups (#2483)
- Add a download button for assets in the bookmark options menu.
- API keys now show their last-used dates to better identify unused keys.
- Fix masonry overflow in bookmark grids (#2400). By @evan6seven!
- Hide confusing `No suggestions` message when no search suggestions are available.

# Fixes 🔧

- [Security] Sanitize reddit's crawling output to prevent stored XSS. This was reported by @ByamB4 and published as a github advisory (GHSA-mg93-f9mw-wpgj).
- Eliminated O(n²) parsing of Netscape bookmark imports (#2338).
- Smart lists can now be used in search qualifiers and in other smart list queries (#2470)
- Parallelize content extraction in the crawler worker for faster crawling.
- Batch meilisearch indexing requests for better performance (#2441).
- Auto dismiss dialogs during crawling that might have caused worker crashes before.
- Use user's preferred language for manual summarization (#2429).
- Accept more permissive RSS feed content types (#2353). By @ElectricTea!
- Fix clipping of reader view in smaller screens.
- Fix overscrolling in some setting pages (e.g. AI settings).
- Stop theme flashes with Cloudflare Rocket Loader (#2340). By @sweepies!
- Retry 403, 429 and 5XX status codes from the crawler.
- Lower priority of recrawling and mass admin actions to avoid starving interactive traffic.
- Fix scrolling in manage lists/edit tags when inside a dialog (#2258).
- Respect archived display behavior setting in mobile lists and tags (#2499).
- Fix flicker on closing bookmark preview on search page.
- Share PDFs from the mobile app as files instead of links.
- Fix high CPU usage of browser container after large imports due to leaking contexts. (#2503)
- Reader settings preview in the mobile app now matches reader view formatting (#2365). By @esimkowitz!
- When saving an image or a link from a page using "Add to Karakeep" menu item, the title of the original page is no longer incorrectly used for that link.

# For Developers 🛠️

- Docker images moved from Alpine to Debian.
- OpenTelemetry instrumentation for database queries and extra tracing in OTEL traces (#2453).
- Prometheus metric for bookmark crawl latency (#2461).
- New `checkUrl` API endpoint to check if a URL is already bookmarked.
- `attachedBy` field in the update tags API endpoint to mark the tag as added by human or AI (#2281).
- Upgraded to Expo SDK 54, React 19.2.1, and Node.js 24.
- CLI can now search bookmarks (#2426).

# Screenshots 📸

### Reader Progress

![https://github.com/user-attachments/assets/86b259f6-2ce7-493f-a02c-d883c76c901c](https://github.com/user-attachments/assets/86b259f6-2ce7-493f-a02c-d883c76c901c)


### Import Details

![https://github.com/user-attachments/assets/b37c91a5-b74a-4de5-94d3-f25c346cae7b](https://github.com/user-attachments/assets/b37c91a5-b74a-4de5-94d3-f25c346cae7b)


# Upgrading 📦

To upgrade:
* If you're using `KARAKEEP_VERSION=release`, run `docker compose pull && docker compose up -d`.
* If you're pinning it to a specific version, bump the version and then run `docker compose pull && docker compose up -d`.

# All Commits

* fix(workers): sanitize reddits metascraper output - @MohamedBassem in ba3db95
* fix(i18n): update en_US translation strings - @MohamedBassem in 52c1e9f0
* i18n: Sync weblate translations - Weblate in f7ae922c
* fix(workers): mitigate leaking browser contexts and setup and auto reaper (#2503) - @MohamedBassem in 627faf51
* fix(web): avoid flicker on closing bookmark preview on search page - @MohamedBassem in ec0aaad0
* fix(mobile): respect archiveDisplayBehaviour setting in lists and tags (#2499) - @MohamedBassem in 59a25607
* fix(web): fix scrolling in manage lists/edit tags when inside a dialog. fixes #2258 - @MohamedBassem in e37d7286
* fix(mobile): remove the use of custom safe areas - @MohamedBassem in ef0b50be
* fix(mobile): remove smart lists from manage_lists page - @MohamedBassem in 7124d15b
* docs: correct breaking typo in 05-singlefile.md doc (#2496) - @brandongalbraith in 0e3bc6f1
* fix(mobile): fix formsheets on android - @MohamedBassem in 228eb208
* fix(ui): fix the colors of buttons in the settings page - @MohamedBassem in 3d6c83d5
* fix(ui): Improve visual consistency in all settings page - @MohamedBassem in e02a4c5e
* feat: add checkUrl endpoint to replace searchBookmarks for URL existence checks - @MohamedBassem in b2492735
* fix: auto dismiss dialogs during crawling - @MohamedBassem in 23ae17fa
* deps: fix mismatch in @types/react across packages - @MohamedBassem in 6f78d2f8
* deps: upgrade playwright to 1.58.2 - @MohamedBassem in 07cc3eff
* fix(restate): call onError on rpc failures - @MohamedBassem in 4fd0eaf0
* fix(mobile): drop the use of custom safe areas in bookmark lists - @MohamedBassem in 447d2cc8
* fix(mobile): fix headers in android app - @MohamedBassem in 349fe05e
* fix: parallelize content extraction in crawler worker - @MohamedBassem in 74c34529
* fix(ux): hide autocomplete dropdown when there are no suggestions - @MohamedBassem in c6417d8e
* docs: Add Cloudflare Workers AI provider (#2486) - @usr3 in 5946ce8f
* feat: add synchronized reading progress for bookmarks (#2302) - @esimkowitz in fff0a280
* feat(mobile): Add highlights support for the mobile app (#2494) - @MohamedBassem in 459ee50e
* fix: dont trigger background jobs if bookmark doesn't change on updateTags call - @MohamedBassem in fbc63b92
* fix(import): truncate title to max length in import worker - @MohamedBassem in 74b174ad
* feat(crawler): retrun 403, 429 and 5XX status codes - @MohamedBassem in 1c5c8ec6
* fix(web): fix clipping of reader view in smaller screens - @MohamedBassem in 41d2f0d7
* fix(web): fix double scrolling in sidebar layout - @MohamedBassem in a8e8ce98
* feat(ui): Add a better content fetching loading state in the bookmark preview - @MohamedBassem in be090270
* feat: add a download button to the More submenu in bookmark options - @MohamedBassem in 2c57aa87
* feat: add OAuth auto-redirect functionality (#2483) - @MohamedBassem in 33b91e3f
* feat: export lists in backups and exports (#2484) - @MohamedBassem in 0c458ba1
* feat(workers): extract html parsing into a subprocess (#2485) - @MohamedBassem in 7a100672
* feat(mobile): make the bookmark edit UIs look more native - @MohamedBassem in ec7ef00f
* fix: share PDFs as files instead of links in mobile app - @MohamedBassem in 0fab1aa6
* feat: link to apps and extensions, docs and twitter in profile dropdown - @MohamedBassem in d72788ff
* fix: dedup list and recent search suggestions - @MohamedBassem in 8539c836
* fix: Support nested smart lists with cycle detection (#2470) - @MohamedBassem in b3d3602d
* feat(mobile): Add animated UI feedback to sharing modal (#2427) - @MohamedBassem in b41b5647
* feat(mobile): more native screens - @MohamedBassem in e455e468
* feat(ai): Support restricting AI tags to a subset of existing tags (#2444) - @MohamedBassem in 4186c4c6
* feat(mcp): Support custom configurable HTTP headers (#2436) - @chen-ye in 77b186c3
* feat: Added Import for Instapaper (#2434) - @WieserDaniel in fbe7e3a9
* feat: Add drag-and-drop support for bookmarks to lists (#2469) - @MohamedBassem in 485e9948
* feat(crawler): Split bookmark metadata updates into two phases for faster feedback (#2467) - @MohamedBassem in c8464e30
* feat: add source filter to query language (#2465) - @MohamedBassem in b05a7531
* fix: treat bookmark not found as a no-op in rule engine instead of a failure (#2464) - @MohamedBassem in 960ca9b6
* fix(extension): dont store tab title when saving links or images. fixes #2462 - @MohamedBassem in 1a01f75d
* feat: Add separate queue for import link crawling (#2452) - @MohamedBassem in bbd65fd6
* fix: lower the priority of recrawling - @MohamedBassem in 7d53e2e4
* feat(metrics): add prometheus metric for bookmark crawl latency (#2461) - @MohamedBassem in b2640803
* feat(db): add OpenTelemetry instrumentation for database queries - @MohamedBassem in 9e5693c6
* feat(import): new import details page (#2451) - @MohamedBassem in e59fd98b
* feat: add extra instrumentation in the otel traces (#2453) - @MohamedBassem in 538035c4
* fix(import): sanitize error messages to prevent backend detail leakage (#2455) - @MohamedBassem in 93ad2e20
* fix(import): propagate crawling/tagging failure to import status - @MohamedBassem in 50320ecd
* fix: backfill old sessions and do queue backpressure (#2449) - @MohamedBassem in e8e48a41
* feat: Import workflow v3 (#2378) - @MohamedBassem in 3c838ddb
* feat: Add LLM-based OCR as alternative to Tesseract (#2442) - @MohamedBassem in 3fcccb85
* feat: batch meilisearch requests (#2441) - @MohamedBassem in 54243b8c
* fix(mobile): migrate from RN image to expo-image - @MohamedBassem in e8618800
* feat(mobile): use native tabs for mobile - @MohamedBassem in bf5c99cb
* feat(mobile): add signup support to the mobile app - @MohamedBassem in 5cb73069
* fix: better looking error message when article content is unavailable - @MohamedBassem in 67501ed6
* refactor: migrate trpc to the new react query integration mode (#2438) - @MohamedBassem in 65f6e83f
* feat(mobile): show num bookmarks in the all lists view - @MohamedBassem in 4bc1b90f
* fix: use user's preferred language for manual summarization (#2429) - @MohamedBassem in 95bfa569
* feat(cli): Add bookmark search command (#2426) - @MohamedBassem in 42cdc937
* feat(search): add tag: alias for # and ! alias for negation (#2425) - @MohamedBassem in 5656e394
* feat(extension): autofocus on note open (#2366) - @SnowSquire in bf2c6ded
* feat: Add attachedBy field to update tags endpoint (#2281) - @MohamedBassem in e09061bd
* docker: add USE_JEMALLOC env var and disable it by default - @MohamedBassem in edf3f681
* docker: switch to jemalloc - @MohamedBassem in 6535a5a2
* docker: move from alpine to debian - @MohamedBassem in b0036ef1
* feat: track api key usage dates - @MohamedBassem in 7b5f6328
* deps(mobile): upgrade to sdk 54 - @MohamedBassem in 6094d360
* feat(rules): add "Title Contains" condition to Rule Engine (#1670) (#2354) - @mokhovyk in c56cf4e2
* fix(mobile): Reader settings preview on mobile matches reader view formatting (#2365) - @esimkowitz in 1b98014d
* fix(web): avoid masonry overflow in bookmark grids (#2400) - @evan6seven in 789188b5
* deps: upgrade react to 19.2.1 - @MohamedBassem in 086b464d
* fix(mobile): add custom headers to card banners. fixes #2342 - @MohamedBassem in b4dbc9ce
* feat: privacy-respecting bookmark debugger admin tool (#2373) - @MohamedBassem in 0f9132b5
* fix: Accept more permissive RSS feed content types and Fix User-Agent key (#2353) - @ElectricTea in 0e938c14
* fix: harden the restate implementation (#2370) - @MohamedBassem in f48e98e1
* fix: parallelize queue enqueues in bookmark routes - @MohamedBassem in 4ba1475d
* feat: add openai service tier configuration option (#2339) - @RobertRosca in aa7a81e0
* fix: stop theme flashes with cloudflare rocket loader (#2340) - @sweepies in 2a6fe6e6
* feat: Add retry buttons for pending bookmarks in admin panel (#2341) - @MohamedBassem in e195f40b
* fix: Eliminate the O(n2) parsing of the netscape import parsing (#2338) - @MohamedBassem in 6fe20639
* feat(mobile): use react native sonner - @MohamedBassem in 016433d4
