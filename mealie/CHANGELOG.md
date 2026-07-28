# 🍴🍴🍴🍴🍴🍴

The previous version of Mealie ([v3.21.0](https://github.com/mealie-recipes/mealie/releases/tag/v3.21.0)) introduced a ⚠️BREAKING CHANGE⚠️ for instances using OIDC: Mealie now requires your OIDC provider to confirm the user's email address before allowing the login. This prevents an unverified, self-asserted email address from being used to match (and sign in) to an existing Mealie account.

If an identity provider does not emit the `email_verified` claim, logins now fail. If you cannot configure your identity provider to include the `email_verified` claim, you can set `OIDC_REQUIRES_EMAIL_VERIFICATION` to `false` (this is not recommended per the above security concerns). [See the docs](https://docs.mealie.io/documentation/getting-started/authentication/oidc-v2/#email-verification) for more details.

## 🎉 Highlights

New to this release, many improvements have been made to make importing recipes more reliable. Mealie does a better job of looking like a real browser, rotates between several browser signatures, and retries more intelligently when a site pushes back. This works out of the box, with no configuration.

For sites sitting behind extra bot protection (such as Cloudflare) server admins have two additional controls:
- Proxy support, which routes recipe and image requests through a proxy. This helps with sites that block your server's IP address.
- FlareSolverr support, which hands the page to a real headless browser as a last resort. This helps with challenges that Mealie can't get past on its own.

Both require additional configuration to work. Mealie does not ship or manage either one. You supply the proxy, and host FlareSolverr yourself (it runs nicely as a sidecar container). See the [configuration docs](https://docs.mealie.io/documentation/getting-started/installation/backend-config/#recipe-scraper) for the settings, setup details, and an example compose file.

## ✨ New features

- feat: Improve scraper resiliency and add both proxy and FlareSolverr support @michael-genson (#7953)
- feat: Add feedback for bad JSON in HTML-JSON page @michael-genson (#7956)
- feat: Announce OIDC email change and announce new scraper capabilities @michael-genson (#7963)

## 🐛 Bug fixes

- fix: Clear InputLabelType item-id as null instead of empty string @lehnerpat (#7950)

## 🧰 Maintenance

<details>
<summary>5 changes</summary>

- chore(l10n): New Crowdin updates @hay-kot (#7943)
- chore(l10n): New Crowdin updates @hay-kot (#7945)
- chore(l10n): Crowdin locale sync @[mealie-actions[bot]](https://github.com/apps/mealie-actions) (#7948)
- chore(l10n): New Crowdin updates @hay-kot (#7952)
- chore(l10n): New Crowdin updates @hay-kot (#7960)
</details>

## 🔨 Internal development

- dev: Update front end unit test dependencies @miah120 (#7949)

## ⬆️ Dependency updates

<details>
<summary>5 changes</summary>

- chore(deps): update dependency js-yaml to v5.2.2 [security] @[renovate[bot]](https://github.com/apps/renovate) (#7951)
- chore(deps): update dependency pre-commit to v4.6.1 @[renovate[bot]](https://github.com/apps/renovate) (#7955)
- chore(deps): lock file maintenance @[renovate[bot]](https://github.com/apps/renovate) (#7958)
- fix(deps): update dependency pillow-heif to v1.5.0 @[renovate[bot]](https://github.com/apps/renovate) (#7959)
- fix(deps): update dependency openai to v2.47.0 @[renovate[bot]](https://github.com/apps/renovate) (#7962)
</details>

# 🍴🍴🍴🍴🍴🍴