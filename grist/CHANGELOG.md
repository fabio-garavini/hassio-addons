## What's Changed

New self-hosted installations now print a **boot key** at startup that lets you log in as the install admin, with no pre-existing account needed. WebSocket connections now accept API keys, boot keys, and access tokens, not just session cookies, so consoles, scripts, and out-of-page custom widgets can talk to Grist over the same channel browsers use. The Pyodide sandbox jumped from 0.23.4 to 0.28.1. Airtable imports can update existing rows in place and bring choice colors with them. The `(Bulk)AddOrUpdateRecord` API hands back the IDs of the rows it added or updated, so upserts are easier to chain. Custom widgets now know whether they're a target or source of section linking. "Search in document" ignores accents. Team site owners on self-managed installations get a new Site Settings page for name, domain, and logo. And Grist can restart in place to apply config changes without dropping its listening socket.

### New features

* **Boot key login**. New installations generate a `GRIST_BOOT_KEY` and print it at startup. Visit `/boot`, paste the key, and you're logged in as the install admin and ready to set the admin email. No pre-existing account needed, and no window where the server is open to the world before authentication is configured. The key (and the related `GRIST_IN_SERVICE` flag) can also be set via env vars or managed from the Admin Panel. Existing installations are unaffected. ([commit](https://github.com/gristlabs/grist-core/commit/e6a3351d))
* **Restart in place**. Grist can now apply config changes by restarting itself without dropping the listening socket. During the brief gap, `/status` keeps answering for liveness checks while readiness flips to 503. On by default for Linux under Node, off for Windows and Electron. Toggle with `GRIST_RESTART_SHELL=true/false` (#2265).
* **Site Settings page**. Team site owners on self-managed installations can edit team name, domain, and logo from a new `/site-settings` page ([commit](https://github.com/gristlabs/grist-core/commit/0fcd2e90)).
* **WebSocket auth for API keys, boot keys, and access tokens**. The WebSocket side now goes through the same identity-resolving code path as the REST API, so any auth method that works on one works on the other. Opens the door to console clients and out-of-page custom widgets. Also tidies up auth priority and unifies API rate-limiting between the two. ([commit](https://github.com/gristlabs/grist-core/commit/07c9617a))

### Improvements

* Airtable import
  * Updates existing rows by default when the source has an Airtable ID column, and resolves references against rows already in the doc (#2216)
  * Brings Airtable choice colors along for the ride (#2199)
* API
  * `(Bulk)AddOrUpdateRecord` now returns `id` / `recordIds` / `createdRecordIds` / `updatedRecordIds`, and `BulkAddOrUpdateRecord` accepts a `record`-shaped payload that can match different columns per row (#2193)
  * Webhook API ignores empty action payloads, matching the other endpoints (#2308)
* Custom widgets
  * New `linking` field on `InteractionOptions` tells a widget whether it's an incoming-link target (`asTarget`) or used as a source by other sections (`asSource`) (#2259)
* Sandboxing
  * Pyodide updated from 0.23.4 to 0.28.1 (#1754)
* Suggestions
  * The number-of-suggestions badge is now a status dot, removing counting ambiguity ([commit](https://github.com/gristlabs/grist-core/commit/c2cdb8a1))
  * Per-document unsubscribe link for row-change notifications ([commit](https://github.com/gristlabs/grist-core/commit/e9113b8b))
* Admin Panel
  * Authentication section rebuilt with a status-coded hero card, getgrist.com Reconfigure / Deactivate, and a collapsible "other methods" list (#2227)
* UI/UX
  * "Search in document" now ignores accents (#2221)
  * Forms scroll like a normal page, fixing Tab not appearing to do anything on first press in Firefox (#2179)
  * Account settings split into Profile and Developer subpages, in preparation for OAuth Apps ([commit](https://github.com/gristlabs/grist-core/commit/6dc22174))
  * Clearer error messages when personal orgs are disabled (#2285)
* Internal / infrastructure
  * New eslint rule makes sure `makeT(...)` calls match their filename, with autofix (#2237)
  * Rebalanced nbrowser CI groups and added guards so silently skipped tests don't sneak through (#2267)
* Documentation
  * Cleaned up style inconsistencies in the README (#2200)

### Fixes

* Fix wrong active section in the creator panel after duplicating a page with collapsed widgets (#2298)
* Fix CORS handling for opaque (`"null"`) origins, eliminating spurious 500s for `https://` widgets on `http://` hosted sites (#2299)
* Fix padded checkboxes so the border and tick line up inside padded wrappers (#2300)
* Fix `SELF_HYPERLINK()` returning a share-key URL when a doc was first opened via a share link ([commit](https://github.com/gristlabs/grist-core/commit/c32c74c9))
* Wrapped row height is preserved after modifying a cell in suggestions, removing a flicker from unwrapped to wrapped ([commit](https://github.com/gristlabs/grist-core/commit/99b174b3))
* Airtable import UI translations are picked up properly (#2236)
* Bump handlebars from 4.7.7 to 4.7.9 (#2208)

### In progress: admin setup wizard

Work is under way on a new `/admin/setup` page, a guided first-run flow for self-hosted operators covering sandbox choice, base URL and edition, authentication, default permissions, and backups. It is not wired up by default this release, but the building blocks are in and you can preview by visiting `/admin/setup` directly. We expect this to be the official first-run experience next release.

Landed so far:
* Sandbox setup card that auto-detects available sandbox flavors and recommends one (#2272)
* Server section with a Test-URL-then-Confirm flow for the base URL, plus an edition picker (#2280)
* Backups section that shows external storage status and lists how to enable each backend (#2283)
* Final step with three permission presets (Locked, Recommended, Open) for `GRIST_ORG_CREATION_ANYONE`, `GRIST_PERSONAL_ORGS`, `GRIST_FORCE_LOGIN`, `GRIST_ANON_PLAYGROUND` (#2293)
* Harmonized card styling, headers, and apply-and-restart flow across the steps (#2307)
* Several Grist server settings (`APP_HOME_URL`, `GRIST_SANDBOX_FLAVOR`, `GRIST_FORCE_LOGIN`, `GRIST_ANON_PLAYGROUND`, `GRIST_ORG_CREATION_ANYONE`, `GRIST_PERSONAL_ORGS`, `GRIST_BOOT_KEY`, `GRIST_IN_SERVICE`, `GRIST_ADMIN_EMAIL`, `GRIST_DEFAULT_EMAIL`) can now be read from the home DB as well as the environment, so they can be edited from the browser during setup ([commit](https://github.com/gristlabs/grist-core/commit/c73044a0))
* Placeholder setup page and stepper component ([commit](https://github.com/gristlabs/grist-core/commit/8eafcb7b))

### Full Grist edition extensions

* Automations
  * Emails are now grouped by action ID rather than subject (so test runs that reuse a subject still send each email). Padding restored on the automation page, name preserved when created with Enter, description converted to a text area, and scroll issues in the action log fixed ([commit](https://github.com/gristlabs/grist-core/commit/515c4b15))

## Contributions

* fflorent: server tests for session-store API key isolation (#2246), eslint rule enforcing `makeT` filename match (#2237), Airtable import UI translation fix (#2236), test fixes (#2232, #2248)
* OdysseyOfTheDragons: accent-insensitive search in document (#2221)
* manuhabitela: form page scrolling fix for Firefox Tab navigation (#2179), flaky form view test (#2276)

### Translations

* Barna Kovács
* Grégoire Cutzach
* Igor Freire Rodrigues
* Markus Spitzer
* Martin Harari Thuresson
* Renato Portela
* Theo Heller
* Xavi Montero
* xabirequejo

**Full Changelog**: https://github.com/gristlabs/grist-core/compare/v1.7.12...v1.7.13

[Join our Discord Community](https://discord.gg/MYKpYQ3fbP) if you'd like to get into development of Grist.
