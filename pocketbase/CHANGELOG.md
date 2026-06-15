> _To update the prebuilt executable you can run `./pocketbase update`._

- Removed `redirectURL` required validator from the code->token exchange endpoint (aka. `authWithOAuth2Code()`) ([#7734](https://github.com/pocketbase/pocketbase/issues/7734)).
    _Note that OAuth2 providers have their own validations and whether it is allowed to be empty or not could depend on the configured OAuth2 app (in most cases it is required and the redirect address must match with the initial value submitted with the authorization request)._

- Enabled sorting by the first _implicit_ presentable relation field ([#7735](https://github.com/pocketbase/pocketbase/discussions/7735)).

- Other minor UI fixes (tooltip clear on hovered element removal, optional before element sortable fix, etc.).

- Updated goja and the related `golang.org/x/*` dependencies (regex support improvements).