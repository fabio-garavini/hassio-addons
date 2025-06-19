# v1.135.0

## Highlights

Welcome to the release `v1.135.0` of Immich. Another three-week gap, another ~200 PRs merged, another big release, let’s dive right in to what’s new.

* iOS home screen widgets
* Granular API key access control creation
* Google Cast support on the mobile app
* Opt-in Google Cast on the web
* New user onboarding
* Album description on the mobile app
* Drag-and-drop to the locked folder on the web
* Support for Vchord 0.4.2
* Shortcut to navigate the timeline 
* Multiple admins support 
* Devcontainer 
* Notable fix: Double swiping issue on iOS when using the gallery viewer

### iOS Home Screen Widgets

| Memory Widget | Random Widget |
| - | - |
| <img src=\"https://github.com/user-attachments/assets/f57cd999-f4df-44fe-bc0c-f6a522ddfe11\" width=\"300\"/>| <img src=\"https://github.com/user-attachments/assets/8feb1eeb-9435-45e7-ba55-8b931979d2cb\" width=\"300\"/> | 


Immich now supports home screen widgets on iOS! You can now add widgets to your home screen that:

* Display a random image from your library
* Display a random image from an album
* Show images from memory lane

We support all widget sizes (S, M, L, and XL on iPad). These widgets update approximately every 20 minutes and pull directly from your Immich server. Android support is coming in the near future, so keep an eye out!

> [!TIP] 
> Your server must be on `v1.135.0` for album filtering to work.

### Granular API key access control creation

You can now select additional permissions when creating an API key to use in any third-party libraries or software that integrate with Immich. This mechanism will give you better control over what the other applications or libraries can do with your Immich’s instance. 

<p align=\"center\">
<img src=\"https://github.com/user-attachments/assets/e1dc89a9-6818-4137-9baf-3b8da6e98a86\" width=\"500\"/>
</p>

### Google Cast support on the mobile app

<p align=\"center\">
<img src=\"https://github.com/user-attachments/assets/988e615a-03e1-44fc-997e-1e4d9ae1a990\" width=\"300\"/>
</p>


Immich now supports casting photos from the mobile app to Google Cast-enabled devices! This is a follow-up to the casting feature present on the web. We support photos and videos, similar to the web feature. This feature is not controlled by the new “Opt-in Google Cast on the web” setting since it does not require third-party resources from Google.

> [!TIP] 
> Your server must be accessible through the server URL from the cast receiver. There is no limitation on public accessibility or an HTTPS connection requirement, unlike on the web. In addition, **only assets that are uploaded to the server may be cast.**

### Opt-in Google Cast on the web

We received a few reports from users who were concerned about the privacy implications of Google Cast on the web. Immich needs to fetch a third-party script from Google to check if casting is supported in the browser and to communicate with the cast library in Chrome. This causes a network request to Google each time Immich is loaded.

We have made Google Cast opt-in now to remove this requirement. If you use Google Cast on the web, you may enable Google Cast for your user by going to `Account Settings > Features > Settings > Cast` or by using [this link](https://my.immich.app/user-settings?isOpen=feature+cast). 

<p align=\"center\">
<img src=\"https://github.com/user-attachments/assets/bd751256-9366-4d7a-9050-c3d6bd6d5a63\" width=\"600\"/>
</p>


**If you have previously used Google Cast on the web and would like to continue using it, you must also enable it.**

### New user onboarding 


![image](https://github.com/user-attachments/assets/1fd55979-76a0-4a63-ab5b-b42c02b5715c)


To provide a better user experience for discovering and enabling various features, settings, and preferences, all new users are now greeted with an onboarding flow on the web when they first log in. They can select their language, theme, and personal privacy settings (such as Google Cast opt-in). Any users present before updating to `v1.135.0` will not experience the onboarding flow.

### Album description on the mobile app

The album’s description is now displayed and editable in the mobile app. The album’s header also gets some styles to make it more presentable.

<p align=\"center\">
<img src=\"https://github.com/user-attachments/assets/ea103840-d5f9-4bc4-9436-357894bf460e\" width=\"400\"/>
</p>

### Support for Vchord 0.4.2

Right after we rolled out the VectorChord vector database extension, the library dropped a new version [0.4.2](https://github.com/tensorchord/VectorChord/releases/tag/0.4.0) with some significant improvements (classic timing!). We've updated our server to support it and made it the default in the `docker-compose.yml` file.

You don't have to upgrade, though - sticking with your current version (0.3.0) is perfectly fine. But if you want to move to the newer one, it is an option.

### Keyboard Navigation in Timeline

The timeline now supports shortcuts to make navigating between days, months, and years easier. 

* Use `d` or `shift + d` to jump to an earlier or later **day**.
* Use `m` or `shift + m` to jump to the earlier or later **month**.
* Use `y` or `shift + y` to jump to the earlier or later **year**.
* Use `g` to go directly to a specific date

![image](https://github.com/user-attachments/assets/123d9a9b-c827-46fa-8e92-988225eeba49)

### Multiple admins support 

You can now grant other users administrative permission by navigating to `Administration > Users > View Users > Edit User` and toggling the Admin option

<img width=\"471\" alt=\"image\" src=\"https://github.com/user-attachments/assets/3b9f965b-573f-48f7-9ad0-6aacc01bb251\" />

### Dev Containers

There is an alternative way to set up a development environment using dev containers. For more information, refer to the [documentation](https://immich.app/docs/developer/devcontainers). 

Contributing has never been easier: Get started right away with a single click on this button to launch an entire development environment in GitHub’s Codespaces in the cloud.  


[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/immich-app/immich/)


Along with the highlights, there are many other improvements and bug fixes. Make sure to check out the full changes below.


## Support Immich


<p align=\"center\">

<img src=\"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjY2eWc5Y2F0ZW56MmR4aWE0dDhzZXlidXRmYWZyajl1bWZidXZpcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/87CKDqErVfMqY/giphy.gif\" width=\"450\" title=\"SUPPORT THE PROJECT!\"> 

</p>

If you find the project helpful, you can support Immich by purchasing a product key at https://buy.immich.app or our merchandise at https://immich.store



<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### 🚀 Features
* feat(web): granular api access controls by @wuzihao051119 in https://github.com/immich-app/immich/pull/18179
* feat(server): apk links API endpoint for Obtainium Android mobile-server version sync by @NicholasFlamy in https://github.com/immich-app/immich/pull/18700
* feat: delta sync by @shenlong-tanwen in https://github.com/immich-app/immich/pull/18428
* feat(web): improved user onboarding by @bwees in https://github.com/immich-app/immich/pull/18782
* feat(mobile): add album description functionality by @JobiJoba in https://github.com/immich-app/immich/pull/18886
* feat(web): add a user setting for default album sort order. by @dagstuan in https://github.com/immich-app/immich/pull/18950
* feat(mobile): hash assets in isolate by @shenlong-tanwen in https://github.com/immich-app/immich/pull/18924
* feat(server): add /search/statistics resource by @jpg0 in https://github.com/immich-app/immich/pull/18885
* feat(mobile): add cast support by @bwees in https://github.com/immich-app/immich/pull/18341
* feat(server): Add album filter to search by @xCJPECKOVERx in https://github.com/immich-app/immich/pull/18985
* feat(web): manage admin users by @nosajthenitram in https://github.com/immich-app/immich/pull/15380

### 🌟 Enhancements
* feat: keyboard navigation to timeline by @midzelis in https://github.com/immich-app/immich/pull/17798
* chore: vchord 0.4.1 by @mertalev in https://github.com/immich-app/immich/pull/18588
* feat(web): tag shortcut by @wuzihao051119 in https://github.com/immich-app/immich/pull/18711
* feat(server): log failed healthchecks to server container stderr in verbose mode by @skatsubo in https://github.com/immich-app/immich/pull/18709
* feat(web): make google cast opt in by @bwees in https://github.com/immich-app/immich/pull/18514
* feat: start oauth with `autoLaunch=1` by @Yetangitu in https://github.com/immich-app/immich/pull/18763
* feat: add --json-output option to upload command by @ferdinandyb in https://github.com/immich-app/immich/pull/18845
* feat: upload assets to locked folder by @arnolicious in https://github.com/immich-app/immich/pull/18806
* feat(web): improve slideshow quality of life by @dagstuan in https://github.com/immich-app/immich/pull/18778
* feat(mobile): Improve language setting UI by @dvbthien in https://github.com/immich-app/immich/pull/18854
* feat(mobile): add bulk download functionality by @JobiJoba in https://github.com/immich-app/immich/pull/18878
* feat(web): undo delete by @xCJPECKOVERx in https://github.com/immich-app/immich/pull/18729
* feat(web): display number of likes in asset viewer by @robinbrisa in https://github.com/immich-app/immich/pull/18911
* feat(web): Change the primary asset of a stack by @xCJPECKOVERx in https://github.com/immich-app/immich/pull/18913
* feat(web): Focus on combo box input when opening add tag modal by @xCJPECKOVERx in https://github.com/immich-app/immich/pull/18923
* feat(mobile): Capitalize first letter when add / edit name by @JobiJoba in https://github.com/immich-app/immich/pull/19005
* feat(mobile): update maplibre to support PMTiles in the mobile app by @savely-krasovsky in https://github.com/immich-app/immich/pull/19016
* refactor(web): tree data structure for folder and tag views by @mertalev in https://github.com/immich-app/immich/pull/18980
* feat(mobile): enabled DCM by @atollk in https://github.com/immich-app/immich/pull/17957
* feat(server): add memories statistics resource by @jpg0 in https://github.com/immich-app/immich/pull/19035
* feat(mobile): Add Scrollbar for vertical scrolling on the actions button multi-select by @JobiJoba in https://github.com/immich-app/immich/pull/18940
* feat: pass filename in body on asset upload by @alextran1502 in https://github.com/immich-app/immich/pull/19138
* feat: duplicate delete groups api by @jrasm91 in https://github.com/immich-app/immich/pull/19142
* feat: service worker cache static app resources, and all entry points by @midzelis in https://github.com/immich-app/immich/pull/18043
* feat: improve mobile screen reader accessibility by @atollk in https://github.com/immich-app/immich/pull/17876
* feat: devcontainers by @midzelis in https://github.com/immich-app/immich/pull/18007
* fix(web): OAuth quota size by @wuzihao051119 in https://github.com/immich-app/immich/pull/18526
* feat(server): lru cache for query embeddings by @mertalev in https://github.com/immich-app/immich/pull/19181
* fix: partner asset and exif sync backfill  by @zackpollard in https://github.com/immich-app/immich/pull/19224
* feat(web): wasm justified layout by @mertalev in https://github.com/immich-app/immich/pull/19150
### 🐛 Bug fixes
* fix(mobile): local albums translation by @waclaw66 in https://github.com/immich-app/immich/pull/18637
* fix(web): hide map button when disable by @wuzihao051119 in https://github.com/immich-app/immich/pull/18743
* fix: pinch zoom in mobile app by @toamz in https://github.com/immich-app/immich/pull/18744
* fix(mobile): double swipe by @shenlong-tanwen in https://github.com/immich-app/immich/pull/18749
* fix(mobile): android status bar overlays icon in map by @YarosMallorca in https://github.com/immich-app/immich/pull/18780
* fix(web): datetime in storage template example by @YarosMallorca in https://github.com/immich-app/immich/pull/18784
* fix: oauth by @danieldietzler in https://github.com/immich-app/immich/pull/18725
* fix(mobile): center loading spinner in people page by @YarosMallorca in https://github.com/immich-app/immich/pull/18781
* fix(mobile): group settings not respected without restart by @shenlong-tanwen in https://github.com/immich-app/immich/pull/18823
* fix(server): cannot share album to owner by @wuzihao051119 in https://github.com/immich-app/immich/pull/18802
* fix(mobile): Set the currentAsset to the asset clicked when opening an asset from folders by @JobiJoba in https://github.com/immich-app/immich/pull/18825
* fix(mobile): notification, dialog that don't translate properly by @dvbthien in https://github.com/immich-app/immich/pull/18827
* fix(web): Improve zoom behavior in photo-viewer. by @dagstuan in https://github.com/immich-app/immich/pull/18803
* fix(server): tighten asset visibility by @mertalev in https://github.com/immich-app/immich/pull/18699
* fix(mobile): Showing videos of partner in search page quick links by @JobiJoba in https://github.com/immich-app/immich/pull/18855
* fix(mobile): photo_manager ignore filters by @shenlong-tanwen in https://github.com/immich-app/immich/pull/18742
* fix(mobile): reset current asset if we try to go on a activity list page by @JobiJoba in https://github.com/immich-app/immich/pull/18895
* fix(mobile): t function localization by @waclaw66 in https://github.com/immich-app/immich/pull/18768
* fix(web): asset-viewer error when selecting a stacked asset by @xCJPECKOVERx in https://github.com/immich-app/immich/pull/18881
* fix(web): persisted store by @wuzihao051119 in https://github.com/immich-app/immich/pull/18385
* chore(server): cleanup unused query parameters in time bucket by @jinxuan-owyong in https://github.com/immich-app/immich/pull/18893
* fix(web): add tag button not using translation by @xCJPECKOVERx in https://github.com/immich-app/immich/pull/18910
* fix(mobile): prevent upload intent replacement in splash screen and reset upload button when minimize app by @JobiJoba in https://github.com/immich-app/immich/pull/18914
* fix: thumbnail fade in by @midzelis in https://github.com/immich-app/immich/pull/18935
* fix: regression: sort day by fileCreatedAt again by @midzelis in https://github.com/immich-app/immich/pull/18732
* fix(web): Update add to album notification to better announce errors by @xCJPECKOVERx in https://github.com/immich-app/immich/pull/18955
* fix(web): improve asset name readability in dark mode by @jinxuan-owyong in https://github.com/immich-app/immich/pull/19012
* fix(mobile): share asset back button exit application by @JobiJoba in https://github.com/immich-app/immich/pull/18919
* fix(mobile): people collection page layout broken in landscape by @JobiJoba in https://github.com/immich-app/immich/pull/19004
* fix(mobile): After editing people name, back button close the app by @JobiJoba in https://github.com/immich-app/immich/pull/18992
* fix(web): handling historical timezones in web client by @dahool in https://github.com/immich-app/immich/pull/18905
* fix(mobile): fix nested MaterialApp by @dvbthien in https://github.com/immich-app/immich/pull/18998
* chore: catch migration error by @alextran1502 in https://github.com/immich-app/immich/pull/19096
* fix: count album comments and likes correctly by @zackpollard in https://github.com/immich-app/immich/pull/19114
* fix: don't show comments or likes for trashed assets by @zackpollard in https://github.com/immich-app/immich/pull/19113
* fix: album comment count including trashed assets by @zackpollard in https://github.com/immich-app/immich/pull/19117
* fix(server): add basic auth support by @elliotbrandwein in https://github.com/immich-app/immich/pull/16740
* chore: callback quotes by @jrasm91 in https://github.com/immich-app/immich/pull/19126
* fix(web): properly update activityManager when browsing assets by @robinbrisa in https://github.com/immich-app/immich/pull/18909
* fix: cli upload deletes files that failed uploading by @danieldietzler in https://github.com/immich-app/immich/pull/19140
* fix: skip locked photos during duplicate scan. by @endthestart in https://github.com/immich-app/immich/pull/19105
* fix(web): small issues with the memory viewer. by @dagstuan in https://github.com/immich-app/immich/pull/19184
* fix(mobile): add translate extension by @dvbthien in https://github.com/immich-app/immich/pull/18942
* fix: disable map fly animation when switching between assets by @zackpollard in https://github.com/immich-app/immich/pull/19223
* fix(web): Asset viewer stack thumbnails overflow on top of asset by @xCJPECKOVERx in https://github.com/immich-app/immich/pull/19088
* fix(web): MemoryStore does not initialize on direct navigation by @xCJPECKOVERx in https://github.com/immich-app/immich/pull/18947
* fix(mobile): correct share option for local asset by @alextran1502 in https://github.com/immich-app/immich/pull/19233
### 📚 Documentation
* fix: cursed knowledge date index by @bo0tzz in https://github.com/immich-app/immich/pull/18801
* chore: document backup ordering by @bo0tzz in https://github.com/immich-app/immich/pull/18807
* chore: more cursed knowledge by @danieldietzler in https://github.com/immich-app/immich/pull/18932
* docs: update instructions for external libraries by @WhyNotHugo in https://github.com/immich-app/immich/pull/19080
* chore(docs): add rename note to synology.md by @YishGene in https://github.com/immich-app/immich/pull/17425
* docs: update the picture showing administration link by @jump in https://github.com/immich-app/immich/pull/19203
* chore: update truenas repo link by @khmyznikov in https://github.com/immich-app/immich/pull/19195
### 🌐 Translations
* fix: Update locked folder text and improve translations by @dvbthien in https://github.com/immich-app/immich/pull/18622
* fix: update en.json by @aviv926 in https://github.com/immich-app/immich/pull/18835
* fix: translation in the tag people window by @nextmwa in https://github.com/immich-app/immich/pull/18777
* feat(mobile): Add new language to mobile by @dvbthien in https://github.com/immich-app/immich/pull/18891
* fix(web): add tag button tooltip not using translation by @xCJPECKOVERx in https://github.com/immich-app/immich/pull/18921
* fix(web): Remove tag buttons in search and modal missing tooltip translations by @xCJPECKOVERx in https://github.com/immich-app/immich/pull/19087
* chore(web): update translations by @weblate in https://github.com/immich-app/immich/pull/18530
* chore(web): update translations by @weblate in https://github.com/immich-app/immich/pull/19127

## New Contributors
* @Yetangitu made their first contribution in https://github.com/immich-app/immich/pull/18763
* @ferdinandyb made their first contribution in https://github.com/immich-app/immich/pull/18845
* @JobiJoba made their first contribution in https://github.com/immich-app/immich/pull/18825
* @dagstuan made their first contribution in https://github.com/immich-app/immich/pull/18803
* @nextmwa made their first contribution in https://github.com/immich-app/immich/pull/18777
* @xCJPECKOVERx made their first contribution in https://github.com/immich-app/immich/pull/18881
* @robinbrisa made their first contribution in https://github.com/immich-app/immich/pull/18911
* @jpg0 made their first contribution in https://github.com/immich-app/immich/pull/18885
* @WhyNotHugo made their first contribution in https://github.com/immich-app/immich/pull/19080
* @nosajthenitram made their first contribution in https://github.com/immich-app/immich/pull/15380
* @elliotbrandwein made their first contribution in https://github.com/immich-app/immich/pull/16740
* @YishGene made their first contribution in https://github.com/immich-app/immich/pull/17425
* @endthestart made their first contribution in https://github.com/immich-app/immich/pull/19105
* @jump made their first contribution in https://github.com/immich-app/immich/pull/19203
* @khmyznikov made their first contribution in https://github.com/immich-app/immich/pull/19195

**Full Changelog**: https://github.com/immich-app/immich/compare/v1.134.0...v1.135.0