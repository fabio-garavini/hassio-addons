* BUGFIXES
  * Add event.schedule context for schedule actions task (#37320) (#37348)
  * Fix an issue where changing an organization's visibility caused problems when users had forked its repositories. (#37324) (#37344)
  * Use modern "git update-index --cacheinfo" syntax to support more file names (#37338) (#37343)
  * Fix URL related escaping for oauth2 (#37334) (#37340)
  * When the requested arch rpm is missing fall back to noarch (#37236) (#37339)
  * Fix actions concurrency groups cross-branch leak (#37311) (#37331)
  * Fix bug when accessing user badges (#37321) (#37329)
  * Fix AppFullLink (#37325) (#37328)
  * Fix container auth for public instance (#37290) (#37294)
  * Enhance GetActionWorkflow to support fallback references (#37189) (#37283)
  * Fix vite manifest update masking build errors (#37279) (#37310)
  * Fix Mermaid diagrams failing when node labels contain line breaks (#37296) (#37299)
  * Use TriggerEvent instead of Event in workflow runs API response for scheduled runs (#37288) #37360
  * Add URL to Learn more about blocking a user. (#37355) #37367
  * Fix button layout shift when collapsing file tree in editor (#37363) #37375
  * Fix org team assignee/reviewer lookups for team member permissions (#37365) #37391
  * Fix repo init README EOL (#37388) #37399
  * Fix: dump with default zip type produces uncompressed zip (#37401)#37402

Instances on **[Gitea Cloud](https://cloud.gitea.com)** will be automatically upgraded to this version during the specified maintenance window.