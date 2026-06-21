* BREAKING

  * fix(actions)!: require merged PR to bypass fork PR approval gate (#38010) (#38041)

* SECURITY
  * fix(hostmatcher): patch incorrect private list (#38170) (#38173)
  * fix: Various security fixes (#38103) (#38151)
  * fix: Various sec fixes (#38108) (#38147)
  * fix: allow git clone of private repos with anonymous code access (#38074) (#38146)
  * fix(auth): ignore stale OIDC external login links to organizations (#37875) (#38141)
  * fix(hostmatcher): block reserved IP ranges from external/private filters (#38039) (#38059)
  * fix(lfs): require Code-unit access for cross-repo LFS object reuse (#38006) (#38050)
  * fix(lfs): reject unknown SSH LFS sub-verbs to prevent auth bypass (#38008) (#38015)
  * fix: bound CODEOWNERS regex match time (#38011) (#38025)
  * fix: bound debian ParseControlFile to a single control stanza (#38044) (#38055)
  * fix(deps): update module golang.org/x/net to v0.55.0 [security] (#37813) (#37829)

* API
  * feat(api): add Link header in ListForks (#38052) (#38063)

* BUGFIXES
  * fix: Fix the panic when ssh remote lfs endpoint parsing failure (#38026) (#38158)
  * fix(api): nil pointer panic when filtering tracked times by a non-existent user (#38112) (#38115)
  * fix: keep literal "false" value displayed in workflow_dispatch choice dropdowns (#38080) (#38096)
  * fix: parse HEAD ref (#38119)
  * fix: git cmd (#38084) (#38087)
  * fix(releases): generate notes for initial tag (#37697) (#37986)
  * fix(actions): return 404 when job log blob is missing (#38003) (#38004)
  * fix(actions): exclude `workflow_call` from workflow trigger detection (#37894) (#37899)
  * fix(actions): keep action run title clickable when commit subject is a URL (#37867) (#37898)
  * fix(actions): reject workflow_dispatch for workflows without that trigger (#37660) (#37895)
  * fix(actions): ack re-sent `UpdateLog` finalize idempotently (#37885) (#37892)
  * fix: http content file render (#37850) (#37856)
  * fix(issues): clear stale ReviewTypeRequest when submitting pending review (#37809) (#37815)
  * fix: Fix issue target branch selection for non-collaborators (#36916) (#38164)

* BUILD
  * fix(deps): update `@playwright/test` to 1.60.0 (#38144)
  * ci: add `tools/ci-tools.ts` for the PR labeler workflow (#37831)
  * fix(build): swagger css import (#37801) (#37803)

Instances on **[Gitea Cloud](https://cloud.gitea.com)** will be automatically upgraded to this version during the specified maintenance window.