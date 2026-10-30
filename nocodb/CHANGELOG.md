<img width="1865" height="1147" alt="Group 115" src="https://github.com/user-attachments/assets/1f72ed6f-1f2b-4f89-a033-66b572c6bd90" />

> ⚠️ **Timestamps include milliseconds.** On PostgreSQL and SQLite, date and time values in API responses, webhook payloads and CSV exports now include milliseconds (`12:34:56.000+00:00`). Check integrations that read dates in a fixed format.

> **MCP lists every tool.** The MCP server at `/mcp` now lists every tool. If Windsurf or VS Code Copilot shows too many tools, connect it again with the `/mcp-discovery` URL. [Learn more](https://docs.nocodb.com/docs/mcp#clients-that-cap-the-tool-list)

> **Password changes sign out your apps.** Changing your password deletes your API tokens and disconnects apps you authorized with OAuth. [Learn more](https://nocodb.com/docs/product/account-settings/api-tokens#password-changes-delete-your-tokens)

## Improvements

- **Classic apps on phones** - Published classic apps fit phone screens, including the sidebar, toolbars, record forms, dashboard groups and pivot widgets.
- **Group by more field types** - Classic app pages group by Links, Formula, Lookup, Rollup and link count fields, and List widgets get a group by setting. [Learn more](https://docs.nocodb.com/docs/classic-apps/layouts/table#grid)
- **Resize columns in classic apps** - Drag a column edge in a List widget to resize it. Builders save the width for everyone. [Learn more](https://docs.nocodb.com/docs/classic-apps/layouts/table#list)
- **Open records from view widgets** - Calendar, Timeline and Gantt widgets on a dashboard can open a record when you click it. [Learn more](https://docs.nocodb.com/docs/classic-apps/layouts/dashboard#configuring-widgets)
- **Hide widget titles** - Data, chart and number widgets in a classic app have a *Show title* switch.
- **Button visibility by role** - Page buttons in a classic app can show only to the roles you choose. [Learn more](https://docs.nocodb.com/docs/classic-apps/elements#buttons)
- **Reorder user filter tabs** - Builders drag user filter tabs into a new order. [Learn more](https://docs.nocodb.com/docs/classic-apps/elements#user-filters)
- **Sort Single Select by option order** - A sort on a Single Select field can follow the order of its options instead of A to Z. [Learn more](https://docs.nocodb.com/docs/product/tables/table-operations/sort#sort-a-single-select-field-by-option-order)
- **Sign out of other devices** - *Account* > *Security* signs you out everywhere except the current browser on NocoDB Cloud. [Learn more](https://docs.nocodb.com/docs/product/account-settings/authentication/sign-out-other-devices)
- **Templates on Home** - Home and the *New project* page show a template gallery on NocoDB Cloud, and projects built with AI start with a few sample records. [Learn more](https://docs.nocodb.com/docs/product/projects/create-project#from-template)
- **Greek** - NocoDB is now available in Greek. [Learn more](https://docs.nocodb.com/docs/product/account-settings/language)
- **MCP rate limits** - MCP has its own limit per account. A client that goes over it is told how long to wait.
- **MCP connected apps** - The list of connected apps shows when each app was last used. [Learn more](https://docs.nocodb.com/docs/mcp/connections#managing-and-removing-access)
- **OAuth consent screen** - The consent screen shows where you will be sent and warns when an app is not verified by NocoDB.
- **Live updates** - Gallery, Kanban, Map, dashboards and classic app record review refresh in place when collaborators edit.

## What's Fixed

- **Workflows and webhooks** - *When record updated* workflows and update webhooks run when records are linked or unlinked through the API, paste or a foreign key change. [Learn more](https://docs.nocodb.com/docs/workflows/nodes/trigger-nodes/record-updated#how-it-works)
- **Formulas** - Formulas with `?` inside text evaluate, Checkbox values act as 1 and 0 in PostgreSQL formulas, and XOR results can be filtered.
- **Filters** - *is blank* filters on Rollups work, and *like* filters on User fields match names only.
- **Links** - Self-linking one-to-one fields show the linked record, and duplicated projects keep their links.
- **Copying data** - Duplicating and importing a project keeps Long Text and JSON values longer than 100,000 characters.
- **Classic apps** - Search in the builder, link pickers in forms, Timeline labels, default page names, unhidden form fields, list scrollbars and conditional row colors behave as expected.
- **Sharing** - The classic app *Share* dialog can give an existing member a higher role, and a second invite keeps the first invite link working.
- **Attachments** - Escape and arrow keys work in the attachment preview everywhere it opens.
- **Tables** - A new table can take a trashed table's name, even near the database name length limit.
- **SQL Server and Oracle** - Sorts that repeat a field work on SQL Server, and on Oracle a Number field converts to Decimal and text formulas sort.
- **AI chat** - Chat works with Claude Opus 5.5, Sonnet 5.5 and Fable 5.1 integrations.
- **Sign-in** - Forgetting your password no longer signs you out, and sign-in errors show one message for every case.

## Self-Hosting Notes

- **First sign-up** - On a new licensed install, the first super admin gets the default workspace and organization without a restart.
- **License refresh** - *Refresh* on the License page, or a restart, activates a license that shows as pending. [Learn more](https://docs.nocodb.com/docs/self-hosting/license-activation#refresh-license)
- **Secure attachments** - Setting only `NC_ATTACHMENT_ACCESS_CONTROL_ENABLED=true` now turns on secure attachments, so `/download` and `/dl` stop serving files. Use the signed URLs that attachment responses return. [Learn more](https://docs.nocodb.com/docs/self-hosting/environment-variables#storage)
- **Local databases** - ClickHouse on a private network, and MySQL or PostgreSQL over a Unix socket, need `NC_ALLOW_LOCAL_EXTERNAL_DBS=true`. [Learn more](https://docs.nocodb.com/docs/self-hosting/environment-variables#product-configuration)
- **MCP tokens** - MCP token secrets are stored hashed and shown only once. Tokens already in your MCP clients keep working.
- **Long table names** - New SQL Server and Oracle table names are limited to 125 characters.
- **Security hardening** - Sign-up, invitations, OAuth, shared views, data exports, database connections and stored secrets are hardened, and dependencies are patched.

---

For more details on the features introduced in 2026.10.0, see the [2026.10.0 changelog](https://docs.nocodb.com/docs/changelog/2026.10.0).


- [**closed**] Changing password records a duplicate sign-in audit event and drops the current session if OAuth token revocation fails [#14939](https://github.com/nocodb/nocodb/issues/14939)
- [**closed**] Add Greek (el) language support [#14936](https://github.com/nocodb/nocodb/issues/14936)
- [**closed**] 🐛 Bug: Node.js version has to be updated [#14874](https://github.com/nocodb/nocodb/issues/14874)
- [**closed**] 🐛 Bug: Google OAuth doesn't function as expected [#14048](https://github.com/nocodb/nocodb/issues/14048)
- [**🔦 Type: Feature**] 🔦 Feature: postfix the object name with the column name of the table with the constraint to allow the user to recognise the DB-Link [#13871](https://github.com/nocodb/nocodb/issues/13871)
- [**🔦 Type: Feature**] 🔦 Feature: Keyboard navigation associated with fk_field [#13830](https://github.com/nocodb/nocodb/issues/13830)
- [**🔦 Type: Feature**] 🔦 Feature: Form conditional logic: Lookup fields not available as condition source for "Show on conditions" [#13803](https://github.com/nocodb/nocodb/issues/13803)
- [**closed**] 🐛 Bug: bulkUpdate silently fails — prepareMetaUpdateQuery stub returns undefined, generates invalid SQL [#13778](https://github.com/nocodb/nocodb/issues/13778)
- [**closed**] 🐛 Bug: [ExternalDB][SQLite]DATEADD formula returns blank when using a field reference as the second argument (SQLite) [#13538](https://github.com/nocodb/nocodb/issues/13538)
- [**🔦 Type: Feature**] 🔦 Feature: MCP OAuth 2.1 support for AI agent integration (claude.ai, etc.) [#13363](https://github.com/nocodb/nocodb/issues/13363)
- [**closed**] 🐛 Bug: Chatwoot widget does not follow app dark/light theme toggle [#13148](https://github.com/nocodb/nocodb/issues/13148)
- [**🔦 Type: Feature**] 🔦 Feature:  records group only support 3 groups nested , if it can support as many as possible [#12786](https://github.com/nocodb/nocodb/issues/12786)
- [**🔦 Type: Feature**] 🔦 Feature: Add UTF-8-BOM (utf-8-sig) encoding option for CSV exports to properly handle special characters [#12671](https://github.com/nocodb/nocodb/issues/12671)
- [**🔦 Type: Feature**] 🔦 Feature: Add "K" "M" "B" suffix to currency field [#12657](https://github.com/nocodb/nocodb/issues/12657)
- [**🔦 Type: Feature**] 🔦 Feature: Add create table and create field functions in the MCP server [#12588](https://github.com/nocodb/nocodb/issues/12588)
- [**🔦 Type: Feature**] 🔦 Feature: [Seft hosted] Allow setup NC_MAX_TEXT_LENGTH with environment variables [#12500](https://github.com/nocodb/nocodb/issues/12500)
- [**👋 For : Community or Good First Issue**] 🐛 Bug: [Self hosted] Issues with French Translation in NocoDB [#12453](https://github.com/nocodb/nocodb/issues/12453)
- [**🔦 Type: Feature**] 🔦 Feature: Allow pinning multiple columns in table view [#11723](https://github.com/nocodb/nocodb/issues/11723)
- [**🔦 Type: Feature**] 🔦 Feature: allow creating new fields for csv imports into existing tables [#11190](https://github.com/nocodb/nocodb/issues/11190)
- [**🔦 Type: Feature**] 🔦 Feature: Form Conditions Based On Linked Record [#11132](https://github.com/nocodb/nocodb/issues/11132)
- [**🔦 Type: Feature**] 🔦 Feature: Export calendar view data in .ics format [#10228](https://github.com/nocodb/nocodb/issues/10228)
- [**🔦 Type: Feature**] 🔦 Feature: Calendar view on mobile [#9825](https://github.com/nocodb/nocodb/issues/9825)
- [**🔦 Type: Feature**] 🔦 Feature: Add `HASH` formula [#9518](https://github.com/nocodb/nocodb/issues/9518)
- [**🔦 Type: Feature**] 🔦 Feature: see photos of other team members that have the same database open [#8275](https://github.com/nocodb/nocodb/issues/8275)
- [**🔦 Type: Feature**] 🔦 Feature: [Admin panel] The size of the Attachment should be controlled. [#8273](https://github.com/nocodb/nocodb/issues/8273)
- [**🔦 Type: Feature**] 🔦 Feature:  Allow screenhots (image jpeg) in Card comments. [#7429](https://github.com/nocodb/nocodb/issues/7429)
- [**🔦 Type: Feature**] 🔦 Feature: Incoming webhooks from other datasources [#7037](https://github.com/nocodb/nocodb/issues/7037)
- [**🔦 Type: Feature**] 🔦 Feature: Custom form view layout [#6908](https://github.com/nocodb/nocodb/issues/6908)
- [**🔦 Type: Feature**] 🔦 Feature: Rich Formatting in Email Webhooks [#4131](https://github.com/nocodb/nocodb/issues/4131)
