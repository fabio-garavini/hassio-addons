# 5.2.18-ha0

- Bundle Medplum server and app, PostgreSQL 16, Redis, and Nginx.
- Serve the web app and API through Home Assistant ingress with no published host ports.
- Leave ingress URL options empty and discover the current ingress URL automatically.
- Default PostgreSQL tuning to SSD storage.
- Provide optional Support Email, Email Provider, and SMTP configuration fields.
- Keep PostgreSQL and Redis on Unix sockets and include data in cold backups.
