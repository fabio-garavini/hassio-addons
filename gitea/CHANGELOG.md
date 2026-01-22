* SECURITY
  * Release attachments must belong to the intended repo (#36347) (#36375)
  * Fix permission check on org project operations (#36318) (#36373)
  * Clean watches when make a repository private and check permission when send release emails (#36319) (#36370)
  * Add more check for stopwatch read or list (#36340) (#36368)
  * Fix openid setting check (#36346) (#36361)
  * Fix cancel auto merge bug (#36341) (#36356)
  * Fix delete attachment check (#36320) (#36355)
  * LFS locks must belong to the intended repo (#36344) (#36349)
  * Fix bug on notification read (#36339) #36387

* ENHANCEMENTS
  * Add more routes to the "expensive" list (#36290)
  * Make "commit statuses" API accept slashes in "ref" (#36264) (#36275)

* BUGFIXES
  * Fix markdown newline handling during IME composition (#36421) #36424
  * Fix missing repository id when migrating release attachments (#36389)
  * Fix bug when compare in the pull request (#36363) (#36372)
  * Fix incorrect text content detection (#36364) (#36369)
  * Fill missing `has_code` in repository api (#36338) (#36359)
  * Fix notifications pagination query parameters (#36351) (#36358)
  * Fix some trivial problems (#36336) (#36337)
  * Prevent panic when GitLab release has more links than sources (#36295) (#36305)
  * Fix stats bug when syncing release (#36285) (#36294)
  * Always honor user's choice for "delete branch after merge" (#36281) (#36286)
  * Use the requested host for LFS links (#36242) (#36258)
  * Fix panic when get editor config file (#36241) (#36247)
  * Fix regression in writing authorized principals (#36213) (#36218)
  * Fix WebAuthn error checking (#36219) (#36235)

Instances on **[Gitea Cloud](https://cloud.gitea.com)** will be automatically upgraded to this version during the specified maintenance window.