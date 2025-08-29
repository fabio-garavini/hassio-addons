#!/bin/bash bashio
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
ln -snf /usr/share/zoneinfo/"$TZ" /etc/localtime && echo "$TZ" > /etc/timezone

CONFIG_PATH=/data/options.json

if bashio::config.true 'ssl'; then
    bashio::config.require.ssl

    export PROTO='https'
    export PORT=$JELLYFIN_InternalHttpsPort

    export JELLYFIN_CertificatePath="/jellyfin.p12"
    export JELLYFIN_EnableHttps=true
    export JELLYFIN_RequireHttps=$(bashio::config 'require_https')

    rm -f $JELLYFIN_CertificatePath

    openssl pkcs12 -export -out $JELLYFIN_CertificatePath -inkey /ssl/$(bashio::config 'keyfile') -in /ssl/$(bashio::config 'certfile') -passin pass: -passout pass:

else
    export PROTO='http'
    export PORT=$JELLYFIN_InternalHttpPort
    export JELLYFIN_EnableHttps=false
    export JELLYFIN_RequireHttps=false
fi

if bashio::config.has_value 'JELLYFIN_PublishedServerUrl'; then
    export JELLYFIN_PublishedServerUrl=$(bashio::config 'JELLYFIN_PublishedServerUrl')
else
    ha_address=$(bashio::network.ipv4_address)

    export JELLYFIN_PublishedServerUrl="$PROTO://${ha_address%%/*}:$(bashio::addon.port $PORT)"
fi

bashio::log.info "JELLYFIN_PublishedServerUrl: $JELLYFIN_PublishedServerUrl"

exec /jellyfin/jellyfin