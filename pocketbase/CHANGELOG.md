> _To update the prebuilt executable you can run `./pocketbase update`._

- Added new "SQL console" section under _Settings > Debug_ allowing executing any raw SQL query from the UI ([#2236](https://github.com/pocketbase/pocketbase/issues/2236); [#7638](https://github.com/pocketbase/pocketbase/discussions/7638)).
    _Note that this is intended for one-off analytic queries, the occasional `VACUUM`/`PRAGMA optimize` or debug purposes and not as the primary interface for interacting with your PocketBase data because it can break your application if not used with proper care!_

- Send system email alerts to superusers in case of an error with the automated backups ([#7698](https://github.com/pocketbase/pocketbase/issues/7698)).

- Various minor improvements and fixes:
    - fixed logs bulk selection export error
    - optimized logs and records list rendering
    - allowed word breaking in labels
    - text contrast improvements
    - registered missing `oidc2` and `oidc3` option fields
    - updated default email template texts for consistency
    - updated `modernc.org/sqlite` to v1.51.0
    - etc.