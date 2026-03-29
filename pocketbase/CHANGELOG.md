> _To update the prebuilt executable you can run `./pocketbase update`._

- Fixed OAuth2 client secret reset when serializing a cached collection model.

- Bumped all Go and npm deps.
    _This should also silence recent spam reports and security scanners regarding [CVE-2026-33809](https://www.cve.org/CVERecord?id=CVE-2026-33809) (it is not an issue in PocketBase because we don't support TIFF thumbs)._
