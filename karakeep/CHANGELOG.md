# 0.27.0

Welcome to the 0.27.0 release of Karakeep! This release brings website-aware previews, cookies support, redesigned background jobs page, and a lot of fixes and cleanups that accumulated over the past 1.5 months. Huge thanks to our contributors in this release:
@ahmed-abdelkarim, @qixing-jk, @youenchene, @Drashi, @thiswillbeyourgithub, @xuatz, @haappi, @CrazyWolf13, @landonepps, @dvdpearson, @vivienbcr, @yinan-c, @packetmonkey, @liCells and
everyone who reported issues and tested changes!

> If you enjoy using Karakeep, consider supporting the project [here ☕️](https://buymeacoffee.com/mbassem) or via GitHub [here](https://github.com/sponsors/MohamedBassem).

<a href="https://www.buymeacoffee.com/mbassem" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" width="auto" height="50" ></a>

And in case you missed it from the last release, we now have a ☁️ managed offering ☁️ for those who don't want to self-host. We're still in private beta (you can signup for access [here](https://tally.so/r/wo8zzx)) and gradually letting more and more users in. 


# New Features 🚀
- [Experimental] Karakeep now detects specific websites and renders a customized cards for them. We're starting with 4 special renders (and are accepting contributions for more):
  - X (twitter): Now shows a tweet embed by default.
  - Amazon: A card that shows the product.
  - Youtube: Renders a youtube embed (i.e. a player) by default.
  - Tiktok: Renders a tiktok embed (i.e. a player) by default.
  - If you want to see more websites supported, don't hesitate to send PRs. This is meant to evolve into karakeep understanding the different bookmark types (e.g. products, articles, etc) and showing more specialized cards for each type.
- Background Jobs page got a complete redesign to better explain the different jobs (#1551)
- Cookie support for crawling login-protected sites (#1664 by @liCells)
  - You can now pass a list of cookies for karakeep to use while crawling to access session-protected websites. Checkout the documentation of `BROWSER_COOKIE_PATH` [here](https://docs.karakeep.app/configuration).
  - **Note:** This is an advanced feature. Cookies are extremely sensitive. Make sure you're handling them carefully. Also note that the cookies that you set are going to be shared with all the users in your instance. [SingleFile](https://docs.karakeep.app/Guides/singlefile) remains the recommended way for accessing login-protected websites.
- GIF asset support (#1876 by @Drashi)
- Updated default chrome container to v124, make sure to update yours as well.


# UX Improvements ✨

- Browser Extension:
    - Theme selection and theme-adapting icon support (#1894 by @qixing-jk)
    - Constrain height of list and tag selectors to prevent viewport overflow (#1895 by @qixing-jk)
    - Both will come in the next extension release (aka soon).
- Mobile:
  - Various mobile theme fixes (#1872)
  - Edit menu item on bookmark card
  - Add context aware sharing button in mobile app (#1785 by @xuatz)
  - Delete button and creation dates on info page
- Render author, publisher, and publish date in bookmark view
- Configurable number of grid columns in the bookmark grid (#1713)
- Show loading indicator while the karakeep export is being generated (#1787/#1870 by @ahmed-abdelkarim)
- Hide AI settings tab if inference isn’t configured (#1781)
- Render human tags before AI tags (#1740 by @haappi)
- Preserve selected bookmark preview section in link preview via query params
- Hide bookmark actions from the navbar when no bookmark grid is shown
- Dark mode titles fixed for public lists
- Render AI summary in Markdown (#1869 by @youenchene)
- Bookmark skeleton while search results are loading

# Fixes 🔧

- **[Security]** CSP policies on asset-serving paths
	- Fixes potential self-XSS on user uploaded assets.
	- Check the security advisory [here](https://github.com/karakeep-app/karakeep/security/advisories/GHSA-7cj2-fr83-g2wj).
	- Special thanks to @Skelmis for the disclosure!
- Speed improvements:
	- Avoid prefetching assets and tags which should make the tags page loading smoother
	- Fixed a big (accidental) performance bottleneck in the API endpoints caused by API key validation. Re-login in your mobile app (and regenerate your API keys if you use any) for a significantly noticeable speed improvement. 
- Queue DB respects configured WAL mode
	- This fixes issues of slow imports and frequent locked databases
	- Enabling WAL is highly advisable
- fix search query getting rest when bookmark preview is closed
- Handle lists with slashes during imports and truncate long list names for more resilient imports
- Don’t mark inference job as failed when content is missing (#1666)
- fix WebView deceleration rate on iOS (#1835 by @landonepps)
- Fix PDF detection when Content-Type includes charset (#1677)
- Rule engine: deleting an action now doesn't auto-save (#1858)
- Fix feed worker to use proxy when it's configured
- Web UI will poll for longer (incrementally) as bookmarks are being fetched.
- Fixed an issue with using SingleFile with S3 caused by unaccepted chars in filenames (#1765)
- fix admin API route to be under /v1
- fixed assets incorrectly marked as pending summarization
- Add max output tokens env variable to control the max allowed number of tokens returned by the LLM (to control the costs).

# For Developers 🛠️

- Prometheus:
    - Workers now also export prometheus metrics. You need to enable the metrics endpoint and the port to crawl them.
    - Trpc latency was switched to histograms
    - `karakeep_` prefix was added to all exported metrics (by @CrazyWolf13), you'll need to update your dashboards.
- Enable/disable specific workers via env variables
- You can now upload video attachments to bookmarks from the API (#1847 by @packetmonkey)

# Upgrading 📦

To upgrade:
* If you're using KARAKEEP_VERSION=release, run `docker compose pull && docker compose up -d`.
* If you're pinning it to a specific version, upgrade the version and then run `docker compose pull && docker compose up -d`.

Also upgrade your `chrome` container to `124` if you have it pinned.

# All Commits

* i18n: Sync weblate translations - Weblate in d06c85df
* fix: fix tag flicker caused by tag sorting - @MohamedBassem in d623abd2
* chore: Update the agent files - @MohamedBassem in 8e95dae3
* feat: Show loading indicator while file is being generated #1787 (#1870) - @Ahmed-Abdel-karim in 9aa609e8
* feat: Add cookie support for browser page access - @liCells in c57fd513
* feat(workers): add worker enable/disable lists (#1885) - @MohamedBassem in 492b1520
* fix(extension): constrain height to prevent viewport overflow (#1580) (#1895) - @qixing-jk in 4cc86240
* feat(extension): Add theme and dynamic icon support (#1894) - @qixing-jk in 44bc838f
* deps: Upgrade the extension deps - @MohamedBassem in 4362663d
* fix: fix assets being marked as pending summarization - @MohamedBassem in 14db7aef
* readme: Add floccus support to readme and docs - @MohamedBassem in 67c394ef
* docs: readme mentions importers + enhancements (#1448) - @thiswillbeyourgithub in 1976c537
* feat(web): render AI summary in markdown (#1869) - @youenchene in 9dd93f84
* feat: add gif asset type support (#1876) - @Drashi in 09948144
* fix: don't mark inferenace job as failed when there's no content. fixes #1666 - @MohamedBassem in 5f870549
* fix: fix pdf detection when the header contains charset. fix: #1677 - @MohamedBassem in 517e0c10
* fix(web): Fix deleting the action in the rule engine auto saves. fixes #1858 - @MohamedBassem in 03f10c75
* fix: Fix feed worker to fetch feeds with proxy - @MohamedBassem in 03f7cc14
* fix: Change the inferance working logging when disabled to be a debug log level - @MohamedBassem in 767c083c
* fix: Dont attempt to fetch rss if the user if out of quota - @MohamedBassem in a0dd73f5
* refactor: Extract quota logic into its own class - @MohamedBassem in 3760d23a
* fix: Reduce polling interval on meilisearch tasks - @MohamedBassem in fcfe6a53
* fix: Don't enqueue video tasks when video downlaod is disabled - @MohamedBassem in 80a10231
* fix(landing): fixed typo in FAQ (#1893) - @midhun3301 in 473845a7
* fix: Incremental polling interval for ongoing crawls - @MohamedBassem in 18c1d15e
* refactor: Move highlights object into models - @MohamedBassem in ac4e4fab
* refactor: Move feed object into models - @MohamedBassem in 15efda6d
* release(mobile): Bump mobile version to 1.8.0 - @MohamedBassem in ce9a006a
* fix(mobile): Use uncontrolled inputs for signin page - @MohamedBassem in c7064692
* feat(mobile): Add a default server address during signin - @MohamedBassem in 1a4e88a6
* deps: Drop ronionoss icons - @MohamedBassem in e7c9f392
* fix(mobile): Fix text bookmark editor - @MohamedBassem in be7311a7
* fix(mobile): Disable the save button when bookmark is being saved - @MohamedBassem in 1e0cce7e
* fix(docs): typo: Optaining -> Obtaining in 09-command-line.md (#1850) - @yinan-c in 50d426f7
* doc: clarify that groups can't be negated (#1881) - @thiswillbeyourgithub in d455c704
* fix: show login button in the landing page on mobile - @MohamedBassem in 2f6fe4f7
* fix: fix long worker log lines when downloading base64 images - @MohamedBassem in f17ca243
* fix: Respect wal mode for the queue db - @MohamedBassem in be2646ec
* fix: handle list with slashes in their names and truncate long list names. fixes #1597 - @MohamedBassem in aecbe6ae
* fix: fix move the admin route to the /v1 prefix - @MohamedBassem in f1961822
* feat: Add a bookmark skeleton for search - @MohamedBassem in f1509fc5
* feat(mobile): Retheme the mobile app (#1872) - @MohamedBassem in ed86f7ef
* fix(mobile): Fix crash in android webview - @MohamedBassem in ec56ea33
* feat(mobile): Add edit menu item to bookmark card - @MohamedBassem in eb54bf44
* fix(mobile): Change the icon of the share button - @MohamedBassem in 5d502f51
* feat: Add delete button and creation dates to mobile info page - @MohamedBassem in b927574b
* u18n: Update french translation.json (#1866) - @vivienbcr in 9e3ea20c
* fix: fix nextjs warning about dialog without title in bookmark preview - @MohamedBassem in 8f8ce164
* fix(web): fix query getting rest when bookmark preview is closed. fixes #1521 - @MohamedBassem in cf06bbb2
* fix(web): Fix hydration errors in add api key page - @MohamedBassem in 9df0f441
* fix: preserve selected section in link preview in query params - @MohamedBassem in 6dde9f20
* fix: Hide bookmark global actions when there's no bookmark grid shown - @MohamedBassem in 8c205249
* fix(security): Add CSP policies on asset serving path - @MohamedBassem in a4b2fc7c
* fix: Dont attempt to remove uploaded tmp file if it's already removed - @MohamedBassem in 096af7ef
* fix: Sanitize uploaded file names. #1765 - @MohamedBassem in 39a650f6
* deps: Upgrade oxlint to 1.12 - @MohamedBassem in 3ed8af56
* fix: dangling assets created by changing crawling config - @MohamedBassem in 940550b9
* fix(workers): Drop the withTimeout wrappers - @MohamedBassem in 3ab31c29
* feat: Export prometheus metrics from the workers - @MohamedBassem in 52d018c8
* fix: Remove dev indicator config from nextjs config - @MohamedBassem in 9d6b0ef2
* feat: generate a random prometheus token on startup - @MohamedBassem in a64307e8
* feat: Support video uploads and attachments (#1847) - @packetmonkey in f1662b82
* fix(web): Fix dark mode titles for public lists - @MohamedBassem in 7bdc8b2c
* feat: Add confirmations to background job actions - @MohamedBassem in f620dc67
* feat: A redesigned background jobs page. #1551 - @MohamedBassem in e2c303ac
* Revert "deps: Upgrade nextjs to 15.5" - @MohamedBassem in ff33b310
* deps: Upgrade nextjs to 15.5 - @MohamedBassem in be420c9a
* fix(web): Suppress hydration warning on root html - @MohamedBassem in f7b145c6
* deps: Upgrade expo & nextjs to react 19 (#1565) - @MohamedBassem in dd53ccb9
* fix(mobile): fix WebView deceleration rate on iOS (#1835) - @landonepps in 5f07b507
* fix: renamed export filename to karakeep (#1829) - @dvdpearson in 5b912508
* feat: Render human tags before AI tags (#1740) - @haappi in 2263c0fc
* fix(mobile): remove type: module so expo works (#1846) - @xuatz in df6814f2
* docs: Fix the name of the development section - @MohamedBassem in 6e525eb1
* docs: rename docs into actual name in a separate commit - @xuatz in 6f141152
* docs: rename docs into tmp name in a separate commit - @xuatz in b3feee7e
* fix(mobile): change to metro.config.cjs since migrating to type: module (#1845) - @xuatz in 17b59084
* fix: add CORS configuration for chrome-extension origin (#1823) - @qixing-jk in 9059ca22
* fix: Add support email to pricing page - @MohamedBassem in 83671734
* feat: Add an error boundary around the custom renderer - @MohamedBassem in 01ae8b55
* feat(web): Add special cards for specific websites. Fixes #1344 - @MohamedBassem in c68e5099
* docker: Update chrome to 124 - @MohamedBassem in 03aa1720
* fix: Merge the quota columns in the user lists - @MohamedBassem in 9912a0a3
* feat(landing): The pricing page - @MohamedBassem in 141f411b
* fix: Trim trailing slashes from nextauth urls. Fixes #1799 - @MohamedBassem in eb720c48
* release(mcp): Bump mcp server to 0.26 - @MohamedBassem in 801930ac
* fix: Get rid of the userSetting table completely - @MohamedBassem in 88c4035b
* refactor: Move webhook, users and tags into models - @MohamedBassem in 99653566
* feat: Drop support for time bounded invitations - @MohamedBassem in 2493ccf0
* refactor: Refactor crawlerWorker to use tryCatch - @MohamedBassem in 160fd971
* fix: Use prometheus histogram instead of summary - @MohamedBassem in afcc27d5
* fix: fix hidden env variable parse error. fixes #1790 - @MohamedBassem in cc36131e
* fix(tests): Load plugins on API package entrypoint - @MohamedBassem in 6f699494
* fix: Fix the path to worker binary post-build - @MohamedBassem in bd5d9b99
* feat: Support NO_COLOR for logging. Fixes #1778 - @MohamedBassem in 8fe4975c
* fix(docs): Fix git case sensitivity Take 3 - @MohamedBassem in 802f93bc
* fix(docs): Fix git case sensitivity Take 2 - @MohamedBassem in a8b2c066
* fix(docs): Fix git case sensitivity - @MohamedBassem in f2975af5
* deps: Upgrade docusourus - @MohamedBassem in 16ec2f6c
* fix(docs): Fix the docs one more time - @MohamedBassem in 5c9de514
* refactor: Extract meilisearch as a plugin - @MohamedBassem in b94896a0
* chore: Add opencode agent - @MohamedBassem in 7bb7f18f
* docs: Drop docs older than 0.21 - @MohamedBassem in a34331b5
* chore: More turbo fixes - @MohamedBassem in 77ae89b2
* fix: Ensure that all packages are ESM packages - @MohamedBassem in 8f1cb065
* fix: Fix package boundary violations - @MohamedBassem in 57d1e50d
* fix: Add karakeep_ prefix to hono's metrics - @MohamedBassem in 77e36114
* deps: Upgrade vite - @MohamedBassem in a441a677
* refactor: Extract the importing logic into its own hook - @MohamedBassem in 118ffc64
* feat(mobile): add context aware sharing option in mobile app (#1785) - @xuatz in 8db89bb0
* feat: Configurable number of grid columns. Fixes #1713 - @MohamedBassem in 154efe17
* feat: Render author, publisher and pub data in the bookmark view - @MohamedBassem in 8b4fb49c
* fix: Avoid prefetching assets and tags in the link component. Fixes #1759 - @MohamedBassem in 94f39587
* feat: Hide AI settings tab if inference is not configured. #1781 - @MohamedBassem in 1b14043a
* fix: Stop forcing next-auth to read email from id_token. Fixes #410 - @MohamedBassem in 2cb0ab01
* fix: Drop legacy container notice - @MohamedBassem in 5019c8d9
* deps: Upgrade form-data - @MohamedBassem in 2717d8a7
* deps: Upgrade trpc - @MohamedBassem in fd0bac28
* fix: prometheus add karakeep prefix to metrics (#1780) - @CrazyWolf13 in f6f6f79e
* deps: Upgrade turbo, sherif and oxlint - @MohamedBassem in ea6bab0f
* fix: Remove bcrypt from the api key validation route - @MohamedBassem in bb11907e
* feat: Add a max output tokens env variable - @MohamedBassem in 52ac0869
* fix(test): Fix subscription.test - @MohamedBassem in 2f3da0b8
* fix(stripe): Allow promotion codes - @MohamedBassem in 298b3479
* release(sdk): Release the 0.26 sdk - @MohamedBassem in c7f0af0c
* docs: Release the 0.26.0 docs - @MohamedBassem in 0cd9eea0
* docs: Update api docs in prep for the 0.26.0 release - @MohamedBassem in 705e46dc
* docs: Restructure the config docs a bit - @MohamedBassem in fe501cf8
* i18n: Add new translations - @MohamedBassem in a93601e0
