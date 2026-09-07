## Highlights

- **Automated book requests** - Users can request books, send them through approval, search configured sources, and import fulfilled releases through the Book Dock. Permissions and requester visibility stay scoped throughout the workflow. <!-- icon: BookPlus -->

<img width="600" alt="my-requests" src="https://github.com/user-attachments/assets/28277f69-332c-40b5-9933-fcce4c7279a0" />
<img width="600" alt="release-picker" src="https://github.com/user-attachments/assets/12040188-f715-4ffd-ab90-93efe00df6be" />
<imgwidth="400" alt="request-a-book" src="https://github.com/user-attachments/assets/da48b0c8-3cca-4e88-aeec-8067dc1edb04" />
<img width="600" alt="request-detail" src="https://github.com/user-attachments/assets/c5edf540-7390-40bc-9926-f8aa61b131b3" />
<img width="600" alt="settings-automation" src="https://github.com/user-attachments/assets/7dafb691-bc54-406a-b0fe-42c356c4ebd0" />
<imgwidth="600" alt="settings-download-clients" src="https://github.com/user-attachments/assets/6ebe42d5-e22d-4952-b814-f6eebf0df8a7" />
<imgwidth="600" alt="settings-release-profiles" src="https://github.com/user-attachments/assets/85075b28-37d8-4a3e-acff-5660c80fe575" />
<img width="600" alt="settings-sources" src="https://github.com/user-attachments/assets/c7eb62cb-be70-45b4-8e96-1d004b577bc2" />
<img width="400" alt="source-editor" src="https://github.com/user-attachments/assets/e95146de-4c15-447c-9acc-3efe2dead753" />


- **PDF highlights and annotations** - Create, style, search, revisit, and delete PDF highlights and notes in the web reader, with improved responsive outline and annotation navigation. <!-- icon: Highlighter -->
- **More control over EPUB typography** - Adjust paragraph spacing and indentation while preserving publisher formatting by default, with synchronized defaults and per-book overrides. <!-- icon: Type -->
- **SSO-only authentication** - Administrators can require OIDC sign-in after linking an enabled superuser, with password flows blocked consistently across the API, web app, WebSockets, and administrative actions. <!-- icon: ShieldCheck -->
- **Safer automatic metadata refreshes** - Books with trusted provider IDs now refresh only from those identities, avoiding accidental matches to a different edition while keeping manual search flexible. <!-- icon: BadgeCheck -->

### Features

* **auth:** add SSO-only authentication mode ([9165dbe](https://github.com/bookorbit/bookorbit/commit/9165dbed1dd9b30b075d74c8a718a1a4673f7e95)) by @neonsolstice, closes [#1002](https://github.com/bookorbit/bookorbit/issues/1002)
* **book-requests:** add automated request fulfillment ([fc6e6f0](https://github.com/bookorbit/bookorbit/commit/fc6e6f03d5c82d32e013247c0906605ce42cbd83)) by @neonsolstice, closes [#248](https://github.com/bookorbit/bookorbit/issues/248) [#1115](https://github.com/bookorbit/bookorbit/issues/1115)
* **metadata:** restrict autofill to stored provider ids ([e3779c1](https://github.com/bookorbit/bookorbit/commit/e3779c1d7e56791c08327f7e43da58b9441accf7)) by @neonsolstice, closes [#1222](https://github.com/bookorbit/bookorbit/issues/1222)
* **reader:** add epub paragraph spacing ([53cfe16](https://github.com/bookorbit/bookorbit/commit/53cfe16b044284e866dd8ff55fb4ee48106ab073)) by @neonsolstice, closes [#1206](https://github.com/bookorbit/bookorbit/issues/1206)
* **reader:** add epub typography controls ([2912429](https://github.com/bookorbit/bookorbit/commit/2912429ca63e9a50c8463739e839c05b479999c6)) by @neonsolstice, closes [#1206](https://github.com/bookorbit/bookorbit/issues/1206)
* **reader:** add PDF highlights and annotations on web only ([#1213](https://github.com/bookorbit/bookorbit/issues/1213)) ([04ec495](https://github.com/bookorbit/bookorbit/commit/04ec495c256960a5e87b3ba399f27f6a228caf58)) by @wmTJc9IK0Q, closes [#1195](https://github.com/bookorbit/bookorbit/issues/1195)
* **reader:** improve PDF sidebar navigation ([eb60744](https://github.com/bookorbit/bookorbit/commit/eb607444940563d5bb62471aecb29de725dfe000)) by @neonsolstice, closes [#1235](https://github.com/bookorbit/bookorbit/issues/1235)
* **reader:** show book titles in reader tabs ([7057d35](https://github.com/bookorbit/bookorbit/commit/7057d350fddf6e82f242f593bf9fb9d96ad1ff87)) by @neonsolstice, closes [#1147](https://github.com/bookorbit/bookorbit/issues/1147)
* **smart-scope:** filter by community review count ([0f54291](https://github.com/bookorbit/bookorbit/commit/0f5429131ad3ad0780c102c6914a0674c8a7a413)) by @neonsolstice, closes [#1041](https://github.com/bookorbit/bookorbit/issues/1041)

### Bug Fixes

* align Book Dock ready filter with filing readiness ([cc1b767](https://github.com/bookorbit/bookorbit/commit/cc1b76726470516007d5590dcdef2d293305af9a)) by @neonsolstice, closes [#1215](https://github.com/bookorbit/bookorbit/issues/1215)
* **books:** fully expand book synopsis ([9391555](https://github.com/bookorbit/bookorbit/commit/93915558594f7d403cf598f03995c55f7996ec2c)) by @neonsolstice, closes [#1202](https://github.com/bookorbit/bookorbit/issues/1202)
* **books:** open personal review editor from summary ([26503bc](https://github.com/bookorbit/bookorbit/commit/26503bc9e67ecb8ec00634c7527ef4f3a35bf1d9)) by @neonsolstice, closes [#1211](https://github.com/bookorbit/bookorbit/issues/1211)
* **books:** scope request ownership by media type ([16e63f2](https://github.com/bookorbit/bookorbit/commit/16e63f2610be88940fefa6fa1cc47209c76cc40f)) by @neonsolstice
* **client:** keep book detail layouts responsive ([3561d5d](https://github.com/bookorbit/bookorbit/commit/3561d5ddd6829eceae42cc86d8f96ec1e949b294)) by @neonsolstice, closes [#1192](https://github.com/bookorbit/bookorbit/issues/1192)
* **client:** keep cover controls within their column ([d8f87d8](https://github.com/bookorbit/bookorbit/commit/d8f87d8dd1bd9b57a7c3f45686c0ec67d40d01a8)) by @neonsolstice, closes [#1280](https://github.com/bookorbit/bookorbit/issues/1280)
* **client:** keep reading activity text inside card ([e63c4b3](https://github.com/bookorbit/bookorbit/commit/e63c4b36856c8e2ce5c29a8ce656d8d130015367)) by @neonsolstice, closes [#1262](https://github.com/bookorbit/bookorbit/issues/1262)
* **client:** restore titles for cached views ([f5bb88f](https://github.com/bookorbit/bookorbit/commit/f5bb88f996166cc9727363e140d39a5f4b397a9f)) by @neonsolstice, closes [#1261](https://github.com/bookorbit/bookorbit/issues/1261)
* **client:** stabilize book detail layout across screen sizes ([028d428](https://github.com/bookorbit/bookorbit/commit/028d4287b4f727336eabd3af29d165a73c661faa)) by @neonsolstice, closes [#1259](https://github.com/bookorbit/bookorbit/issues/1259)
* **client:** stop compact detail covers shrinking ([978ef8a](https://github.com/bookorbit/bookorbit/commit/978ef8ac2fb80a49895153945863db32e3658e9a)) by @neonsolstice, closes [#1279](https://github.com/bookorbit/bookorbit/issues/1279)
* **cover:** respect PDF crop box during extraction ([3f06d4e](https://github.com/bookorbit/bookorbit/commit/3f06d4eee9c81aec6b4039c5a3ae01dac59842ff)) by @neonsolstice, closes [#1242](https://github.com/bookorbit/bookorbit/issues/1242)
* **email:** keep attachment filenames in sync after rename ([8361861](https://github.com/bookorbit/bookorbit/commit/836186159a50b3a382230a54a374d7186d2806a4)) by @neonsolstice, closes [#1286](https://github.com/bookorbit/bookorbit/issues/1286)
* **metadata:** accept goodreads pages that preload waf script ([5346414](https://github.com/bookorbit/bookorbit/commit/5346414a70d25ce3b217ba5c8d4892dc7fcc753e)) by @neonsolstice, closes [#1240](https://github.com/bookorbit/bookorbit/issues/1240)
* **metadata:** handle large Hardcover libraries ([40c5abb](https://github.com/bookorbit/bookorbit/commit/40c5abbbed35f7d52aa907f30e72761aa2634784)) by @neonsolstice, closes [#1196](https://github.com/bookorbit/bookorbit/issues/1196)
* **metadata:** preserve calendar dates across timezones ([661b265](https://github.com/bookorbit/bookorbit/commit/661b2652515d4bf8dee5b816ed84c28b421b4d67)) by @neonsolstice, closes [#1194](https://github.com/bookorbit/bookorbit/issues/1194)
* **metadata:** reject mismatched iTunes media lookups ([5052f17](https://github.com/bookorbit/bookorbit/commit/5052f170a9b9740a07e11ae780125cd6960921bd)) by @neonsolstice, closes [#1285](https://github.com/bookorbit/bookorbit/issues/1285)
* **metadata:** restore Amazon metadata search ([6edde6c](https://github.com/bookorbit/bookorbit/commit/6edde6c64d446397eb9185e208fd44f9bb7cba18)) by @neonsolstice
* **metadata:** support CBZ archive comments ([43bf1b7](https://github.com/bookorbit/bookorbit/commit/43bf1b7cfa19ab4c9433cc7d33837cb4a7187f79)) by @neonsolstice, closes [#1272](https://github.com/bookorbit/bookorbit/issues/1272)
* **reader:** sanitize KOReader device download paths ([eb5aef3](https://github.com/bookorbit/bookorbit/commit/eb5aef301c0ad505d9e5c375f3fab1c45e923008)) by @neonsolstice, closes [#1203](https://github.com/bookorbit/bookorbit/issues/1203)
* **scanner:** handle legacy Book Dock series indexes ([adab5c8](https://github.com/bookorbit/bookorbit/commit/adab5c87836b30e29cdf9de149549d3f4a71a0f3)) by @neonsolstice, closes [#1241](https://github.com/bookorbit/bookorbit/issues/1241)
* **scanner:** invalidate dir scan state on book deletion ([#1226](https://github.com/bookorbit/bookorbit/issues/1226)) ([2498e09](https://github.com/bookorbit/bookorbit/commit/2498e09083ea8fed42ecd1d590253d1210a4faa9)) by @stradichenko
* **server:** bind dc namespace during epub metadata writes ([cf84e37](https://github.com/bookorbit/bookorbit/commit/cf84e37b2b57182da312cb9c650bfcd92bea6213)) by @neonsolstice, closes [#1207](https://github.com/bookorbit/bookorbit/issues/1207)
* **server:** handle Prowlarr torznab endpoint responses ([19afacb](https://github.com/bookorbit/bookorbit/commit/19afacb0f9f7a341048eb598c4fe6a39a84c0be5)) by @neonsolstice, closes [#1244](https://github.com/bookorbit/bookorbit/issues/1244)
* **server:** merge imported read statuses safely ([f555f08](https://github.com/bookorbit/bookorbit/commit/f555f080fe8c03f17515407b2aa5dd2892684b8e)) by @neonsolstice, closes [#1104](https://github.com/bookorbit/bookorbit/issues/1104)
* **server:** normalize Calibre indexes and restore image builds ([abc5430](https://github.com/bookorbit/bookorbit/commit/abc543044f94dacf5e32aa38e798d0e93c935e4b)) by @neonsolstice, closes [#1212](https://github.com/bookorbit/bookorbit/issues/1212)
* **server:** reject ambiguous KOReader file hashes ([67da9a2](https://github.com/bookorbit/bookorbit/commit/67da9a249151b5a9321b2846b5b7eb7562e99a4f)) by @neonsolstice, closes [#1135](https://github.com/bookorbit/bookorbit/issues/1135)
* **server:** resolve numeric-prefixed Hardcover slugs ([43a7c67](https://github.com/bookorbit/bookorbit/commit/43a7c671d91837e7175e4a52b52611818e34f744)) by @neonsolstice, closes [#1243](https://github.com/bookorbit/bookorbit/issues/1243)
* **server:** support Fastify 5.12.1 proxy rules ([5de4b92](https://github.com/bookorbit/bookorbit/commit/5de4b9206bbc821e8df52891fc58d8edf8afafb9)) by @neonsolstice
* **settings:** persist complete display preferences ([3196454](https://github.com/bookorbit/bookorbit/commit/31964549441e7fa4361c51e02e2a940e3675456c)) by @neonsolstice, closes [#1209](https://github.com/bookorbit/bookorbit/issues/1209)
* **stats:** stop estimating sessions from KOReader progress ([f41a58a](https://github.com/bookorbit/bookorbit/commit/f41a58ac5859031334ddf15e329b667544a9cbe3)) by @neonsolstice, closes [#1233](https://github.com/bookorbit/bookorbit/issues/1233)
* **users:** add safe superuser management ([3ea6063](https://github.com/bookorbit/bookorbit/commit/3ea6063f311fc355c42f55471ac0038815d7b170)) by @neonsolstice, closes [#1208](https://github.com/bookorbit/bookorbit/issues/1208)

### Internationalization

* **client:** sync translations from Crowdin ([#1191](https://github.com/bookorbit/bookorbit/issues/1191)) ([3a0f891](https://github.com/bookorbit/bookorbit/commit/3a0f8915ec821766c78f837a1326c497ab70eb29)) by @neonsolstice
* **client:** sync translations from Crowdin ([#1225](https://github.com/bookorbit/bookorbit/issues/1225)) ([6583fd6](https://github.com/bookorbit/bookorbit/commit/6583fd696efa3ca296abcf0d21e9f42c50624297)) by @neonsolstice

### Security

* **deps:** patch container vulnerabilities ([e3241ee](https://github.com/bookorbit/bookorbit/commit/e3241eea3de723f8d9eb3f3ad59365b446b693b0)) by @neonsolstice

---

**Docker**

```bash
docker pull ghcr.io/bookorbit/bookorbit:2.9.0
```

Multi-arch: `linux/amd64` and `linux/arm64`.

<!-- release-metadata -->

[Full diff](https://github.com/bookorbit/bookorbit/compare/v2.8.1...v2.9.0)
