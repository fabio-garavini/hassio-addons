## What's Changed

An infrastructure release. First, an upgrade for OAuth access token authentication in Grist's REST API: a new credential framework in grist-core, with the token validator and OIDC server (including CIMD registration and MCP server tools) shipping in the Full Grist edition, where OAuth apps also move from experiment to available by default. Second, a wave of security hardening: a metadata leakage in `GET /forms` is closed, server-rendered pages get stricter value escaping, websocket reconnection now requires a matching authenticated session, custom-widget URLs can no longer be same-origin, and triggers are disabled when a document is downloaded or copied. TypeScript was upgraded to 5.9.3, and several dependencies were bumped to clear known vulnerabilities.

### Improvements

#### API

* **OAuth support extended to home API endpoints**. `GET /orgs`, `GET /orgs/:oid/workspaces`, `POST /workspaces/:wid/docs`, and a new `GET /profile/user` now accept OAuth tokens, with resource-level filtering so a scoped token sees only the orgs and documents it was granted, and is rejected when creating documents in un-granted workspaces or orgs. ([commit](https://github.com/gristlabs/grist-core/commit/f481fd1d))

#### Internal / infrastructure

* **TypeScript upgraded to 5.9.3**, with `tsc` and `esbuild` targets bumped to es2020. ([commit](https://github.com/gristlabs/grist-core/commit/7adf2e6c))
* **External storage configuration tidied**. Each storage backend now owns its option spec, and a configured S3 bucket is probed at startup so a misconfiguration (such as a missing `AWS_REGION`) fails fast at startup rather than mid-request. ([commit](https://github.com/gristlabs/grist-core/commit/c4843f25))
* **Translation keys cleaned up to unblock auto-pruning**. Five call sites passed a variable rather than a literal to `t()`, hiding the keys from the i18next scanner; each is now wrapped in a helper with an explicit switch so every key is visible. Orphaned onboarding-choice and theme-label keys were migrated to the scopes the runtime actually looks them up under, fixing labels that previously always showed in English. (#2368)
* **Dependency bumps**. `ws` 8.18.0 to 8.20.1 (fixes an uninitialized memory disclosure in `websocket.close()`) (#2370), `axios` 1.15.2 to 1.16.0 (the fetch adapter now enforces `maxBodyLength` and `maxContentLength`) (#2375), `tmp` 0.2.5 to 0.2.6 (#2369), `shell-quote` 1.8.1 to 1.8.4 (#2386), and an upgrade of `picomatch`, `minimatch`, `glob`, and `serialize-javascript` that cuts the high-severity advisories reported by `yarn audit` (#2381).

#### Documentation

* **README updated for the Quick setup first-run flow**. Quickstart, Admin Panel, Logins, and building-from-source sections now describe the boot-key login and Quick setup wizard, with a new `GRIST_IN_SERVICE` entry in the env var table. (#2366)

### Fixes

#### Security

* **Harden value interpolation in server-rendered pages**. Values embedded into inline `<script>` blocks in `sendAppPage` and `OAuth2Clients` are now escaped with `jsesc` and inserted without interpreting `String.replace` patterns (such as `$'` and `$&`), and `openerOrigin` is canonicalized to its bare origin. ([commit](https://github.com/gristlabs/grist-core/commit/4ced8064))
* **Require a matching authenticated session to reconnect a websocket**. A `clientId` alone is no longer enough to attach to an existing session; the new connection must belong to the same authenticated user, so a `clientId` cannot be used on its own to impersonate a user. ([commit](https://github.com/gristlabs/grist-core/commit/d5a308df))
* **Disallow same-origin custom-widget URLs**. A new `disallowCustomWidgetUrl()` helper refuses widgets whose URL is same-origin or on Grist's configured base domain, as defense in depth against an XSS payload being weaponized through a widget URL. ([commit](https://github.com/gristlabs/grist-core/commit/f579977c))
* **Disable triggers when a document is downloaded or copied**. Webhooks and email triggers are turned off in a downloaded or copied document and must be re-enabled by hand, preventing accidental sends from forks and clones. Webhook secrets are also regenerated correctly when a document with webhooks is uploaded. ([commit](https://github.com/gristlabs/grist-core/commit/7b2248bd))
* **Sanitize link URLs in two more places**. URLs from the `next` parameter on `/welcome/select-account` are now sanitized and required to be same-origin, and URLs in document tours are sanitized too. ([commit](https://github.com/gristlabs/grist-core/commit/5d0a90a1))
* **Close a metadata leakage in `GET /forms`**. The endpoint read table metadata directly instead of through `fetchMetaTables`, and did not check that the section was actually a form. Anyone could pass the section ID of a non-form widget and read metadata that access rules would otherwise censor. ([commit](https://github.com/gristlabs/grist-core/commit/14694156))

#### Other

* **Crash instead of silently failing when login middleware cannot initialize**. When `GRIST_IN_SERVICE=true` and the configured identity provider is unreachable at startup, the server now exits rather than falling back to the boot-key login page, so an auto-restart can retry instead of leaving users unable to sign in. (#2384)
* **Fix card widget bugs**. New card widgets no longer borrow the record card's layout while record cards are disabled, and a card whose saved layout references only stale fields now falls back to a default layout instead of throwing and leaving the widget broken. (#2379)

### Full Grist edition extensions

The Full Grist edition ships OAuth apps, an OIDC server, and an MCP server on top of grist-core.

#### OAuth apps

* **OAuth apps are now available by default**. The experiment flag was removed now that the feature is ready, so all full Grist users can register and manage OAuth apps without opting in. ([commit](https://github.com/gristlabs/grist-core/commit/5d229a2f))

#### OIDC server

* **CIMD registration support**. New `GRIST_OIDC_CIMD_ENABLED` and `GRIST_OIDC_CIMD_ALLOWED_HOSTS` environment variables enable Client ID Metadata Document registration, and the `oidc-provider` library was updated. ([commit](https://github.com/gristlabs/grist-core/commit/af235f1b))
* **Optional `client_id` for OAuth grants, plus a portless loopback fix**. Loopback `redirect_uris` from a terminal app or CIMD flow that omit `application_type` are now treated as native clients, so `localhost` callbacks are accepted instead of rejected. The CIMD flow no longer requires registering clients in the home database. ([commit](https://github.com/gristlabs/grist-core/commit/7773bfe9))
* **JWKS handling cleaned up**. JWKS loading moved from `ext/` to `app/`, removing a misleading warning when no JWKS is configured and surfacing a clear error only if a signing operation is ever actually needed. ([commit](https://github.com/gristlabs/grist-core/commit/4b228add))

#### MCP server

* **MCP server improvements**. New `list_attachments` and `get_attachment_url` tools, stricter `doc_id` input validation, a `grist_` prefix on all tool names to avoid collisions with other tools, and smoke tests for the remaining endpoints. ([commit](https://github.com/gristlabs/grist-core/commit/ce1d7640))
* **MCP endpoints put behind the API throttle**. Throttle middleware moved to the usage tracker and is now wired through to the MCP doc endpoint. ([commit](https://github.com/gristlabs/grist-core/commit/41e63cae))
* **Per-tool permission checks on the MCP endpoint**. Each MCP tool now enforces the OAuth scopes it requires, a user-profile tool was added to the MCP home endpoint, OIDC token requests support resource indicators, and tool descriptors gained titles and annotations. ([commit](https://github.com/gristlabs/grist-core/commit/d5d0eff2))

#### Other

* **Restore the missing site-settings page in the full Grist edition**. The `/site-settings` route and its client rendering had been dropped, even though the "Site settings" menu item is shown in all non-SaaS deployments. The core billing pages are composed back into the enterprise and hosted factories, and the page now renders based on its `pageType` rather than the edition. ([commit](https://github.com/gristlabs/grist-core/commit/7f5dcdd1))

## Contributions

* Grist Labs: @dsagal, @georgegevoian, @jarek, @paulfitz, @Spoffy
* @fflorent: crash on login-middleware init failure so auto-restart can retry (#2384), bump dependencies to clear `yarn audit` advisories (#2381)

### Translations

* Alberto Azzalini
* Arif Budiman
* Barna Kovács
* Grégoire Cutzach
* Kevin Kandlbinder
* Martin Harari Thuresson
* SadCivilian

**Full Changelog**: https://github.com/gristlabs/grist-core/compare/v1.7.14...v1.7.15

[Join our Discord Community](https://discord.gg/MYKpYQ3fbP) if you'd like to get into development of Grist.
