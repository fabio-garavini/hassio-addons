const fs = require('node:fs');
const path = require('node:path');

const configuredBaseUrl = process.env.MEDPLUM_BASE_URL || 'http://localhost:8103/';
const baseUrl = configuredBaseUrl.includes('/api/hassio_ingress/')
  ? '${window.location.origin}' + new URL(configuredBaseUrl).pathname
  : configuredBaseUrl;

const replacements = {
  __MEDPLUM_BASE_URL__: baseUrl,
  __MEDPLUM_CLIENT_ID__: process.env.MEDPLUM_CLIENT_ID || '',
  __GOOGLE_CLIENT_ID__: process.env.GOOGLE_CLIENT_ID || '',
  __RECAPTCHA_SITE_KEY__: process.env.RECAPTCHA_SITE_KEY || '',
  __MEDPLUM_REGISTER_ENABLED__: process.env.MEDPLUM_REGISTER_ENABLED || 'true',
  __MEDPLUM_AWS_TEXTRACT_ENABLED__: process.env.MEDPLUM_AWS_TEXTRACT_ENABLED || 'false',
};

function configure(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      configure(filename);
    } else if (entry.isFile()) {
      const original = fs.readFileSync(filename, 'utf8');
      let updated = original;
      for (const [placeholder, value] of Object.entries(replacements)) {
        updated = updated.split(placeholder).join(value);
      }

      // Nginx supplies the current ingress basename at response time. Direct
      // access replaces the same placeholder with an empty string.
      updated = updated.replace(
        /(\(\[\{path:`\*`,element:.*?\}\])\)/,
        "$1,{basename:'__MEDPLUM_ROUTER_BASENAME__'})"
      );
      updated = updated
        .split('window.location.pathname!==`/signin`&&window.location.pathname!==`/oauth`')
        .join('!window.location.pathname.endsWith(`/signin`)&&!window.location.pathname.endsWith(`/oauth`)');
      updated = updated
        .split('window.location.href=`/')
        .join('window.location.href=`__MEDPLUM_ROUTER_BASENAME__/');
      updated = updated
        .split('encodeURIComponent(window.location.pathname+window.location.search)')
        .join("encodeURIComponent(window.location.pathname.replace('__MEDPLUM_ROUTER_BASENAME__','').replace('__MEDPLUM_INGRESS_PATH__','')+window.location.search)");

      if (updated !== original) {
        fs.writeFileSync(filename, updated);
      }
    }
  }
}

configure('/var/www/medplum/assets');
console.log('Medplum app configuration complete.');
