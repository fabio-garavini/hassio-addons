* SECURITY  
  * Fix: update collaborator access mode and httpsign (#38894, #38862) (#38895)
  * Refactor: external render (#38885) (#38898)
  * Fix(actions): resolve pull_request_target reusable workflows at the base commit (#38886) (#38897)
  * Refactor: markup render (#38864) (#38869)
  * Fix(deps): update dependency mermaid to v11.16.1 (#38816)
  * Fix(auth): set WebAuthn user verification per request (#38805) (#38810)
  * Fix: render highlight language (#38793) (#38795)

* ENHANCEMENTS
  * enhance: add missing npm package metadata properties (#38826) (#38831)

* BUGFIXES
  * fix(actions): keep github.event.inputs as strings for workflow_dispatch (#38899) (#38908)
  * fix(actions): let a rerun of selected jobs read the previous attempt's artifacts (#38857) (#38901)
  * fix(lfs): accept successful transfer responses (#38866) (#38875)
  * fix(packages): ignore nested Package.swift (#38788) (#38836)
  * fix: drop newline-bearing member names in arch ParsePackage (#38102) (#38830)
  * fix(storage): fix Azure Blob dump failing with file does not exist (#38814) (#38828)
  * fix(migration): migration deletion returned json redirection (#38796) (#38825)
  * fix(ui): change underlines to default browser style (#38819) (#38823)
  * fix(actions): allow cancelling runs without running jobs (#35842) (#38812)
  * fix(actions): evaluate each `${{ }}` part on its own (#38754) (#38797)
  * fix(actions): write an action task report in one transaction (#38792) (#38794)
  * fix: markup link (#38764) (#38765)
  * fix: set a minio part size when the content size is unknown (#38753) (#38755)
  * fix: bad path escape in subpath archive download (#38749) (#38750)
  * fix: remove the pull merge box from UI when the refreshed page doesn't contain it (#38742) (#38744)
  * fix(markdown): fix double strikethough on code (#38707) (#38729)
  * fix(lfs): failed upload deletes a concurrent upload's meta object (#38693) (#38722)
  * fix: correct full url when using sub-path (#38712) (#38716)
  * fix: avoid markup render panic (#38698) (#38703)
  * fix(ui): too many participants shown in commit avatar stacks (#38689) (#38700)
  * fix: support HEAD requests on Alpine registry APKINDEX.tar.gz (#38686) (#38688)
  * fix(migrations): use all configured GitHub tokens (#38841) (#38846)

Instances on **[Gitea Cloud](https://cloud.gitea.com)** will be automatically upgraded to this version during the specified maintenance window.