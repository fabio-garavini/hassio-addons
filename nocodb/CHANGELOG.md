
<img width="1865" height="1147" alt="image" src="https://github.com/user-attachments/assets/c97fae32-5349-432f-beaf-1e8559e60a2f" />


## Availability

| Feature | Community Edition | Cloud Free Plan | Paid Plans In Cloud/On-Prem |
| --- | :---: | :---: | :---: |
| Account-Wide MCP Connections | – | ✅ | ✅ |
| Table Tools | ✅ | ✅ | ✅ |
| Summarize in Timeline View | – | – | ✅ |
| Track Specific Fields in Last Modified | ✅ | ✅ | ✅ |
| YouTrack Sync | – | – | ✅ |

Timeline View requires the Business plan and above on NocoDB Cloud, and App Sync requires the Plus plan and above.

## Account-Wide MCP Connections

One MCP connection now reaches every base you pick, with the tools you allow and never more than your own role. The server now has 199 tools, 50 more than 2026.09.0, including member and team management, attachment upload, upsert, audit logs, trash restore, and publishing.

<img width="2264" height="1566" alt="image" src="https://github.com/user-attachments/assets/6cfb0af9-0919-4810-a616-9c5252761860" />

[Learn more about MCP →](https://nocodb.com/docs/apis-and-mcp/mcp)

## Table Tools

A single Tools button in the view toolbar opens fields, relations, permissions, webhooks, and every other table tool in one panel.

<img width="1922" height="500" alt="image" src="https://github.com/user-attachments/assets/570cdf6d-06d5-4ea0-8abc-b3350e2ae68b" />


---

<img width="2498" height="1564" alt="image" src="https://github.com/user-attachments/assets/c75842b4-dd8e-4ec2-970a-1b7e4ecff9bf" />

[Learn more about Table Tools →](https://nocodb.com/docs/product/tables/table-operations/table-details)

## Summarize in Timeline View

Show a count, sum, average, or other summary under each day, week, or month of a Timeline.

<img width="1924" height="1210" alt="image" src="https://github.com/user-attachments/assets/d94328a2-a098-43a6-8669-43b1172fdfa8" />

[Learn more about Summarize →](https://nocodb.com/docs/product/tables/views/view-types/timeline#summarize)

## Track Specific Fields in Last Modified

Last modified time and Last modified by fields can watch only the fields you choose.

<img width="2290" height="1188" alt="image" src="https://github.com/user-attachments/assets/e8c45986-7db4-4d18-92f5-73a1f44dda71" />


[Learn more about tracking specific fields →](https://nocodb.com/docs/product/tables/fields/field-types/date-time-based/last-modified-time#track-specific-fields)

## YouTrack Sync

Sync [YouTrack](https://www.jetbrains.com/youtrack/) issues, comments, and users into NocoDB alongside the other ticketing sources.

<img width="2554" height="1596" alt="image" src="https://github.com/user-attachments/assets/688a9a8f-3128-4123-b7e2-25088f5dbdf4" />

[Learn more about YouTrack sync →](https://nocodb.com/docs/product/sync/app-sync/ticketing#youtrack)

## Improvements

- **Invite links** - Share one link to bring people into a base or workspace at the role you choose. [Learn more](https://nocodb.com/docs/product/collaboration/invite-links)
- **Base settings as a modal** - Settings open over your current view, with search. [Learn more](https://nocodb.com/docs/product/bases/actions-on-base)
- **Integrations page** - Your connections first, then one catalog grid with category filters. [Learn more](https://nocodb.com/docs/product/integrations)
- **Webhook trigger fields** - Pick individual body, header, and query values in later steps. [Learn more](https://nocodb.com/docs/workflows/nodes/trigger-nodes/webhook)
- **Variables in email links** - Send Email links can use workflow data as the address. [Learn more](https://nocodb.com/docs/workflows/nodes/action-nodes/send-email)
- **Interface forms** - Mark fields *Required*, update the open record from a form, and manage a button's forms in place. [Learn more](https://nocodb.com/docs/interfaces/layouts/form)
- **Interface filters** - Larger *Filter by* editor, with copy and paste between components.
- **Large number abbreviation** - Number, Decimal, and Currency fields can display 1,234,567 as 1.2M. [Learn more](https://nocodb.com/docs/product/tables/fields/field-types/numerical/number#large-number-abbreviation)
- **Excel exports** - Currency and Decimal export as real numbers. [Learn more](https://nocodb.com/docs/product/tables/table-operations/download)
- **Faster menus** - Dropdowns open instantly.
- **List View drag and drop** - Drops apply immediately.
- **Bulk update** - Redesigned *Update selected records* panel.

## What's Fixed

- **Grouped grids** - Rows stay in the right group after realtime updates.
- **Select options** - Adding a new option by paste or typing keeps existing options.
- **Imports, snapshots, and duplication** - Large tables and synced tables copy completely, and User values carry across workspaces.
- **Interfaces** - Link values, visibility rules, link pickers, attachment downloads, and overview cover images work as expected. Published pages keep working after a field is deleted, and pasted link values stay on new rows.
- **Bulk Update** - Updating all records fires webhooks and workflow triggers.
- **Kanban** - Reordering cards within a stack is saved.
- **Workflows** - Steps inside an Iterate loop get the current record when tested, and fields that combine several variables resolve correctly.
- **Views** - Calendar and Timeline views without a date range duplicate correctly, and shared List views open.
- **Renamed tables** - Formula display values keep working after a table rename.
- **Audit log** - Filtering by *Data* events returns results.
- **Documents** - Markdown with empty table cells pastes correctly.
- **API** - `null` for a v3 link field leaves links unchanged, v2 `in` filters with several dates return every match, and base-scoped tokens can list their bases.
- **MCP** - Removing someone from a base revokes only that base's connections, write tools accept what their read tools return, and records created from a template keep their links.
- **Invites** - Invite emails on self-hosted and Community Edition deployments sign people up correctly, workspace invites in the Community Edition send an email, and resending a base invite works.
- **Sign-in** - Brief network errors no longer sign you out, and self-hosted SSO buttons show again.
- **SQL Server** - Single-argument `CONCAT` works.
- **Airtable import** - One failing item no longer stops the import, and one-way links and nested filters import correctly.

## Self-Hosting Notes

- **Faster loading** - Static files are cached and compressed, so first loads are about 3.6 times smaller.
- **License server health** - Super admins see a warning with *Retry now* when the license server is unreachable. [Learn more](https://nocodb.com/docs/self-hosting/license-activation)
- **v3 API field changes** - Currency options use `currency_code` and `currency_locale`, and form validators `minValue`, `maxValue`, and `custom` are rejected.
- **CSV currency exports** - Currency values no longer include a thousands separator.
- **Security hardening** - Stricter audit log access, sanitized filenames, and patched dependencies.

---

For more details on the features introduced in 2026.09.0, see the [2026.09.0 changelog](https://nocodb.com/docs/changelog/2026.09.0).

-----------

- [**closed**] 🐛 Bug: The web page loads incredibly slowly. [#14623](https://github.com/nocodb/nocodb/issues/14623)
- [**closed**] 🐛 Bug: download CSV, JSON, XLSX must be downloaded to local disk not stored inside docker [#14617](https://github.com/nocodb/nocodb/issues/14617)
- [**closed**] i18n: interpolation tokens translated or dropped in several locale strings (fr/it/pt/es) [#14573](https://github.com/nocodb/nocodb/issues/14573)
- [**closed**] 🐛 Bug: Currency fields exported to Excel as text with U+202F thousands separator [#14563](https://github.com/nocodb/nocodb/issues/14563)
- [**closed**] 🐛 Bug: [Docs] Private Base available in Business or Scale plan? [#14529](https://github.com/nocodb/nocodb/issues/14529)
- [**closed**] Nocodb UI menus feels slow compared to competitors [#14499](https://github.com/nocodb/nocodb/issues/14499)
- [**closed**] 🐛 Bug: Unable to delete or modify fields after creation [#14299](https://github.com/nocodb/nocodb/issues/14299)
- [**closed**] 🐛 Bug: Random `ECONNREFUSED` to NocoDB Cloud API [#14279](https://github.com/nocodb/nocodb/issues/14279)
