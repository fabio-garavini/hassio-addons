> _To update the prebuilt executable you can run `./pocketbase update`._

- ⚠️ Added extra List/Search API rules checks for the client-side `filter`/`sort` relations.

    This is continuation of the effort to eliminate the risk of information disclosure _(and eventually the side-channel attacks that may originate from that)_.

    So far this was accepted tradeoff between performance, usability and correctness since the solutions at the time weren't really practical _(especially with the back-relations as mentioned in ["Security and performance" section in #4417](https://github.com/pocketbase/pocketbase/discussions/4417))_, but with v0.23+ changes we can implement the extra checks without littering the code too much, with very little impact on the performance and at the same time ensuring better out of the box security _(especially for the cases where users operate with sensitive fields like "code", "token", "secret", etc.)_.

    Similar to the previous release, probably for most users with already configured API rules this change won't be breaking, but if you have an _intermediate/junction collection_ that is "locked" (superusers-only) we no longer will allow the client-side relation filter to pass through it and you'll have to set its List/Search API rule to enable the current user to search in it.

    For example, if you have a client-side filter that targets `rel1.rel2.token`, the client must have not only List/Search API rule access to the main collection BUT also to the collections referenced by "rel1" and "rel2" relation fields.

    Note that this change is only for the **client-side** `filter`/`sort` and doesn't affect the execution of superuser requests, API rules and `expand` - they continue to work the same as it is.

    An optional environment variable to toggle this behavior was considered but for now I think having 2 ways of resolving client-side filters would introduce maintenance burden and can even cause confusion (this change should actually make things more intuitive and clear because we can simply say something like _"you can search by a collection X field only if you have List/Search API rule access to it"_ no matter whether the targeted collection is the request's main collection, the first or last relation from the filter chain, etc.).

    If you stumble on an error or extreme query performance degradation as a result of the extra checks, please open a Q&A discussion with the failing request and export of your collections configuration as JSON (_Settings > Export collections_) and I'll try to investigate it.

- Increased the default SQLite `PRAGMA cache_size` to ~32MB.

- Fixed deadlock when manually triggering the `OnTerminate` hook ([#7305](https://github.com/pocketbase/pocketbase/pull/7305); thanks @yerTools).

- Fixed some code comment typos, regenerated the JSVM types and updated npm dependencies.

- Updated `modernc.org/sqlite` to 1.40.0.