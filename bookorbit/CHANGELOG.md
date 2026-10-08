## Highlights

- **File naming with room to work**: A new two-column workbench puts each folder on its own line, previews resolved paths against realistic book names, and shows exactly how missing metadata changes the result. <!-- icon: FolderPen -->

<img width="800" alt="18" src="https://github.com/user-attachments/assets/8b6fe9d2-9116-4776-ad05-220fc3ffe106" />

<hr>

- **Approve and download books from your phone (iOS)**: Book Requests now brings the full workflow to your phone: scan an ISBN, submit or join a request, and follow its progress. Approvers can work through a dedicated queue, approve requests, compare release scores and contents, choose a download, and resolve imports, all directly in the app. <!-- icon: Download -->

<img width="300" alt="9" src="https://github.com/user-attachments/assets/56766d74-5bd8-4ba8-bb9f-2b4ac5275c0a" />
<img width="300" alt="10" src="https://github.com/user-attachments/assets/dccaf4dd-c7a0-40e7-9016-3b392a95e40d" />
<img width="300" alt="11" src="https://github.com/user-attachments/assets/63bdc333-fa23-46cc-8a04-c5a5ce442525" />

<hr>

- **Enhanced CarPlay experience (iOS)**: Continue listening to downloaded or streamed audiobooks, see progress within the current chapter, and control chapters and playback speed from your car. Smoother library browsing and reliable Read Along handoffs keep listening uninterrupted. <!-- icon: Car -->

<img width="600" alt="2" src="https://github.com/user-attachments/assets/661cd479-4a29-4094-bf8a-07226b548bd5" />
<img width="600" alt="3" src="https://github.com/user-attachments/assets/1e9c81c4-2e3a-4086-b966-20953ad1b9ce" />

<hr>

- **A Notebook for every book and your library (iOS)**: Gather highlights, notes, bookmarks, reviews, and a reading journal in one place, with stars, named colors, search, daily review, On this day, and Recently Deleted. This server release adds the sync and library-wide Notebook support. <!-- icon: NotebookPen -->

<img width="300" alt="7" src="https://github.com/user-attachments/assets/4abb2ce7-0d60-48ba-be35-a4d38a3b22be" />
<img width="300" alt="8" src="https://github.com/user-attachments/assets/789997f3-1c60-4694-bcb0-3d32d1e4876f" />

<hr>

- **Your reading history as a timeline (iOS)**: Follow sessions from every device by day, see milestones and highlights in context, revisit past reading positions, and open Listening History from the audiobook player. <!-- icon: History -->

<img width="300" alt="5" src="https://github.com/user-attachments/assets/6a836caa-0628-462e-b9e7-4324e73f98c5" />
<img width="300" alt="6" src="https://github.com/user-attachments/assets/8602fef7-3c13-4766-8b13-ed903a5b6b60" />

<hr>

- **Enhanced book uploads (iOS)**: A redesigned upload experience lets you review book covers and metadata, confirm destination libraries, and track batch progress. Add formats to existing books, upload from the share sheet, or drag and drop files on iPad. <!-- icon: Upload -->

<img width="300" alt="16" src="https://github.com/user-attachments/assets/cdd037a2-0f9b-4b4c-b505-5bac4e6b8242" />
<img width="300" alt="15" src="https://github.com/user-attachments/assets/536c50c3-7964-4ab5-93d9-1f46bea2b775" />
<img width="300" alt="14" src="https://github.com/user-attachments/assets/c5c6ad30-798c-4d07-8a42-4c5fb8a40b79" />

<hr>

- **Smoother ebook reading (iOS)**: Pages slide under your finger, streamed books prefetch neighboring chapters, and chapter transitions continue in one motion. Choose side taps, one-handed taps, or swipe-only navigation, and show the page turns remaining in the chapter. <!-- icon: BookOpen -->
- **More control over Read Along (iOS)**: Choose whether narration autoplays, use Voice Boost for steadier speech volume, and keep narration positions aligned across devices. Native KEPUB reading preserves shared EPUB positions for highlights and bookmarks. <!-- icon: BookAudio -->
- **Tune PDFs and comics over the page (iOS)**: Compact tune bars adjust layout, zoom, page appearance, and comic turns without covering the document. Comics gain sliding page turns and next-issue continuation; recently opened streamed PDFs reopen faster. <!-- icon: PanelsTopLeft -->
- **Precise Kobo and KOReader sync**: Native KEPUB books now exchange progress, bookmarks, and highlights with Kobo. KOReader keeps exact reading positions and recognizes books delivered through Kobo conversion or audio removal. <!-- icon: RefreshCw -->

<hr>

### Features

* **library:** auto-select sole upload destinations ([e767358](https://github.com/bookorbit/bookorbit/commit/e767358443419253eeed782518d6fc4f675d69fd)) by @neonsolstice, closes [#1362](https://github.com/bookorbit/bookorbit/issues/1362)
* **settings:** redesign file naming as a two-column workbench ([4701412](https://github.com/bookorbit/bookorbit/commit/4701412ef22368cafa3c10b5056e7551edb66f2b)) by @neonsolstice


### Bug Fixes

* **books:** honour the metadata score sort when series are collapsed ([f8c8ecf](https://github.com/bookorbit/bookorbit/commit/f8c8ecf99af63b32d0e0241f8f6fce7673d84458)) by @neonsolstice, closes [#1638](https://github.com/bookorbit/bookorbit/issues/1638)
* **books:** retain records when content deletion fails ([2dddf9b](https://github.com/bookorbit/bookorbit/commit/2dddf9b89fcfd696365bb5aeba1e2efa036079fc)) by @neonsolstice, closes [bookorbit/bookorbit-ios-support#42](https://github.com/bookorbit/bookorbit/issues/42)
* **client:** constrain request title column width ([ef2bcce](https://github.com/bookorbit/bookorbit/commit/ef2bcced3bbca7e603b052983de957e0eb46ddbd)) by @neonsolstice, closes [#1613](https://github.com/bookorbit/bookorbit/issues/1613)
* **kobo:** preserve koreader matching for converted downloads ([5875656](https://github.com/bookorbit/bookorbit/commit/58756565fc6f4d25512da0f16e54e722afb2e7a7)) by @neonsolstice, closes [#1697](https://github.com/bookorbit/bookorbit/issues/1697)
* **kobo:** sync native kepub progress and canonical positions ([1abf2f5](https://github.com/bookorbit/bookorbit/commit/1abf2f58cae85bcb98e08fde80201777e4af256e)) by @neonsolstice, closes [bookorbit/bookorbit-ios-support#36](https://github.com/bookorbit/bookorbit/issues/36)
* **library:** include saved settings in scoped library summaries ([df926fd](https://github.com/bookorbit/bookorbit/commit/df926fdf0f71a06a88bfbe60bf41e71c17024608)) by @neonsolstice, closes [#1664](https://github.com/bookorbit/bookorbit/issues/1664)
* **library:** refuse renames into a folder another book holds ([4ca7128](https://github.com/bookorbit/bookorbit/commit/4ca7128b76e093f47c7fbef5d54536caa6ce87c1)) by @neonsolstice, closes [#1682](https://github.com/bookorbit/bookorbit/issues/1682)
* **opds:** expose public collections to other users ([019c432](https://github.com/bookorbit/bookorbit/commit/019c4322623a1b4f338084f27891da72367f89c4)) by @neonsolstice, closes [#1701](https://github.com/bookorbit/bookorbit/issues/1701)
* **reader:** fall back to the declared narration length for read-along EPUBs ([068a62b](https://github.com/bookorbit/bookorbit/commit/068a62b7abfa780bac21fb7563ab454285e376b4)) by @neonsolstice, closes [#1619](https://github.com/bookorbit/bookorbit/issues/1619)
* **reader:** keep oversized comic pages within scroll bounds ([85927fb](https://github.com/bookorbit/bookorbit/commit/85927fb1180a06972e34f5635058aaadf2adeb1b)) by @neonsolstice, closes [#1610](https://github.com/bookorbit/bookorbit/issues/1610)
* **reader:** persist audiobook progress on insecure origins ([951f3b7](https://github.com/bookorbit/bookorbit/commit/951f3b702d667b068296ffa464be53a1857b8d36)) by @neonsolstice, closes [#1608](https://github.com/bookorbit/bookorbit/issues/1608)
* **reader:** preserve exact positions when syncing with koreader ([#1694](https://github.com/bookorbit/bookorbit/issues/1694)) ([e253f7f](https://github.com/bookorbit/bookorbit/commit/e253f7ffca48af840a376e74712c0113d8b4fba4)) by @neonsolstice, closes [#1621](https://github.com/bookorbit/bookorbit/issues/1621) [#1288](https://github.com/bookorbit/bookorbit/issues/1288)
* **settings:** add optional dashboard shelf sync ([cb8d1e3](https://github.com/bookorbit/bookorbit/commit/cb8d1e3b2bf88be23a3d46a62387ee835c27c8a0)) by @neonsolstice, closes [#1646](https://github.com/bookorbit/bookorbit/issues/1646)
* **stats:** invalidate reading caches after committed changes ([e6ea5bd](https://github.com/bookorbit/bookorbit/commit/e6ea5bd77e7e55ca233b96f25755ce2666dcdf12)) by @neonsolstice, closes [#1695](https://github.com/bookorbit/bookorbit/issues/1695)


### Internationalization

- **client:** sync translations from Crowdin (#1611, #1632, #1677) ([2855dbb](https://github.com/bookorbit/bookorbit/commit/2855dbb8a39d20bf711f01772e2678ef0625dd63), [60fcbd9](https://github.com/bookorbit/bookorbit/commit/60fcbd9410df014af0391f68f00b4b1b48411d85), [1adab58](https://github.com/bookorbit/bookorbit/commit/1adab58d4be8475b5c6cc334623a6e79da886781))


### Security

* **deps:** patch container dependency vulnerabilities ([324059e](https://github.com/bookorbit/bookorbit/commit/324059ef16d425b663d386ae62f2418e84bd27b9)) by @neonsolstice
* **deps:** upgrade busboy to fix multipart denial of service ([8fecae9](https://github.com/bookorbit/bookorbit/commit/8fecae94e65204618fc4db846da19c4e0007e4aa)) by @neonsolstice

---

**Docker**

```bash
docker pull ghcr.io/bookorbit/bookorbit:3.3.0
```

Multi-arch: `linux/amd64` and `linux/arm64`.
