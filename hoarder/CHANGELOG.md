# 0.21.0 - The 10k ⭐ release!

Welcome to the 0.21.0 release of Hoarder! Hoarder just hit 10k stars on github and I can't be more grateful! We wouldn't have hit this milestone without all of our contributors, users and the awesome community at `/r/selfhosted`! Over the holidays, Hoarder [got featured](https://news.ycombinator.com/item?id=42485746) at the homepage of hackernews for an entire day!

We're celebrating this milestone, with a release that contains some of the long awaited features! This release introduces advanced search capabilities, smart lists, highlighting support, a TypeScript SDK, and more! As usual, we're excited to welcome our new contributors: @lexafaxine, @jdhartley, @medo & @circuitcreature!

If you enjoy using Hoarder, consider supporting the project [here ☕️](https://buymeacoffee.com/mbassem) or via GitHub [here](https://github.com/sponsors/MohamedBassem).

## New Features 🚀

- Advanced Search Capabilities: Hoarder's search just got much more powerful. You can now add search "qualifiers" to refine your search results. Qualifiers include: tags, lists, favourite/archived status, creation date, etc. You can read about the new query language [here](https://docs.hoarder.app/next/Guides/search-query-language). Some examples:
  - `is:fav after:2024-01-01 before:2024-12-31`: Find all the bookmarks that are favourited and created in 2024.
  - `(#neovim or #vscode) and -is:archived`: Find all the non-archived bookmarks that are tagged either with #neovim or #vscode.
  - `is:archived -is:inlist`: Find all the bookmarks that are archived but are not sorted in any list.
  - `url:github.com neovim`: Find all the bookmarks that were hoarded from github and contains the `neovim` term in its content.
  - Special shoutout to @kamtschatka who first advocated for the powerful search language and did the first implementation.
- Smart Lists: With the new powerful search, hoarder now allows you to save your searches as what we're calling "smart lists". Smart lists saves you the hassle of manually managing lists, and allows you create an automatic lists that dynamically matches a specific search query. For example:
  - Instead of manually managing a list called 3d Printing, you can now create a smart list with the query `url:makerworld.com or url:printables.com or #3dprinting`. Which will include everything you hoarded from popular 3d printing websites and everything the AI/you tagged with the `3d printing` tag.
  - A smart list with the query `url:reddit.com/r/selfhosted and is:fav` will include all the stuff that you hoarded from the r/selfhosted subreddit and favourited.
- Highlighting Support: You can now highlight your favourite quotes from the links that you hoard, and have a way to view all what you've highlighted. This was one of the most requested features specially for those coming to Hoarder from Omnivore.
- Linkwarden Import: You can now import your bookmarks from Linkwarden thanks to @circuitcreature).
- More translations: Croatian, Danish, Dutch, Galician, Italian, Japanese, Polish, Russian, Spanish & Turkish. Thanks to all those who contributed those translations over weblate (@Jaksa101, @bcanata, @KilFer, @mathyvds and more on weblate).

## UX Improvements ✨

- The admin page now features a sidebar layout, for a more consistent experience with the settings page.
- Bookmarks created over a year ago now show the creation year in the card footer (@jdhartley).
- Added a confirmation dialog before deleting bookmarks to prevent accidental deletions (by @lexafaxine).
- Previously, search used to show only at most 20 bookmarks. This now fixed, and you can scroll across search results.

## For Developers 🛠️

- We're now publishing a [minimal typescript sdk](https://www.npmjs.com/package/@hoarderapp/sdk) on npm. This allows you to quickly call hoarder's API endpoints with strong typing in both the requests and responses.
- The search endpoint is now exposed in the REST API as `GET /bookmarks/search` with the support for advanced search queries.
- You can now manipulate the assets attached to a bookmark with the new `/bookmarks/assets/...` endpoints.
- The new highlights feature is also available via the API in `/bookmarks/highlights/...` endpoints.

## Fixes 🐛

- Fix missing scrollbar in the preview model for long notes.
- Refactored asset serving to not load the entire asset in memory. This should result in lower memory consumption when serving large assets (e.g. videos and full page archives).
- Added support for self signed certs for android by @CrypticC3s4r (pending mobile app release).
- Previously the iOS app didn't allow connecting to hoarder over http, this limitation should no longer by there (pending mobile app release). Though honestly, you probably shouldn't be serving hoarder over http.
- Mobile devices without cameras (e.g. eink tablets) were not able to install the app. This is now fixed (pending a mobile app release).

## Community Projects 💡

Checkout our community projects page [here](https://docs.hoarder.app/community-projects).

- @Madh93 Implemented [a new telegram bot](https://github.com/Madh93/hoarderbot) that allows you save stuff to hoarder by sending it to the bot on telegram!

## All Commits

- fix: Fix truncated long text in bookmark preview modal. Fixe #793 - @MohamedBassem in 12cb8c5
- refactor: Implement file streaming for asset route. Fixes #818 - @MohamedBassem in c98722c
- i18n: Enable the new translated languages - @MohamedBassem in 88dc6f9
- i18n: Sync weblate translaions - @MohamedBassem in 2f8ee54
- deps: Upgrade nextjs to 14.2.21 - @MohamedBassem in 7256c4d
- ci: Fix build by using the workspace sdk package - @MohamedBassem in b62640a
- feat: Expose the search functionality in the REST API - @MohamedBassem in 1f5d566
- fix: Change search endpoint to accept query as raw string - @MohamedBassem in ce16eda
- feat: Expose asset manipulation endpoints in the REST API - @MohamedBassem in 4439c91
- Revert "ci: Run tests on push (#807)" (#808) - @MohamedBassem in eb0d821
- ci: Run tests on push (#807) - @MohamedBassem in 39358b1
- fix: Add i18n for query explainer and add missing url matcher - @MohamedBassem in 3bcb1e1
- feat: Add support for smart lists (#802) - @MohamedBassem in 5ecdc36
- refactor: Migrate from the deprecated drizzle-orm schema - @MohamedBassem in 5df0258
- docs: Add search query language documentation - @MohamedBassem in b09c5f2
- docs: Add firefox import-export instructions (#799) - @orthdron in c31b7c6
- feat: Add support for searching for tagged and listed items - @MohamedBassem in 96cc11e
- feat: Add support for negative search terms - @MohamedBassem in 4deda9d
- chore: add format:fix and lint:fix scripts to all packages - @MohamedBassem in 17af22b
- test: Add tests for the search id queries - @MohamedBassem in 4edea56
- feat: Introduce advanced search capabilities (#753) - @MohamedBassem in cbaf9e6
- feat: Add delete bookmark confirmation dialog. Fixes #776 (#787) - @lexafaxine in f476fca
- feat: show createdAt year in card footer when created over a year ago (#790) - @jdhartley in b6d5556
- fix(landing): update GitHub capitalization (#791) - @jdhartley in 61ab59a
- build: Fix sdk and e2e_tests builds - @MohamedBassem in f9b2d1d
- chore: Setup and add e2e tests for the API endpoints - @MohamedBassem in 058e723
- fix(api): Return 201 from highlights creation and fix docs for PATCH /lists/[listId] - @MohamedBassem in 5aee340
- feat: Introduce a typescript sdk - @MohamedBassem in 5d8d2de
- i18n: Added Croatian translation (#788) - @Jaksa101 in 8df4240
- refactor: Refactor sidebar into a shared component - @MohamedBassem in 5902664
- feat: Change the admin page to be tabbed similar to that of the settings page - @MohamedBassem in 179f00b
- deps: Upgrade drizzle-orm to 0.38.3 - @MohamedBassem in aff4e60
- feat: Add support for embeddings in the inference interface (#403) - @medo in c89b0c5
- chore: Add aider to gitignore - @MohamedBassem in 225d855
- docs: Add troubleshooting guide - @MohamedBassem in a1c62e5
- feat: add Linkwarden importer (#786) - @circuitcreature in 27b3f9d
- fix(ios): Drop the local networking property to enable http support. Fixes #679 - @MohamedBassem in aeedea1
- docs: Add Telegram Bot to community projects (#783) - @Madh93 in bad41fb
- fix(mobile): Add support for self signed certs in android. Fixes #381 (#416) - @CrypticC3s4r in 82f1f61
- fix: Coerce createdAt in the bookmark create/update APIs - @MohamedBassem in a1a3a7e
- build: Fix format error - @MohamedBassem in 75a3fc3
- readme: Update readme with new features - @MohamedBassem in aa24118
- fix: react warning about keys in AllHighlights - @MohamedBassem in 98c3c0d
- i18n: Added Turkish translation (#781) - @bcanata in cf22efa
- fix(mobile): Mark the camera explicitly as not required in android manifest. Fixed #755. - @MohamedBassem in 74962d3
- docs: Update security-considerations.md to fix a typo (#762) - @mark-pitblado in cc708a4
- i18n: Sync weblate translaions - @MohamedBassem in 503a764
- fix: Better handling for when there's no highlights in the all highlights page - @MohamedBassem in 052ae9b
- feat: Implement the all highlights page. Fixes #620 - @MohamedBassem in 7956e9f
- release(cli): Bump CLI version to 0.20.0 - @MohamedBassem in 7dd5b2b
- docs: Fix missing docs for highlights APIs - @MohamedBassem in 7b6f876
- feat: Add REST APIs for manipulating highlights. Fixes #620 - @MohamedBassem in 3f56389
- feat: Implement highlights support for links. Fixes #620 - @MohamedBassem in 86d74e3
- chore: Fix typo in feature_request.yml issue template (#769) - @anned20 in a23044b
- refactor: Move asset preprocessing to its own worker out of the inference worker - @MohamedBassem in 9a950e1
- i18n: Merge weblate translations - @MohamedBassem in 86a4030
- i18n: Enable polish translations - @MohamedBassem in 5255e3f
- chore: Add aider to gitignore - @MohamedBassem in c63b807
- feat: Add basic pagination to searchBookmarks tRPC - @MohamedBassem in 353e5d6
- i18n: Added translation using Weblate (Spanish) - @KilFer in 053a2b5
- i18n: Translated using Weblate (Polish) - @kamil P in 0e4525f
- Translated using Weblate (Dutch) - @mathyvds in 7978599
- docs: Fix broken link in Debian/Ubuntu install doc (#749) - @vhsdream in 71d7490
- fix: Nested Lists do not fit well in browser extension window #535 (#553) - @kamtschatka in 4b38e23
- docs: Minor language changes to the docker installation docs (#615) - @LightningMarshal in bfa62ee
- docs: Release the 0.20 docs - @MohamedBassem in 0f4177a
- docs: Add minimal installation docs, and fix other docs - @MohamedBassem in 8732056
