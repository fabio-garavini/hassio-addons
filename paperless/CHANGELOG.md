## paperless-ngx 3.3.0

### Features / Enhancements

- Enhancement: more control over suggestion requests @shamoon ([#14258](https://github.com/paperless-ngx/paperless-ngx/pull/14258))
- Chorehancement: set manifest CORS for credentials @shamoon ([#14307](https://github.com/paperless-ngx/paperless-ngx/pull/14307))
- Enhancement: include Django admin with 2FA @shamoon ([#14270](https://github.com/paperless-ngx/paperless-ngx/pull/14270))
- Feature: propagate resolved secrets to interactive container shells @stumpylog ([#14254](https://github.com/paperless-ngx/paperless-ngx/pull/14254))
- Enhancement: support separate embedding API key @furkanural ([#14067](https://github.com/paperless-ngx/paperless-ngx/pull/14067))
- Enhancement: support passthrough extra params for LLMs @shamoon ([#14202](https://github.com/paperless-ngx/paperless-ngx/pull/14202))
- Feature: store barcode contents, list and search them @jurassicparkicecream ([#14276](https://github.com/paperless-ngx/paperless-ngx/pull/14276))

### Bug Fixes

- Fix: Set the ProcessedMail owner based on the rule owner in all cases @stumpylog ([#14356](https://github.com/paperless-ngx/paperless-ngx/pull/14356))
- Fix: Ensure log rotation settings are converted to integers @stumpylog ([#14343](https://github.com/paperless-ngx/paperless-ngx/pull/14343))
- Fix: Wrap apt calls into a retry so we can ideally jump a slow mirror @stumpylog ([#14344](https://github.com/paperless-ngx/paperless-ngx/pull/14344))
- Fix: ship pdf.js CMaps so CJK documents render in the viewer @MrOggy85 ([#14318](https://github.com/paperless-ngx/paperless-ngx/pull/14318))
- Fix: use version page\_count for versioned document @shamoon ([#14280](https://github.com/paperless-ngx/paperless-ngx/pull/14280))
- Fix: allow pointer events for pdf links in pngx viewer @shamoon ([#14264](https://github.com/paperless-ngx/paperless-ngx/pull/14264))
- Fix: During a move to the trash directory, only attempt to copy metadata @stumpylog ([#14250](https://github.com/paperless-ngx/paperless-ngx/pull/14250))
- Fix: convert file mtime to the configured time zone directly @stumpylog ([#14249](https://github.com/paperless-ngx/paperless-ngx/pull/14249))
- Fix: ensure documentDeleted subscription is discarded @shamoon ([#14247](https://github.com/paperless-ngx/paperless-ngx/pull/14247))
- Chore: Fix bugs in the test suite @stumpylog ([#14244](https://github.com/paperless-ngx/paperless-ngx/pull/14244))
- Fix: ensure bulk operations are checked against version root @shamoon ([#14246](https://github.com/paperless-ngx/paperless-ngx/pull/14246))
- Fix: indexing after document-added workflows signal @shamoon ([#14242](https://github.com/paperless-ngx/paperless-ngx/pull/14242))
- Fix: Record full tag and custom field lists in bulk edit audit log @stumpylog ([#14236](https://github.com/paperless-ngx/paperless-ngx/pull/14236))
- Chore: update pikepdf for ocrmypdf requirement @shamoon ([#14235](https://github.com/paperless-ngx/paperless-ngx/pull/14235))
- Fix: handle legacy bulk edit split page range with missing page\_count @shamoon ([#14212](https://github.com/paperless-ngx/paperless-ngx/pull/14212))
- Fix: ignore invalid EXIF orientation when generating image archives @zhzy0077 ([#14203](https://github.com/paperless-ngx/paperless-ngx/pull/14203))

### Documentation

- Documentation: correct duplicates info @shamoon ([#14243](https://github.com/paperless-ngx/paperless-ngx/pull/14243))

### Maintenance

- Chore(deps): Bump the actions group across 1 directory with 4 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#14332](https://github.com/paperless-ngx/paperless-ngx/pull/14332))
- Fix: Wrap apt calls into a retry so we can ideally jump a slow mirror @stumpylog ([#14344](https://github.com/paperless-ngx/paperless-ngx/pull/14344))
- Chore(deps): Bump the actions group across 1 directory with 10 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#14301](https://github.com/paperless-ngx/paperless-ngx/pull/14301))

### Dependencies

<details>
<summary>27 changes</summary>

- Chore(deps): Bump django-filter from 25.2 to 26.1 @[dependabot[bot]](https://github.com/apps/dependabot) ([#14337](https://github.com/paperless-ngx/paperless-ngx/pull/14337))
- Chore(deps): Bump the utilities-patch group across 1 directory with 2 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#14338](https://github.com/paperless-ngx/paperless-ngx/pull/14338))
- Chore(deps): Bump the pre-commit-dependencies group across 1 directory with 3 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#14351](https://github.com/paperless-ngx/paperless-ngx/pull/14351))
- Chore(deps-dev): Bump types-channels from 4.3.0.20260408 to 4.3.0.20260518 @[dependabot[bot]](https://github.com/apps/dependabot) ([#14335](https://github.com/paperless-ngx/paperless-ngx/pull/14335))
- docker(deps): Bump astral-sh/uv from 0.12.20-python3.14-trixie-slim to 0.12.23-python3.14-trixie-slim @[dependabot[bot]](https://github.com/apps/dependabot) ([#14327](https://github.com/paperless-ngx/paperless-ngx/pull/14327))
- Chore(deps): Bump the actions group across 1 directory with 4 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#14332](https://github.com/paperless-ngx/paperless-ngx/pull/14332))
- Chore(deps): Bump the uv group across 1 directory with 2 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#14325](https://github.com/paperless-ngx/paperless-ngx/pull/14325))
- Chore(deps): Bump the frontend-angular-dependencies group across 1 directory with 13 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#14329](https://github.com/paperless-ngx/paperless-ngx/pull/14329))
- Chore(deps-dev): Bump prettier from 3.9.8 to 3.9.9 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#14331](https://github.com/paperless-ngx/paperless-ngx/pull/14331))
- Chore(deps-dev): Bump the frontend-eslint-dependencies group across 1 directory with 3 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#14330](https://github.com/paperless-ngx/paperless-ngx/pull/14330))
- Chore(deps-dev): Bump zensical from 0.0.64 to 0.0.65 in the development group @[dependabot[bot]](https://github.com/apps/dependabot) ([#14326](https://github.com/paperless-ngx/paperless-ngx/pull/14326))
- Chore(deps): Bump the uv group across 1 directory with 2 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#14314](https://github.com/paperless-ngx/paperless-ngx/pull/14314))
- Chore(deps): Bump the utilities-minor group across 1 directory with 7 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#14305](https://github.com/paperless-ngx/paperless-ngx/pull/14305))
- docker-compose(deps): bump greenmail/standalone from 2.1.13 to 2.1.14 in /docker/compose @[dependabot[bot]](https://github.com/apps/dependabot) ([#14281](https://github.com/paperless-ngx/paperless-ngx/pull/14281))
- docker(deps): Bump astral-sh/uv from 0.12.16-python3.14-trixie-slim to 0.12.20-python3.14-trixie-slim @[dependabot[bot]](https://github.com/apps/dependabot) ([#14282](https://github.com/paperless-ngx/paperless-ngx/pull/14282))
- Chore(deps): Bump the pre-commit-dependencies group across 1 directory with 3 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#14283](https://github.com/paperless-ngx/paperless-ngx/pull/14283))
- Chore(deps): Bump the utilities-patch group across 1 directory with 6 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#14297](https://github.com/paperless-ngx/paperless-ngx/pull/14297))
- Chore(deps): Bump the actions group across 1 directory with 10 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#14301](https://github.com/paperless-ngx/paperless-ngx/pull/14301))
- Chore(deps-dev): Bump the frontend-jest-dependencies group across 1 directory with 2 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#14286](https://github.com/paperless-ngx/paperless-ngx/pull/14286))
- Chore(deps-dev): Bump eslint from 10.10.0 to 10.11.0 in /src-ui in the frontend-eslint-dependencies group across 1 directory @[dependabot[bot]](https://github.com/apps/dependabot) ([#14287](https://github.com/paperless-ngx/paperless-ngx/pull/14287))
- Chore(deps-dev): Bump @<!---->types/node from 26.5.0 to 26.6.2 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#14288](https://github.com/paperless-ngx/paperless-ngx/pull/14288))
- Chore(deps-dev): Bump prettier from 3.9.6 to 3.9.8 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#14289](https://github.com/paperless-ngx/paperless-ngx/pull/14289))
- Chore(deps): Bump the frontend-angular-dependencies group across 1 directory with 10 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#14285](https://github.com/paperless-ngx/paperless-ngx/pull/14285))
- Chore: replace bleach with turbohtml @gaborbernat ([#14269](https://github.com/paperless-ngx/paperless-ngx/pull/14269))
- Chore(deps): Bump autobahn from 25.12.2 to 26.7.1 in the uv group across 1 directory @[dependabot[bot]](https://github.com/apps/dependabot) ([#14231](https://github.com/paperless-ngx/paperless-ngx/pull/14231))
- Chore: update pikepdf for ocrmypdf requirement @shamoon ([#14235](https://github.com/paperless-ngx/paperless-ngx/pull/14235))
- Chore(deps): Bump the pre-commit-dependencies group across 1 directory with 2 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#14133](https://github.com/paperless-ngx/paperless-ngx/pull/14133))
</details>

### All App Changes

<details>
<summary>41 changes</summary>

- Feature: store barcode contents, list and search them @jurassicparkicecream ([#14276](https://github.com/paperless-ngx/paperless-ngx/pull/14276))
- Fix: Set the ProcessedMail owner based on the rule owner in all cases @stumpylog ([#14356](https://github.com/paperless-ngx/paperless-ngx/pull/14356))
- Chore(deps): Bump django-filter from 25.2 to 26.1 @[dependabot[bot]](https://github.com/apps/dependabot) ([#14337](https://github.com/paperless-ngx/paperless-ngx/pull/14337))
- Chore(deps): Bump the utilities-patch group across 1 directory with 2 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#14338](https://github.com/paperless-ngx/paperless-ngx/pull/14338))
- Chore(deps-dev): Bump types-channels from 4.3.0.20260408 to 4.3.0.20260518 @[dependabot[bot]](https://github.com/apps/dependabot) ([#14335](https://github.com/paperless-ngx/paperless-ngx/pull/14335))
- Chore(deps): Bump the uv group across 1 directory with 2 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#14325](https://github.com/paperless-ngx/paperless-ngx/pull/14325))
- Fix: Ensure log rotation settings are converted to integers @stumpylog ([#14343](https://github.com/paperless-ngx/paperless-ngx/pull/14343))
- Chore(deps): Bump the frontend-angular-dependencies group across 1 directory with 13 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#14329](https://github.com/paperless-ngx/paperless-ngx/pull/14329))
- Chore(deps-dev): Bump prettier from 3.9.8 to 3.9.9 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#14331](https://github.com/paperless-ngx/paperless-ngx/pull/14331))
- Chore(deps-dev): Bump the frontend-eslint-dependencies group across 1 directory with 3 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#14330](https://github.com/paperless-ngx/paperless-ngx/pull/14330))
- Fix: ship pdf.js CMaps so CJK documents render in the viewer @MrOggy85 ([#14318](https://github.com/paperless-ngx/paperless-ngx/pull/14318))
- Chore(deps-dev): Bump zensical from 0.0.64 to 0.0.65 in the development group @[dependabot[bot]](https://github.com/apps/dependabot) ([#14326](https://github.com/paperless-ngx/paperless-ngx/pull/14326))
- Enhancement: more control over suggestion requests @shamoon ([#14258](https://github.com/paperless-ngx/paperless-ngx/pull/14258))
- Chore(deps): Bump the uv group across 1 directory with 2 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#14314](https://github.com/paperless-ngx/paperless-ngx/pull/14314))
- Chore: anchor admin url pattern @shamoon ([#14316](https://github.com/paperless-ngx/paperless-ngx/pull/14316))
- Chorehancement: set manifest CORS for credentials @shamoon ([#14307](https://github.com/paperless-ngx/paperless-ngx/pull/14307))
- Chore(deps): Bump the utilities-minor group across 1 directory with 7 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#14305](https://github.com/paperless-ngx/paperless-ngx/pull/14305))
- Chore(deps): Bump the utilities-patch group across 1 directory with 6 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#14297](https://github.com/paperless-ngx/paperless-ngx/pull/14297))
- Chore(deps-dev): Bump the frontend-jest-dependencies group across 1 directory with 2 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#14286](https://github.com/paperless-ngx/paperless-ngx/pull/14286))
- Chore(deps-dev): Bump eslint from 10.10.0 to 10.11.0 in /src-ui in the frontend-eslint-dependencies group across 1 directory @[dependabot[bot]](https://github.com/apps/dependabot) ([#14287](https://github.com/paperless-ngx/paperless-ngx/pull/14287))
- Chore(deps-dev): Bump @<!---->types/node from 26.5.0 to 26.6.2 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#14288](https://github.com/paperless-ngx/paperless-ngx/pull/14288))
- Chore(deps-dev): Bump prettier from 3.9.6 to 3.9.8 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#14289](https://github.com/paperless-ngx/paperless-ngx/pull/14289))
- Chore(deps): Bump the frontend-angular-dependencies group across 1 directory with 10 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#14285](https://github.com/paperless-ngx/paperless-ngx/pull/14285))
- Fix: use version page\_count for versioned document @shamoon ([#14280](https://github.com/paperless-ngx/paperless-ngx/pull/14280))
- Chore: replace bleach with turbohtml @gaborbernat ([#14269](https://github.com/paperless-ngx/paperless-ngx/pull/14269))
- Enhancement: include Django admin with 2FA @shamoon ([#14270](https://github.com/paperless-ngx/paperless-ngx/pull/14270))
- Fix: allow pointer events for pdf links in pngx viewer @shamoon ([#14264](https://github.com/paperless-ngx/paperless-ngx/pull/14264))
- Feature: propagate resolved secrets to interactive container shells @stumpylog ([#14254](https://github.com/paperless-ngx/paperless-ngx/pull/14254))
- Fix: During a move to the trash directory, only attempt to copy metadata @stumpylog ([#14250](https://github.com/paperless-ngx/paperless-ngx/pull/14250))
- Fix: convert file mtime to the configured time zone directly @stumpylog ([#14249](https://github.com/paperless-ngx/paperless-ngx/pull/14249))
- Fix: ensure documentDeleted subscription is discarded @shamoon ([#14247](https://github.com/paperless-ngx/paperless-ngx/pull/14247))
- Chore: Fix bugs in the test suite @stumpylog ([#14244](https://github.com/paperless-ngx/paperless-ngx/pull/14244))
- Fix: ensure bulk operations are checked against version root @shamoon ([#14246](https://github.com/paperless-ngx/paperless-ngx/pull/14246))
- Enhancement: support separate embedding API key @furkanural ([#14067](https://github.com/paperless-ngx/paperless-ngx/pull/14067))
- Enhancement: support passthrough extra params for LLMs @shamoon ([#14202](https://github.com/paperless-ngx/paperless-ngx/pull/14202))
- Chore(deps): Bump autobahn from 25.12.2 to 26.7.1 in the uv group across 1 directory @[dependabot[bot]](https://github.com/apps/dependabot) ([#14231](https://github.com/paperless-ngx/paperless-ngx/pull/14231))
- Fix: indexing after document-added workflows signal @shamoon ([#14242](https://github.com/paperless-ngx/paperless-ngx/pull/14242))
- Fix: Record full tag and custom field lists in bulk edit audit log @stumpylog ([#14236](https://github.com/paperless-ngx/paperless-ngx/pull/14236))
- Chore: update pikepdf for ocrmypdf requirement @shamoon ([#14235](https://github.com/paperless-ngx/paperless-ngx/pull/14235))
- Fix: handle legacy bulk edit split page range with missing page\_count @shamoon ([#14212](https://github.com/paperless-ngx/paperless-ngx/pull/14212))
- Fix: ignore invalid EXIF orientation when generating image archives @zhzy0077 ([#14203](https://github.com/paperless-ngx/paperless-ngx/pull/14203))
</details>
