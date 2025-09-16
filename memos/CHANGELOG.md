## Changelog

* 1f88e3e2d2866134fb15ca2e6db8ae87db16a039 chore: Docker hyperlink in README (#4887)
* 931ddb7c1c94ffa7a8a37cc3d19fae6651de6064 chore: add a new LOG_STACKTRACES option (#4973)
* c76ffb0fe4dc5edf0b1e71bca24620df7cdc0cc5 chore: adds a check to only query reactions when there are actual memos (#4984)
* 1fcafd807eb5f54e5ee1bf152fc7970eb9122ed0 chore: enable memo comments by default
* 13957472ebb28b1c5f196c5a131ae28d0ae6120c chore: merge visibility selector into save button
* 01d3f2f86c153afaebb84132c53286a8fa6e7f83 chore: tweak dark theme
* 6005d0f3f786bce0a8e11cf8916b91c57e3b897f chore: use MEMOS_INSTANCE_URL for "Copy Link" (#4930)
* 15c146cfc57f84f5525459b0f887ec92027ae500 feat(editor): create text-based autocompleting commands (#4971)
* 2c7eb2334351a9223420959d123bfe17d7cf85d5 feat(inbox): handles errors while fetching and adds possibility to delete items (#4908)
* 383553d3c83da5826ece1763c6654edb58970102 feat: add DOMPurify for sanitizing HTML content in CodeBlock component
* d86756f10432bfb45b07eb8a0ae046c13ffda13c feat: add an option to auto expand subtags in tree mode (#4994)
* 0f2390a0b7b9afbbd2580687169b2cc98034ac04 feat: add tooltips to editor buttons (#4934)
* f4bdfa28a00514e71644980bd6dcf588da9798cb feat: filter/method for reactions by content_id (#4969)
* c3d4f8e9d1f74eb29143f52bb0c2e5e9027c07e5 feat: implement user-specific SQL converter for filtering in user service
* b55904a4284b81891c105013f09b3cb7ded61ccc feat: support more filter factors
* fbcdf0fba7cd50de888132051793724819269edc fix update theme not saving (#5012)
* c4baba852750b2ccf9b00150a67e7f32c026ba55 fix(syntax-highlighting): adds missing CSS imports to CodeBlock.tsx (#4890)
* 4d6042e35f0a287bf68190379bbd07a861404a86 fix(tags): ensure JSON array elements are properly formatted in SQL queries (#4944)
* ba7dfb7d98a4bacac3c8ec84f5afb1562b1f5614 fix: OpenAPI Parameter Conflict in DeleteMemoTag Endpoint (#4985)
* a3add85c9593e769f3a40b786e6c752bd4635fe8 fix: Update SSO login flow to encode redirect_uri (#5006)
* 1f1add1a48003aa78d7929a8be3d0858568ba6f9 fix: add mime type check for file types (#4981)
* f4e23727bb402beb820646e2fa048b973f0e43a5 fix: avoid hiding reaction selector and keep it always shown for mobile (#5079)
* 8319516d1a0c7c83c6284b7696a7c42c8d1c0cd0 fix: boolean filters (#4966)
* aae7ec8d1f67c24adde1a402ca8e1ed16d805d79 fix: calendar filter (#4942)
* 71464779dd8ab9e0a888d0cc3c304f511bd26a16 fix: change itemCount into an Int64 (#4945)
* e724a7ef720efb2a2c150a63205bfead9568c313 fix: disable profiler in production mode (#4925)
* 6b507ff6002d32cb1f5782d7cd138cc354b9f891 fix: pinned shortcut comparison operators (#4987)
* 9f8921d3b92a144657566cb10cf24ad4bf7c11de fix: preference not being saved (#4980)
* 3fd305dce72ca7423a8e4fbf141e6f80335bceea fix: preferences being overwritten (#4990)
* 5ba81d629cdf5df37040c02b849b88e07b3d3ae9 fix: prevent default focus behavior on open and close events in sheet (#4998)
* 3427ae75baaccd8e0981d2f0aa849fba4e4c51f5 fix: resolve gRPC Gateway connection issue when server address is empty (#4968)
* 016efe50a288ce28c6b708c114da498962056c03 fix: update the link of Installation Guide (#5024)
* ed23cbc011a621a81c130b8ded889829c5e21daf refactor: memo filter
* fa2fa8a5d77477fa8ff786eb1556730b71e7ae3e refactor: remove call to db for parent memo name (#4947)
* e93f3cbb8b0105ec36b933647beeaee3e6134295 refactor: unify theme and apperance

## New Contributors
* @clnhlzmn made their first contribution in https://github.com/usememos/memos/pull/4930
* @einho made their first contribution in https://github.com/usememos/memos/pull/4945
* @varsnotwars made their first contribution in https://github.com/usememos/memos/pull/4947
* @chaoliu719 made their first contribution in https://github.com/usememos/memos/pull/4968
* @aarohee-he made their first contribution in https://github.com/usememos/memos/pull/4934
* @Stephan-P made their first contribution in https://github.com/usememos/memos/pull/4974
* @bcspragu made their first contribution in https://github.com/usememos/memos/pull/4973
* @twaslowski made their first contribution in https://github.com/usememos/memos/pull/4971
* @SaraVieira made their first contribution in https://github.com/usememos/memos/pull/4981
* @chojs23 made their first contribution in https://github.com/usememos/memos/pull/4987
* @amazingca made their first contribution in https://github.com/usememos/memos/pull/5006
* @giacomocerquone made their first contribution in https://github.com/usememos/memos/pull/5077

**Full Changelog**: https://github.com/usememos/memos/compare/v0.25.0...v0.25.1