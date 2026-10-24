> _To update the prebuilt executable you can run `./pocketbase update`._

- Replaced the GitHub update command with update from the new host in relation to [#7841](https://github.com/pocketbase/pocketbase/discussions/7841).
    ⚠️ Note that this will be most likely the last release here on GitHub. The next time when you run update, new releases will be fetched from `https://ganigeorgiev.com` _(there is nothing there yet)_.

- Additional fileblob bucket escape checks for just in case if the filesystem abstraction is used as standalone without the PocketBase validations.

- Added a global restriction for the max `WxH` pixels size when generating a thumb to reduce the risk of excessive memory usage.
    The issue was initially privately reported by @reload3d but it is treated as regular public issue since it is a [known Go caveat](https://github.com/golang/go/issues/27830).
    The default limit is pretty generous and currently set to max `250<<20 (262144000)` pixels and can be changed with the env `PB_THUMBS_MAX_SOURCE_PIXELS`.
    **The workaround is not bulletproof and thumbs generation remains one of the main culprit for potential OOMs in PocketBase**, so better solutions will have to be investigated in the future, including eventually switching to [libvips](https://github.com/libvips/libvips) or other similar library once there is [better CGO portability](https://github.com/golang/go/issues/81450) _(if you have better suggestions, please open a discussion)_.

- Bumped the min Go GitHub action version to 1.27.3 as it includes a [security fix](https://groups.google.com/g/golang-announce/c/66pojueaQek) related to the recent eMudhra CA compromise.
    _I didn't rush a fix 2 days ago as the impact for most PocketBase servers is not that serious and requires to already have a MiTM, but nonetheless it is recommended to update. Please make sure to also check for OS/Docker image updates to ensure that you have the latest `ca-certificates` bundle._

- Bumped `golang.org/x/` dependencies ([#7865](https://github.com/pocketbase/pocketbase/discussions/7865)).

- Bumped goja and its related dependencies _(string allocations optimization, `Date.getYear/setYear` support and other minor correctness fixes)_.

- Minor UI fixes - superuser IPs description grammar fix, rotating btn loader icon alignment fix, slight dark background correction in attempt to minimize the color profile differences between Chrome and Firefox, etc.
