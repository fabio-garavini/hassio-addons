## What's Changed

### New features

* [Optional authentication using getgrist.com accounts](https://support.getgrist.com/install/sign-in-with-grist/)
  * This provides an easy-to-use authentication option for self-hosted installations that don't want to run their own authentication servers or configure other external identity providers.
* [Import from Airtable](https://support.getgrist.com/imports/#import-from-airtable)
  * Airtable bases can be imported directly into new or existing Grist documents.
* [New environment variables](https://github.com/gristlabs/grist-core/blob/v1.7.11/README.md#environment-variables) have been added to provide better control over which users are able to access your Grist instance. `GRIST_PERSONAL_ORGS` will disable personal organizations, while `GRIST_ORG_CREATION_ANYONE` will prevent any non-admins from creating new organizations.
* [Configurable email notifications for suggestions](https://support.getgrist.com/document-settings/#notifications)

### Improvements

* Forms
  * Allow the maximum options limit on Forms to be configured (defaults to 30 options, configurable up to 1000)
* Sandboxing / security
  * Limit GVisor to 8 process by default
* Suggestions
  * Display references and reference lists in a friendlier fashion
  * Prevent conditional formatting changes from being displayed as suggestions
* UI/UX
  * Add a confirmation dialog when a resource is being shared publicly
  * Hide the bell icon showing connection state when Grist is connected and functioning normally

### Fixes

* API endpoints
  * Correct attachment endpoints having inconsistent permissions (#2116)
* Exports
  * Fix XLSX downloads when the export options don't include tableId (#2054)
* Import
  * Fix an error that would pop up when doing multiple successive imports with the Pyodide sandbox enabled (#2073)
  * Fix an error with importing when the Grist instance is hosted on Windows (e.g. Grist desktop) (#2064)
* Suggestions
  * Fix suggestions occasionally displaying incorrectly in documents with deleted tables (#2069)
* SCIM
  * Fix role members having incorrect entries (#2051)
* UI/UX
  * Fix doubled-up overlays in filter-linked widgets that have rows blocked by access control lists (#2056)
  * Fix virtual table display and scrollbar issues on MacOS (#2075)

## Contributions

@fflorent 

### Translations

@VaclavDort
@filiphanes
@qleroy
@mirithillion
@hexaltation
@alimahwer
@thuma
@audez
@vonbraun22
@umam15
@kraudio
@xabirequejo
@Artur Dabrowski
@Thanyanit-J 

**Full Changelog**: https://github.com/gristlabs/grist-core/compare/v1.7.10...v1.7.11

[Join our Discord Community](https://discord.gg/MYKpYQ3fbP) if you'd like to get into development of Grist.