## What's Changed

### Improvements

* Imports
  * The home page's "Import document" file picker now offers `.json` files, which could already be imported by choosing "any file type" (#2609)
* Sharing
  * The "Invite multiple" dialog accepts emails separated by commas, semicolons, or spaces as well as one per line, and checks each address the way the server will (#2613)
* Custom widgets
  * `getAccessToken()` accepts a `route` option that limits the token to one endpoint, method, and set of query parameters ([commit](https://github.com/gristlabs/grist-core/commit/d5189afb))
* Documentation
  * The README explains the difference between the Docker images and the Grist editions (#2622)
* Internal / infrastructure
  * Locale files are split into layers for core and the full edition, merged by the server when it serves translations ([commit](https://github.com/gristlabs/grist-core/commit/76a8932b))

### Fixes

* Fixed two problems with Redis on a single server after upgrading to 1.7.18 or later. Documents could fail to open because of a worker left registered at `http://0.0.0.0:<port>` by an older version, and copying, comparing, or replacing documents could fail with "File can't be found at the requested URL". The second is fixed when `GRIST_ORG_IN_PATH` or `GRIST_SINGLE_ORG` is set. Otherwise, setting `APP_DOC_INTERNAL_URL` avoids it (#2621)
* Exports with `header=colId` use the column's own ID for Reference columns, rather than the ID of a hidden helper column such as `gristHelper_Display`. Applies to CSV, TSV, XLSX, and table-schema exports. Based on an approach by @mayuriphad (#2612)
* "Download all attachments" no longer fails with a 502 when a file for an attachment no longer used in the document is missing. Unused attachments are left out of the archive (#2620)
* Access tokens for disabled users no longer work ([commit](https://github.com/gristlabs/grist-core/commit/d5189afb))
* The "Select by" menu could wrongly offer or hide a two-way link on a page where one widget already selects another ([commit](https://github.com/gristlabs/grist-core/commit/e4e2f59e))

### Full Grist edition extensions

* MCP and the assistant
  * Tools now respect access rules when reading document structure, so a restricted user can no longer learn the names of tables, pages, columns, or attachments they are denied ([commit](https://github.com/gristlabs/grist-core/commit/90671758))
  * New tools `grist_get_doc_download_url`, `grist_get_doc_download_url_xlsx`, and `grist_get_table_download_url` give short-lived links for downloading a document or a table. Each link works only for that one download, and access rules still apply ([commit](https://github.com/gristlabs/grist-core/commit/d5189afb))
  * New `get_acl_rules` tool reads a document's access rules and reports any problems with them ([commit](https://github.com/gristlabs/grist-core/commit/dd1ed147))
  * Asking about linking widgets no longer fails with "Table N not found" ([commit](https://github.com/gristlabs/grist-core/commit/e4e2f59e))

## Contributions

* Grist Labs: @berhalak, @dsagal, @georgegevoian, @paulfitz, @Spoffy
* @mayuriphad: approach for `header=colId` export headers (#2612, from #2535)

### Translations

* Arif Budiman
* Barna Kovács
* Cynwell
* Ettore Atalan
* Grégoire Cutzach
* Martin Harari Thuresson

**Full Changelog**: https://github.com/gristlabs/grist-core/compare/v1.7.20...v1.7.21

[Join our Discord Community](https://discord.gg/MYKpYQ3fbP) if you'd like to get into development of Grist.
