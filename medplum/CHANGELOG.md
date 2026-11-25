## Notes for self-hosters

**Action required**
- **External auth (#11429):** ClientApplication identity providers must use the per-client callback `/auth/external/<clientId>`. The shared
`/auth/external` callback returns 400 for them unless a super admin sets the `legacyExternalAuth` system setting on the Project. To migrate, register the new URI at your identity provider and pass it as `redirectUri`.
- **Open patient registration (#11363):** Self-registration now requires `Project.setting` `openPatientRegistration = true` in addition to a Patient access policy. `defaultPatientAccessPolicy` is deprecated in favor of `defaultAccessPolicies`.
- **Bots (#11416):** Bots must have `runAsUser: true` or a ProjectMembership. Unique lookups for bots, agents, devices, and custom operations return 412 when more than one resource matches. Before upgrading, check your logs for `Bot executed without ProjectMembership` and `Search matched multiple resources`.
- **Login redirect URIs (#11420):** A `redirectUri` sent on login must match one of the client's registered redirect URIs.
- **Rate limits (#11369):** The default `auth` rate limit is now 600 per minute (was 1200).
- **Authenticator (TOTP) codes (#11500):** Each code is accepted only once, and verification requires the rate-limit Redis.

**Configuration**
- New: `loginRateLimitExemptIps` (#11467).
- Deprecated and ignored: `asyncDelayScaling`. Use `workers.bullmq.<worker>.globalConcurrency` instead (#11441).
- CDK: new `loadBalancerSslPolicy` setting (#11384). ECS deployment circuit breaker enabled (#11389).
- Redis 7 or newer, or any Valkey version, is required (#11451).

**Access control changes**
- Wildcard `*?...` access policy criteria now apply to individual resources (#11406).
- SMART permission letters map exactly to FHIR interactions (#11318).
- Default access policy updates (#11353, #11474).
- Only super admins can set `Bot.system` (#11396).
- Subscription notifications omit `Binary.data` (#11418).

## What's Changed

* fix(email): fetch URL attachments via safeFetch (#11385)
* feat(cdk): add loadBalancerSslPolicy config for ALB HTTPS listeners (#11384)
* fix(server): apply access policy hidden fields and SMART scopes to /auth/me profile (#11392)
* fix(cdk): resolve synth warnings (#11389)
* decrease "auth" default rate limit to 600/5 min (#11369)
* Add a Membership tab to profile resources  (#11360)
* deprecate defaultPatientAccessPolicy for defaultAccessPolicies, and add open patient enrollment setting (#11363)
* chore(server): log bots that run as a caller with SMART scopes (#11177)
* feat(server): assign Task owner and performerType from PlanDefinition (#11376)
* feat(server): support resending subscriptions for a specific resource version (#11395)
* (Docs) Migration: Add logical reference approach + presigned URL guidance (#11401)
* [React] AsyncAutocomplete and its wrappers take an aria-label (#11267)
* Match IP access rule prefixes at octet boundaries (#11372)
* fix(server): omit Authorization from bot event.headers (#11390)
* [Scheduling] Set "system" as author on patient self-serve slots (#11149)
* docs(access): admin flag no longer swaps the default access policy (#11409)
* (Docs) Add Advanced Questionnaire and Persistence Guides (#11352)
* Streamline subscription worker logging (#11366)
* Default Access Policy: Remove %compartment, and add Bot and ClientApplication read-only to Practitioner (#11353)
* fix(server): tighten MCP fhir-request path and SSE session handling (#11410)
* [Scheduling] Hide deceased patients from the patient picker, and mark them on appointments (#11400)
* chore(server): log subscription notifications that include Binary.data (#11302)
* (Docs) Add Guide for Deploying Application Config Across Environments (#11355)
* Render Mantine tests through `test-utils/render` with `env="test"` (#11261)
* fix(core): parse HL7 DTM offsets and fractional seconds correctly (#11408)
* fix(server): quote  header row cells (#11415)
* fix(server): reject external auth callbacks with mismatched iss (#11414)
* fix(core): apply wildcard access policy criteria to single resources (#11406)
*  fix(server): limit incorrect SMART Health Link passcode attempts (#11413)
* [Scheduling] Allow confirming a held appointment series (#10791)
* Require Bot.runAsUser or `ProjectMembership`, strict `searchUnique` (#11416)
* Exact mapping from SMART scope to FHIR interaction (#11318)
* fix(server): apply login and MFA rate limits regardless of path case or trailing slash (#11422)
* fix(server): apply search access checks to canonical _include targets (#11419)
* fix(server): only super admins can set Bot.system (#11396)
* feat(react): DateTimeInput placeholder-style empty state and calendar icon (#10886)
* fix(server): set a login's membership only once under concurrent requests (#11426)
* (Docs) Add Modular and Composite Questionnaire Guide (#11423)
* fix(server): resolve token exchange identity like the external auth callback (#11185)
* fix(server): give WebSocket binding tokens their own audience (#11428)
* feat(server): add per-client external auth callback path  (#11429)
* fix(server): require registered redirect URI on login (#11420)
* Fix merge conflict (#11435)
* fix(server): omit Binary.data from subscription notifications (#11418)
*  fix(server): return a uniform error when the $ai provider request cannot be sent (#11436)
* Dependency upgrades 2026-11-16 (#11430)
* Omit set-accounts quota record in async mode (#11441)
* fix(react-scheduling): keep a picked time when the search moves to other days (#11443)
* fix(provider): move getErrorMessage to utils/errors (#11442)
* Adding Sanjana to About Me page (#11452)
* Add logs around meta.accounts edge cases (#11446)
* (Docs) Add Tenancy Design Decision Guide and Revamp / Reorganize Technical Documentation (#11405)
* chore(server): log memberships granted to existing users with unverified email (#11447)
* [Scheduling] Move `Patient` field up in find+book form (#11460)
* Reformat website About Us page (#11456)
* docs: require Redis 7+ or any Valkey version (#11451)
* Use PR numbers in preview URLs to support bot authors (#11464)
* Add Health Gorilla results display requirements (#11458)
* docs: make ONC certification guidance Enterprise-only (#11472)
* fix(server): do not accept expired external tokens from the auth cache (#11454)
* fix(cli): use PKCE and state in authorization code login (#11471)
* fix(server): bind external client tokens to membership externalId (#11042)
* feat(provider): Add owner filter to TaskBoard (#11407)
* [SchedulingWorkspace] Paint the workspace as one surface, in a color the host can set (#11356)
* Streamline cache writes after transaction commit (#11465)
* test(app): wait for the user email in MemberDetailsPage test (#11482)
* test(examples): move photon vi.mock calls to module scope (#11485)
* test(examples): import jest-dom's Vitest entry in foomedical and provider (#11486)
* fix(server): make RelatedPerson read-only in default Patient and RelatedPerson policies (#11474)
* chore(server): log invalid pkceOptional code redemptions (#11470)
* test(server): break circular mock in database-migration.test.ts (#11480)
* Fixes #10479 - include deleted resources in bulk export (#11028)
* fix(server): make password changes revoke sign-ins still in progress (#11488)
* [SchedulingWorkspace] Move manual time entry into booking form (#11445)
* feat(core): exclusive option on medication cart checkout (#11477)
* test(server): run clearallwssubs.test.ts serially to fix flaky ws sub stats test (#11491)
* test(server): don't rely on beforeAll mock calls in seed.test.ts (#11479)
* [SchedulingWorkspace] UI Tweaks (#11295)
* fix(server): only accept Devices and Agents from agent operation searches (#11505)
* test(app): clean up after index.test.tsx (#11481)
* test(agent): fix EventEmitter methods for tests (#11484)
* fix(agent): keep message content in the channel log (#11502)
* Server config to exempt IP addresses from lower login rate limit (#11467)
* core no longer owns packages/docs (#10939)
* docs(contributing): replace Jest with Vitest in testing guide (#11509)
* fix(app): only use resource type names as the default home page type (#11513)
* fix(react): FhirPathTable only runs read-only GraphQL queries (#11510)
* [SchedulingWorkspace] Show an appointment's times in its own timezone (#11444)
* fix(server): require update access to an Agent for $upgrade and $reload-config (#11506)
* fix(server): accept each authenticator (TOTP) code only once (#11500)
* refactor(server): compute the scheduling alignment grid in one place (#11508)
* Escape X-FHIR-Query values (#11511)
* Skip checking absolute references (#11461)
* fix(react): AttachmentDisplay only renders data, blob, and external URLs (#11512)

**Full Changelog**: https://github.com/medplum/medplum/compare/v5.2.17...v5.2.18