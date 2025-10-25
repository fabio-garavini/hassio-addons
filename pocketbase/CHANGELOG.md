> _To update the prebuilt executable you can run `./pocketbase update`._

- Display presentable multiple `relation` fields ([#7260](https://github.com/pocketbase/pocketbase/issues/7260)).

- Support Ed25519 in the optional OIDC `id_token` signature validation ([#7252](https://github.com/pocketbase/pocketbase/issues/7252); thanks @shynome).

- Added `ApiScenario.DisableTestAppCleanup` optional field to skip the auto test app cleanup and leave it up to the developers to do the cleanup manually ([#7267](https://github.com/pocketbase/pocketbase/discussions/7267)).

- Added `FileDownloadRequestEvent.ThumbError` field that is populated in case of a thumb generation failure (e.g. unsupported format, timing out, etc.), allowing developers to reject the thumb fallback and/or supply their own custom thumb generation ([#7268](https://github.com/pocketbase/pocketbase/discussions/7268)).

- ⚠️ Disallow client-side filtering and sorting of relations where the collection of the last targeted relation field has superusers-only List/Search API rule to further minimize the risk of eventual side-channel attack.
    _This should be a non-breaking change for most users, but if you want the old behavior please open a Q&A discussion with details about your use case to evaluate making it configurable._
    _Note also that as mentioned in the "Security and performance" section of [#4417](https://github.com/pocketbase/pocketbase/discussions/4417) and [#5863](https://github.com/pocketbase/pocketbase/discussions/5863), the easiest and recommended solution to protect security sensitive fields (tokens, codes, passwords, etc.) is to mark them as "Hidden" (aka. make them non-API filterable). A better out of the box handling will be available with the planned fields internals refactoring together with the already started UI rewrite and plugins support._

- Regenerated JSVM types and updated npm and Go deps.