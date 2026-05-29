## What's Changed

The first-run experience for self-hosted installations matures. The setup wizard previewed last release is now the default flow a fresh install lands on. It checks earlier which formula sandboxes are available, handles authentication changes more cleanly, and lets you edit the install-wide default permissions from the Admin Panel. Accessibility takes a big step forward too: screen-reader support and keyboard navigation now reach grid views, menus, and the page widget picker. There are also new date formats, a `POST /records/list` API endpoint for large queries, custom CSS inside widgets, and the usual dependency bumps and fixes. Two more features are under development in the full edition: **OAuth Apps** and an **MCP (Model Context Protocol) endpoint**. See "Full Grist edition extensions" below.

### New features

* **[Guided first-run setup wizard](https://support.getgrist.com/install/first-run-setup/)**. The setup wizard previewed in v1.7.13 is now the flow fresh self-hosted installations land on. Sign in with the boot key (the `GRIST_BOOT_KEY` admin secret printed at startup), and the wizard walks you through `/admin/setup` to configure your instance. The "Quick setup" entry is now active in the admin sidebar. Refinements this release:
  * The wizard now checks which formula sandboxes are available as soon as it opens, not when you reach that step. No more waiting on a spinner (#2341)
  * Smoother entry into the wizard: cleaner redirects after an authentication change and after signing in with the boot key (#2340)
  * Set up "Sign in with getgrist.com" from the wizard, and returning from getgrist.com's registration page now brings you back into the wizard, not the main Admin Panel (#2310)
  * Signed-out and non-admin users can no longer open the Quick setup page. They get the same "unavailable" card as the Admin Panel (#2323)
  * Authentication changes are now staged like the wizard's other pending changes. Admins are sent back through sign-in after changing them (#2315, #2331)
  * The four install-wide default permissions (team sites, personal sites, anonymous access, anonymous playground) can now be changed from the Admin Panel's Security Settings, not just during the wizard (#2314)
* **`POST /records/list` endpoint**. A POST companion to the records endpoint. Large queries can be sent in the request body instead of the URL (#2321).

### Improvements

* [Accessibility](https://support.getgrist.com/accessibility/) (contributed by @manuhabitela)
  * Screen-reader support in grid views (#2114)
  * Open the row and column menus via keyboard shortcuts in a grid view (#2230)
  * Open the context menu via keyboard shortcuts when in widgets (#2226)
  * Page widget picker now works with keyboard and screen readers (#2273)
* Custom widgets
  * A custom CSS file configured with `APP_STATIC_INCLUDE_CUSTOM_CSS` is now also applied inside widgets, not just the main app. Contributed by @manuhabitela (#2089)
  * The built-in calendar widget now loads from the copy bundled with Grist instead of the one hosted on GitHub. The GitHub copy pulled in external CDN files that ad blockers and privacy extensions sometimes blocked (#2262)
* Localization
  * New date formats (#2347)
  * Improved locale guessing and locale fallback logic (#2313)
* API
  * Action summaries (the change summaries used by features such as webhooks) now mark which cell values are genuinely unknown. Before, merging two summaries could replace a known value with a wildcard. Now it keeps the real value where it has one (#2361)
* Internal / infrastructure
  * Added a filesystem-based document storage backend for tests, enabled with `GRIST_FS_STORAGE_DIR`. It implements Grist's external storage interface, normally backed by S3-compatible object storage ([commit](https://github.com/gristlabs/grist-core/commit/a1515c26)). It also gets a (test-only) card in the Admin Panel backups section ([commit](https://github.com/gristlabs/grist-core/commit/a1db24bf))

### Fixes

* Edit a document from the assistant popup, and Grist now copies (forks) it first if it is a template or an unsaved scratch document ("fiddle"). The original is no longer changed in place ([commit](https://github.com/gristlabs/grist-core/commit/69e26019))
* Fixed a case where editing through the assistant could slip past access checks. It happened while previewing a document as owner, before the fork was made, and could leave the data engine in a bad state ([commit](https://github.com/gristlabs/grist-core/commit/b4a90b10))
* Prevent anonymous users from forking documents (#2319)
* On first startup, the `/status` health check now returns "starting" (HTTP 503) until the server is ready. Before, it could report healthy too early (#2322)
* Prevent a console error when pressing ctrl+alt+o on the homepage (#2343)

### Documentation

* New [accessibility documentation](https://support.getgrist.com/accessibility/) covering keyboard navigation, screen reader support, and the high-contrast theme. Contributed by @manuhabitela
* Document how to run the browser-based end-to-end (nbrowser) tests locally (#2214)

### Full Grist edition extensions

These features are under development in the full edition.

* **OAuth Apps**. A way to register and manage OAuth apps, with a developer UI and REST API. Users can authorize an app, limit it to specific organizations, workspaces, or documents, and later review or revoke that access.
* **MCP (Model Context Protocol) endpoint**. Lets external clients such as Claude or ChatGPT talk to Grist over JSON-RPC.

### Dependency bumps

Thanks to the grist.gouv team for monitoring Grist dependencies.

* Bump @gristlabs/grist-widget to 0.0.6 (#2329), file-type to 22.0.0 (#2209), uuid to 14.0.0 (#2290)
* Bump axios (#2260, #2333), webpack-dev-server (#2357), ws (#2359), multiparty (#2355), fast-uri (#2342), basic-ftp (#2274, #2338), node-forge (#2210), postcss (#2316), lodash (#2238), fast-xml-parser (#2257), svgo (#2149), flatted (#2192), follow-redirects (#2264), dompurify (#2270), @xmldom/xmldom (#2289)

## Contributions

* Grist Labs: @berhalak, @dsagal, @paulfitz, @Spoffy
* @manuhabitela: screen-reader support in grid views (#2114), keyboard access for row/column menus (#2230), keyboard access for the widget context menu (#2226), keyboard and screen-reader support in the page widget picker (#2273), custom CSS applied inside widgets (#2089), fine-tuning the experimental "New record" button (#2312), locale guessing and fallback improvements (#2313), console error fix on ctrl+alt+o (#2343)
* @fflorent: prevent anonymous users forking documents (#2319), bump file-type (#2209), document running the browser-based (nbrowser) tests locally (#2214)
* @cbontemps: add new date formats (#2347)
* @wvengen: include package.json and yarn.lock for the Pyodide worker (#2297)
* @machinelearningprodigy: tighten ISandbox types and resolve sort-spec lint/type-safety issues (#2211)

### Translations

* Arif Budiman
* Igor Freire Rodrigues
* Kévin DUPOND
* Martin Harari Thuresson
* Paul Janzen
* Renato Portela
* René Neumann
* ssantos
* xabirequejo
* younger

**Full Changelog**: https://github.com/gristlabs/grist-core/compare/v1.7.13...v1.7.14

[Join our Discord Community](https://discord.gg/MYKpYQ3fbP) if you'd like to get into development of Grist.
