# 0.33.2

This is a patch release for after [0.33.1](https://github.com/karakeep-app/karakeep/releases/tag/v0.33.1). It contains the following fixes:

**Bug fixes:**
* Change default "use max completion tokens" token env variable to `true` when using the default OpenAI configuration now that we're using 5.6 luna and this flag is required there (#3007).
* We're migrating to a custom karakeep chrome container (based on https://github.com/chromedp/docker-headless-shell) now that the old alpine-chrome is no longer fetch-able (and has been long abandoned by the maintainer). Check the migration guide [here](https://docs.karakeep.app/next/administration/chrome-image-migration). The old image will continue to work, but it's recommended that you migrate to the new one as it also upgrades chrome to 151 (compared to 124 in the old image). If you've been using browserless (e.g. on unraid), you're not impacted by this, and you don't need to migrate.
* Large singlefile archives (typically because of videos) used to fail metadata extraction as the parser used to OOM. We strip inline videos now to make the parsing succeed.
* Hardened the link to asset conversion mechanism in the crawler that used to result into silently broken assets. (#3002)
* Pinned nodejs to version 24.18.1 thanks to @eriktews (#2996) to overcome a bug in the latest node 24.19 version (check #2989 for details). The proxmox scripts also were pinned by @MickLesk.
* Karakeep's favicon is now light/dark mode aware, thanks to @ehfreema (#2990).

**New features:**
* You can now upload custom SingleFile archives to karakeep directly using the CLI.




# Changelog

* fix: Set max completion tokens to true when using default openai config (#3007) - @MohamedBassem in 98c0c789
* feat: migrate to a custom karakeep chrome image (#3005) - @MohamedBassem in 951e5025
* feat: publish a new karakeep chrome container (#3004) - @MohamedBassem in b6415b3c
* feat: favicon adapts to browser theme (#2990) - @ehfreema in ad27c051
* build: Fix crash loop caused by better-sqlite3 and node. (#2996) - @eriktews in 132e566b
* fix(crawler): fail on failure to download urls converted to assets (#3002) - @MohamedBassem in f57aad1d
* feat(mobile): switch to using context menu in ios - @MohamedBassem in 28e79094
* fix(restate): use logger middleware instead of durable steps - @MohamedBassem in 764ba850
* fix(workers): drop inline media blocks before metadata parsing - @MohamedBassem in 1c0b0a9a
* feat(cli): allow importing singlefile archives via the CLI - @MohamedBassem in 5f6ba262
* docs: update intro doc with new features - @MohamedBassem in 3af6f458
* readme: update the readme and docs with the new features - @MohamedBassem in a81f935a
* release: release cli, sdk & mcp - @MohamedBassem in b3fbf6bb