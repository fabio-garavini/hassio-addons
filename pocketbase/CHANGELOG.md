> _To update the prebuilt executable you can run `./pocketbase update`._

> [!IMPORTANT]
> This release include a security fix related to [#7662](https://github.com/pocketbase/pocketbase/discussions/7662).

- Added backups list scroll container ([#7655](https://github.com/pocketbase/pocketbase/issues/7655)).

- Optimized record upsert and preview modals data loading to minimize layout jumps.

- Fixed SMTP IPv6 network address format ([#7659](https://github.com/pocketbase/pocketbase/issues/7659)).

- Fixed autocomplete selection not properly updating the underlying input value ([#7664](https://github.com/pocketbase/pocketbase/issues/7664)).

- Added `ghupdate.BaseURL` config option ([#7665](https://github.com/pocketbase/pocketbase/issues/7665)).

- Added dummy bcrypt password check for the failure auth path to minimize enumeration timing attacks when registrations are disabled.

- Adjusted Bitbucket, GitHub, GitLab and Gitea/Forgejo OAuth2 providers to better reflect recent API updates and doc references.
    _In case the userinfo data is not sufficient, some of the providers now send a separate list emails request in order to minimize eventual linking security issues caused by custom onpremise setups (e.g. Gitea/Forgejo allows skipping the email verification if an ENV variable is configured)._

- ⚠️ Fixed a pre-hijacking OAuth2 linking vulnerability ([#7662](https://github.com/pocketbase/pocketbase/discussions/7662); thanks @Alardiians for reporting it privately).

- Bumped Go and npm dependencies.