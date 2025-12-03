> _To update the prebuilt executable you can run `./pocketbase update`._

- Added missing `:` char to the autocomplete regex ([#7353](https://github.com/pocketbase/pocketbase/pull/7353); thanks @ouvreboite).

- Added "Copy raw JSON" collection dropdown option ([#7357](https://github.com/pocketbase/pocketbase/issues/7357)).

- Updated Go deps and JS SDK.

- Bumped min Go GitHub action version to 1.25.5 because it comes with some [minor security fixes](https://github.com/golang/go/issues?q=milestone%3AGo1.25.5).
    _The runner action was also updated to `actions/setup-go@v6` since the previous v5 Go source seems [no longer accessible](https://github.com/actions/setup-go/pull/665#issuecomment-3416693714)._