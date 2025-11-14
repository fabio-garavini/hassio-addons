## Security advisory

Two vulnerabilities found in Grist by a private bug bounty program funded by DINUM (the Interministerial Digital Directorate of the French government) have been addressed.

* Using the fetch URL feature, a user could execute a request to an external server with privileged network access.
    * Mitigation: [ensure that network requests go through a trusted proxy.](https://github.com/gristlabs/grist-core/security/advisories/GHSA-qh95-2qv8-pqx3)
* Users could use the `/compare` endpoint to get document history to parts of a document that they might not have read access to.
    * Mitigation: [the `/compare` endpoint is now restricted to users that have full read access.](https://github.com/gristlabs/grist-core/security/advisories/GHSA-3v78-cw58-v685)

Versions prior to 1.7.6 are known to be vulnerable. Please upgrade.

These advisories are also documented in [our security advisory page](https://github.com/gristlabs/grist-core/security/advisories).
 
## What's Changed

* There was a missing login in Service Accounts API responses. Thanks to DINUM, this has now been fixed, which is important in order to make this feature usable.
* The admin panel now displays information about who is currently assigned the installation admin role.
* Miscellaneous bug fixes and translations.

### Grist Enterprise

* We have streamlined the procedure and instructions for building Grist with Enterprise Edition extensions. This is [now documented](https://github.com/gristlabs/grist-core/?tab=readme-ov-file#building-from-source:~:text=If%20you%20wish%20to%20include%20Grist%20Labs%20enterprise%20extensions%20in%20your%20build) in our README.


[Join our Discord Community](https://discord.gg/MYKpYQ3fbP) if you'd like to get into development of Grist.

**Full Changelog**: https://github.com/gristlabs/grist-core/compare/v1.7.5...v1.7.7