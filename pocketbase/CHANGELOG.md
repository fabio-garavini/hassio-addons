> _To update the prebuilt executable you can run `./pocketbase update`._

- Added `Cc` and `Bcc` recipients to the dev `sendmail` command for consistency with the SMTP mailer.

- Added extra hardening options to the Microsoft OAuth2 provider allowing developers to specify the preferred safe email extraction method ([#7756](https://github.com/pocketbase/pocketbase/discussions/7756)).

- Updated goja and the related `golang.org/x/*` dependencies _(`WeakMap` regression fixes)_.

- Bumped the min Go GitHub action version to 1.26.5 as it includes some [minor security fixes](https://github.com/golang/go/issues?q=milestone%3AGo1.26.5).