> _To update the prebuilt executable you can run `./pocketbase update`._

- Properly reset JSVM global `$app` overwrite so that pooled executors always get a clean state.

- Minor UI improvements:
    - prevent resetting number inputs with leading 0 while still typing (normalized in `onchange`)
    - added support for `Shift + Click` range bulk selection ([#7759](https://github.com/pocketbase/pocketbase/issues/7759))

- Bumped `golang.org/x/*` indirect dependencies as there are some minor security fixes.

- Updated `modernc.org/sqlite` to v1.54.0 ([SQLite 3.53.3](https://sqlite.org/src/timeline?from=version-3.53.2&to=version-3.53.3&to2=branch-3.53)).