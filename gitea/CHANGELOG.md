* SECURITY
  * Bump toolchain to go1.25.5, misc fixes (#36082)
* ENHANCEMENTS
  * Add strikethrough button to markdown editor (#36087) (#36104)
  * Add "site admin" back to profile menu (#36010) (#36013)
  * Improve math rendering (#36124) (#36125)
* BUGFIXES
  * Check user visibility when redirecting to a renamed user (#36148) (#36159)
  * Fix various bugs (#36139) (#36151)
  * Fix bug when viewing the commit diff page with non-ANSI files (#36149) (#36150)
  * Hide RSS icon when viewing a file not under a branch (#36135) (#36141)
  * Fix SVG size calulation, only use `style` attribute (#36133) (#36134)
  * Make Golang correctly delete temp files during uploading (#36128) (#36129)
  * Fix the bug when ssh clone with redirect user or repository (#36039) (#36090)
  * Use Golang net/smtp instead of gomail's smtp to send email (#36055) (#36083)
  * Fix edit user email bug in API (#36068) (#36081)
  * Fix bug when updating user email (#36058) (#36066)
  * Fix incorrect viewed files counter if file has changed (#36009) (#36047)
  * Fix container registry error handling (#36021) (#36037)
  * Fix webAuthn insecure error view (#36165) (#36179)
  * Fix some file icon ui (#36078) (#36088)
  * Fix Actions `pull_request.paths` being triggered incorrectly by rebase (#36045) (#36054)
  * Fix error handling in mailer and wiki services (#36041) (#36053)
  * Fix bugs when comparing and creating pull request (#36166) (#36144)

Instances on **[Gitea Cloud](https://cloud.gitea.com)** will be automatically upgraded to this version during the specified maintenance window.