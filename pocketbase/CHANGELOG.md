> _To update the prebuilt executable you can run `./pocketbase update`._

- Added extra `id` characters validation in addition to the user specified regex pattern ([#7312](https://github.com/pocketbase/pocketbase/issues/7312)).
    _The following special characters are always forbidden: `./\|"'``<>:?*%$\n\r\t\0 `. Common reserved Windows file names such as `aux`, `prn`, `con`, `nul`, `com1-9`, `lpt1-9` are also not allowed._
    _The list is not exhaustive but it should help minimizing eventual filesystem compatibility issues in case of wildcards or other loose regex patterns._

- Added `{ALERT_INFO}` placeholder to the auth alert mail template ([#7314](https://github.com/pocketbase/pocketbase/issues/7314)).
    _⚠️ `mails.SendRecordAuthAlert(app, authRecord, info)` also now accepts a 3rd `info` string argument._

- Updated Go deps.