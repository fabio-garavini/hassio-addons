## paperless-ngx 3.5.1

### Add-on upgrade notes

- Paperless applies the 3.5.0 database migrations automatically during startup; no add-on-specific data migration is required.
- Use the new `PAPERLESS_ALLOWED_HOSTS` list for additional access hostnames or IP addresses. The app hostname and the hostname from `PAPERLESS_URL` are allowed automatically.
- Existing AI indexes do not require migration or re-embedding. Optionally run `document_llmindex compact` to apply the new on-disk layout.

### Changes

- Tweak: adjust chat timing for streaming @shamoon ([#14805](https://github.com/paperless-ngx/paperless-ngx/pull/14805))

### Bug Fixes

- Fix: dont use set\_actor if audit log disabled in tasks @shamoon ([#14808](https://github.com/paperless-ngx/paperless-ngx/pull/14808))
- Fix: stream AI chat answers under ASGI @stumpylog ([#14803](https://github.com/paperless-ngx/paperless-ngx/pull/14803))
- Tweak/fix: retain bulk edit selection after queuing operation @shamoon ([#14797](https://github.com/paperless-ngx/paperless-ngx/pull/14797))

### All App Changes

<details>
<summary>4 changes</summary>

- Fix: dont use set\_actor if audit log disabled in tasks @shamoon ([#14808](https://github.com/paperless-ngx/paperless-ngx/pull/14808))
- Tweak: adjust chat timing for streaming @shamoon ([#14805](https://github.com/paperless-ngx/paperless-ngx/pull/14805))
- Fix: stream AI chat answers under ASGI @stumpylog ([#14803](https://github.com/paperless-ngx/paperless-ngx/pull/14803))
- Tweak/fix: retain bulk edit selection after queuing operation @shamoon ([#14797](https://github.com/paperless-ngx/paperless-ngx/pull/14797))
</details>

## paperless-ngx 3.5.0

> [!NOTE]
> Note that some users may need to adjust their [`PAPERLESS_ALLOWED_HOSTS` setting](https://docs.paperless-ngx.com/configuration/#PAPERLESS_ALLOWED_HOSTS) with this release

### Features / Enhancements

- Chorehancement: move all bulk operations to async hand-off @shamoon ([#14773](https://github.com/paperless-ngx/paperless-ngx/pull/14773))
- Enhancement: render document notes as markdown @zwif ([#14626](https://github.com/paperless-ngx/paperless-ngx/pull/14626))
- Feature: manual workflow trigger @shamoon ([#14704](https://github.com/paperless-ngx/paperless-ngx/pull/14704))
- Enhancement: make bulk metadata operations run async @shamoon ([#14711](https://github.com/paperless-ngx/paperless-ngx/pull/14711))
- Fixhancement: add automatic clearing of sessions @shamoon ([#14722](https://github.com/paperless-ngx/paperless-ngx/pull/14722))
- Tweak: chat reference tweaks @shamoon ([#14723](https://github.com/paperless-ngx/paperless-ngx/pull/14723))
- Fixhancement: rework saved view widget queue processing to expected @shamoon ([#14699](https://github.com/paperless-ngx/paperless-ngx/pull/14699))

### Bug Fixes

- Fix: use a constant password mask and consolidate the no-change check @stumpylog ([#14784](https://github.com/paperless-ngx/paperless-ngx/pull/14784))
- Fix: use a PostgreSQL-compatible regex for scheduled workflow filename filters @stumpylog ([#14783](https://github.com/paperless-ngx/paperless-ngx/pull/14783))
- Fix: get users for saved view create dialog @shamoon ([#14769](https://github.com/paperless-ngx/paperless-ngx/pull/14769))
- Fix: Allow AI chat filters over more than 32700 documents @stumpylog ([#14754](https://github.com/paperless-ngx/paperless-ngx/pull/14754))
- Fix: Enforce CRLF when writing an email message to the file @stumpylog ([#14745](https://github.com/paperless-ngx/paperless-ngx/pull/14745))
- Fix: restore image without archive version thumbnail generation @shamoon ([#14741](https://github.com/paperless-ngx/paperless-ngx/pull/14741))
- Fix: Blacklist certain OCR user arguments that paperless itself uses @stumpylog ([#14734](https://github.com/paperless-ngx/paperless-ngx/pull/14734))
- Fix: remove redundant ui task text filters @shamoon ([#14736](https://github.com/paperless-ngx/paperless-ngx/pull/14736))
- Fix: fix allowed\_hosts default @shamoon ([#14735](https://github.com/paperless-ngx/paperless-ngx/pull/14735))
- Fixhancement: add automatic clearing of sessions @shamoon ([#14722](https://github.com/paperless-ngx/paperless-ngx/pull/14722))
- Fix: two dropdown-related UI fixes @shamoon ([#14717](https://github.com/paperless-ngx/paperless-ngx/pull/14717))
- Fix: use filtered documents for statistics ASN max @shamoon ([#14710](https://github.com/paperless-ngx/paperless-ngx/pull/14710))
- Fix: make config view permissions consistent @shamoon ([#14709](https://github.com/paperless-ngx/paperless-ngx/pull/14709))
- Fix: release the LLM index read lock before streaming the chat answer @stumpylog ([#14674](https://github.com/paperless-ngx/paperless-ngx/pull/14674))
- Fix: retrieve once per document chat question @stumpylog ([#14673](https://github.com/paperless-ngx/paperless-ngx/pull/14673))
- Fixhancement: rework saved view widget queue processing to expected @shamoon ([#14699](https://github.com/paperless-ngx/paperless-ngx/pull/14699))
- Fix: apply PDF/A conversion once for mail archives @shamoon ([#14698](https://github.com/paperless-ngx/paperless-ngx/pull/14698))
- Fix default MFA trusted AMR setting @shamoon ([#14693](https://github.com/paperless-ngx/paperless-ngx/pull/14693))
- Fix: check descendant tag permissions on delete @shamoon ([#14687](https://github.com/paperless-ngx/paperless-ngx/pull/14687))
- Fix: lock rows for first-user signup @shamoon ([#14688](https://github.com/paperless-ngx/paperless-ngx/pull/14688))
- Fix: prevent ID badge wrapping under title on mobile @shamoon ([#14682](https://github.com/paperless-ngx/paperless-ngx/pull/14682))

### Maintenance

- Chore(deps): Bump the actions group across 1 directory with 17 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#14691](https://github.com/paperless-ngx/paperless-ngx/pull/14691))

### Dependencies

<details>
<summary>4 changes</summary>

- Chore(deps): Bump the pre-commit-dependencies group with 4 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#14636](https://github.com/paperless-ngx/paperless-ngx/pull/14636))
- Chore(deps): Bump the actions group across 1 directory with 17 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#14691](https://github.com/paperless-ngx/paperless-ngx/pull/14691))
- docker(deps): bump astral-sh/uv from 0.13.5-python3.14-trixie-slim to 0.13.7-python3.14-trixie-slim @[dependabot[bot]](https://github.com/apps/dependabot) ([#14635](https://github.com/paperless-ngx/paperless-ngx/pull/14635))
- chore(deps): bump django-allauth to 65.21.1 @stumpylog ([#14672](https://github.com/paperless-ngx/paperless-ngx/pull/14672))
</details>

### All App Changes

<details>
<summary>32 changes</summary>

- Chorehancement: move all bulk operations to async hand-off @shamoon ([#14773](https://github.com/paperless-ngx/paperless-ngx/pull/14773))
- Fix: use a constant password mask and consolidate the no-change check @stumpylog ([#14784](https://github.com/paperless-ngx/paperless-ngx/pull/14784))
- Fix: use a PostgreSQL-compatible regex for scheduled workflow filename filters @stumpylog ([#14783](https://github.com/paperless-ngx/paperless-ngx/pull/14783))
- Fix: get users for saved view create dialog @shamoon ([#14769](https://github.com/paperless-ngx/paperless-ngx/pull/14769))
- Enhancement: render document notes as markdown @zwif ([#14626](https://github.com/paperless-ngx/paperless-ngx/pull/14626))
- Feature: manual workflow trigger @shamoon ([#14704](https://github.com/paperless-ngx/paperless-ngx/pull/14704))
- Fix: Allow AI chat filters over more than 32700 documents @stumpylog ([#14754](https://github.com/paperless-ngx/paperless-ngx/pull/14754))
- Fix: Enforce CRLF when writing an email message to the file @stumpylog ([#14745](https://github.com/paperless-ngx/paperless-ngx/pull/14745))
- Enhancement: make bulk metadata operations run async @shamoon ([#14711](https://github.com/paperless-ngx/paperless-ngx/pull/14711))
- Performance: load a cached Hugging Face embedding model without contacting the Hub @stumpylog ([#14728](https://github.com/paperless-ngx/paperless-ngx/pull/14728))
- Fix: restore image without archive version thumbnail generation @shamoon ([#14741](https://github.com/paperless-ngx/paperless-ngx/pull/14741))
- Fix: Blacklist certain OCR user arguments that paperless itself uses @stumpylog ([#14734](https://github.com/paperless-ngx/paperless-ngx/pull/14734))
- Fix: remove redundant ui task text filters @shamoon ([#14736](https://github.com/paperless-ngx/paperless-ngx/pull/14736))
- Fix: fix allowed\_hosts default @shamoon ([#14735](https://github.com/paperless-ngx/paperless-ngx/pull/14735))
- Fixhancement: add automatic clearing of sessions @shamoon ([#14722](https://github.com/paperless-ngx/paperless-ngx/pull/14722))
- Tweak: chat reference tweaks @shamoon ([#14723](https://github.com/paperless-ngx/paperless-ngx/pull/14723))
- Fix: two dropdown-related UI fixes @shamoon ([#14717](https://github.com/paperless-ngx/paperless-ngx/pull/14717))
- Fix: use filtered documents for statistics ASN max @shamoon ([#14710](https://github.com/paperless-ngx/paperless-ngx/pull/14710))
- Fix: make config view permissions consistent @shamoon ([#14709](https://github.com/paperless-ngx/paperless-ngx/pull/14709))
- Performance: stop embedding every document ID in selection\_data queries @stumpylog ([#14597](https://github.com/paperless-ngx/paperless-ngx/pull/14597))
- Performance: replace django-treenode with adjacency-list tags @shamoon ([#14612](https://github.com/paperless-ngx/paperless-ngx/pull/14612))
- Performance: use small vec0 chunks and larger pages for the LLM index @stumpylog ([#14678](https://github.com/paperless-ngx/paperless-ngx/pull/14678))
- Fix: release the LLM index read lock before streaming the chat answer @stumpylog ([#14674](https://github.com/paperless-ngx/paperless-ngx/pull/14674))
- Fix: retrieve once per document chat question @stumpylog ([#14673](https://github.com/paperless-ngx/paperless-ngx/pull/14673))
- Fixhancement: rework saved view widget queue processing to expected @shamoon ([#14699](https://github.com/paperless-ngx/paperless-ngx/pull/14699))
- Fix: apply PDF/A conversion once for mail archives @shamoon ([#14698](https://github.com/paperless-ngx/paperless-ngx/pull/14698))
- Fix default MFA trusted AMR setting @shamoon ([#14693](https://github.com/paperless-ngx/paperless-ngx/pull/14693))
- Fix: check descendant tag permissions on delete @shamoon ([#14687](https://github.com/paperless-ngx/paperless-ngx/pull/14687))
- Fix: lock rows for first-user signup @shamoon ([#14688](https://github.com/paperless-ngx/paperless-ngx/pull/14688))
- Fix: prevent ID badge wrapping under title on mobile @shamoon ([#14682](https://github.com/paperless-ngx/paperless-ngx/pull/14682))
- chore(deps): bump django-allauth to 65.21.1 @stumpylog ([#14672](https://github.com/paperless-ngx/paperless-ngx/pull/14672))
- chore(deps): bump dev tooling @stumpylog ([#14671](https://github.com/paperless-ngx/paperless-ngx/pull/14671))
</details>
