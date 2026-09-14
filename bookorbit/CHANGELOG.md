## Highlights

- **Expanded book request automation** - Automated requests now support Usenet via Newznab and NZBGet alongside torrents, customizable release scoring profiles, per-indexer seed goals, and in-app indexer plugin updates. <!-- icon: BookPlus -->
<img width="700" alt="1" src="https://github.com/user-attachments/assets/a6833d9b-0828-46bd-9c82-4ee29771bc35" />
<img width="500" alt="2" src="https://github.com/user-attachments/assets/89cbb728-776b-497b-a11a-bf2ab904b52f" />
<img width="500" alt="3" src="https://github.com/user-attachments/assets/57569398-aeda-49dd-9dd3-76c22701ef74" />
<hr>

- **Flexible "Date Added" sources** - Libraries can now determine a book's added date from its import time, file modification time, or file creation time, with one-click recomputation for existing collections. <!-- icon: CalendarClock -->
<img width="500" alt="4" src="https://github.com/user-attachments/assets/4392e19e-49f6-4172-aa31-5e0028eb0ee4" />
<hr>

- **Collapsible series on author pages** - Author pages can now collapse books into series groups, making large author bibliographies much cleaner and easier to navigate. <!-- icon: Layers -->
- **Configurable listen address** - Bind the server to specific IPv4 or IPv6 network interfaces using the HOST environment variable for customized network deployments. <!-- icon: Network -->
<hr>

### Features

* add BookOrbit attribution requirements ([d9ea13b](https://github.com/bookorbit/bookorbit/commit/d9ea13ba45cf73768a62841d873fea27b59f0e8b)) by @neonsolstice
* **authors:** collapse series on author pages ([#1271](https://github.com/bookorbit/bookorbit/issues/1271)) ([73ac0bb](https://github.com/bookorbit/bookorbit/commit/73ac0bb72232938043cfd8e5e54809ce73fe7c5a)) by @SergeiAK, closes [#301](https://github.com/bookorbit/bookorbit/issues/301)
* **book-requests:** add indexer plugin updates and release profiles ([8f1215d](https://github.com/bookorbit/bookorbit/commit/8f1215d331cbe53a215b2620020da2ef74305e6a)) by @neonsolstice
* **book-requests:** add newznab and nzbget support ([fcdd72a](https://github.com/bookorbit/bookorbit/commit/fcdd72a384ec67c063f30bebc90c4af04739ba16)) by @neonsolstice, closes [#1312](https://github.com/bookorbit/bookorbit/issues/1312)
* **book-requests:** add per-indexer seed goals ([3bb33b6](https://github.com/bookorbit/bookorbit/commit/3bb33b615c374e8b9f386e89083490db6191f0b8)) by @neonsolstice, closes [#1360](https://github.com/bookorbit/bookorbit/issues/1360)
* **library:** per-library added_at source (imported/file_modified/file_created) ([#1239](https://github.com/bookorbit/bookorbit/issues/1239)) ([17aa742](https://github.com/bookorbit/bookorbit/commit/17aa7425f8e1a97a9a9a0e06c977457640205408)) by @bobberb
* **reader:** add dedicated audiobook playback API ([ceda742](https://github.com/bookorbit/bookorbit/commit/ceda7428b0d1b8c43db59d266ca8318d9714c8b0)) by @neonsolstice
* **server:** allow configuring the listen address ([04a0f21](https://github.com/bookorbit/bookorbit/commit/04a0f21c8bbcf594a11121a6343905ba7d334ed9)) by @neonsolstice, closes [#1315](https://github.com/bookorbit/bookorbit/issues/1315)


### Bug Fixes

* **annotations:** preserve source highlight timestamps ([b9609b1](https://github.com/bookorbit/bookorbit/commit/b9609b198e43e27d181aa99b75b00d4db7b9e737)) by @neonsolstice, closes [#1300](https://github.com/bookorbit/bookorbit/issues/1300)
* **auth:** explain untrusted OIDC certificate failures ([33c7260](https://github.com/bookorbit/bookorbit/commit/33c7260f18ad769d98f15e1906a53db1e17fdd25)) by @neonsolstice, closes [#1346](https://github.com/bookorbit/bookorbit/issues/1346)
* **auth:** honor delegated admin permissions ([c316e52](https://github.com/bookorbit/bookorbit/commit/c316e52e65ae75d3de9dfdcd211d133df98b8dfc)) by @neonsolstice, closes [#1401](https://github.com/bookorbit/bookorbit/issues/1401)
* **books:** hide completed audiobooks from continue listening ([f0bf903](https://github.com/bookorbit/bookorbit/commit/f0bf9038492c34c53a8a651be5d3caadf04f95fb)) by @neonsolstice
* **client:** add missing icon tooltips ([7a203a0](https://github.com/bookorbit/bookorbit/commit/7a203a03d70c317a6e72234af79ad3b0652cef4d)) by @neonsolstice, closes [#588](https://github.com/bookorbit/bookorbit/issues/588)
* **client:** preserve synced reading calendar dates ([72871fa](https://github.com/bookorbit/bookorbit/commit/72871fad65d9345408294a955ac4506b3e5cf69d)) by @neonsolstice, closes [#1322](https://github.com/bookorbit/bookorbit/issues/1322)
* **library:** ignore current library during folder prescan ([e514be1](https://github.com/bookorbit/bookorbit/commit/e514be151a880aa136fac9e30e5dfd135037d7ae)) by @neonsolstice, closes [#1340](https://github.com/bookorbit/bookorbit/issues/1340)
* **library:** respect locale for cron time display ([2f22abe](https://github.com/bookorbit/bookorbit/commit/2f22abe03e64f2f72b6ac0372a28b1ae2969363d)) by @neonsolstice, closes [#1391](https://github.com/bookorbit/bookorbit/issues/1391)
* **reader:** honor line spacing over publisher styles ([6c65c39](https://github.com/bookorbit/bookorbit/commit/6c65c393b53f245d2b49ee774311ffc6604c602b)) by @neonsolstice, closes [#1302](https://github.com/bookorbit/bookorbit/issues/1302)
* **reader:** preserve touch text selection in PDF reader ([911f61e](https://github.com/bookorbit/bookorbit/commit/911f61e3dc4f9cb8ebbd860b58d9934915041718)) by @neonsolstice, closes [#1388](https://github.com/bookorbit/bookorbit/issues/1388)
* **scanner:** support uploads to ACL-controlled storage ([daf61cb](https://github.com/bookorbit/bookorbit/commit/daf61cb4669039477d31fb7975b1e13736f6e88b)) by @neonsolstice, closes [#1342](https://github.com/bookorbit/bookorbit/issues/1342)
* **scanner:** surface Book Dock finalize error details ([3aebf90](https://github.com/bookorbit/bookorbit/commit/3aebf902428d1a141ee46ca76317252912332c4d)) by @neonsolstice, closes [#1367](https://github.com/bookorbit/bookorbit/issues/1367)
* **server:** resolve hybrid torrent hashes in qbittorrent ([2dcf166](https://github.com/bookorbit/bookorbit/commit/2dcf1665725cd6e8aab164caa6181d2ba51fdada)) by @neonsolstice, closes [#1318](https://github.com/bookorbit/bookorbit/issues/1318)
* **server:** support nested subfolders in book dock discovery ([3a4d467](https://github.com/bookorbit/bookorbit/commit/3a4d467255201a48acb5e8f3291bcf74f60a44c4)) by @neonsolstice, closes [#1311](https://github.com/bookorbit/bookorbit/issues/1311)
* **users:** select exact content restriction matches ([cf40058](https://github.com/bookorbit/bookorbit/commit/cf40058cb6d6d4459d9068825e06c48a30cc2361)) by @neonsolstice, closes [#1295](https://github.com/bookorbit/bookorbit/issues/1295)


### Internationalization

* **client:** sync translations from Crowdin ([#1236](https://github.com/bookorbit/bookorbit/issues/1236)) ([5d0c2e6](https://github.com/bookorbit/bookorbit/commit/5d0c2e6e1494c94416a0c55cb1cb392accd7a445)) by @neonsolstice
* **client:** sync translations from Crowdin ([#1307](https://github.com/bookorbit/bookorbit/issues/1307)) ([b7e1e21](https://github.com/bookorbit/bookorbit/commit/b7e1e21d07417d6bd5ba1716e2cbae46c0e86c7c)) by @neonsolstice


### Security

* **books:** enforce per-file mutation permissions ([5303a50](https://github.com/bookorbit/bookorbit/commit/5303a50604703f857c2700080452a4ba314ea183)) by @neonsolstice, closes [#1293](https://github.com/bookorbit/bookorbit/issues/1293)
* **metadata:** scope catalog suggestions to visible books ([#1366](https://github.com/bookorbit/bookorbit/issues/1366)) ([26712eb](https://github.com/bookorbit/bookorbit/commit/26712eb02aa2c190c48e499ab46cf4aa54737b4e)) by @neonsolstice

---

**Docker**

```bash
docker pull ghcr.io/bookorbit/bookorbit:2.10.0
```

Multi-arch: `linux/amd64` and `linux/arm64`.


<!-- release-metadata -->

[Full diff](https://github.com/bookorbit/bookorbit/compare/v2.9.0...v2.10.0)

