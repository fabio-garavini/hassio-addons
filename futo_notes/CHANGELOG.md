# v0.5.1

Initial release of the FUTO Notes add-on.

- Bundles the FUTO Notes sync server (`v0.5.1`) built from source with `bun`
- Bundled PostgreSQL 16; data in `/data/postgres` (auto-provisioned on first boot)
- Encrypted blobs in `/data/blobs`
- The admin password from the add-on Configuration tab is hashed at startup
  using the server's own scrypt helper, never written to disk
- DB migrations auto-applied on every boot
- Supports `amd64` and `aarch64`
- Default host port `3005` → container port `3000`
- `TRUST_PROXY` enabled by default so the login rate-limit keys on the real
  client IP behind Home Assistant's proxy
