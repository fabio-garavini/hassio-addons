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
        echo "Timezone set from $(cat /etc/timezone) to $TZ"
        ln -snf /usr/share/zoneinfo/"$TZ" /etc/localtime
        echo "$TZ" >/etc/timezone
    fi
fi

# Get PUID/PGID
PUID=${PUID:-911}
PGID=${PGID:-911}
BASH_SOURCE=${BASH_SOURCE:-$0}

add_user() {
    groupmod -o -g "$PGID" abc
    usermod -o -u "$PUID" abc
}

change_user() {
    if [ "$(id -u)" = $PUID ]; then
        echo "
        User uid:    $PUID
        User gid:    $PGID
        "
    elif [ "$(id -u)" = "0" ]; then
        # If container is started as root then create a new user and switch to it
        add_user
        chown -R $PUID:$PGID /app

        echo "Switching to dedicated user"
        exec gosu $PUID "$BASH_SOURCE" "$@"
    fi
}

init() {
    # $MEALIE_HOME directory
    cd /app

    # Activate our virtual environment here
    . /opt/mealie/bin/activate
}

load_secrets() {
    # Each of these environment variables will support a `_FILE` suffix that allows
    # for setting the environment variable through the Docker Compose secret
    # pattern.
    local -a secret_supported_vars=(
        "POSTGRES_USER"
        "POSTGRES_PASSWORD"
        "POSTGRES_SERVER"
        "POSTGRES_PORT"
        "POSTGRES_DB"
        "POSTGRES_URL_OVERRIDE"

        "SMTP_HOST"
        "SMTP_PORT"
        "SMTP_USER"
        "SMTP_PASSWORD"

        "LDAP_SERVER_URL"
        "LDAP_QUERY_PASSWORD"

        "OIDC_CONFIGURATION_URL"
        "OIDC_CLIENT_ID"
        "OIDC_CLIENT_SECRET"

        "OPENAI_BASE_URL"
        "OPENAI_API_KEY"
    )

    # If any secrets are set, prefer them over base environment variables.
    for var in "${secret_supported_vars[@]}"; do
        file_var="${var}_FILE"
        if [ -n "${!file_var}" ]; then
            export "$var=$(<"${!file_var}")"
        fi
    done
}

change_user
init
load_secrets

# Start API
HOST_IP=`/sbin/ip route|awk '/default/ { print $3 }'`

exec mealie