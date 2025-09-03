# check=skip=SecretsUsedInArgOrEnv
ARG BUILD_FROM=gitea/gitea:1.24.5

FROM $BUILD_FROM

ENV GITEA_WORK_DIR=/data \
    INSTALL_LOCK=true \
    DB_TYPE=sqlite3 \
    DB_HOST=localhost:3306 \
    DB_NAME=gitea \
    DB_USER=root \
    DB_PASSWD="" \
    HTTP_PORT=3000 \
    SSH_LISTEN_PORT=22 \
    SSH_PORT=222

RUN apk --no-cache add \
    shadow \
    jq; \
    rm -rf /var/cache/apk/*

COPY rootfs/ /

ARG BUILD_VERSION \
    BUILD_ARCH \
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