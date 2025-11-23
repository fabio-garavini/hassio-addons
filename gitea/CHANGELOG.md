* SECURITY
  * Upgrade golang.org/x/crypto to 0.45.0 (#35985) (#35988)
  * Fix various permission & login related bugs (#36002) (#36004)
* ENHANCEMENTS
  * Display source code downloads last for release attachments (#35897) (#35903)
  * Change project default column icon to 'star' (#35967) (#35979)
* BUGFIXES
  * Allow empty commit when merging pull request with squash style (#35989) (#36003)
  * Fix container push tag overwriting (#35936) (#35954)
  * Fix corrupted external render content (#35946) and upgrade golang.org/x packages (#35950)
  * Limit reading bytes instead of ReadAll (#35928) (#35934)
  * Use correct form field for allowed force push users in branch protection API (#35894) (#35908)
  * Fix team member access check (#35899) (#35905)
  * Fix conda null depend issue (#35900) (#35902)
  * Set the dates to now when not specified by the caller (#35861) (#35874)
  * Fix gogit ListEntriesRecursiveWithSize (#35862)
  * Misc CSS fixes (#35888) (#35981)
  * Don't show unnecessary error message to end users for DeleteBranchAfterMerge (#35937) (#35941)
  * Load jQuery as early as possible to support custom scripts (#35926) (#35929)
  * Allow to display embed images/pdfs when SERVE_DIRECT was enabled on MinIO storage (#35882) (#35917)
  * Make OAuth2 issuer configurable (#35915) (#35916)
  * Fix #35763: Add proper page title for project pages (#35773) (#35909)
  * Fix avatar upload error handling (#35887) (#35890)
  * Contribution heatmap improvements (#35876) (#35880)
  * Remove padding override on `.ui .sha.label` (#35864) (#35873)
  * Fix pull description code label background (#35865) (#35870)

Instances on **[Gitea Cloud](https://cloud.gitea.com)** will be automatically upgraded to this version during the specified maintenance window.