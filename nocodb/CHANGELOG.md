<img width="1865" height="1147" alt="release" src="https://github.com/user-attachments/assets/b6a06d8d-3eae-4c55-9faa-6b949f2d257f" />

## Availability

| Feature | Community Edition | Cloud Free Plan | Paid Plans In Cloud/On-Prem |
| --- | :---: | :---: | :---: |
| Search All Fields | ✅ | ✅ | ✅ |
| Formulas Across Linked Records | ✅ | ✅ | ✅ |
| Rollup Formulas | ✅ | ✅ | ✅ |
| New Workflow Triggers | ✅ | ✅ | ✅ |
| Kanban Stack Summaries | ✅ | ✅ | ✅ |
| Group Records in Gallery View | ✅ | ✅ | ✅ |
| Several Date Ranges in a Calendar | – | – | ✅ |
| Print Views | ✅ | ✅ | ✅ |
| Comment Threads | – | ✅ | ✅ |
| Ask for Data in the Command Palette | – | ✅ | ✅ |
| Enterprise Vaults | – | – | ✅ |


## Search All Fields

Search in Grid and Gallery views now looks in every field at once, and the command palette finds records across the open project. Search matches what cells show, such as formatted numbers, dates and user names. A search index keeps results fast on large tables.

<img width="2772" height="520" alt="search-all-fields" src="https://github.com/user-attachments/assets/013edce6-4351-4713-a0f1-53df31387d2e" />


[Learn more about search →](https://nocodb.com/docs/product/tables/table-operations/search)

## Formulas Across Linked Records

A formula can now read a field of a linked record, such as `{Project}.{Client}.{Region}`, up to four links away. When a link returns many records, combine the values with `SUM`, `AVG`, `MIN`, `MAX` or a count, such as `{Tasks}.{Hours}.SUM()`.

<img width="2216" height="1200" alt="formula-linked-fields" src="https://github.com/user-attachments/assets/3ffa5a73-66a8-4945-92a2-09f30d9140e5" />


[Learn more about referencing linked records →](https://nocodb.com/docs/product/tables/fields/field-types/formula/formula#reference-fields-in-linked-records)

## Rollup Formulas

A Rollup field can now aggregate with a formula. Choose *Formula* as the aggregate function and write an expression over `values`, such as `ROUND(SUM(values) * 1.15, 0)` or `ARRAYJOIN(ARRAYUNIQUE(values), ", ")`.

<img width="2216" height="1480" alt="rollup-formula" src="https://github.com/user-attachments/assets/89e73334-eeef-4818-8be0-c4ebc31b9557" />


[Learn more about rollup formulas →](https://nocodb.com/docs/product/tables/fields/field-types/links-based/rollup#rollup-formulas)

## New Workflow Triggers

*When a field changes* runs a workflow only when a field changes from one value you choose to another, for example when a deal's Stage changes from Negotiation to Won. *When record created or updated* covers both events in one trigger. *When another workflow completes* starts a workflow when another one succeeds, fails or is cancelled.

<img width="1820" height="1440" alt="workflow-field-changes" src="https://github.com/user-attachments/assets/32ba336f-0129-4109-b311-c67648260f5b" />

[Learn more about trigger nodes →](https://nocodb.com/docs/workflows/nodes/trigger-nodes)

## Kanban Stack Summaries

Each Kanban stack can show a total in its footer, such as the sum of Budget, and colour it by rules you set. Boards can also stack by a User field or a link to one record, so each person or each client gets a stack.

<img width="3000" height="1400" alt="kanban-stack-summaries" src="https://github.com/user-attachments/assets/be99e8ec-8614-4eb7-a53a-271f9c568eb7" />

[Learn more about stack summaries →](https://nocodb.com/docs/product/tables/views/view-types/kanban#summarize-each-stack)

## Group Records in Gallery View

Gallery views can now group cards by up to five fields, like Grid views. Each group shows its value and record count, and holds its own cards.

<img width="2880" height="1800" alt="gallery-group-by" src="https://github.com/user-attachments/assets/100807d4-f49b-4961-8a19-fd498fade947" />

[Learn more about grouping records →](https://nocodb.com/docs/product/tables/table-operations/group-by)

## Several Date Ranges in a Calendar

A Calendar view can now show more than one date range, such as a drafting period and a publish date. Each range has its own label and color, and a record shows once for each range it has dates in. A view can hold up to 20 ranges.

<img width="2216" height="1500" alt="calendar-date-ranges" src="https://github.com/user-attachments/assets/c6070c8d-d6af-4b43-937a-d35cc832e340" />

[Learn more about several date ranges →](https://nocodb.com/docs/product/tables/views/view-types/calendar#showing-several-date-ranges)

## Print Views

Grid views can now be printed on paper or to a PDF. Choose the paper size, layout, font size and the range of records, and the print follows the fields, filters, sorts and grouping of the view.

<img width="50%" alt="print-settings" src="https://github.com/user-attachments/assets/8b1502e5-3774-403d-8a63-b9266274e872" />

[Learn more about printing a view →](https://nocodb.com/docs/product/tables/views/actions-on-view#print-view-)

## Comment Threads

Reply to a record comment to keep the answer next to it. React with an emoji and pin the comment that matters. Comments posted since your last visit are marked as new, and *Summarize* sums up a long thread.

<img width="2304" height="1700" alt="comment-threads" src="https://github.com/user-attachments/assets/99d98cff-4dad-4fcf-9614-c115e00b5b9d" />

[Learn more about record comments →](https://nocodb.com/docs/product/tables/records/expand-record#record-comment)

## Ask for Data in the Command Palette

Type a request in plain words in the command palette, such as `status is running` or `sum of amount`. It shows how it read the request and the result before anything runs, and it can filter, sort, group, answer questions and update records.

<img width="2880" height="1800" alt="command-palette" src="https://github.com/user-attachments/assets/f1621ead-d9ed-41e8-8149-6907d4a4e4d9" />

[Learn more about asking for data in words →](https://nocodb.com/docs/product/getting-started/command-palette#ask-for-data-in-words)

## Enterprise Vaults

Integration credentials can now come from your own secrets manager: HashiCorp Vault, AWS Secrets Manager, Azure Key Vault, Google Secret Manager or CyberArk Conjur. NocoDB stores a reference and fetches the secret when it needs it.

<img width="1880" height="1050" alt="vaults" src="https://github.com/user-attachments/assets/24147ce4-aad2-4d94-a5ae-6bbde7118b43" />

[Learn more about Enterprise Vaults →](https://nocodb.com/docs/product/integrations/vaults)

## Improvements

- **A link as the display value** - A link to a single record can be the display value of a table, so records show the linked record's name. [Learn more](https://nocodb.com/docs/product/tables/fields/display-value#use-a-link-as-the-display-value)
- **Open linked records in a table** - *View all in table* opens the related table filtered to the records linked to the current one. [Learn more](https://nocodb.com/docs/product/tables/fields/field-types/links-based/links#open-linked-records-in-a-table)
- **Open records from a Lookup** - Click a record in a Lookup of a link field to open it, the same as in the link field. [Learn more](https://nocodb.com/docs/product/tables/fields/field-types/links-based/lookup)
- **Notify people added to a User field** - A User field can notify people, in NocoDB and by email, when they are added to a record. [Learn more](https://nocodb.com/docs/product/tables/fields/field-types/user-based/user#notify-users-when-they-are-added-)
- **Scan codes into forms** - Form fields can be filled by scanning a QR code or a barcode with the camera. [Learn more](https://nocodb.com/docs/product/tables/views/view-types/form#fill-a-field-by-scanning-a-code-)
- **Edit rich text as Markdown** - The expanded rich text editor can switch to the Markdown source. [Learn more](https://nocodb.com/docs/product/tables/fields/field-types/text-based/rich-text#edit-the-markdown-directly)
- **Lookups next to their link** - Lookup and Rollup fields added from a link field's menu go right after that field.
- **Tables and images in rich text** - Rich text fields can hold tables, and images in them can be resized. [Learn more](https://nocodb.com/docs/product/tables/fields/field-types/text-based/rich-text)
- **Fit a column to its content** - Double-click the edge of a column header to fit the column to its content. Double-click the edge of the row number header to fit every column.
- **Preferences** - Theme, language and the first day of the week now have one page in your account. Date pickers can start the week on Sunday. [Learn more](https://nocodb.com/docs/product/account-settings/preferences#week-starts-on)
- **Field types in your language** - Field type names follow the language you use NocoDB in.
- **External databases** - On read-only sources and synced fields, select options can be recolored and reordered, and Decimal and Percent fields can change precision. SQL views show their fields in *Manage fields*, read-only.
- **Script API** - Scripts can write any number of records at once, add or remove single links, upsert, count, and filter with API v3 filters. [Learn more](https://nocodb.com/docs/workflows/scripts/changelog#november-20-2026)
- **Repeat a step a number of times** - The Iterate step can loop a set number of times, up to 4,000, as well as over a list. [Learn more](https://nocodb.com/docs/workflows/nodes/flow-nodes/iterate#repeat-a-number-of-times)
- **Editors can run workflows** - Editors can open workflows, follow live updates, and run workflows that have a manual trigger. They see only the runs they started.
- **Who started a run** - Run history records who started a manual run or a retry.
- **Automate a table** - *Automate* in the table toolbar lists the workflows and scripts that use the table, and starts a new workflow from a table trigger. [Learn more](https://nocodb.com/docs/workflows/create-workflow#automate-from-a-table)
- **No workflow loops** - A workflow no longer starts again from its own changes, and run history shows these runs as *Not run* with the reason.
- **WORKDAY formulas** - `WORKDAY` and `WORKDAY_DIFF` add and count working days, with optional holidays. [Learn more](https://nocodb.com/docs/product/tables/fields/field-types/formula/date-functions#workday)
- **Formula syntax** - `=` works as equality, and `IF` with no else value returns blank.
- **More formula functions** - New functions include `TEXTSPLIT`, `SUBSTITUTE`, `IS_SAME`, `DATETIME_PARSE`, `FROMNOW`, `TODAY` and `ARRAYCOUNT`, which counts the options in a Multi select or the users in a User field. [Learn more](https://nocodb.com/docs/product/tables/fields/field-types/formula/date-functions#is_same)
- **Calendar date filters** - *Is within* can match this, last or next calendar week, month or year, or a date range you pick.
- **Expand all groups** - *Expand all* and *Collapse all* reach every group level, and *Expand subgroups* opens one branch. [Learn more](https://nocodb.com/docs/product/tables/table-operations/group-by#expand-and-collapse-groups)
- **Records without dates in Timeline** - A side panel lists the records that have no bar because a date is missing. [Learn more](https://nocodb.com/docs/product/tables/views/view-types/timeline#records-without-dates)
- **List View** - Freeze the first column, and show summaries for each group with a grand total. [Learn more](https://nocodb.com/docs/product/tables/views/view-types/list#field-summary)
- **Search inside documents** - The command palette finds documents by title and by content. [Learn more](https://nocodb.com/docs/product/docs/search-and-navigation#search-across-documents)
- **Restore deleted documents** - Deleted documents and their sub-pages go to Project Trash, where you can restore them. [Learn more](https://nocodb.com/docs/product/projects/project-trash)
- **Duplicate with sub-pages** - Duplicating a document also copies its sub-pages. [Learn more](https://nocodb.com/docs/product/docs/actions-on-document#duplicate-document)
- **Search comments** - Search a record's comments, and type `:` to insert an emoji. [Learn more](https://nocodb.com/docs/product/tables/records/expand-record#search-comments)
- **Who can download data** - A table permission limits CSV, Excel and JSON download to chosen roles, users or teams. [Learn more](https://nocodb.com/docs/product/collaboration/table-permissions#table-download-permission)
- **CSV import in classic apps** - Table pages can let people import records from a CSV file. [Learn more](https://nocodb.com/docs/classic-apps/builder#import-records-from-a-csv-file)
- **Preview utilization** - A classic app link picker shows how busy each person is now and after you link them. [Learn more](https://nocodb.com/docs/classic-apps/layouts/record-detail#preview-utilization)
- **Utilization for shared tasks** - Timeline utilization accepts a many-to-many link as the assignee, and groups can split multiple values. [Learn more](https://nocodb.com/docs/product/tables/views/view-types/timeline#utilization)
- **Safer saves** - Save asks before it overwrites a field that someone else changed while you were editing.
- **Offline edits** - Grid edits made while offline are saved when the connection returns.
- **Faster record edits** - Saving a record that has many links and lookups now reads far less table metadata. In our tests on a table with 5 links and 25 lookups, a save took up to 60% less time. Self-hosted setups that keep their cache in Redis gain the most.
- **Email a copy to the submitter** - Forms that require sign-in can email respondents a copy of their response.
- **Bulk actions from the cell menu** - Right-click a cell of selected records to update or delete them all.
- **Undo a delete** - Deleting records from the grid shows a toast with *Undo*.
- **Open in a new tab** - Middle-click opens tables, views and other navigation items in a new tab.
- **HubSpot access tokens** - A HubSpot connection can use a private app access token. [Learn more](https://nocodb.com/docs/product/integrations/create-connection#hubspot)
- **Opt-in MCP tools** - AI apps connected by sign-in can turn on `deleteBase`, `executeWorkflow` and `testHook` one at a time. [Learn more](https://nocodb.com/docs/mcp/connections#opt-in-tools)
- **Password changes** - Changing your password signs out your other sessions, and *Also disconnect apps* also revokes connected apps and tokens. [Learn more](https://nocodb.com/docs/product/account-settings/authentication/sign-out-other-devices#changing-your-password)
- **Accessibility** - Screen readers name icon buttons, field inputs, dialogs and rating stars.

## What's Fixed

- **Airtable import** - Imports from Airtable shared links work again after Airtable changed its share page. Two imports running at the same time no longer share a session. [Learn more](https://nocodb.com/docs/product/projects/import-project-from-airtable)
- **Security** - Hidden tables stay hidden in imports and comments, locked views can no longer be changed through group-by or filter side paths, private integrations work only for their owner, and SSO sign-in links can be used only in the browser that started the sign-in. Classic app users get only their app's teams from the API.
- **Shared views** - Grid and gallery views shared by link show their groups again when the view groups records by a hidden field.
- **Grouped grids** - *Insert above* and *Insert below* keep the new record in its group, and scrolling inside a large group is smooth.
- **Find in long text** - `Cmd+F` in an expanded long text field searches only the text in the editor.
- **Workflows** - *List records* filters match link and lookup variables. [Learn more](https://nocodb.com/docs/workflows/nodes/action-nodes/list-records)
- **Links** - Links that point to a parent column other than the primary key show their records.
- **External sources** - Every table shows after a sync, drag-to-reorder works in NocoDB tables found by a sync, and numeric columns with no scale show two decimal places.
- **Imports** - A CSV exported from NocoDB imports again, with attachment cells left empty because exported links expire. Long table names in imports and duplicates are shortened to fit the database.
- **Phones** - Pinch-zoom works in the grid and in the expanded record.
- **API** - The v3 API returns minimum and maximum date rollups on SQL Server and Oracle.
- **Dashboards** - Bar and line charts work on every table, and pivot widgets on Oracle group by text formulas.
- **Redo** - Redo works in documents and in rich text fields.
- **Many-to-many tables** - External database join tables with extra columns, such as `created_at`, become many-to-many links on sync.
- **Long field names** - Long non-Latin field and SQL view names fit the PostgreSQL and Oracle limits, and a second similar name gets a suffix.

## Self-Hosting Notes

- **Search indexes** - NocoDB starts building a search index for each table as soon as the plan is active, and keeps it up to date as records change. Indexes are stored in the built-in PostgreSQL database and need the `pg_trgm` and `btree_gin` extensions. Tables in external data sources are not indexed. Tables over 5 million cells (records × fields) are skipped unless `NC_SEARCH_INDEX_AUTO_MAX_CELLS` is raised (`0` removes the limit).
- **Turning search off** - Indexing uses extra disk space and runs in the background while the first indexes are built. For large databases or servers low on disk, `NC_GLOBAL_SEARCH=off` stops search and indexing. `NC_GLOBAL_SEARCH=index` keeps the indexes up to date but hides search from users. Turned back on, existing indexes catch up from where they stopped instead of rebuilding.
- **Azure Blob Storage** - Attachments can be stored in Azure Blob Storage.
- **Query timeout** - Data reads on PostgreSQL stop after 30 seconds. `NC_DATA_QUERY_TIMEOUT_MS` changes the limit. [Learn more](https://nocodb.com/docs/self-hosting/environment-variables)
- **Helm chart** - The chart supports a Gateway API HTTPRoute in place of an Ingress.
- **Private network databases** - When a database host on a private network is blocked, the error names `NC_ALLOW_LOCAL_EXTERNAL_DBS`, the variable that allows it. [Learn more](https://nocodb.com/docs/self-hosting/environment-variables#product-configuration)
- **SQLite metadata database** - Project invites, member changes and trash actions respond at once when NocoDB keeps its metadata in SQLite.
- **Attachments from your network** - `NC_ALLOW_LOCAL_ATTACHMENTS` allows attachment URLs on private networks, such as a NAS, while cloud metadata addresses stay blocked.
- **S3-compatible storage** - Files with spaces or special characters in their names download from Linode, OVHcloud, Scaleway, UpCloud and Vultr storage.
- **Readiness check** - `GET /api/v1/health/ready` returns 503 when the metadata database or Redis is down, so it can serve as a readiness probe.

---

For the fixes released in 2026.10.2, see the [2026.10.2 changelog](https://nocodb.com/docs/changelog/2026.10.2).

*When another workflow completes* requires a paid plan on self-hosted NocoDB. Enterprise Vaults is an add-on to the Enterprise plan on NocoDB Cloud or a Self-hosted Enterprise license. Replies to comments work on every plan. Reactions, pins and unread comments need NocoDB Cloud or a self-hosted license, and *Summarize* needs the Plus plan and above on NocoDB Cloud. Search All Fields searches tables of up to 10,000 records on the Cloud Free plan and on unlicensed self-hosted NocoDB. Record search in the command palette needs the Plus plan and above, or a self-hosted license. Public document links now need a paid plan on NocoDB Cloud. User field notifications need the Plus plan and above on NocoDB Cloud, or a self-hosted Business license. Several date ranges in a calendar need the Plus plan and above on NocoDB Cloud, or a self-hosted Business license.


## Closed issues

- [**closed**] 🔦 Feature: Package a Desktop Electron app with NocoDB to simplify local usage [#15103](https://github.com/nocodb/nocodb/issues/15103)
- [**closed**] 🐛 Bug: Table list omits an already-synced external table until the cache is cleared [#14999](https://github.com/nocodb/nocodb/issues/14999)
- [**closed**] 🔦 Feature: Disable Comments / Base [#14950](https://github.com/nocodb/nocodb/issues/14950)
- [**closed**] 🔦 Feature: default format for syncing external numeric database fields [#14840](https://github.com/nocodb/nocodb/issues/14840)
- [**closed**] 🐛 Bug: can not format eternal database fields [#14837](https://github.com/nocodb/nocodb/issues/14837)
- [**closed**] 🔦 Feature: Support Tables in Rich Text (Long Text) Fields [#14827](https://github.com/nocodb/nocodb/issues/14827)
- [**closed**] 🔦 Feature:  Alternative View Style for Field Type "URL" [#14601](https://github.com/nocodb/nocodb/issues/14601)
- [**closed**] 🔦 Feature: Add WORKDAY Formula with Dynamic Days Input from Lookup Field [#14523](https://github.com/nocodb/nocodb/issues/14523)
- [**closed**] Feature : Support TiDB  [#14463](https://github.com/nocodb/nocodb/issues/14463)
- [**closed**] 🔦 Feature: multiple concurrent sessions for user [#14332](https://github.com/nocodb/nocodb/issues/14332)
- [**closed**] 🔦 Feature: Add Plivo as a messaging provider [#14199](https://github.com/nocodb/nocodb/issues/14199)
- [**closed**] 🔦 Feature: grey canvas for form [#14010](https://github.com/nocodb/nocodb/issues/14010)
- [**closed**] 🐛 Bug: postgres view - "details" opens the ERD view, but not the field view [#13995](https://github.com/nocodb/nocodb/issues/13995)
- [**closed**] 🔦 Feature: add lookup field before/after [#13893](https://github.com/nocodb/nocodb/issues/13893)
- [**closed**] 🔦 Feature: allow many2one as display value [#13867](https://github.com/nocodb/nocodb/issues/13867)
- [**closed**] 🔦 Feature: Barcode support for DataMatrix [#13848](https://github.com/nocodb/nocodb/issues/13848)
- [**closed**] 🔦 Feature: number format default postgres generated tables [#13831](https://github.com/nocodb/nocodb/issues/13831)
- [**closed**] 🔦 Feature: edit fields properties of postgres view not possible [#13829](https://github.com/nocodb/nocodb/issues/13829)
- [**closed**] 🐛 Bug: Can't group by LTAR anymore [#13799](https://github.com/nocodb/nocodb/issues/13799)
- [**closed**] 🔦 Feature: Toggle for first day of the calendar week [#13765](https://github.com/nocodb/nocodb/issues/13765)
- [**closed**] 🔦 Feature: Find-string-in-view mode for Canvas Grid [#13569](https://github.com/nocodb/nocodb/issues/13569)
- [**closed**] 🔦 Feature: Confusing presence of two chat interfaces (NocoAI vs Chat with NocoDB Support) [#13445](https://github.com/nocodb/nocodb/issues/13445)
- [**closed**] 🔦 Feature: Support adjusting image width in Long Text Rich Text editor [#13280](https://github.com/nocodb/nocodb/issues/13280)
- [**closed**] 🔦 Feature: Pricacy improvement - hiding member-list and email [#13170](https://github.com/nocodb/nocodb/issues/13170)
- [**closed**] 🐛 Bug: [Self Hosted] Linode object storage - unable to retrieve file if filename contains spaces [#13122](https://github.com/nocodb/nocodb/issues/13122)
- [**closed**] 🔦 Feature: Different Fields when in Kanban View and opening a card. [#13100](https://github.com/nocodb/nocodb/issues/13100)
- [**closed**] 🔦 Feature: Support for Row References (Excel-like Cumulative Calculations [#13021](https://github.com/nocodb/nocodb/issues/13021)
- [**closed**] Bug: 'Add row failed: Some internal error occurred' but row is created [#13002](https://github.com/nocodb/nocodb/issues/13002)
- [**closed**] Feature : Restrict downlaods / exports under user permissions [#12941](https://github.com/nocodb/nocodb/issues/12941)
- [**closed**] 🔦 Feature: need  SQLSERVER support [#12807](https://github.com/nocodb/nocodb/issues/12807)
- [**closed**] 🔦 Feature: 字段类型变为中文 [i18n- Support for field types in Chinese] [#12805](https://github.com/nocodb/nocodb/issues/12805)
- [**closed**] 🔦 Feature: Add use_field_id parameter support for data retrieval (GET requests) [#12716](https://github.com/nocodb/nocodb/issues/12716)
- [**closed**] 🔦 Feature: Health Check API [#12699](https://github.com/nocodb/nocodb/issues/12699)
- [**closed**] 🔦 Feature: Users to Postgres roles mapping [#12696](https://github.com/nocodb/nocodb/issues/12696)
- [**closed**] 🐛 Bug: Relationship using custom IDs behaves incorrectly [#12693](https://github.com/nocodb/nocodb/issues/12693)
- [**closed**] 🔦 Feature: colorblind support [#12682](https://github.com/nocodb/nocodb/issues/12682)
- [**closed**] Feature [Externald DB] : Kanban view on any field [#12675](https://github.com/nocodb/nocodb/issues/12675)
- [**closed**] 🔦 Feature: changeable Sentry Environment. [#12670](https://github.com/nocodb/nocodb/issues/12670)
- [**closed**] 🐛 Bug: Search bar overlaps table header columns when active in Grid View [#12669](https://github.com/nocodb/nocodb/issues/12669)
- [**closed**] Replace Watchtower in docker-compose with a modern, maintained auto-update solution (Watchtower incompatible with Docker 28/29+) [#12668](https://github.com/nocodb/nocodb/issues/12668)
- [**closed**] 🔦 Feature: Dynamic row height to accomodate pills [#12576](https://github.com/nocodb/nocodb/issues/12576)
- [**closed**] 🔦 Feature: Unwanted Spinner Controls on OTP Input Field [#12562](https://github.com/nocodb/nocodb/issues/12562)
- [**closed**] 🔦 Feature: [External DB] Linking between multiple postgres schemas [#12541](https://github.com/nocodb/nocodb/issues/12541)
- [**closed**] 🔦 Feature: Add Requestly API Collection for NocoDB APIs [#12525](https://github.com/nocodb/nocodb/issues/12525)
- [**closed**] 🔦 Feature: Search function inside of expanded long text field [#12504](https://github.com/nocodb/nocodb/issues/12504)
- [**closed**] 🔦 Feature: Auto-resize Individual or All Columns to Fit Visible Text Length [#12448](https://github.com/nocodb/nocodb/issues/12448)
- [**closed**] 🔦 Feature: Open the related table filtered to the linked records from the linked-records list [#12393](https://github.com/nocodb/nocodb/issues/12393)
- [**👋 For : Community or Good First Issue**] 🐛 Bug: Issues with Korean Translation in NocoDB (Crowdin Integration) [#12375](https://github.com/nocodb/nocodb/issues/12375)
- [**closed**] 🐛 Bug [self-hosted] Sqlite : Scrolling performance issue when grouping ~3000 items in NocoDB [#12365](https://github.com/nocodb/nocodb/issues/12365)
- [**closed**] 🔦 Feature: View permissions [#11935](https://github.com/nocodb/nocodb/issues/11935)
- [**closed**] 🔦 Feature: Automate snapshots [#11934](https://github.com/nocodb/nocodb/issues/11934)
- [**closed**] 🐛 Bug: Significant performance degradation in PATCH operations on tables with large amounts of data [#11798](https://github.com/nocodb/nocodb/issues/11798)
- [**👋 For : Community or Good First Issue**] 🔦 Feature: Support i18n for filter condition labels in non-English UI [#11724](https://github.com/nocodb/nocodb/issues/11724)
- [**closed**] 🔦 Feature: export scheme/ERD [#11578](https://github.com/nocodb/nocodb/issues/11578)
- [**closed**] 🔦 Feature: Tasks/Items with rotating dates that appear on the selected date and time. [#11440](https://github.com/nocodb/nocodb/issues/11440)
- [**closed**] 🔦 Feature: Sub-Records Support [#11339](https://github.com/nocodb/nocodb/issues/11339)
- [**closed**] 🔦 Feature: Email Microsoft365 With OAuth2 [#11321](https://github.com/nocodb/nocodb/issues/11321)
- [**closed**] 🐛 Bug: [external db] Ordering not working with nc_order in external PostgreSQL source [#11100](https://github.com/nocodb/nocodb/issues/11100)
- [**closed**] 🔦 Feature: hide user list [#10996](https://github.com/nocodb/nocodb/issues/10996)
- [**closed**] 🔦 Feature: Restrict adding new members to organization [#10582](https://github.com/nocodb/nocodb/issues/10582)
- [**closed**] 🐛 Bug: rollup to a formula that refer to link / ltar [#10453](https://github.com/nocodb/nocodb/issues/10453)
- [**closed**] 🔦 Feature: add view source for rich text field [#10353](https://github.com/nocodb/nocodb/issues/10353)
- [**closed**] 🐛 Bug: Pinch to zoom disabled after editing a multi-line text field [#10345](https://github.com/nocodb/nocodb/issues/10345)
- [**closed**] 🔦 Feature: Filtering with "contains" via Data APIs [#10123](https://github.com/nocodb/nocodb/issues/10123)
- [**closed**] 🐛 Bug: alter table `nc_base_users_v2` add primary key `nc_base_users_v2_pkey`(`base_id`, `fk_user_id`) - Multiple primary key defined [#10117](https://github.com/nocodb/nocodb/issues/10117)
- [**closed**] 🔦 Feature: Allow "Run Webhook" button trigger from shared view [#9898](https://github.com/nocodb/nocodb/issues/9898)
- [**closed**] 🔦 Feature: Add option like NC_ALLOW_LOCAL_HOOKS but for attachments [#9851](https://github.com/nocodb/nocodb/issues/9851)
- [**closed**] 🐛 Bug: [external db] Table with constraints/validations fails when inserting a new row - the draft row should be retained. [#9569](https://github.com/nocodb/nocodb/issues/9569)
- [**closed**] 🔦 Feature: Scan QR Codes and Barcodes into Text Fields via Camera [#9562](https://github.com/nocodb/nocodb/issues/9562)
- [**closed**] 🔦 Feature: Support input data validation in grid view (similar to form view) [#9560](https://github.com/nocodb/nocodb/issues/9560)
- [**closed**] 🔦 Feature: Multi-Table View (with SQL Queries) [#9525](https://github.com/nocodb/nocodb/issues/9525)
- [**closed**] 🔦 Feature: Calculated Fields in Forms [#9488](https://github.com/nocodb/nocodb/issues/9488)
- [**closed**] 🔦 Feature: add a Environment Variables to set the default language [#9332](https://github.com/nocodb/nocodb/issues/9332)
- [**closed**] 🔦 Feature: Ability to configure a different base URL for the API [#9211](https://github.com/nocodb/nocodb/issues/9211)
- [**closed**] 🔦 Feature: Support for Creating Column Indexes [#8949](https://github.com/nocodb/nocodb/issues/8949)
- [**closed**] 🔦 Feature: Subtasks?  [#8862](https://github.com/nocodb/nocodb/issues/8862)
- [**closed**] 🔦 Feature: Show actual database error message on failed SQL operation [#8809](https://github.com/nocodb/nocodb/issues/8809)
- [**closed**] 🔦 Feature: Direct Inclusion of Detailed Child Entity Data in Parent Table API Responses [#8582](https://github.com/nocodb/nocodb/issues/8582)
- [**closed**] 🔦 Feature: Access Record URL in Public Base/View without Sign-In [#8550](https://github.com/nocodb/nocodb/issues/8550)
- [**closed**] 🔦 Feature: Automatic association links [#8419](https://github.com/nocodb/nocodb/issues/8419)
- [**closed**] 🔦 Feature: Make NocoDB an OAuth Provider [#8392](https://github.com/nocodb/nocodb/issues/8392)
- [**closed**] 🔦 Feature: Add notice that cloud instance doesn't support exports yet [#8274](https://github.com/nocodb/nocodb/issues/8274)
- [**closed**] Feature: [external db] Allow choosing junction table and columns for m2m relationship  [#8241](https://github.com/nocodb/nocodb/issues/8241)
- [**closed**] 🔦 Feature: Allow linking between bases. [#7677](https://github.com/nocodb/nocodb/issues/7677)
- [**closed**] 🔦 Feature: Array count formula for Select / User field [#7321](https://github.com/nocodb/nocodb/issues/7321)
- [**closed**] 🔦 Feature: Virtual foreign key link to existing column [#7112](https://github.com/nocodb/nocodb/issues/7112)
- [**closed**] 🔦 Feature: Form - require sign-in for submission [#7077](https://github.com/nocodb/nocodb/issues/7077)
- [**closed**] 🔦 Feature: Save filter (group) [#6872](https://github.com/nocodb/nocodb/issues/6872)
- [**closed**] 🔦 Feature: Scan QR/Barcode to pre-fill certain fields in form [#6777](https://github.com/nocodb/nocodb/issues/6777)
- [**closed**] 🔦 Feature: Litestream backup to Non-AWS hosting   [#5974](https://github.com/nocodb/nocodb/issues/5974)
- [**closed**] 🔦 Feature: Workdays calculation formula [#5960](https://github.com/nocodb/nocodb/issues/5960)
- [**closed**] 🔦 Feature: Allow re-importing from Airtable [#5599](https://github.com/nocodb/nocodb/issues/5599)
- [**closed**] 🔦 Feature: Share tables between projects [#5396](https://github.com/nocodb/nocodb/issues/5396)
- [**closed**] 🔦 Feature: Jalali date picker for Persian users [#5235](https://github.com/nocodb/nocodb/issues/5235)
- [**closed**] 🔦 Feature: Upsert  [#5126](https://github.com/nocodb/nocodb/issues/5126)
- [**closed**] 🔦 Feature: Run query and getdata through API [#5027](https://github.com/nocodb/nocodb/issues/5027)
- [**closed**] 🔦 Feature: Sort by 'Entry Order' for SingleSelect column types [#4688](https://github.com/nocodb/nocodb/issues/4688)
- [**closed**] 🔦 Feature: Function similar to `merge` in mysql or `vlookup` in Excel [#4603](https://github.com/nocodb/nocodb/issues/4603)
- [**closed**] 🔦 Feature: GUI based custom query builder [#4336](https://github.com/nocodb/nocodb/issues/4336)
- [**closed**] 🔦 Feature: Option to connect to data in existing table in database [#4049](https://github.com/nocodb/nocodb/issues/4049)
- [**🚥 Status: On Hold**][**🍰 Scope : Column**] 🔦 Feature: Use access key for S3 objects instead of random filenames? [#2956](https://github.com/nocodb/nocodb/issues/2956)
- [**closed**] 🔦 Feature: Add Pushover to the App Store [#916](https://github.com/nocodb/nocodb/issues/916)
- [**closed**] 🔦 Feature: Zulip integration [#802](https://github.com/nocodb/nocodb/issues/802)
- [**closed**] 🔦 Feature: Matrix.org notifications [#741](https://github.com/nocodb/nocodb/issues/741)
