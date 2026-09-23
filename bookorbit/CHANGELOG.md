## Highlights
- **Your library, now on iPhone and Apple Watch**: The official BookOrbit app is here, native and offline-first. Read EPUBs, PDFs, and comics, play audiobooks with chapters and a sleep timer, and have any book read aloud to you. Download all of it for the commute, push files in from any app's share sheet, and then leave your phone behind entirely: the Apple Watch app downloads and plays your audiobooks on its own, and syncs your place when you are back. 

	Download from Apple App Store: https://apps.apple.com/us/app/bookorbit-the-official-app/id6811807346 <!-- icon: Smartphone -->

<img width="900" alt="ios-app-gallery" src="https://github.com/user-attachments/assets/c4298a06-7dbf-4cac-8d89-7a262e366ab2" />
<img width="900" alt="apple-watch-showcase" src="https://github.com/user-attachments/assets/1c7c148e-e07a-4a5e-bc21-1ba22ed08dce" />

<hr>

- **Read-along EPUBs** - A book with EPUB 3 media overlays, such as the ones Storyteller produces, now plays its real recorded narration in the reader. The sentence being read is highlighted, the audio streams straight out of the EPUB, and closing the book resumes on the exact sentence. <!-- icon: BookAudio -->

<img width="700" alt="1" src="https://github.com/user-attachments/assets/13f0d802-9306-4635-840a-f29ed72561ba" />

<hr>

- **Bring your own speech engine** - Admins connect any OpenAI-compatible text-to-speech server, such as a local Kokoro container, under Settings. Test the connection, let it list its own voices, preview them, and curate which ones readers can choose. Providers are ordered, so readers always fall back to a working one. <!-- icon: Mic -->

<img width="700" alt="provider-configuration" src="https://github.com/user-attachments/assets/66c15405-1a0c-4b9a-a9e7-73a8ddf265a0" />
<img width="700" alt="provider-overview" src="https://github.com/user-attachments/assets/a4643893-1424-4032-b6e5-0dbff4d661cb" />
<img width="700" alt="manage-voices" src="https://github.com/user-attachments/assets/773c0996-23fd-49cb-8566-0632a58d707e" />

<hr>

- **Prowlarr and SABnzbd** - Manage synchronized torrent and Usenet sources through a single Prowlarr connection, and fulfil requests through SABnzbd with NZB uploads, queue monitoring, reconciliation, and completed-download imports. Search health is reported per source. <!-- icon: Radar -->

<img width="700" alt="2" src="https://github.com/user-attachments/assets/156c649e-8d34-43b4-9947-cb9987f65a87" />

<hr>

- **One reading position across audiobook, ebook, and devices** - Read-aloud progress sync keeps the audiobook, the web reader, Kobo, and KOReader on the same spot. A switch on the book's Details tab turns it on per book and says plainly when a book cannot use it, for example when the durations do not match. <!-- icon: RefreshCw -->

<hr>

### Features

* add read-aloud and media playback support ([e0d3d42](https://github.com/bookorbit/bookorbit/commit/e0d3d42150080444a326a26ea46884359d423355)) by @neonsolstice
* **books:** rebuild duplicate books as a ledger ([c239cfa](https://github.com/bookorbit/bookorbit/commit/c239cfa2dd3d553e5aa25f5cfe949f310a009a4e)) by @neonsolstice
* **client:** link the iOS app from the sidebar footer ([b057e5e](https://github.com/bookorbit/bookorbit/commit/b057e5e9d12c9d93a33aaef1ea8b4cfdae1c6558)) by @neonsolstice
* **docker:** support file-backed secrets ([2ced827](https://github.com/bookorbit/bookorbit/commit/2ced82794f0b88c0777b6f7e468d910aaa30ab0f)) by @neonsolstice, closes [#373](https://github.com/bookorbit/bookorbit/issues/373)
* **reader:** synchronize Storyteller reading progress ([d3f3382](https://github.com/bookorbit/bookorbit/commit/d3f3382bfa2df7e934e4f572cfecbfc1e2a8a338)) by @neonsolstice
* **settings:** add Prowlarr and SABnzbd support ([#1416](https://github.com/bookorbit/bookorbit/issues/1416)) ([3395232](https://github.com/bookorbit/bookorbit/commit/33952322f2d93be466f39dbcf22b43432a927aa7)) by @neonsolstice

### Bug Fixes

* **books:** record reading dates on the reader local calendar day ([2759893](https://github.com/bookorbit/bookorbit/commit/2759893bf6d031b6e6035a7210f003592af7aa38)) by @neonsolstice, closes [#1458](https://github.com/bookorbit/bookorbit/issues/1458)
* **client:** show the platform's own shortcut modifier ([6e608e7](https://github.com/bookorbit/bookorbit/commit/6e608e79a432e73bd261295fe1e8d628669a41e3)) by @neonsolstice
* **docker:** support mounted files for every app secret ([0007a9d](https://github.com/bookorbit/bookorbit/commit/0007a9d84fb4d9d5d20560d9f5d426c842f67366)) by @neonsolstice
* **library:** preserve folder creation order ([6cbf8f5](https://github.com/bookorbit/bookorbit/commit/6cbf8f5c3516a2f3a78bee29422b34d5e1db8cd9)) by @neonsolstice, closes [#1412](https://github.com/bookorbit/bookorbit/issues/1412)
* **metadata:** honor configured Amazon domain in book links ([c292d6c](https://github.com/bookorbit/bookorbit/commit/c292d6ccd2b5f32ffdc9368e907df76c383e94ea)) by @neonsolstice, closes [#1423](https://github.com/bookorbit/bookorbit/issues/1423)
* **migration:** verify BookLore v2.4.0 compatibility ([4dabacb](https://github.com/bookorbit/bookorbit/commit/4dabacb2b38d07e8ae084bfbe8c3c571f6785cc7)) by @neonsolstice
* **server:** authenticate against qbittorrent 5.2 and newer ([89af341](https://github.com/bookorbit/bookorbit/commit/89af341b37e5f885c79bdb029af36dcb8a68b5f3)) by @neonsolstice, closes [#1306](https://github.com/bookorbit/bookorbit/issues/1306)
* **server:** tolerate invalid system timezone in cron jobs ([c99f968](https://github.com/bookorbit/bookorbit/commit/c99f9689e8ee5346ba5f1f0fb429d8794160dcf0)) by @neonsolstice, closes [#1415](https://github.com/bookorbit/bookorbit/issues/1415)
* **settings:** stop cropping the sidebar search placeholder ([2da27cb](https://github.com/bookorbit/bookorbit/commit/2da27cb5c291b3e9893d289af077a0456d32fc1f)) by @neonsolstice

### Internationalization

* **client:** sync translations from Crowdin ([#1418](https://github.com/bookorbit/bookorbit/issues/1418)) ([b10bb58](https://github.com/bookorbit/bookorbit/commit/b10bb58a88369ef628aaf63efe25e39f246fdae8)) by @neonsolstice
* **client:** sync translations from Crowdin ([#1427](https://github.com/bookorbit/bookorbit/issues/1427)) ([d22faea](https://github.com/bookorbit/bookorbit/commit/d22faeaaf47a21c4246ee57fca3dad5514927b9f)) by @neonsolstice

---

**Docker**

```bash
docker pull ghcr.io/bookorbit/bookorbit:3.0.0
```

Multi-arch: `linux/amd64` and `linux/arm64`.

<!-- release-metadata -->

[Full diff](https://github.com/bookorbit/bookorbit/compare/v2.10.0...v3.0.0)
