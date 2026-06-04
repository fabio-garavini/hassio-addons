> _To update the prebuilt executable you can run `./pocketbase update`._

- Fixed multiple select options wrapping ([#7720](https://github.com/pocketbase/pocketbase/issues/7720)).

- Return the hidden record data fields for superusers realtime subscribers ([#7721](https://github.com/pocketbase/pocketbase/issues/7721)).

- Added default panic-recover handling for the cron jobs to avoid terminating the server on panic.

- Bumped the min Go GitHub action version to 1.26.4 as it includes some [minor security fixes](https://github.com/golang/go/issues?q=milestone%3AGo1.26.4).