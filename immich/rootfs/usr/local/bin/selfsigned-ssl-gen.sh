#!/usr/bin/with-contenv bashio
# shellcheck shell=bash

# Check for required arguments
if [ $# -ne 2 ]; then
  bashio::log.error "[selfsigned-ssl-gen.sh] missing: <certfile> <keyfile>"
  exit 1
fi

certfile="$1"
keyfile="$2"

if [[ -d "/data/ssl" ]]; then
  rm -rf /data/ssl
fi

mkdir -p /data/ssl
if ! hostname="$(bashio::info.hostname 2>/dev/null)"; then
  hostname="homeassistant.local"
fi
tmp_openssl_cfg=$(mktemp)
trap 'rm -f "$tmp_openssl_cfg"' EXIT

cat > "$tmp_openssl_cfg" <<EOF
[req]
default_bits       = 4096
prompt             = no
default_md         = sha256
req_extensions     = req_ext
distinguished_name = dn

[dn]
CN = ${hostname}

[req_ext]
subjectAltName = @alt_names

[alt_names]
DNS.1 = localhost
DNS.2 = ${hostname}
EOF

if ! openssl req -x509 -nodes -days 3650 \
    -newkey rsa:4096 \
    -keyout "$keyfile" \
    -out "$certfile" \
    -config "$tmp_openssl_cfg" \
    -extensions req_ext; then

  # Certificate gen failed
  bashio::log.error "OpenSSL certificate generation failed"
  exit 1
fi

bashio::log.info "New self-signed certificate generated"