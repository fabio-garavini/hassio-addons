ARG BUILD_FROM=ghcr.io/hassio-addons/base:stable
ARG BUILD_VERSION=0.24.3+0

FROM ghcr.io/neosmemo/memos:${BUILD_VERSION%%+*} AS memos

FROM ${BUILD_FROM}

ENV MEMOS_MODE="prod" \
    MEMOS_PORT="5230" \
    MEMOS_DATA="/share/memos" \
    MEMOS_DRIVER="postgres" \
    PGDATA="/config/postgres" \
    MEMOS_DSN="user=memos password=memos dbname=memos host=127.0.0.1 sslmode=disable" \
    POSTGRES_USER="memos" \
    POSTGRES_PASSWORD="memos" \
    POSTGRES_DB="memos" \
    PG_MAJOR=16

RUN apk add --no-cache bash logrotate postgresql$PG_MAJOR postgresql$PG_MAJOR-client; \
#    groupadd -r -g 900 postgres; \
#    useradd -r -u 900 -g postgres --home-dir=/var/lib/postgresql --shell=/bin/bash postgres; \
	install --verbose --directory --owner postgres --group postgres --mode 1777 /var/lib/postgresql; \
    install --verbose --directory --owner postgres --group postgres --mode 3777 /var/run/postgresql

COPY --from=neosmemo/memos:0.24.3 /usr/local/memos/memos /usr/local/memos/

COPY rootfs/ /

VOLUME /config /data /share

EXPOSE ${MEMOS_PORT}

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
