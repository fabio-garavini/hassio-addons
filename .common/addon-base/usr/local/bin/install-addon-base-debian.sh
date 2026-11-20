#!/bin/bash
# shellcheck shell=bash

set -euo pipefail

: "${BUILD_ARCH:?BUILD_ARCH is required}"
: "${BASHIO_VERSION:?BASHIO_VERSION is required}"
: "${S6_OVERLAY_VERSION:?S6_OVERLAY_VERSION is required}"
: "${TEMPIO_VERSION:?TEMPIO_VERSION is required}"

apt-get update
apt-get install -y --no-install-recommends \
    bash \
    ca-certificates \
    curl \
    jq \
    nginx \
    openssl \
    tzdata \
    xz-utils

c_rehash

case "${BUILD_ARCH}" in
    amd64)
        s6_arch="x86_64"
        ;;
    i386)
        s6_arch="i686"
        ;;
    armv7)
        s6_arch="arm"
        ;;
    *)
        s6_arch="${BUILD_ARCH}"
        ;;
esac

curl -fLsS --retry 3 \
    "https://github.com/just-containers/s6-overlay/releases/download/v${S6_OVERLAY_VERSION}/s6-overlay-noarch.tar.xz" \
    | tar -C / -Jxpf -
curl -fLsS --retry 3 \
    "https://github.com/just-containers/s6-overlay/releases/download/v${S6_OVERLAY_VERSION}/s6-overlay-${s6_arch}.tar.xz" \
    | tar -C / -Jxpf -
curl -fLsS --retry 3 \
    "https://github.com/just-containers/s6-overlay/releases/download/v${S6_OVERLAY_VERSION}/s6-overlay-symlinks-noarch.tar.xz" \
    | tar -C / -Jxpf -
curl -fLsS --retry 3 \
    "https://github.com/just-containers/s6-overlay/releases/download/v${S6_OVERLAY_VERSION}/s6-overlay-symlinks-arch.tar.xz" \
    | tar -C / -Jxpf -

mkdir -p /etc/fix-attrs.d /etc/services.d /tmp/bashio
curl -fJL --retry 3 \
    "https://github.com/hassio-addons/bashio/archive/${BASHIO_VERSION}.tar.gz" \
    -o /tmp/bashio.tar.gz
tar -xzf /tmp/bashio.tar.gz --strip 1 -C /tmp/bashio
mv /tmp/bashio/lib /usr/lib/bashio
ln -s /usr/lib/bashio/bashio /usr/bin/bashio

curl -fLsS --retry 3 \
    "https://github.com/home-assistant/tempio/releases/download/${TEMPIO_VERSION}/tempio_${BUILD_ARCH}" \
    -o /usr/bin/tempio
chmod a+x /usr/bin/tempio

apt-get purge -y --auto-remove xz-utils
apt-get clean
rm -rf \
    /etc/nginx \
    /tmp/* \
    /var/cache/* \
    /var/lib/apt/lists/* \
    /var/log/*
