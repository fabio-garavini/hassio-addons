## What's Changed

### New features

* **Widget Creator**. "Create your own" in the widget picker opens a code editor with a live preview, for writing a widget's HTML and JavaScript right in the document. Errors from the code show under the widget. Widgets made with the old Custom Widget Builder can switch over and keep their code. See the [Widget Creator](https://support.getgrist.com/widget-creator/) docs ([commit](https://github.com/gristlabs/grist-core/commit/104c85a3))

### Improvements

* Sorting
  * Under "More sort options", empty values can go first or last in any column. The old "Empty values last" did nothing on Date, Numeric, or Reference columns, where empties already sorted last. Existing saved sorts keep their order ([commit](https://github.com/gristlabs/grist-core/commit/9c364bb6))
* Calendar
  * In a narrow calendar widget, the toolbar wraps onto more lines instead of scrolling sideways, and the date title gets a line of its own below the buttons ([commit](https://github.com/gristlabs/grist-core/commit/3fecf6d9))
* Imports
  * Importing a file with an unsupported extension, an old `.xls` file, or an `.xlsx` file that can't be read gives an error saying which problem it is ([commit](https://github.com/gristlabs/grist-core/commit/7e93fcb6))
* Access rules
  * The Access Rules page warns that Editors who can edit structure may get around table and column rules, for example through formulas. When that applies, the sharing dialog notes "Owner-like data access" under Editor ([commit](https://github.com/gristlabs/grist-core/commit/b10e04e0))
* Accessibility
  * Many menus now work with the keyboard and with screen readers, including menus with checkboxes and grouped items. Contributed by @manuhabitela (#2647)
  * Screen readers announce only new notifications, rather than repeating all those still showing whenever one goes away (#2654)
* Quick Setup
  * When Grist has no way to restart itself, the last step says a restart is needed instead of showing an error, and the "Help us improve" form still submits (#2528)
* Admin Panel
  * Quick Setup's Backups step, and Storage in the Admin Panel, ask the admin to confirm that Grist's storage survives a restart. When the check sees a likely problem, such as data kept in memory or in the container rather than on a volume, it names the paths at risk and suggests a fix (#2635)
  * The Installation page lists the problems found by its checks at the top, with a link to each. Errors are red, warnings amber, and an admin can dismiss one until something changes ([commit](https://github.com/gristlabs/grist-core/commit/15b071f7))
* Build / packaging
  * The build fails when pyodide packages can't be downloaded, rather than going on to produce an image with a broken pyodide sandbox (#2666)

### Fixes

* On some S3-compatible stores, such as DigitalOcean Spaces, saves could stall until the server ran out of memory, because listing a document's versions looped forever (#2632)
* With `APP_STATIC_URL` set, translations failed to load, so the UI showed raw keys such as "columns" in place of labels. A regression in 1.7.21 ([commit](https://github.com/gristlabs/grist-core/commit/3906cdc6))
* Switching a calendar between Day, Week, and Month saved the choice for everyone, or failed with "No write access" for viewers. It now stays local until saved, as with sort and filter (#2658)
* In a line or area chart with split series and a non-numeric x axis, categories stay in order even when the first series lacks some of them (#2615)
* When search jumped to a match on another page, keys typed meanwhile could land in the grid instead of the search box. Search could also skip a match on a page still loading (#2676)
* Moving the cursor with Tab or the arrow keys in a card taller than its widget scrolls the selected field into view (#2625)
* `EDATE()` and `DATEADD()` with months or years stop at the end of a shorter month, so Jan 31 plus one month is Feb 28, not Mar 3 (#2692)
* `RIGHT(text, 0)` returns an empty string instead of the whole text. Contributed by @RaphaelFakhri (#2687)
* Warning banners use dark text instead of white, so they are easier to read. Contributed by @manuhabitela (#2610)
* Requests between Grist servers no longer create unused sessions in Redis, or log "client terminated connection unexpectedly" on requests that succeeded ([commit](https://github.com/gristlabs/grist-core/commit/900eda13))
* A site that a document had been moved away from could not be deleted ([commit](https://github.com/gristlabs/grist-core/commit/1fc1db20))

### Security

* The Docker images run Node.js 22.23.4, which fixes CVE-2026-111497 (remote code execution through brotli-compressed responses) and stops trusting the compromised eMudhra certificate authorities. Images pulled since October 22 already had these fixes; 1.7.22 is the first numbered release with them
* Dependency updates for security advisories, including shell-quote 1.12.0 (#2642), handlebars 4.7.10 (#2638), and proxy-addr 2.0.8 (#2639)

### Full Grist edition extensions

* Assistant
  * The assistant opens in a panel on the left of the page, instead of a floating popup. Cmd/Ctrl-K opens and closes it ([commit](https://github.com/gristlabs/grist-core/commit/e1b8f769))
  * The assistant can read and write the code of a Widget Creator widget, as a draft for the user to save ([commit](https://github.com/gristlabs/grist-core/commit/104c85a3))
  * The assistant keeps a history of conversations. Buttons in its header start a new one or open a searchable list of past ones, which can be renamed and deleted. See the [assistant](https://support.getgrist.com/assistant/) docs ([commit](https://github.com/gristlabs/grist-core/commit/de7e2b7b))
  * A page with a single empty table shows a box for asking the assistant, below the table ([commit](https://github.com/gristlabs/grist-core/commit/83dacb9e))

## Contributions

* Grist Labs: @berhalak, @dsagal, @georgegevoian, @paulfitz, @Spoffy
* @manuhabitela: keyboard and screen-reader support in menus (#2647), warning banner contrast (#2610)
* @RaphaelFakhri: `RIGHT(text, 0)` fix (#2687)
* @fflorent: restart shell off when debugging (#2634)
* @sofianebeloucif: a test fix for `PubSubManager` (#2599)

### Translations

* Barna Kovács
* Martin Harari Thuresson
* Raywan Serdoun
* Titouan Heyrendt

**Full Changelog**: https://github.com/gristlabs/grist-core/compare/v1.7.21...v1.7.22

[Join our Discord Community](https://discord.gg/MYKpYQ3fbP) if you'd like to get into development of Grist.
