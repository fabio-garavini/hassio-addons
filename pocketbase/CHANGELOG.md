> _To update the prebuilt executable you can run `./pocketbase update`._

- Added `RealtimeConnectRequestEvent.MaxTimeout` field to specify the absolute max duration a realtime connection can remain open (default to 30mins).
    _This is in addition to the `IdeTimeout` of 5mins in order to prevent misuse and to allow the GC to run more regularly._

- Added extra checks for the connected user IP in the realtime APIs to prevent bruteforce guest subscription update attempts and to serve as an extra protection for the "all-in-one" OAuth2 realtime handler.

- Don't reset the records list pagination on record update ([#7694](https://github.com/pocketbase/pocketbase/issues/7694)).

- Updated all `golang.org/x/` packages to cover the recent [security fixes](https://groups.google.com/g/golang-announce/c/PdiGK3xulk4) _(none of them should be a critical issue in PocketBase but nonetheless it is advised to update)_.
