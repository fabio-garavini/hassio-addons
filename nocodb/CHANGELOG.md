<img width="1865" height="1147" alt="Feature release - 2026 09 0-OSS (1)" src="https://github.com/user-attachments/assets/77f634b7-695a-4f98-88ed-dcaa9b75175b" />

## Availability

| Feature | Community Edition | Cloud Free Plan | Paid Plans In Cloud/On-Prem |
| --- | :---: | :---: | :---: |
| NocoDB in Claude Connectors | ✅ | ✅ | ✅ |
| 1200% More MCP Tools | – | ✅ | ✅ |
| Rich Text Emails in Workflows | – | – | ✅ |

Rich Text Emails require the Plus plan and above on NocoDB Cloud. In the Community Edition, the MCP server keeps its record tools.


## NocoDB in Claude Connectors

NocoDB is now available in Claude Connectors, so a base can be connected to Claude from the connectors directory rather than adding the MCP URL manually. Once connected, Claude can use every MCP tool the connecting user's role allows, which as of this release is a set of 149 covering the whole workspace.

<img width="1280" height="1102" alt="claude-connectors" src="https://github.com/user-attachments/assets/9a241a7f-c90d-4bde-b3c4-665914eeb13d" />

## 1200% More MCP Tools

The MCP server has gone from 11 tools to 149, covering the whole workspace, not just records. Claude, ChatGPT, Cursor, or any MCP client can now build in NocoDB: stand up a table, wire a workflow to a webhook, assemble an interface page, or lock down permissions, all in one conversation.

Tools span tables, fields, views, filters, sorts, workflows, interfaces, dashboards, widgets, scripts, documents, webhooks, comments, permissions, Record-Level Security, row coloring, folders, members, and CSV import and export. Each wraps the same service as its REST API, so validation, permissions, and audit are identical, and every call respects the caller's role: viewers read, editors write, creators change schema.

<img width="1008" height="868" alt="mcp-tools" src="https://github.com/user-attachments/assets/d61251cb-7e12-491e-9ca2-fb353087bc21" />

[Learn more about MCP →](https://nocodb.com/docs/apis-and-mcp/mcp)

149 is just the start. We are already building the next set, and that is the one that changes business software for good.

## Rich Text Emails in Workflows

Workflow emails can now be formatted. The Send Email, SMTP, Gmail, and Outlook nodes share a rich text editor that supports headings, text styling, lists, colors, and links with custom anchor text. Workflow variables can be inserted anywhere in the body.

<img width="1137" height="781" alt="rich-text-email" src="https://github.com/user-attachments/assets/eb80d79a-974c-44c6-bb28-bffdfb1fcd71" />

[Learn more about the Send Email node →](https://nocodb.com/docs/workflows/nodes/action-nodes/send-email)

## Improvements

- **Buttons across interface pages** - Buttons can now be placed on table page headers, record review toolbars, dashboard group headers, and field groups inside a record sheet. Page-level buttons run an automation without a record, and *Go to interface page* can open a page in any interface in the base. [Learn more](https://nocodb.com/docs/interfaces/elements#buttons)
- **Drag and drop in List View** - Records in List View can be dragged across the hierarchy: drop one onto another to nest it, or onto a different parent to move it there. Sub-records travel with their parent, and the underlying links are updated for you. [Learn more](https://nocodb.com/docs/product/tables/views/view-types/list)
- **Create a linked record field inline** - When List View levels or nested records need a link that does not exist yet, click *Create a linked record field* to create it on the spot, in both the base view and the interface builder. [Learn more](https://nocodb.com/docs/product/tables/views/view-types/list#nested-records)
- **Date helpers in workflow expressions** - `$now()` returns the current time and `$dateAdd(date, amount, unit)` offsets it, for example `$dateAdd($now(), 3, 'days')`.
- **Faster Kanban** - The optimized Kanban board, previously a feature preview, is now the default everywhere, including the Community Edition. Stacks load progressively as you scroll.
- **Excel downloads of large tables** - Excel exports are streamed, so very large tables download reliably and produce smaller files.
- **Task progress in long documents** - The task count of a checklist document follows you into the header once the title scrolls out of view.

## What's Fixed

- **Nested lookups** - A lookup of a lookup shows every value in the grid and resolves correctly over many-to-one links, on MySQL, SQL Server, and Oracle.
- **Conditional rollups with Current User** - Rollup, lookup, and link fields whose conditions use Current User are computed for each user rather than served from a shared cache.
- **Sync reliability** - A table sync now always completes rather than staying in the syncing state, and editing an app sync saves without error.
- **Workflow record nodes** - Testing a Create record or Update record node reports any field key that does not match the target table, instead of writing a blank record.
- **Interface record sheets** - Edits made while stepping through records appear in the grid immediately, link and unlink actions offer *Undo*, and a record created inside a group stays in that group.
- **Interface keyboard navigation** - With a record sheet open, arrow keys move through the grid and the sheet follows, and Alt+Left and Alt+Right step between records.
- **Interface builder** - Adding a sort keeps the dropdown open, grouping an embedded linked view leaves the page behind it in place, and a launched interface reflects changes published from another tab.
- **Document checklists** - Ticking a task is reflected for every collaborator in realtime, and a new unchecked sub-item under a completed task renders without strikethrough.
- **Integration permissions** - Attempting to edit an integration created by someone else shows a clear message instead of signing you out.
- **MCP** - Sorting records works in the Community Edition, tokens without a base role receive a clear access denied response, and OAuth authorization completes from clients such as OpenAI's platform.
- **External sources** - An oversized page of results explains how to reduce fields or page size instead of reporting the source as unreachable.
- **Folders** - The *+* button on an external data source now offers *Folder* alongside *Table*, and a folder created from an item's *Move to* menu takes the item's position in the sidebar instead of the end of the list.

## Self-Hosting Notes

- **Community mode keeps Free features visible** - With *Show only community edition features* on, Workflows, Interfaces, and folders stay available, and plan-locked sub-features are hidden rather than shown as dead controls.
- **Security hardening** - Disabled or expired API tokens are rejected in the Community Edition, hidden fields stay hidden behind row color rules on shared views, comments are scoped to their base, and table visibility is enforced on every route.
- **Clearer PostgreSQL permission errors** - A schema change attempted without table ownership names the affected table in full, including quoted names with spaces or mixed case.
- **Paid field types on unlicensed deployments** - Field types not included in the Community Edition (UUID, AutoNumber, Color, unique constraints, and lookup limits) are now rejected by the API as well as the UI.

## Planned Breaking Change to API Datetime Format

<Callout type="info">This change was first announced in 2026.08.2 and is still planned for an upcoming release. It is not part of 2026.09.0. We are keeping the notice here so integrations can be prepared.</Callout>

On PostgreSQL and SQLite deployments, datetime values returned by NocoDB will move from second to millisecond precision:

| Today | Upcoming release |
| --- | --- |
| `2026-07-25 12:34:56+00:00` | `2026-07-25 12:34:56.000+00:00` |

- **Scope:** REST API responses, webhook payloads, and CSV/file exports. Values are formatted on read, so existing records are returned in the new format too. No data migration or backfill is required.
- **What to check:** Consumers that parse datetimes with a strict or fixed format may need to accept the millisecond component. Tolerant parsers such as Day.js and most ISO 8601 parsers are unaffected.
- **Filters:** Range filters and sorting are unaffected. Exact datetime equality filters compare at second precision, so they may not match values carrying non-zero milliseconds. Millisecond-aware filtering is planned as a follow-up.
- **Not affected:** MySQL, SQL Server, and Oracle connections keep second precision, formula-rendered datetimes stay at second precision, and the datetime display in the app is unchanged.

---

For more details on the features introduced in 2026.08.2, see the [2026.08.2 changelog](https://nocodb.com/docs/changelog/2026.08.2).

## Closed issues

- [**closed**] 🐛 Bug:Knex Timeout acquiring a connection [#14467](https://github.com/nocodb/nocodb/issues/14467)
- [**closed**] 🐛 Bug: Link record picker (compact/search view) shows raw table field order incl. system fields, ignoring shared Grid view config — expanded view is correct [#14448](https://github.com/nocodb/nocodb/issues/14448)
- [**closed**] 🐛 Bug: Currency field silently drops the minus sign on paste (default en-US locale) [#14413](https://github.com/nocodb/nocodb/issues/14413)
- [**closed**] Prevent loading 100+ administrative plugins on pub [#14392](https://github.com/nocodb/nocodb/issues/14392)
- [**closed**] 🔦 Feature: Introduce Search + "Select All" and "Clear All" in Link records modal [#12108](https://github.com/nocodb/nocodb/issues/12108)
- [**closed**] 🔦 Feature: List more field info in Link records modal [#12107](https://github.com/nocodb/nocodb/issues/12107)
- [**closed**] 🔦 Feature: filter by relation with autocomplete [#11430](https://github.com/nocodb/nocodb/issues/11430)
- [**closed**] 🔦 Feature: Make Link Filter Match Airtable [#11022](https://github.com/nocodb/nocodb/issues/11022)
- [**🔦 Type: Feature**] 🔦 Feature: Add filtering to rollups or allow filtering table by properties of linked records [#9895](https://github.com/nocodb/nocodb/issues/9895)
- [**🔦 Type: Feature**] 🔦 Feature: Link records -> Select all [#9589](https://github.com/nocodb/nocodb/issues/9589)
- [**🔦 Type: Feature**][**🔭 Scope : Project**] 🔦 Feature: App integrations should be per-project [#3402](https://github.com/nocodb/nocodb/issues/3402)
