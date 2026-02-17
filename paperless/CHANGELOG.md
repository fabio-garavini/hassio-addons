> [!NOTE]
> This release addresses a security issue (GHSA-x395-6h48-wr8v) and is recommended for all users. Our sincere thank you to the community members who reported this.

## paperless-ngx 2.20.7

### Breaking
- Filename template rendering now uses a restricted safe document context for storage paths. Templates relying on unexpected/undocumented document model properties may no longer render and will fall back to default filename formatting.

### Bug Fixes

- Fix: correct user dropdown button icon styling @shamoon ([#12092](https://github.com/paperless-ngx/paperless-ngx/issues/12092))
- Fix: fix broken docker create_classifier command in 2.20.6 @shamoon ([#11965](https://github.com/paperless-ngx/paperless-ngx/issues/11965))
- Performance fix: use subqueries to improve object retrieval in large installs @shamoon ([#11950](https://github.com/paperless-ngx/paperless-ngx/pull/11950))

### All App Changes

<details>
<summary>3 changes</summary>

- Fix: correct user dropdown button icon styling @shamoon ([#12092](https://github.com/paperless-ngx/paperless-ngx/issues/12092))
- Fix: fix broken docker create_classifier command in 2.20.6 @shamoon ([#11965](https://github.com/paperless-ngx/paperless-ngx/issues/11965))
- Performance fix: use subqueries to improve object retrieval in large installs @shamoon ([#11950](https://github.com/paperless-ngx/paperless-ngx/pull/11950))
</details>
