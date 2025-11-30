# 0.29.0

Welcome to the 0.29.0 release of Karakeep! This release ships some of our most awaited features. Collaborative lists, automated bookmark backups, search auto complete, highlighs are getting notes and search, and the mobile app is getting some more love. As usual thanks to @aa-ko, @fivestones, and everyone who shipped code, triaged bugs, or shared feedback for this release.

> If you enjoy using Karakeep, consider supporting the project [here ☕️](https://buymeacoffee.com/mbassem) or via GitHub [here](https://github.com/sponsors/MohamedBassem).

<a href="https://www.buymeacoffee.com/mbassem" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" width="auto" height="50" ></a>

And in case you missed it, we now have a ☁️ managed offering ☁️ for those who don't want to self-host. We're still in private beta (you can signup for access [here](https://tally.so/r/wo8zzx)) and gradually letting more and more users in.


# New Features 🚀

- Collaborative lists are here! (#2146, #2152)
  - You can now invite collaborators to your lists and manage their access levels between viewers and editors.
  - This was the most requested feature on the roadmap, and it's now here!
- Automated bookmark backups you can schedule once and forget (#2182)
  - Currently it only captures non-asset bookmarks, but I'm planning to include lists, tags, and other metadata in the future.
- Search gets autocomplete so you can find the right filters and terms faster (#2178)
- Highlights overhaul: notes + search bar on web, plus a dedicated highlights page on mobile (#2154, #2155, #2156, #2157)
- Mobile catches up with smart list creation and an all-tags screen (#2153, #2163)
- Crawler domain rate limiting to avoid getting throttled by external sites (#2115)
  - Configure it with `CRAWLER_DOMAIN_RATE_LIMIT_WINDOW_MS` and `CRAWLER_DOMAIN_RATE_LIMIT_MAX_REQUESTS`.
- Import from MyMind (#2138)

# UX Improvements ✨

- Sidebar typography and colors should feel nicer (specially in dark mode).
- Page titles are now correctly displayed in the browser tabs.
- We have a friendlier 404 page for bookmarks/lists that don't exist.
- You can now see stats about the source of your bookmarks in the usage stats page (extension, web app, mobile app, etc).

# Fixes 🔧

- Prompts lazily load `js-tiktoken` which should cut between 70-150MB of karakeep's memory usage (#2176)
- The edit dialog wasn't correctly showing the extracted text from assets, this is now fixed (#2181).
- IP validation allowlisting now allows bypassing all domains by setting `CRAWLER_ALLOWED_INTERNAL_HOSTNAMES` to `.`.
- Fix a worker crash when hitting invalid URLs with proxy enabled.

# For Developers 🛠️
- GET `/api/version` endpoint for getting server version (#2167)
- More visibility: HTTP status Prometheus counters, failed_permanent worker metric, and system metrics on web/worker containers (#2117, #2107)
- Documentation updates for `LOG_LEVEL` and Raycast links (#2166, #1923) by @aa-ko and @fivestones


# Screenshots 📸

## Collaborative Lists

<img width="1342" height="840" alt="Screenshot 2025-11-29 at 6  23 18@2x" src="https://github.com/user-attachments/assets/f19f9951-c460-413c-9757-6014a7ec4f7e" />


## Automated Backups

<img width="1874" height="1540" alt="Screenshot 2025-11-29 at 6  23 57@2x" src="https://github.com/user-attachments/assets/65dc7e0e-3ab3-4243-b451-5ef3a3e7130b" />


## Search Autocomplete

<img width="1492" height="636" alt="Screenshot 2025-11-29 at 6  24 54@2x" src="https://github.com/user-attachments/assets/ed2f7a61-835f-4ee6-8940-657110932526" />

# Upgrading 📦

To upgrade:
* If you're using `KARAKEEP_VERSION=release`, run `docker compose pull && docker compose up -d`.
* If you're pinning it to a specific version, bump the version and then run `docker compose pull && docker compose up -d`.


# All Commits

* i18n: fix en_US translation - @MohamedBassem in f01d96fd
* i18n: Sync weblate translations - @Hosted Weblate in e1ad2cfd
* feat: autocomplete search terms (#2178) - @MohamedBassem in ebafbe59
* build: switch npm to trusted publishing - @MohamedBassem in 335a84bb
* feat: Add automated bookmark backup feature (#2182) - @MohamedBassem in 86a4b396
* fix: making serverConfig readonly - @MohamedBassem in e67c33e4
* fix: fix react errors in signin and signup forms - @MohamedBassem in 6ab79845
* fix: separate shared lists in the sidebar (#2180) - @MohamedBassem in 2619f4cf
* fix: correctly render asset extracted text in the edit bookmark dialog. fixes #2181 - @MohamedBassem in 9ed338fe
* fix: lazy load js-tiktoken in prompts module (#2176) - @MohamedBassem in e2877b45
* fix: fix colors in invitation form - @MohamedBassem in a13a227e
* fix: hide archived checkbox in shared lists - @MohamedBassem in adde8099
* feat: improve font and colors of sidebar items - @MohamedBassem in 5bea5d39
* fix: Propagate group ids in queue calls (#2177) - @MohamedBassem in 6821257d
* feat: Introduce groupId in restate queue (#2168) - @MohamedBassem in 54268759
* fix: support invocation cancellation while awaiting sempahore - @MohamedBassem in 38842f77
* docs: Add LOG_LEVEL to configuration documentation (#2166) - @aa-ko in 6912d0dd
* docs: fix link to raycast extension (#1923) - @fivestones in 9fedfc15
* tests: Add a test for listing lists - @MohamedBassem in e16ae2a4
* feat: add GET /api/version endpoint (#2167) - @MohamedBassem in 472adec7
* fix(mcp): propagate parent id to createList call. fixes: #2144 - @MohamedBassem in 0d14130c
* feat(mobile): proper handling for shared list permissions (#2165) - @MohamedBassem in c5c71ba9
* feat(mobile): Add highlights page to mobile app (#2156) - @MohamedBassem in 8a5a109c
* feat: A better looking 404 page - @MohamedBassem in 7f555f57
* fix: hide manage collaborators option for smart lists - @MohamedBassem in 2b38c006
* fix: Hide shared lists where user is a viewer in Manage Lists dialog (#2164) - @MohamedBassem in e4db9bf2
* feat(mobile): Add AI summary field to mobile bookmark info (#2157) - @MohamedBassem in 45081dcb
* feat(mobile): Add tags screen to mobile app (#2163) - @MohamedBassem in ad66f78d
* feat: Add notes feature to highlights (#2154) - @MohamedBassem in de5ebbc4
* feat(mobile): Add smart list creation in mobile app (#2153) - @MohamedBassem in 48ab8a19
* feat: Add search bar to highlights page (#2155) - @MohamedBassem in ed6a3bfa
* fix: hide collaborator emails from non-owners (#2160) - @MohamedBassem in 8ab5df67
* feat: Add invitation approval for shared lists (#2152) - @MohamedBassem in 5f0934ac
* deps: upgrade oxlint - @MohamedBassem in daee8e7a
* fix: add a way to allowlist all domains from ip validation - @MohamedBassem in 67b8a3c1
* fix: use kbd for editor card - @MohamedBassem in 3345377d
* fix: drop journal retention for sempahore and id providers - @MohamedBassem in 1b44eafe
* refactor: remove the PrivacyAware interface - @MohamedBassem in 815e1961
* feat: Add collaborative lists (#2146) - @MohamedBassem in 88c73e21
* deps: upgrade hono and playwright - @MohamedBassem in cc8fee0d
* deps: Upgrade typescript to 5.9 - @MohamedBassem in 391af8a5
* build: Improve docker caching (#2140) - @MohamedBassem in 6cccb9f1
* fix: fix hydration error in admin user list - @MohamedBassem in 12d09a74
* feat: import from mymind (#2138) - @MohamedBassem in 0c80f515
* feat: add Prometheus counter for HTTP status codes (#2117) - @MohamedBassem in 43506669
* fix(mobile): upgrade react-native-pdf to v7 to fix page alignment - @MohamedBassem in 4c6ef25d
* fix(mobile): fix app memory page size compatibility (#2135) - @MohamedBassem in fbd12ea3
* release(mobile): Bump mobile version to 1.8.2 - @MohamedBassem in 76c291a6
* fix: remove incorrect array destructuring in mobile search (#2124) - @MohamedBassem in 07390aef
* feat: correct default prom metrics from web and worker containers - @MohamedBassem in c34f70da
* fix: stop retrying indefinitely in restate queues - @MohamedBassem in d4b7b89a
* fix: fix crash in crawler on invalid URL in matchesNoProxy - @MohamedBassem in d0f71a4c
* feat: add crawler domain rate limiting (#2115) - @MohamedBassem in 4cf0856e
* refactor: Allow runner functions to return results to onComplete - @MohamedBassem in b28cd03a
* refactor: Extract ratelimiter into separate plugin (#2112) - @MohamedBassem in 03161482
* feat(extension): Add custom header support for extension (#2111) - @MohamedBassem in ec87813a
* feat: Add bookmark sources statistics section (#2110) - @MohamedBassem in 725b5218
* feat: Add page titles (#2109) - @MohamedBassem in 3083be0c
* feat: add failed_permanent metric for worker monitoring (#2107) - @MohamedBassem in 1b8129a2
* release(docs): release the 0.28 docs - @MohamedBassem in d9ef832e
* release(extension): Release version 1.7.1 - @MohamedBassem in 7339d1df
* release(mobile): Bump mobile version to 1.8.1 - @MohamedBassem in f06b8eab
