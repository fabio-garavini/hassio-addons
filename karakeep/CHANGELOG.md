# 0.28.0 (20k stars ⭐)

Welcome to the 0.28.0 release of Karakeep! We've have hit 20k stars on Github 🎉 (well 21k because I was too late with the release)! Thanks a lot for your support throughout this journey! This release brings a refreshed import pipeline, uploading custom attachments, revamped tags page, inline checklists, and a bunch of quality-of-life touches across the web app, extension and mobile app. Huge thanks to @BOTkirial, @qixing-jk, @@maya-doshi, @BenjaminMichaelis, @cloudchristoph, @claytono, as usual @xuatz and everyone who shipped code, triaged bugs, or shared feedback for this release.

> If you enjoy using Karakeep, consider supporting the project [here ☕️](https://buymeacoffee.com/mbassem) or via GitHub [here](https://github.com/sponsors/MohamedBassem).

<a href="https://www.buymeacoffee.com/mbassem" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" width="auto" height="50" ></a>

And in case you missed it, we now have a ☁️ managed offering ☁️ for those who don't want to self-host. We're still in private beta (you can signup for access [here](https://tally.so/r/wo8zzx)) and gradually letting more and more users in.


# New Features 🚀

- Revamped import experience with progress tracking (#2001)
- Revamped Tags page that adds search and pagination to better serve users with thousands of tags (#1987)
- You can now upload custom attachments to bookmarks (#2100)
- When deleting a list, you can now optionally delete all its children (#1989)
- Server overview highlights service dependency health.
- Inline checklist toggling for text bookmarks (#1933) – @BOTkirial
- With every release, you'll be prompted to view what's new in that release from inside the app.
- You can now pass custom headers from the mobile app to the server (#2103)
- Extension improvements:
  - Tab bookmark badge indicator by @qixing-jk shows when a page is already bookmarked (#1745)
  - You can now write notes directly after saving a bookmark in the extension (#2104)

# UX Improvements ✨

- Grid view controls expose title/tag toggles and image fit options (#1960)
- Bookmark cards can surface saved notes across web and mobile (#2083) – @xuatz
- Manage Lists modal is searchable for faster sorting (#2029)
- The tags page now has a "Create Tag" button (#1942)
- You can now regenerate the API key without having to recreate it.
- New `title:` seach qualifier for searching bookmarks by title (#1940)

# Fixes 🔧
- ⚠️ (Potentially breaking change) ⚠️ Stricter URL valdaition to protect against SSRF attacks (#2082)
  - Webhook requests now go through the proxy if there's one configured
  - All server-initiated requests (including webhooks) to internal IP addresses are now blocked by default unless explicitly allowed via `CRAWLER_ALLOWED_INTERNAL_HOSTNAMES`. If your webhooks are hitting internal services, you'll have to allowlist them via `CRAWLER_ALLOWED_INTERNAL_HOSTNAMES`.
  - Monolith now honors the configured crawler proxy.
  - Metascraper logo extraction now respects the crawler proxy.
- Crawler memory footprint shrinks with targeted optimizations (#1748)
- Allow karakeep to use newer openai models that was previously failing because of deprecated max_tokens (#2000) - @BenjaminMichaelis
  - You'll need to set `INFERENCE_USE_MAX_COMPLETION_TOKENS=true` in your `.env` file to use the new models. This is eventually going to become the default.
- Admin maintenance jobs respect abort signals to stop gracefully
- Search input no longer crashes on percent signs and also works correctly with IME composition
- Fixed a crash when sharing a list publicly that didn't have any bookmarks (#1990)
- Screenshots are now stored as jpegs instead of pngs to reduce file size
- Fixed a bug that was preventing tag merging (#1938)
- RSS imports can apply feed categories as tags (#2031)

# For Developers 🛠️
- Create bookmark API returns 200 instead of 201 when a bookmark already exists
- CLI Improvements:
  - New commands to migrate data from one server to another
  - New command to dump a full account archive
  - A new wipe command to selectively clean up data from the account

# Community Projects 💡

### [Karakeeper](https://apps.apple.com/us/app/karakeeper-for-karakeep/id6746722790)

3rd Party iOS/Safari Client - *by @simplytoast1*

Karakeeper now is providing an alternative iOS native mobile/desktop client for Karakeep beyond its existing functionality of providing a safari extension.

### [Karakeep Sync](https://github.com/sidoshi/karakeep-sync)

A syncing tool for Karakeep - *by @sidoshi*

A rust-based syncing tool that syncs: Hacker News upvotes, Reddit saved posts, Github stars and Pinboard bookmarks automatically to Karakeep!


# Screenshots 📸

## Inline Checklists
<img width="1230" height="806" alt="Screenshot 2025-11-08 at 8  55 18@2x" src="https://github.com/user-attachments/assets/c092d903-eb6f-40c6-aee6-1ce6127f67e8" />

## Import Sessions
<img width="1814" height="762" alt="Screenshot 2025-11-08 at 8  58 21@2x" src="https://github.com/user-attachments/assets/dfcb856b-6a63-4d7a-ba4b-ce2ca83bc844" />

## Service Health Indicators
<img width="1874" height="540" alt="Screenshot 2025-11-08 at 8  56 00@2x" src="https://github.com/user-attachments/assets/7835f1ad-239d-477c-8e00-951e4a09f8c6" />


# Upgrading 📦

To upgrade:
* If you're using `KARAKEEP_VERSION=release`, run `docker compose pull && docker compose up -d`.
* If you're pinning it to a specific version, bump the version and then run `docker compose pull && docker compose up -d`.


# All Commits

* fix: standardize US English translations to professional tone - @MohamedBassem in 4f025f5a
* i18n: Sync weblate translations - @weblate in 5387c982
* tests: fix crawling and search e2e tests (#2105) - @MohamedBassem in c4bee9fe
* feat(extension): Allow writing notes directly in the extension (#2104) - @MohamedBassem in 098e56a8
* fix(mobile): fix default address not correctly stored in settings - @MohamedBassem in a2203196
* feat(mobile): add custom headers configuration in sign-in screen (#2103) - @MohamedBassem in ec621bf5
* tests: Fix failing test - @MohamedBassem in 27ed0a19
* feat: Add what's new modal in the sidebar (#2099) - @MohamedBassem in 474f6429
* feat: Add support for user uploaded files (#2100) - @MohamedBassem in 31960fcd
* refactor: consolidate multiple karakeep plugins into one package (#2101) - @MohamedBassem in 99413db0
* fix: metascraper logo to go through proxy if one configured. fixes #1863 - @MohamedBassem in 737b0317
* feat(extension): add tab bookmark badge indicator (#1745) - @qixing-jk in f0b0959e
* fix: restore image size in grid layout - @MohamedBassem in 2056582c
* deps: Upgrade react-query to 5.90 - @MohamedBassem in 560900bb
* feat: Support inline toggling for todos. fixes #1931 (#1933) - @BOTkirial in 393bbd9a
* fix: fix monolith to respect crawler proxy - @MohamedBassem in 085c832c
* feat(rss): Add import tags from RSS feed categories (#2031) - @MohamedBassem in 5358682a
* fix: fix crash in search input when query contains a percent. fixes #1941 - @MohamedBassem in 633686b5
* feat: Add view options to show tag/title and control image fit. Fixes #1960 - @MohamedBassem in 34d2b485
* refactor: improve the userLocalSetting server functions - @MohamedBassem in bb00c996
* feat: Make search job timeout configurable - @MohamedBassem in 965c603d
* feat: display notes on bookmark card (#2083) - @xuatz in 33f40779
* fix: Stricter SSRF validation (#2082) - @MohamedBassem in b63a49fc
* fix: correctly handle composition in search input. fixes #2048 - @MohamedBassem in c6ebceb9
* fix: browser service connection check using dns instead. Fixes #2080 - @MohamedBassem in c9c73d41
* fix: More memory optimizations for crawler worker. #1748 - @MohamedBassem in 40d548bd
* fix: fix screenshot filepath in crawler - @MohamedBassem in 0704b8bb
* docs: Add Azure configuration details for OpenAI-compatible API (#2072) - @cloudchristoph in bd9c933b
* fix: Respect abort signal in admin maintenance jobs - @MohamedBassem in 8a330dc2
* deps: Upgrade metascraper plugins - @MohamedBassem in e43c7e0f
* deps: Upgrade metascraper-readability 5.49.6 - @MohamedBassem in 6d234de8
* feat: Allow configuring inline asset size threshold - @MohamedBassem in cf3ffff0
* feat: Add admin maintenance job to migrate large inline HTML (#2071) - @MohamedBassem in 2b769cba
* fix(inferance): skip token slicing when content is already witin max length - @MohamedBassem in 17136006
* refactor: generalize tidy assets queue into admin maintenance (#2059) - @MohamedBassem in 6ea5dd19
* fix: update OpenAI API to use max_completion_tokens instead of max_tokens (#2000) - @BenjaminMichaelis in 046c29dc
* fix(restate): Fix priority for restate queue - @MohamedBassem in 8c0aae33
* fix(restate): Ensure that the semaphore and idProvider services are ingress private - @MohamedBassem in cdf81213
* feat: Add source field to track bookmark creation sources (#2037) - @MohamedBassem in 2defc247
* feat: support passing multiple proxy values (#2039) - @MohamedBassem in c14b6934
* deps: Upgrade oxlint to 1.22 - @MohamedBassem in 88a7ffec
* feat: Add service dependency checks in the server overview page - @MohamedBassem in fda1c851
* fix(web): Add w-full to tags editor to prevent unusable narrow width (#2035) - @MohamedBassem in 7ee9416e
* fix(api): Return 200 when bookmark already exists instead of 200 - @MohamedBassem in f2dec26f
* tests: Add a test for the GET /bookmarks/bookmarkId/lists api - @MohamedBassem in d5780388
* fix(api): Document the API for getting lists of a bookmark. fixes #2030 - @MohamedBassem in 7f138b99
* feat: make list dropdown searchable in Manage Lists modal (#2029) - @MohamedBassem in 87053d2e
* fix: fix dev script shebang for better compatibility (#2019) - @maya-doshi in dcddda56
* fix: Correct grammatical errors in prompts (#2020) - @atsggx in f1e8cea2
* docs: Add karakeep-sync to community projects (#1994) - @sidoshi in 36ffbdf8
* fix: round feed refresh hour for idempotency (#2013) - @MohamedBassem in bae8386d
* fix: fix show no bookmark page when there isn't search results - @MohamedBassem in 57d731ba
* fix: Disable idempotency keys for search - @MohamedBassem in b6867be4
* feat: Restate-based queue plugin (#2011) - @MohamedBassem in 74a1f7b6
* feat: Revamp import experience (#2001) - @MohamedBassem in 4a580d71
* docs: Add doc updates for prometheus metrics (#1957) - @claytono in 5e331a7d
* fix: fix public list sharing for empty lists (#1990) - @MohamedBassem in 7df6d942
* feat: recursive list delete (#1989) - @MohamedBassem in 7d0b414f
* feat: use jpegs for screenshots instead of pngs - @MohamedBassem in ed1f24f2
* feat: Stop downloading video/audio in playwright - @MohamedBassem in 37845f99
* fix: Abort dangling processing when crawler is aborted (#1988) - @MohamedBassem in 9eecda18
* fix: Cleanup temp assets on monolith timeout - @MohamedBassem in 8dd84ef5
* chore: Silence lint on <a> and <img> tags when it's intentional - @MohamedBassem in cdbedf6c
* fix: dont re-enqueue indexing for a bookmark already pending indexing - @MohamedBassem in e395ac27
* feat: Add tag search and pagination (#1987) - @MohamedBassem in 62f7d900
* fix: optimize memory usage of tag listing - @MohamedBassem in 9fe09bfa
* deps: Upgrade oxlint to 1.16 - @MohamedBassem in bbc5e6c2
* fix: fix bundling liteque in the workers - @MohamedBassem in 851d3e29
* refactor: Move callsites to liteque to be behind a plugin - @MohamedBassem in 8d320554
* fix(dev): worker not started properly in helper start script (#1946) - @xuatz in 6ba61b46
* feat: Regen api keys - @MohamedBassem in 7671f4ff
* release(cli): Bump CLI version to 0.27.1 - @MohamedBassem in 69ef2ffe
* feat(cli): Give more targetting options for dump/migrate/wipe - @MohamedBassem in 6501f69a
* release(cli): Bump CLI version to 0.27.0 - @MohamedBassem in 0700aab8
* feat(cli): Implement a full account dump archive - @MohamedBassem in b9a8ca29
* feat(cli): Implement a wipe command in the CLI - @MohamedBassem in bc0e7461
* feat: Add scripts to migrate all content from one server to the other - @MohamedBassem in 783f72cb
* fix(web): Handle user deletion more gracefully - @MohamedBassem in 92e357f1
* feat: A better looking catch all error boundary - @MohamedBassem in d53b2826
* fix(web): fix error when attempting to merge tags. fixes #1938 - @MohamedBassem in d173b101
* feat: Add Create Tag button to tags page (#1942) - @MohamedBassem in 820b7e65
* chore: fix claude code action - @MohamedBassem in c2dcb9dc
* refactor: strongly type the search plugin interface - @MohamedBassem in bf5bf996
* feat(search): add title search qualifier (#1940) - @MohamedBassem in a92ada77
* feat(extension): add current tab title while saving from extension (#1930) - @Abel in b594ff09