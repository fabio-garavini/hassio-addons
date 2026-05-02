> _To update the prebuilt executable you can run `./pocketbase update`._

- Fixed password fields not being detected as changed ([#7670](https://github.com/pocketbase/pocketbase/issues/7670)).

- Added the local time zone name next to the `date` field label.

- Reload trusted proxy info UI after settings save.

- Other minor improvements (skips the duplicated record ids from the `IN` expand list, reordered confirm-email-change error checks to minimize enumeration attacks, etc.).