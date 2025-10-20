#!/command/with-contenv bashio
# shellcheck shell=bash

set -e

# Check for required arguments
if [ $# -ne 2 ]; then
    bashio::log.error "[check-ssl.sh] missing: <certfile> <keyfile>"
    exit 1
fi

bashio::log.debug "SSL Certificate update check"

declare renew_days=90

certfile="$1"
keyfile="$2"

if ! bashio::fs.file_exists "$certfile" || ! bashio::fs.file_exists "$keyfile"; then
    /usr/local/bin/selfsigned-ssl-gen.sh $certfile $keyfile
else
    enddate=$(openssl x509 -enddate -noout -in "$certfile" 2>/dev/null || true)
    if [ -n "$enddate" ]; then
        expiry_date=$(echo "$enddate" | cut -d= -f2 | sed 's/ GMT$//')
        expiry_ts=$(date -d "$expiry_date" +%s)
        now_ts=$(date +%s)
        days_left=$(( (expiry_ts - now_ts) / 86400 ))

        if [ "$days_left" -le "$renew_days" ]; then
            bashio::log.info "Self-signed cert expiring in $days_left days, regenerating..."
            /usr/local/bin/selfsigned-ssl-gen.sh $certfile $keyfile
        fi
    fi
fi