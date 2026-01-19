> _To update the prebuilt executable you can run `./pocketbase update`._

- Reverted the `DISTINCT` with `GROUP BY` replacement optimization from v0.36.0 as it was reported to negatively impact the indexes utilization for some queries and the minor performance boost that you may get when used on large records is not enough to justify the more common use ([#7461](https://github.com/pocketbase/pocketbase/discussions/7461)).
    _A better generic deduplication optimization for large records (aka. records with large `text`/`json` fields or many small ones) will be researched but there are no ETAs._

- Updated `modernc.org/sqlite` to v1.44.2 _(SQLite 3.51.2)_.

- Fixed code comment typos.