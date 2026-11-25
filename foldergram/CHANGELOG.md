## Foldergram v1.4.0 - Video streaming, immersive Reels and more

This release makes Foldergram much more practical for large video libraries. You no longer need to generate full video previews before watching, Reels are easier to browse, and you can import captions and dates from files alongside your photos and videos.

### On-demand video streaming

New local videos now use streaming by default. Foldergram plays the original when possible and converts short sections on demand when the browser needs a compatible format.

- No need to generate a full MP4 preview for every new video.
- Streaming works across Home, Reels, posts, carousels and stories.
- Recently converted sections are cached, and the next video can be prepared in advance.
- Improved loading indicators keep video covers visible until playback starts, with a Retry option if playback fails.

**Already have a large collection of video previews?** Go to **Settings → Scan & Library → Switch to streaming and remove video previews**. Choose a source (or all local sources), review the estimated disk space savings, and confirm. Foldergram checks each original before removing its preview and keeps previews when those checks fail.

You can cancel or resume the operation. If you prefer saved previews, set `VIDEO_DELIVERY_MODE=previews` and restart Foldergram. You can also switch existing videos back to the preview-based mode from Settings.

### A better Reels experience

- Home videos now have a consistent 4:5 preview. Open one to browse Reels in a full-screen viewer, then close it to return to exactly where you left off in Home.
- Every Reel has its own URL, so you can bookmark it or send someone a direct link to it.
- Portrait, square and landscape videos fit naturally on different screen sizes, with improved desktop and mobile layouts.
- Each new Home Reel session has its own browsing queue. Fixed repeated videos, unexpected jumps to the beginning, and incorrect queues when navigating Back or Forward.

### Import captions and dates from metadata files

Foldergram now reads companion `.txt` and `.nfo` files alongside local media. For example, a file named `holiday.txt` can supply the caption and date for `holiday.jpg`.

Plain text, key-value fields, JSON and XML/NFO content are supported. This works with individual posts and carousels, and changes to metadata files are picked up on rescans.

Manually edited captions are preserved on ordinary rescans, and removing imported metadata restores the appropriate caption and date fallbacks.

### Other fixes and improvements

- Fixed HEIC photos saved with a JPEG extension (such as `IMG_1234.HEIC.jpeg`). These now follow the existing experimental HEIC import setting.
- Fixed HEIC media identity and story-folder ownership issues when HEIC imports are disabled.
- Acknowledged scan issues now stay dismissed across browsers, devices and server restarts. New issues still appear, and scan history is preserved.
- Improved keyboard navigation, video loading and playback recovery throughout the Reels experience.

### New website and Docker Hub availability

Foldergram has a new home at **[foldergram.app](https://foldergram.app/)**!

- [Documentation](https://docs.foldergram.app/)
- [Live demo](https://demo.foldergram.app/)
- [Docker Hub](https://hub.docker.com/r/sajjadalis/foldergram) (`sajjadalis/foldergram:1.4.0`)

Docker images continue to be published to GHCR. Releases now include automated verification and deployment of the public demo and documentation.

Thanks to [Simafri](https://www.simafri.com/en/managed-vps/) for sponsoring Foldergram's VPS hosting, and to the contributors who helped with this release, including [@hrishikeshpathak1009](https://github.com/hrishikeshpathak1009) and [@gugamorato-svg](https://github.com/gugamorato-svg).

### Before upgrading

- Existing videos keep their current playback mode. No saved previews are automatically removed by the upgrade.
- The first play or seek may take longer and use additional CPU when video conversion is needed. Temporary video segments are kept in a size-limited cache.
- Original media is not modified or deleted by switching playback modes. Immich playback is unchanged.

See the [video playback guide](https://docs.foldergram.app/media-processing#streaming-for-new-local-videos) for configuration and switching instructions.

**Full changelog:** https://github.com/foldergram/foldergram/compare/v1.3.3...v1.4.0
