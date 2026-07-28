* SECURITY
  * fix(oauth2): enforce mandatory 2FA policy on OAuth2 authorize/grant endpoints (#38591) (#38606)

* API
  * fix(api): align Swagger schemas for UserSettings and TopicListResponse (#38590) (#38592)

* ENHANCEMENTS
  * enhance: improve diff contrast in light and dark themes (#37477) (#38574)

* BUGFIXES
  * fix: skip OIDC end-session after password login for OAuth2 users (#38439) (#38666)
  * fix: make Actions log parser support multiple line message encoding (#38659) (#38664)
  * fix(actions): use base branch ref for pull_request_target context (#38636) (#38657)
  * fix(actions): skip already-approved runs in `ApproveRuns` (#38653) (#38654)
  * fix: orgmode render include path (#38642) (#38645)
  * fix(actions): cancel tasks immediately when the runner stopped reporting (#38616) (#38644)
  * fix(issues): fix label bulk-load key and reduce log noise in LoadLabel (#38632) (#38643)
  * fix(actions): improve runner list status sorting, labels and task job links (#38586) (#38633)
  * fix(actions): correctness and hardening fixes (#38518) (#38631)
  * fix(repo): prevent double-write redirect collisions on dependency errors, fix ui (#38627) (#38628)
  * fix: delete repo-scoped rows of seven more tables when deleting a repository (#38534) (#38618)
  * fix(webhook): remove slack channel name check (#38608) (#38612)
  * fix: download dropdown menu clipped on the branches page (#38604) (#38609)
  * fix(project): prevent database mutations on invalid MoveIssues payload (#38600) (#38602)
  * fix(actions): make SingleWorkflow.Marshal round-trip multi-line run blocks (stop silent job stranding) (#38520) (#38599)
  * fix(file-tree): handle submodule links and missing view container (#38033) (#38589)
  * fix(actions): fail unexpandable reusable workflow callers and decouple the job emitter's cross-run processing (#38565) (#38587)
  * fix: keep serving valid ACME cert when renewal fails at startup (#38554) (#38583)
  * fix: branch protection user list (#38570) (#38584)
  * fix(pulls): respect diff.orderFile in diff file tree (#38566) (#38578)
  * fix(issue): make issue action (issue list batch operation) elements have correct attributes (#38575) (#38580)
  * fix(actions): support `matrix` when evaluating workflow `if` expression (#38474) (#38557)
  * fix(actions): align status icon span for Safari rendering (#38558) (#38562)
  * fix: revert git clone http redirection forbidden (#38530) (#38545)
  * fix: clean up orphaned user-keyed tables in deleteUser (#38511) (#38514)
  * fix(actions): coerce workflow_dispatch boolean inputs to native types (#38472) (#38521)
  * fix: make the merge box button red if some checks fail (#38508) (#38516)
  * fix(pull): sign the commit when updating a branch by merge (#38441) (#38499)
  * fix: make commit message merge correctly (#38490) (#38502)
  * fix(actions): explain why a blocked or waiting job has not started (#38476) (#38498)
  * fix(actions): make `cancelled()` work in job `if` evaluation (#38495) (#38497)
  * fix(actions): show retention info on hover for expired artifacts (#38477) (#38493)
  * fix(actions): group reusable-workflow matrix legs in the workflow graph (#38475) (#38492)
  * fix: full file highlighting for git diff with CR char (#38484) (#38491)
  * fix(packages): serve noarch Alpine index for any requested architecture (#38479) (#38486)
  * fix: 500 error when updating user visibility (#38480) (#38483)
  * fix(actions): make job list item fully clickable (#38462) (#38471)
  * fix: mail template for push event (#38467) (#38468)
  * fix: make "test push webhook" always work (#38425) (#38455)
  * fix(actions): prevent bulk actions from affecting all runners (#38453) (#38457)
  * fix(org): align follow button and wrap description (#38448) (#38454)
  * fix(actions): populate `github.event` for scheduled runs (#38446) (#38452)

* MISC
  * refactor: git patch apply (#38637) (#38638)

Instances on **[Gitea Cloud](https://cloud.gitea.com)** will be automatically upgraded to this version during the specified maintenance window.