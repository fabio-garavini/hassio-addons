> _To update the prebuilt executable you can run `./pocketbase update`._

- Reverted the auto panic recover handling for the cli commands to preserve the old behavior and allow panic to force exit with non-zero code ([#7781](https://github.com/pocketbase/pocketbase/issues/7781)).
    _Proper command non-zero exit support will be available with the next v0.40/v0.41 release._

- Minor UI improvements (added placeholder loader for the logs chart, npm dev deps update, etc.).

- Updated `modernc.org/sqlite` to v1.55.0 _(DSN query params compatibility and doc changes)_.