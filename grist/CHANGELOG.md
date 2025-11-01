## What's Changed

### New features

* Inspired by source control workflows, there is a new suggestions feature for crowd-sourcing data. Anyone can suggest a change to a document that the document editors can review then approve or reject.

### API improvements
* Behind the `GRIST_ENABLE_SERVICE_ACCOUNTS` environment variable, there is a new API `api/service-accounts` for enabling, configuring, and using service accounts. A service account is intended for controlling and fine-tuning the scope and access of multiple API keys associated to a login user. Thanks to Grégoire Cutzach of DINUM for the hard work they poured into this feature.
* There are new API endpoints `user/{id}/disable` and `user/{id}/enable` accessible only to admin accounts for enabling/disabling a user, without deleting the user.
* The `/data/delete` API endpoint has been deprecated in favour of `records/delete`.

### Self-hosting configuration
* In order to better allow long uploads or downloads, there are three new environment variables: `GRIST_REQUEST_TIMEOUT_MS`, `GRIST_KEEP_ALIVE_TIMEOUT_MS`, and `GRIST_HEADERS_TIMEOUT_MS`.

### UI improvements
* When creating forms, it is now possible to set fields as hidden, as well as pre-populating those fields via a URL query parameter.
* There are new shortcuts in the add column menu for adding various kinds of parts of dates to a table that already contains a date.
* Copy-pasting into attachment columns now works.
* There is now a download menu option in the document list

### Accessibility
* The search bar and the creator panel now have better keyboard navigation
* Long lists in a form have better navigation
* The descriptions of keyboard shortcut descriptions are now translated
* Pie charts have been made more visually pleasing
* The colors for selected buttons in the creator panel are now easier to read

### Other

* Miscellaneous bug fixes and translations

**Full Changelog**: https://github.com/gristlabs/grist-core/compare/v1.7.4...v1.7.5

[Join our Discord Community](https://discord.gg/MYKpYQ3fbP) if you'd like to get into development of Grist.