> _To update the prebuilt executable you can run `./pocketbase update`._

- Eagerly escape the S3 request path following the same rules as in the S3 signing header ([#7153](https://github.com/pocketbase/pocketbase/issues/7153)).

- Added Lark OAuth2 provider ([#7130](https://github.com/pocketbase/pocketbase/pull/7130); thanks @mashizora).

- Increased test tokens `exp` claim to minimize eventual issues with reproducible builds ([#7123](https://github.com/pocketbase/pocketbase/issues/7123)).

- Added `os.Root` bindings to the JSVM ([`$os.openRoot`](https://pocketbase.io/jsvm/functions/_os.openRoot.html), [`$os.openInRoot`](https://pocketbase.io/jsvm/functions/_os.openInRoot.html)).

- Added `osutils.IsProbablyGoRun()` helper to loosely check if the program was started using `go run`.

- Various minor UI improvements (updated collections indexes UI, enabled seconds in the datepicker, updated helper texts, etc.).

- ⚠️ Updated the minimum package Go version to 1.24.0 and bumped Go dependencies.