# v3.2.0
Welcome to Immich `v3.2.0`!

This release includes many new features as well as the usual collection of bug fixes and cleanups. Keep reading below for a list of highlights.

## Highlights

* Docker compose builder
* Revamped search UI (web)
* Search API v2 (server)
* View own people in shared assets, cross-user clustering
* Workflow tags trigger and actions
* Dedicated memories page
* Tag renaming (web)
* View assets in map viewport (web)

### Docker compose builder

We recently released our new [docker compose builder](https://immich.app/docker-compose-builder), which lets you put together a custom compose file for Immich more easily. Please try it out and give us [your feedback](https://github.com/immich-app/immich/discussions/31232)!

### Search API v2 (server)

We have built an entirely new search API that, amongst other things, will support searching within albums and combining multiple search filters with both AND and OR operations. Some of these features will be exposed to the search UI interfaces in the future, others will be used to power other fancy features as well as give 3rd party tools more functionality. If you are interested in the particular changes and examples for how to use the new API, feel free to check out the PR <https://github.com/immich-app/immich/pull/30179> as well as our API documentation at <https://api.immich.app/endpoints/search/searchAssets>.


### Revamped search UI (web)

We have a new designer who helped us remodel the search modal, which has been pretty complex before and looks a lot more visually appealing in our opinion now. It still supports the same functionality, but with some quality of life additions as well as a significantly simpler look. In the future, we will extend this to also include some of the new features enabled by the new search API. Stay tuned and give us your feedback on the new design!

<img alt="image" src="https://github.com/user-attachments/assets/aa1cf886-498d-4e9f-b7cf-96dcb8300818" />

_New search modal filtering by images with Jason in it, taken in the last 30 days in BC, Canada, tagged "Long Beach" with the context search term "Swimming"_

<img  alt="image" src="https://github.com/user-attachments/assets/d87e24db-d314-4462-a204-a9a3020c1ddd" />

_Advanced filters showing camera make, model, and lens model, as well as filers for favorite and archive status, and album membership_

### View own people in shared assets

We are very happy to ship the first step towards better sharing. You can now have people recognized across trusted users, which also allows you to view people you already have records of in any shared assets!

In the [user sharing settings](https://my.immich.app/user-settings?isOpen=sharing) there is a new section; cluster group.

<img alt="cluster group" src="https://github.com/user-attachments/assets/498d914b-40b2-427f-b0ba-04803706772a" />

_The user sharing settings showing a cluster group with Jane Doe and Mich in it_

You can invite users on your instance that you trust to your own group, or join another group you have been invited to. These cluster groups make it possible to identify people in assets shared by users in the same group. They also likely improve accuracy, as the clustering will operate on a bigger pool of faces. People names and birth dates are still set on a per-user level and aren’t (yet) shared with users in the same group. 

As of now, this **requires** resetting facial recognition for all users in the group, in order for the changes to apply retroactively for all assets. This means, names and birth dates will be lost, and the results can vary slightly compared to before. Only faces recognized by machine learning will be affected by this. We may be able to do some non-destructive merging in the future, but for now this is a necessary step in order to fully benefit from the feature. That is why we put a button in the sharing settings for every user in the group (specifically also non-admins) to reset the facial recognition for that group.

### Workflow tags trigger and actions

Workflows have gotten a new trigger. You can now do automations when an asset has been tagged.

<p align="center">
<img width="400" alt="trigger list" src="https://github.com/user-attachments/assets/8d949bce-8ec6-4be2-96a0-5fca1715ae2a" />
</p>
In order to use this new trigger, there is also a new filter that allows you to match specific tags. It supports matching for all, any, or none in the provided list.

<p align="center">
<img width="400"  alt="tag trigger" src="https://github.com/user-attachments/assets/91435b14-6ca8-41da-b3d3-73c7704df695" />
</p>

Lastly, a new workflow action to add tags to the current asset has also been added. It allows to add a list of tags at once.

<p align="center">
<img  width="400"  alt="add tag step" src="https://github.com/user-attachments/assets/04910b74-04ee-4564-8b2f-48f3d5e76dbf" />
</p>

### Dedicated memories page

The new memories page allows you to view past memories. You can also favorite memories and they will show up here and never get deleted. The goal is for this to be a place you can come back to at any point and reminisce in old memories.

<p >
<img width="600" alt="image" src="https://github.com/user-attachments/assets/0f526915-b53a-484e-8d99-ce0caa9698fd" />
<img width="200" alt="Memory page on the mobile app" src="https://github.com/user-attachments/assets/b11b8534-22c9-417c-a57b-922bada486c5" />
</p>

### Tag renaming (web)

Finally, you can also rename existing tags. This is a small addition to the edit tag modal on web, but under the hood was more complicated than you might expect. 

<p align="center">
<img width="400" alt="tag renaming" src="https://github.com/user-attachments/assets/091acef9-1056-4264-9e89-c44d9ddfdbc7" />
</p>

### View assets in map viewport (web)

Similarly to showing a timeline all assets in a cluster on the map when clicking on it, you can now open a timeline for assets currently in the viewport. There is a new button among the map controls to show assets in the area. It will open a timeline that will update as you pan around the map.

<img alt="map view port with timeline" src="https://github.com/user-attachments/assets/90b0aeb5-2e99-4dc5-a8cb-592c3ed71e8f" />

_The map page showing a timeline of assets currently in the viewport on the right_

As always, please consider supporting the project.

🎉 Cheers! 🎉

## Support Immich

<p align="center">

<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjY2eWc5Y2F0ZW56MmR4aWE0dDhzZXlidXRmYWZyajl1bWZidXZpcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/87CKDqErVfMqY/giphy.gif" width="450" title="SUPPORT THE PROJECT!">

</p>


If you find the project helpful, you can support Immich by purchasing a product key at <https://buy.immich.app> or our merchandise at <https://immich.store>

----

## What's Changed
### 🚀 Features
* feat: workflow logging by @benbeckford in https://github.com/immich-app/immich/pull/29878
* feat(web): new search ui by @benbeckford in https://github.com/immich-app/immich/pull/30279
* feat: new config endpoints by @jrasm91 in https://github.com/immich-app/immich/pull/30881
* feat: cluster groups by @jrasm91 in https://github.com/immich-app/immich/pull/30739
* feat: asset file apis by @jrasm91 in https://github.com/immich-app/immich/pull/25900
* feat: memories view by @benbeckford in https://github.com/immich-app/immich/pull/28675
* feat(mobile): show asset owner in asset details by @Lauritz-Tieste in https://github.com/immich-app/immich/pull/29302
* feat(server): new search API by @timonrieger in https://github.com/immich-app/immich/pull/30179
### 🌟 Enhancements
* feat: store null instead of empty string for album.description by @gPinato in https://github.com/immich-app/immich/pull/30123
* feat: log hint about downgrades when migration is missing by @bo0tzz in https://github.com/immich-app/immich/pull/30493
* feat(web): search album description in add-to-album modal by @djadji-gueye in https://github.com/immich-app/immich/pull/30462
* feat: Display the number of selected items in AlbumPickerModal  title by @statox in https://github.com/immich-app/immich/pull/30485
* feat(widget): add toggle to match icon theme by @bwees in https://github.com/immich-app/immich/pull/30428
* feat: workflow asset tag trigger/filter/action by @benbeckford in https://github.com/immich-app/immich/pull/29043
* feat: iOS dynamic background ids by @mikes1991gh in https://github.com/immich-app/immich/pull/30574
* feat: actions undo handling by @shenlong-tanwen in https://github.com/immich-app/immich/pull/30481
* feat: rotate an API key by @bwees in https://github.com/immich-app/immich/pull/30801
* fix(cli): enforce node engine version on start by @bo0tzz in https://github.com/immich-app/immich/pull/30437
* chore(server): migrate library e2e tests by @etnoy in https://github.com/immich-app/immich/pull/27277
* feat: add oauth account management url by @sacha-c in https://github.com/immich-app/immich/pull/30873
* feat(web): tag renaming v2 by @jorbrock in https://github.com/immich-app/immich/pull/27909
* chore: search filter animation improvement and reactive search cue example by @alextran1502 in https://github.com/immich-app/immich/pull/30866
* perf(web): use hash-wasm SHA-1 with pure-JS fallback for upload hashing by @mosh-dev in https://github.com/immich-app/immich/pull/30107
* fix: don't swallow fetch errors by @bo0tzz in https://github.com/immich-app/immich/pull/30496
* feat(mobile): map asset number by @YarosMallorca in https://github.com/immich-app/immich/pull/28911
* feat: allow users to re-run facial recognition for their group by @danieldietzler in https://github.com/immich-app/immich/pull/30965
* feat(web): view assets in map viewport by @rickytrevor in https://github.com/immich-app/immich/pull/27492
### 🐛 Bug fixes
* fix: make sure iOS memory widget render by @alextran1502 in https://github.com/immich-app/immich/pull/30172
* fix: calendar heatmap permissions by @danieldietzler in https://github.com/immich-app/immich/pull/30310
* fix: calendar heatmap api key permissions by @danieldietzler in https://github.com/immich-app/immich/pull/30314
* fix(deployment): matplotlib in rootless deployments by @mmomjian in https://github.com/immich-app/immich/pull/30328
* fix(mobile): refresh person thumbnail when the featured photo changes by @santoshakil in https://github.com/immich-app/immich/pull/29350
* fix: assetFileFilter path matching by @benbeckford in https://github.com/immich-app/immich/pull/30394
* fix: shared check for server setup availability by @bo0tzz in https://github.com/immich-app/immich/pull/30311
* fix(mobile): resolve owned assets when partner owns identical asset by @agg23 in https://github.com/immich-app/immich/pull/30137
* fix(web): Fix face thumbnail when swapping merge direction by @lhvy in https://github.com/immich-app/immich/pull/30466
* fix(server): reject invalid or deleted user when creating a partner by @djadji-gueye in https://github.com/immich-app/immich/pull/30431
* fix(server): remove the asset row when an upload fails after creating it by @santoshakil in https://github.com/immich-app/immich/pull/30349
* fix(mobile): correct mislabeled Bengali locale entry by @DrHaque in https://github.com/immich-app/immich/pull/30519
* fix(mobile): sync stack changes from the websocket by @santoshakil in https://github.com/immich-app/immich/pull/30479
* fix: metadata extraction as LensModel can be a float by @danieldietzler in https://github.com/immich-app/immich/pull/30512
* fix(mobile): run one more sync round when a request arrives mid sync by @santoshakil in https://github.com/immich-app/immich/pull/30478
* fix: use setRequireOriginal on SDK 29 and above by @shenlong-tanwen in https://github.com/immich-app/immich/pull/29072
* fix(mobile): stale local renders after editing a photo on device by @santoshakil in https://github.com/immich-app/immich/pull/30415
* fix(mobile): stop websocket reconnect loop draining battery when server is unreachable by @santoshakil in https://github.com/immich-app/immich/pull/29901
* fix(mobile): stop long images squishing on ios by @santoshakil in https://github.com/immich-app/immich/pull/29367
* fix(mobile): keep backup remainder from going negative by @santoshakil in https://github.com/immich-app/immich/pull/29011
* fix(mobile): handle asset websocket events by @santoshakil in https://github.com/immich-app/immich/pull/30499
* fix(mobile): stop disabling androidx.startup initializers by @shenlong-tanwen in https://github.com/immich-app/immich/pull/30559
* fix: map not updating after viewing an asset by @shenlong-tanwen in https://github.com/immich-app/immich/pull/30601
* fix(deployment): Add huggingface cache directory to Dockerfile by @mmomjian in https://github.com/immich-app/immich/pull/30357
* fix(mobile): video playback controls dead for backed up videos opened from search by @santoshakil in https://github.com/immich-app/immich/pull/30587
* fix(mobile): decode remote thumbnails at displayed size by @santoshakil in https://github.com/immich-app/immich/pull/29965
* fix(mobile): don't let a frozen sync block syncing on resume by @santoshakil in https://github.com/immich-app/immich/pull/29870
* fix: face label clipping by @danieldietzler in https://github.com/immich-app/immich/pull/30712
* fix: owner cascade delete album by @danieldietzler in https://github.com/immich-app/immich/pull/30692
* fix(mobile): prevent iOS status bar scroll to top during transitions by @agg23 in https://github.com/immich-app/immich/pull/30717
* fix(mobile): disable iOS smart quotes/dashes in email/password inputs by @agg23 in https://github.com/immich-app/immich/pull/30767
* fix(mobile): prevent snapping to center on pinch-to-zoom release (#29207) by @cmdPromptCritical in https://github.com/immich-app/immich/pull/29343
* fix: shared link create validation by @danieldietzler in https://github.com/immich-app/immich/pull/30762
* fix(mobile): mark finished downloads complete instead of leaving them stuck by @santoshakil in https://github.com/immich-app/immich/pull/29023
* fix: freeze on navigating back album description by @YarosMallorca in https://github.com/immich-app/immich/pull/30781
* fix(server): guard createAll against empty values list by @tech00exploere in https://github.com/immich-app/immich/pull/30837
* fix(server): respect backpressure in the sync stream by @enol5423 in https://github.com/immich-app/immich/pull/30764
* fix(server): update ocr & faces after asset edit by @YarosMallorca in https://github.com/immich-app/immich/pull/29303
* fix(mobile): resend an upload once when the connection dies before a response by @santoshakil in https://github.com/immich-app/immich/pull/30843
* fix(mobile): cannot deep link to memory lane (#30634) by @nikhilpodila in https://github.com/immich-app/immich/pull/30787
* fix: redis cli ping command by @mmomjian in https://github.com/immich-app/immich/pull/30329
* fix(server): do not throw on unparsable DB_URL when building backup arguments by @NoiceHax in https://github.com/immich-app/immich/pull/30759
* fix(server): Sort stacked assets by creation date by @timonrieger in https://github.com/immich-app/immich/pull/24033
* fix(web): gracefully handle map errors when WebGL is disabled by @meesfrensel in https://github.com/immich-app/immich/pull/26538
* fix(server): unicode email validation by @YarosMallorca in https://github.com/immich-app/immich/pull/30871
* fix(mobile): order album/place/person timelines by local date by @santoshakil in https://github.com/immich-app/immich/pull/29338
* chore(mobile): update flutter-maplibre-gl to 0.27.0 by @agg23 in https://github.com/immich-app/immich/pull/30892
* fix(web): download archives via html POST forms by @diogotcorreia in https://github.com/immich-app/immich/pull/30021
* fix(server): library exclusion patterns can soft-delete assets outside their directory by @PAtreju in https://github.com/immich-app/immich/pull/30850
* fix(mobile): dedupe stale remote_asset rows on sync by @santoshakil in https://github.com/immich-app/immich/pull/28445
* fix(server): correct asset dimensions from exif metadata by @fuergaosi233 in https://github.com/immich-app/immich/pull/29244
* fix: quote database owner in restore by @danieldietzler in https://github.com/immich-app/immich/pull/30905
* fix(mobile): permanently delete local copies when moving to the locked folder by @santoshakil in https://github.com/immich-app/immich/pull/29730
* fix(server): let a second metadata extraction replace stored AV metadata by @RxChi1d in https://github.com/immich-app/immich/pull/30900
* fix: do not exit search screen on back during multiselect by @YarosMallorca in https://github.com/immich-app/immich/pull/30689
* fix(mobile): respect 24h system setting by @YarosMallorca in https://github.com/immich-app/immich/pull/30792
* fix: maintentance return URL sanitization by @bwees in https://github.com/immich-app/immich/pull/30948
* fix: remove partner assets from existing memories by @shenlong-tanwen in https://github.com/immich-app/immich/pull/28950
* fix(server): correct tag create operations by @jorbrock in https://github.com/immich-app/immich/pull/30877
* fix: thumbnail generation for specific SVGs by @danieldietzler in https://github.com/immich-app/immich/pull/30908
* fix(mobile): aspect ratio change by @ferraridamiano in https://github.com/immich-app/immich/pull/30939
* fix: throw a typed error on malformed api responses by @bo0tzz in https://github.com/immich-app/immich/pull/31006
* fix(web): restore timeline scroll when the asset id cannot be resolved by @thejeff77 in https://github.com/immich-app/immich/pull/30916
* fix(web): do not play memory video if the `MemoryVideoViewer` element is not visible by @Zlendy in https://github.com/immich-app/immich/pull/30947
* fix(web): preserve slideshow pause state when viewing video slides by @tech00exploere in https://github.com/immich-app/immich/pull/30278
* fix: draggable Immich logo by @danieldietzler in https://github.com/immich-app/immich/pull/31055
* fix(server): kill pg_dump when a backup fails so it stops holding table locks by @justadityaraj in https://github.com/immich-app/immich/pull/30851
* fix(web): misleading toast notification  by @brn-lin in https://github.com/immich-app/immich/pull/30976
* fix(web): map by @jrasm91 in https://github.com/immich-app/immich/pull/31056
* fix: external library statistics for excluded assets by @stevenjoezhang in https://github.com/immich-app/immich/pull/28462
* feat: same-second photos now sub-sort by filename by @andydotmp3 in https://github.com/immich-app/immich/pull/29528
* fix(web): face editor coordinates on a not-yet-loaded video by @immich-push-o-matic[bot] in https://github.com/immich-app/immich/pull/31085
* fix: do not move faces of users other than the current owner by @immich-push-o-matic[bot] in https://github.com/immich-app/immich/pull/31149
* fix(server): allow an empty assetIds array when creating an album shared link by @immich-push-o-matic[bot] in https://github.com/immich-app/immich/pull/31151
* fix(mobile): keep the original filename when sharing downloaded assets by @immich-push-o-matic[bot] in https://github.com/immich-app/immich/pull/31154
* fix(mobile): handle transient loading states for map timelines by @immich-push-o-matic[bot] in https://github.com/immich-app/immich/pull/31153
* fix(web): interaction with some filter elements closes the search panel by @immich-push-o-matic[bot] in https://github.com/immich-app/immich/pull/31160
* fix(ml): read CLIP model configs as UTF-8 by @immich-push-o-matic[bot] in https://github.com/immich-app/immich/pull/31152
* fix(mobile): refresh server info when the websocket connects by @immich-push-o-matic[bot] in https://github.com/immich-app/immich/pull/31155
* fix(server): never unlink an untracked-file path that an asset now references by @immich-push-o-matic[bot] in https://github.com/immich-app/immich/pull/31194
* fix: incorrect edit's openapi type by @immich-push-o-matic[bot] in https://github.com/immich-app/immich/pull/31233
* fix(web): album date range formatting by @immich-push-o-matic[bot] in https://github.com/immich-app/immich/pull/31238
* fix: face detection of edited assets by @immich-push-o-matic[bot] in https://github.com/immich-app/immich/pull/31243
* fix(mobile): prevent inner mutability on Freezed classes by @immich-push-o-matic[bot] in https://github.com/immich-app/immich/pull/31251
* fix(web): partner sharing timeline by @immich-push-o-matic[bot] in https://github.com/immich-app/immich/pull/31252
* fix(mobile): refresh the memory lane after resume by @immich-push-o-matic[bot] in https://github.com/immich-app/immich/pull/31260
* fix: memory page navigation by @immich-push-o-matic[bot] in https://github.com/immich-app/immich/pull/31368
* fix(server): live photo transcode visibility by @immich-push-o-matic[bot] in https://github.com/immich-app/immich/pull/31374
* fix(web): use RTL-friendly layout for people panel buttons by @immich-push-o-matic[bot] in https://github.com/immich-app/immich/pull/31378
* fix(web): word-wrap long album names by @immich-push-o-matic[bot] in https://github.com/immich-app/immich/pull/31379
* fix(mobile): hide negative age by @immich-push-o-matic[bot] in https://github.com/immich-app/immich/pull/31381
* fix(mobile): make shared link download toggle depend on metadata toggle by @immich-push-o-matic[bot] in https://github.com/immich-app/immich/pull/31382
### 📚 Documentation
* fix(docs): remove listing unraid as an "official" deployment by @mmomjian in https://github.com/immich-app/immich/pull/30323
* fix(docs): Revise config file instructions and notes by @mmomjian in https://github.com/immich-app/immich/pull/30418
* docs: fix identity provider examples in oauth guide by @fredrikekre in https://github.com/immich-app/immich/pull/30828
* docs: Update backup script to match manual/automatic backups by @Quantum-Cucumber in https://github.com/immich-app/immich/pull/26810
* docs: update remote-machine-learning.md by @Aviatorpaal in https://github.com/immich-app/immich/pull/28728
### 🌐 Translations
* feat: add cantonese for mobile by @danieldietzler in https://github.com/immich-app/immich/pull/30318
* chore(web): update translations by @weblate in https://github.com/immich-app/immich/pull/30296

## New Contributors
* @jaegeral made their first contribution in https://github.com/immich-app/immich/pull/30385
* @deveshkolte made their first contribution in https://github.com/immich-app/immich/pull/30223
* @gPinato made their first contribution in https://github.com/immich-app/immich/pull/30123
* @lhvy made their first contribution in https://github.com/immich-app/immich/pull/30466
* @djadji-gueye made their first contribution in https://github.com/immich-app/immich/pull/30462
* @DrHaque made their first contribution in https://github.com/immich-app/immich/pull/30519
* @statox made their first contribution in https://github.com/immich-app/immich/pull/30485
* @ihmcsm made their first contribution in https://github.com/immich-app/immich/pull/30742
* @baseballyama made their first contribution in https://github.com/immich-app/immich/pull/30782
* @enol5423 made their first contribution in https://github.com/immich-app/immich/pull/30764
* @mikes1991gh made their first contribution in https://github.com/immich-app/immich/pull/30574
* @nikhilpodila made their first contribution in https://github.com/immich-app/immich/pull/30787
* @fredrikekre made their first contribution in https://github.com/immich-app/immich/pull/30828
* @NoiceHax made their first contribution in https://github.com/immich-app/immich/pull/30759
* @Quantum-Cucumber made their first contribution in https://github.com/immich-app/immich/pull/26810
* @sacha-c made their first contribution in https://github.com/immich-app/immich/pull/30873
* @PAtreju made their first contribution in https://github.com/immich-app/immich/pull/30850
* @fuergaosi233 made their first contribution in https://github.com/immich-app/immich/pull/29244
* @jorbrock made their first contribution in https://github.com/immich-app/immich/pull/27909
* @RxChi1d made their first contribution in https://github.com/immich-app/immich/pull/30900
* @mosh-dev made their first contribution in https://github.com/immich-app/immich/pull/30107
* @thejeff77 made their first contribution in https://github.com/immich-app/immich/pull/30916
* @brn-lin made their first contribution in https://github.com/immich-app/immich/pull/30976
* @Aviatorpaal made their first contribution in https://github.com/immich-app/immich/pull/28728
* @stevenjoezhang made their first contribution in https://github.com/immich-app/immich/pull/28462
* @andydotmp3 made their first contribution in https://github.com/immich-app/immich/pull/29528
* @rickytrevor made their first contribution in https://github.com/immich-app/immich/pull/27492
* @immich-push-o-matic[bot] made their first contribution in https://github.com/immich-app/immich/pull/31066

**Full Changelog**: https://github.com/immich-app/immich/compare/v3.1.0...v3.2.0