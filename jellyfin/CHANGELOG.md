# :rocket: Release notes for 12.0

## Notes on Updating
Before upgrading from an earlier version, a full backup of the data directory is strongly recommended, as this release includes database changes that prevent rolling back without a full restore.

Direct upgrades from 10.10.7 and 10.11.x to 12.0 are supported; intermediate upgrades are not required. Users running releases older than 10.10.7 are strongly encouraged to upgrade to 10.10.7 before migrating to 12.0.

Installed repository plugins (anything not built-in) should also be removed before migrating. Plugins will likely need time to adapt to the new database changes, so re-adding them afterward is the safest approach for testing.

Official plugins compatible with Jellyfin are available through the stable plugin repository. If you have changed to the unstable plugin repository please change it back.
* Go to Dashboard -> Plugins -> Manage Repositories 
* Update the Plugin Repository URL to: https://repo.jellyfin.org/files/plugin/manifest.json

After migrating please perform the following steps.
* Perform a full library scan to restore alternative versions


If you run into issues, please prefix bug reports with "[12.0]".

## Packaging

* Debian Bullseye and Ubuntu Focal packages are no longer built

## Server

* Performance PR implications https://github.com/jellyfin/jellyfin/pull/16062
    * We're running a full path-based check on all library items to clean up left overs. Depending on size this can take some time 
    * Alternative versions of media that were auto resolved (not manually merged) will be removed due to data type issues -> A full library scan will fix this again and is therefore REQUIRED AFTER UPGRADE
    * First scan will take significantly longer than normal and some movies might appear as newly added due to type issues that got fixed on-scan
- Multiple versions for episodes
- Similarity & recommendation providers
- Search providers, letting plugins extend or replace how search results are produced
- SchedulesDirect and EPG refresh fixes
- Fixes to the parental rating system
- Proper data pruning on file replacement/deletion
- Support triple+ digit episode numbers
- Add library-specific BoxSet and Playlist filtering, allowing per-library collection and playlist views
- `CACHEDIR.tag` support
- `Accept-Language` header support
- Add VideoRotation profile condition for Android TVs that do not support rotation metadata
- Parse provider IDs from season and episode folder/file names
- Allow tmdb, tvdb, and imdb as aliases for the tmdbid, tvdbid, and imdbid provider IDs
- Add curly brace and parentheses support for parsing attribute values
- Add NameStartsWith and NameLessThan filters to Person search
- Add new filters for audio and subtitle languages
- Add OriginalLanguage as option to PreferredAudioLanguage
- Add a collection API for Included In feature
- Add support for VobSub subtitle streams
- Add Tmdb missing episode provider

### Breaking and behavior changes

- Legacy route prefixes removed (`/emby/*` and `/mediabrowser/*`). Old third-party clients that rely on them will stop working
- Legacy authorization is now disabled by default, and a migration disables it on existing installs as well
- Removed obsolete API routes: `POST /Users/{userId}/EasyPassword` (the EasyPassword feature is gone), `GET /Items/{itemId}/CriticReviews`, `GET /Environment/NetworkShares`, `POST /System/MediaEncoder/Path`, `GET /LiveTv/Recordings/Groups/{groupId}`, and `GET /QuickConnect/Initiate`
- The global subtitle configuration has been removed, subtitle settings are configured per library
- `.ogg` is no longer treated as a video extension and is audio only, `.aifc` is now recognized as audio, and `.aiff` is no longer treated as an image
- Symlinks are only resolved at playback time
- Sorting by name now uses `SortName` and `CleanName`, and the same cleaning logic is applied to `ForcedSortName`. Library ordering may change compared to 10.11
- Image endpoints no longer upscale beyond the source resolution, so low resolution artwork renders at its real size instead of being enlarged
- Username capitalization can now be changed. Usernames are stored in a normalized column with a unique index, so installs with usernames that differ only by case need to be corrected before upgrading

### Database and performance

- Playlists and collections are now properly relational, using a new `LinkedChildren` table instead of serialized child lists. `OwnerId` and `PrimaryVersionId` are real GUID foreign keys, and `ExtraIds` has been dropped
- Many tuning migrations covering item counts, item names, type and clean name, latest items, image info, and primary version id
- Migration routines clean up existing data on first boot: duplicate music artists and people are merged, orphaned extras and external data are removed, incorrect owner relationships are repaired, and clean names, forced sort names, and series presentation keys are recomputed
- Heavy database tasks no longer run while a library scan is in progress
- Faster queries for Resume, Next Up, rewatching, Latest Items for music, playlists and collections, artist lookup, and item counts
- Item deletion is batched, which fixes "too many SQL variables" failures when deleting large numbers of items
- `jellyfin.db` can now be stored at a custom path

### Operations

- New `--mode` startup flag with `MediaServer`, `MigrateSystem`, and `SeedSystem`, allowing migrations or database seeding to be run without starting the server. This is useful for containerized and orchestrated deployments and for controlled upgrades
- The startup interface has been restyled and now shows version and activity information
- Disabled plugins are no longer re-enabled on restart
- Full system backups skip corrupt keyframe rows instead of failing

### Media and subtitles

- Subtitle writing now goes through SubtitleEdit, which is what avoids the SSA to ASS conversion and loss of styles
- External subtitles can be embedded into MKV when transcoding
- The subtitle extraction timeout is now configurable
- Client-rendered graphical subtitles are allowed during remux
- Fixes for races in concurrent subtitle conversion, cache invalidation when a subtitle is replaced, and ffmpeg hangs during extraction
- New `HlsAudioSeekStrategy` configuration option
- Trickplay: existing files are discovered during a scan, duplicates from interlaced video are fixed, invalid PTS values from containers are normalized, and the cache is cleaned up after a failure

### Live TV

- Live TV no longer returns unreachable "server-local" streaming URLs to clients
- XMLTV background images and episode thumbnails are now imported
- XMLTV guide imports skip programs whose data has not changed, using an ETag computed from the fields the server actually consumes, which makes repeat guide refreshes considerably cheaper. Other listings providers stay on the existing field-by-field update path

### Metadata and providers

- ListenBrainz is now bundled with the server and provides similar artist data with a selectable similarity algorithm
- TVDB provider IDs are supported for movies
- AudioDb artist search
- ReplayGain album gain is parsed
- MusicBrainz lookups are more resilient
- WEB-DL release tags are recognized in file names
- Hyphenated numbers in episode titles are no longer parsed as multi-episode files
- 3D format detection works when the tag is the last token of the path
- Person metadata refreshes are queued instead of blocking the request

## Transcoder

- New upstream version of FFmpeg 8.1
- Optimized CUDA transposing filter performance
- Optimized OCL scaling filter performance
- Optimized OCL tonemapping filter performance on Mali GPU
- Use EOTF from BT 2446 Method B for HLG tonemapping
- Fix potential A/V desync in HLS when transcoding video while remuxing audio
- Avoid SSA to ASS conversion and loss of styles
- Add spec-compliant dvh1 HLS variant for DoVi P5 for compatibility

## Web

* The Modern layout is now the default, the previous layout is now called Legacy
* Updated Music Videos view
* Updated Mixed Media view
* Updated Collections & Playlists view
* Updated Books view
* Add still watching prompt
* Add delay setting for photo slideshow
* Add caching of queries to indexed db for the tanstack query client for improved loading performance
* Add watch feature to log viewer
* Add ```,``` and ```.``` as controls to scrub frame-by-frame
* Add filters for audio and subtitle languages (modern layout only)
* Add Collections and playlist tab to all libraries 
* Add collections to item details page
* Replace libpgs with libbitsub and adds support for vobsub rendering
* Merge cards for crew with multiple roles

### Layout and themes

* All themes now derive from a shared base theme built on CSS variables, including Dark, Light, WMC, Blue Radiance, Apple TV, and Purple Haze. Custom themes may need to be adjusted
* The library toolbar has been merged into the app bar, with a sticky library header and design polish throughout the library
* Custom links can be added to the Modern layout
* The screensaver time setting is now available in the Modern layout

### Libraries and browsing

* Collections and folders tabs for book libraries, and a folder view in the Modern home videos layout
* Default tab options for Home Videos and Photos libraries
* Studio search, and an extended Studios tab
* Play All and Shuffle buttons on the series library. Both are disabled rather than hidden when no items are available
* Improved Upcoming view
* Sorting and filtering on the Activity page
* A Reset Filters button in the filter dropdown
* Folders can be marked as played
* TV show creators are shown on item details
* Similarity providers can be configured per library
* Pagination controls are hidden when paging is disabled

### Playback

* The playback info overlay is more compact and shows more detail
* Chapter names are shown in the OSD slider bubble
* Bitrate detection now runs in web
* Dolby Vision in MKV on webOS 25 and newer
* AV1 fMP4 stream copy on TV clients
* Direct play of anamorphic video on Tizen, and loosened anamorphic restrictions for browser device profiles
* On iOS, background playback continues when the screen is turned off, and audio normalization is disabled to fix pitch and speed issues
* libbitsub updated to v1.11.0 with an HLS offset fix
* The screensaver is suppressed while viewing photos or reading

### TV and remote

* Game controller navigation fixes, and the gamepad repeat rate is no longer tied to framerate
* Keyboard controls work on non-Latin keyboard layouts, with additional fixes for older browsers
* Rewind and FastForward play state commands are handled
* SyncPlay menu update, and the SyncPlay ping is now reported to the server
* Focused and checked checkbox styling in the TV layout

### Under the hood

* WebSockets have been migrated to SDK subscriptions
* The React and TypeScript migration continues with the libraries, Live TV, and networking pages, and the dashboard user pages now use the TS SDK
* TanStack Query now backs user settings and home screen sections, and the query cache is cleared when the server restarts

### Notable fixes

* Blurry card images on high DPI displays, and card image sizes are rounded up
* Duplicate `/socket` connections
* Login loop, connecting to the wrong server when several are configured, and native shell server selection when signing out
* An invalid request for all items on page load
* The Live TV default landing tab
* Holding and dragging on media no longer activates multi-select
* A warning is shown before restoring a version, a warning is shown when starting a backup while a scan is running, and a library scan starts automatically when folders are added to a library

## Security

Server:

* Path validation has been added to the legacy HLS segment endpoints and to the plugin image endpoint, so a requested file must resolve inside the transcode directory
* Path traversal hardening has been extended to the image and plugin endpoints and to username path handling, building on the fixes released in 10.11.x
* The startup wizard can no longer be re-run without authentication on a misconfigured server
* Unsafe plugin package names are rejected by the plugin installer
* Parental filtering is enforced on additional endpoints, playlist visibility has been corrected, non-admin access to additional parts has been fixed, and people are exempt from the allowed tags visibility check

Web:

* Cross-site scripting via person roles
* Auth parameters are encoded when creating API clients
* The login disclaimer only allows common link protocol schemes

## Books

Books have often taken a backseat in favor of video playback in Jellyfin, but this should no longer be the case.
We have started a concerted effort to improve book support across the API and our official clients.
eBook and comic support is still maturing, but the ODPS plugin allows for direct access from a wide range of popular self-hosted programs.
Correspondingly, contributions in any repository are extremely welcome from the wider community.
That includes server improvements, documentation changes, and third-party clients for book playback.
A combination of eBook, comic, and audiobook support is available on the following clients.

Official: Web, iOS, Android, Desktop, Roku, Kodi, JMP
Community: JellyBook, Symfonium, Jellium, Plappa

One notable omission from the server is book series as unique entities, which didn't make the cut for this release.
If you would like to bridge the gap until they are added, feel free to use the [Folio](https://github.com/dkanada/jellyfin-plugin-folio) plugin to display them as collections.
It functions very similar to the [TMDb Box Sets](https://github.com/jellyfin/jellyfin-plugin-tmdbboxsets) plugin but only applies to eBooks.

Another in-flight feature is audiobook chapters, which are only available from the API at present.
Luckily, this means client support is now possible, so you should see them appear in your favorite audiobook client before our next server release.

> NOTE: The Bookshelf plugin has been deprecated and its features have been merged into server or extracted into the ComicVine and GoogleBooks providers.

### Server Changes

* Bookshelf has been split into separate GoogleBooks and ComicVine providers
* Local book parsing has been improved and is available without plugins
    * Book metadata is extracted directly from OPF and ComicInfo files or ComicBookInfo comments
    * External covers are now supported for audiobook files
    * Posters are generated for EPUBs and all supported comic archives
    * Name, index, year, and series are parsed from book filenames
    * Both volume and chapter will be available in the API when present in comic filenames
    * Page counts are extracted from comic archives and PDFs
    * Creator names from OPF data are normalized to a common format
* A new OpenLibrary plugin has been created for metadata and images
* ISBN external IDs and links are supported
* Chapters are now extracted from audiobooks

### Web Changes

* Modern book library layout has been added with view types and paging
* Books display information about their authors and vice versa
* Playback interface has been redesigned and standardized across all book types
* Progress indicator is enabled again for supported eBooks
* Sorting books by index number, release date, etc is now available
* Font size selection has been improved for EPUB files
* Background audiobook playback is working on iOS devices
* Authors, collections, and folders tabs have been added to book libraries, and audiobooks appear under authors
* Fullscreen behavior is unified across all book players, and PDFs support swipe navigation

## Developers

### API Changes

The API no longer allows the use of deprecated authorization mechanisms by default.
Clients and tooling need to migrate if they haven't done so already. See https://github.com/jellyfin/jellyfin/pull/15559 for details.

There have been a number of other changes to the SDK libraries and API as part of an ongoing effort to better document the API for client use.
Please note the following with regards to API support.
A full explanation of our policy for API changes will be added to the developer documentation in the coming months.

- If an endpoint isn't listed in the OpenAPI specification it should not be used by clients.
    - There are certain endpoints that are still exposed for legacy reasons despite being excluded from the OpenAPI spec.
    - These can be removed in any major release without warning
- If an endpoint or parameter is marked as obsolete in the OpenAPI specification it should not be used by clients.
    - Same explanation as above.
- As a general rule, any deprecations will be marked as such for an entire (major) release cycle before the deprecated endpoint or parameter is liable for removal.

Behavior changes clients should be aware of:

- `GetItems` is now asynchronous and applies `recursive` when filters are requested, limited to requests that include `includeItemTypes`. The same query can return a different result set than it did on 10.11
- `ItemByName` responses are restricted and people are deduplicated
- Newly obsolete but still functional, with replacements:
    - `GetTrailers` -> use `GetItems` with `includeItemTypes=Trailer`
    - `GetArtists` and `GetAlbumArtists` -> use `GetPersons`
    - `GetArtistByName` -> use `GetPerson`
    - `GetMusicGenre` -> use `GetGenre`
    - `GetInstantMixFromMusicGenreById` and `GetInstantMixFromMusicGenreByName` -> use `GetInstantMixFromItem`
    - `GetStartupConfiguration`, `UpdateInitialConfiguration`, and `SetRemoteAccess` -> use the configuration endpoints
    - `GetRecordingsSeries`
    - `UserDto.HasPassword` is marked obsolete and no longer provides useful information
- The HLS controllers are hidden from the specification

### Platform

- The server now targets .NET 10. Plugins have to be retargeted and rebuilt
- Swashbuckle has been updated to v10, which changes the generated OpenAPI document, so SDKs need to be regenerated
- jellyfin-web now builds with Node 24 LTS and npm 11

### Plugin changes

- `ISearchEngine` has been replaced by `ISearchManager`, and `SearchEngine` has been replaced by `SearchManager` together with `SqlSearchProvider`
- Removed: `NowPlayingQueueFullItems`, `DtoExtensions.AddClientFields`, `Jellyfin.Extensions.AlphanumericComparator`, the `ISubtitleWriter` family of subtitle writers, and `SubtitleOptions` with `SubtitleConfigurationFactory`
- `ServerConfiguration.EncoderPreset` is no longer nullable
- `IAuthenticationProvider.HasPassword` has been removed
- `IPasswordResetProvider.StartForgotPasswordProcess` takes the entered username and a nullable user
- `IUserManager`: the `Users` and `UsersIds` properties are now the `GetUsers` and `GetUsersIds` methods, and `RenameUser`, `ResetPassword`, and `ChangePassword` take a user id instead of a `User`. `GetFirstUser` has been added
- Several `IItemRepository` members moved to the new services: item saving and deletion and `UpdateInheritedValues` to `IItemPersistenceService`, counts to `IItemCountService`, and Next Up series keys to `INextUpService`
- `IPeopleRepository.GetPeople` and `ILibraryManager.GetPeopleItems` return a `QueryResult`, and `IDtoService.GetBaseItemDtos` and `ILibraryManager.DeleteItemsUnsafeFast` have new signatures
- `IDirectoryService.GetFilePaths` no longer takes a `sort` argument, and the `IPathManager` subtitle and attachment path getters are now nullable

### New plugin APIs

This release adds several extension points that plugins could not hook into before.

- **Search providers.** Plugins can now take part in search itself rather than only in metadata lookup. `ISearchProvider` exposes `Name`, `Type`, `Priority`, and `CanSearch(SearchProviderQuery)`, with `IInternalSearchProvider` for providers that search the local library and `IExternalSearchProvider` for providers that stream `SearchResult` items from a remote service. Providers are registered through `ISearchManager.AddParts` and are consulted in priority order, so a plugin can extend or take over from the built-in `SqlSearchProvider`
- **Similarity and recommendation providers.** `ISimilarItemsProvider` is split inherited by `ILocalSimilarItemsProvider`, `IRemoteSimilarItemsProvider`, and `IBatchLocalSimilarItemsProvider`, each with a generic variant so a provider can declare the item type it handles. Providers are selected and ordered per library through `LibraryOptions.SimilarItemProviders` and `SimilarItemProviderOrder`, and `ISimilarItemsManager` also pulls movie recommendations. The bundled ListenBrainz provider is built on this
- **Comic metadata providers.** `IComicProvider` (`ReadMetadata` and `HasItemChanged`) lets a plugin supply comic metadata alongside the built-in ComicInfo and ComicBookInfo readers
- **Chapters for any item type.** `IChapterManager.SaveChapters` now takes a `BaseItem` rather than a `Video`, and gained a `Supports(BaseItem)` check. This is what makes audiobook chapters possible, and it lets plugins save chapters for non-video items
- **Password resets for unknown users.** `IPasswordResetProvider.StartForgotPasswordProcess` now receives the entered username along with a nullable user, so a provider can handle a request for a username the server does not know or hand the reset off to an external provider
- **Media segment cleanup.** `IMediaSegmentProvider.CleanupExtractedData` is called when an item's data is pruned, so segment providers can remove their own extracted files
- **Schedules Direct.** `ISchedulesDirectService` exposes available countries, service availability, and the image daily limit state, so Live TV plugins no longer need to reimplement them. `ITunerHostManager.DeleteTunerHost` allows removing a tuner
- **Alternate versions and linked children.** Now that linked children are relational, `ILibraryManager` exposes `ResolveAlternateVersion`, `GetLocalAlternateVersionIds`, `GetLinkedAlternateVersions`, `GetItemIdsWithAlternateVersions`, and `UpsertLinkedChild`. Plugins that manipulated version links through serialized item data need to move to these
- **Batch APIs for bulk work.** `IUserDataManager` gained `GetUserDataBatch`, `GetResumeUserData`, `GetResumeUserDataBatch`, and `ResetPlaybackStreamSelections`. `ILibraryManager` gained `GetPeopleByItems`, `GetPeopleNamesByItems`, and `GetNextUpEpisodesBatch`. `IItemCountService` offers batched child and played/total counts
- **Localization.** `ILocalizationManager.GetServerLocalizedString` and `GetLanguageDisplayName` let plugins localize against the server locale
- `ICollectionManager.GetCollectionsContainingItem` backs the Included In feature, and `IPlaylistManager.AddItemToPlaylistAsync` takes a position so items can be inserted at the top of a playlist

`IHasEmbeddedImage` is also new, but it is only for plugins compiled into the server; external plugins should keep declaring their image with `imagePath` in `meta.json`.

### TLS Configuration

In the previous release notes 10.11.0 we announced the deprecation of the built-in TLS certificate handling for this version. This change has been postponed to a future version.

---

Discuss this release further [on our forums](https://forum.jellyfin.org/t-new-jellyfin-server-web-release-12-0).

## Changelog (460)

### 🔒 Security
* Potential FFmpeg argument injection via unescaped subtitle file path [[GHSA-wwwm-px48-fpvq](https://github.com/jellyfin/jellyfin/security/advisories/GHSA-wwwm-px48-fpvq)]
### 🌟 Highlights
* Implement multiple versions for episodes. [PR #16828], by @Shadowghost
* Disable legacy authorization methods by default [PR #15559], by @nielsvanvelzen
### 🏗️  Enhancements
* Fix movie recommendations [PR #16856], by @Shadowghost
* Have device deletion take list of ids [PR #12834], by @LePips
* Allow tmdb as an alias for tmdbid provider id [PR #16433], by @theguymadmax
* Fix EPG issues [PR #16220], by @Shadowghost
* Add CACHEDIR.tag support [PR #16478], by @Shadowghost
* Remove global subtitle configuration [PR #14957], by @KGT1
* Fix: normalize punctuation when computing CleanName so searches without punctuation match (closes #1674) [PR #14879], by @audrey-inglish
* refactor(StreamInfo): reorganize subtitle URL logic and conditions [PR #13977], by @sususu98
### 📈 General Changes
* Fix Blu-ray multi-angle concat generation [PR #17824], by @Raspberry-Monster
* Expose optimized ItemCounts for byName items [PR #17821], by @Shadowghost
* Only download missing plugin images [PR #17820], by @Shadowghost
* Apply the resize sharpening kernel directly instead of via SKImageFilter [PR #17775], by @slevin-7
* Share played state across alternate versions [PR #17816], by @Shadowghost
* Fix TMDb search result ranking [PR #17819], by @Shadowghost
* Fix TMDb recommendations [PR #17810], by @Shadowghost
* Better handle timeouts on plugin operations [PR #17794], by @Shadowghost
* Don't dispose application singletons after running a code migration [PR #17791], by @Shadowghost
* Enforce dolby vision transfer check [PR #17806], by @gnattu
* Fix items being lost from the refresh queue and bound the directory service caches [PR #17763], by @Shadowghost
* Fix handling of unordered multi-episode NFOs [PR #17805], by @Shadowghost
* Optimize database after migrations [PR #17786], by @Shadowghost
* Bound change batches during a scan; keep ffprobe and image saves from failing [PR #17762], by @Shadowghost
* Fix PGS subtitles for BDMV with TrueHD [PR #17674], by @Oggeb1
* Probe .idx instead of .sub for external VobSub subtitle language detection [PR #17746], by @kfarnung
* Drop SyncPlay requests from sessions that left the group [PR #17799], by @fmarcac
* Fix Live TV HLS playback: bogus audio encoder and unplayable direct played manifests [PR #17768], by @Shadowghost
* Fix crash when SyncPlay shuffle mode is set to sorted twice [PR #17796], by @fmarcac
* Fix SyncPlay active session counter leaking on rejoin [PR #17800], by @fmarcac
* Fix unit mismatch in the SyncPlay resume delay floor [PR #17798], by @fmarcac
* Add comprehensive logging for post scan tasks [PR #17767], by @Shadowghost
* Fix UI stalls caused by large tag and genre sets [PR #17757], by @felixfoertsch
* Bound the TMDb response cache so a library scan cannot fill it without limit [PR #17764], by @Shadowghost
* fix: return fallback gracefully when requested fallback font is missing [PR #17761], by @zerafachris
* Fix people and artist validator creation and deletion handling [PR #17756], by @Shadowghost
* Add progress logging to data migrations [PR #17743], by @Shadowghost
* Enforce reliable processing order in PeopleValidationTask [PR #17750], by @Shadowghost
* Fix recursive handling for LinkedChildren [PR #17752], by @Shadowghost
* Fix ListenBrainz settings and similar item defaults [PR #17748], by @Shadowghost
* Fix item counts on the by-name endpoints [PR #17724], by @Shadowghost
* Enforce permissions on similar items [PR #17729], by @Shadowghost
* Fix formatting and test [PR #17744], by @Shadowghost
* Filter search candidates by user access in a single query [PR #17739], by @Shadowghost
* Support anime provider ids on season folders [PR #17731], by @Shadowghost
* Count a season's episodes by the season they belong to [PR #17735], by @Shadowghost
* Fix ParentId for episodes in virtual seasons [PR #17719], by @theguymadmax
* Persist the refresh stamp so the people task stops redoing its work [PR #17709], by @Shadowghost
* Fix children count on virtual items [PR #17718], by @Shadowghost
* Delete credits nothing maps to and bound item-by-name folder names [PR #17715], by @Shadowghost
* Build a TMDb series cast from the aggregated credits [PR #17716], by @Shadowghost
* Stop deriving user view ids from their localized name [PR #17714], by @Shadowghost
* Fix IsPlayed and IsUnplayed sorting for shows and collections [PR #17713], by @LTe
* Say which image and item failed instead of logging a blank path [PR #17711], by @Shadowghost
* Fix OMDB People handling [PR #17710], by @Shadowghost
* Fix person metadata not being fetched on demand or by the people task [PR #17702], by @Shadowghost
* Fix series merging leaking across libraries and under-counting merged children [PR #17693], by @Shadowghost
* Fix English metadata blocking localized providers ranked below it [PR #17619], by @Shadowghost
* Look up people by item via the credit map instead of a full scan [PR #17700], by @Shadowghost
* Mark breakOnNonKeyFrames as XMLIgnore [PR #17698], by @Shadowghost
* Fall back to the ancestor filter when a view has no top parents [PR #17691], by @Shadowghost
* Safeguard against invalid provider ids [PR #17584], by @Shadowghost
* Optimize query helper memory [PR #17607], by @Shadowghost
* Allow direct play for HDHomeRun Live TV tuners [PR #17682], by @theguymadmax
* Fix latest items for mixed libraries [PR #17678], by @theguymadmax
* Stop user updates from orphaning permission and preference rows [PR #17645], by @Shadowghost
* More resilient MusicBrainz lookup [PR #17670], by @Shadowghost
* Use client-reported position for idle playback cleanup [PR #17631], by @itsb
* Fix GitHub URL typo in CONTRIBUTORS [PR #17659], by @FirmaSpring
* Fix SQLite variable limit in child count batches [PR #17658], by @martin-77
* Prevent orphaned user permissions and preferences [PR #17643], by @m0g3r
* Fix large playlist persistence with WhereOneOrMany [PR #17655], by @martin-77
* Fix other two unit test for localization of Artists in DE [PR #17637], by @IDisposable
* Recognize WEB-DL release tags in video names [PR #17636], by @st7105
* Fix unit test for localization of Artists in DE [PR #17633], by @IDisposable
* Fix FindArtists [PR #17604], by @theguymadmax
* Fix EF core designer drifts [PR #17570], by @Shadowghost
* Fix missing ItemRemoved events and search fallback after access filtering [PR #17579], by @Shadowghost
* Fix PersonTypes not applied when filtering by person [PR #17597], by @theguymadmax
* Fix master build [PR #17599], by @Shadowghost
* Fix assemblies [PR #17582], by @Shadowghost
* Bugfix: #17547 | Batching MediaSourceCount into one call [PR #17576], by @obiwantoby
* fix: bound remote provider pagination [PR #17590], by @TOomaAh
* fix: correct IsAiring negation to exclude airing items [PR #17588], by @TOomaAh
* Stop image endpoints from upscaling beyond the source resolution [PR #17569], by @vavallee
* Cleanup and simplify query helpers [PR #17563], by @Shadowghost
* Add warning that PessimisticLockBehavior is unsafe [PR #17560], by @IDisposable
* Batch people lookups when building item DTOs [PR #17571], by @obiwantoby
* fix(images): disambiguate progress overlay cache keys [PR #17492], by @GOvEy1nw
* Fix by-name endpoints reporting TotalRecordCount=0 next to a populated Items array [PR #17541], by @vdatanet
* Clear metadata provider cache when provider parts are registered [PR #17525], by @rlauuzo
* Delete old related info in bulk as late as possible in UpdateOrInsertItems [PR #17555], by @IDisposable
* Fix disabled plugins being re-enabled on restart [PR #17521], by @Shadowghost
* Fix captured (and discarded) Execute exceptions [PR #17559], by @IDisposable
* Speed up UpdateOrInsertItems for related information [PR #17554], by @IDisposable
* Switch SQLite connection Cache to Private [PR #17558], by @IDisposable
* Fix concurrent ffmpeg segment racing [PR #17536], by @gnattu
* Parse ReplayGain album gain field [PR #17315], by @Florin-Popescu
* Improve People deduplication, fix search and restrict ItemByName responses [PR #17466], by @Shadowghost
* Fix PCM audio transcoding to wav returning HTTP 500 and headerless output [PR #17537], by @vdatanet
* Revert "Refresh Live TV channel icons on every guide update." [PR #17549], by @theguymadmax
* Keep folder extras with the item that owns the folder [PR #17524], by @Shadowghost
* Only treat series and seasons as resumable folders [PR #17523], by @Shadowghost
* Degrade ForceKeepAlive logs to debug [PR #17528], by @Shadowghost
* Fix extras naming and version assignment [PR #17456], by @Shadowghost
* Allow client-rendered graphical subtitles during remux [PR #17512], by @altqx
* Use CleanName when sorting by name [PR #17503], by @theguymadmax
* Fix AdjacentTo being ignored on non-recursive item queries [PR #17486], by @Shadowghost
* Fix video version links being read from stale serialised item data instead of the LinkedChildren table [PR #17482], by @Shadowghost
* Fix Live TV returning unreachable "server-local" streaming URLs to clients. [PR #17298], by @WizardOfYendor1
* Add Tmdb missing episode provider [PR #17147], by @Shadowghost
* Fix storage info lookup for Windows [PR #17500], by @theguymadmax
* Skip SIDX in fMP4 HLS segments [PR #17501], by @alchemyyy
* Fix (Un)Played filter correctness and performance [PR #17463], by @Shadowghost
* Queue person metadata refresh instead of blocking the item request and fix ItemCounts [PR #17460], by @Shadowghost
* Reevaluate pending migrations after each one instead of per stage [PR #17455], by @Shadowghost
* Allow duplicate LinkedChildren for Playlists [PR #17416], by @Shadowghost
* Implement AudioDb artist search [PR #17424], by @Shadowghost
* Fix 3D format detection when the tag is the last token of the path [PR #17310], by @TowyTowy
* Fix missing collection folder posters after initial scans. [PR #16409], by @elio42
* Fix series merging [PR #17417], by @Shadowghost
* Reduce correlated subqueries to improve query performance [PR #17422], by @Shadowghost
* Fix hyphenated numbers in episode titles parsed as multi-episodes [PR #17442], by @Shadowghost
* Fix incorrect year on local trailers [PR #17399], by @Shadowghost
* remove ogg from video extensions since it should only be used for audio [PR #17437], by @dkanada
* Avoid NRE when sorting by user-dependent keys without a user [PR #17395], by @paoloantinori
* Skip ComicInfo parsing if none exists [PR #17423], by @Shadowghost
* Fix play queue index handling in SyncPlay [PR #17234], by @Eneo-org
* Apply cleaning logic on ForcedSortName [PR #17402], by @Shadowghost
* Check the "name" tag for audio/subtitle probe to fix MP4 not showing correctly - Fixes issue #17418 [PR #17419], by @rwebster85
* Drain stderr and stdout concurrently for encoder validation [PR #17430], by @gnattu
* perf: avoid unnecessary list allocation in CheckForIdlePlayback [PR #17411], by @mbastian77
* Match VobSub MKS subtitle profiles by container [PR #17227], by @altqx
* Improve language filters to only fetch language codes that match the requested items/libraries (follow up to #9787) [PR #16980], by @TheMelmacian
* fix: don't throw ArgumentNullException on partial UpdateItem payloads (#17366) [PR #17370], by @zerafachris
* Prevent unauthenticated re-run of the startup wizard on misconfiguration [PR #17369], by @Shadowghost
* Truncate ISO-639-2 language display names at first delimiter [PR #17160], by @854562
* Fix subtitle encoding for local files [PR #17281], by @Shadowghost
* Backport and extend path traversal fixes [PR #17368], by @Shadowghost
* fix: skip corrupt KeyframeData rows during full system backup [PR #17367], by @zerafachris
* Add XML docs to small model enums and remove CS1591 suppressions [PR #17376], by @mbastian77
* Exempt people from the allowed tags visibility check [PR #17377], by @mbastian77
* extract page count from archives and PDFs [PR #17311], by @dkanada
* Feat (fix) - Skip reprocessing program information when importing XMLTV EPG data [PR #16933], by @WizardOfYendor1
* Fix profile image being impossible to clear when its in-memory key is temporary [PR #17282], by @TowyTowy
* Fix: Fetch the correct row matching the most up to date file [PR #17320], by @jordanmichaelrushing
* Fix race condition in concurrent subtitle conversion [PR #17342], by @LTe
* Make RequestHelpers.GetOrderBy generic and reuse it in ActivityLogController [PR #17324], by @damienmeur
* Add additional attribute aliases and improve attribute detection [PR #17254], by @sjakub
* Fix SchedulesDirect image limit recognition [PR #17347], by @Shadowghost
* Sort trailers for TV Shows [PR #17204], by @theguymadmax
* Add TVDB provider ID support for movies [PR #17255], by @theguymadmax
* Fix artists being displayed with albums [PR #17252], by @theguymadmax
* Remove libpostproc check for ffmpeg version validation [PR #17384], by @gnattu
* Fix linked whitespace after image badges in `README.md` [PR #17382], by @kaunkrishna
* normalize common formats for creator names in OPF data [PR #17291], by @dkanada
* Keep authenticated user entity in sync with persisted login timestamps [PR #17302], by @ElianCodes
* Normalize invalid PTS from containers for Trickplay generation [PR #17304], by @nyanmisaka
* Fix Resume query performance [PR #17365], by @Shadowghost
* Add XML docs to small entity interfaces and remove CS1591 suppressions [PR #17375], by @mbastian77
* Fix Swagger UI auth docs (#12990) [PR #16910], by @cha5u5
* Prevent ffmpeg from hanging extracting subtitles [PR #17297], by @IDisposable
* Show production companies under TV Shows' Studios [PR #17246], by @Rant423
* Fix potential garbled text in FFmpeg logs on Windows [PR #17288], by @nyanmisaka
* Remove PlaybackPositionTicks from MediaSourceInfo [PR #17327], by @Shadowghost
* Fix format negotiation in hybrid SW decode and CUDA tonemap pipeline [PR #17334], by @nyanmisaka
* Fix Identify returning wrong images [PR #17151], by @theguymadmax
* Update season and episode SeriesName when renaming a series [PR #17326], by @theguymadmax
* Remove episode image override hack [PR #17280], by @Shadowghost
* Fix path transversal exposure in Plugins [PR #17191], by @IDisposable
* Revert setting default BaseItemKind for CollectionType [PR #17348], by @theguymadmax
* Add XML docs to small channel types and remove CS1591 suppressions [PR #17343], by @mbastian77
* Add XML docs to small session model types and remove CS1591 suppressions [PR #17344], by @mbastian77
* Add XML docs to small DLNA model types and remove CS1591 suppressions [PR #17340], by @mbastian77
* Add XML docs to provider lookup info types and remove CS1591 suppressions [PR #17339], by @mbastian77
* Add XML docs to DeviceId and remove CS1591 suppression [PR #17338], by @mbastian77
* Limit similar items to user accessible libraries [PR #17337], by @Shadowghost
* Fix max login attempts [PR #17274], by @theguymadmax
* Add Novel job mapping to the Writing department [PR #17248], by @theguymadmax
* Allow SeriesName to be editable from Item Metadata (books) [PR #17250], by @jordanmichaelrushing
* Fix additional parts for non-admins [PR #17266], by @Shadowghost
* Fix incorrect protocol used for subtitle charset detection [PR #17306], by @theguymadmax
* Check numeric rating value after splitting country code [PR #17273], by @theguymadmax
* support external images for audiobooks [PR #17287], by @dkanada
* Fix Greece parental ratings [PR #17268], by @theguymadmax
* Fix actor images not displayed until clicked [PR #16668], by @johnpc
* Don't throw on logout if session does not exist [PR #17228], by @Shadowghost
* Use InvariantCulture when parsing machine-generated dates [PR #17238], by @iderex
* Fixes for multi version handling [PR #17044], by @Shadowghost
* Fix parental rating lookup for multi-rating entries [PR #17239], by @theguymadmax
* Fix ghost entries when deleting library paths [PR #17231], by @theguymadmax
* Allow changing capitalization of usernames [PR #17229], by @Bond-009
* Fix folder view [PR #17222], by @theguymadmax
* Close sessions for lost WebSockets to prevent zombie SyncPlay groups [PR #17079], by @Eneo-org
* Fix Swedish rating [PR #17209], by @theguymadmax
* Fix NullReferenceException in GetStreamingState for closed live streams [PR #17206], by @zachhide
* Use Enumerable.LeftJoin for activity log user query [PR #17175], by @obrenoalvim
* Rework bitrate reporting [PR #17170], by @Shadowghost
* Fix Book collections speed issues [PR #15954], by @IDisposable
* Batch duplicate-cleanup deletes in merge migrations [PR #17162], by @Shadowghost
* Remove orphaned people [PR #17140], by @theguymadmax
* Reject unsafe plugin package names in installer [PR #17013], by @dfederm
* Use Convert.ToHexStringLower for Schedules Direct password hash [PR #17174], by @obrenoalvim
* Live TV: re-fetch channel icons on guide refresh [PR #16914], by @danieltutuianu
* Revamp startup UI for visual style and usability [PR #17154], by @joshuaboniface
* Fix localization lookup [PR #17187], by @Shadowghost
* Fix embedded lyrics not updating on replace all refresh [PR #17134], by @theguymadmax
* Fix Live TV tuner not releasing [PR #17178], by @theguymadmax
* Don't run heavy DB tasks while scan is running [PR #17182], by @Shadowghost
* Fix local Comic book plugin registration [PR #17188], by @Shadowghost
* Fix too many SQL variables in DeleteItem for large batch deletes [PR #17153], by @joshuaboniface
* Fix Identify returning wrong results [PR #17146], by @theguymadmax
* Fix audio sample rate forced to 48 kHz for non-Opus codecs [PR #17090], by @moontwister
* Deprecate the redundant /Trailers endpoint [PR #17094], by @moontwister
* Skip parsing root-level folders in SeriesResolver [PR #17116], by @theguymadmax
* Fixed "Deleting media that is still being watched in SyncPlay results in errors" [PR #14935], by @pokreman06
* Fix series year lost during name parsing [PR #17112], by @theguymadmax
* Fix episode air date offset after initial scan [PR #17121], by @theguymadmax
* Follow native interoperability best practices [PR #17099], by @Bond-009
* improve book resolution from filename [PR #17087], by @dkanada
* Extend TranscodingReason reporting [PR #17106], by @Shadowghost
* Always apply recursive when filters are requested [PR #17088], by @Shadowghost
* Fetch TV Shows creators from TMDB [PR #17107], by @Rant423
* Replace usage of SharpCompress [PR #17089], by @Bond-009
* Fix AlbumIds filtering by Name instead of by Id [PR #17085], by @matt-teahan
* Add support for background images and episode thumbnails from XMLTV [PR #17077], by @SheaSmith
* Fix AudioDb album description not displayed for English (mirror of #16606) [PR #17081], by @Gadnief
* Fix duplicate key collision [PR #17083], by @theguymadmax
* Assign correct season info to new episodes [PR #17051], by @ivanjx
* Fix CleanName and CleanValue refresh [PR #17064], by @Shadowghost
* Fix duplicate trickplay images for interlaced videos [PR #17058], by @nyanmisaka
* migrate local comic providers to server codebase [PR #16444], by @dkanada
* Add code assistance section to PR template [PR #17054], by @nielsvanvelzen
* Prefer local alternate versions when deduplicating linked children [PR #17042], by @Shadowghost
* Media source handling fixes [PR #17041], by @Shadowghost
* Refresh live TV channel image when remapped (alt #7843) (fixes #7834) [PR #10841], by @Bond-009
* Implement search providers [PR #16121], by @Shadowghost
* fix(dto): prefer PlaylistsFolder primary image for playlists tiles [PR #16520], by @beateixeira04
* Fix xUnit1051 in UserManagerLockHelperTests [PR #17043], by @Shadowghost
* Update issue template version to 10.11.11 [PR #17035], by @theguymadmax
* Discover existing trickplay files on scan [PR #16945], by @Shadowghost
* Fix external data pruning on item deletion [PR #16941], by @Shadowghost
* Fix subtitle replacement not invalidating cache [PR #17028], by @Shadowghost
* Fix playlist visibility [PR #17025], by @Shadowghost
* Enforce parental filtering on additional endpoints [PR #17019], by @Shadowghost
* Prefer subtitle extension over codec [PR #16998], by @Bond-009
* Improve Merge Conflict Labeler [PR #17018], by @Bond-009
* Fix season unknown for flat TV structures [PR #16995], by @theguymadmax
* Make EncoderPreset non nullable [PR #17007], by @nyanmisaka
* Only default recursive to true if we have includeItemTypes [PR #16999], by @Shadowghost
* Extract attachments in one ffmpeg command when dumping [PR #16915], by @Shadowghost
* Fix incorrect list capacity [PR #16996], by @theguymadmax
* Trim tags [PR #16994], by @theguymadmax
* Fix recently added episode links and posters [PR #16967], by @Shadowghost
* Write subtitles using SubtitleEdit [PR #16805], by @Bond-009
* Re-disable legacy authorization methods by default [PR #16992], by @theguymadmax
* Only resolve symlinks on playback [PR #16965], by @Shadowghost
* Fix folders being identified as seasons in mixed libraries [PR #16259], by @theguymadmax
* Fix Schedules Direct API Error Codes [PR #16920], by @arazilsongweaver
* Fix similarity [PR #16942], by @Shadowghost
* Fix inaccessible artist when they exist in multiple libraries [PR #16977], by @theguymadmax
* Add support for VobSub subtitle streams [PR #16552], by @altqx
* Compare old file byte-by-byte to new stream [PR #16936], by @IDisposable
* Remove NowPlayingQueueFullItems from session DTOs [PR #16976], by @PCEWLKR
* Use ConfigureAwait(false) in CollectionController [PR #16953], by @PCEWLKR
* Fix CA2007 warnings in InstallationManager [PR #16946], by @jonesy827
* Add a collection API for `Included In` feature [PR #15516], by @XSAM
* Add new viewtypes options [PR #16177], by @theguymadmax
* Fix Merge Conflict Labeler #2 [PR #16963], by @Bond-009
* Fix A/V desync when resuming HLS with video transcode + audio copy [PR #16580], by @LTe
* Improve OriginalLanguage normalization and inheritance [PR #16829], by @Lampan-git
* Update issue template version to 10.11.10 [PR #16927], by @theguymadmax
* Fix inconsistent extradata generated by hevc_vaapi on AMD driver [PR #16913], by @nyanmisaka
* Backport: Fix/user manager collation [PR #16919], by @Bond-009
* fix: suppress repeated PriorityClass warning in MediaEncoder [PR #16872], by @psavarmattas
* Update issue template version to 10.11.9 [PR #16897], by @theguymadmax
* Add support for filtering playlists by parentId [PR #16893], by @Shadowghost
* Fix Merge Conflict Labeler [PR #16892], by @Bond-009
* Add CI format check [PR #15250], by @jakobkukla
* Reorder Migrations and fix failing migration [PR #16861], by @JPVenson
* Add support for filtering boxsets by parentId [PR #16882], by @Shadowghost
* Modernize version display in UI [PR #16862], by @JPVenson
* Fix integrated provider images [PR #16855], by @Shadowghost
* Use --batch --yes for installing jellyfin keyring in devcontainer [PR #16878], by @IDisposable
* Embed external subtitles into MKV when transcoding [PR #16448], by @LTe
* fix: write livetv recording NFO dateadded as UTC [PR #16863], by @tayfun-akguc
* Misc fixes [PR #16837], by @Shadowghost
* fix: add null check for non-existent program in GetProgram [PR #16858], by @BrunoSync
* Fix CA1819 warnings in ChannelFeatures by using IReadOnlyList [PR #16853], by @jtvhd6
* Set max rating for splashscreen to 13 [PR #16852], by @theguymadmax
* New filters for audio and subtitle languages [PR #9787], by @TheMelmacian
* Implement similarity providers [PR #15970], by @Shadowghost
* Add Accept-Language header support and cleanup translations [PR #16488], by @Shadowghost
* Update log for user session related concurrency update fails [PR #16835], by @JPVenson
* return music artists from person endpoints [PR #16721], by @dkanada
* Reference correct .NET version in README [PR #16831], by @Bond-009
* consolidate OpenAPI categories and deprecate startup routes [PR #16757], by @dkanada
* Safeguard against invalid GUIDs [PR #16813], by @Shadowghost
* Use SortName when sorting by name [PR #16804], by @Shadowghost
* Suppress CA2213 false positive on ApplicationHost._pluginManager (#2149) [PR #16792], by @Crystora
* Print warning on invalid Subnets in Network/Proxy configuration [PR #16793], by @Shadowghost
* Add videoRotation profile condition [PR #16803], by @nyanmisaka
* Fix artist duplicates [PR #16807], by @Shadowghost
* IOException with STRM HTTP URLs [PR #16290], by @benbenmoss
* Fix Segment Provider Configuration [PR #16798], by @Shadowghost
* Fix CA1051 and CA1815 warnings, Change public fields to auto properties [PR #14847], by @tjwalkr3
* Add OriginalLanguage as option to PreferredAudioLanguage [PR #12579], by @Lampan-git
* Switch to new version scheme [PR #16758], by @Shadowghost
* fix person type exclusion in api response [PR #16784], by @dkanada
* Fix MusicBrainz test. [PR #16789], by @IDisposable
* Parse provider IDs from season and episode folder/file names [PR #16472], by @IDisposable
* Fix Canadian rating and fallback to unrated if we have a CountryCode but no matching rating [PR #16328], by @Shadowghost
* Fix live stream consumer leak on negative PositionTicks [PR #16321], by @WizardOfYendor1
* Add startup mode to migrate or seed the database on cmd [PR #16319], by @JPVenson
* Remove DigitalOcean from sponsors section [PR #16788], by @theguymadmax
* Ignore season directories with no video for TV Shows [PR #16611], by @LmanTW
* Fix #16308: Community ratings not updating after changing .nfo file. [PR #16466], by @PERSONALPANCHIWIRIS
* Fix unique people response for query if no item ID is supplied [PR #16783], by @Shadowghost
* Fix subtitle save path [PR #16779], by @Shadowghost
* Move MusicBrainz Query client to plugin instance [PR #16780], by @Shadowghost
* Fix UserManager after EFcore refactor (backport #15368) [PR #16782], by @JPVenson
* Add the filename to exceptions in DeserializeFromFile() [PR #16246], by @lcorbasson
* Add different Slovak and Czech translation of Season for parsing [PR #16646], by @Biosias
* Remove unnecessary ToList calls in TrickplayManager [PR #16322], by @poytiis
* Fix rewatch query [PR #16778], by @Shadowghost
* Speed-up LatestItems for Music [PR #16756], by @Shadowghost
* Guard against null-overwrite of saved audio/subtitle track selections [PR #16769], by @llaforest
* Fix use of thread-unsafe List<T>.Sort() [PR #16777], by @gabeluci
* Keep legacy authorization enabled [PR #16754], by @nielsvanvelzen
* Fix dummy chapter handling for videos with a single chapter or short duration. [PR #16695], by @ExpctING
* Honor episode NFO season during metadata merge [PR #16702], by @itz4blitz
* Fix keyframe duration overshoot breaking playback [PR #16704], by @dyld-w
* Implement ignore rule caching [PR #16166], by @Shadowghost
* Fix Playlist and Boxset query, save and count performance [PR #16761], by @Shadowghost
* fix person TotalRecordCount when limit is applied [PR #16616], by @dkanada
* Fix triple digit episode number handling [PR #16475], by @Shadowghost
* Fix FFProbeVideoInfo downloading subtitles without considering internal streams [PR #16747], by @MBR-0001
* Query Performance Improvements [PR #16062], by @Shadowghost
* feat/audiobook_chapters [PR #16518], by @sevenrats
* Avoid SSA to ASS conversion and loss of styles [PR #16744], by @nyanmisaka
* fix: use symmetric 15s default for skip forward/backward lengths [PR #16739], by @tcsenpai
* hide HLS controllers and deprecate unused endpoints [PR #16715], by @dkanada
* Fix IPv6 prefixes not recognized as proxy [PR #16672], by @dwandw
* improve openapi endpoint categorization [PR #16698], by @dkanada
* Fix watched status resetting on re-watch [PR #15762], by @MSalman5230
* Upgrade to xunit v3 [PR #16666], by @Shadowghost
* fix: add image/jpg to MIME type extension lookup [PR #16658], by @jskoetsier
* Remove all JF contributors from Emby list [PR #16694], by @Bond-009
* Skip libraries without enabled subtitle providers in SubtitleScheduledTask [PR #16649], by @MBR-0001
* Include item path in provider error log messages [PR #16667], by @johnpc
* Enable jellyfin.db customized path [PR #15355], by @twsouthwick
* Update to Jellyfin.XmlTv 10.12.0-pre1 [PR #16659], by @Bond-009
* Set XmlTvProgram.IsLive [PR #8890], by @SenorSmartyPants
* Move rename command permission check to script [PR #11231], by @felix920506
* Added Tanzania countries.json [PR #14406], by @ewkonzo
* Don't allow library name with leading or trailing space [PR #13491], by @gnattu
* fix: retain subtitles spanning HLS segment boundaries [PR #16594], by @LiHRaM
* chore(ci): Add permissions grant [PR #13443], by @jsoref
* Fix artist metadata not being fetched on initial library scan [PR #16606], by @theguymadmax
* Fix in-process restart [PR #16482], by @Shadowghost
* add NameStartsWith and NameLessThan filters to Person search [PR #16619], by @dkanada
* Respect EnableSubtitleExtraction setting in subtitle delivery [PR #16380], by @LTe
* Fix language display for ISO 639-2-only codes (e.g. mul, und, mis, zxx) [PR #16567], by @shocklateboy92
* Fix HDR tonemapping for BDMV content [PR #16609], by @ddemarco5
* Fix FolderStorageInfo to show parent filesystem [PR #16456], by @joshuaboniface
* Don't spam debug log with items without rating [PR #16342], by @Bond-009
* Backport security fixes [PR #16577], by @Bond-009
* Update issue template version to 10.11.8 [PR #16573], by @theguymadmax
* Fix BoxSet parentId being ignored in item queries [PR #16490], by @theguymadmax
* Reverse check for track changed [PR #16501], by @bilbofroggins
* Add AlbumNormalizationGain field to BaseItemDto [PR #14745], by @HeroBrine1st
* add StartIndex and ParentId to person search [PR #16397], by @dkanada
* edit openapi files in place with sed [PR #16569], by @dkanada
* fix invalid workflow on openapi report job [PR #16561], by @dkanada
* Fix parental ratings not working on music albums [PR #16553], by @theguymadmax
* Fix UDP Auto-Discovery returning IPv6 for cross-subnet IPv4 requests [PR #15902], by @ZeusCraft10
* fix openapi report and publish workflows [PR #16556], by @dkanada
* Update issue template version to 10.11.7 [PR #16530], by @theguymadmax
* Add callback for segment data pruning to IMediaSegmentProvider [PR #16419], by @Shadowghost
* remove nested directory for openapi workflows [PR #16524], by @dkanada
* Cleanup trickplay cache dir on failure [PR #16365], by @Shadowghost
* Only set IsAvc for video streams [PR #16507], by @Bond-009
* split openapi workflows between pull request and merge [PR #16463], by @dkanada
* recognize underscore and dot separators for multi-version grouping [PR #16465], by @upscaylman
* fix: cap GetVideoBitrateParamValue at 400 Mbps [PR #16467], by @scheilch
* Add ignore patterns for Hungarian sample files [PR #16238], by @furdiburd
* More robust date handling in Library DB migration [PR #16474], by @Shadowghost
* Fix attachment extraction of files without video or audio stream [PR #16312], by @Shadowghost
* Add spec-compliant dvh1 HLS variant for Dolby Vision Profile 5 [PR #16362], by @NoFear0411
* Fix filename truncation when bracketed tags appear mid-filename [PR #16222], by @tyage
* fix crashes on devices that don't support ipv6 [PR #15841], by @JanzenJohn
* Fix int32 overflow in QSV rate-control parameter computation [PR #16376], by @scheilch
* Recognize ".m4b", ".m4a", ".aac", ".flac", ".mp3", and ".opus" as an audio-book formats [PR #15377], by @lousando
* include external IDs and URLs for book providers [PR #15593], by @dkanada
* Fix remote image language priority to prefer English over no-language [PR #16368], by @redinsch
* Respect library country code for parental ratings [PR #16388], by @theguymadmax
* Use generic Enum overloads to resolve CA2263 warnings [PR #16395], by @jaxx2104
* Return BadRequest when an invalid set of filters is given [PR #16398], by @Bond-009
* Fix ItemValues Type checks [PR #16160], by @Shadowghost
* Add missing ProducesResponseType(401) to QuickConnectController.InitiateQuickConnect [PR #16331], by @JuanCalderon-17
* Fix near-1:1 SAR values falsely flagged as anamorphic [PR #16318], by @NoFear0411
* Use artist images for music library thumbnail [PR #16240], by @theguymadmax
* AIFF support: add .aifc as audio file type, remove .aiff as image file type [PR #16274], by @ghost
* Update JetBrains logo link in README.md [PR #16323], by @anthonylavado
* Revise note on hosting web client for development [PR #16281], by @JPVenson
* Fix malformed query string in StreamInfo.ToUrl() causing 500 error via proxies [PR #16255], by @cosu
* Upgrade Swashbuckle to v10 [PR #16256], by @Shadowghost
* Mitigate pull_request_target privilege escalation [PR #16263], by @andrewrabert
* Fix episodes appearing in Season Unknown incorrectly and prevent unnecessary virtual season creation [PR #16236], by @theguymadmax
* TmdbSeriesProvider: Set ProductionYear field [PR #16144], by @DerMaddis
* Add moveToTop option to IPlaylistManager.AddItemToPlaylistAsync [PR #15138], by @kevgrig
* Fix: Add 'Kairon; IRSE!' to artist whitelist [PR #14709], by @loop95
* Fix container and updated [PR #16202], by @JPVenson
* Trim names and roles for people [PR #16181], by @theguymadmax
* Skip validation for empty landing preferences [PR #16178], by @theguymadmax
* Add curly brace and parentheses support for parsing attribute values [PR #14927], by @nileshp87
* Fix TMDB language handling: support full ISO 639-1 + ISO 3166-1 codes (e.g. zh-CN, zh-TW) [PR #16151], by @Daydreamer-riri
* Fix: Resolve CA1849 synchronous IO in EpubImageProvider [PR #16124], by @Gladtbam
* Remove some deprecated API members [PR #16110], by @nielsvanvelzen
* SessionManager: Log when playback is started [PR #15908], by @jpds
* extract local metadata from OPF and EPUB files [PR #15604], by @dkanada
* fix: prevent premature disposal of HTTP subtitle streams [PR #14809], by @lostb1t
* Update issue template version to 10.11.6 [PR #16059], by @theguymadmax
* Fix typos in XML documentation comments [PR #15997], by @vignesh1507
* Fix zh-CN subtitle language display [PR #15947], by @ZeusCraft10
* Update to .NET 10.0 [PR #15475], by @Bond-009
* Refactor HLS transcode seeking [PR #15926], by @abitofevrything
* fix: Handle unknown item types gracefully in DeserializeBaseItem [PR #15956], by @ZeusCraft10
* Add TrueHD and DTS codes string for HLS [PR #15959], by @nyanmisaka
* Fix KeyNotFoundException in CryptographyProvider when iterations parameter is missing [PR #15958], by @ZeusCraft10
* Fix API diff workflow [PR #15888], by @Shadowghost
* Optimize `StringHelper.FirstToUpper()` [PR #15916], by @stevenaw
* Upgrade Swashbuckle and fix OpenAPI spec [PR #15886], by @Shadowghost
* Fixed issue with ABI Compatability - Difference not completing [PR #15924], by @PeachesMLG
* Fix GET MetadataEditor ContentTypeOptions for mixed content [PR #15797], by @Smeagolworms4
* Add myself to CONTRIBUTORS.md [PR #15831], by @allmazz
* Fixed Multi Sort in New ActivityManager [PR #15820], by @bjorntp
* Update issue template version to 10.11.5 [PR #15798], by @theguymadmax
* Library: Async the SaveImages function [PR #15718], by @luigi311
* parse more information from book filenames [PR #15655], by @dkanada
* Optimize GetUniqueFlags<T>() [PR #15774], by @stevenaw
* Remove legacy API route middleware [PR #15669], by @nielsvanvelzen
* Proper pinning of SkiaSharp to prevent accidental updates [PR #15736], by @MarkCiliaVincenti
* avoid Take(0) when Limit == 0 [PR #14608], by @ghost
* Fix typo in CheckOrCreateMarker exception [PR #15341], by @Xinerki
* Add ability to sort and filter activity log entries [PR #15583], by @crobibero
* Locking cleaning [PR #15713], by @MarkCiliaVincenti
* Fix episodes showing up on recently added shows [PR #15433], by @theguymadmax
* Add subtitle extraction timeout configuration option [PR #15538], by @KarkaLT
* Add CPU to issue template [PR #15704], by @theguymadmax
* Remove special client behavior for API response fields [PR #15638], by @nielsvanvelzen
* Add milliseconds to default console output format [PR #15227], by @kevgrig
* Fix TV Series parsing containing only numbers. [PR #14824], by @CodyEngel
* Add support for more embedded metadata tags [PR #15437], by @allmazz
* Deprecate HasPassword property on UserDto [PR #14950], by @nielsvanvelzen
* Add version to StartupUI [PR #15246], by @JPVenson
* Add all 10.11 versions to issue template [PR #15565], by @anthonylavado
* Update Jellyfin Server version in issue template [PR #15398], by @dpieski
* Update CODEOWNERS to capture bump_version [PR #15236], by @joshuaboniface