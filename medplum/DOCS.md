# Medplum 📝

This add-on runs the complete Medplum stack in one container. PostgreSQL data, Redis data, uploaded files, and the binary-storage signing key are persisted in the add-on configuration directory and included in cold backups. Medplum connects to both databases through Unix sockets; neither database listens on a TCP port.

> Always keep tested backups before applying upgrades or relying on the add-on for important medical records.

## Installation

1. Install and start the Medplum add-on. The first start can take several minutes while Medplum initializes its database.
2. Open **Medplum** in the Home Assistant sidebar and register the initial account.
3. After creating the accounts you need, consider turning off **Enable Registration**.

No host ports are published by default. Nginx serves the web app at `/web/` and the API at `/server/` beneath Home Assistant's current ingress URL. With the URL options left empty, the add-on discovers that URL automatically.

## URLs

The option names below match the Home Assistant interface.

Medplum uses absolute URLs for authentication and generated links. Leave both URL options empty for ingress. Explicit URLs are only needed for a custom direct-access or reverse-proxy configuration.

### Medplum API URL

The externally reachable URL of the Medplum API, including a trailing slash. When empty, this is the current ingress `/server/` URL.

Default: not set (empty).

### Medplum Web App URL

The externally reachable URL of the Medplum web app, including a trailing slash. When empty, this is the current ingress `/web/` URL.

Default: not set (empty).

Direct access on ports `8080` and `8103` can be enabled in the add-on Network settings as a fallback. Explicit direct URLs must include the mapped host ports. Do not use `localhost` unless the browser runs on the Home Assistant host itself.

## SSL

Ingress uses Home Assistant's existing connection and does not require a separate Medplum certificate. The SSL option applies only to the optional direct listeners. If direct SSL is enabled and no certificate is available in `/ssl`, the add-on generates a self-signed certificate.

## Email

Email is disabled by default. Account registration and local sign-in work without it, but invitations and password-reset messages require an SMTP provider.

To enable SMTP email:

1. Set **Email Provider** to `smtp`.
2. Configure **SMTP Host** and **SMTP Port**.
3. If your server requires authentication, configure **SMTP Username** and **SMTP Password**.
4. Set **Support Email** to the sender identity used for Medplum messages.

All email settings are optional and can remain undefined while email is disabled. Other providers and advanced settings can still be supplied through **Additional Environment Variables**, which requires Medplum's actual environment variable names.

## Other options

- **Enable Registration**: enables account registration in both the app and API. Turn it off after initial setup if you do not need open registration.
- **Database Storage Type**: PostgreSQL tuning profile for `HDD` or `SSD` storage; defaults to `SSD`.

## Backups and privacy

The add-on uses cold backups so PostgreSQL is stopped while data is copied. Backups contain medical data, uploaded files, database credentials, and signing keys; protect them accordingly. Redis contains cache and background-job state and is intentionally included.

This add-on does not by itself make a deployment compliant with healthcare regulations. Review access control, TLS, remote access, retention, and backup practices for your environment.

<!-- APP_AUTHOR_START -->
<hr>
<table>
  <tr>
    <td width="120" align="center" valign="bottom">
      <a href="https://github.com/fabio-garavini">
        <img src="https://www.gravatar.com/avatar/0237c9a30faa34297c155c9f794fe47e?s=112" alt="Fabio Garavini" width="112" height="112" style="border-radius: 50%;">
      </a>
    </td>
    <td valign="middle">
      <h3>App made by Fabio Garavini</h3>
      <p><sub>Help me create free and open-source Home Assistant apps for everyone!</sub></p>
      <a href="https://github.com/sponsors/fabio-garavini">
        <img src="https://img.shields.io/badge/support%20my%20work-GitHub%20Sponsors-fe8e86?style=for-the-badge&logo=github" alt="support my work">
      </a>
    </td>
  </tr>
</table>
<!-- APP_AUTHOR_END -->
