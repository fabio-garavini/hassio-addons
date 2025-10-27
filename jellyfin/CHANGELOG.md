# :rocket: Jellyfin Server 10.11.1

We are pleased to announce the latest stable release of Jellyfin, version 10.11.1!

This minor release brings several bugfixes to improve your Jellyfin experience.

As always, please ensure you stop your Jellyfin server and take a full backup before upgrading!

You can find more details about and discuss this release [on our forums](https://forum.jellyfin.org/t-new-jellyfin-server-web-release-10-11-1).

## Changelog (26)

### 📈 General Changes
* Improve symlink handling [PR #15209], by @Shadowghost
* Fix pagination and sorting for folders [PR #15187], by @Shadowghost
* Update dependency z440.atl.core to 7.6.0 [PR #15225], by @Bond-009
* Add season number fallback for OMDB and TMDB plugins [PR #15113], by @ivanjx
* Skip invalid database migration [PR #15212], by @crobibero
* Skip directory entry when restoring from backup [PR #15196], by @crobibero
* Skip extracted files in migration if bad timestamp or no access [PR #15220], by @JJBlue
* Normalize paths in database queries [PR #15217], by @theguymadmax
* Only save chapters that are within the runtime of the video file [PR #15176], by @CeruleanRed
* Filter plugins by id instead of name [PR #15197], by @crobibero
* Play selected song first with instant mix [PR #15133], by @theguymadmax
* Fix Has(Imdb/Tmdb/Tvdb)Id checks [PR #15126], by @MBR-0001
* Skip extracted files in migration if bad timestamp or no access [PR #15112], by @Shadowghost
* Clean up BackupService [PR #15170], by @crobibero
* Initialize transcode marker during startup [PR #15194], by @crobibero
* Make priority class setting more robust [PR #15177], by @gnattu
* Lower required tmp dir size to 512MiB [PR #15098], by @Bond-009
* Fix XmlOutputFormatter [PR #15164], by @crobibero
* Make season paths case-insensitive [PR #15102], by @theguymadmax
* Fix LiveTV images not saving to database [PR #15083], by @theguymadmax
* Speed-up trickplay migration [PR #15054], by @Shadowghost
* Optimize WhereReferencedItemMultipleTypes filtering [PR #15087], by @theguymadmax
* Fix videos with cropping metadata are probed as anamorphic [PR #15144], by @nyanmisaka
* Reject stream copy of HDR10+ video if the client does not support HDR10 [PR #15072], by @nyanmisaka
* Log the message more clear when network manager is not ready [PR #15055], by @gnattu
* Skip invalid keyframe cache data [PR #15032], by @Shadowghost