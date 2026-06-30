## What's Changed

Airtable imports of large schemas no longer time out. Forms can substitute the new record's ID into a redirect URL with `{{ID}}`. ACL condition editors no longer render blank in Firefox below 100% zoom. The Quick Setup flow gained a telemetry toggle and a recommendation to use getgrist.com authentication. Two new Admin Panel boot probes warn when document data may not survive a restart and report how outgoing requests are gated. Building grist-core from source now produces the full edition by default, with `yarn install:community` for the previous behavior. In the full edition, OAuth apps now support OAuth Dynamic Client Registration (RFC 7591), so OAuth and MCP (Model Context Protocol) clients can register without being pre-provisioned, and apps can manage webhooks with just the `doc:webhooks` permission instead of the broader `doc.schema:write`.

### Improvements

* Forms
  * Redirect URLs can substitute the submitted record's ID with `{{ID}}`, so a form can send the user to a page about their own submission (#1831)
* Airtable import
  * Large schemas are imported by submitting `ModifyColumn` actions in batches of 25, avoiding gateway timeouts on bases with many columns ([commit](https://github.com/gristlabs/grist-core/commit/f8c45df3))
* Custom widgets
  * Reverted a restriction that disallowed same-origin custom-widget URLs, which had broken some unusual but legitimate setups ([commit](https://github.com/gristlabs/grist-core/commit/eb483ef5))
* Quick Setup
  * Telemetry can be turned on during the Quick Setup flow, instead of only from the Admin Panel or an environment variable (#2419)
  * The authentication step recommends getgrist.com authentication with a hero card when no other provider is configured (#2410)
* Admin Panel
  * New "persist-data" boot probe warns when documents and the home DB sit on ephemeral storage and would be lost on restart (the Docker default with no volume at `/persist`, a RAM filesystem, or the container's root mount). Shown in the Admin Panel and as a banner on the Backups page; external storage or Postgres count as durable (#2396)
  * New "Outgoing requests" boot probe and Security Settings entry report how user-triggered outgoing requests (`REQUEST()`, webhooks, Import from URL) are gated by `GRIST_PROXY_FOR_UNTRUSTED_URLS` (#2294)
  * Edition is now its own card, the legacy Enterprise toggle is gone, switching edition clears the activation key, and the trial banner links to Admin Panel / Edition ([commit](https://github.com/gristlabs/grist-core/commit/3b2ee8e8))
* Build / packaging
  * `yarn install` in grist-core now builds the full edition by default, via a post-install hook that downloads the `ext` material from grist-ee. Use `yarn install:community` to skip it (the previous behavior) or `yarn install:full` to opt in explicitly. The chosen edition is saved to `.grist-edition`, `GRIST_EDITION` takes precedence, and `GRIST_SKIP_EXT_AUTOSETUP` skips the hook for contexts where extensions are installed manually (Docker builds, grist-desktop, grist-static) ([commit](https://github.com/gristlabs/grist-core/commit/b0fa5fb8))
* Internal / infrastructure
  * File uploading refactored so uploads route to the correct doc worker (doc-specific endpoints) or travel in the main request (imports), in preparation for simpler multi-server configuration ([commit](https://github.com/gristlabs/grist-core/commit/22343c37))
  * Bump `@gristlabs/node-sqlite3` (#2392)
  * Test database connection now verifies it points at the database the caller asked for, fixing `DocApiMisc` share tests that failed after certain other suites (#2402)

### Fixes

* Duplicate document and Save Copy no longer fail with "Unknown Host" when both `GRIST_PROXY_FOR_UNTRUSTED_URLS` and `APP_DOC_INTERNAL_URL` are set, since trusted internal URLs now use a direct fetch instead of the untrusted-URL proxy (#2344)
* ACL condition editors no longer render blank in Firefox at browser zoom below 100% (#2390)
* Undo no longer fails for certain action bundles that combine a table or column rename with a column removal in the same step. Normal web-client editing was unaffected, since those happen as separate bundles (#2387)
* Locale document setting description now correctly says it affects only number formatting and the default currency, not date formatting (#2397)

### Full Grist edition extensions

* OAuth apps
  * Dynamic Client Registration (RFC 7591): OAuth and MCP clients can register without being pre-provisioned, enabled with `GRIST_ENABLE_OIDC_DCR`. The `POST /oidc/reg` endpoint is rate-limited (`GRIST_OIDC_DCR_RATE_LIMIT`), clients can register without specifying scopes (common for MCP servers), and a Housekeeper job prunes clients with no grants or only expired ones ([commit](https://github.com/gristlabs/grist-core/commit/66c2a94f)). See the [OAuth apps](https://support.getgrist.com/oauth-apps/) and [Connected apps](https://support.getgrist.com/connected-apps/) docs.
  * Apps can manage webhooks with just the `doc:webhooks` permission. Webhook changes used to count as editing document structure, which required `doc.schema:write`; they now go through a helper that only touches the webhooks table, so the narrower permission is enough ([commit](https://github.com/gristlabs/grist-core/commit/c8554ce4))
* Assistant
  * Conditional style tools are now part of the v2 AI assistant, and `set_table_conditional_styles` is no longer destructive: it changes styles only, with no data loss ([commit](https://github.com/gristlabs/grist-core/commit/42d1d441))
* MCP
  * Telemetry added for MCP calls (`mcpToolCall` and `mcpSessionStart` events, full telemetry level only), counting tool calls and unique sessions per doc and per org. The server now reads client name and version on initialize ([commit](https://github.com/gristlabs/grist-core/commit/5c5b0c3e)). The [Grist MCP server](https://support.getgrist.com/mcp/) is now documented
  * Further MCP tool work (hosted Grist only): `create_table` builds columns in one atomic transaction, new tools for widget field config (column width) and table conditional styles, `add_records`/`update_records` preserve unspecified fields across mixed-shape records, widget tools gained sort and per-column filter support, and a fix for self-referential `Ref` columns with a show column ([commit](https://github.com/gristlabs/grist-core/commit/8d96677d))
* Automations and Audit Logs
  * Dropped the "New" tag from Automations and Audit Logs, and changed the Audit Logs tag to "full Edition" ([commit](https://github.com/gristlabs/grist-core/commit/70e32cb4))

## Contributions

* Grist Labs: @berhalak, @dsagal, @georgegevoian, @paulfitz, @Spoffy
* @guillett: id substitution in form redirect URLs (#1831)
* @eloupias: direct fetch for trusted URLs behind a proxy (#2344)
* @fflorent: bump `@gristlabs/node-sqlite3` (#2392)

### Translations

* Arif Budiman
* Barna Kovács
* Grégoire Cutzach
* Kévin DUPOND
* Martin Harari Thuresson

**Full Changelog**: https://github.com/gristlabs/grist-core/compare/v1.7.15...v1.7.16

[Join our Discord Community](https://discord.gg/MYKpYQ3fbP) if you'd like to get into development of Grist.
