# 2.17.1

### Breaking Changes

- Fix: restore expected pre-2.16 scheduled workflow offset behavior @shamoon ([#10218](https://github.com/paperless-ngx/paperless-ngx/pull/10218))

> [!WARNING]
> In versions v2.16.0–v2.16.3, the interpretation of offset days for scheduled workflows was inverted. This has now been **corrected** to restore the intuitive, pre-v2.16 behavior:
>
> - **Positive offsets now trigger workflows *after* the date**
> - **Negative offsets trigger workflows *before* the date**
>
> If you configured scheduled workflows in v2.16.x with inverted offsets (or adjusted a trigger created in 2.15.x), you must now **adjust the offset sign** to match this corrected logic.
>
> If you did not alter your workflow triggers after upgrading from v2.15, no changes are required.
>
> We apologize for the confusion — this fix restores consistency and better matches user expectations.

### Features / Enhancements

- QoL: log version at startup, show backend vs frontend mismatch in system status @shamoon ([#10214](https://github.com/paperless-ngx/paperless-ngx/pull/10214))
- Feature: add Persian translation @shamoon ([#10183](https://github.com/paperless-ngx/paperless-ngx/pull/10183))
- Enhancement: support import of zipped export @kaerbr ([#10073](https://github.com/paperless-ngx/paperless-ngx/pull/10073))

### Bug Fixes

- Fix: more api fixes @shamoon ([#10204](https://github.com/paperless-ngx/paperless-ngx/pull/10204))
- Fix: restore expected pre-2.16 scheduled workflow offset behavior @shamoon ([#10218](https://github.com/paperless-ngx/paperless-ngx/pull/10218))
- Fix: fix some API crashes @shamoon ([#10196](https://github.com/paperless-ngx/paperless-ngx/pull/10196))
- Fix: remove duplicate base path in websocket urls @robertmx ([#10194](https://github.com/paperless-ngx/paperless-ngx/pull/10194))
- Fix: use hard delete for custom fields with workflow removal @shamoon ([#10191](https://github.com/paperless-ngx/paperless-ngx/pull/10191))
- Fix: fix mail account test api schema @shamoon ([#10164](https://github.com/paperless-ngx/paperless-ngx/pull/10164))
- Fix: correct api schema for mail\\_account process @shamoon ([#10157](https://github.com/paperless-ngx/paperless-ngx/pull/10157))
- Fix: correct api schema for next\\_asn @shamoon ([#10151](https://github.com/paperless-ngx/paperless-ngx/pull/10151))
- Fix: fix email and notes endpoints api spec @shamoon ([#10148](https://github.com/paperless-ngx/paperless-ngx/pull/10148))

### Dependencies

- Chore: bump angular/common to 19.12.14 @shamoon ([#10212](https://github.com/paperless-ngx/paperless-ngx/pull/10212))

### All App Changes

<details>
<summary>14 changes</summary>

- QoL: log version at startup, show backend vs frontend mismatch in system status @shamoon ([#10214](https://github.com/paperless-ngx/paperless-ngx/pull/10214))
- Fix: more api fixes @shamoon ([#10204](https://github.com/paperless-ngx/paperless-ngx/pull/10204))
- Fix: restore expected pre-2.16 scheduled workflow offset behavior @shamoon ([#10218](https://github.com/paperless-ngx/paperless-ngx/pull/10218))
- Chore: switch from os.path to pathlib.Path @gothicVI ([#9933](https://github.com/paperless-ngx/paperless-ngx/pull/9933))
- Chore: bump angular/common to 19.12.14 @shamoon ([#10212](https://github.com/paperless-ngx/paperless-ngx/pull/10212))
- Fix: fix some API crashes @shamoon ([#10196](https://github.com/paperless-ngx/paperless-ngx/pull/10196))
- Fix: remove duplicate base path in websocket urls @robertmx ([#10194](https://github.com/paperless-ngx/paperless-ngx/pull/10194))
- Fix: use hard delete for custom fields with workflow removal @shamoon ([#10191](https://github.com/paperless-ngx/paperless-ngx/pull/10191))
- Feature: add Persian translation @shamoon ([#10183](https://github.com/paperless-ngx/paperless-ngx/pull/10183))
- Enhancement: support import of zipped export @kaerbr ([#10073](https://github.com/paperless-ngx/paperless-ngx/pull/10073))
- Fix: fix mail account test api schema @shamoon ([#10164](https://github.com/paperless-ngx/paperless-ngx/pull/10164))
- Fix: correct api schema for mail\\_account process @shamoon ([#10157](https://github.com/paperless-ngx/paperless-ngx/pull/10157))
- Fix: correct api schema for next\\_asn @shamoon ([#10151](https://github.com/paperless-ngx/paperless-ngx/pull/10151))
- Fix: fix email and notes endpoints api spec @shamoon ([#10148](https://github.com/paperless-ngx/paperless-ngx/pull/10148))
</details>
