## Highlights


- **BookOrbit, now made for iPad (iOS)**: The entire app has been reimagined for iPad, with spacious two-pane layouts across Home, Library, Search, Book Details, Requests, Activity, Downloads, More, and Settings, plus purpose-built EPUB, PDF, comic, and audiobook experiences with panels, spreads, search, scrubbers, keyboard shortcuts, trackpad gestures, pointer support, and a Home Screen widget. <!-- icon: Tablet -->
<img width="500" alt="13" src="https://github.com/user-attachments/assets/e3621e16-eefc-4fd0-bccf-2e45f002aa31" />
<img width="500" alt="14" src="https://github.com/user-attachments/assets/66aacd5a-2cd0-4fca-ab63-69fcb09126d7" />
<img width="500" alt="20" src="https://github.com/user-attachments/assets/2a929d3c-5d97-49af-b821-45e1dfb023fc" />
<img width="500" alt="21" src="https://github.com/user-attachments/assets/9b25f268-d4f7-42b2-897e-028b7d4897a0" />
<img width="500" alt="15" src="https://github.com/user-attachments/assets/c016974a-1161-48de-bde1-ca19e7b9398e" />
<img width="500" alt="16" src="https://github.com/user-attachments/assets/9f961a8b-d902-4114-a5db-2b4b66c82456" />
<img width="500" alt="17" src="https://github.com/user-attachments/assets/c6f7eb87-0b12-4a52-8468-b8b4a8f537e8" />
<img width="500" alt="18" src="https://github.com/user-attachments/assets/92ac8d3d-1dd8-445c-92ce-c9c50a9f780b" />
<img width="500" alt="19" src="https://github.com/user-attachments/assets/f7cf8be0-7857-45ec-84d7-e3310d0bc697" />
<img width="500" alt="22" src="https://github.com/user-attachments/assets/abc532d9-405d-4bb2-b8ca-bb1f126e037e" />

<hr>

- **A faster way to manage libraries**: Library setup now uses a single settings sheet instead of a seven-step wizard, while the Libraries page adds live scan status, recent history, in-place automation controls with undo, responsive cards, and the option to copy settings from another library. <!-- icon: Library -->
<img width="300" alt="3" src="https://github.com/user-attachments/assets/0ec5f160-7321-429e-b1d6-4f6e41b4ed4b" />
<img width="300" alt="5" src="https://github.com/user-attachments/assets/e8f68905-cae3-4b6d-b8f8-666d1fcc07ae" />
<img width="300" alt="6" src="https://github.com/user-attachments/assets/05c788b9-1f97-483b-b420-a4e88371d6f9" />
<img width="300" alt="7" src="https://github.com/user-attachments/assets/466b0c33-2778-4d7e-865d-59d285eb4e65" />
<img width="300" alt="8" src="https://github.com/user-attachments/assets/2ddc59a7-c581-4b9e-806a-9093e07a8114" />
<img width="300" alt="9" src="https://github.com/user-attachments/assets/3ab62bd2-8dc5-4662-b7a9-cfb125a5e1c0" />

<hr>

- **Search and compare metadata in one place**: The new two-pane match sheet ranks results by match strength, shows word-level field differences, lets you keep or use each value, preserves selections while browsing candidates, and brings the same workflow to Book Dock. <!-- icon: ScanSearch -->

<img width="500" alt="1" src="https://github.com/user-attachments/assets/41c08a68-902b-4358-a23c-36c262678a66" />

<hr>

- **More control over each library and account**: Libraries support precise fractional completion thresholds and a read-aloud filename token, while each user can hide Requests and its notifications without interrupting requests already in progress. <!-- icon: Settings2 -->

<img width="500" alt="2" src="https://github.com/user-attachments/assets/db67a99a-a195-433e-90d6-7508936a1c23" />

<hr>

- **Dedicated ebook and audiobook covers**: Books with both media now store independent covers for each medium. Audio screens show square artwork while library browsing, Kobo, and OPDS display the ebook cover, with automatic migration on upgrade. <!-- icon: Image -->

<img width="500" height="1360" alt="10" src="https://github.com/user-attachments/assets/e14e46e2-8651-4c2b-8069-22f98702c101" />

<hr>

### Features

* **annotations:** add bounded dashboard highlights route ([826584e](https://github.com/bookorbit/bookorbit/commit/826584e5dac39451c439c8485bd5199b6b2c99a2)) by @neonsolstice
* **cover:** give books with both media separate ebook and audiobook covers ([e28bd67](https://github.com/bookorbit/bookorbit/commit/e28bd67fa37549719d5ac4922a8250ac860e2f4a)) by @neonsolstice
* **library:** rebuild the library editor as a settings sheet ([e92cc36](https://github.com/bookorbit/bookorbit/commit/e92cc36146559972aaff0e6dd74b0483bb840c7a)) by @neonsolstice
* **library:** support fractional finished thresholds ([8dfb093](https://github.com/bookorbit/bookorbit/commit/8dfb09330104b23583a2096b129fac96da24e0c0)) by @neonsolstice
* **metadata:** merge search and compare into one match sheet ([6f673e2](https://github.com/bookorbit/bookorbit/commit/6f673e2e5995228e703cc6bc0aeeb850e6b948c6)) by @neonsolstice
* **settings:** add per-user Requests visibility toggle ([55110d5](https://github.com/bookorbit/bookorbit/commit/55110d5b449db7e471d2a8e1ba370c15fb3cb018)) by @neonsolstice, closes [#1476](https://github.com/bookorbit/bookorbit/issues/1476)
* **settings:** add read-aloud filename token ([d66f853](https://github.com/bookorbit/bookorbit/commit/d66f853cad0b467d1add7988f74adc996937aa70)) by @neonsolstice, closes [#1590](https://github.com/bookorbit/bookorbit/issues/1590)
* **settings:** polish the libraries page and add in-place controls ([de0954e](https://github.com/bookorbit/bookorbit/commit/de0954e77f73901b32b678b140ed9e89fae12a82)) by @neonsolstice
* **types:** expose the book file id on audiobook manifest assets ([a35e222](https://github.com/bookorbit/bookorbit/commit/a35e222cb24ed0b0c24c676a180c38c3e98420dd)) by @neonsolstice


### Bug Fixes

* **annotations:** clear KOReader state on device removal ([7e3bb18](https://github.com/bookorbit/bookorbit/commit/7e3bb1892ea640d60dc30719d260fe81b5794462)) by @neonsolstice, closes [#1576](https://github.com/bookorbit/bookorbit/issues/1576)
* **authors:** keep non-latin letters when matching enrichment candidates ([#1615](https://github.com/bookorbit/bookorbit/issues/1615)) ([d1b3fae](https://github.com/bookorbit/bookorbit/commit/d1b3fae7f701ba5e0e95192804aeec95ad49353b)) by @SergeiAK, closes [#1459](https://github.com/bookorbit/bookorbit/issues/1459) [#1459](https://github.com/bookorbit/bookorbit/issues/1459)
* **auth:** recover from expired edge auth proxy sessions ([#1557](https://github.com/bookorbit/bookorbit/issues/1557)) ([bc12143](https://github.com/bookorbit/bookorbit/commit/bc1214301551b4b1f3de06d1bb32c05052bee976)) by @heckler1, closes [#642](https://github.com/bookorbit/bookorbit/issues/642) [#642](https://github.com/bookorbit/bookorbit/issues/642)
* **books:** extract chapters from attached audiobooks ([995cc24](https://github.com/bookorbit/bookorbit/commit/995cc24cc52ba818bbf8a0f488368a51561cbdbf)) by @neonsolstice, closes [#1532](https://github.com/bookorbit/bookorbit/issues/1532)
* **books:** include subtitles in search ([0b2df6e](https://github.com/bookorbit/bookorbit/commit/0b2df6e3d32f341bf04cb17897ccc434ea83607b)) by @neonsolstice, closes [#1552](https://github.com/bookorbit/bookorbit/issues/1552)
* **books:** list a book's formats from one ranked, read-along aware source ([218f8d5](https://github.com/bookorbit/bookorbit/commit/218f8d5dbdc430b8c72699cae83e09268d0d25c0)) by @neonsolstice
* **books:** re-rank the primary file when an import joins an existing book ([4b90dc7](https://github.com/bookorbit/bookorbit/commit/4b90dc7ddd2e9fe5ffc1e96df01d37475d775c6a)) by @neonsolstice
* **books:** stop synthesizing audiobook chapters from unknown durations ([236c178](https://github.com/bookorbit/bookorbit/commit/236c1785d03d6af665816fcfc0b843d9c4144a68)) by @neonsolstice
* **client:** paginate Book Dock navigation ([5a108bb](https://github.com/bookorbit/bookorbit/commit/5a108bbd5e0823ba29497166ec3a079d8296b7c4)) by @neonsolstice
* **client:** persist visible Book Dock destination on done ([a572bad](https://github.com/bookorbit/bookorbit/commit/a572badecbea7aea9af329813d039f57426e1d26)) by @neonsolstice, closes [#1573](https://github.com/bookorbit/bookorbit/issues/1573)
* **kobo:** scope plugin update gate to requesting device ([0d8648f](https://github.com/bookorbit/bookorbit/commit/0d8648feb2517785097cd3169a06e9ebb72e6b9e)) by @neonsolstice, closes [#1519](https://github.com/bookorbit/bookorbit/issues/1519)
* **koreader:** respect KOReader global HTTP proxy settings ([#1562](https://github.com/bookorbit/bookorbit/issues/1562)) ([900514c](https://github.com/bookorbit/bookorbit/commit/900514c2b32b2844ecfbed48f3a57de5b38e8386)) by @Irohoho, closes [#753](https://github.com/bookorbit/bookorbit/issues/753)
* **library:** display reading start threshold accurately ([244924a](https://github.com/bookorbit/bookorbit/commit/244924a3aa2a5069eb3fe001d2e23599ce562730)) by @neonsolstice, closes [#1563](https://github.com/bookorbit/bookorbit/issues/1563)
* **library:** honor browser clock for cron schedules ([6381f02](https://github.com/bookorbit/bookorbit/commit/6381f0221f5543fa7afd90706360b7c97e599da1)) by @neonsolstice, closes [#1559](https://github.com/bookorbit/bookorbit/issues/1559)
* **metadata:** keep a pinned hardcover edition past the edition cap ([#1549](https://github.com/bookorbit/bookorbit/issues/1549)) ([04ba2ff](https://github.com/bookorbit/bookorbit/commit/04ba2ffbcfa58218855a69700c8ebc736b4e0256)) by @foux, closes [#1252](https://github.com/bookorbit/bookorbit/issues/1252) [#1252](https://github.com/bookorbit/bookorbit/issues/1252)
* **metadata:** write finalized metadata back to the imported file ([#1499](https://github.com/bookorbit/bookorbit/issues/1499)) ([d4bc62f](https://github.com/bookorbit/bookorbit/commit/d4bc62f8a9b60dfceb4146788aa59a8e35547693)) by @vishnumad, closes [#1385](https://github.com/bookorbit/bookorbit/issues/1385)
* **reader:** accept audiobook positions in the last second of a track ([35d5a8c](https://github.com/bookorbit/bookorbit/commit/35d5a8c2d6ced2083cf4ed45cb41356ca755877c)) by @neonsolstice
* **reader:** recover audiobook playback after media auth failure ([a52d005](https://github.com/bookorbit/bookorbit/commit/a52d005ff5d4841f4b0e1520741752c5fcaf7c20)) by @neonsolstice, closes [#1536](https://github.com/bookorbit/bookorbit/issues/1536)
* **reader:** start read along at the selected narrated sentence ([da5d0bb](https://github.com/bookorbit/bookorbit/commit/da5d0bb4053d346bd01bc3325d5c20cd3285b762)) by @neonsolstice, closes [#1528](https://github.com/bookorbit/bookorbit/issues/1528)
* **reader:** stop web audiobook progress retrying rejected writes ([c76d9c0](https://github.com/bookorbit/bookorbit/commit/c76d9c01f9ffa331d8145bbf548a2ab12056bca6)) by @neonsolstice
* **series:** show mixed-media books in every group ([0085ffd](https://github.com/bookorbit/bookorbit/commit/0085ffd11ec596e597ae2185fb61e87b37cde73f)) by @neonsolstice, closes [#1566](https://github.com/bookorbit/bookorbit/issues/1566)
* **server:** survive database connection loss ([acce1e1](https://github.com/bookorbit/bookorbit/commit/acce1e15ac3b47b57e55035c9f3a09df4740b054)) by @neonsolstice, closes [#1581](https://github.com/bookorbit/bookorbit/issues/1581)
* **settings:** hide the built-in type picker when setting up a plugin ([480904d](https://github.com/bookorbit/bookorbit/commit/480904d2504c7087893ce769988766b91bfb6dcd)) by @neonsolstice
* **stats:** record web audiobook sessions as listening ([d8f68a0](https://github.com/bookorbit/bookorbit/commit/d8f68a0d38894ecc5c7e1d1683b3ab8c9d20b7ea)) by @neonsolstice
* **users:** use public site for admin password links ([fa36cb2](https://github.com/bookorbit/bookorbit/commit/fa36cb2eddcbc09d799e69774da5b01684c05dde)) by @neonsolstice, closes [#1548](https://github.com/bookorbit/bookorbit/issues/1548)


### Internationalization

* **client:** sync translations from Crowdin ([#1565](https://github.com/bookorbit/bookorbit/issues/1565)) ([2d9af51](https://github.com/bookorbit/bookorbit/commit/2d9af5170b50d2e4324f3ea9734b9755cfe6bd99)) by @neonsolstice
* **client:** sync translations from Crowdin ([#1574](https://github.com/bookorbit/bookorbit/issues/1574)) ([c0759ea](https://github.com/bookorbit/bookorbit/commit/c0759ea1bf6bd591f40ee0f82e7f109e480ef264)) by @neonsolstice


### Database

* **annotations:** let a deleted audio bookmark position be bookmarked again ([fd480b7](https://github.com/bookorbit/bookorbit/commit/fd480b7f2bb0b9806849e21de7bd4d9093f14775)) by @neonsolstice


### Visual Changes

* **client:** unify modal backdrops with dedicated scrim tokens ([1dd3895](https://github.com/bookorbit/bookorbit/commit/1dd389563c159d9ac82f4583ba44ccb9941ca90c)) by @neonsolstice

---

**Docker**

```bash
docker pull ghcr.io/bookorbit/bookorbit:3.2.0
```

Multi-arch: `linux/amd64` and `linux/arm64`.
