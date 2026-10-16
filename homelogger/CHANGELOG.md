## Highlights

### Set Currency

- Added server-wide currency configuration through `CURRENCY` env var.
- Added currency-aware formatting for appliance prices, task estimates, repairs, and maintenance costs.
- Added configured currency to `/api/health`.
- Preserved stored values without conversion, rounding, or rewriting.
- Added `server/.env.example` and expanded configuration documentation.
- Updated Docker Compose examples with currency configuration.

## Fixes and Improvements

- Improved SQLite database file creation to avoid race conditions.
- Hardened dependency installation in Docker and CI.
- Addressed SonarQube security findings.
- Updated frontend and backend dependencies.
- Improved README Docker and local development instructions.

## Configuration

Set currency in `server/.env` or your `docker-compose.yml` file.

HomeLogger defaults to `USD`. Currency must be a valid ISO 4217 code. Invalid values prevent server startup.

Currency changes affect display only. Existing stored amounts are not converted.

**As always, back up your data before upgrading**

**Full changes:** [`0.5.2...0.6.0`](https://github.com/masoncfrancis/homelogger/compare/0.5.2...0.6.0)
