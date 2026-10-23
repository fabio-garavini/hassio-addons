## paperless-ngx 3.3.4

> [!NOTE]
> This security maintenance release updates dependencies to address the [eMudhra / emSign CA certificate security incident](https://discuss.python.org/t/information-for-python-users-regarding-emudhra-emsign-ca-certificate-security-incident/109576) and security vulnerabilities in Pillow and aiohttp. These issues affect third-party dependencies rather than Paperless-ngx’s own code. Updating is recommended for all users.

### All App Changes

- Chore: Update certifi for eMudhra CA incident @shamoon ([#14533](https://github.com/paperless-ngx/paperless-ngx/pull/14533))
- Chore: Update uv to 0.13 for the eMudhra CA fixes [@stumpylog](https://github.com/stumpylog) ([#14532](https://github.com/paperless-ngx/paperless-ngx/pull/14532))
