> _To update the prebuilt executable you can run `./pocketbase update`._

- Silenced the superuser IPs confirmation if there is no change.

- Updated the _experimental_ UI extensions APIs to allow top-level `await` in the initialization script.

- Force unset the auth state of existing realtime connections on user password, collection secret, etc. changes.
    _This is not strictly necessary because the realtime connections have short-lived idle timeout by design but nonetheless it was implemented to minimize the attack vectors._

- Added error marker for each collection tab and fixed the styles of the raw errors tooltip.

- Fixed indexes collection update error ([#7689](https://github.com/pocketbase/pocketbase/issues/7689)).
    _⚠️ The fix comes with a system migration that resaves all collections with indexes to ensure that all indexes are normalized and available in the `Collection.Indexes` field (it will also include indexes created manually via the sqlite3 cli or other external tool)._
    _If you are using a test `pb_data` for your Go automation tests you may want to apply the migration to it too so that it runs only once and not for each execution of your tests, aka. you could run once `go run main.go migrate up --dir="/path/to/test_pb_data"`._

- Updated `modernc.org/sqlite` to v1.50.1 (SQLite 3.53.1).

- Other minor fixes (_updated API preview examples, fixed code comment typos, etc._).