# check=skip=SecretsUsedInArgOrEnv
ARG BUILD_FROM=ghcr.io/gibz104/spoolmansync:1.2.1

FROM ${BUILD_FROM}

ENV HA_MODE="external"

ENV \
    SERVICE_PORT=3000 \
    NGINX_PORT=8080

# NGINX Install
RUN \
    apk add --no-cache \
        bash \
        openssl \
        nginx \
    && rm -rf /etc/nginx

# Shell
SHELL ["/bin/bash", "-o", "pipefail", "-c"]

# Addon base configuration
ARG BUILD_ARCH=amd64
# renovate: datasource=github-releases packageName=hassio-addons/bashio
ARG BASHIO_VERSION="v0.17.5"
# renovate: datasource=github-releases packageName=just-containers/s6-overlay versioning=regex:^(?<major>\d+)\.(?<minor>\d+)\.(?<patch>\d+)\.(?<other>\d+)$
ARG S6_OVERLAY_VERSION="3.2.1.0"
# renovate: datasource=github-releases packageName=home-assistant/tempio
ARG TEMPIO_VERSION="2024.11.2"
RUN \
    set -o pipefail \
    \
    && apk add --no-cache --virtual .build-dependencies \
        tar \
        xz \
    \
    && apk add --no-cache \
        libcrypto3 \
        libssl3 \
        musl-utils \
        musl \
        bash \
        curl \
        jq \
        tzdata \
    \
    && S6_ARCH="${BUILD_ARCH}" \
    && if [ "${BUILD_ARCH}" = "amd64" ]; then S6_ARCH="x86_64"; fi \
    \
    && curl -L -s "https://github.com/just-containers/s6-overlay/releases/download/v${S6_OVERLAY_VERSION}/s6-overlay-noarch.tar.xz" \
        | tar -C / -Jxpf - \
    \
    && curl -L -s "https://github.com/just-containers/s6-overlay/releases/download/v${S6_OVERLAY_VERSION}/s6-overlay-${S6_ARCH}.tar.xz" \
        | tar -C / -Jxpf - \
    \
    && curl -L -s "https://github.com/just-containers/s6-overlay/releases/download/v${S6_OVERLAY_VERSION}/s6-overlay-symlinks-noarch.tar.xz" \
        | tar -C / -Jxpf - \
    \
    && curl -L -s "https://github.com/just-containers/s6-overlay/releases/download/v${S6_OVERLAY_VERSION}/s6-overlay-symlinks-arch.tar.xz" \
        | tar -C / -Jxpf - \
    \
    && curl -J -L -o /tmp/bashio.tar.gz \
        "https://github.com/hassio-addons/bashio/archive/${BASHIO_VERSION}.tar.gz" \
    && mkdir /tmp/bashio \
    && tar zxvf \
        /tmp/bashio.tar.gz \
        --strip 1 -C /tmp/bashio \
    \
    && mv /tmp/bashio/lib /usr/lib/bashio \
    && ln -s /usr/lib/bashio/bashio /usr/bin/bashio \
    \
    && curl -L -s -o /usr/bin/tempio \
        "https://github.com/home-assistant/tempio/releases/download/${TEMPIO_VERSION}/tempio_${BUILD_ARCH}" \
    && chmod a+x /usr/bin/tempio \
    \
    && apk del --no-cache --purge .build-dependencies \
    && rm -f -r \
        /tmp/*

COPY .common/addon-config /
COPY .common/nginx /

COPY rootfs/ /

ENTRYPOINT ["/init"]

ARG BUILD_VERSION \
    BUILD_DATE \
    BUILD_DESCRIPTION \
    BUILD_NAME \
    BUILD_REF \
    BUILD_REPOSITORY

LABEL \
    io.hass.name="${BUILD_NAME}" \
    io.hass.description="${BUILD_DESCRIPTION}" \
    io.hass.arch="${BUILD_ARCH}" \
    io.hass.type="addon" \
    io.hass.version="${BUILD_VERSION}" \
    maintainer="Fabio Garavini <info@fabiogaravini.dev>" \
    org.opencontainers.image.title="${BUILD_NAME}" \
    org.opencontainers.image.description="${BUILD_DESCRIPTION}" \
    org.opencontainers.image.vendor="Fabio Garavini Hassio Add-ons" \
    org.opencontainers.image.authors="Fabio Garavini <info@fabiogaravini.dev>" \
    org.opencontainers.image.licenses="MIT" \
    org.opencontainers.image.url="https://github.com/fabio-garavini" \
    org.opencontainers.image.source="https://github.com/${BUILD_REPOSITORY}" \
    org.opencontainers.image.documentation="https://github.com/${BUILD_REPOSITORY}/blob/main/README.md" \
    org.opencontainers.image.created=${BUILD_DATE} \
    org.opencontainers.image.revision=${BUILD_REF} \
    org.opencontainers.image.version=${BUILD_VERSION}
