## What's Changed

### Improvements

* Home page
  * The home page is redesigned, with a "Create a document" section (blank document, file import, templates) and a "Learn Grist" section linking to the video tour, tutorial, webinars, and Help Center ([commit](https://github.com/gristlabs/grist-core/commit/fa941a7c))
* Formulas
  * While editing a formula, clicking a column in another table now inserts its name too, without `$`, ready for a lookup such as `Films.lookupOne(Title=$Name)` (#2547)
* Accessibility
  * A new shortcut, Ctrl+I, moves focus within the panel or widget selected with Ctrl+O. In a widget, it reaches the header, making its sort and filter buttons usable by keyboard. In a panel, it jumps between key controls rather than every Tab stop. Contributed by @manuhabitela (#2441)
  * After pressing a button that hides itself, such as "Hide columns" in the right panel, focus stays in the panel rather than jumping back to the widget. Contributed by @manuhabitela (#2439)
* Self-hosting
  * The default log level is now `info` rather than `error`, which hid important warnings. `info` messages leave out cell values. In JSON logs, `error` is always a string, and error messages appear as `errorMessage` ([commit](https://github.com/gristlabs/grist-core/commit/45d8ecb9))
  * The docker-compose examples are reworked into five, from minimal local testing to a full setup with HTTPS, Keycloak, PostgreSQL, Redis, and RustFS (replacing MinIO, which is no longer maintained). Each has a README walking through first-time setup ([commit](https://github.com/gristlabs/grist-core/commit/4267cb9a), #2604)
  * S3-compatible storage settings now accept the `GRIST_DOCS_S3_*` prefix as well as `GRIST_DOCS_MINIO_*` ([commit](https://github.com/gristlabs/grist-core/commit/f295587c))
  * The formula sandbox check at startup now allows 10 seconds rather than 5, for slower servers. Contributed by @Mrmaxmeier (#2553)
* Internal / infrastructure
  * Grist now checks the name under which it caches a `REQUEST()` result before using it as a file path ([commit](https://github.com/gristlabs/grist-core/commit/a9af0793))
  * `@xmldom/xmldom`, used for SAML sign-in, is updated to 0.8.15, fixing several ways a crafted XML document could stall the server (#2562)

### Fixes

* Opening a document after it was closed for being idle could download it again in full from external storage, adding about ten seconds, despite an up-to-date local copy (#2575)
* The Admin Panel said "Backups are not enabled" when documents were kept in S3-compatible storage (#2591)
* With Deno 2.9.6 or later, the Pyodide sandbox did not start and documents could not open. Contributed by @Mrmaxmeier (#2605)
* With no sign-in method configured, setting an install admin email left you signed in as someone else and locked out of the Admin Panel. New installations now sign you in as the admin email. Existing ones with a `you@example.com` user keep using it ([commit](https://github.com/gristlabs/grist-core/commit/4267cb9a))
* Access rule checks could miss an action that followed an undo in the same request, including the check requiring permission to edit structure for changes that can affect formulas ([commit](https://github.com/gristlabs/grist-core/commit/994ff298))
* Parsing a long, specially crafted DateTime value could stall the server ([commit](https://github.com/gristlabs/grist-core/commit/3a999749))
* Charts showed DateTime values in UTC instead of the column's timezone (#2573)
* Double-tapping a cell to edit it did nothing in Firefox for Android (#2592)
* A document tour pointing at a missing row left an invisible layer blocking the page. The tour now closes instead ([commit](https://github.com/gristlabs/grist-core/commit/4d14dc59))

### Full Grist edition extensions

* Imports
  * "Copy data from another document", in the Add new menu, copies chosen tables from another document on the same installation, with or without their data, into the current document or a new one. Formula columns arrive as data, attachments are skipped, and the source's access rules apply. Also available as `POST /api/docs/:docId/import/grist` ([commit](https://github.com/gristlabs/grist-core/commit/365674c9))
* MCP and the assistant
  * The home page can also start a new document from a description given to the assistant ([commit](https://github.com/gristlabs/grist-core/commit/fa941a7c))
  * New tools `get_page_layout`, `set_page_layout`, `get_card_layout`, `set_card_layout`, `get_widget_options`, and `set_widget_options` let the MCP agent and the assistant arrange pages and cards and set widget options ([commit](https://github.com/gristlabs/grist-core/commit/ba32a475))
* Grist Fleet
  * A new Admin Panel section lists the servers holding documents, with each one's address, group, load, document count, and status: running, draining (taking no new documents), or stopped reporting. Also available from `GET /api/admin/servers` ([commit](https://github.com/gristlabs/grist-core/commit/cd6bfbb4), [commit](https://github.com/gristlabs/grist-core/commit/24beba82))

## Contributions

* Grist Labs: @berhalak, @dsagal, @georgegevoian, @paulfitz
* @manuhabitela: Ctrl+I to move within a panel or widget (#2441), keeping focus in place after a button disappears (#2439)
* @Mrmaxmeier: Pyodide sandbox with newer Deno (#2605), more time for the sandbox check at startup (#2553)
* @fflorent: README fix for `GRIST_ATTACHMENTS_THRESHOLD_MB` (#2595), unused code removal (#2593)

### Translations

* Arif Budiman
* Gergely Turi
* Kévin DUPOND
* Martin Harari Thuresson
* Michele Kappa
* Yalin Sayi

**Full Changelog**: https://github.com/gristlabs/grist-core/compare/v1.7.19...v1.7.20

[Join our Discord Community](https://discord.gg/MYKpYQ3fbP) if you'd like to get into development of Grist.
