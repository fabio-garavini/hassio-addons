> _To update the prebuilt executable you can run `./pocketbase update`._

- Added `Accept-Encoding: identity` to the S3 requests per the suggestion in [#7523](https://github.com/pocketbase/pocketbase/issues/7523).
    _This should help fixing the 0-bytes file response when S3 API compression is enabled._

- Bumped min Go GitHub action version to 1.26.0 _(it comes with minor [GC performance improvements](https://go.dev/doc/go1.26#runtime))_.

- Other minor fixes _(updated `modernc.org/sqlite` to v1.45.0, updated `goja_nodejs` adding `Buffer.concat`, updated the arguments of `app.DeleteTable(...)`, `app.DeleteView(...)` and other similar methods to make it more clear that they are dangerous and shouldn't be used with untrusted input, etc.)_.