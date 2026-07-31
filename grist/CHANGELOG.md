## What's Changed

### New features

* **Row numbers, row IDs, or neither**. A new "Row numbers" setting on grid widgets, in Grid Options and in a menu at the grid's top-left corner. Choose Numbers (position in the current sort, as before), Row IDs (bracketed like `[15]`, matching how references render), or Hidden, which collapses the left-hand gutter. Addresses #220, open since 2022, and #1927. (#2448)
* **Setup checklist for notifications and automations**. Notifications, automations, invite emails, and the AI assistant each need plumbing behind them (an email backend, a Redis queue, an AI provider, the full edition), and when a prerequisite is missing the feature simply isn't there. Document Settings now lists what's ready and what each unfinished feature is waiting on. Users can press "Ask the admin" to request a step; admins see the requests in a new Admin Panel item. ([commit](https://github.com/gristlabs/grist-core/commit/a29e94aa))
* **Switch to the full edition from the Admin Panel**. Previously this meant changing Docker image. Now it's a button, in the Admin Panel or the first step of Quick Setup: the server downloads the extensions matching its own version, checks their SHA-256, and restarts in place. Offered on release builds only, not on `main`, nightlies, or dev checkouts. `GRIST_EXT_FULL_EDITION_BASE_URL` points it at a mirror, or turns it off for air-gapped installs. (#2450)
* **"Help us improve" in Quick Setup**. First-time setup now ends with an optional card: how you heard about Grist, what kind of user you are, and a switch subscribing an email address to product and security updates. It appears during setup only, and if you leave it blank nothing is sent at all. What you fill in goes to Grist Labs, along with your installation ID. ([commit](https://github.com/gristlabs/grist-core/commit/5af0acb7))

### Improvements

* Accessibility
  * Modals and popups are announced as dialogs by screen readers, and Tab is trapped inside an open modal. Fixes a Mousetrap bug that let keyboard focus wander behind a modal. Contributed by @manuhabitela (#2371). Keyboard focus now works from the tooltip-style popups inside modals as well ([commit](https://github.com/gristlabs/grist-core/commit/6e175355))
* API
  * Temporary row IDs are now translated inside RefList values, not just Ref values and row-ID positions. Rows that reference each other through RefList columns can be created in one bundle (#2477)
* UI/UX
  * The Grist edition and version show in the left panel footer, with links to compare editions and to release notes. Previously visible only in the Admin Panel (#2470)
* Internationalization
  * "Enable Access Rules", the form reset warning, and the color picker's `fill` / `text` / `default` / `none` labels are now translatable. Contributed by @fflorent (#2451)
* Documentation
  * `documentation/database.md` is back in sync with the schema, with a regenerated home DB diagram. Contributed by @fflorent (#2458)
  * Freshened the comments that feed the generated reference on [support.getgrist.com](https://support.getgrist.com/), with formatting fixes and a broken link repaired (#2462)
  * The README caught up with the last several releases: accessibility, Automations, OAuth apps, the MCP server, three new environment variables, and a table of full edition feature flags (#2443)

### Fixes

* "View as" is preserved for attachment previews and whole-document exports, which previously resolved as the document owner (#2478)
* An Airtable reference column holding a single value imported as unusable text rather than a working reference, leaving the raw Airtable ID behind as alt text (#2446)
* Airtable count columns no longer error when the column they count was imported as a Ref rather than a RefList (#2447)
* In Markdown cells at a max row height, wrapped list items could overlap the lines below (#2465)
* Improved error reporting when comparing documents via the API (`/compare`) ([commit](https://github.com/gristlabs/grist-core/commit/b2145fe0))
* The server could crash when a client disconnected part-way through a proxied request ([commit](https://github.com/gristlabs/grist-core/commit/723f7edd))
* The "reachable" self-check reported a false failure whenever anonymous access was disabled (#2420)
* Redirects when `GRIST_PERSONAL_ORGS` is disabled have been improved (#2420)

### Full Grist edition extensions

* OAuth apps
  * Re-authorizing a client pre-selects the resources you granted before instead of resetting the grant to everything, and skips the account picker when it can identify the account. Switching accounts no longer invalidates the previous account's tokens ([commit](https://github.com/gristlabs/grist-core/commit/738cbd8b))
  * A server without `GRIST_ENABLE_OIDC_SERVER` explains how to enable OAuth apps, instead of rendering UI over endpoints that 404 ([commit](https://github.com/gristlabs/grist-core/commit/738cbd8b))
* MCP
  * A banner on the home page and a card on the OAuth apps page explain how to connect using MCP. See the [MCP docs](https://support.getgrist.com/mcp/) ([commit](https://github.com/gristlabs/grist-core/commit/ff644998))
  * Clients passing a document's urlId in place of `doc_id` no longer get "Doc belongs to a different DocWorker" ([commit](https://github.com/gristlabs/grist-core/commit/96367798))
  * Document calls now travel to the server holding the document through the same forwarding as the rest of the document API, rather than MCP's own, which means MCP works with Fleet ([commit](https://github.com/gristlabs/grist-core/commit/b2145fe0))
* Grist Fleet
  * New. Any Grist server in a pool of servers will now proxy WebSocket connections and document API calls to whichever peer server holds the document. Every server can then be deployed the same way behind a load balancer, with no separate home / static / doc worker configuration. Requires `GRIST_FLEET=true` and the `installationFleet` feature in an Enterprise activation key ([commit](https://github.com/gristlabs/grist-core/commit/2def9e86))

## Contributions

* Grist Labs: @berhalak, @dsagal, @georgegevoian, @paulfitz, @Spoffy
* @manuhabitela: keyboard and screen-reader support in modals and popups (#2371)
* @fflorent: refresh and expand the database documentation (#2458), localize remaining UI strings (#2451)

### Translations

* Barna Kovács
* linke
* Martin Harari Thuresson
* npluto

**Full Changelog**: https://github.com/gristlabs/grist-core/compare/v1.7.16...v1.7.17

[Join our Discord Community](https://discord.gg/MYKpYQ3fbP) if you'd like to get into development of Grist.
