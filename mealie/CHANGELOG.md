# 3.0.1

## 🚨 Breaking changes
> [!CAUTION]
>### ⚠️ Updated Admin Routes
>We've consolidated the admin user routes to streamline the API. The old routes under `/api/users` have been removed and replaced with new routes under `/api/admin/users`. The underlying functions are unchanged, so switching to the new routes should be seamless.
>
>-   `GET /api/users` → `GET /api/admin/users`
>-   `POST /api/users` → `POST /api/admin/users`
>-   `GET /api/users/{item_id}` → `GET /api/admin/users/{item_id}`
>-   `DELETE /api/users/{item_id}` → `DELETE /api/admin/users/{item_id}`
>
>For more info check out PR #5050

> [!CAUTION]
>### 🚫 Removed Backend Jinja2 Template Rendering
>We have removed the ability to provide and render Jinja2 templates via the backend API. This feature was never exposed in the UI and was difficult to use securely in user-facing scenarios. Users who previously relied on backend template rendering are encouraged to switch to client-side templating solutions.
>
>For more info check out PR #5631

## 🎉 Highlights

### 🆙 Frontend Upgrade to Vue 3 & Nuxt 3
We’ve successfully upgraded the Mealie frontend to Nuxt 3 and Vue 3! 🎉
This was a major overhaul that touched nearly every file in the frontend codebase. While the transition initially introduced a number of visual and functional issues, we’re confident that the vast majority have been resolved and that the new frontend is stable moving forward.
You may also notice some minor visual tweaks to make the interface more streamlined.
This upgrade significantly reduces technical debt and enables us to take advantage of the improved tooling and performance in the Nuxt 3 & Vue 3 ecosystem. We haven’t seen any remaining issues, but if you come across something that’s no longer working as it did before, we’d appreciate a heads-up!

### 🍎 Expanded and Categorized Food Seed File
We’ve significantly increased the size of the food database — from 214 to over 2,500 foods! Additionally, all foods are now categorized, making sorted shopping lists ready to use right out of the box.
If you update your existing foods using the new seed file, please note that we do not overwrite existing entries, so some of your previously existing foods may remain uncategorized.
If you use Mealie in another language, please help us translate the new foods so everyone can enjoy the updated seed file. You can contribute translations on [Mealie’s Crowdin page](https://crowdin.com/project/mealie).
Big thanks to @Cameronwyatt for sticking with this through all the Crowdin limitations.

### 🖼️ Create Recipes from Multiple Images
You can now create recipes using multiple images, making it easier to capture every step or angle of your cooking process. Along with this new feature, we’ve refreshed the visuals on the recipe creation page to provide a smoother, more intuitive experience. 

### 🔒 Option to Hide Password Login
You can now configure the frontend to hide the username and password fields on the login page by setting the environment variable `ALLOW_PASSWORD_LOGIN` to `false`.  This streamlines the login experience for OIDC and other external auth users by removing the standard login fields.

## ✨ New features

- feat: setting to hide password login @cdanis (#4943)
- feat: remove unnecessary UI components if allowPasswordLogin is true @SurfBurger (#5484)
- feat: add the selected recipe servings and yields in the content of the recipe post action @felixschndr (#5340)
- feat: Migrate to Nuxt 3 framework @mrth2 (#5184)
- feat: Update food seeding logic & increase food seed size @Cameronwyatt (#5514)
- feat: create recipe from multiple images @SkepticMystic (#5590)
- feat: new create from image visuals @Kuchenpirat (#5595)
- feat: Consolidate Admin User APIs @michael-genson (#5050)
- feat: Replace google-fonts module with nuxt/fonts @p0lycarpio (#5618)

## 🐛 Bug fixes

- fix: \"NOT IN\" doesn't apply filter properly @michael-genson (#5154)
- fix: spelling of GitHub @Kuchenpirat (#5244)
- fix: update admin scripts paths in docs @Kuchenpirat (#5263)
- fix: remove unmaintained ios shortcut @Kuchenpirat (#5280)
- fix: Pre-download NLTK during Docker build @michael-genson (#5290)
- fix: build pull request image only in mealie repo @Kuchenpirat (#5327)
- fix: Add missing group_id to RecipeTag and TagBase schemas @robertdanahome (#5342)
- fix: handle recipe-scraper returning a int causing clean_time to return None @miawgogo (#5522)
- fix: Fixing the OpenAPI Spec and the Call to delete a shared recipe. @sravankaruturi (#5537)
- fix: #5511, list item state doesn't change when offline @cm226 (#5512)
- fix: Various Nuxt Upgrade Issues @michael-genson (#5545)
- fix: shopping list button in one row @Kuchenpirat (#5547)
- fix: pwa not being installable after nuxt 3 upgrade @Kuchenpirat (#5552)
- fix: Remove \"Ingredients\" From OpenAI Prompt For Instructions @michael-genson (#5546)
- fix: passwort strength indicator @Kuchenpirat (#5553)
- fix: pwa share target @Kuchenpirat (#5557)
- fix: delete recipe instructions after nuxt 3 upgrade @Kuchenpirat (#5560)
- fix: mealplanner day title card height & alignment @Kuchenpirat (#5561)
- fix: register create group flow @Kuchenpirat (#5565)
- fix: Cookbooks not rendering on sidebar @michael-genson (#5570)
- fix: markdown list padding and replace nuxtjs/mdc @Kuchenpirat (#5577)
- fix: recipe image creation @Kuchenpirat (#5579)
- fix: get recipe image by url @Kuchenpirat (#5588)
- fix: Nuxt3 upgrades UI fixes & improvements @p0lycarpio (#5589)
- fix: check for OPENAI_MODEL in OPENAI_FEATURE @jknndy (#5603)
- fix: recipe page warnings @Kuchenpirat (#5609)
- fix: recipe timeline visuals (nuxt 3) @Kuchenpirat (#5608)
- fix: remove unused deps @Kuchenpirat (#5610)
- fix: truncate slugs when too long @hay-kot (#5633)
- fix: load from env if available vs file @hay-kot (#5635)
- fix: workflow permissions @hay-kot (#5636)
- fix: workflow branch target/base @hay-kot (#5637)
- fix: 500 error on recipe share link  @Kuchenpirat (#5627)
- fix: lint error from locale sync @Kuchenpirat (#5644)
- fix: AppButtonCopy errors in tooltip & console @p0lycarpio (#5612)
- fix: Refactor Stores and Fix Missing Public Cookbooks @michael-genson (#5611)
- fix: nutrition info visuals @Kuchenpirat (#5659)
- fix: Remove redundant get_one call in patch_one method @jknndy (#5619)
- fix: Preserve \"Completed On\" Date In Checked Shopping List Items @michael-genson (#5665)
- fix: Recipe Timeline Not Filtering @michael-genson (#5666)
- fix: Remove Padding On Print @michael-genson (#5668)
- fix: Restore Servings To Print View @michael-genson (#5669)

## 🧰 Maintenance

<details>
<summary>57 changes</summary>

- chore(l10n): New Crowdin updates @hay-kot (#5243)
- chore(l10n): New Crowdin updates @hay-kot (#5245)
- chore(l10n): New Crowdin updates @hay-kot (#5246)
- chore(l10n): New Crowdin updates @hay-kot (#5248)
- chore(l10n): New Crowdin updates @hay-kot (#5250)
- chore(l10n): New Crowdin updates @hay-kot (#5252)
- chore(auto): Update pre-commit hooks @github-actions (#5269)
- chore(l10n): New Crowdin updates @hay-kot (#5262)
- chore(l10n): New Crowdin updates @hay-kot (#5281)
- chore(l10n): New Crowdin updates @hay-kot (#5301)
- chore(auto): Update pre-commit hooks @github-actions (#5320)
- chore(l10n): New Crowdin updates @hay-kot (#5310)
- chore(auto): Update pre-commit hooks @github-actions (#5344)
- chore(l10n): New Crowdin updates @hay-kot (#5360)
- chore(l10n): New Crowdin updates @hay-kot (#5370)
- chore(auto): Update pre-commit hooks @github-actions (#5372)
- chore(l10n): New Crowdin updates @hay-kot (#5374)
- chore(l10n): New Crowdin updates @hay-kot (#5379)
- chore(l10n): New Crowdin updates @hay-kot (#5390)
- chore(l10n): New Crowdin updates @hay-kot (#5394)
- chore(l10n): New Crowdin updates @hay-kot (#5396)
- chore(auto): Update pre-commit hooks @github-actions (#5398)
- chore(l10n): New Crowdin updates @hay-kot (#5407)
- chore(auto): Update pre-commit hooks @github-actions (#5418)
- chore(l10n): New Crowdin updates @hay-kot (#5424)
- chore(l10n): New Crowdin updates @hay-kot (#5428)
- chore(auto): Update pre-commit hooks @github-actions (#5438)
- chore(l10n): New Crowdin updates @hay-kot (#5446)
- chore(auto): Update pre-commit hooks @github-actions (#5457)
- chore(l10n): New Crowdin updates @hay-kot (#5458)
- chore(l10n): New Crowdin updates @hay-kot (#5471)
- chore(auto): Update pre-commit hooks @github-actions (#5474)
- chore(l10n): New Crowdin updates @hay-kot (#5485)
- chore(l10n): New Crowdin updates @hay-kot (#5491)
- chore: Relax Stalebot @michael-genson (#5498)
- chore(auto): Update pre-commit hooks @github-actions (#5497)
- chore(l10n): New Crowdin updates @hay-kot (#5500)
- chore(l10n): New Crowdin updates @hay-kot (#5501)
- chore(l10n): New Crowdin updates @hay-kot (#5507)
- chore(auto): Update pre-commit hooks @github-actions (#5515)
- chore(auto): Update pre-commit hooks @github-actions (#5564)
- chore(auto): Update pre-commit hooks @github-actions (#5605)
- chore: automatic crowdin sync via gh actions @hay-kot (#5630)
- chore: remove unused jinja export option @hay-kot (#5631)
- chore(l10n): New Crowdin updates @hay-kot (#5632)
- chore(l10n): New Crowdin updates @hay-kot (#5640)
- chore(l10n): New Crowdin updates @hay-kot (#5641)
- chore: automatic locale sync @github-actions (#5639)
- chore(l10n): New Crowdin updates @hay-kot (#5643)
- chore: automatic locale sync @github-actions (#5642)
- chore(auto): Update pre-commit hooks @github-actions (#5652)
- chore(l10n): New Crowdin updates @hay-kot (#5653)
- chore(l10n): New Crowdin updates @hay-kot (#5656)
- chore: Upgrade Pillow HEIF @michael-genson (#5657)
- chore: Fix Dockerfile \"AS\" Case @michael-genson (#5662)
- chore(l10n): New Crowdin updates @hay-kot (#5664)
- chore(l10n): New Crowdin updates @hay-kot (#5672)
</details>

## 📚 Documentation

- docs(auto): Update image tag, for release v2.8.0 @github-actions (#5236)
- docs: Add community docs for an iOS shortcut (attempt 2) @ant385525 (#5345)
- docs: document necessity of forwarded-allow-ips with OIDC behind reverse-proxy https @oddlama (#5461)
- docs: remove duplicate headline @Kuchenpirat (#5558)
- docs: typo in app_settings_constructor docstring @jknndy (#5592)

## 🔨 Internal development

- dev: add pull request image build workflow (only internal branches for now) @Kuchenpirat (#5235)

## ⬆️ Dependency updates

<details>
<summary>122 changes</summary>

- fix(deps): update dependency alembic to v1.15.1 @renovate (#5178)
- fix(deps): update dependency openai to v1.66.5 @renovate (#5197)
- fix(deps): update dependency sqlalchemy to v2.0.39 @renovate (#5204)
- fix(deps): update dependency pillow-heif to ^0.22.0 @renovate (#5219)
- chore(deps): update dependency coverage to v7.7.0 @renovate (#5227)
- chore(deps): update dependency pre-commit to v4.2.0 @renovate (#5238)
- fix(deps): update dependency openai to v1.67.0 @renovate (#5247)
- fix(deps): update dependency openai to v1.68.0 @renovate (#5254)
- chore(deps): update dependency ruff to v0.11.1 @renovate (#5253)
- fix(deps): update dependency openai to v1.68.2 @renovate (#5259)
- chore(deps): update dependency ruff to v0.11.2 @renovate (#5258)
- fix(deps): update dependency fastapi to v0.115.12 @renovate (#5268)
- chore(deps): update dependency pylint to v3.3.6 @renovate (#5251)
- chore(deps): update dependency coverage to v7.7.1 @renovate (#5260)
- fix(deps): update dependency orjson to v3.10.16 @renovate (#5270)
- chore(deps): update dependency pytest-asyncio to ^0.26.0 @renovate (#5274)
- fix(deps): update dependency python-dotenv to v1.1.0 @renovate (#5275)
- fix(deps): update dependency typing-extensions to v4.13.0 @renovate (#5278)
- fix(deps): update dependency sqlalchemy to v2.0.40 @renovate (#5283)
- fix(deps): update dependency openai to v1.69.0 @renovate (#5284)
- fix(deps): update dependency pydantic to v2.11.1 @renovate (#5285)
- fix(deps): update dependency alembic to v1.15.2 @renovate (#5289)
- chore(deps): update dependency mkdocs-material to v9.6.10 @renovate (#5293)
- chore(deps): update dependency rich to v14 @renovate (#5294)
- fix(deps): update dependency apprise to v1.9.3 @renovate (#5295)
- chore(deps): update dependency coverage to v7.8.0 @renovate (#5297)
- chore(deps): update dependency mkdocs-material to v9.6.11 @renovate (#5304)
- chore(deps): update dependency ruff to v0.11.3 @renovate (#5311)
- fix(deps): update dependency pydantic to v2.11.2 @renovate (#5312)
- fix(deps): update dependency openai to v1.70.0 @renovate (#5300)
- fix(deps): update dependency authlib to v1.5.2 @renovate (#5308)
- fix(deps): update dependency rapidfuzz to v3.13.0 @renovate (#5314)
- chore(deps): update dependency ruff to v0.11.4 @renovate (#5317)
- fix(deps): update dependency lxml to v5.3.2 @renovate (#5318)
- fix(deps): update dependency openai to v1.71.0 @renovate (#5322)
- fix(deps): update dependency openai to v1.72.0 @renovate (#5328)
- fix(deps): update dependency pydantic to v2.11.3 @renovate (#5325)
- fix(deps): update dependency openai to v1.73.0 @renovate (#5335)
- chore(deps): update dependency ruff to v0.11.5 @renovate (#5333)
- fix(deps): update dependency typing-extensions to v4.13.2 @renovate (#5313)
- fix(deps): update dependency pillow to v11.2.1 @renovate (#5337)
- fix(deps): update dependency openai to v1.74.0 @renovate (#5346)
- fix(deps): update dependency openai to v1.75.0 @renovate (#5357)
- chore(deps): update dependency mkdocs-material to v9.6.12 @renovate (#5359)
- chore(deps): update dependency ruff to v0.11.6 @renovate (#5361)
- fix(deps): update dependency beautifulsoup4 to v4.13.4 @renovate (#5352)
- fix(deps): update dependency aniso8601 to v10.0.1 @renovate (#5368)
- fix(deps): update dependency html2text to v2025 @renovate (#5347)
- fix(deps): update dependency openai to v1.76.0 @renovate (#5381)
- fix(deps): update dependency uvicorn to v0.34.2 @renovate (#5343)
- fix(deps): update dependency pydantic-settings to v2.9.1 @renovate (#5366)
- fix(deps): update dependency lxml to v5.4.0 @renovate (#5378)
- chore(deps): update dependency ruff to v0.11.7 @renovate (#5388)
- fix(deps): update dependency recipe-scrapers to v15.7.1 @renovate (#5412)
- fix(deps): update dependency openai to v1.77.0 @renovate (#5404)
- chore(deps): update dependency ruff to v0.11.8 @renovate (#5410)
- fix(deps): update dependency tzdata to v2025 @renovate (#5365)
- fix(deps): update dependency ingredient-parser-nlp to v2.1.0 @renovate (#5373)
- fix(deps): update dependency orjson to v3.10.18 @renovate (#5403)
- fix(deps): update dependency pydantic to v2.11.4 @renovate (#5405)
- chore(deps): update dependency pylint to v3.3.7 @renovate (#5416)
- fix(deps): update dependency openai to v1.78.0 @renovate (#5429)
- chore(deps): update dependency ruff to v0.11.9 @renovate (#5434)
- chore(deps): update dependency mkdocs-material to v9.6.13 @renovate (#5435)
- chore(deps): update dependency mkdocs-material to v9.6.14 @renovate (#5442)
- fix(deps): update dependency openai to v1.78.1 @renovate (#5441)
- fix(deps): update dependency openai to v1.79.0 @renovate (#5450)
- chore(deps): update dependency ruff to v0.11.10 @renovate (#5447)
- fix(deps): update dependency sqlalchemy to v2.0.41 @renovate (#5445)
- fix(deps): update dependency ingredient-parser-nlp to v2.1.1 @renovate (#5455)
- fix(deps): update dependency openai to v1.81.0 @renovate (#5463)
- chore(deps): update dependency coverage to v7.8.1 @renovate (#5462)
- fix(deps): update dependency alembic to v1.16.1 @renovate (#5464)
- chore(deps): update dependency ruff to v0.11.11 @renovate (#5466)
- fix(deps): update dependency openai to v1.82.0 @renovate (#5467)
- fix(deps): update dependency pydantic to v2.11.5 @renovate (#5468)
- fix(deps): update dependency authlib to v1.6.0 @renovate (#5469)
- chore(deps): update dependency coverage to v7.8.2 @renovate (#5470)
- chore(deps): update dependency freezegun to v1.5.2 @renovate (#5472)
- chore(deps): update dependency pytest-asyncio to v1 @renovate (#5473)
- chore(deps): update dependency ruff to v0.11.12 @renovate (#5486)
- chore(deps): update dependency mypy to v1.16.0 @renovate (#5487)
- fix(deps): update dependency openai to v1.82.1 @renovate (#5488)
- fix(deps): update dependency uvicorn to v0.34.3 @renovate (#5495)
- fix(deps): update dependency typing-extensions to v4.14.0 @renovate (#5499)
- chore(deps): update dependency pytest to v8.4.0 @renovate (#5502)
- fix(deps): update dependency openai to v1.83.0 @renovate (#5503)
- fix(deps): update dependency openai to v1.84.0 @renovate (#5505)
- fix(deps): update dependency recipe-scrapers to v15.8.0 @renovate (#5506)
- chore(deps): update dependency ruff to v0.11.13 @renovate (#5510)
- fix(deps): update dependency openai to v1.85.0 @renovate (#5518)
- fix(deps): update dependency openai to v1.86.0 @renovate (#5520)
- fix(deps): update dependency requests to v2.32.4 [security] @renovate (#5519)
- chore(deps): update dependency mypy to v1.16.1 @renovate (#5533)
- fix(deps): update dependency pydantic to v2.11.7 @renovate (#5527)
- fix(deps): update dependency fastapi to v0.115.13 @renovate (#5538)
- chore(deps): update dependency coverage to v7.9.1 @renovate (#5523)
- fix(deps): update dependency openai to v1.88.0 @renovate (#5536)
- fix(deps): update dependency alembic to v1.16.2 @renovate (#5535)
- fix(deps): update dependency openai to v1.90.0 @renovate (#5555)
- chore(deps): update dependency pytest to v8.4.1 @renovate (#5542)
- chore(deps): update dependency ruff to ^0.12.0 @michael-genson (#5568)
- fix(deps): update dependency openai to v1.91.0 @renovate (#5567)
- fix(deps): update dependency python-dotenv to v1.1.1 @renovate (#5571)
- chore(deps): update dependency ruff to v0.12.1 @renovate (#5587)
- fix(deps): update dependency openai to v1.92.2 @renovate (#5584)
- fix(deps): update dependency pydantic-settings to v2.10.1 @renovate (#5559)
- fix(deps): update dependency openai to v1.93.0 @renovate (#5591)
- fix(deps): update dependency pillow to v11.3.0 [security] @renovate (#5615)
- chore(deps): update dependency mkdocs-material to v9.6.15 @renovate (#5613)
- fix(deps): update dependency fastapi to v0.115.14 @renovate (#5581)
- fix(deps): update dependency lxml to v6 @renovate (#5585)
- fix(deps): update dependency tzdata to v2025 @renovate (#5534)
- fix(deps): update dependency uvicorn to ^0.35.0 @renovate (#5598)
- chore(deps): update dependency ruff to v0.12.2 @renovate (#5625)
- fix(deps): update dependency tzdata to v2025 @renovate (#5624)
- fix(deps): update dependency typing-extensions to v4.14.1 @renovate (#5629)
- fix(deps): update dependency openai to v1.93.1 @renovate (#5655)
- fix(deps): update dependency openai to v1.93.2 @renovate (#5660)
- fix(deps): update dependency openai to v1.93.3 @renovate (#5663)
- fix(deps): update dependency openai to v1.94.0 @renovate (#5667)
- chore(deps): update dependency ruff to v0.12.3 @renovate (#5673)
</details>

## 🙏 New Contributors

* @ant385525 made their first contribution in https://github.com/mealie-recipes/mealie/pull/5345
* @robertdanahome made their first contribution in https://github.com/mealie-recipes/mealie/pull/5342
* @oddlama made their first contribution in https://github.com/mealie-recipes/mealie/pull/5461
* @cdanis made their first contribution in https://github.com/mealie-recipes/mealie/pull/4943
* @SurfBurger made their first contribution in https://github.com/mealie-recipes/mealie/pull/5484
* @miawgogo made their first contribution in https://github.com/mealie-recipes/mealie/pull/5522
* @sravankaruturi made their first contribution in https://github.com/mealie-recipes/mealie/pull/5537
* @cm226 made their first contribution in https://github.com/mealie-recipes/mealie/pull/5512
* @mrth2 made their first contribution in https://github.com/mealie-recipes/mealie/pull/5184
* @jknndy made their first contribution in https://github.com/mealie-recipes/mealie/pull/5592
* @SkepticMystic made their first contribution in https://github.com/mealie-recipes/mealie/pull/5590

# 🍴🍴🍴🍴🍴🍴