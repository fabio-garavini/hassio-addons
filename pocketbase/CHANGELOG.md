# 0.29.0

- Enabled calling the `/auth-refresh` endpoint with nonrenewable tokens.
    _When used with nonrenewable tokens (e.g. impersonate) the endpoint will simply return the same token with the up-to-date user data associated with it._

- Added the triggered rate rimit rule in the error log `details`.

- Added optional `ServeEvent.Listener` field to initialize a custom network listener (e.g. `unix`) instead of the default `tcp` ([#3233](https://github.com/pocketbase/pocketbase/discussions/3233)).

- Added `toBytes` JSVM helper ([#6935](https://github.com/pocketbase/pocketbase/issues/6935)).

- Fixed request data unmarshalization for the `DynamicModel` array/object fields ([#7022](https://github.com/pocketbase/pocketbase/discussions/7022)).

- Fixed Dashboard page title `-` escaping ([#6982](https://github.com/pocketbase/pocketbase/issues/6982)).

- Other minor improvements (updated first superuser console text when running with `go run`, clarified trusted IP proxy header label, wrapped the backup restore in a transaction as an extra precaution, updated deps, etc.).