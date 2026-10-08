> _To update the prebuilt executable you can run `./pocketbase update`._

- Minor improvements for the JSVM migration error handling:
    - Included the recovered panic stack trace of `routine.SafeWrap` in the returned error (max 2KB).
    - Wrapped the individual `up`/`down` JSVM migration arguments in `routine.SafeWrap` so that in case of panic we can still print the failed js migration filename.

- Updated `modernc.org/sqlite` to 1.60.1 _(minor performance improvements for queries with large text fields and/or many params)_.

- Bumped the min Go GitHub action version to 1.27.2 as it includes several [`net/http` security fixes](https://github.com/golang/go/issues?q=milestone%3AGo1.27.2).
    _One of the fixes is for a DoS that could potentially affect PocketBase applications and it is advised to update._

- Other minor fixes _(godoc typos, normalized negative jsvm pool size, extra CORS wildcard subdomain checks to prevent misuse, support `Promise` as autocomplete suggestions return, autoexpand textarea scrollbar-gutter fix, etc.)_.
