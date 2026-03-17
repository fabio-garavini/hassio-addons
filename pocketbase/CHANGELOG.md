> _To update the prebuilt executable you can run `./pocketbase update`._

- Fixed high memory usage with large file uploads ([#7572](https://github.com/pocketbase/pocketbase/discussions/7572)).

- Updated the rate limiter reset rules to follow a more traditional fixed window strategy _(aka. to be more close to how it is presented in the UI - allow max X user requests under Ys)_ since several users complained that the older algorithm was not intuitive and not suitable for large intervals.
    _Approximated sliding window strategy was also suggested as a better compromise option to help minimize traffic spikes right after reset but the additional tracking could introduce some overhead and for now it is left aside until we have more tests._

- Updated `modernc.org/sqlite` to v1.46.2 and SQLite 3.51.3.
    _⚠️ SQLite 3.51.3 fixed a [database corruption bug](https://sqlite.org/wal.html#walresetbug) that is very unlikely to happen (with PocketBase even more so because we queue on app level all writes and explicit transactions through a single db connection), but still it is advised to upgrade._

- Updated other minor Go and npm deps.
    _The min Go version in the go.mod of the package was also bumped to Go 1.25.0 because some of the newer deps require it._