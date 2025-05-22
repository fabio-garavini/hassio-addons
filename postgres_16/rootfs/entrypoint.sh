#!/usr/bin/env bashio

set -e

if bashio::supervisor.ping; then
    bashio::log.blue \
        '-----------------------------------------------------------'
    bashio::log.blue " Add-on: $(bashio::addon.name)"
    bashio::log.blue " $(bashio::addon.description)"
    bashio::log.blue \
        '-----------------------------------------------------------'

    bashio::log.blue " Add-on version: $(bashio::addon.version)"
    if bashio::var.true "$(bashio::addon.update_available)"; then
        bashio::log.magenta ' There is an update available for this add-on!'
        bashio::log.magenta \
            " Latest add-on version: $(bashio::addon.version_latest)"
        bashio::log.magenta ' Please consider upgrading as soon as possible.'
    else
        bashio::log.green ' You are running the latest version of this add-on.'
    fi

    bashio::log.blue " System: $(bashio::info.operating_system)" \
        " ($(bashio::info.arch) / $(bashio::info.machine))"
    bashio::log.blue " Home Assistant Core: $(bashio::info.homeassistant)"
    bashio::log.blue " Home Assistant Supervisor: $(bashio::info.supervisor)"

    bashio::log.blue \
        '-----------------------------------------------------------'
    bashio::log.blue \
        ' Please, share the above information when looking for help'
    bashio::log.blue \
        ' or support in, e.g., GitHub, forums'
    bashio::log.blue \
        '-----------------------------------------------------------'
    bashio::log.green \
        ' Provided by: https://github.com/fabio-garavini/hassio-addons '
    bashio::log.blue \
        '-----------------------------------------------------------'
fi

bashio::log.info "Starting..."

bashio::log.info "Timezone set to $TZ"
ln -snf /usr/share/zoneinfo/"$TZ" /etc/localtime && echo "$TZ" >/etc/timezone

export POSTGRES_DB=$(bashio::config 'POSTGRES_DB')
export POSTGRES_HOST_AUTH_METHOD=$(bashio::config 'POSTGRES_HOST_AUTH_METHOD')
export POSTGRES_USER=$(bashio::config 'POSTGRES_USER')
export POSTGRES_PASSWORD=$(bashio::config 'POSTGRES_PASSWORD')
export POSTGRES_INITDB_ARGS=$(bashio::config 'POSTGRES_INITDB_ARGS')
export DB_STORAGE_TYPE=$(bashio::config 'DB_STORAGE_TYPE')

set +e

exec /usr/local/bin/immich-docker-entrypoint.sh postgres -c config_file=/etc/postgresql/postgresql.conf -c logging_collector=on -c log_rotation_size=10MB -c log_timezone="$TZ" -c timezone="$TZ"
