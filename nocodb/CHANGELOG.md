<img width="1865" height="1147" alt="release" src="https://github.com/user-attachments/assets/eb33e34b-77ae-4390-93f5-df7d81439c42" />


<Callout type="info">**Interfaces are now classic apps.** You find them under *Apps*. Your pages, access and published versions stay as they were. [Learn more](https://nocodb.com/docs/classic-apps#classic-apps-were-interfaces)</Callout>

## Availability

| Feature | Community Edition | Cloud Free Plan | Paid Plans In Cloud/On-Prem |
| --- | :---: | :---: | :---: |
| Resource Allocation in Timeline View | – | – | ✅ |
| Play Back a Workflow Run | ✅ | ✅ | ✅ |
| Run an Automation from a Button | – | ✅ | ✅ |
| Images and Attachments in Workflow Emails | – | – | ✅ |
| Connect Your AI Tools by Signing In | ✅ | ✅ | ✅ |
| Single Select Format for Text Formulas | ✅ | ✅ | ✅ |

Timeline View requires the Business plan and above on NocoDB Cloud. Send Email, Gmail, and Outlook steps require the Plus plan and above on NocoDB Cloud.


## Resource Allocation in Timeline View

Timeline View now shows how much of each person's working hours their scheduled tasks use, for every day, week, or month on screen. Overbooked periods turn red. The calculation allows for working days, time off from a linked table, and tasks shared by several people.

<img width="3024" height="1320" alt="timeline-utilization" src="https://github.com/user-attachments/assets/c3481fb4-e71b-48e6-9ded-dc9cb28c32f6" />

[Learn more about utilization in Timeline View →](https://nocodb.com/docs/product/tables/views/view-types/timeline#utilization)

## Play Back a Workflow Run

Step through a past workflow run on the canvas without running anything again. Run history filters by status, date range, and runs that need attention, and a running workflow can be stopped, paused, resumed, or retried.

<img width="2224" height="940" alt="workflow-play-back" src="https://github.com/user-attachments/assets/209012db-c590-423d-81d5-2b07098fc1da" />

## Run an Automation from a Button

A Button field can now run an automation. Pick one under *Run automation*, or choose *Create new automation* and build it after you save the field.

<img width="2000" height="1096" alt="button-run-automation" src="https://github.com/user-attachments/assets/f59798fb-622f-4ced-a012-c42d90366bb0" />

[Learn more about button automations →](https://nocodb.com/docs/product/tables/fields/field-types/custom-types/button#button-automation-)

## Images and Attachments in Workflow Emails

Send Email, Gmail, and Outlook steps can attach files from an attachment field, an upload, or a URL, up to 10 files. They can also carry inline images that show without the recipient turning on remote images.

<img width="2224" height="1000" alt="workflow-email-attachments" src="https://github.com/user-attachments/assets/964d27e5-75f7-49eb-948b-4d4b366052a5" />

[Learn more about configuring Send Email →](https://nocodb.com/docs/workflows/nodes/action-nodes/send-email#configuration)

## Connect Your AI Tools by Signing In

*Use NocoDB From* in the account menu connects Claude, ChatGPT, Cursor, Claude Code, and other MCP clients by signing in, with no token to copy. A connected app never gets more access than your own role.

<img width="1680" height="880" alt="connect-ai-tools" src="https://github.com/user-attachments/assets/bd1a5a5f-15e2-4a20-8345-ae55a69705fd" />

[Learn more about MCP →](https://nocodb.com/docs/mcp)

## Single Select Format for Text Formulas

Text formulas can display their result as a colored single select, while filters and sorts still treat it as text.

<img width="2108" height="1248" alt="formula-single-select" src="https://github.com/user-attachments/assets/3026c993-2b8d-411d-9442-c9ebdd7a4055" />

[Learn more about formula formatting →](https://nocodb.com/docs/product/tables/fields/field-types/formula/formula-result-formatting#single-select)

## Improvements

- **Five levels of grouping** - Grid View now groups up to five levels deep, and dragging a record into another group changes its grouped value. [Learn more](https://nocodb.com/docs/product/tables/table-operations/group-by#add-or-edit-groups)
- **Members and teams in one place** - Workspace members and teams share one *Members & teams* page, and each team shows the workspace role its members inherit. [Learn more](https://nocodb.com/docs/product/workspaces/workspace-collaboration#list-workspace-members-and-teams)
- **New project page** - Every *New project* entry point opens one page, with a prompt box when NocoAI is on. [Learn more](https://nocodb.com/docs/product/projects/create-project)
- **Sign-in screens** - Sign in, sign up, two-factor, password reset, SSO and invite screens are redesigned, and a badge marks the sign-in method you used last.
- **Phones** - Grids, inputs, and calendar month view work properly on iPhone and Android.
- **Share a classic app** - *Share* in the classic app builder invites people by email or private link to the app only. [Learn more](https://nocodb.com/docs/classic-apps/share#invite-people-to-a-classic-app)
- **Report abuse on public pages** - Shared views, forms, classic apps and dashboards carry a *Report abuse* link, and super admins on self-hosted instances review reports in the Admin Panel. [Learn more](https://nocodb.com/docs/self-hosting/abuse-reports#what-a-visitor-reports)
- **Who can export** - With *Allow export to CSV* on, a classic app page can limit the export by role, user or team. [Learn more](https://nocodb.com/docs/classic-apps/builder#page-settings)
- **Add linked records from a form** - Classic app link fields can open a form to create a record and link it in one step. [Learn more](https://nocodb.com/docs/classic-apps/layouts/record-detail#linked-records)
- **Airtable import from a shared view** - Import a publicly shared view link with no personal access token. [Learn more](https://nocodb.com/docs/product/projects/import-project-from-airtable#import-from-a-shared-view)
- **Freeze more fields** - Grid View freezes as many fields as fit the window, no longer capped at three. [Learn more](https://nocodb.com/docs/product/tables/table-operations/freeze-fields)
- **Rollups** - *Count All* counts every linked record, and Min and Max over a date return a date. [Learn more](https://nocodb.com/docs/product/tables/fields/field-types/links-based/rollup#aggregation-functions)
- **Link filters** - A dynamic condition can match linked records that share a link with the current record. [Learn more](https://nocodb.com/docs/product/tables/fields/field-types/links-based/links#limit-by-filter-)
- **Default values in new records** - The expanded form shows a field's default before you save.
- **Live updates** - Grids refresh in place when collaborators edit, and grouped views keep their open groups.
- **Change the display value by dragging** - Drag any column in Grid View onto the display value to make it the display value.
- **Record counts on user filters** - Classic app user-filter tabs show the number of records behind each tab.
- **Email display names** - Emails such as `Jane Example <jane@example.com>` open as mailto links.
- **More currencies** - The Currency field accepts 19 more ISO 4217 codes. [Learn more](https://nocodb.com/docs/product/tables/fields/field-types/numerical/currency#supported-currencies)
- **Database SSL modes** - External connections choose between *No*, *Preferred*, *Required* and *Required-CA*. [Learn more](https://nocodb.com/docs/product/integrations/create-connection#database-integrations)
- **API token permissions** - Fine-grained tokens can read and manage teams and read the workspace. [Learn more](https://nocodb.com/docs/product/account-settings/api-tokens#scopes-permissions)
- **MCP tools** - Document comment tools, a dry run for field type changes, and a skill guide with a `SKILL.md` entry point. [Learn more](https://nocodb.com/docs/mcp/skills)
- **MCP fallback in chat** - The chat agent falls back to MCP tools when it has no dedicated tool for what you asked.
- **More cloud credits** - Every NocoDB Cloud plan includes more credits, from 1,000 on Free. [Learn more](https://nocodb.com/docs/product/workspaces/credits#monthly-plan-credits)
- **Environments and per-user credentials** - Both now require the Scale plan.
- **A clearer update notification** - The in-app update notification has been redesigned.

## What's Fixed

- **Grid and views** - Search, grouping, and Calendar month view behave as expected, and multi-level List views keep their rows on scroll.
- **Data integrity** - Unlinking from the wrong parent keeps the real link, and link writes succeed on SQLite and MySQL.
- **Fields and formulas** - Formulas on a lookup of a link work, `ISBLANK` works on SQL Server, and Duration values keep their seconds when a table, field, or project is duplicated or imported.
- **Filters** - *is empty* and `in` filters work on more field types and databases, the API accepts *is between* on numbers, and DateTime filters respect the timezone.
- **Attachments** - Attachments written through the v3 API and scripts are saved, and PDFs preview on mobile browsers.
- **Imports and duplication** - CSV import into a single-record link column treats the cell as one value.
- **Workflows** - Iterate filters match the right rows, and server-side scripts keep project access past 60 seconds.
- **Webhooks** - Webhooks that track specific fields fire only when those fields change.
- **Classic apps** - Record pages honor a link field's display value, and Number widgets aggregate numeric formulas.
- **MCP** - Form authoring reports what it cannot apply instead of dropping it.
- **Stability** - Navigation no longer leaks memory, and several dialogs and popups close without errors.
- **Billing** - Invoices void correctly when a dunning cycle is cancelled, and upgraded workspaces stop getting grace-period emails.

## Self-Hosting Notes

- **Node 24.22.1** - Docker images move to Node 24.22.1 for the October 2026 Node security release.
- **Seat limits** - A seat cap applies only where an on-premises license sets one.
- **Grace periods** - The API and automation grace periods now start as intended, and the automation grace cap is lower.
- **MCP response changes** - Some MCP responses changed shape, such as shared view types as strings. The REST v3 API is unchanged.
- **Security hardening** - Private integrations stay private, webhooks and uploads by URL refuse private network addresses, and dependencies are patched.

---

For more details on the features introduced in 2026.09.1, see the [2026.09.1 changelog](https://nocodb.com/docs/changelog/2026.09.1).

## Closed issues

- [**closed**] How to update when Noco is installed as binarie [#14872](https://github.com/nocodb/nocodb/issues/14872)
- [**closed**] 🐛 Bug: AI chat builder returns "No output generated" with Claude Sonnet 5.5 / Opus 5.5 (forced tool use rejected) [#14866](https://github.com/nocodb/nocodb/issues/14866)
- [**closed**] 🐛 Bug: API Tokens table requires horizontal scroll to reach Delete button on wide screens [#14848](https://github.com/nocodb/nocodb/issues/14848)
- [**closed**] getNodejsTimezone falls back to Etc/UTC for Pacific/Chuuk and two other zones, shifting DateTime filters by up to 10 hours [#14845](https://github.com/nocodb/nocodb/issues/14845)
- [**closed**] 🐛 Bug: duplicate record - changed foreign key not saved - null value instead [#14844](https://github.com/nocodb/nocodb/issues/14844)
- [**closed**] 🐛 Bug: Hide Banner toggle doesn't work [#14826](https://github.com/nocodb/nocodb/issues/14826)
- [**closed**] 🐛 Bug: Public Form Attachment Upload Fails on Specific Table — HTTP 422, Base64 Sent Instead of Binary [#14813](https://github.com/nocodb/nocodb/issues/14813)
- [**closed**] 🐛 Bug: Earliest/Latest Date aggregation shows "Invalid Date" for 15 of 19 DateTime field formats [#14804](https://github.com/nocodb/nocodb/issues/14804)
- [**closed**] 🔦 Feature: Render display-name email values as clickable mailboxes [#14780](https://github.com/nocodb/nocodb/issues/14780)
- [**closed**] 🐛 Bug: Realtime data update not working / table reloads [#14777](https://github.com/nocodb/nocodb/issues/14777)
- [**closed**] 🐛 Bug: download Excel causes hidden error in browser [#14761](https://github.com/nocodb/nocodb/issues/14761)
- [**closed**] 🔦 Feature: delete field content - especially URL [#14754](https://github.com/nocodb/nocodb/issues/14754)
- [**closed**] i18n: plural separator lost in 182 strings across 13 locales (both forms render together) [#14717](https://github.com/nocodb/nocodb/issues/14717)
- [**🔦 Type: Feature**] 🔦 Feature: Drag and drop a column to set it as the display value field [#14716](https://github.com/nocodb/nocodb/issues/14716)
- [**closed**] nocodb keeps exiting [#14696](https://github.com/nocodb/nocodb/issues/14696)
- [**closed**] 🐛 Bug: toolbar search fires a request every 600ms while typing and never cancels the previous one [#14678](https://github.com/nocodb/nocodb/issues/14678)
- [**closed**] 🐛 Bug: [CE] Workspace invite sends no email and drops the invite token; no resend from the members list [#14675](https://github.com/nocodb/nocodb/issues/14675)
- [**closed**] 🐛 Bug: Base-level "Resend invite" fails with "column fk_workspace_id does not exist" (email plugin looked up with base scope) [#14673](https://github.com/nocodb/nocodb/issues/14673)
- [**closed**] 🐛 Bug: Base invite link always fails with "Invalid invite url" — invite token is never persisted (self-hosted, SMTP enabled) [#14672](https://github.com/nocodb/nocodb/issues/14672)
- [**closed**] docs: doubled path in data-exporter description.md breaks both extension screenshots [#14662](https://github.com/nocodb/nocodb/issues/14662)
- [**closed**] 🐛 Bug: presigned URL cache key includes the rounded expiry, so signed URLs are re-signed every 10 minutes [#14659](https://github.com/nocodb/nocodb/issues/14659)
- [**closed**] 🐛 Bug: Formula no longer working as display value field [#14642](https://github.com/nocodb/nocodb/issues/14642)
- [**closed**] 🐛 Bug: Add row failed: A value is required for this field. [#14633](https://github.com/nocodb/nocodb/issues/14633)
- [**closed**] 🐛 Bug: Unable to attach images to native Docs (reported version 2026.08.01, self-hosted) [#14619](https://github.com/nocodb/nocodb/issues/14619)
- [**closed**] CSOAI — NocoDB AI governance Airtable [#14584](https://github.com/nocodb/nocodb/issues/14584)
- [**closed**] CSOAI — NocoDB AI governance database [#14583](https://github.com/nocodb/nocodb/issues/14583)
- [**closed**] 🐛 Bug: Kanban view - reordering cards within a stack is never persisted [#14574](https://github.com/nocodb/nocodb/issues/14574)
- [**closed**] 🔦 Feature: Allow freezing more than 3 columns in Grid View [#14564](https://github.com/nocodb/nocodb/issues/14564)
- [**closed**] 🐛 Bug: Copying a single Long Text cell wraps the value in double quotes when pasted outside NocoDB [#14442](https://github.com/nocodb/nocodb/issues/14442)
- [**closed**] Bug: MCP updateRecords cannot write many-to-many links on SQLite in 2026.08.0 [#14417](https://github.com/nocodb/nocodb/issues/14417)
- [**closed**] 🐛 Bug:[self-hosted] Interval data type [#14306](https://github.com/nocodb/nocodb/issues/14306)
- [**closed**] 🐛 Bug: Community edition in docker image has Enterprise UI [#13344](https://github.com/nocodb/nocodb/issues/13344)
- [**🔦 Type: Feature**] 🔦 Feature: [Self Hosted] Pull NC_DB secret from Kubernetes in Helm Chart [#13236](https://github.com/nocodb/nocodb/issues/13236)
- [**closed**] 🐛 Bug: [Self Hosted] Helm chart is not working [#12577](https://github.com/nocodb/nocodb/issues/12577)
- [**🔦 Type: Feature**] 🔦 Feature: Configure database max. connection pool size through an environment variable [#9973](https://github.com/nocodb/nocodb/issues/9973)
- [**🔦 Type: Feature**][**👋 For : Community or Good First Issue**] 🔦 Feature: Include Checksums in the Formula Field [#9747](https://github.com/nocodb/nocodb/issues/9747)
- [**closed**] 🐛 Bug: Adding a formula that has an error should expose the error to the user.  [#7317](https://github.com/nocodb/nocodb/issues/7317)
- [**🔦 Type: Feature**] 🔦 Feature: The ability to run the NocoDB application on AWS Lambda. [#6433](https://github.com/nocodb/nocodb/issues/6433)
- [**🔦 Type: Feature**] 🔦 Feature: Homebrew for Apple Silicon [#6034](https://github.com/nocodb/nocodb/issues/6034)
- [**🔦 Type: Feature**] 🔦 Feature: Support annotations in the service and other resources in nocodb helm chart [#5099](https://github.com/nocodb/nocodb/issues/5099)
- [**🔦 Type: Feature**][**🌞 Scope : Data source**] 🔦 Feature: Add possibility to import and export compessed csv (tar.gz) [#1015](https://github.com/nocodb/nocodb/issues/1015)
- [**✨ Type: Enhancement**][**🔦 Type: Feature**][**👮 Scope : Auth**] First run admin user  created without email validation [#610](https://github.com/nocodb/nocodb/issues/610)
- [**🔦 Type: Feature**][**🔭 Scope : Project**] 🔦 Feature: Ability to work with multiple databases at once [#600](https://github.com/nocodb/nocodb/issues/600)
