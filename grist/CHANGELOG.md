## Notable fixes and improvements

* New intro screen for Access Rules:
  * A document without rules now shows an intro screen with an "Enable Access Rules" button:
    * On confirming, it creates the initial recommended rules: namely, disable structure permission for non-owners
  * There is also a "Disable Access Rules" button that's shown when there are no custom rules
* Restrict users who can view all data from viewing Access Rules by default:
  * If permission to view Access Rules is enabled, then there is a new option: to restrict non-owners from downloading or copying the document
  * This restriction is added by default when permission to view Access Rules is given
  * Granting permission to view Access Rules and removing the restriction on downloading/copying the document approximates the previous behavior
* Redesigned authentication section in Admin Panel for configuring user authentication in self-managed Grist
* Org and workspace modifications are now limited to users with owner permissions
* Document owners can now resolve and reopen comment threads, and delete comments
* Fixes for some frontend memory leaks
* Fixes for some styling issues when printing a document
* Fix for broken enable/disable document endpoints in multi-server environments
* Optimizations to row filtering in Access Rules
* Show a "record is unavailable" message when a user opens a record card blocked by ACLs [PR #1896](https://github.com/gristlabs/grist-core/pull/1896)
* Fix how zero Date/DateTimes look to other formulas [PR #1995](https://github.com/gristlabs/grist-core/pull/1995)
* Don't force reloads when a column is added to a user attribute table [PR #2035](https://github.com/gristlabs/grist-core/pull/2035)
* Several improvements to RecordSet handling [PR #1992](https://github.com/gristlabs/grist-core/pull/1992)
* Correctly share forms with references with no display column [PR #2008](https://github.com/gristlabs/grist-core/pull/2008)
* Improve rendering of changes in suggestions [PR #1977](https://github.com/gristlabs/grist-core/pull/1977)
* Show a count of changes when making a suggestion [PR #1960](https://github.com/gristlabs/grist-core/pull/1960)
* Validate emails used to share access [PR #2016](https://github.com/gristlabs/grist-core/pull/2016)

## Contributions

* @fflorent: Bump js-yaml from 3.14.1 to 4.1.1 [PR #1961](https://github.com/gristlabs/grist-core/pull/1961)
* @fflorent: Bump Typescript to version 4.9.4 [PR #1993](https://github.com/gristlabs/grist-core/pull/1993)
* @fflorent: Eslint: Remove function appCommWaiter (dead code) [PR #2001](https://github.com/gristlabs/grist-core/pull/2001)
* @fflorent: Upgrade eslint [PR #2000](https://github.com/gristlabs/grist-core/pull/2000) [PR #2005](https://github.com/gristlabs/grist-core/pull/2005) [PR #2020](https://github.com/gristlabs/grist-core/pull/2020) [PR #2030](https://github.com/gristlabs/grist-core/pull/2030)
* @fflorent: develop.md: Simplify the paragraph detailing the coding rules [PR #2031](https://github.com/gristlabs/grist-core/pull/2031)
* @manuhabitela: Make sure a Form Submit row can't be removed with keyboard [PR #1979](https://github.com/gristlabs/grist-core/pull/1980)
* @manuhabitela: Choices text box: make sure all choice tokens are readable [PR #1982](https://github.com/gristlabs/grist-core/pull/1982)

### Translations

* @maksim2005UKR
* @hexaltation
* @h0r0m
* @winjie0618
* @audez
* @umam15
* @mirithilion
* @oliverne
* @vonbraun22
* Alexey
* Paul Janzen

**Full Changelog**: https://github.com/gristlabs/grist-core/compare/v1.7.8...v1.7.9

[Join our Discord Community](https://discord.gg/MYKpYQ3fbP) if you'd like to get into development of Grist.