Welcome to the `0.32.0` release of Karakeep! The mobile app is getting a major redesign by @esimkowitz so that it feels more native and friendly to use. Our long-overdue Safari extension is now available on the app store. Karakeep is now more AI-agents friendly with an official skill, revamped and more powerful CLI, granular API keys (and more coming in the next release). SingleFile is now integrated inside the karakeep extension itself for better crawling of authenticated pages. Keyboard shortcuts for faster actions across the app. And tons of fixes!

This release has a huge list of contributors. Some frequent faces, and many contributing their first PRs. Thanks @esimkowitz, @Mxrk, @beluga73, @Ahmed-Abdel-karim, @GSAlex, @cinconueves, @keslerm, @xingzihai, @howwohmm, @vbalko-claimate, @MaximePinot, @apo-mak, @NikhilChowdhury27, @maxim-mityutko, @xuatz, @ir31k0, @Joly0, @larsborn, @venku122, @lmgarret, @hoilc, @zerone0x, @mrInvincible29, @Go2Engle, @faximan.

*Note: the changes mentioned here for the extension and mobile releases will need to go through the different store (apple, google, mozilla) reviews. So it might take a couple of days until all of them are released.*

> If you enjoy using Karakeep, consider supporting the project [here ☕️](https://buymeacoffee.com/mbassem) or via GitHub [here](https://github.com/sponsors/MohamedBassem). Also share Karakeep's managed offering (☁️ [link](https://cloud.karakeep.app)) to your friends who're not into selfhosting. We're offering yearly subscriptions now.

<a href="https://www.buymeacoffee.com/mbassem" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" width="auto" height="50" ></a>


# New Features 🚀

* Karakeep's **Safari extension** is now available on the App Store ([link](https://apps.apple.com/gb/app/karakeep-app/id6479258022?platform=mac)), closing Karakeep's oldest open issue (#10).
* Huge **mobile app revamp lead by @esimkowitz**:
  * More native screens, headers and action buttons by @esimkowitz (#2685)
  * Customizable reader toolbar by @esimkowitz (#2527)
  * Add ability to keep screen on for bookmark reading by @esimkowitz (#2691)
  * Opening links in the reader view now opens them in an in-app browser so that you can quickly go back to where you left by @esimkowitz (#2696)
  * Add ability to default open links in external browser by @xingzihai (#2516)
* **Karakeep for Agentic usage**: Our goal is to make Karakeep very AI agents friendly. This will allow agents (OpenClaw, Hermes, etc) to find and hoard interesting content on your behalf, provide weekly digests, and more.
  * We're publishing an official skill for karakeep on ClawHub and skills.sh (details [here](https://docs.karakeep.app/next/integrations/agentic-skills)). Those skills teach the agent karakeep's concepts and how to use the CLI.
  * CLI improvements:
    * The CLI also got major improvements allowing it to manage more aspects for bookmarks, lists, and tags. Also got more AI friendly formatting, etc.
    * To avoid having to pass the address and API key with every request, karakeep can now store the auth config in a file and use it for further requests. Init that file with `karakeep auth init`.
  * If you're afraid to give agents full Read/Write access to your data, API keys now have granular scopes to all resources. Which means you can give agents access to your bookmarks but not administrative actions (like deleting users), etc.
* **Keyboard Shortcuts**: You can now do more with the keyboard, as we added support for navigating the bookmark grid with keyboard shortcuts, and taking actions such as favouring/archiving and doing bulk actions. This is the beginning, and please send feature requests for the extra features you need.
* **Extension improvements**:
  * [Experimental] The extension can now crawl bookmarks from the client-side eliminating the need of using the SingleFile extension separately from Karakeep (Powered by SingleFile core). This allows you to store pages that are behind authentication or unreachable from your Karakeep server. It's currently opt-in until stable, and then will become the default. Enable it from the extension settings (#2197).
  * Added support for manual save (instead of the default save on open) by @keslerm (#2693)
* **More import sources**:
  * Add support for importing from OneTab by @apo-mak (#2495)
  * Add support for importing from Readwise Reader by @cinconueves (#2690)
* **Others**:
  * Karakeep MCP now has an update-bookmark tool by @vbalko-claimate (#2717)
  * Add support for writing rule engine rules based on bookmark source by @xingzihai (#2547)
  * Add support for configuring OpenAI reasoning effort by @cinconueves (#2718)
  * New extensive event logging for events that happen all over the app. More info about how to enable it [here](https://docs.karakeep.app/configuration/environment-variables#monitoring).


# UX Improvements ✨

* Visual revamp for the bookmark preview page with nicer colors and ability to collapse the sidebar (f500129c).
* Visual revamp for the "All lists" page showing list privacy settings and number of items in each list (145dda9d).
* List and tags page headers now show more info about the content and type of the list/tag (#2749)
* Quickly favourite and archive a bookmark by new buttons that appear on hover (98e173d8).
* Haptic feedback on mobile sidebar navigation (f91ec531).
* Show "+" in the tag count badges when more pages exist by @zerone0x (432235be).
* In the add bookmark to list dialog, you no longer need to explicitly save the selection thanks to @xingzihai (#2629)
* The default new list emoji changed from "🚀" to "📁". Maturity, I guess?
* You can now add multiple lists to the same rule engine condition by @Ahmed-Abdel-karim (#2620)
* Timestamps across the app are now correctly localized instead of showing the server's timezone (#2682)


# Fixes 🐛

* **Important Security fixes**:
  * Reported by @tahirsercan (GHSA-g647-327m-79g9)
    * Fix SSRF validation bypass caused by redirects in crawler and video worker
  * Those issues were reported by Sami Zayn:
    * Add missing ratelimits for the changePassword endpoint
    * Sanitize user names before storing them to avoid stored XSS in karakeep emails (#2724)
    * Invalidate existing password reset tokens before issuing a new one (#2722)
  * Reported by @CE2Sec (GHSA-7rx4-c5vx-g8w3)
    * Fix blind SSRF in crawler favicon extraction
  * Add missing ratelimits for bookmark creation and asset upload APIs
* Fix a bug where adding a bookmark to a tag or list didn't appear immediately requiring a refresh.
* Bulk actions used to hammer the server with cache refill requests, those are now debounced.
* Fix adblocker getting skipped due to the URL validation interception.
* Fix "Manage tags" page on iOS not scrolling correctly.
* Prevent highlight popup from stealing focus on Firefox (11dfe74d)
* Fix rare crash in the crawler worker (d197f595)
* Increase max feed url length to 2k chars (07454a6a)
* Fix cropped text in android app when using bold text by @Go2Engle (#2554)
* Fix occasional problems connecting to server from mobile app when it's behind a reverse proxy by @mrInvincible29 (#2559)
* Better extraction for lazy loaded images from content by @zerone0x (#2556)
* Expand $tags/$aiTags/$userTags in AI prompt preview by @zerone0x (#2557)
* Fix sourceUrl not getting saved when creating asset bookmarks via the API by @hoilc (#2574)
* Redact internal server error messages in prod responses (c8a75a0b)
* Correctly parse linkwarden collections during import (722fd8c0)
* Correctly extract TWZ RSS categories as tags by @venku122 (#2589)
* Correctly skip tagging and summarization for assets that fail preprocessing to avoid misleading numbers in the admin panel
* Improve meilisearch request batching for better performance
* Enable configuring monolith timeout and arguments by @NikhilChowdhury27 (#2659)
* Fix openai proxy setting not getting respected by the openai client (#2676)
* Fix formality and tone for a bunch of languages to match that of English
* Use the same proxy URL for all network interactions within the same crawler job run
* Fix parsing archived status for bookmarks imported from Pocket by @howwohmm (#2656)
* Fix parsing archived status and folder for Instapaper bookmarks
* Upgrade playwright to 1.59 to fix browserless compatibility issues
* Stricter full text search matching strategy for bookmarks to provide more relevant results (68e73500)
* Fix unreachable background script on Firefox by @Joly0 (#2649)
* Update default meilisearch version to 1.41 by @ir31k0 (#2643).
  * If you want to update your instance, check out meilisearch's guide [here](https://www.meilisearch.com/docs/learn/update_and_migration/updating).
* Fix truncate long bookmark titles on mobile app by @xuatz (#2699)
* Dedupe crawl jobs using idempotency key by @NikhilChowdhury27 (#2678)
* Add ability to finalize/delete a staged import session that might have been stuck before (#2713)
* Fix low quality video downloads caused by missing ffmpeg dependency to yt-dlp by @MaximePinot (#2721)
* Better ratelimiting for users behind the same IP (e.g. NAT) by including userId in the ratelimit key
* Use relative path for logout redirect to avoid port mismatch by @howwohmm (#2655)
* Skip URL type identification requests if a page is crawled with SingleFile by @GSAlex (#2580)
* Fix text clipping in bookmark card notes by @beluga73 (#2748)
* For CLI based server migrations, tags `attachedBy` is now correctly migrated (462d713f)


# For Developers 🛠️

* The API docs now have much more extensive documentation. (dd2c6cc0)
* New APIs:
  * For Trigger admin background jobs (4974ce58)
  * For managing feed subscriptions by @larsborn (#2635)
* Map TOO_MANY_REQUESTS to 429 status code in the API instead of internal server error (5b6402f3)
* The docker-compose based dev-env is now more stable and documented thanks to @xuatz (#2149)

# Community Projects 💡

*Checkout our community projects page [here](https://docs.karakeep.app/community-projects).*

* [Karatui](https://github.com/bercribe/karatui): A rust based TUI for managing your karakeep instance by @bercribe in 1c177160
* [Karaclean](https://github.com/lmgarret/karaclean): A Docker sidecar that automatically cleans up Karakeep bookmarks based on declarative YAML rules (e.g. age, tags, lists, etc). @lmgarret

# Screenshots 📸


### All Lists Page

<img width="988" height="833" alt="SCR-20260508-ophu" src="https://github.com/user-attachments/assets/905c44c5-73bc-4983-9442-8655b0e12df5" />


### Mobile App Toolbar

<img width="333" height="549" alt="image" src="https://github.com/user-attachments/assets/5a7a1465-7b6d-4034-b739-8a67e39e2de0" />

### Revamped Bookmark Preview Page

<img width="490" height="786" alt="SCR-20260508-opue" src="https://github.com/user-attachments/assets/d08ab50b-9e55-4768-9ddf-13f41ff6de1b" />

### Keyboard Shortcuts

<img width="487" height="664" alt="SCR-20260508-opza" src="https://github.com/user-attachments/assets/98137562-7f32-4114-9bc0-16d2d808cc16" />


### Granular API Keys

<img width="834" height="796" alt="SCR-20260508-opmw" src="https://github.com/user-attachments/assets/b0cef659-0697-4c86-95d3-1cd4d36b1389" />

### List Header

<img width="348" height="139" alt="SCR-20260508-oqnx" src="https://github.com/user-attachments/assets/6b9ae48e-9630-4e81-805e-374c2f7aa511" />

### New Extension Settings

<img width="1005" height="874" alt="SCR-20260508-osde" src="https://github.com/user-attachments/assets/e929ff0d-46b3-4c0d-b2c5-cd3040d09fb9" />


# Upgrading 📦

To upgrade:
* If you're using KARAKEEP_VERSION=release, run `docker compose pull && docker compose up -d`.
* If you're pinning it to a specific version, upgrade the version and then run `docker compose pull && docker compose up -d`.

# All Commits

* fix(crawler): proper handling for proxy auth with CDP interceptions - @MohamedBassem in b9b252ec
* feat(web): add more details to the all lists page - @MohamedBassem in 145dda9d
* i18n: fix automated i18n strings - @MohamedBassem in f797c4cf
* i18n: Sync weblate translations - @weblate in f0ad87fb
* feat: add keyboard shortcuts (#2750) - @MohamedBassem in cb6a25b8
* docs: add a comment to security docs about SSRF mitigations - @MohamedBassem in 62640bd7
* fix(mobile): fix scrolling in manage tags page in ios - @MohamedBassem in 4e1610ad
* refactor: refactor bulk actions to store bookmark ids (#2767) - @MohamedBassem in 517b87f5
* fix: harden video worker redirect validation against SSRF (#2760) - @MohamedBassem in 43f50e85
* fix: use correct env variable syntax for perplexity (#2765) - @Mxrk in 9c3a6061
* fix: use safe favicon resolution in metascraper (#2763) - @MohamedBassem in 3dc321e7
* fix: fix timezone handling in date displays across the app (#2682) - @MohamedBassem in 9db69a33
* fix: typo in docker docs (#2762) - @Mxrk in 9b93dab2
* feat: Add CLI auth config support (#2751) - @MohamedBassem in 90382dc3
* feat(mobile): open links and images in in-app browser (#2696) - @esimkowitz in bcc8d83e
* fix: fix SSRF handling with redirects in crawler worker (#2759) - @MohamedBassem in c1547297
* feat: Add agentic skills links to the landing page (#2761) - @MohamedBassem in 03c9db08
* fix: fix allow the adblocker to run after request interception - @MohamedBassem in c2d72435
* deps: upgrade protobufjs - @MohamedBassem in ab498a48
* feat(landing): add safari links to landing - @MohamedBassem in 9ab522a4
* feat: redesign list and tag page headers (#2749) - @MohamedBassem in 6ccf1fed
* fix(ui): resolve text clipping in bookmark cards (#2748) - @beluga73 in dc0c82ef
* tests: add a test for browser rendering - @MohamedBassem in 4ea8878c
* chore: use .gitignore as source of truth for oxfmt and oxlint (#2740) - @esimkowitz in 6b99eab9
* feat: Allow multiple lists for Rule Engine #2490 (#2620) - @Ahmed-Abdel-karim in 8a1f8303
* fix: debounce bulk query invalidations (#2745) - @MohamedBassem in 2ffe27eb
* feat(mobile): revamp search and navigation chrome (#2685) - @esimkowitz in 649efb87
* fix: fix subscription tranisiton event logging - @MohamedBassem in 4688a2e9
* chore: add event logging for bookmark summarization - @MohamedBassem in 53276718
* fix: reject user deletion with active subscription - @MohamedBassem in 635f8469
* fix: upgrade zod resolver to fix form validations (#2744) - @beluga73 in c5ed01dd
* fix: fix nodejs bundling for the eventLogger - @MohamedBassem in d83e50c8
* feat: add exhaustive event logging - @MohamedBassem in 6736c5a0
* chore: add infra for the event logger - @MohamedBassem in b18013e1
* feat: add metrics for sub status - @MohamedBassem in 3b3eb754
* feat(mobile): customizable reader toolbar (#2527) - @esimkowitz in 49c28689
* chore: add portless pnpm scripts - @MohamedBassem in 9d9e4702
* fix: change the archive button in the manage lists dialog to be a secondary button - @MohamedBassem in f928f975
* fix: fix promise race leaks in the worker (#2737) - @MohamedBassem in 6610a1aa
* feat: add granular API key scopes (#2731) - @MohamedBassem in d95e6f8f
* fix: fix broken cache invalidation requiring refresh after adding a bookmark to a tag or a list - @MohamedBassem in 0949d4f5
* deps: upgrade astro to 6.1.6. fixes #2728 - @MohamedBassem in 0b15d01d
* fix: skip url getContentType fetch if precrawledArchiveAssetId exists (#2580) - @GSAlex in b7c9fe86
* feat: add support for configuring OpenAI reasoning effort (#2718) - @cinconueves in a075ade0
* feat: change the default new list emoji to folder - @MohamedBassem in 430c035a
* fix: truncate urls in crawler logs - @MohamedBassem in 44ec0772
* feat: Add native single-file support to browser extension (#2197) - @MohamedBassem in 1ed39a37
* chore: fix PR template path - @MohamedBassem in 5e2b85ab
* chore: add PR template inspired from immich - @MohamedBassem in 0e9b1b63
* feat(extension): add manual save toggle for browser extension (#2693) - @keslerm in c3975018
* feat(web): auto-add bookmark to list on selection (#2629) - @xingzihai in a8c5ac94
* fix: use relative path for logout redirect to avoid port mismatch (#2655) - @howwohmm in 4dbcc414
* feat(mcp): add update-bookmark tool (#2717) - @vbalko-claimate in c699bc90
* fix: include userId in ratelimit key if the user is authed (#2726) - @MohamedBassem in 7f18376e
* fix: fix pnpm symlink conflict (#2725) - @MohamedBassem in b3d0cea9
* fix: add data: to style-src and font-src CSP directives in serveAsset (#2657) - @howwohmm in e2a39e45
* fix: sanitize user names before storing them (#2724) - @MohamedBassem in 6109588f
* fix: add ratelimiting for the changePassword endpoint (#2723) - @MohamedBassem in 8b51bff2
* fix: invalidate existing password reset tokens before issuing a new one (#2722) - @MohamedBassem in 35dcf80f
* fix(docker): add `ffmpeg` as required by `yt-dlp` (#2721) - @MaximePinot in 34487460
* fix: add ability to manually finalize/delete staged import sessions (#2713) - @MohamedBassem in f67f1847
* chore: add tests for the inference worker - @MohamedBassem in 364cb8a4
* feat: add OneTab import support (#2495) - @apo-mak in 00f9ccc2
* fix: deduplicate crawl jobs using idempotency key (#2678) - @NikhilChowdhury27 in 95bd4343
* feat: Add Readwise Reader import (#2690) - @cinconueves in 3d84150a
* fix: add missing source to createBookmarks from import - @MohamedBassem in 7cc01151
* deps: upgrade oxlint and oxfmt - @MohamedBassem in cde625ca
* docs: Update worker list in the environment variable reference (#2710) - @maxim-mityutko in c854e9e6
* docs: add skills to docs - @MohamedBassem in 2330ad3b
* fix: fix clawhub skill yaml - @MohamedBassem in b863d7d6
* fix: add clawhub metadata to karakeep skill - @MohamedBassem in e438b012
* feat(mobile): add keep screen on toggle for bookmark viewing (#2691) - @esimkowitz in 64ff1cc6
* chore: freshen up docker-compose.yml for local dev purposes (#2149) - @xuatz in 26545d64
* deps: upgrade to zod 4 (#2689) - @MohamedBassem in fa24e42e
* docs(mobile): add SENTRY_DISABLE_AUTO_UPLOAD=true to build apk without sentry dsn (#2700) - @xuatz in 8e6fcdca
* fix(mobile): remove react-native-keyboard-controller patch (#2697) - @esimkowitz in bb0d050c
* fix(mobile): truncate bookmark title with tailwind shrink (#2699) - @xuatz in 90821073
* fix: add support for instapaper archived status and folders - @MohamedBassem in 52f9ce0a
* feat: start tracking last successful feed fetch (#2688) - @MohamedBassem in 700359e9
* fix: compile native modules under pnpm 9 and pin Node 24 (#2686) - @esimkowitz in 39395361
* fix(deps): Update meilisearch version to v1.41.0 (#2643) - @ir31k0 in 8a0f4975
* fix: restate use lazy loading for semaphore state - @MohamedBassem in 6269175e
* fix(browser-extension): handle unreachable background script on Firef… (#2649) - @Joly0 in 6d54cd7e
* feat(mobile): iOS 26 header compatibility and header icon fixes (#2523) - @esimkowitz in e71681de
* feat(cli): include userId in admin user list output - @MohamedBassem in 2702f0fd
* fix: add ratelimiting to the asset upload endpoint - @MohamedBassem in 3b145e59
* deps: upgrade drizzle to 0.45 - @MohamedBassem in 0b278267
* fix: improve consistency of assetdb between local and s3 when a range is provided - @MohamedBassem in 546a89b0
* fix(skills): fix the tags of the skill - @MohamedBassem in 7a4c07b2
* feat: various improvements to the CLI: pretty print results, list creation, highlights, etc - @MohamedBassem in d334df92
* feat: add an agent SKILL for using karakeep - @MohamedBassem in 1f8cac3a
* fix: move meilisearch to 'all' matching strategy. fixes #2668 - @MohamedBassem in 68e73500
* fix: upgrade playwright to 1.59 to fix browserless issues. fixes #2648 - @MohamedBassem in 8f4dbcc9
* feat(import): thread archived status through Pocket import pipeline (#2656) - @howwohmm in ddf73a07
* fix: use consistent proxy URL per crawler run (#2681) - @MohamedBassem in db986228
* fix(landing): some astro optimizations and cleanups - @MohamedBassem in a39b7bae
* feat(landing): migrate to astro - @MohamedBassem in 7e0d7abe
* fix(i18n): normalize tone across all translations to match English (#2680) - @MohamedBassem in ce24d99e
* docs: add karatui to community projects (after karaclean) - @github-actions[bot] in 1c177160
* docs: add karaclean to community projects (#2615) - @lmgarret in a55292ba
* fix: fix passing openai proxy to openai client (#2676) - @MohamedBassem in 4c6a95ca
* fix: switch feed fetch endpoint to POST and add E2E coverage (#2677) - @MohamedBassem in de65a47c
* fix: fix sdk error return type in callsites - @MohamedBassem in 07ecdcd7
* release: add a way to publish canary CLI versions - @MohamedBassem in c6a5c626
* feat(api): expose feed subscriptions via REST API (#2635) - @larsborn in 25ff6a79
* feat(workers): make monolith timeout and arguments configurable (#2659) - @NikhilChowdhury27 in f54a9b8f
* fix: dedup bookmarks during meilisearch batching - @MohamedBassem in bc14214b
* fix: use logger for the meilisearch batch logging - @MohamedBassem in c5a4e545
* chore: add extra batch size logging to the meilisearch plugin - @MohamedBassem in 885355bb
* fix(landing): fix responsivness of the self-hostings docs button - @MohamedBassem in 3a217a67
* feat: add a new counter for new bookmarks by source - @MohamedBassem in f42cb356
* feat: add support for yearly pricing - @MohamedBassem in 3d4194d6
* fix: speculative quota check pre-archival - @MohamedBassem in 53a4598e
* fix(tests): fix rule engine tests - @MohamedBassem in dc59fe2d
* fix: lower priority of rule engine enqueues - @MohamedBassem in 88d7f401
* fix: skip tagging and summarization for assets that fail preprocessing - @MohamedBassem in db275f25
* fix(restate): better error message on abort, preserve error stacktraces and fix stack undeterminsim - @MohamedBassem in 1745f6f9
* chore: drop plugin deps from trpc package - @MohamedBassem in d534ec9a
* fix: dont fail indexing job if bookmark is not found - @MohamedBassem in 9cc0246b
* feat: add more admin APIs to semaphore implementation - @MohamedBassem in 17f4963b
* fix: don't trigger rule engine jobs unless there's a matching rule (#2614) - @MohamedBassem in 7f118261
* deps: upgrade metascraper - @MohamedBassem in 5b60f45d
* deps: upgrade hono - @MohamedBassem in 6e842d89
* deps: upgrade vite-tsconfig-paths - @MohamedBassem in 1f8d77e5
* deps: upgrade aws client - @MohamedBassem in 7f7e0546
* fix: only trigger webhook job if user have webhooks configured - @MohamedBassem in 49d57dfd
* refactor: split models into repos and services for feed, highlights, webhooks and importSessions (#2613) - @MohamedBassem in ddd578cc
* fix: ratelimit bookmark creation API - @MohamedBassem in 6e5c2ef0
* Remove queue size checks from import worker capacity calculation (#2597) - @MohamedBassem in fba7108b
* fix: add missing queues to queue monitoring - @MohamedBassem in 946e263a
* Reapply "fix(restate): use queue size from semaphore instead of admin API" - @MohamedBassem in bf1963d5
* Revert "fix(restate): use queue size from semaphore instead of admin API" - @MohamedBassem in 73720f27
* feat(landing): minor revamp to the landing page - @MohamedBassem in b690b4c8
* tests: add feed worker e2e tests - @MohamedBassem in a8b1e8ea
* fix(workers): handle TWZ RSS category objects (#2589) - @venku122 in 645f2f0b
* fix(restate): use queue size from semaphore instead of admin API - @MohamedBassem in c455f0a6
* fix(import): parse linkwarden collections. fixes #2586 - @MohamedBassem in 722fd8c0
* fix: redact internal server errors in prod responses - @MohamedBassem in c8a75a0b
* feat(landing): improve SEO of the landing page - @MohamedBassem in 553bb9ee
* chore: add jean to gitignore - @MohamedBassem in 8bb529c1
* feat(landing): add Raycast/Obsidian integrations to the apps page (#2585) - @MohamedBassem in 9f57c212
* fix(mobile): drop the usage of react-native-awesome-slider - @MohamedBassem in dfa56a7d
* deps: upgrade default meilisearch to 1.37.0 (#2575) - @MohamedBassem in 467c732e
* fix: map TOO_MANY_REQUESTS to 429 in the api - @MohamedBassem in 5053050d
* fix(api): ensure sourceUrl is saved when creating asset bookmarks (#2574) - @hoilc in eb976279
* release(mobile): release mobile v1.9.2 - @MohamedBassem in 3c9349d3
* feat(mobile): report mobile crashes to sentry - @MohamedBassem in 5a371f4b
* fix(mobile): replace deprecated ImagePicker.MediaTypeOptions with media type literal (#2528) - @esimkowitz in 1df8acb3
* feat(mobile): add external browser default bookmark view (#2516) (#2548) - @xingzihai in ba6a6f97
* fix(web): expand $tags/$aiTags/$userTags in AI prompt preview (#2557) - @zerone0x in 23cd9dae
* fix(crawler): normalize lazy-load img attributes to src before Readability (#2556) - @zerone0x in 3d18d89c
* fix(mobile): prevent app hanging behind reverse proxies and fix Hermes compat (#2559) - @mrInvincible29 in 3c70a57a
* fix(mobile): fix layout issues when Android bold text accessibility option is enabled (#2554) - @Go2Engle in ffba00d9
* feat: support bookmark source condition in rule engine (#2526) (#2547) - @xingzihai in b5d628cc
* chore(mobile): add APP_VARIANT to make it easier to install multiple mobile variants (#2422) - @xuatz in bc0d3d27
* feat(api): add admin REST endpoints to trigger background jobs (#2564) - @MohamedBassem in 4974ce58
* docs: revise Gemini API documentation for billing and models (#2514) - @faximan in a507f274
* fix: increase max feed url length to 2k chars. fixes #2572 - @MohamedBassem in 07454a6a
* feat(cli): add more admin utilities to the karakeep cli - @MohamedBassem in c363c4f6
* fix(restate): use default retry policy for onError and onComplete handlers - @MohamedBassem in 3868ad69
* fix(web): show "+" in tag count badges when more pages exist (#2558) - @zerone0x in 432235be
* fix(workers): prevent crash caused by puppeteer-extra - @MohamedBassem in d197f595
* fix(workers): retry worker job completion success/failure reporting - @MohamedBassem in e578322e
* fix(workers): avoid doing empty insertions in the tagging worker - @MohamedBassem in 186b76eb
* feat(web): allow collapsing the sidebar in bookmark previews - @MohamedBassem in 49d79590
* feat(web): visual revamp for the bookmark preview page - @MohamedBassem in f500129c
* chore: migrate to oxfmt - @MohamedBassem in 85e63aec
* fix: drop the slowMo setting from the crawler - @MohamedBassem in 49c620ce
* feat(web): add haptic feedback on mobile sidebar navigation - @MohamedBassem in f91ec531
* feat: switch rapid bookmark creations to use low pri queues - @MohamedBassem in b009585d
* chore: add a throttled log line when we're failing open in redis ratelimiter - @MohamedBassem in 97cddefb
* feat(web): add fav and archive actions on hover. fixes #2360 - @MohamedBassem in 98e173d8
* fix: handle redis network reconnections correcty - @MohamedBassem in ca70f888
* fix(mobile): status bar text invisible in dark mode - @esimkowitz in 43e9ea03
* chore: move away from ioredis to node-redis client - @MohamedBassem in 774b2559
* fix: redact search params from browser url. fixes #2419 - @MohamedBassem in f4a39230
* feat: redis based ratelimiting plugin (#2535) - @MohamedBassem in b68ac513
* fix(cli): respect attachedBy when migrating tags. fixes #2273 - @MohamedBassem in 462d713f
* feat(mobile): search on type instead of search on enter - @claude in 48a6c86b
* fix: prevent highlight popup from stealing focus on Firefox. fixes #2510 #997 - @claude in 11dfe74d
* docs: more docs fixing - @MohamedBassem in 57f586fc
* docs: better api docs (#2530) - @MohamedBassem in dd2c6cc0
* feat(mobile): add empty stats for bookmarks, tags and highlights - @MohamedBassem in 1f7ea122
* release(mobile): bump build version for mobile app - @MohamedBassem in ec2d0373
* fix: skip session redirect from the mobile signup inline browser - @MohamedBassem in 0416ef46
* feat(mobile): add account deletion support in settings - @claude in 33c8c770
* docs: update pikapods link to karakeep - @MohamedBassem in a7ea50e9
* release(mobile): Bump mobile version to 1.9.1 - @MohamedBassem in 119efef6
* fix(mobile): add manual padding to avoid the native tabs on android. fixes #2518 - @MohamedBassem in dac78a07
* fix(mobile): fix header color on android causing. #2518 - @MohamedBassem in 17918626
* fix(mobile): delete hack for hiding parent's header - @MohamedBassem in 3f45d9e1
* fix(mobile): fix padding on the header buttons in bookmark info page - @MohamedBassem in 68524d66
* fix(mobile): fix alignment of the header menu in the list page - @MohamedBassem in 95244156
* fix(mobile): fix query client confusion causing missed invalidation - @MohamedBassem in 0c25cf23
* chore: add claude worktrees to gitignore - @MohamedBassem in 2f02d157
* fix(mobile): fix alignment of the header menu in the list page - @MohamedBassem in b1b32f7b
* feat(mobile): add SF Symbol icons to native menus - @claude in b58fc6c9
* release: bump build version for ios app - @MohamedBassem in 5b6402f3
* ci: upgrade ios workflow to use macos 26 - @MohamedBassem in 5c9a0cef
* ci: bypass EAS fingerprinting - @MohamedBassem in 06fe75e6
* fix(extension): fix missing trpc provider - @MohamedBassem in f3c9c837
* release(sdk,cli,extension,mcp): release 0.31 sdk, mcp and cli and extension 1.2.9 - @MohamedBassem in d212415b
* release(mobile): Bump mobile version to 1.9.0 - @MohamedBassem in 099e3eb0
* release(docs): release the 0.31 docs - @MohamedBassem in 473c8a93
