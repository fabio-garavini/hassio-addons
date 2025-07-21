# 0.26.0

Welcome to the 0.26.0 release of Karakeep! This release focuses on user management, servers improvements, and lots of fixes. We've a new comprehensive usage stats, reader mode, search history, S3 support, and much more. As always, we have amazing contributors in this release: @xuatz, @Ashok28, @HarryPeach, @Mostafa-Wahied, @adumat, @alexjsp, @apo-mak, @birnam, @deepanshu2711, @hametovbr, @irobot, @kdwils, @lexafaxine, @maelp, @rodsnts, @sheyabernstein, @simplytoast1, @thiswillbeyourgithub, @vhsdream!

> If you enjoy using Karakeep, consider supporting the project [here ☕️](https://buymeacoffee.com/mbassem) or via GitHub [here](https://github.com/sponsors/MohamedBassem).

<a href=\"https://www.buymeacoffee.com/mbassem\" target=\"_blank\"><img src=\"https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png\" alt=\"Buy Me A Coffee\" width=\"auto\" height=\"50\" ></a>

# Managed Karakeep ☁️

I have some news to share! With Pocket shutting down, I've been thinking about how to make Karakeep more accessible to a wider audience. So I've decided to start the journey of offering a managed karakeep instance to serve those who can't selfhost.
Karakeep wouldn't be where it is today without its amazing self-hosting community, and that will always remain my first priority. This managed offering is just an experiment. If it works, it could help support the development of the project. **We're now starting a private beta, and you can join the waitlist [here](https://tally.so/r/wo8zzx)!**

# New Features 🚀
- **User Management & Authentication:**
  - Added email verification support for new user registrations
  - Implemented password reset and forgot password functionality
  - Added user invitation system
  - Revamped signin/signup pages with better UX
  - Added per-user bookmark count / storage quotas
  - New delete account feature for users who want to remove their data
- **Search History:** You'll now get search suggestions from your karakeep search history (#1627 by @lexafaxine)
- **File Upload Support:** Added markdown file upload support (#1672 by @rodsnts)
- **Usage Statistics:** New user stats page showing tons of stats about your bookmarks and usage of karakeep (#1523)
- **New Reader Mode:** A new revamped reader mode with customizable font type and size (got jealous of how that of linkwarden looked!)
- **Proxy Support:** Added proper proxy support for crawler network requests (#1265)
- **Server Improvements:**
  - **S3 Storage Support:** Option to store assets in S3-compatible storage (#1703)
  - **Prometheus Monitoring:** We're now exposing a Prometheus endpoint for monitoring stats about the server (#758)
  - **Rate Limiting:** Added optional API rate limiting
  - Large HTML content now stored in asset storage (instead of db) for better performance
  - Allow enabling WAL mode on the database (opt-in, recommended)
  - Allow customizing parallelism for workers (#724)
- **Reddit Crawling:** Reddit posts will now get a more relevant banner image (#1302 by @birnam)

# UX Improvements ✨
- Prioritize crawling user-added links over bulk imports (#1717)
- Mobile app now has user setting for default bookmark view mode (#1723 by @xuatz)
- More lenient JSON parsing for LLM responses (#1267)
- Tweaks to mobile app icon padding with iOS tinted variant (#1620 by @alexjsp)
- Minor styling changes to the \"All Tags\" page
- Added icons to bookmark preview selectors
- Clicking on search tooltip now opens the search language guide (#1540)
- Added confirmation dialog for user deletion in admin panel (#1649 by @deepanshu2711)
- Added tag clearing functionality to tag list in the mobile app(#1595 by @Ashok28)
- Always visible search bar in the mobile app's tags list (#1596 by @Ashok28)

# Fixes 🔧
- Fixed OAuth creation failure due to missing UserSettings table (#1583)
- Fixed webhook not firing on deletion (#1613)
- Normalized leading hashes in tag names (#1351 by @Mostafa-Wahied)
- Fixed import/export icons being swapped (#1682 by @HarryPeach)
- Disabled metascraper readability plugin that was causing worker stuckness
- Fixed jsdom console logs leaking into worker logs
- Collapsed long runs of repeated whitespaces before tokenization to speed it up (#1622)
- Fixed public image signed tokens for better caching
- Fixed clear parent button in edit list dialog (#1742)
- Fixed running workers in production without tsx for lower resource usage (#1673)
- Fixed get-lists MCP tool (#1697 by @hametovbr)
- Fixed image quality slider in mobile showing excessive decimal places (#1735)
- Fixed mobile app crash when bookmark doesn't have archive or screenshot (#1584)
- Migrated from Puppeteer to Playwright (#1296 by @maelp)
- Video downloader now properly logs yt-dlp errors (#1624 by @irobot)

# For Developers 🛠️
- Added Helm chart support ([link](https://github.com/karakeep-app/helm-charts)). (#1350 by @sheyabernstein)
- **Build & Deployment:**
  - A much fancier linux installation script (#1576 by @vhsdream)
  - Added start-dev.sh script for easier development (#1628 by @xuatz)
  - Upgraded to pnpm@9.15.9 (#1544 thanks to @xuatz)
  - Migrated from ESLint to oxlint for faster linting (#1642 by @xuatz)
  - We now have a `CLAUDE.md` file to help the vibe coders out there.

# Community Projects 💡

### [Karakeeper](https://apps.apple.com/us/app/karakeeper-for-karakeep/id6746722790)

3rd Party Safari Extension - *by @simplytoast1*

<img width=\"640\" height=\"874\" alt=\"Screenshot 2025-07-20 at 2  16 48@2x\" src=\"https://github.com/user-attachments/assets/03f8baf1-b8a6-4c92-9248-1127dcb72587\" />

### [Karakeep Homedash](https://github.com/CodeJawn/karakeep-homedash)

*by @CodeJawn*

<img width=\"1918\" height=\"1060\" alt=\"image\" src=\"https://github.com/user-attachments/assets/35e0614e-9d92-4cf1-9d53-c5c3dc1ab4c9\" />


# Screenshots 📸

## Usage Stats

<img width=\"2882\" height=\"2812\" alt=\"image\" src=\"https://github.com/user-attachments/assets/2add1f9c-5bf3-4307-b6c7-f9e347f45bc8\" />

## The new Sign In page

<img width=\"1072\" height=\"1202\" alt=\"Screenshot 2025-07-20 at 1  58 50@2x\" src=\"https://github.com/user-attachments/assets/4e59daeb-04e9-456c-8e17-4ec9bec0763b\" />

## Recent Searches

<img width=\"1502\" height=\"338\" alt=\"Screenshot 2025-07-20 at 1  59 55@2x\" src=\"https://github.com/user-attachments/assets/9bf99d12-e900-44a9-8e1c-c8a1293b5a9b\" />

## Reader Mode

<img width=\"2318\" height=\"1558\" alt=\"Screenshot 2025-07-20 at 2  04 29@2x\" src=\"https://github.com/user-attachments/assets/f35c52e9-4858-4fa6-be60-8c2b3f2e54ab\" />


# Upgrading 📦

To upgrade:
* If you're using KARAKEEP_VERSION=release, run `docker compose pull && docker compose up -d`.
* If you're pinning it to a specific version, upgrade the version and then run `docker compose pull && docker compose up -d`.

**Note:** This release includes database schema changes. The migration will run automatically on startup.


# All Commits

* fix(web): Remove horizontal scroll in PWA's header - @MohamedBassem in 202924c9
* feat(web): Slightly nicer looking tags page - @MohamedBassem in 61a6ac83
* fix: Run workers in prod without tsx. Fixes #1673 - @MohamedBassem in 2cce45b7
* deps: bump s6-overlay version (#1750) - @adumat in 4fe541c4
* fix: Fix edit list modal not clearing parent - @MohamedBassem in b992fadd
* feat: Add a proper reader mode - @MohamedBassem in 49f38efd
* fix: Increase crawler max worker count in tests - @MohamedBassem in 4a4ff37b
* feat: Allow setting browserless crawling per user - @MohamedBassem in 4e9544b0
* feat: Allow enabling journaling mode on the db - @MohamedBassem in 64a0d918
* fix(mobile): Fix image quality slider showing lots of decimal places. fixes #1735 - @MohamedBassem in ae1352f3
* fix: Rename the proxy settings such that they don't interfer with other requests - @MohamedBassem in 1da8b458
* chore: Move the helm charts to their own repo - @MohamedBassem in f3feb599
* fix(web): Fix the clear parent button in the edit list dialog. Fixes #1742 - @MohamedBassem in 8bd3b586
* feat(mobile): Add user setting for default bookmark view mode (#1723) - @xuatz in fe69ca8c
* fix: Clear search history on logout - @MohamedBassem in a3627569
* feat: adding search history #1541 (#1627) - @lexafaxine in 39fcda01
* feat: markdown file upload support (#1647) (#1672) - @rodsnts in ecb13cec
* Revert \"fix: Fix the types of the bookmark types in the db query\" - @MohamedBassem in 0addc7bc
* fix: Fix the types of the bookmark types in the db query - @MohamedBassem in 4ba3e804
* feat: Add stripe based subscriptions - @MohamedBassem in d1d52634
* feat: Add delete account support - @MohamedBassem in 845ccf1a
* fix: Drop auth failure logger - @MohamedBassem in f8ae9866
* feat: Add proper proxy support. fixes #1265 - @MohamedBassem in 360ef9db
* feat(api): Expose the update user API in the openapi specs - @MohamedBassem in 1105b4a4
* build: Restrict claude actions invocations - @MohamedBassem in ba7a87fe
* fix(web): Fix the alignment in the user options page - @MohamedBassem in 49648c4c
* deps: Upgrade typescript to 5.8 - @MohamedBassem in 6b77736b
* fix: Add ratelimiting to bookmark recrawl and summarization - @MohamedBassem in 21076b83
* deps: Upgrade drizzle - @MohamedBassem in f4436e19
* fix(web): Fix dark mode in auth pages - @MohamedBassem in 92311191
* fix(tests): Fix missing mock in trpc tests - @MohamedBassem in 8c3bf481
* fix: Prioritize crawling user added links over bulk imports. fixes #1717 - @MohamedBassem in 9fb3ef6f
* refactor: Move db interactions into the trpc routes - @MohamedBassem in 8e3013ba
* feat: Support forget and reset password - @MohamedBassem in 140311d7
* chore: Add claude code github action - @MohamedBassem in 385f9f0b
* feat(ui): Revamp the signin/signup page - @MohamedBassem in db9a02b8
* feat: Add API ratelimits - @MohamedBassem in 613137ff
* feat: Add invite user support - @MohamedBassem in 333d1610
* feat: Add support for email verification - @MohamedBassem in 93049e86
* fix(api): Fix handling for CORS after the trpc move to hono. Fixes #1709 - @MohamedBassem in aae3ef17
* fix: Drop the need to for the self-call for providers and NEXTAUTH_INTERNAL_URL - @MohamedBassem in f7f577af
* feat: Add a logout page - @MohamedBassem in bb4a687b
* fix: Add a dummy bcrypt comparison in validatePassword when the user is not found - @MohamedBassem in 58488e1c
* build: Add an open-api husky check - @MohamedBassem in 71458166
* fix(build): Regenerate openapi spec - @MohamedBassem in 0eeefd68
* fix: Fix search indexing after content split - @MohamedBassem in f5a674c2
* fix(web): Clicking on search tooltip opens the search language guide. Fixes #1540 - @MohamedBassem in f3b925ad
* feat: Store large html content in the asset db - @MohamedBassem in dee3a4d4
* fix(mobile): Fix crash when bookmark doesn't have archive or screenshot. Fixes #1584 - @MohamedBassem in 362be300
* fix(tests): Fix broken user setting test - @MohamedBassem in 959da9a8
* chore: Excluded unneeded docker context using dockerignore - @MohamedBassem in 5c8a2b9b
* feat: Add a new timezone user setting - @MohamedBassem in 0e94ad36
* feat: Add prometheus monitoring. Fixes #758 - @MohamedBassem in b60ece57
* fix(build): Regenerate openapi spec - @MohamedBassem in cfa0385b
* fix: Fix i18n in the new stats page - @MohamedBassem in f96680fc
* feat: Add per user storage quota - @MohamedBassem in 384432d3
* feat: Add new user stats page. Fixes #1523 - @MohamedBassem in 47624547
* feat(workers): Allow custmoizing max parallelism for a bunch of workers. Fixes #724 - @MohamedBassem in 5576361a
* feat: Add support for S3 as an asset storage layer (#1703) - @MohamedBassem in d66b3b86
* fix(workers): A more lenient JSON parsing for LLM responses. Fixes #1267 - @MohamedBassem in 53b6b3c2
* refactor: Move the health endpoint to hono as well - @MohamedBassem in f144f1bc
* refactor: Move the trpc endpoint to hono - @MohamedBassem in f5e737bf
* chore: Symlink Gemini.md to CLAUDE.md - @MohamedBassem in 474ca7f2
* feat: Add per user bookmark count quota - @MohamedBassem in 545cac19
* chore: Symlink Gemini.md to AGENTS.md - @MohamedBassem in 73a0c951
* fix(web): Add icons to preview selectors - @MohamedBassem in ad92fa24
* chore: Add a GEMINI.md file for people using gemini-cli - @MohamedBassem in 4776b4cd
* fix(mcp): add empty params object (#1697) - @hametovbr in 6cc249d1
* fix: switch import / export icons (#1682) - @HarryPeach in 7febebe1
* fix(workers): Disable the metascraper readability as it's causing slowness in worker - @MohamedBassem in 71f8e970
* fix(workers): Fix jsdom console logs leaking into worker logs - @MohamedBassem in b74377d2
* feat(workers): adding a local metascraper plugin for Reddit posts (#1302) - @birnam in 7cc4b08a
* fix(tags): normalise leading hashes in tag names (#1317) (#1351) - @Mostafa-Wahied in 112aa9d9
* feat(workers): migrate from puppeteer to playwright (#1296) - @maelp in c70d64d4
* feat(mobile): Add tag clearing functionality to tag list (#1595) - @Ashok28 in 727c7f22
* fix(mobile): always visible search bar in tags list (#1596) - @Ashok28 in 4134649d
* fix: minor changes to the tagging prompts (#1474) - @thiswillbeyourgithub in a74afc9d
* build: Install script v3.0 - Bling version (#1576) - @vhsdream in e310ba9f
* feat: Add Helm chart (#1350) - @sheyabernstein in 43d3210b
* chore: More oxlint changes - @MohamedBassem in f7b31938
* chore: migrate away from eslint to oxlint (#1642) - @xuatz in d5e2973d
* docs: update meilisearch key generation instruction (#1651) - @kdwils in 91a9d3c1
* fix: Fix webhook not firing on deletion. Fixes #1613 - @MohamedBassem in 04f93941
* feat(admin): add confirmation dialog for user deletion (#1648) (#1649) - @deepanshu2711 in 0f4c6162
* fix: Collapse long runs of repeated whitespaces before tokenization to avoid choking the tokenizer. Fixes #1622 - @MohamedBassem in 426beff1
* fix: Change public image's signed tokens to be time aligned for better caching - @MohamedBassem in 10d45e8d
* fix: Fix oauth creation failure due to missing UserSettings table. Fixes #1583 - @MohamedBassem in f1f665f8
* fix(mobile): tweaks to mobile app icon padding + added iOS tinted variant (#1620) - @alexjsp in 6c0bcca1
* fix(workers): video downloader should log yt-dlp errors (#1624) - @irobot in a16c5424
* chore: add start-dev.sh for laziness (#1628) - @xuatz in 88e4ea98
* i18n: Add Greek translation (#1564) - @apo-mak in 004eb5ad
* docs: Mention the community safari extension in the quick sharing docs (#1562) - @simplytoast1 in e5307f19
* release(cli): Bump CLI version to 0.25.0 - @MohamedBassem in bb00699b
* build: Pin ios github action to macos-15 to comply with apple's requirement for min ios SDK - @MohamedBassem in d7617cc2
* fix: Fix UI infinite recursion by upgrading radix packages - @MohamedBassem in 675ed5c3