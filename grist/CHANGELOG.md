## What's Changed

Airtable imports are now smoother, and the import lands in your current workspace instead of somewhere unexpected. Suggestions got a visual refresh with automatic comparison highlighting as you type. Forms are more accessible, and the API now has a `cellFormat=typed` option so you can get properly typed values back without guessing.

If you include [extra extensions](https://github.com/gristlabs/grist-core?tab=readme-ov-file#building-from-source) in your build, there's a new automations UI that lets you set up triggers on your data. You can define conditions on any table, then fire off email notifications or webhooks when rows match. You can send dynamic emails to different recipients based on column values, filter with Python conditions, and monitor everything from a delivery log. Automations are part of the full edition of Grist, which has a 30-day trial, and is [free for individuals and small orgs](https://www.getgrist.com/free-grist-activation-key-faq/) (under $1M annual funding). The full edition funds the development of grist-core.

### Improvements

* Airtable import
  * Formula columns with field references are imported as better comments (#2201)
  * Single record link fields are imported as "Ref" (vs "RefList") columns (#2165)
  * Imports now use the `/tables` endpoint for better availability (#2171)
  * Import now targets the current org and workspace (#2139)
  * Show a nicer message when Airtable OAuth integration isn't configured (#2146)
* Suggestions
  * Comparison highlighting is now shown automatically in suggestion mode (#2140)
  * Improved "compare to original" feature (#2068)
  * Fix suggestion count on a copied document that has been auto-forked (#2117)
  * Fix deleting rows correctly in suggestions (#2174)
* Forms
  * Make `select` fields better usable with screen readers (#2164)
* SCIM
  * Speed up user search (#2070)
* Sandboxing
  * Use `gristlabs/gvisor-unprivileged` in the base Docker image for a more up-to-date version of runsc
* API
  * New [`cellFormat=typed`](https://github.com/gristlabs/grist-core/commit/757059da) option for both the REST API and Custom Widget API, providing consistent, self-describing values that preserve type information for Ref, RefList, Attachments, Date, and DateTime columns
  * Reduce `GRIST_LOG_API_DETAILS` logging: omit body and result, add docId (#2175)
* UI/UX
  * Improve accessibility of Undo / Redo action buttons (#2167)
  * Add max length on text inputs in forms (#2097)
  * Fix document icon when the second word of the doc name is an emoji (#2170)
  * Fix unreadable dark mode colors in banners (#2138)
  * Hide admin panel links in grist-desktop (#2181)
  * Remove the ⌘⇧H / Ctrl+Shift+H shortcut from the "Use as table headers" command
  * Store anchor links in comments as relative URLs
* Documentation
  * Rewrite grist-data-format.md to reflect actual Grist data format (#2177)
  * Freshen list of features in README.md (#2142)
* Internal / infrastructure
  * Upgrade @gristlabs/sqlite3
  * Add Storybook for documenting Grist UI components

### Fixes

* Fix 'Row unavailable' race condition (#2156)
* Fix NumericFormatter test flakiness across ICU versions (#2176)
* Fix typo in floating menu selector (#2187)

### Full Grist edition extensions

* [Automations](https://support.getgrist.com/automations/), a new tool in the left-hand panel for document owners to create trigger-driven workflows
  * Set conditions on any table, filter by column values, require specific columns to be filled, use custom Python filters
  * Choose when to trigger: when a row enters the filtered view, when it's newly added, or on any update
  * Actions: [send an email](https://github.com/gristlabs/grist-core/commit/2eeb4cea) (with dynamic recipients, variable placeholders, and Markdown support) or create a webhook
  * Monitor all automations from a delivery log with success/error/pending status
* Automation tool visibility can be controlled via [`GRIST_HIDE_UI_ELEMENTS` and `GRIST_UI_FEATURES`](https://github.com/gristlabs/grist-core/commit/36cc798f)

## Contributions

* @fflorent: Speed up SCIM user search (#2070), improve Undo/Redo accessibility (#2167), fix document icon emoji handling (#2170), floating menu typo fix (#2187), bump axios (#2163), bump chrome driver (#2093), bump mocha-webdriver (#2198)
* @manuhabitela: Make form `select` fields better usable with screen readers (#2164), add missing translation strings in themes selection (#2205)
* @imagoiq: Add "still working..." to translatable strings (#2188)
* @Vortezz: Add max length on text inputs (#2097)
* @webash: Fix formatting for Advanced Admin Controls in README (#2161)

### Translations

* audus
* Barna Kovács
* Grégoire Cutzach
* imagoiq
* Martin Harari Thuresson
* Philip Steffan
* RapidShade
* ssantos
* xabirequejo
* Zaim Ali Karim
* தமிழ்நேரம்

**Full Changelog**: https://github.com/gristlabs/grist-core/compare/v1.7.11...v1.7.12

[Join our Discord Community](https://discord.gg/MYKpYQ3fbP) if you'd like to get into development of Grist.
