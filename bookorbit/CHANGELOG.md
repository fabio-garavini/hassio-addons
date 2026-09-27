## Highlights

- **Your library, now on iPhone and Apple Watch (in v3.0.0+)**: The official BookOrbit app is here, native and offline-first. Read EPUBs, PDFs, and comics, play audiobooks with chapters and a sleep timer, and have any book read aloud to you. Download all of it for the commute, push files in from any app's share sheet, and then leave your phone behind entirely: the Apple Watch app downloads and plays your audiobooks on its own, and syncs your place when you are back. 

	Download from Apple App Store: https://apps.apple.com/us/app/bookorbit-the-official-app/id6811807346 <!-- icon: Smartphone -->

<img width="900" alt="ios-app-gallery" src="https://github.com/user-attachments/assets/c4298a06-7dbf-4cac-8d89-7a262e366ab2" />
<img width="900" alt="apple-watch-showcase" src="https://github.com/user-attachments/assets/1c7c148e-e07a-4a5e-bc21-1ba22ed08dce" />

<hr>

- **Dedicated ebook and audiobook covers**: Books with both media now store independent covers for each medium. Audio screens show square artwork while library browsing, Kobo, and OPDS display the ebook cover, with automatic migration on upgrade. <!-- icon: Image -->

<img width="500" height="1360" alt="10" src="https://github.com/user-attachments/assets/e14e46e2-8651-4c2b-8069-22f98702c101" />

<hr>

- **Reader tune bar and custom fonts (iOS)**: Adjust appearance directly over the page with a fluid tune bar, render your server and uploaded custom fonts, and configure account reading defaults in Settings for books, PDFs, and comics. <!-- icon: SlidersHorizontal -->

<img width="250" alt="1" src="https://github.com/user-attachments/assets/14d8d05d-5bf4-46db-b9d2-db9f204dcee2" />
<img width="250" alt="5" src="https://github.com/user-attachments/assets/b9ad1d2d-c551-40e1-accb-7f01d2b82764" />
<img width="250" alt="2" src="https://github.com/user-attachments/assets/a040c3ef-7b3c-4401-b38c-af651e0164f1" />
<img width="250" alt="3" src="https://github.com/user-attachments/assets/03aa5859-c8d8-4ef4-bef9-7a05a7c56156" />
<img width="250" alt="4" src="https://github.com/user-attachments/assets/fdc2f9d8-5f97-4e66-bcb7-b5e86dcc7505" />
<img width="250" alt="11" src="https://github.com/user-attachments/assets/d570a8fd-355f-4d9e-8d29-d06d90ec2d87" />
<img width="250" alt="12" src="https://github.com/user-attachments/assets/e90917ed-71ef-40c8-9204-a20fa1dd55d9" />

<hr>

- **Redesigned Apple Watch experience (iOS)**: The Apple Watch companion features a redesigned player, speed sheet, and library list for seamless, phone-free audiobook listening on the go. <!-- icon: Watch -->

<img width="250" alt="6" src="https://github.com/user-attachments/assets/c0c34ec2-319a-49dc-8696-4e6c26261c84" />
<img  width="250" alt="7" src="https://github.com/user-attachments/assets/5c61cb9c-a61f-4200-a032-cf99659efa8e" />
<img  width="250" alt="8" src="https://github.com/user-attachments/assets/dfbefa23-145d-4d55-b874-94f48ab35a85" />

<hr>

- **Polished audiobook player (iOS)**: The player highlights larger cover art and centered titles, displays dedicated covers separate from ebook editions, and prevents accidental seeks while scrolling. <!-- icon: Headphones -->

<img width="300" alt="13" src="https://github.com/user-attachments/assets/80e76f39-e5c4-4f9f-834c-689b18842187" />


<hr>

- **Faster downloaded EPUBs and Read Along (iOS)**: Downloaded books now load individual chapters and Read Along audio on-demand, opening large files instantly while letting you tap any sentence to start narrated playback. <!-- icon: BookAudio -->
- **Conflict-free reader settings sync** - Reader preferences now update field-by-field over PATCH instead of replacing the entire settings row, preventing web and companion apps from overwriting each other's customizations. <!-- icon: SlidersHorizontal -->
- **Enhanced read-along playback** - Read-along EPUBs sync reading positions with standalone EPUB files, start narration at the exact selected sentence, and preserve active word highlights across all color themes. <!-- icon: BookAudio -->
- **Automatic format re-ranking on import** - Adding new formats into an existing book automatically re-evaluates the primary file based on library priority rules, so preferred formats take the lead right away. <!-- icon: Layers -->

<hr>

### Features

* **reader:** merge reader settings field by field over PATCH ([a06b111](https://github.com/bookorbit/bookorbit/commit/a06b1110466b4191d810bcba54fefa197b7610e8)) by @neonsolstice
* **stats:** record android as a reading source ([bc10ebc](https://github.com/bookorbit/bookorbit/commit/bc10ebcc3395c8464c8ad794920557be3cd30f4d)) by @neonsolstice


### Bug Fixes

* **auth:** keep signed-out reset links on their page ([1dd29c7](https://github.com/bookorbit/bookorbit/commit/1dd29c742fc53c486726367def6c47b69e6f5e14)) by @neonsolstice, closes [#1503](https://github.com/bookorbit/bookorbit/issues/1503)
* **books:** align progress bar color with read status ([12cf724](https://github.com/bookorbit/bookorbit/commit/12cf724c39c97b64885645a81bf518653a59c445)) by @neonsolstice, closes [#1465](https://github.com/bookorbit/bookorbit/issues/1465)
* **client:** keep confirmation dialogs above sheets ([27cfdc2](https://github.com/bookorbit/bookorbit/commit/27cfdc20282eabdc89296c8c45482c578c157c7c)) by @neonsolstice, closes [#1502](https://github.com/bookorbit/bookorbit/issues/1502)
* **client:** send only the reader settings that changed ([d87312a](https://github.com/bookorbit/bookorbit/commit/d87312a8cacc8018b4393e15b9f4d3b3541c2b24)) by @neonsolstice
* **cover:** rebuild book thumbnails that went missing beside a cover ([#1482](https://github.com/bookorbit/bookorbit/issues/1482)) ([970b152](https://github.com/bookorbit/bookorbit/commit/970b15252960e551bec325cc855a4c1dab920a40)) by @neonsolstice, closes [#1475](https://github.com/bookorbit/bookorbit/issues/1475)
* **metadata:** populate Hardcover genres for identified books ([5609b38](https://github.com/bookorbit/bookorbit/commit/5609b38901a390a73b48dd024eab271eb950500f)) by @neonsolstice, closes [#1422](https://github.com/bookorbit/bookorbit/issues/1422)
* **reader:** decode character references in read-aloud text ([a480951](https://github.com/bookorbit/bookorbit/commit/a4809512d8ee4b839414a1395a3d8fc88c7560f2)) by @neonsolstice, closes [#39](https://github.com/bookorbit/bookorbit/issues/39) [#39](https://github.com/bookorbit/bookorbit/issues/39) [#39](https://github.com/bookorbit/bookorbit/issues/39) [#39](https://github.com/bookorbit/bookorbit/issues/39) [#1486](https://github.com/bookorbit/bookorbit/issues/1486)
* **reader:** preserve iOS text selection adjustment ([304ccd5](https://github.com/bookorbit/bookorbit/commit/304ccd56405dfaf2ccd39ff30b51b094e8f99293)) by @neonsolstice, closes [#1487](https://github.com/bookorbit/bookorbit/issues/1487)
* **reader:** preserve narration highlights across themes ([926f5de](https://github.com/bookorbit/bookorbit/commit/926f5de22547da797b12f597aa349ec6e7d39c23)) by @neonsolstice, closes [#1479](https://github.com/bookorbit/bookorbit/issues/1479)
* **reader:** prevent duplicate media overlay playback ([6fa4d68](https://github.com/bookorbit/bookorbit/commit/6fa4d68728c7dcebfcdce57346ac813d778089a4)) by @neonsolstice, closes [#1477](https://github.com/bookorbit/bookorbit/issues/1477)
* **reader:** skip zero-length overlay clips ([c25a756](https://github.com/bookorbit/bookorbit/commit/c25a756ed7ba94a55737086232941bd7abef2869)) by @neonsolstice, closes [#1492](https://github.com/bookorbit/bookorbit/issues/1492)
* **reader:** sync progress between an EPUB and its read-along copy ([3c032e0](https://github.com/bookorbit/bookorbit/commit/3c032e0e3cf27ccfc8778318676c93bb361c37f3)) by @neonsolstice, closes [#1508](https://github.com/bookorbit/bookorbit/issues/1508)
* **scanner:** repair incomplete audiobook durations ([759ec73](https://github.com/bookorbit/bookorbit/commit/759ec730d9ffc3bf2fb538b00b9f766e6be374e7)) by @neonsolstice, closes [#1498](https://github.com/bookorbit/bookorbit/issues/1498)
* **server:** prevent broad fuzzy search matches ([09ea8bd](https://github.com/bookorbit/bookorbit/commit/09ea8bdd5f3ca019503ea723948851edbf2079b7)) by @neonsolstice, closes [#1490](https://github.com/bookorbit/bookorbit/issues/1490)
* **stats:** count completed attempts in the activity goal ([9afa3a2](https://github.com/bookorbit/bookorbit/commit/9afa3a2f7039f2962e8fc77621a5f82e6144c184)) by @neonsolstice, closes [#1474](https://github.com/bookorbit/bookorbit/issues/1474)
* **stats:** repair stale KOReader file identities ([4a4b62b](https://github.com/bookorbit/bookorbit/commit/4a4b62bbefe5bd8d6162701210db755bdb14b38c)) by @neonsolstice, closes [#1497](https://github.com/bookorbit/bookorbit/issues/1497)
* **stats:** route KOReader hash collisions safely ([94eca19](https://github.com/bookorbit/bookorbit/commit/94eca198c311a1854730f4362bd086dc49a17652)) by @neonsolstice, closes [#1457](https://github.com/bookorbit/bookorbit/issues/1457)

---

**Docker**

```bash
docker pull ghcr.io/bookorbit/bookorbit:3.1.0
```

Multi-arch: `linux/amd64` and `linux/arm64`.
