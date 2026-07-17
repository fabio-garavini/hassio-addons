> _To update the prebuilt executable you can run `./pocketbase update`._

> [!IMPORTANT]
> This release includes a security fix related to [#7762](https://github.com/pocketbase/pocketbase/discussions/7762).

- Replaced `github.com/go-ozzo/ozzo-validation` with the fork `github.com/pocketbase/ozzo-validation` since the original library has recently changed ownership and the new maintainer cannot be trusted.
  _There are plans to create eventually a new validation library from scratch more suited for our needs in PocketBase because ozzo-validation is known to have some minor performance and obscure regex issues, but until then we'll stick with the fork (and if you use `ozzo-validation` in your own Go code, I'd suggest to swap the imports with the fork)_.

- Fixed missing import collection `fields` property access ([#7760](https://github.com/pocketbase/pocketbase/issues/7760)).

- Fixed View collection `*` validator and added more friendly error messages ([#7761](https://github.com/pocketbase/pocketbase/issues/7761)).

- ⚠️ Security fix for unhandled panic in internal worker goroutines ([#7762](https://github.com/pocketbase/pocketbase/discussions/7762)).
    _To prevent this from showing again, all existing internal worker functions were wrapped with [`routine.SafeWrap(f)`](https://pkg.go.dev/github.com/pocketbase/pocketbase/tools/routine#SafeWrap) (auto recovers and returns any eventual panic as regular error)._
