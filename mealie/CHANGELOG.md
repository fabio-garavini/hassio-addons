# 🍴🍴🍴🍴🍴🍴

Welcome to the latest release of Mealie! We have tons of new features packed into this one, as well as a large collection of bug fixes. Check them out below 👇 

### 🚨 BREAKING CHANGE

Mealie now checks where its own outgoing requests are going. Anything the server fetches on your behalf, such as importing a recipe from a URL, downloading a recipe image, sending a webhook, or running a recipe action, is only allowed to reach addresses on the public internet.

Webhooks and recipe actions were not checked before, and the checks on recipe imports were narrower than they are now. If any of these pointed at something on your own network, they will stop working after this update.

If you need a target on your own network to keep working, allow it explicitly with `HTTP_ALLOW_LIST`, which accepts hostnames or CIDRs. To keep a Tailscale host reachable, for example:
```
HTTP_ALLOW_LIST=100.64.0.0/10
```

For more information, [check out the docs](https://docs.mealie.io/documentation/getting-started/installation/backend-config/#security) and the in-app announcement.

## 🎉 Highlights

You can now add substitutions to your ingredients. We support two kinds of substitutions:
#### Recipe-specific substitutions:
<img width="486" height="182" alt="image" src="https://github.com/user-attachments/assets/dd005f62-3dc3-42c3-87ba-0250e6ca39cd" />
<img width="971" height="246" alt="image" src="https://github.com/user-attachments/assets/0fdefb2b-a91e-42c0-a293-742518446a96" />


#### Common substitutions (not tied to specific recipe, edited on the data management page):
<img width="449" height="148" alt="image" src="https://github.com/user-attachments/assets/0da29c8e-7808-443f-b27e-a6e4cd1fb951" />
<img width="545" height="385" alt="image" src="https://github.com/user-attachments/assets/59b66069-e361-404d-ae44-0f63b94a1b99" />

Substitutions are (optionally) considered in the recipe finder, too!
<img width="438" height="335" alt="image" src="https://github.com/user-attachments/assets/470557f0-5dd8-4546-a624-c8f63204de2b" />

---

You can now link recipe notes to individual steps:
<img width="990" height="229" alt="image" src="https://github.com/user-attachments/assets/b26e51ad-b696-4a2e-94d6-b66b8d31952c" />
<img width="1389" height="587" alt="image" src="https://github.com/user-attachments/assets/2dc5087f-8890-4109-bcd8-661cda888ff8" />


## 🚨 Breaking changes

- fix: harden server-initiated HTTP against SSRF and DNS rebinding @hay-kot (#7914)

## ✨ New features

- feat: use OIDC avatars @doenke (#7624)
- feat: Bottom sheets @miah120 (#7939)
- feat: ingredient substitutions @michael-genson (#8265)
- feat: adjust ingredient spacing @michael-genson (#8318)
- feat: pluralize substitutions if main ingredient is pluralized @michael-genson (#8317)
- feat: filter meal plan rules by food label @Xyolyp (#8126)
- feat: add recipe note linking to recipe instructions @jallier (#7591)
- feat: Show calendar hint when adding to meal plan @miah120 (#8274)

## 🐛 Bug fixes

- fix: shopping list entry fixes @michael-genson (#8280)
- fix: QueryFilter improvements @p0lycarpio (#8281)
- fix: cascade group deletion to households and recipes @derekdiliu (#8283)
- fix: correct MultiPurposeLabel.foods/shopping_list_items relationship cardinality @bferd (#8226)
- fix: update bulk add dialog translations on locale change @feilongcheng (#8097)
- fix: prevent OpenAI ingredient parser from splitting plus quantities @roastedTomato (#8138)
- fix: harden server-initiated HTTP against SSRF and DNS rebinding @hay-kot (#7914)
- fix: harden public filtering @michael-genson (#8286)
- fix: show progress on ingredient parser review buttons @Xyolyp (#8172)
- fix: import Recipe Keeper categories and yields @henry1113nz (#8299)
- fix: Allow submenus to be accessed via keyboard and mobile @miah120 (#8300)
- fix: coerce null food/unit description to empty string @chiliec (#8309)
- fix: filter related fields with EXISTS instead of joins @derekdiliu (#8297)
- fix: substitution recipe ref handling @michael-genson (#8311)
- fix: inconsistent token usage @michael-genson (#8314)
- fix: fix missing images / keep recipes.image in sync with the images on disk @ImanuelBertrand (#8276)
- fix: ignore blank Paprika ingredient lines @justadityaraj (#8213)
- fix: ingredient note spacing with swap icon @michael-genson (#8315)
- fix: pin pnpm version for corepack @roastedTomato (#8322)
- fix: prevent random sort click-through @YibingZhang325 (#8325)
- fix: update recipe creation page translations on locale change @feilongcheng (#8273)
- fix: wrap long URLs in recipe card descriptions @feilongcheng (#8330)
- fix: auto_init merges model_config.exclude with default {"id"} instead of replacing it @blue-mtn-dog (#8336)
- fix: fix notifier UI form reactivity @michael-genson (#8341)
- fix: preserve recipe ingredient navigation state @roastedTomato (#8323)
- fix: apply a submitted API key when updating an AI provider @adman234 (#8344)
- fix: remove stacked variant on number inputs @p0lycarpio (#8359)
- fix: prevent creating shopping lists with empty names and disable submit button @Luna-81 (#8363)
- fix: aggregate to-many orderings instead of joining @derekdiliu (#8332)
- fix: don't default to the English-only parser in other languages @Xyolyp (#8173)
- fix: return a 422 instead of a 500 when a recipe PUT omits the name @henry1113nz (#8298)
- fix: rescue markdown-fenced responses when a provider ignores strict schema output @lcs-crr (#8133)
- fix: Show permission error ,when food creation fails @Luna-81 (#8370)
- fix: webhooks dont fire around midnight @michael-genson (#8379)
- fix: Add permission checks for Group & Household members, hide totalUsers card for non-managers @Luna-81 (#8348)

## 🧰 Maintenance

<details>
<summary>14 changes</summary>

- chore(l10n): New Crowdin updates @hay-kot (#8287)
- chore(l10n): New Crowdin updates @hay-kot (#8304)
- chore(l10n): Crowdin locale sync @[mealie-actions[bot]](https://github.com/apps/mealie-actions) (#8305)
- chore(l10n): New Crowdin updates @hay-kot (#8307)
- chore(l10n): New Crowdin updates @hay-kot (#8316)
- chore(l10n): New Crowdin updates @hay-kot (#8328)
- chore(l10n): New Crowdin updates @hay-kot (#8335)
- chore(l10n): New Crowdin updates @hay-kot (#8340)
- chore(l10n): New Crowdin updates @hay-kot (#8347)
- chore(l10n): New Crowdin updates @hay-kot (#8371)
- chore(l10n): New Crowdin updates @hay-kot (#8374)
- chore(l10n): Crowdin locale sync @[mealie-actions[bot]](https://github.com/apps/mealie-actions) (#8380)
- chore(l10n): New Crowdin updates @hay-kot (#8381)
- chore(l10n): New Crowdin updates @hay-kot (#8386)
</details>

## 📚 Documentation

- docs: clarify secondary theme color usage @nzyz995 (#8310)

## 🔨 Internal development

- dev: add docker-in-docker to dev container @michael-genson (#8303)
- dev: publish more logs for OIDC E2E error @michael-genson (#8313)

## ⬆️ Dependency updates

<details>
<summary>14 changes</summary>

- fix(deps): update dependency authlib to v1.8.0 @[renovate[bot]](https://github.com/apps/renovate) (#8284)
- fix(deps): update dependency rapidfuzz to v3.14.6 @[renovate[bot]](https://github.com/apps/renovate) (#8288)
- fix(deps): update dependency apprise to v1.13.1 @[renovate[bot]](https://github.com/apps/renovate) (#8291)
- fix(deps): update dependency pillow-heif to v1.6.0 @[renovate[bot]](https://github.com/apps/renovate) (#8301)
- fix(deps): update dependency openai to v3.7.0 @[renovate[bot]](https://github.com/apps/renovate) (#8320)
- fix(deps): update dependency lxml to v6.1.3 @[renovate[bot]](https://github.com/apps/renovate) (#8333)
- chore(deps): update dependency ruff to v0.16.6 @[renovate[bot]](https://github.com/apps/renovate) (#8342)
- fix(deps): update dependency openai to v3.8.0 @[renovate[bot]](https://github.com/apps/renovate) (#8345)
- fix(deps): update dependency alembic to v1.19.2 @[renovate[bot]](https://github.com/apps/renovate) (#8351)
- chore(deps): update dependency types-requests to v2.33.0.20260906 @[renovate[bot]](https://github.com/apps/renovate) (#8365)
- fix(deps): update dependency pillow-heif to v1.7.0 @[renovate[bot]](https://github.com/apps/renovate) (#8366)
- fix(deps): update dependency openai to v3.9.0 @[renovate[bot]](https://github.com/apps/renovate) (#8390)
- fix(deps): update dependency python-slugify to v9 @[renovate[bot]](https://github.com/apps/renovate) (#8391)
- fix(deps): update dependency openai to v3.10.0 @[renovate[bot]](https://github.com/apps/renovate) (#8394)
</details>

## 🙏 New Contributors
* @doenke made their first contribution in https://github.com/mealie-recipes/mealie/pull/7624
* @roastedTomato made their first contribution in https://github.com/mealie-recipes/mealie/pull/8138
* @Xyolyp made their first contribution in https://github.com/mealie-recipes/mealie/pull/8172
* @svathsa21 made their first contribution in https://github.com/mealie-recipes/mealie/pull/8296
* @blue-mtn-dog made their first contribution in https://github.com/mealie-recipes/mealie/pull/8336
* @adman234 made their first contribution in https://github.com/mealie-recipes/mealie/pull/8344
* @jallier made their first contribution in https://github.com/mealie-recipes/mealie/pull/7591

# 🍴🍴🍴🍴🍴🍴
