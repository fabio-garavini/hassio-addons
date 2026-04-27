## [0.28.0](https://github.com/usememos/memos/compare/v0.27.1...v0.28.0) (2026-04-27)

> This release improves SSO account handling by linking external provider identities to local Memos users instead of treating provider identifiers as local usernames. It also refreshes account and SSO management, adds memo time display controls, and includes several authentication and editor fixes.

## Breaking Change

- **Existing SSO users must link their identity again** - If you previously signed in through SSO, sign in once with your username and password after upgrading, then go to Account Settings to link your SSO identity. After the identity is linked, future SSO sign-ins will resolve to your existing Memos account.



### Features

* **auth:** add SSO user identity linkage ([#5883](https://github.com/usememos/memos/issues/5883)) ([d688914](https://github.com/usememos/memos/commit/d688914b2864791eeadbf21c882608632875f17c))
* **memos:** choose created or updated time for memos ([#5894](https://github.com/usememos/memos/issues/5894)) ([c268551](https://github.com/usememos/memos/commit/c268551a16929a2cbea6891951feff91926bba59))
* redesign account and SSO management ([#5886](https://github.com/usememos/memos/issues/5886)) ([ee17998](https://github.com/usememos/memos/commit/ee1799851e88674a6920c7a56d93428fcf95e662))


### Bug Fixes

* **auth:** harden authorization and username validation ([#5890](https://github.com/usememos/memos/issues/5890)) ([0fb83a7](https://github.com/usememos/memos/commit/0fb83a745dd5057ade45a3caad2c444af2239113))
* disable modal prop on DropdownMenu to prevent scroll disappearing ([#5861](https://github.com/usememos/memos/issues/5861)) ([d98f665](https://github.com/usememos/memos/commit/d98f6659190b8d1a8252e64549d9120d85e05d33))
* fix legacy username auth flows ([#5885](https://github.com/usememos/memos/issues/5885)) ([30c0611](https://github.com/usememos/memos/commit/30c0611a82f9254952a74650095105254f2940e4))
* **markdown:** split mixed task and bullet lists ([e2c6084](https://github.com/usememos/memos/commit/e2c60845eaff9a78b8d8eb3ccc9a067ef5690976))
* reduce list memo query overhead ([#5880](https://github.com/usememos/memos/issues/5880)) ([5063804](https://github.com/usememos/memos/commit/50638040f618b02b0c6d010e1d41554c75067517))
* **web:** preserve task checkbox state ([#5867](https://github.com/usememos/memos/issues/5867)) ([b5863d7](https://github.com/usememos/memos/commit/b5863d76be3cfbf3e0f8237d8e762122b5a0a679))