# 2.16.3

### Features / Enhancements

- Performance: pre-filter document list in scheduled workflow checks @shamoon ([#10031](https://github.com/paperless-ngx/paperless-ngx/pull/10031))
- Chore: refactor consumer plugin checks to a pre-flight plugin @shamoon ([#9994](https://github.com/paperless-ngx/paperless-ngx/pull/9994))
- Enhancement: include DOCUMENT\\_TYPE to post consume scripts @matthesrieke ([#9977](https://github.com/paperless-ngx/paperless-ngx/pull/9977))

### Bug Fixes

- Fix: handle whoosh query correction errors @shamoon ([#10121](https://github.com/paperless-ngx/paperless-ngx/pull/10121))
- Fix: handle favicon with non-default static dir @shamoon ([#10107](https://github.com/paperless-ngx/paperless-ngx/pull/10107))
- Fixhancement: cleanup user or group references in settings upon deletion @shamoon ([#10049](https://github.com/paperless-ngx/paperless-ngx/pull/10049))
- Fix: Add exception to `utime` in `copy_basic_file_stats` @Freilichtbuehne ([#10070](https://github.com/paperless-ngx/paperless-ngx/pull/10070))
- Fix: include base href when opening global search result in new window @shamoon ([#10066](https://github.com/paperless-ngx/paperless-ngx/pull/10066))

### Dependencies

- Chore(deps): Bump the small-changes group across 1 directory with 3 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#10085](https://github.com/paperless-ngx/paperless-ngx/pull/10085))
- Chore(deps): Update granian[uvloop] requirement from ~=2.2.0 to ~=2.3.2 @[dependabot[bot]](https://github.com/apps/dependabot) ([#10055](https://github.com/paperless-ngx/paperless-ngx/pull/10055))
- Chore(deps): Bump the frontend-angular-dependencies group in /src-ui with 18 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#10099](https://github.com/paperless-ngx/paperless-ngx/pull/10099))
- Chore(deps-dev): Bump the frontend-eslint-dependencies group in /src-ui with 4 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#10100](https://github.com/paperless-ngx/paperless-ngx/pull/10100))
- Chore(deps): Bump bootstrap from 5.3.3 to 5.3.6 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#10091](https://github.com/paperless-ngx/paperless-ngx/pull/10091))
- Chore(deps-dev): Bump @<!---->codecov/webpack-plugin from 1.9.0 to 1.9.1 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#10090](https://github.com/paperless-ngx/paperless-ngx/pull/10090))
- Chore(deps-dev): Bump @<!---->types/node from 22.15.3 to 22.15.29 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#10089](https://github.com/paperless-ngx/paperless-ngx/pull/10089))
- Chore(deps): Bump zone.js from 0.15.0 to 0.15.1 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#10088](https://github.com/paperless-ngx/paperless-ngx/pull/10088))
- docker(deps): bump astral-sh/uv from 0.7.8-python3.12-bookworm-slim to 0.7.9-python3.12-bookworm-slim @[dependabot[bot]](https://github.com/apps/dependabot) ([#10084](https://github.com/paperless-ngx/paperless-ngx/pull/10084))
- docker(deps): Bump astral-sh/uv from 0.6.16-python3.12-bookworm-slim to 0.7.8-python3.12-bookworm-slim @[dependabot[bot]](https://github.com/apps/dependabot) ([#10056](https://github.com/paperless-ngx/paperless-ngx/pull/10056))

### All App Changes

- Fix: handle whoosh query correction errors @shamoon ([#10121](https://github.com/paperless-ngx/paperless-ngx/pull/10121))
- Performance: pre-filter document list in scheduled workflow checks @shamoon ([#10031](https://github.com/paperless-ngx/paperless-ngx/pull/10031))
- Chore(deps): Bump the small-changes group across 1 directory with 3 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#10085](https://github.com/paperless-ngx/paperless-ngx/pull/10085))
- Chore: refactor consumer plugin checks to a pre-flight plugin @shamoon ([#9994](https://github.com/paperless-ngx/paperless-ngx/pull/9994))
- Chore(deps): Update granian[uvloop] requirement from ~=2.2.0 to ~=2.3.2 @[dependabot[bot]](https://github.com/apps/dependabot) ([#10055](https://github.com/paperless-ngx/paperless-ngx/pull/10055))
- Fix: handle favicon with non-default static dir @shamoon ([#10107](https://github.com/paperless-ngx/paperless-ngx/pull/10107))
- Chore(deps): Bump the frontend-angular-dependencies group in /src-ui with 18 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#10099](https://github.com/paperless-ngx/paperless-ngx/pull/10099))
- Chore(deps-dev): Bump the frontend-eslint-dependencies group in /src-ui with 4 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#10100](https://github.com/paperless-ngx/paperless-ngx/pull/10100))
- Chore(deps): Bump bootstrap from 5.3.3 to 5.3.6 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#10091](https://github.com/paperless-ngx/paperless-ngx/pull/10091))
- Chore(deps-dev): Bump @<!---->codecov/webpack-plugin from 1.9.0 to 1.9.1 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#10090](https://github.com/paperless-ngx/paperless-ngx/pull/10090))
- Chore(deps-dev): Bump @<!---->types/node from 22.15.3 to 22.15.29 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#10089](https://github.com/paperless-ngx/paperless-ngx/pull/10089))
- Chore(deps): Bump zone.js from 0.15.0 to 0.15.1 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#10088](https://github.com/paperless-ngx/paperless-ngx/pull/10088))
- Fixhancement: cleanup user or group references in settings upon deletion @shamoon ([#10049](https://github.com/paperless-ngx/paperless-ngx/pull/10049))
- Enhancement: include DOCUMENT\\_TYPE to post consume scripts @matthesrieke ([#9977](https://github.com/paperless-ngx/paperless-ngx/pull/9977))
- Fix: Add exception to `utime` in `copy_basic_file_stats` @Freilichtbuehne ([#10070](https://github.com/paperless-ngx/paperless-ngx/pull/10070))
- Fix: include base href when opening global search result in new window @shamoon ([#10066](https://github.com/paperless-ngx/paperless-ngx/pull/10066))
