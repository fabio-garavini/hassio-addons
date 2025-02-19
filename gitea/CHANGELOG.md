# v1.23.4

- SECURITY
  - Enhance routers for the Actions variable operations (#33547) (#33553)
  - Enhance routers for the Actions runner operations (#33549) (#33555)
  - Fix project issues list and counting (#33594) #33619
- PERFORMANCES
  - Performance optimization for pull request files loading comments attachments (#33585) (#33592)
- BUGFIXES
  - Add a transaction to pickTask (#33543) (#33563)
  - Fix mirror bug (#33597) (#33607)
  - Use default Git timeout when checking repo health (#33593) (#33598)
  - Fix PR's target branch dropdown (#33589) (#33591)
  - Fix various problems (artifact order, api empty slice, assignee check, fuzzy prompt, mirror proxy, adopt git) (#33569) (#33577)
  - Rework suggestion backend (#33538) (#33546)
  - Fix context usage (#33554) (#33557)
  - Only show the latest version in the Arch index (#33262) (#33580)
  - Skip deletion error for action artifacts (#33476) (#33568)
  - Make actions URL in commit status webhooks absolute (#33620) #33632
  - Add missing locale (#33641) #33642
