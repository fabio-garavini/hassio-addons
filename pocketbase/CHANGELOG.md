> _To update the prebuilt executable you can run `./pocketbase update`._

- Updated the Discord `AuthUser.Name` field to use `global_name` ([#7603](https://github.com/pocketbase/pocketbase/pull/7603); thanks @HansHans135).

- Fixed settings SMTP password clear persistence.

- Added extra OAuth2 checks when downloading the avatar URL to prevent internal network probing requests in case of a malicious/vulnerable vendor.

- Updated `modernc.org/sqlite` to v1.48.2 _(vfs and other error path related fixes)_.

- Updated min Go GitHub action version to 1.26.2 because it comes with some [minor security fixes](https://github.com/golang/go/issues?q=milestone%3AGo1.26.2).

- Other small improvements _(updated `$apis.static` JSVM documentation, fixed comment typos, added missing file close on seek error, etc.)_.