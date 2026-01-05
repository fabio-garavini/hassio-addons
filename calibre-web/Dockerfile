# check=skip=SecretsUsedInArgOrEnv
ARG BUILD_FROM=lscr.io/linuxserver/calibre-web:0.6.25-ls364

FROM ${BUILD_FROM}

ARG BUILD_ARCH=amd64

ENV OAUTHLIB_RELAX_TOKEN_SCOPE=1

ENV DEBIAN_FRONTEND="noninteractive"

SHELL ["/bin/bash", "-o", "pipefail", "-c"]

RUN set -e; \
    if [ "$BUILD_ARCH" = "amd64" ]; then \
        apt-get update; \
        apt-get install --no-install-recommends -y xz-utils libgl1 libglx-mesa0 libxdamage1 libegl1 libxkbcommon0 libnss3 libopengl0 libxcomposite1 libxkbfile1 libxrandr2 libxtst6; \
        if [[ -e /calibre.txz ]]; then \
            mkdir -p /app/calibre; \
            tar xf \
                /calibre.txz \
                -C /app/calibre; \
            echo "Installing Calibre version $(cat /CALIBRE_RELEASE)"; \
            /app/calibre/calibre_postinstall; \
            rm /calibre.txz; \
            echo "**** The 2 warnings above about setting up completion and desktop integration are expected and harmless. You can safely ignore them. ****"; \
        fi; \
        apt-get clean; \
        rm -fr \
            /tmp/* \
            /var/{cache,log}/* \
            /var/lib/apt/lists/*; \
    fi

COPY .common/addon-config /

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