## 3.0.5-v1

### Home Assistant App

- Fix: EML import fails ([#857](https://github.com/fabio-garavini/hassio-addons/issues/857))

### Bug Fixes

- Fix: accept Whoosh-era abbreviated relative-date units (yrs, mos, wks, etc) in search queries @stumpylog ([#13486](https://github.com/paperless-ngx/paperless-ngx/pull/13486))
- Fix: fix edit dialog error change detection @shamoon ([#13483](https://github.com/paperless-ngx/paperless-ngx/pull/13483))
- Fix: key the AI suggestion cache by model and endpoint @lunetics ([#13449](https://github.com/paperless-ngx/paperless-ngx/pull/13449))
- Fix: validate custom field values in bulk operations @shamoon ([#13457](https://github.com/paperless-ngx/paperless-ngx/pull/13457))
- Fixhancement: better handle empty fields from AI suggestions @shamoon ([#13454](https://github.com/paperless-ngx/paperless-ngx/pull/13454))
- Fix: normalize monetary decimal symbol by locale @shamoon ([#13427](https://github.com/paperless-ngx/paperless-ngx/pull/13427))
- Fix: fold overflowing path text in sanity checker @stumpylog ([#13426](https://github.com/paperless-ngx/paperless-ngx/pull/13426))
- Fix: correct delayed add field button for custom fields @shamoon ([#13424](https://github.com/paperless-ngx/paperless-ngx/pull/13424))
- Fix: hide attributes collapse / show button without UI settings @shamoon ([#13425](https://github.com/paperless-ngx/paperless-ngx/pull/13425))
- Fix: consolidate born-digital PDF detection between archive decision and OCR @stumpylog ([#13409](https://github.com/paperless-ngx/paperless-ngx/pull/13409))
- Fix: prevent scale vs page loop in pngx PDF viewer @shamoon ([#13406](https://github.com/paperless-ngx/paperless-ngx/pull/13406))
- Fix: handle hidden line breaks in email subjects when sending email @shamoon ([#13402](https://github.com/paperless-ngx/paperless-ngx/pull/13402))
- Fix: avoid NotSupportedError from document\_importer on MariaDB @stumpylog ([#13400](https://github.com/paperless-ngx/paperless-ngx/pull/13400))
- Fix: exclude next-period start from relative date-range filters @stumpylog ([#13381](https://github.com/paperless-ngx/paperless-ngx/pull/13381))
- Fix: close non-atomic db connections in before\_task\_publish @shamoon ([#13366](https://github.com/paperless-ngx/paperless-ngx/pull/13366))
- Chore/fix: refactor frontend task service @shamoon ([#13365](https://github.com/paperless-ngx/paperless-ngx/pull/13365))
- Fix: fix Enter selection in search autocomplete @shamoon ([#13361](https://github.com/paperless-ngx/paperless-ngx/pull/13361))

### Documentation

- Documentation: PAPERLESS\_CONSUMER\_IGNORE\_PATTERNS clarifications @shamoon ([#13489](https://github.com/paperless-ngx/paperless-ngx/pull/13489))
- Documentation: Add Password Removal workflow action documentation @stumpylog ([#13377](https://github.com/paperless-ngx/paperless-ngx/pull/13377))

### Dependencies

- Chore(deps): Bump pymdown-extensions from 10.21.3 to 11.0 in the uv group across 1 directory @[dependabot[bot]](https://github.com/apps/dependabot) ([#13378](https://github.com/paperless-ngx/paperless-ngx/pull/13378))

### All App Changes

<details>
<summary>21 changes</summary>

- Fix: accept Whoosh-era abbreviated relative-date units (yrs, mos, wks, etc) in search queries @stumpylog ([#13486](https://github.com/paperless-ngx/paperless-ngx/pull/13486))
- Fix: fix edit dialog error change detection @shamoon ([#13483](https://github.com/paperless-ngx/paperless-ngx/pull/13483))
- Performance: sqlite-vec point-delete for document chunks @stumpylog ([#13438](https://github.com/paperless-ngx/paperless-ngx/pull/13438))
- Fix: key the AI suggestion cache by model and endpoint @lunetics ([#13449](https://github.com/paperless-ngx/paperless-ngx/pull/13449))
- Fix: validate custom field values in bulk operations @shamoon ([#13457](https://github.com/paperless-ngx/paperless-ngx/pull/13457))
- Fixhancement: better handle empty fields from AI suggestions @shamoon ([#13454](https://github.com/paperless-ngx/paperless-ngx/pull/13454))
- Performance: Use server side iterators during LLM index updating @stumpylog ([#13430](https://github.com/paperless-ngx/paperless-ngx/pull/13430))
- Fix: normalize monetary decimal symbol by locale @shamoon ([#13427](https://github.com/paperless-ngx/paperless-ngx/pull/13427))
- Fix: fold overflowing path text in sanity checker @stumpylog ([#13426](https://github.com/paperless-ngx/paperless-ngx/pull/13426))
- Fix: correct delayed add field button for custom fields @shamoon ([#13424](https://github.com/paperless-ngx/paperless-ngx/pull/13424))
- Fix: hide attributes collapse / show button without UI settings @shamoon ([#13425](https://github.com/paperless-ngx/paperless-ngx/pull/13425))
- Fix: consolidate born-digital PDF detection between archive decision and OCR @stumpylog ([#13409](https://github.com/paperless-ngx/paperless-ngx/pull/13409))
- Fix: prevent scale vs page loop in pngx PDF viewer @shamoon ([#13406](https://github.com/paperless-ngx/paperless-ngx/pull/13406))
- Fix: handle hidden line breaks in email subjects when sending email @shamoon ([#13402](https://github.com/paperless-ngx/paperless-ngx/pull/13402))
- Fix: avoid NotSupportedError from document\_importer on MariaDB @stumpylog ([#13400](https://github.com/paperless-ngx/paperless-ngx/pull/13400))
- Tweak: adjust doc details button toolbar flow @shamoon ([#13382](https://github.com/paperless-ngx/paperless-ngx/pull/13382))
- Fix: exclude next-period start from relative date-range filters @stumpylog ([#13381](https://github.com/paperless-ngx/paperless-ngx/pull/13381))
- Chore(deps): Bump pymdown-extensions from 10.21.3 to 11.0 in the uv group across 1 directory @[dependabot[bot]](https://github.com/apps/dependabot) ([#13378](https://github.com/paperless-ngx/paperless-ngx/pull/13378))
- Fix: close non-atomic db connections in before\_task\_publish @shamoon ([#13366](https://github.com/paperless-ngx/paperless-ngx/pull/13366))
- Chore/fix: refactor frontend task service @shamoon ([#13365](https://github.com/paperless-ngx/paperless-ngx/pull/13365))
- Fix: fix Enter selection in search autocomplete @shamoon ([#13361](https://github.com/paperless-ngx/paperless-ngx/pull/13361))
</details>
