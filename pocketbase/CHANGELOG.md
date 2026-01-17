> _To update the prebuilt executable you can run `./pocketbase update`._

- List query and API rules optimizations:
    - Removed unnecessary correlated subquery expression when using back-relations via single `relation` field.
    - Replaced `DISTINCT` with `GROUP BY id` when rows deduplication is needed and when deemed safe.
        _This should help with having a more stable and predictable performance even if the collection records are on the larger side._

    For some queries and data sets the above 2 optimizations have shown significant improvements but if you notice a performance degradation after upgrading, please open a Q&A discussion with export of your collections structure and the problematic request so that it can be analyzed.

- Added [`strftime(format, timevalue, modifiers...)`](https://pocketbase.io/docs/api-rules-and-filters/#strftimeformat-time-value-modifiers-) date formatting filter and API rules function.
    It works similarly to the [SQLite `strftime` builtin function](https://sqlite.org/lang_datefunc.html) with the main difference that NULL results will be normalized for consistency with the non-nullable PocketBase `text` and `date` fields.
    Multi-match expressions are also supported and works the same as if the collection field is referenced, for example:
    ```js
    // requires ANY/AT-LEAST-ONE-OF multiRel records to have "created" date matching the formatted string "2026-01"
    strftime('%Y-%m', multiRel.created) ?= '2026-01'

    // requires ALL multiRel records to have "created" date matching the formatted string "2026-01"
    strftime('%Y-%m', multiRel.created) = '2026-01'
    ```

- ⚠️ Minor changes to the `search.ResolverResult` struct _(mostly used internally)_:
    - Replaced `NoCoalesce` field with the more explicit `NullFallback` _(`NullFallbackDisabled` is the same as `NoCoalesce:true`)_.
    - Replaced the expression interface of the `MultiMatchSubQuery` field with the concrete struct type `search.MultiMatchSubquery` to avoid excessive type assertions and allow direct mutations of the field.

- Updated `modernc.org/sqlite` to v1.44.1 _(SQLite 3.51.1)_.

- Bumped min Go GitHub action version to 1.25.6 because it comes with some [minor security fixes](https://github.com/golang/go/issues?q=milestone%3AGo1.25.6).