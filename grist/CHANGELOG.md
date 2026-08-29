## What's Changed

### Improvements

* Performance
  * Lookups and summary tables now cost the Python data engine far less memory. Measured at 30% less on a large document ([commit](https://github.com/gristlabs/grist-core/commit/18653743))
* Access rules
  * A memo now shows only when it bears on the block you hit, either as the reason for it or as a remedy that would grant access, and is marked with a lock or a lightbulb accordingly. Memos follow the same precedence as permissions. Access itself is unchanged, only the explanation (#2479)
* UI/UX
  * A Markdown cell cut off by a max row height now shows an ellipsis over a fade in its bottom right corner, as other cell types already did (#2502)
* Custom widgets
  * A widget can declare the columns it needs in its manifest, not only in `grist.ready()`. What `grist.ready()` sends still wins when both are set. `mapColumnNames()` now returns the record without the unmapped field rather than `null`, and the `columns` option is gone from `mapColumnNames()` and `mapColumnNamesBack()`. See the [plugin API reference](https://support.getgrist.com/code/modules/grist_plugin_api/) ([commit](https://github.com/gristlabs/grist-core/commit/dadcb247))
* Admin Panel
  * The Authentication and Sandboxing sections now present each option as a card. In the setup wizard they lead with a recommendation and the Continue button stays disabled until you pick one; in the Admin Panel they show what the server is currently using and pre-select nothing. The OIDC and SAML cards are marked "Requires activation key", and clicking one opens a request for that key. Sandboxing keeps the option you picked, including "No sandboxing", and switching to "No auth" always asks for confirmation ([commit](https://github.com/gristlabs/grist-core/commit/43e1e9af))
  * The edition (community or full) is now recorded in the home database rather than in `config.json`, under the name `GRIST_SERVER_EDITION`, with a one-time migration for existing installations. `GRIST_FORCE_ENABLE_ENTERPRISE` still takes precedence ([commit](https://github.com/gristlabs/grist-core/commit/da352571))
* Internal / infrastructure
  * New `GRIST_ACTIVEDOC_TIMEOUT_SECONDS` sets how long a document stays open after the last client disconnects. Contributed by @fflorent (#2505)
  * jQuery moves to 3.7.1, and jQuery-UI from the unmaintained `components-jqueryui` package to `jquery-ui` 1.14.2, so dependabot can keep it updated. Contributed by @fflorent (#2476)
  * Dependency bumps: `shell-quote` 1.10.0 (fixes a denial of service in `parse`, GHSA-395f-4hp3-45gv) (#2525), `axios` 1.18.0 (#2472), `undici` 6.28.0 (#2510), `dompurify` 3.4.13 (#2516), `engine.io` 6.6.7 (#2475), `typeorm` 0.3.31 (#2484), `morgan` 1.11.0 (#2460), `js-yaml` 4.3.1 (#2519), `tar` 7.5.21 (#2491), `postcss` 8.5.25 (#2500), `fast-uri` 3.1.5 (#2511), `linkify-it` 5.0.2 (#2488), `svgo` 3.3.4 (#2485), `webpack-dev-server` 5.2.6 (#2486), `websocket-driver` 0.7.5 (#2469)
* Documentation
  * The reference for `NOW()` and `TODAY()` now explains when Grist recalculates them. See [Function reference](https://support.getgrist.com/functions/) ([commit](https://github.com/gristlabs/grist-core/commit/8bd355eb))

### Fixes

* A browser tab whose network dropped, such as after a laptop wakes from sleep, showed "Error" and asked for a reload. It now reopens the document. Reconnect attempts also back off against a server that accepts connections and immediately drops them (#2501)
* Documents containing a multi-line f-string formula became unusable on Python 3.12 and later, reporting `KeyError` or "'DocModel' object has no attribute 'tables'" for every action. That has affected the pyodide sandbox since v1.7.13, and source installs with a recent python3 (#2518)
* Renaming a table or column could break the formulas that depend on it, either failing them with an AssertionError or leaving them silently no longer recalculating. Affects formulas returning a record or list of records into a column of type Any (#2540)
* Under some path conditions, Grist could not open a document on Windows with the pyodide sandbox, because none of the sandbox's Python packages installed. The failure is now reported where it happens, rather than later as a missing import (#2517)
* Under some path conditions, importing a file on Windows failed with a sandbox permission error on the temporary file (#2527)
* Downloading a document still at an old schema version failed with a SQLite error (#2541)
* Renaming an attachment failed in any document with access rules (#2514)
* A dialog appeared a moment before it took the keyboard focus, so a key pressed in between went to whatever was focused beforehand. Closing a dialog opened from another dialog now hands the focus straight back to the first one (#2522)
* Hiding fields on a card widget could throw JavaScript errors, for some column types such as Choice List (#2503)
* Detaching a summary table grouped by a RefList column produced TypeError cells throughout ([commit](https://github.com/gristlabs/grist-core/commit/055025ae))
* On a fresh install, applying getgrist.com authentication signed the admin out even when their only session came from the boot key ([commit](https://github.com/gristlabs/grist-core/commit/74d86be6))
* Clearing sessions never worked on installs using Redis, so an authentication change left old logins in place ([commit](https://github.com/gristlabs/grist-core/commit/3901cbe0))

### Update on OIDC/SAML support

As of this release, Grist Labs will no longer be officially supporting SSO via OIDC/SAML outside of the full edition of Grist. If you're already running OIDC or SAML on a self-hosted Grist installation configured before this change, it should continue to work. If you're relying on OIDC/SAML in production, absolutely reach out to us, we want full Grist to work for your organization.

### Full Grist edition extensions

* MCP
  * New `get_custom_widget_settings` and `set_custom_widget_settings` tools read and write a widget's access level and column mapping, and `get_custom_widget_options` / `set_custom_widget_options` read and write the widget's own options, merging on write so one key can change without dropping the rest. Tool inputs validate a mapped column's type the same way the creator panel does, `doc_id` errors are more specific, and `grist_create_table` takes `skip_page` and reports the page it creates. The assistant's tool call limit went from 10 to 20 ([commit](https://github.com/gristlabs/grist-core/commit/dadcb247))
* OAuth apps
  * Popup-based OAuth flows work again. The Cross-Origin-Opener-Policy header is still set on login pages, so a popup flow started by a signed-out user stumbles once there and succeeds on retry ([commit](https://github.com/gristlabs/grist-core/commit/304fcbf8))
* Grist Fleet
  * A fleet comes up without a worker id or internal URL set on every server. Each server works out the URL its peers should reach it on from the network address it actually listens on, and takes its worker id from that. `GRIST_DOC_WORKER_ID`, `APP_DOC_INTERNAL_URL`, and `GRIST_ROUTER_URL` still override; `APP_DOC_URL` together with `GRIST_FLEET` is now refused at startup, and a server with no URL its peers can reach says so ([commit](https://github.com/gristlabs/grist-core/commit/ee28810b))
* Automations
  * Trigger options no longer appear in Document Settings for documents that do not support them ([commit](https://github.com/gristlabs/grist-core/commit/5d9bfe5c))

## Contributions

* Grist Labs: @berhalak, @dsagal, @georgegevoian, @paulfitz
* @fflorent: a `GRIST_ACTIVEDOC_TIMEOUT_SECONDS` setting for how long documents stay open (#2505), jQuery and jQuery-UI upgrade (#2476)

### Translations

* Arif Budiman
* Grégoire Cutzach
* Kévin DUPOND
* Martin Gerken
* Vri
* Петр Артюхов

**Full Changelog**: https://github.com/gristlabs/grist-core/compare/v1.7.17...v1.7.18

[Join our Discord Community](https://discord.gg/MYKpYQ3fbP) if you'd like to get into development of Grist.
