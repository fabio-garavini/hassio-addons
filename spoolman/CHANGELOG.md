Primarily this fixes the docker issues on armv7 platform, as well as new filtering and sorting of extra fields!

## What's Changed
* Add filtering and sorting for custom fields by @daften in https://github.com/Donkie/Spoolman/pull/773
* fix(externaldb): report the unwritable path instead of raising NameError by @lexfrei in https://github.com/Donkie/Spoolman/pull/964
* ci: sign the released images with cosign by @lexfrei in https://github.com/Donkie/Spoolman/pull/963
* fix: ignore Kubernetes service-link value in SPOOLMAN_PORT by @lexfrei in https://github.com/Donkie/Spoolman/pull/961
* fix(docker): link libstdc++ into the armv7 greenlet extension by @lexfrei in https://github.com/Donkie/Spoolman/pull/971
* Bump setuptools from 78.1.1 to 83.0.0 by @dependabot[bot] in https://github.com/Donkie/Spoolman/pull/970
* Bump fast-uri from 3.1.3 to 3.1.4 in /client by @dependabot[bot] in https://github.com/Donkie/Spoolman/pull/972
* fix: reject an unusable PUID or PGID by @lexfrei in https://github.com/Donkie/Spoolman/pull/962

## New Contributors
* @daften made their first contribution in https://github.com/Donkie/Spoolman/pull/773
* @lexfrei made their first contribution in https://github.com/Donkie/Spoolman/pull/964

**Full Changelog**: https://github.com/Donkie/Spoolman/compare/v0.24.0...v0.25.0