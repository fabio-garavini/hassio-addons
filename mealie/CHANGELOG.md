# 🍴🍴🍴🍴🍴🍴

## ❗❗❗Important Notice for PWA (Mobile) Users
**TL;DR If you use the PWA (most/all mobile users), after upgrading, uninstall your PWA and install the new one**

The PWA has been overhauled to meet more modern standards. The old PWA configuration was constrained heavily by the old Nuxt 2 framework, and had several odd quirks and simply didn't work in a lot of instances. The new PWA implementation works much better and should be compatible with all devices which support PWAs (including both iPhone and Android devices).

A consequence of this is that the way the app is identified internally has changed, so existing PWA installs won't recognize that there has been an update to the application. In order to continue using the PWA, once you update Mealie, _remove/uninstall_ your old PWA and re-install it.

## 🎉 Highlights

- New Settings Layout. No more clicking on "settings" when you're looking for the data management page and remembering that it's, 
- Major performance improvements to the recipe overview page, making it several times more snappy.
- Lots of quality of life improvements, including many bugfixes.
- Upgrades to the PWA for mobile devices (see more above).

## ✨ New features

- feat: group recipe ingredients by section titles @felixschndr (#5864)
- feat: consolidate settings gui @Kuchenpirat (#6043)
- feat: Add option to switch sqlite to WAL @t0xicCode (#6050)
- feat: Improve first time setup ux @p0lycarpio (#6106)

## 🐛 Bug fixes

- fix: Make String Cleaner More Robust @michael-genson (#6032)
- fix: Handle missing OIDC groups claim @t0xicCode (#6054)
- fix: import from Paprika not importing some images @brokeh (#5911)
- fix: re-ordering of cookbooks @RichardVanLeeuwen (#5975)
- fix: Fix RecipeLastMade dialog date picker being off by a day @lehnerpat (#6079)
- fix: Fix PWA @michael-genson (#6090)
- fix: Make Frontend Respect TOKEN_TIME @michael-genson (#6089)
- fix: Incorrect Usage of $vuetify.display @michael-genson (#6066)
- fix: set touchless on AppSidebar @p0lycarpio (#6092)
- fix: Shopping list top buttons layout (margin and row wrapping) @lehnerpat (#6091)
- fix: Optimize Recipe Favorites/Ratings @michael-genson (#6075)
- fix: Optimize Recipe Context Menu @michael-genson (#6071)
- fix: Cookbooks page padding @p0lycarpio (#6097)
- fix: Context Menu Dialogs Not Working @michael-genson (#6108)
- fix: Missing Locale Dates @michael-genson (#6116)
- fix: Don't open the sidebar drawer by default on medium screens @noxhirsch (#6107)
- fix: Upgrade Vuetify, fix Dev Dependencies, and fix Migration Tree View @michael-genson (#6127)
- fix: Refactor and Optimize Explore Page Search @michael-genson (#6070)
- fix: add `breaks` option to markdown rendering, to get old linebreak behaviour @fleshgolem (#6156)
- fix: Can't Edit Timeline Events @michael-genson (#6160)
- fix: Ingredient Parser Drops Units Sometimes @michael-genson (#6150)

## 🧰 Maintenance

<details>
<summary>21 changes</summary>

- chore(l10n): New Crowdin updates @hay-kot (#6034)
- chore(l10n): New Crowdin updates @hay-kot (#6049)
- chore(l10n): New Crowdin updates @hay-kot (#6058)
- chore(l10n): New Crowdin updates @hay-kot (#6063)
- chore(l10n): New Crowdin updates @hay-kot (#6067)
- chore: automatic locale sync @github-actions (#6069)
- chore(l10n): New Crowdin updates @hay-kot (#6073)
- chore(l10n): New Crowdin updates @hay-kot (#6076)
- chore(auto): Update pre-commit hooks @github-actions (#6077)
- chore(l10n): New Crowdin updates @hay-kot (#6080)
- chore(l10n): New Crowdin updates @hay-kot (#6088)
- chore(l10n): New Crowdin updates @hay-kot (#6093)
- chore(l10n): New Crowdin updates @hay-kot (#6100)
- chore(l10n): New Crowdin updates @hay-kot (#6105)
- chore: automatic locale sync @github-actions (#6117)
- chore(l10n): New Crowdin updates @hay-kot (#6113)
- chore(l10n): New Crowdin updates @hay-kot (#6123)
- chore(auto): Update pre-commit hooks @github-actions (#6125)
- chore: Update GitHub Configs @michael-genson (#6135)
- chore(l10n): New Crowdin updates @hay-kot (#6139)
- chore(l10n): New Crowdin updates @hay-kot (#6143)
</details>

## 📚 Documentation

- docs(auto): Update image tag, for release v3.1.2 @github-actions (#6037)
- docs: Fix list formatting on 'Features' docs page @lehnerpat (#6082)
- docs: Fix install grammar @Solrac8080 (#6118)
- docs: link to GitHub Release Notes @TheMerinoWolf (#6122)
- docs: fix typo starting-dev-server.md @HelgeKrueger (#6142)

## 🔨 Internal development

- dev: list availlable frontend updates on renovate dependency dashboard @Kuchenpirat (#6130)

## ⬆️ Dependency updates

<details>
<summary>28 changes</summary>

- fix(deps): update dependency lxml to v6.0.1 @renovate (#6011)
- fix(deps): update dependency openai to v1.102.0 @renovate (#6042)
- fix(deps): update dependency orjson to v3.11.3 @renovate (#6041)
- fix(deps): update dependency typing-extensions to v4.15.0 @renovate (#6035)
- fix(deps): update dependency beautifulsoup4 to v4.13.5 @renovate (#6026)
- fix(deps): update dependency rapidfuzz to v3.14.0 @renovate (#6044)
- chore(deps): update dependency coverage to v7.10.5 @renovate (#6021)
- fix(deps): update dependency authlib to v1.6.3 @renovate (#6018)
- fix(deps): update dependency alembic to v1.16.5 @renovate (#6048)
- chore(deps): update dependency ruff to v0.12.11 @renovate (#6056)
- chore(deps): update dependency coverage to v7.10.6 @renovate (#6062)
- fix(deps): update dependency openai to v1.103.0 @renovate (#6083)
- fix(deps): update dependency openai to v1.104.2 @renovate (#6086)
- chore(deps): update node.js to bfee10f @renovate (#6095)
- chore(deps): update node.js to d22c0ce @renovate (#6096)
- fix(deps): update dependency openai to v1.105.0 @renovate (#6094)
- fix(deps): update dependency openai to v1.106.0 @renovate (#6099)
- chore(deps): update dependency pytest to v8.4.2 @renovate (#6101)
- chore(deps): update dependency ruff to v0.12.12 @renovate (#6102)
- fix(deps): update dependency openai to v1.106.1 @renovate (#6103)
- chore(deps): update dependency mkdocs-material to v9.6.19 @renovate (#6121)
- chore(config): migrate renovate config @renovate (#6134)
- fix(deps): update dependency rapidfuzz to v3.14.1 @renovate (#6137)
- fix(deps): update dependency vite to v6.2.7 [security] @renovate (#6132)
- chore(deps): update node.js to f3e50c7 @renovate (#6136)
- fix(deps): update dependency openai to v1.107.0 @renovate (#6129)
- fix(deps): update dependency next-auth to ~4.24.0 [security] @renovate (#6133)
- fix(deps): update dependency axios to v1.12.0 [security] @renovate (#6158)
</details>

## 🙏 New Contributors

* @t0xicCode made their first contribution in https://github.com/mealie-recipes/mealie/pull/6054
* @brokeh made their first contribution in https://github.com/mealie-recipes/mealie/pull/5911
* @Solrac8080 made their first contribution in https://github.com/mealie-recipes/mealie/pull/6118
* @TheMerinoWolf made their first contribution in https://github.com/mealie-recipes/mealie/pull/6122
* @noxhirsch made their first contribution in https://github.com/mealie-recipes/mealie/pull/6107
* @HelgeKrueger made their first contribution in https://github.com/mealie-recipes/mealie/pull/6142

# 🍴🍴🍴🍴🍴🍴