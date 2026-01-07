## Major changes in 2.0

- Database backend switched from LevelDB to SQLite. There is a migration on
  first launch which can be lengthy for larger setups. The new database is
  easier to understand and maintain and, hopefully, less buggy.

- The logging format has changed to use structured log entries (a message
  plus several key-value pairs). Additionally, we can now control the log
  level per package, and a new log level WARNING has been inserted between
  INFO and ERROR (which was previously known as WARNING...). The INFO level
  has become more verbose, indicating the sync actions taken by Syncthing. A
  new command line flag `--log-level` sets the default log level for all
  packages, and the `STTRACE` environment variable and GUI has been updated
  to set log levels per package. The `--verbose` and `--logflags` command
  line options have been removed and will be ignored if given.

- Deleted items are no longer kept forever in the database, instead they are
  forgotten after fifteen months. If your use case require deletes to take
  effect after more than a fifteen month delay, set the
  `--db-delete-retention-interval` command line option or corresponding
  environment variable to zero, or a longer time interval of your choosing.

- Modernised command line options parsing. Old single-dash long options are
  no longer supported, e.g. `-home` must be given as `--home`. Some options
  have been renamed, others have become subcommands. All serve options are
  now also accepted as environment variables. See  `syncthing --help` and
  `syncthing serve --help` for details.

- Rolling hash detection of shifted data is no longer supported as this
  effectively never helped. Instead, scanning and syncing is faster and more
  efficient without it.

- A "default folder" is no longer created on first startup.

- Multiple connections are now used by default between v2 devices. The new
  default value is to use three connections: one for index metadata and two
  for data exchange.

- The following platforms unfortunately no longer get prebuilt binaries for
  download at syncthing.net and on GitHub, due to complexities related to
  cross compilation with SQLite:

  - dragonfly/amd64
  - solaris/amd64
  - linux/ppc64
  - netbsd/*
  - openbsd/386 and openbsd/arm
  - windows/arm

- The handling of conflict resolution involving deleted files has changed. A
  delete can now be the winning outcome of conflict resolution, resulting in
  the deleted file being moved to a conflict copy.

This release is also available as:

* APT repository: https://apt.syncthing.net/

* Docker image: `docker.io/syncthing/syncthing:2.0.13` or `ghcr.io/syncthing/syncthing:2.0.13`
  (`{docker,ghcr}.io/syncthing/syncthing:2` to follow just the major version)

## What's Changed
### Fixes
* fix(beacon): don't join multicast groups on non-multicast interfaces (fixes #10497) by @marbens-arch in https://github.com/syncthing/syncthing/pull/10498
### Other
* chore(model): refactor context handling for folder type by @calmh in https://github.com/syncthing/syncthing/pull/10472
* build: fix docker build by ensuring qemu by @calmh in https://github.com/syncthing/syncthing/pull/10492
* chore(beacon): more verbose debug logging by @marbens-arch in https://github.com/syncthing/syncthing/pull/10496
* build: fix hash failure by limiting globbing by @calmh in https://github.com/syncthing/syncthing/pull/10505
* chore: tweak pull retry logic by @calmh in https://github.com/syncthing/syncthing/pull/10491

**Full Changelog**: https://github.com/syncthing/syncthing/compare/v2.0.12...v2.0.13