#!/bin/bash
# Start Backend API
set -e

echo "  Loading env variables:"

OPTIONS_SOURCE=/data/options.json

jq -r 'keys[]' "${OPTIONS_SOURCE}" | while read -r KEY; do
    # export key
    value=$(jq -r --arg key "$KEY" '.[$key]' "${OPTIONS_SOURCE}")

    # Continue for single values
    line="${KEY}=${value}"

    # log redacted config
    case "$KEY" in
        *PASS*|*SECRET*|*KEY*)
            echo "    ${KEY}=******"
            ;;
        *)
            echo "    $line"
            ;;
    esac

    export "$line"

    # set .env
    echo "$line" >> /.env || true

    # set /etc/environment
    echo "$line" >> /etc/environment

    # For s6
    if [ -d /var/run/s6/container_environment ]; then
        printf "%s" "$value" > /var/run/s6/container_environment/"${KEY}"
    fi
    echo "export $line" >> ~/.bashrc
done

if [ -n "$TZ" ] && [ -f /etc/localtime ]; then
    if [ -f /usr/share/zoneinfo/"$TZ" ]; then
        ln -snf /usr/share/zoneinfo/"$TZ" /etc/localtime
        echo "$TZ" >/etc/timezone
    fi
fi

# $MEALIE_HOME directory
cd /app

# Activate our virtual environment here
. /opt/mealie/bin/activate

exec mealie