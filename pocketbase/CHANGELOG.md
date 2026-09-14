> _To update the prebuilt executable you can run `./pocketbase update`._

- Fixed migration deadlock if a logs db write happens to run while the migration is still executing ([#7836](https://github.com/pocketbase/pocketbase/issues/7836)).

- `app.ResetBootstrapState()` was soft-deprecated in favour of `app.ClearBootstrap()`.
    _Additionally a new `app.OnBootstrapClear()` hook was added to allow clearing custom allocated `OnBootstrap` resources in case the app uses a non-standard initialization (e.g. doesn't call `Start()` or intentionally skip the `OnTerminate` hook)._

- Bumped `golang.org/x/*` dependencies.