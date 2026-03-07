> _To update the prebuilt executable you can run `./pocketbase update`._

- Set `NumberField.OnlyInt:true` for the generated View collection schema fields when a view column expression is known to return int-only values ([#7538](https://github.com/pocketbase/pocketbase/issues/7538)).

- Documented the `unmarshal` JSVM helper ([#7543](https://github.com/pocketbase/pocketbase/issues/7543)).

- Added extra read check after the `Store.GetOrSet` write lock to prevent races overwriting an already existing value.

- Added empty records check for the additional client-side filter's ListRule constraint that was introduced in v0.32.0 ([presentator#206](https://github.com/presentator/presentator/issues/206)).

- Set a fixed `routine.FireAndForget()` debug stack trace limit to 2KB.

- Bumped min Go GitHub action version to 1.26.1 because it comes with some [minor bug and security fixes](https://github.com/golang/go/issues?q=milestone%3AGo1.26.1).

- Typos and other minor doc fixes.