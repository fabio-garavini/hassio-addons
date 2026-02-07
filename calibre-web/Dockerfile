# check=skip=SecretsUsedInArgOrEnv
ARG BUILD_FROM=lscr.io/linuxserver/calibre-web:0.6.26-ls369

FROM ${BUILD_FROM}

ARG BUILD_ARCH=amd64

ENV OAUTHLIB_RELAX_TOKEN_SCOPE=1

ENV SERVICE_PORT=8083 \
    NIGNX_PORT=8080

ENV DEBIAN_FRONTEND="noninteractive"

# Shell
SHELL ["/bin/bash", "-o", "pipefail", "-c"]

# renovate: datasource=github-releases packageName=hassio-addons/bashio
ARG BASHIO_VERSION="v0.17.5"
# renovate: datasource=github-releases packageName=home-assistant/tempio
ARG TEMPIO_VERSION="2024.11.2"
RUN \
    apt-get update \
    \
    && apt-get install -y --no-install-recommends \
        ca-certificates \
        curl \
        jq \
        tzdata \
        xz-utils \
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
    && apt-get purge -y --auto-remove \
        xz-utils \
    && apt-get clean \
    && rm -fr \
        /tmp/* \
        /var/{cache,log}/* \
        /var/lib/apt/lists/*

RUN set -e; \
	apt-get update; \
	apt-get install -y --no-install-recommends \
        openssl \
	    nginx; \
    apt-get clean; \
    rm -rf /etc/nginx

# renovate: datasource=github-releases packageName=kovidgoyal/calibre
ARG MOD_VERSION="v9.2.0"

RUN set -e; \
    apt-get update; \
    apt-get install --no-install-recommends -y xz-utils libgl1 libglx-mesa0 libxdamage1 libegl1 libxkbcommon0 libnss3 libopengl0 libxcomposite1 libxkbfile1 libxrandr2 libxtst6; \
    if [ "$(uname -m)" = "x86_64" ]; then \
        if ! curl -fo /calibre.txz -L "https://github.com/kovidgoyal/calibre/releases/download/${MOD_VERSION}/calibre-${MOD_VERSION:1}-x86_64.txz"; then \
        curl -fo /calibre.txz -L "https://download.calibre-ebook.com/${MOD_VERSION:1}/calibre-${MOD_VERSION:1}-x86_64.txz"; \
        fi; \
    elif [ "$(uname -m)" = "aarch64" ]; then \
        if ! curl -fo /calibre.txz -L "https://github.com/kovidgoyal/calibre/releases/download/${MOD_VERSION}/calibre-${MOD_VERSION:1}-arm64.txz"; then \
        curl -fo /calibre.txz -L "https://download.calibre-ebook.com/${MOD_VERSION:1}/calibre-${MOD_VERSION:1}-arm64.txz"; \
        fi; \
    fi; \
    if [[ -e /calibre.txz ]]; then \
        mkdir -p /app/calibre; \
        tar xf /calibre.txz -C /app/calibre; \
        /app/calibre/calibre_postinstall; \
        rm /calibre.txz; \
        echo "**** The 2 warnings above about setting up completion and desktop integration are expected and harmless. You can safely ignore them. ****"; \
    fi; \
    apt-get clean; \
    rm -fr \
        /tmp/* \
        /var/{cache,log}/* \
        /var/lib/apt/lists/*

COPY .common/addon-config /
COPY .common/nginx /

COPY rootfs /

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