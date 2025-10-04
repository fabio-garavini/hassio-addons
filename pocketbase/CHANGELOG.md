> _To update the prebuilt executable you can run `./pocketbase update`._

- ⚠️ Excluded the `lost+found` directory from the backups ([#7208](https://github.com/pocketbase/pocketbase/pull/7208); thanks @lbndev).
    _If for some reason you want to keep it, you can restore it by editing the `e.Exclude` list of the `OnBackupCreate` and `OnBackupRestore` hooks._

- Minor tests improvements (disabled initial superuser creation for the test app to avoid cluttering the std output, added more tests for the `s3.Uploader.MaxConcurrency`, etc.).

- Updated `modernc.org/sqlite` and other Go dependencies.