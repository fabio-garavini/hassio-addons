# :rocket: Jellyfin Server 10.11.0

We are pleased to announce the latest stable release of Jellyfin, version 10.11.0!

This major release brings many new features, improvements, and bugfixes to improve your Jellyfin experience.

As always, please ensure you stop your Jellyfin server and take a full backup before upgrading!

**WARNING**: There are **very important release notes** to review before upgrading! Please find all the details in [our blog post on the release](https://jellyfin.org/posts/jellyfin-release-10.11.0).

You can find more details about and discuss this release [on our forums](https://forum.jellyfin.org/t-new-jellyfin-server-web-release-10-11-0).

## Changelog (396)

### 🌟 Highlights
* Add Full system backup feature [PR #13945], by @JPVenson
* Add .gitignore style ignoring [PR #13906], by @Shadowghost
* Add Api and startup check for sufficient storage capacity [PR #13888], by @JPVenson
* Added Setup overlay app to communicate status of startup [PR #12880], by @JPVenson
* Remove the ability to auto port forward [PR #13222], by @Bond-009
* Refactor library.db into jellyfin.db and EFCore [PR #12798], by @JPVenson
### 🏗️  Enhancements
* add xmbc nfo uniqueid type norminalisation [PR #14965], by @KGT1
* Fix CA1051 warning, Change public field to auto-property [PR #14827], by @tjwalkr3
* Offload 1080p+ subtitle scaling to RKRGA [PR #14179], by @nyanmisaka
* Enable OpenCL deinterlacer for AMF on Windows when available [PR #14144], by @nyanmisaka
* Use VBR and MBBRC in QSV encoders for better quality [PR #14079], by @nyanmisaka
* Fix the transparency issue of ASS subtitle rendering in HWA [PR #14024], by @nyanmisaka
* Add DoVi Profile 5 support for Rockchip RKMPP [PR #13911], by @nyanmisaka
* Add ServerName to startup configuration [PR #13901], by @thornbill
* Add missing public properties to SystemInfo response [PR #13822], by @thornbill
* Reduce allocations, simplifed code, faster implementation, included tests - StreamInfo.ToUrl [PR #9369], by @Shadowghost
* Fix only returning one item from /Item/Latest api. [PR #12492], by @scampower3
### 📈 General Changes
* Validate encoder path when saving [PR #14996], by @crobibero
* Handle es-419 in TMDb [PR #14946], by @Lampan-git
* Use TryAdd instead of Add when registering custom OpenAPI responses [PR #14997], by @crobibero
* Fix contributing artist query [PR #14991], by @theguymadmax
* Fix exception when saving user data to NFO files [PR #14993], by @theguymadmax
* Remove chapters on file change [PR #14984], by @Shadowghost
* Fix LUFS detection deadlock per issue #13697 [PR #14960], by @karm235
* Prevent PlaylistsFolder deletion during library removal [PR #14978], by @theguymadmax
* Skip creating Person entities for Artist and AlbumArtist types [PR #14971], by @theguymadmax
* Fix artist external Url [PR #14969], by @theguymadmax
* apply sort on ItemValue query [PR #14976], by @JPVenson
* Fix collections folder duplication [PR #14925], by @theguymadmax
* Improve performance on people query [PR #14963], by @theguymadmax
* Clean up missing image references [PR #14962], by @theguymadmax
* Truncate password reset file on open for writing [PR #14948], by @Bond-009
* Handle xx as TMDb no language for backdrops [PR #14941], by @crobibero
* Fix libraries not loading after startup wizard, Change AddVirtualFolder to validate folders [PR #14942], by @tjwalkr3
* Limit decoder thread count on AMD AMF to save VRAM [PR #14943], by @nyanmisaka
* fix: get total count after grouping [PR #14931], by @lostb1t
* Fix mka-style tagging key [PR #14936], by @gnattu
* Readd wildcard search [PR #14934], by @JPVenson
* Fix BoxSet sorting [PR #14919], by @theguymadmax
* Add check for processing recursive data structures [PR #14897], by @JPVenson
* Fix parental ratings [PR #14909], by @theguymadmax
* Add tag filtering and random sorting to GetSimilarItems [PR #14918], by @theguymadmax
* Add explicit reference check to migration [PR #14887], by @JPVenson
* Fix AddProperParentChildRelationBaseItemWithCascade migration deleting all items [PR #14890], by @nielsvanvelzen
* Only include custom code analysis for debug builds [PR #14883], by @crobibero
* Fixing the UFID field value giving a warning and not being correctly processed [PR #14851], by @teblam
* Restore NFO/import ordering by using ListOrder instead of SortOrder [PR #14873], by @theguymadmax
* Expose ExtractAllExtractableSubtitles [PR #14876], by @Shadowghost
* Add Jellyfin.CodeAnalysis project to abi diff [PR #14875], by @JPVenson
* Fix people deduplication lookup [PR #14864], by @JPVenson
* Fixes FK on unconnected base items [PR #14863], by @JPVenson
* Rollback to last working skiasharp version [PR #14862], by @gnattu
* Add Check for ItemValues [PR #14860], by @JPVenson
* Apply filter server side [PR #14856], by @JPVenson
* Fix people SortOrder [PR #14852], by @theguymadmax
* Include ListOrder on Import [PR #14854], by @JPVenson
* Add People Dedup and multiple progress fixes [PR #14848], by @JPVenson
* Fix collections one-off [PR #14814], by @theguymadmax
* Fix ordering where exists [PR #14843], by @JPVenson
* Add schema to 503 headers [PR #14840], by @crobibero
* Fix Image loading [PR #14842], by @JPVenson
* Fix groupings not applied [PR #14826], by @JPVenson
* fix: add back missing behavior for HasAnyProviderId [PR #14831], by @revam
* Attach before updating/deleting to avoid DbUpdateConcurrencyException [PR #14746], by @evan314159
* Skip removed images when updating images [PR #14823], by @Shadowghost
* Revert limit hack [PR #14820], by @JPVenson
* Make migration handle parent cleanup [PR #14817], by @JPVenson
* Fix root folder not being saved to Db if nessesary [PR #14819], by @JPVenson
* Fix playlist move from smaller to larger index [PR #14794], by @kgarner7
* #14751 Only migrate providerids that match assumption [PR #14810], by @JPVenson
* Temp/options and isplayed [PR #14795], by @JPVenson
* Fix sync disposal of async-created IAsyncDisposable objects [PR #14755], by @evan314159
* Add ec3 to audio file extensions [PR #14799], by @Shadowghost
* Reenable common PRAGMA setters [PR #14791], by @JPVenson
* Fix IsPlayed [PR #14786], by @crobibero
* Allow non-admin users to subscribe to their own Sessions [PR #13767], by @KGT1
* Fix duplicate media entries when sorting [PR #14404], by @theguymadmax
* Avoid constant arrays as arguments [PR #14784], by @Bond-009
* Various cleanups [PR #14785], by @Bond-009
* Fix several Stackoverflows [PR #14783], by @JPVenson
* Add fast path to check for empty ignore files [PR #14782], by @Bond-009
* Never replace BoxSet LinkedChildren on update [PR #14723], by @Shadowghost
* Change Spanish variants order in iso6392.txt to make Castillian the "default" version [PR #14777], by @a-collado
* Improve optimistic locking behavior [PR #14779], by @JPVenson
* Reenable pooling [PR #14778], by @JPVenson
* Add 1-second tolerance to resume playback completion check [PR #14774], by @theguymadmax
* Sort trailers before teasers [PR #14715], by @theguymadmax
* Seal Emby.Naming.Video.StackResolver.StackMetadata to silence a compiler warning [PR #14764], by @varoonp123
* Don't use ffprobe frame options on audio probe [PR #14773], by @Shadowghost
* Additional debug logging for SQLite connections [PR #14753], by @evan314159
* Skip non-media folders in movie resolver [PR #14724], by @theguymadmax
* Preserve 3D format on metadata refresh [PR #14742], by @theguymadmax
* Refactor Display preference manager [PR #14056], by @JPVenson
* Fix latest items grouping by collection type [PR #14736], by @theguymadmax
* Add more robust error handling for AudioNormalizationTask [PR #14728], by @Bond-009
* AudioNormalizationTask db progress saving [PR #14550], by @shanepowell
* Update .Net Core to .Net [PR #14718], by @ShalokShalom
* Correct Album Artists merge logic [PR #14655], by @evan314159
* fix ProbeProvider.HasChanged: if file date OR file size changed [PR #14674], by @evan314159
* Normalizer cleanup [PR #14711], by @IDisposable
* Use existing userData when filtering by IsPlayed [PR #14703], by @crobibero
* Fix GetSimilarItems to exclude the searched for item Id [PR #14686], by @evan314159
* Run background ffmpeg tasks as ProcessPriorityClass.BelowNormal [PR #14651], by @evan314159
* Delay initialization of singleton services during migration CoreInitialisation stage [PR #14653], by @evan314159
* Fix AlbumArtistIds filter to use correct ItemValueType [PR #14641], by @evan314159
* Change Spanish; Latin language code according to BCP 47 specification [PR #14639], by @a-collado
* Fix anamorphic video detection (#14640) [PR #14648], by @GeneMarks
* Fix GetBaseItemDto to return related item counts via SQL count [PR #14634], by @crobibero
* Refactor query from EXISTS to JOIN to avoid API timeouts with large libraries [PR #14557], by @evan314159
* Always save images [PR #14600], by @Shadowghost
* Revert "Merge pull request #13604 from Jxiced/master" [PR #14593], by @Bond-009
* Enhanced HTTP Range request support for. strm file [PR #14021], by @sususu98
* Extract subtitles of MKS aux files if they're extractable. [PR #12718], by @IceStormNG
* Further refinement of BCP 47 language labeling support [PR #14410], by @dyphire
* Improve extra rule resolution and file handling [PR #14540], by @TokerX
* Prevent whitespaces in username during wizard setup [PR #13604], by @Jxiced
* Don't fail image saving on missing BaseItem [PR #14567], by @Shadowghost
* Add extra movflags to fMP4 to take initial audio delay into account [PR #14553], by @nyanmisaka
* Add fallback for keyframe-only trickplay extraction [PR #14467], by @jkhsjdhjs
* Preserve interpunct (·) [PR #14543], by @theguymadmax
* Also migrate IsFolder [PR #14554], by @JPVenson
* fix file modification date comparisons [PR #14503], by @evan314159
* Add progress reporting to AudioNormalizationTask. [PR #14306], by @shanepowell
* Fix allow and block queries [PR #14482], by @theguymadmax
* Ignore directory if empty .ignore file is present [PR #14536], by @piyushrungta25
* Update DateLastSaved after running metadata savers [PR #14531], by @Shadowghost
* Fix trickplay extraction ffmpeg error-handling [PR #14493], by @jkhsjdhjs
* Fix issue with EncodedRecorder streams not showing up under "Active Recordings" [PR #14357], by @theshoeshiner
* Supress transaction [PR #14514], by @JPVenson
* Fix Serbian ISO 639-2 codes [PR #14476], by @theguymadmax
* Clean up and fix backup/restore [PR #14489], by @crobibero
* Use RequestHelpers.GetSession in SessionWebSocketListener [PR #14494], by @nielsvanvelzen
* improve userdata migration [PR #14488], by @JPVenson
* Delete old migrations on restore [PR #14486], by @JPVenson
* ﻿Drawing: make SkiaEncoder more robust when reading image dimensions [PR #14481], by @queukat
* Ensure UserData stays unique on delete [PR #14475], by @sundermann
* Fix refreshing the library cannot delete old attachments [PR #14461], by @nyanmisaka
* Allow loading of Database options for DB provider [PR #14466], by @JPVenson
* vob file support [PR #14471], by @Fjox
* Add SerilogExpressions reference [PR #14438], by @JPVenson
* Added advanced parallel process calculation [PR #14437], by @JPVenson
* Use IDatabaseCreator instead of relying on History repository [PR #14465], by @JPVenson
* Only save images when changed [PR #14425], by @JPVenson
* Only enable VAAPI MJPEG encoder on Intel iHD driver [PR #14433], by @nyanmisaka
* Fix PeopleHelper.AddPerson Exceptions due to bad meta-data extracts. [PR #14309], by @shanepowell
* Fix seasons random (#13224) [PR #14335], by @maxime-en
* Prefer ALBUMARTISTS to ALBUMARTIST when PreferNonstandardArtistsTag set [PR #14413], by @evan314159
* Revert invalid Portuguese translations [PR #14414], by @thornbill
* Fix compiler warning for CodeMigration.cs [PR #14390], by @gnattu
* Fix modification checks and make sure to use UTC [PR #14347], by @Shadowghost
* Fix typo in 503 response for API [PR #14377], by @arch1eOS
* Fix -fps_mode option being applied on input [PR #14379], by @nyanmisaka
* Improve cast and crew handling [PR #14370], by @theguymadmax
* Add migration to migrate disconnected UserData too [PR #14339], by @JPVenson
* Fix issue with syncplay group incorrectly playing content on creation [PR #14360], by @Mason-Weigand
* Adapt LrcLyricParser to new LrcParser version [PR #14263], by @Maxr1998
* Fix missing music genre metadata [PR #14332], by @theguymadmax
* Make keyframe extraction task cancellable [PR #14368], by @Shadowghost
* Cleanup Migration [PR #14341], by @Shadowghost
* Skip missing images when creating collages [PR #14344], by @Shadowghost
* fix(devcontainer): correct apt-packages path [PR #14235], by @spellr
* Don't check dynamic metadata removal for static HDR formats [PR #14322], by @gnattu
* Fix QSV "static surface pool size exceeded" on Windows [PR #14330], by @nyanmisaka
* Add act as a stacking option for music albums [PR #14333], by @theguymadmax
* Use dto instead of db object when returning trickplay [PR #14328], by @crobibero
* Use square root scaling for high framerate videos' bitrate requirements [PR #14314], by @gnattu
* Fix startup logger, startup health check [PR #14327], by @crobibero
* Use proper scheduler that honors the parallel task limit [PR #14281], by @JPVenson
* Always set update action when item does not exist [PR #14304], by @JPVenson
* Only remove image file if it exists [PR #14302], by @Shadowghost
* Add explicit check for placeholder ID [PR #14298], by @JPVenson
* Remove appsettings.json loading component from startup server [PR #14275], by @JPVenson
* Fix People Issues [PR #14284], by @Shadowghost
* Properly handle file access issues in some cases [PR #14272], by @Shadowghost
* Fix UserData cleanup task and queries [PR #14280], by @JPVenson
* Fix schema name on backup [PR #14269], by @JPVenson
* Fix existing media segments not being handled on scan [PR #14218], by @ThunderClapLP
* chore/typo [PR #14264], by @IDisposable
* fix(collection): Do not lock newly created collections [PR #14259], by @darioackermann
* fix(Session): don't query DB if queue hasn't changed [PR #14244], by @Skaytacium
* Feature/persistent watch data [PR #14262], by @JPVenson
* Pin Skiasharp version to 3.116.1 [PR #14255], by @gnattu
* Fix ExcludeItemId, ExcludeProviderIds and HasAnyProviderId filter [PR #14249], by @JPVenson
* Ignore null key virtual folders [PR #14253], by @JPVenson
* util forward headers on startup api [PR #14246], by @JPVenson
* Rework startup topic handling and reenable output to logging framework [PR #14243], by @JPVenson
* Use filename for single videos (non-movie/null collections) in MovieResolver [PR #14162], by @theguymadmax
* Don't attempt to do metadata removal for dovi without fallback [PR #14240], by @gnattu
* Only show log in Local network [PR #14241], by @JPVenson
* Fix search for missing metadata overriding existing metadata [PR #12908], by @scampower3
* Add year parameter to TMDB series cache key [PR #14209], by @theguymadmax
* always sort season by index number [PR #13307], by @qiqian
* Fix source directory for setup template [PR #14228], by @JPVenson
* Fix race condition in SessionManager.GetSessionInfo [PR #14131], by @moalhaddar
* Fix broken chapter image placeholders when no image is present [PR #14230], by @theguymadmax
* Update issue report.yml [PR #14099], by @felix920506
* Fix metadata not refreshing in negative UTC timezones [PR #14225], by @theguymadmax
* Fix DirectoryNotFoundException for backdrop folders in trickplay [PR #14223], by @theguymadmax
* Add support for delete from playlist call with api key [PR #14154], by @sharinganthief
* Add cache-control: no-cache to index.html if selfhosted [PR #14222], by @JPVenson
* Feature/version check in library migration [PR #14105], by @JPVenson
* Migrate all known old migrations even when not applied in migration.xml [PR #14217], by @JPVenson
* Allow custom plugin provided database providers to be loaded [PR #14171], by @JPVenson
* Add declarative backups for migrations [PR #14135], by @JPVenson
* Update XmlTv tests to use UTC date formats [PR #14163], by @telans
* Fix missing logging of connections by disallowed IPs [PR #14011], by @lf-
* Prune trickplay data on regenerate and scan [PR #14085], by @Shadowghost
* Add ExcludeItemIds filtering to UserViewBuilder.Filter [PR #14203], by @shanepowell
* Fix server not auto restarting [PR #14215], by @JPVenson
* Backup MigrationHistory as well [PR #14136], by @JPVenson
* Add multiple options for internal locking [PR #14047], by @JPVenson
* Fix unittests [PR #14202], by @shanepowell
* Localization/iso6392.txt: Correct the Portuguese entries [PR #14030], by @baka0815
* Add partition helper [PR #14039], by @JPVenson
* Round RemoteImage CommunityRating to nearest tenths when sorting [PR #13145], by @SenorSmartyPants
* Add SVG to transparent image types [PR #14160], by @theguymadmax
* Make name sorting case-insensitive [PR #14153], by @theguymadmax
* Ensure subfolders are processed in folders containing one video file [PR #14140], by @theguymadmax
* Fix collection behavior when sorting by rating or runtime [PR #14148], by @theguymadmax
* Fix ArgumentNullException when downloading season logos [PR #14141], by @theguymadmax
* Terminate at null char for audio tags [PR #14100], by @gnattu
* Fix ArgumentNullException in TmdbExternalUrlProvider [PR #14130], by @theguymadmax
* Translate query by AncestorIds correctly [PR #14094], by @allesmi
* Fix extracted data cleanup in cleanup post scan task [PR #14083], by @Shadowghost
* added different countries parental ratings [PR #14069], by @SoumyadipAuddy
* Fix Blu-ray metadata: preserve external streams and language metadata [PR #14077], by @theguymadmax
* Reject invalid replaygain tag value [PR #14082], by @gnattu
* Cleanup external item data cleanup [PR #14072], by @Shadowghost
* Only consider migrations that have key set for migration.xml migration [PR #14061], by @JPVenson
* Add tests for ManagedFileSystem.MoveDirectory [PR #14065], by @Bond-009
* Fix cross filesystem dir moving [PR #14063], by @gnattu
* fix #14034 Readd Context provider on Initialise [PR #14040], by @JPVenson
* Cleanup file related code [PR #14023], by @Bond-009
* Recognize file changes and remove data on change [PR #13839], by @Shadowghost
* Add albumart as recognized filename for music artwork [PR #14048], by @theguymadmax
* Added parental ratings for Indian content [PR #14050], by @SoumyadipAuddy
* Cleanup Tasks and Validators [PR #14028], by @Shadowghost
* Add "part" as possible album prefix for stacking [PR #14022], by @harry-hart
* Fix trickplay directory path construction [PR #14036], by @theguymadmax
* Fix startup logger log file order [PR #14044], by @theguymadmax
* Add new nuget packages to abi diff [PR #14016], by @crobibero
* Fix image extractor with more strict ffmpeg requirement [PR #14013], by @gnattu
* Unified migration handling [PR #13950], by @JPVenson
* Fix distinction queries [PR #14007], by @Shadowghost
* Fix ItemValue query [PR #13939], by @JPVenson
* Don't pass through timestamp for image extractor [PR #13999], by @gnattu
* Optimize migrations [PR #13855], by @Shadowghost
* improved performance of save operations [PR #13889], by @JPVenson
* Create directory before checking for size [PR #13962], by @JPVenson
* Check for path overlaps [PR #12832], by @JPVenson
* Rework chapter management [PR #13847], by @Shadowghost
* Fix IsInMixedFolder not being set for Extras [PR #13536], by @tkloy24
* Only run merge conflict labler action on pull requests [PR #13378], by @felix920506
* Deprecate OnPlaybackXXX API operations in favor of ReportPlaybackXXX [PR #13993], by @nielsvanvelzen
* Remove 10.11.z EFcore migration warnings [PR #13972], by @ferferga
* Fix OverflowException when scanning media with a very short duration [PR #13949], by @Bond-009
* Return SyncPlay group info after creation, add GET group endpoint [PR #13935], by @nielsvanvelzen
* Add port awareness to startup server [PR #13913], by @JPVenson
* Fix SyncPlay WebSocket OpenAPI schemas [PR #13946], by @nielsvanvelzen
* Improve video resolution filtering and classification logic [PR #13332], by @theguymadmax
* Fix thumbnail extraction of mpegts videos in FFmpeg 7.1+ [PR #13942], by @nyanmisaka
* Fix Genre cleanup [PR #13916], by @Shadowghost
* Safeguard against null value trimming in tag results [PR #13908], by @Shadowghost
* Remove the hashed password from startup users response [PR #13904], by @thornbill
* Add polish age ratings [PR #13851], by @relains
* Add Genre cleanup and fix cleanup filter queries [PR #13891], by @Shadowghost
* Only reselect audio streams when user preference is respected [PR #13832], by @gnattu
* Fix negated IP addresses without subnet mask not being parsed correctly [PR #13854], by @mapret
* Fix InheritedParentalRatingSubValue not set [PR #13880], by @JPVenson
* Use Guid for parentPrimaryImageItemId [PR #13874], by @nielsvanvelzen
* Fix seeking beyond EOF again [PR #13871], by @nyanmisaka
* Translate the ISO-639-2/B codes to ISO-639-2/T. [PR #13068], by @baka0815
* Fix the migration as the new constraint now uses Value as unique key [PR #13867], by @JPVenson
* Add API support for ELRC word-based lyrics [PR #12941], by @AlexDalas
* Fix backup not written to correct directory [PR #13853], by @JPVenson
* Fix Genre type [PR #13862], by @Shadowghost
* Send Album Artist and Artist in seperate variables when doing a lyrics search [PR #13852], by @scampower3
* Fix ancestors [PR #13827], by @Shadowghost
* Fix indices and update of ItemValues [PR #13843], by @Shadowghost
* Use subdirectories to organize extracted data [PR #13838], by @Shadowghost
* Make ReadInputAtNativeFramerate configurable for M3U tuner [PR #13773], by @timminator
* Fix ArgumentNullException on playlist creation [PR #13837], by @Bond-009
* Cleanup extracted files [PR #13760], by @Shadowghost
* Only remove keyframe cache dir if it exists [PR #13834], by @Shadowghost
* Trim library names [PR #13828], by @JPVenson
* Import Keyframes into database [PR #13771], by @Shadowghost
* Improve dynamic HDR metadata handling [PR #13277], by @gnattu
* allow admin users to get Splashscreen even when it's disabled [PR #13825], by @KGT1
* Cleanup ItemFields [PR #13818], by @Shadowghost
* Preserve SplashscreenLocation when updating branding config [PR #13756], by @KGT1
* Add Dolby Vision tests for Tizen [PR #12670], by @dmitrylyzo
* Reduce Skia conversions [PR #5366], by @ferferga
* Fix Tmdb external URL generation [PR #13817], by @Shadowghost
* Explicitly set default value for enums used in API models [PR #13821], by @gnattu
* Use pattern matching for null checks [PR #13793], by @Bond-009
* Rework parental ratings [PR #12615], by @Shadowghost
* Fix playlist order [PR #13730], by @quyet-v
* Fix MoveTrickplayFiles migration [PR #13807], by @Shadowghost
* Fix StreamInfo.ToUrl [PR #13808], by @Shadowghost
* Library.db migration impovements [PR #13809], by @JPVenson
* Enable VideoToolbox AV1 decode [PR #13194], by @gnattu
* Fix cleanup of wrong table in migration [PR #13796], by @JPVenson
* feat: allow grouping shows into collections [PR #13236], by @jheuel
* Fix build and tests [PR #13790], by @crobibero
* Add profile condition to limit the number of streams [PR #13583], by @dmitrylyzo
* Fix for Issue #12142: Fix ExtraRuleResolver filtering out top level folders [PR #12170], by @mcmcelro
* Implement limiting caches [PR #13605], by @crobibero
* Improve SkiaEncoder's font handling [PR #13231], by @gnattu
* Add channel queries to series [PR #13356], by @Kevinjil
* Fix Sort by Year Bug (#12101) [PR #13733], by @jjwarrenSEP
* Fix consumer count off by one when closing a browser tab with a livestream that is transcoding [PR #13220], by @timminator
* Fix validation of VAAPI/QSV render node path [PR #13786], by @nyanmisaka
* Include UnratedType in LibraryDb migration query [PR #13783], by @theguymadmax
* Add eac3 as an audio name format [PR #13784], by @theguymadmax
* Add override for migration if library.old aready exists [PR #13779], by @JPVenson
* Extract container, video and audio compatibility checks [PR #12678], by @dmitrylyzo
* Feature/backup on migration [PR #13754], by @JPVenson
* Change the order of the iso6392.txt file [PR #13314], by @baka0815
* Fix Cleanup task not awaiting async methods [PR #13769], by @JPVenson
* [Feature] Database code refactor [PR #13589], by @JPVenson
* Add OpenAPI spec for #12880 [PR #13764], by @JPVenson
* Add ability to provide search pattern to GetFiles [PR #13691], by @NooNameR
* Include PeopleBaseItemMap in GetPeople to inlcude Role and SortOrder [PR #13616], by @Lampan-git
* Disable flaky tests [PR #13765], by @JPVenson
* Add missing singleton [PR #13761], by @Shadowghost
* Fix Invalid Item Queries [PR #13757], by @JPVenson
* Rework season folder parsing [PR #11748], by @Shadowghost
* Remove all DB data on item removal, delete internal trickplay files [PR #13753], by @Shadowghost
* Rename Islamic Republic of Pakistan to Pakistan [PR #13752], by @adiled
* 2x faster library.db migration, reduced memory pressure [PR #13749], by @ferferga
* Fix IMDb URL for People [PR #13724], by @theguymadmax
* Fix OnPlaybackStopped task erroring out when closing a browser tab with a livestream that is transcoding [PR #13226], by @timminator
* Fix subtitle selection to respect preferred language for forced subtitles [PR #13098], by @timminator
* Add fast-path to getting just the SeriesPresentationUniqueKey for NextUp [PR #13687], by @crobibero
* Add start index to /Programs/Recommended endpoint [PR #13696], by @Bond-009
* Fix subnet contains check [PR #13493], by @gnattu
* Fix build and tests [PR #13718], by @Shadowghost
* Migrate to IExternalUrlProvider [PR #13175], by @Shadowghost
* Include CleanName in LibraryDb migration query [PR #13690], by @theguymadmax
* Sort embedded collections in Nfo files [PR #9560], by @IDisposable
* Extract trickplay files into own subdirectory [PR #13406], by @Shadowghost
* Include SortName in LibraryDb migration query [PR #13675], by @te9c
* Fix possible NullReferenceException in playlist warning [PR #13643], by @l2dy
* Don't use RETURNING clause with EFCore [PR #13492], by @gnattu
* Better exception message when folders or folder items are missing [PR #13632], by @IDisposable
* Remove deprecated GetWakeOnLanInfo endpoint [PR #13606], by @nielsvanvelzen
* Revert nullability of MediaStream.IsHearingImpaired [PR #13573], by @crobibero
* Add support for reading and storing Recording MBIDs from file metadata [PR #12173], by @lyarenei
* Don't allow usernames to have leading or trailing spaces [PR #13556], by @Jxiced
* Change BaseItemEntity ChannelId to nullable Guid [PR #13553], by @crobibero
* Disallow incremental updates to JellyfinDbModelSnapshot [PR #13564], by @crobibero
* Make the JsonConverters for delimited arrays more generic [PR #13396], by @Bond-009
* Write only for query columns to EFCore db [PR #13542], by @gnattu
* Fix the issue where the external audio track always defaults. [PR #13132], by @choyakawa
* Simulate old GetItemValueNames behavior [PR #13539], by @gnattu
* Rename CreateOrUpdateItems back to CreateItems [PR #13527], by @Bond-009
* Fix Search results are case-sensitive for people [PR #13516], by @tkloy24
* Handle empty image lists gracefully in SplashscreenPostScanTask [PR #13498], by @gnattu
* Remove check-backport CI action [PR #13523], by @joshuaboniface
* Enable nullable for AuthorizationInfo [PR #13485], by @Bond-009
* Order MediaStream query by StreamIndex [PR #13506], by @gnattu
* Make StartDate/EndDate nullable [PR #13494], by @gnattu
* Fix build after backports due to EFCore change [PR #13488], by @Bond-009
* Removing CollectionFolders from cache when they are deleted on disk. [PR #13315], by @sinterdev
* Fix source typo [PR #13453], by @luzpaz
* Always await instead of directly returning Task [PR #12925], by @Bond-009
* Remove useless checks and dead code [PR #13405], by @Bond-009
* chore(ci): Let CI fail independently on each platform [PR #13446], by @jsoref
* Fix spelling [PR #13444], by @jsoref
* Fix typos [PR #13438], by @luzpaz
* Use MediaTypeNames where possible [PR #13440], by @Bond-009
* Fix various typos [PR #13436], by @luzpaz
* Fix spelling [PR #11103], by @jsoref
* improve documentation for ContainerHelper class [PR #13360], by @reuterma24
* Add ability to remove a ChannelMapping [PR #12970], by @Giermann
* Add option to disable deprecated legacy authorization options [PR #13306], by @nielsvanvelzen
* Fix .gzip handling and URL redirection for XML TV guide parsing [PR #13319], by @theguymadmax
* Prefer ApiKey over api_key in generated URL's [PR #13342], by @nielsvanvelzen
* Migrate rulesets to .editorconf [PR #13195], by @Shadowghost
* move to new System.Threading.Lock type for better performance [PR #13213], by @Ich1goSan
* Determine tv image type by extension if content-type is unavailable [PR #13076], by @theguymadmax
* Removed RemoveOldPlugins configuration flag [PR #13102], by @RealGreenDragon
* Implement TaskTriggerInfoType enum [PR #12783], by @LePips
* Move TV-PG ratings to be in line with PG rating. [PR #12867], by @Dessyreqt
* Added test for ListsingsManager.DeleteListingsProvider(). [PR #12793], by @kennethcochran
* Updated DevContainer to Bookworm Debian [PR #13037], by @JPVenson
* Fix typo in guide info endpoint comment [PR #13117], by @1hitsong
* make playlist creation private by default [PR #12853], by @dkanada
* Fix typo in LibraryOptions [PR #13097], by @nielsvanvelzen
* Fixed segment providers never presented to UI [PR #13060], by @JPVenson
* Add dotnet9 to abi compat workflow [PR #13046], by @crobibero
* Update projects to .NET 9 [PR #13023], by @Bond-009
* Add EpisodeExpression for anime file names [PR #12778], by @TonyBotongChu
* Added + in username regex validator, Test + in username, issue #10414 [PR #12819], by @SethPattee
* Auto update issue template version on new release [PR #12893], by @HadrienPatte
* Update issue template version from 10.9.11 to 10.10.0 [PR #12882], by @HadrienPatte
