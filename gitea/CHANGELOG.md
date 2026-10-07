## [28.1.0] - 2026-10-06

### Enhancements

- *(packages/npm)* Improve npm client compatibility (#39434) (#39522)

### Bug Fixes

- *(actions)* Keep runs order after auto refresh (#39479) (#39481)
- Npm route (#39488) (#39490)
- Copy new access token to clipboard (#39496) (#39499)
- *(markup)* Skip post-processing inside MathML (#39497) (#39502)
- *(markup)* Don't escape ambiguous characters in MathML (#39493) (#39505)
- Add missing checks to several API and web handlers (#39501) (#39507)
- Handle git branch name with special chars correctly (#39483) (#39515)
- Trace git command correctly (#39520) (#39524)
- *(git)* Reindex go-git storage when a concurrent repack removes packs (#39510) (#39534)
- *(oauth2)* Allow users to approve scope changes (#38942) (#39521)
- *(api)* Add index tiebreaker to commit status ordering (#39508) (#39525)
- *(git)* Avoid unnecessary timers during language stats (#39531) (#39535)
- Use READ COMMITTED transactions on MySQL and MariaDB (#39506) (#39537)
- *(markup)* Use installed math fonts for MathML in Chromium (#39491) (#39547)
- *(git)* Tolerate concurrent repacks in go-git storage (#39536) (#39556)
- Make image captcha work with csp (#39555)
- Use READ_COMMITTED_SNAPSHOT on MSSQL (#39512) (#39558)
- Make navbar stopwatch button can show popup (#39562)
- *(actions)* Restore pushes to protected branches (#39564) (#39567)
- *(api)* Allow bots with pending password changes (#39551) (#39566)
- *(user)* Restore organizations tab on user profile (#39577) (#39581)
- *(actions)* Return 401 for unregistered runner (#39578) (#39585)
- *(markup)* Link team mentions that use a different org name case (#39436) (#39588)
- *(httpcache)* Raw files return 304 after a change when the new commit is older (#39435) (#39591)
- *(git)* Return no submodule web link when the URL cannot be parsed (#39274) (#39592)
- *(pull)* Fetch PR head refs instead of pushing them (#39603) (#39607)
- Migrate broken team authorize access mode (#39579) (#39580)
- *(actions)* Refresh reusable caller status when children are skipped (#39589) (#39609)
- Make "edit pr title & target branch" get correct branch (#39612) (#39621)
- *(egress)* Expose more ranges as restricted rather than reserved (#39560) (#39624)
- *(web)* Normalize content for edit history diff and fix comment history dropdown (#39616) (#39627)
- Correct RemoveWithRetry error handling (#39619) (#39626)
- *(pull)* Refresh commits behind when an AGit pull request is updated (#39613) (#39625)
- *(models)* Chunk commit status queries to avoid SQLite expression depth limit (#39611) (#39638)
- Show "merge" form for empty PR (#39640) (#39645)

### Miscellaneous

- Return 401 for unregistered runner (#39599)
