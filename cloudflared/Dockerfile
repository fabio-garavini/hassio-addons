ARG BUILD_FROM=alpine:latest

FROM ${BUILD_FROM}

# Generic Addon variables
ENV \
    TERM="xterm-256color" \
    HOME="/root" \
    LANG="C.UTF-8" \
    PS1="$(whoami)@$(hostname):$(pwd)$ " \
    S6_BEHAVIOUR_IF_STAGE2_FAILS=2 \
    S6_CMD_WAIT_FOR_SERVICES_MAXTIME=0 \
    S6_CMD_WAIT_FOR_SERVICES=1 \
    S6_SERVICES_READYTIME=50

RUN apk add --no-cache bash

# Shell
SHELL ["/bin/bash", "-o", "pipefail", "-c"]

# Addon base configuration
ARG BUILD_ARCH=amd64
# renovate: datasource=github-releases packageName=just-containers/s6-overlay
ARG S6_OVERLAY_VERSION="3.2.1.0"
RUN \
    apk add --no-cache \
        libcrypto3 \
        libssl3 \
        musl-utils \
        musl \
        curl \
        jq \
        tzdata \
    \
    && S6_ARCH="${BUILD_ARCH}" \
    && if [ "${BUILD_ARCH}" = "i386" ]; then S6_ARCH="i686"; \
    elif [ "${BUILD_ARCH}" = "amd64" ]; then S6_ARCH="x86_64"; \
    elif [ "${BUILD_ARCH}" = "armv7" ]; then S6_ARCH="arm"; fi \
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
    && rm -rf /tmp/*

ARG BUILD_VERSION=2026.1.1

RUN \
    case "$BUILD_ARCH" in \
      aarch64) REMOTE_ARCH="arm64" ;; \
      armv7)   REMOTE_ARCH="arm" ;; \
      amd64)   REMOTE_ARCH="amd64" ;; \
      *) echo "Unsupported architecture: $BUILD_ARCH" >&2; exit 1 ;; \
    esac; \
    curl -fSL "https://github.com/cloudflare/cloudflared/releases/download/${BUILD_VERSION%-v*}/cloudflared-linux-${REMOTE_ARCH}" -o /usr/bin/cloudflared; \
    chmod +x /usr/bin/cloudflared; \
    cloudflared -v

COPY .common/addon-config /

COPY rootfs/ /

ENTRYPOINT ["/init"]

ARG BUILD_DATE \
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