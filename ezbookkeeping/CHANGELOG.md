- **\[Breaking\]**
    - API tokens no longer support creating / revoke other tokens, clearing data, updating user profile, configuring two-factor authentication, configuring external authentication or configuring application settings sync

- **\[Features\]**
    - Add an Add Transaction Button widget on mobile version

- **\[Enhancements\]**
    - Improved Italian translation (#685, thanks @albanobattistella)
    - Improved Spanish translation (#693, #694, thanks @abrugues)
    - Other user interface optimization

- **\[Bug Fixes\]**
    - Fix the OAuth 2.0 sign in button not appearing on the mobile sign in page when only OAuth 2.0 sign in is enabled and username sign in is disabled (#680, thanks @quentinmarois)
    - Fix an issue where scheduled transactions set to the nth last day of each month might not be created when the transaction time zone differs from the server time zone (#677, thanks @LudwigJMarx)
    - Fix the edit scope boundary unit tests failing in some time zones (#678, thanks @LudwigJMarx)