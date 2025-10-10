# 🍴🍴🍴🍴🍴🍴

This release contains bug-fixes related to authentication and fixes a breaking change related to long passwords (>72 bytes). **No action is needed** for users with long passwords, though it may be worth [checking out the PR](https://github.com/mealie-recipes/mealie/pull/6335) for more information.

## ✨ New features

- feat: Added url to current version release @Choromanski (#6308)

## 🐛 Bug fixes

- fix: Re-write Nuxt auth backend and get rid of sidebase auth @michael-genson (#6322)
- fix: Remove unused next-auth dependency @p0lycarpio (#6328)
- fix: No Redirect On Valid Token @michael-genson (#6327)
- fix: Translate log-out string @michael-genson (#6332)
- fix: Truncate Long Passwords (>72 bytes) @michael-genson (#6335)

## 🧰 Maintenance

<details>
<summary>8 changes</summary>

- chore(l10n): Crowdin locale sync @github-actions (#6268)
- chore(l10n): New Crowdin updates @hay-kot (#6273)
- chore(l10n): New Crowdin updates @hay-kot (#6309)
- chore(l10n): New Crowdin updates @hay-kot (#6313)
- chore(l10n): New Crowdin updates @hay-kot (#6317)
- chore(l10n): Crowdin locale sync @github-actions (#6318)
- chore(auto): Update pre-commit hooks @github-actions (#6324)
- chore(l10n): New Crowdin updates @hay-kot (#6320)
</details>

## 📚 Documentation

- docs(auto): Update image tag, for release v3.3.1 @github-actions (#6300)

## ⬆️ Dependency updates

<details>
<summary>7 changes</summary>

- chore(deps): update node.js to 2bb201f @renovate (#6295)
- chore(deps): update dependency openai to v2.0.1 @renovate (#6296)
- chore(deps): update dependency authlib to v1.6.5 @renovate (#6299)
- chore(deps): update dependency ruff to v0.13.3 @renovate (#6301)
- chore(deps): update dependency openai to v2.1.0 @renovate (#6302)
- chore(deps): update dependency pylint to v3.3.9 @renovate (#6321)
- chore(deps): update dependency ruff to ^0.14.0 @renovate (#6334)
</details>