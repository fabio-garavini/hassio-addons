# v2.5.5

_`v2.5.4` was in the way of getting out, and we got another annoyance bug fixed, so we rolled it into `v2.5.5`_

Happy Friday! This release addresses more bugs from the `v2.5.0` release. Enjoy!

- Fixed an issue where changing the timezone on the web changes the time instead of the timezone
- Fixed an issue where background task on iOS don't get triggered as often
- Fixes some issues regarding the usage of self-signed certificate and mLTS on the mobile app

### 🐛 Bug fixes
* fix(mobile): cancel share download when dialog is dismissed by @cmdPromptCritical in https://github.com/immich-app/immich/pull/25466
* fix: album dto docs by @jrasm91 in https://github.com/immich-app/immich/pull/25873
* fix: null validation by @jrasm91 in https://github.com/immich-app/immich/pull/25891
* fix(server): deleting stacked assets by @jrasm91 in https://github.com/immich-app/immich/pull/25874
* fix: close tag modal after tagging assets by @michelheusschen in https://github.com/immich-app/immich/pull/25884
* fix: correctly sync shared link download with metadata toggle by @michelheusschen in https://github.com/immich-app/immich/pull/25885
* fix: date time picker text color in dark mode by @alextran1502 in https://github.com/immich-app/immich/pull/25883
* fix: allow null tagIds in search dto by @michelheusschen in https://github.com/immich-app/immich/pull/25920
* fix: improve asset editor exit handling by @michelheusschen in https://github.com/immich-app/immich/pull/25917
* fix: make switch labels properly clickable by @michelheusschen in https://github.com/immich-app/immich/pull/25898
* fix: ensure theme stays in sync with @immich/ui by @michelheusschen in https://github.com/immich-app/immich/pull/25922
* fix: preserve hidden people state across pagination by @michelheusschen in https://github.com/immich-app/immich/pull/25886
* fix: file name search label by @alextran1502 in https://github.com/immich-app/immich/pull/25916
* fix(mobile): mtls on native clients by @mertalev in https://github.com/immich-app/immich/pull/25802
* fix: time zone upserts by @danieldietzler in https://github.com/immich-app/immich/pull/25889
* fix(web): Ensure profile picture is cropped to 1:1 ratio by @aditya-ai-architect in https://github.com/immich-app/immich/pull/25892
* fix(mobile): reset asset index on timeline refresh by @uhthomas in https://github.com/immich-app/immich/pull/25729
* fix: timezone in timeline bucketing by @shenlong-tanwen in https://github.com/immich-app/immich/pull/25894
* fix(mobile): Update preview and PageController position when the asset count decreases while the last item is selected by @PeterOmbodi in https://github.com/immich-app/immich/pull/25563
* fix(server): use provided database username for restore & ensure name is not mangled by @insertish in https://github.com/immich-app/immich/pull/25679
* fix: image download complete notification shows an extra {file_name} template tag by @romoisverycool in https://github.com/immich-app/immich/pull/25936
* fix: face and edit handling by @bwees in https://github.com/immich-app/immich/pull/25738
* fix: queue assets missing fullsize files for thumbnail regeneration by @midzelis in https://github.com/immich-app/immich/pull/25794
* fix: dedupe version announcement modal by @jrasm91 in https://github.com/immich-app/immich/pull/25946
* fix(cli): suppress startup messages for immich-admin by @VahantSharma in https://github.com/immich-app/immich/pull/25928
### 📚 Documentation
* docs: update manual backup/restore to match the automatic process by @insertish in https://github.com/immich-app/immich/pull/25924
* fix(docs): add missing --json-output arg to CLI example by @Xiol in https://github.com/immich-app/immich/pull/25870
* docs: remove writeTimeout on traefik example by @kaysond in https://github.com/immich-app/immich/pull/25837
### 🌐 Translations
* chore(web): update translations by @weblate in https://github.com/immich-app/immich/pull/25585

## New Contributors
* @aditya-ai-architect made their first contribution in https://github.com/immich-app/immich/pull/25892
* @VahantSharma made their first contribution in https://github.com/immich-app/immich/pull/25927
* @Xiol made their first contribution in https://github.com/immich-app/immich/pull/25870
* @cmdPromptCritical made their first contribution in https://github.com/immich-app/immich/pull/25466
* @romoisverycool made their first contribution in https://github.com/immich-app/immich/pull/25936
* @didekoning made their first contribution in https://github.com/immich-app/immich/pull/25937

**Full Changelog**: https://github.com/immich-app/immich/compare/v2.5.3...v2.5.5