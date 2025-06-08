# 0.25.0

Welcome to the 0.25.0 release of Karakeep! This release addresses a lot of the top most upvoted feature requests. You can now share lists publicly, generate RSS feeds from your lists, reader view & pdf support in the mobile app, bi-directional browser bookmark sync using floccus, maintaining list structure on imports and a lot more. As usual, we have a lot of contributors in this release: @xuatz, @digithree, @thiswillbeyourgithub, @codelove77, @SConaway, @vhsdream, @AdrianAcala, @spasche, @SalGnt, @haappi, @yuikisaito, @jk, @jakeasmith, @Mxrk,  @WilliamAGH, and @SteffoSpieler!

> If you enjoy using Karakeep, consider supporting the project [here ☕️](https://buymeacoffee.com/mbassem) or via GitHub [here](https://github.com/sponsors/MohamedBassem).

<a href=\"https://www.buymeacoffee.com/mbassem\" target=\"_blank\"><img src=\"https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png\" alt=\"Buy Me A Coffee\" width=\"auto\" height=\"50\" ></a>

# New Features 🚀
- **Public Lists are here:** You can now share your curated lists publicly! (#1511). Example list [here](https://try.karakeep.app/public/lists/f9ot2k3ogai51gvm3v6k0aoq).
- **RSS Feed Generation:** Create and share RSS feeds directly for your lists (#1507)
- **Overdue Mobile Improvements**:
\t- Added reader mode/screenshot/archive views to bookmark previews on mobile (pending app release) (#1509) - @digithree
\t- View PDFs directly in the mobile app and share them to karakeep from the share sheet as well (#1519, #1494) - @codelove77
- **Import / Export improvements**:
\t- Added NETSCAPE file export format support (#1374) - @yuikisaito 
\t- When importing netscape style bookmarks into karakeep, your lists will be re-created on karakeep. Preserving lists from other sources is planned.
\t- Preserve archived status when importing from omnivore or pocket (RIP).
- **AI Auto-Summarization:** Automatic summarization for new bookmarks can be now be enabled with `INFERENCE_ENABLE_AUTO_SUMMARIZATION=true` (#1163)
- **Floccus Integration:** Karakeep [now supports](https://github.com/floccusaddon/floccus/pull/1953) bi-directional sync with browser bookmarks using [Floccus](https://floccus.org/). This will be available in the next Floccus release within a week or two.

# UX Improvements ✨
- The user setting page got fully redesigned to look nicer given that we're starting to have more user settings.
- Tab-based layout for bookmark previews on small screens - @thiswillbeyourgithub 
- Save pages faster with a dedicated extension shortcut (#1532) - @SConaway
- Configure the default behavior when clicking on a bookmark. Either go to source, or expand the details.
- Restored ability to properly sort by creation date for search pages (#1392) - @xuatz
- You can now decide what you want to do when using the `singlefile` extension on an existing bookmark. Check out how to customize it [here](https://docs.karakeep.app/next/Guides/singlefile#handling-existing-bookmarks).
- Configure whether you want to see archived bookmarks in lists or tags or not (#1505) - @xuatz
- Added Algolia-based search to docs
- Added \"deleted\" webhook event (#1464) - @SalGnt
- The `Summarize with AI` button no longer shows up if you don't have AI configured
- You can now disable auto AI tagging if not needed
- Allow enabling/disabling RSS feeds collection
- Added US English to folks who can't stand the British English - @WilliamAGH 
- Improved the positioning of the highlights menu on mobile devices - @Mxrk
- Moved delete button in bookmark menu in the app for better ergonomics

# Fixes 🐛
- Started using proper tokenizer for content truncation before inference. This should prevent the truncation of the model prompt leading to better accuracy and instruction adherence.
- Preserve unsaved changes during tag modifications while editing bookmarks (#1515) - @AdrianAcala
- Fixed tag drag-and-drop issues on Firefox (#1016) - @haappi
- Added log rotation for linux installations (#1471) - @vhsdream
- You can now run Karakeep container as a non-root user for better security.

# For Developers 🛠️
- Added `?sortOrder` parameter for resource sorting (#1398) - @xuatz  
- New endpoint for tag creation  
- PUT operations for bookmarks are now idempotent (e.g. adding to list) (#1427) - @xuatz
- Added PATCH method support to CORS headers (#1489) - @spasche
- **Documentation:**  
  - Added documentation for the asset upload APIs
  - Fixed JSON examples in MCP documentation (#1400, #1419) - @jk, @jakeasmith
  - Expanded Meilisearch upgrade guides (#1436) - @thiswillbeyourgithub

# Community Projects 💡 
- **Python-based SDK for Karakeep:** [karakeep-python-api](https://github.com/thiswillbeyourgithub/karakeep_python_api) - @thiswillbeyourgithub
- **Freshrss Importer:** [freshrss-to-karakeep](https://github.com/thiswillbeyourgithub/freshrss_to_karakeep) - @thiswillbeyourgithub 

# Screenshots 📸

## The Share List Modal
<img src=\"https://github.com/user-attachments/assets/688d2389-65c1-4e0e-87ba-233d5b0ffaae\" alt=\"Screenshot 2025-06-08 at 10 35 45@2x\" width=\"500\" height=\"auto\">

## Tabbed Layout on smaller screens
<img src=\"https://github.com/user-attachments/assets/affc1426-fe1f-46df-9567-196c25d13107\" alt=\"Screenshot 2025-06-08 at 10 37 11@2x\" width=\"500\" height=\"auto\">

## Reader Mode in the app
<img src=\"https://github.com/user-attachments/assets/14f438ea-d558-40eb-8d05-84d017d46a89\" alt=\"simulator_screenshot_1322546F-62F2-4129-89F7-7D77366179B6\" width=\"300\" height=\"auto\">

# Upgrading 📦

To upgrade:
* If you're using KARAKEEP_VERSION=release, run `docker compose pull && docker compose up -d`.
* If you're pinning it to a specific version, upgrade the version and then run `docker compose pull && docker compose up -d`.

# All Commits

* release(extension): Bump extension version to 1.2.6 - @MohamedBassem in 5b520667
* release(mobile): Bump mobile version to 1.7.0 - @MohamedBassem in 3c48bb8d
* ci: Fix manifest formatting - @MohamedBassem in b93f3a4a
* feat(mobile): Add support for viewing PDFs (#1519) - @codelove77 in 0fde1087
* fix(mobile): Move the delete button to the end in the bookmark menu - @MohamedBassem in 421e3e86
* feat(mobile): add reader/screenshot/archive view to bookmark preview (#1509) - @digithree in ec31a971
* fix(build): karakeep-linux.sh fix use 'append' instead of 'file' for log (#1471) - @vhsdream in 09e5dd65
* feat(extension): add a keyboard shortcut to save page (#1532) - @SConaway in ee517456
* feat(ui): Improve the look of the public bookmarks page - @MohamedBassem in 3a0f5fa0
* fix: Use a new public list metadata endpoint for metadata generation - @MohamedBassem in bc65a738
* docs: Add asset APIs to the openapi spec - @MohamedBassem in a98f0236
* fix(web): Smaller card titles in the user info page - @MohamedBassem in 4e481f4b
* fix: preserve unsaved title changes when modifying bookmark tags in the edit dialog (#1515) - @AdrianAcala in f53ad0a1
* feat(web): Redesign the user settings page - @MohamedBassem in 090c0d1c
* readme: Small readme fixes - @MohamedBassem in 39feafe7
* fix(web): Drop the experimental icon from rss feeds - @MohamedBassem in bf4cbd12
* feat: Drop corepack dep in prod and allow running as non-root. Fixes #606 - @MohamedBassem in 169e14d3
* i18n: Sync weblate translations - 22460836
* Merge remote-tracking branch 'weblate/main' - @MohamedBassem in 7c245aa7
* feat: Maintain list structure when importing from netscape. Fixes #538 - @MohamedBassem in 1bae66f7
* feat: Allow specifying the overwrite mode for singlefile archives. Fixes #1125 - @MohamedBassem in e59be245
* feat: Add support for public lists (#1511) - @MohamedBassem in ea1d0023
* feat: add user customisable default archive display behaviour (#1505) - @xuatz in 3afe1e21
* docs: mention the list of example scripts for the community api (#1484) - @thiswillbeyourgithub in 8784c73c
* feat(mobile): Add PDF support to share extension (#1494) - @codelove77 in 5f473401
* feat: Generate RSS feeds from lists (#1507) - @MohamedBassem in 9695bba2
* refactor: Move bookmark utils from shared-react to shared - @MohamedBassem in b218118b
* docs: Add agolia based search - @MohamedBassem in 3e860b79
* doc: mention meilisearch in the updating section (#1472) - @thiswillbeyourgithub in 7f04bd13
* feat: Allow PATCH method in CORS headers (#1489) - @spasche in 915aeb36
* fix: Fix end icon in smart list input overlapping with text. Fixes #1379 - @MohamedBassem in d903c7f9
* fix: Show list options menu on list sidebar hover - @MohamedBassem in a1f77075
* fix: Truncate the RSS feed url - @MohamedBassem in e0ed727c
* chore: Add localhost labs to README and landing - @MohamedBassem in e13809fb
* fix(landing): Fix the favicon location for the landing page - @MohamedBassem in 96bce30c
* feat: Add \"deleted\" webhook event (#1464) - @SalGnt in 8a927e96
* docs: Update the privacy policy - @MohamedBassem in 37c18b89
* feat: Allow defaulting to reader mode when clicking on bookmarks. Fixes #662 - @MohamedBassem in 09652176
* docs: Update database docs (#1451) - @haappi in 5f3fe5d1
* feat: Read the archive status from omnivore and pocket. Fixes #703 - @MohamedBassem in c6d21afa
* build: Regen openAPI spec - @MohamedBassem in 6af14e9d
* feat: Disable the AI summary button if AI is not configured. Fixes #649 - @MohamedBassem in 85929850
* feat: Add AI auto summarization. Fixes #1163 - @MohamedBassem in 2743d9e3
* feat(api): Expose the endpoint to create a new tag - @MohamedBassem in a5ae67c2
* fix(web): Switch to a tab view in small screens for bookmark previews - @thiswillbeyourgithub in 053d1a90
* build: Fix format error - @MohamedBassem in 0e734b6b
* fix(web): Fix tag drag and drop merging on firefox .Fixes #1016 (#1309) - @haappi in c2e26f9f
* refactor: Migrate from NextJs's API routes to Hono based routes for the API (#1432) - @MohamedBassem in 3505cb7d
* doc: document how to upgrade meilisearch / migrate meilisearch db (#1436) - @thiswillbeyourgithub in 74e74fa6
* doc: new comunity project: freshrss to karakeep (#1435) - @thiswillbeyourgithub in 3a592931
* feat(api): enable ?sortOrder= for relevant resources (#1398) - @xuatz in 4e06ea7b
* fix: Use proper tokenizer when truncating for inference. Fixes #1405 - @MohamedBassem in 70d57209
* feat: position highlight menu based on device type (#1348) - @Mxrk :) in 523a251b
* fix(search): add new relevance sort order (#1392) - @xuatz in dbd0fd19
* fix(api): make PUT bookmark to a list idempotent (#1427) - @xuatz in f338f7b1
* build(Debian): update yt-dlp on karakeep's update and add a service check function (#1329) - @vhsdream in 4ae5857a
* doc: Mention karakeep-python-api in community projects (#1424) - @thiswillbeyourgithub in 60f47122
* docs: minor update to dev setup instructions (#1421) - @thiswillbeyourgithub in 65d7096b
* fix(landing): Fix the responsiveness of the landing page - @MohamedBassem in d44cd235
* docs: Update pikapods docs after the rename - @MohamedBassem in 6f6c9872
* feat: Allow enabling/disabling RSS feeds - @MohamedBassem in 370db082
* feat: Add karakeep metadata to openai calls - @MohamedBassem in 2a8d4b88
* doc: Fixed json syntax error in mcp docs (#1419) - @jakeasmith in 2082f87e
* docs: Fix JSON in MCP documentation (#1400) - @jk in 3ececfcc
* feat: Add NETSCAPE-Bookmark-file-1 export format support (#1374) - @yuikisaito in c03dcfdb
* fix(mcp): Correct description for get-lists tool. Fixes #1332 (#1388) - @MohamedBassem in 8b05515b
* i18n: Add US English as option in User Settings (#1327) - @WilliamAGH in 3d802db4
* docs: Update the docs about admin password reset to include the salt - @MohamedBassem in 3b246a88
* fix(docker): Fix build only docker compose file - @MohamedBassem in f4a31563
