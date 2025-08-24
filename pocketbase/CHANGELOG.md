> _To update the prebuilt executable you can run `./pocketbase update`._

- Try to forward Apple OAuth2 POST redirect user's name so that it can be returned (and eventually assigned) with the success response of the all-in-one auth call ([#7090](https://github.com/pocketbase/pocketbase/issues/7090)).

- Fixed `RateLimitRule.Audience` code comment ([#7098](https://github.com/pocketbase/pocketbase/pull/7098); thanks @iustin05).

- Mocked `syscall.Exec` when building for WASM ([#7116](https://github.com/pocketbase/pocketbase/pull/7116); thanks @joas8211).
    _Note that WASM is not officially supported PocketBase build target and many things may not work as expected._

- Registered missing `$filesystem`, `$mails`, `$template` and `__hooks` bindings in the JSVM migrations ([#7125](https://github.com/pocketbase/pocketbase/issues/7125)).

- Regenerated JSVM types to include methods from structs with single generic parameter.

- Updated Go dependencies.

