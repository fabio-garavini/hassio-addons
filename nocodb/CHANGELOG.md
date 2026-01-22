## 🐛 Closed Issues
- [**closed**] 🐛 Bug: CSV downloaded via Share link does not include UTF-8 BOM (Korean characters broken) [#12889](https://github.com/nocodb/nocodb/issues/12889)
- [**closed**] 🐛 Bug: Super Admin role not recognized by v1 API endpoints - 403 "Base is not accessible" [#12882](https://github.com/nocodb/nocodb/issues/12882)
- [**closed**] 🐛 Bug: Rename View does not work on self-hosted after migrating base to V3 [#12868](https://github.com/nocodb/nocodb/issues/12868)
- [**closed**] 🐛 Bug: migration fails when updating from 0.265.1 to 0.301.1 [#12867](https://github.com/nocodb/nocodb/issues/12867)
- [**closed**] in share view (grid) and grouping, the sum is not displayed [Self-host] [#12862](https://github.com/nocodb/nocodb/issues/12862)
- [**closed**] 🐛 Bug: MigrationLocked error on startup after updating to 0.301.0 [#12848](https://github.com/nocodb/nocodb/issues/12848)
- [**closed**] 🐛 Solved - Bug: Altering database throws error when upgrading to 0.301.0 [#12840](https://github.com/nocodb/nocodb/issues/12840)
- [**closed**] 🐛 Bug: "Schema alterations are disabled for this source" when changing Form View – External data source. [#12824](https://github.com/nocodb/nocodb/issues/12824)
- [**🔎 Status: More Info Needed**] 🐛 Bug:  Thumbnails not generated for attachments uploaded via REST API [#12787](https://github.com/nocodb/nocodb/issues/12787)
- [**closed**] 🐛 Bug: Need to click 2 times to change the database after opening the page [#12690](https://github.com/nocodb/nocodb/issues/12690)

## What's Changed
* Change internal server error message to more user friendly by @fendy3002 in https://github.com/nocodb/nocodb/pull/12859
* fix: Export CSV related bug by @pranavxc in https://github.com/nocodb/nocodb/pull/12853
* Nc Feat: base audit logs by @rameshmane7218 in https://github.com/nocodb/nocodb/pull/12864
* fix: Shared view groupBy aggregation issue by @rameshmane7218 in https://github.com/nocodb/nocodb/pull/12870
* Nc fix/relation data fetcher nocoexecute by @rameshmane7218 in https://github.com/nocodb/nocodb/pull/12872
* chore: upgrade request-filtering-agent to version 3.2.0 by @fendy3002 in https://github.com/nocodb/nocodb/pull/12793
* fix: workflow timeout issues by @DarkPhoenix2704 in https://github.com/nocodb/nocodb/pull/12873
* Nc feat/editor behaviour by @dstala in https://github.com/nocodb/nocodb/pull/12863
* Nc chore/nc concurrent by @pranavxc in https://github.com/nocodb/nocodb/pull/12884
* Sync ee changes by @pranavxc in https://github.com/nocodb/nocodb/pull/12883
* fix: missing changes for ncconcurrent by @fendy3002 in https://github.com/nocodb/nocodb/pull/12886
* Nc Fix: Sentry errors 15 jan by @rameshmane7218 in https://github.com/nocodb/nocodb/pull/12879
* Nc Fix: Add skeleton in rich text cell while parsing it  by @rameshmane7218 in https://github.com/nocodb/nocodb/pull/12881
* fix: table meta not loading by @pranavxc in https://github.com/nocodb/nocodb/pull/12890
* feat: webhook trigger nodes by @DarkPhoenix2704 in https://github.com/nocodb/nocodb/pull/12894
* feat: http nodes by @DarkPhoenix2704 in https://github.com/nocodb/nocodb/pull/12847
* fix: error handling by @DarkPhoenix2704 in https://github.com/nocodb/nocodb/pull/12895
* Nc fix: export csv now use internalapi by @rameshmane7218 in https://github.com/nocodb/nocodb/pull/12896
* Nc fix/include bom public export by @fendy3002 in https://github.com/nocodb/nocodb/pull/12897
* fix: nested lookup - proper context extraction by @pranavxc in https://github.com/nocodb/nocodb/pull/12901
* fix: Missing pagination info in webhook logs api by @rameshmane7218 in https://github.com/nocodb/nocodb/pull/12902
* Nc Fix: Use internal api for extension CRUD operations by @rameshmane7218 in https://github.com/nocodb/nocodb/pull/12898
* feat: use true circular replacer to allow proper serialization by @mertmit in https://github.com/nocodb/nocodb/pull/12903
* feat: notifications change by @mertmit in https://github.com/nocodb/nocodb/pull/12880
* fix: verify workspace by @fendy3002 in https://github.com/nocodb/nocodb/pull/12906
* fix: base v3 view rename & reassign by @fendy3002 in https://github.com/nocodb/nocodb/pull/12905
* Nc feat/editor behaviour by @pranavxc in https://github.com/nocodb/nocodb/pull/12893
* fix: do not default arith for fnName by @mertmit in https://github.com/nocodb/nocodb/pull/12907
* Nc fix/filter related issue by @dstala in https://github.com/nocodb/nocodb/pull/12904
* fix: api v1 superuser check by @fendy3002 in https://github.com/nocodb/nocodb/pull/12910
* fix: verify default ws owner by @fendy3002 in https://github.com/nocodb/nocodb/pull/12908


**Full Changelog**: https://github.com/nocodb/nocodb/compare/0.301.1...0.301.2