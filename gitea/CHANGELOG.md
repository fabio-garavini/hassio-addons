## [28.3.0] - 2026-11-01

### Enhancements

- Improve hover border of colored button groups (#39861) (#39899)
- *(webhook)* Mention release assets in notifications (#39631) (#39912)
- *(project)* Filter project milestones by linked issues (#39958) (#39984)

### Performance

- *(actions)* Cache successful runner token verification (#39934) (#39959)
- *(actions)* Is_reusable_caller index makes SQLite read nearly every job row (#40055) (#40064)
- Speed up the issue and pull request dashboards and fix table indices (#40001) (#40096)
- Speed up repository issue and pull request lists (#40114) (#40132)
- *(pull)* Load the repository once for all commit statuses (#39930) (#40135)

### Bug Fixes

- *(pulls)* Tolerate invalid stored review commit_id (#39849) (#39857)
- *(api)* Skip label lookup in ListIssues when no labels filter given (#39890) (#39893)
- Prevent system users from watching a repository (#39886) (#39895)
- Off-by-one errors in code comment patches (#39887) (#39904)
- Use clear error message when failed to parse git version (#39898) (#39903)
- *(packages)* Reject newline-bearing rubygems dependency metadata (#39782) (#39900)
- Enforce public-only token scope on more routes (#39690) (#39853)
- *(api)* Return 4xx for invalid fork repository names (#39909) (#39919)
- *(lfs)* Send the default branch as ref in batch download requests (#39891) (#39920)
- *(api)* Keep milestone due date when it is omitted in edit request (#39869) (#39921)
- *(oauth2)* Decode form-encoded client credentials in HTTP Basic auth (#39926) (#39931)
- *(issues)* Keep one row per issue when sorting by exclusive label order (#39364) (#39928)
- *(api)* Check unit read permission in issue sub-resource endpoints (#39885) (#39938)
- *(migrations)* Use cursor pagination for GitHub issue migration too (#39888) (#39941)
- *(feed)* Hide release notes in tags feed without releases access (#39944) (#39949)
- *(api)* Adding issue labels by name attaches both the repo and the org label (#39873) (#39951)
- *(actions)* Bound requested artifact retention (#39894) (#39946)
- *(actions)* Drop untrusted Content-Encoding from v1 artifact uploads (#39855) (#39996)
- Get valid UTF-8 for diff_hunk and composer readme (#39932) (#40000)
- *(diff)* Load both blobs of renamed files for diff rendering (#39969) (#39992)
- *(migrations)* Update gitea sdk to fix nil pointer panic (#39999)
- Fix OneDev migration with OneDev 16.8 and newer (#40017) (#40026)
- *(git)* Default to the gc maintenance strategy (#40022) (#40029)
- Replace null char with space for issue/comment content (#40014) (#40034)
- *(issue)* Prevent redirect to external tracker when built-in tracker is enabled (#39997) (#40031)
- *(markup)* Keep commit title emoji inside links (#39986) (#40032)
- *(repo)* Use the viewed ref's editorconfig in file view, blame and editor (#39973) (#40019)
- *(deps)* Update module golang.org/x/net to v0.62.0 [security] (#40050) (#40051)
- Size mermaid iframe by the diagram's aspect ratio (#40046) (#40052)
- *(feed)* Require code read access for the repo home branch feed (#39964) (#40067)
- Add missing access checks and size limits (#39942) (#40085)
- *(user)* Answer the follow of a bot user with the profile card (#39980) (#40086)
- *(repo)* Honor ALLOW_FORK_INTO_SAME_OWNER for organizations (#40025) (#40094)
- *(ui)* Ignore code line anchors below 1, show JS errors in vite dev mode (#39432) (#40087)
- *(pull)* Refuse review comments on locked pull requests (#39960) (#40084)
- *(api)* Answer 409 when repository files already exist on disk (#40095) (#40098)
- *(mail)* Preserve outer spacing in notification emails (#40104) (#40111)
- *(actions)* Run review-triggered workflows on the pull request head (#40099) (#40117)
- *(pull)* Respect max approvers in default merge message (#40118) (#40119)
- *(actions)* Don't pick up jobs of repos with Actions disabled (#40106) (#40122)
- Harden context user access scope (#39945) (#40115)
- *(projects)* Hide linked pull requests the viewer cannot read (#40016) (#40134)
- *(pull)* Keep review body in sync when its comment is edited (#40058) (#40133)
- *(auth)* Only auto-link the account the external identity points to (#40121) (#40137)
- List bot users in `gitea admin user list` and admin users API (#40060) (#40147)
- *(repo)* Don't get stuck generating contributor stats (#40125) (#40156)

### Documentation

- Clarify that the team packages permission covers all org packages (#39953) (#39956)

### Miscellaneous

- *(e2e)* Enable async clipboard testing pref in Firefox (#39838) (#39927)
