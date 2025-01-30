ARG BUILD_FROM
ARG BUILD_VERSION

FROM ${BUILD_FROM}:${BUILD_VERSION%-v*}

ARG BUILD_ARCH

# Environment variables
ENV \
    DEBIAN_FRONTEND="noninteractive" \
    HOME="/root" \
    LANG="C.UTF-8" \
    PS1="$(whoami)@$(hostname):$(pwd)$ " \
    S6_BEHAVIOUR_IF_STAGE2_FAILS=2 \
    S6_CMD_WAIT_FOR_SERVICES_MAXTIME=0 \
    S6_CMD_WAIT_FOR_SERVICES=1 \
    S6_SERVICES_GRACETIME=0 \
    TERM="xterm-256color"

# Set shell
SHELL ["/bin/bash", "-o", "pipefail", "-c"]

# Immich environment variables
ENV \
  DB_HOSTNAME="localhost" \
  DB_PORT=5432 \
  DB_DATABASE_NAME="immich" \
  DB_USERNAME="immich" \
  DB_PASSWORD="immich" \
  REDIS_HOSTNAME="localhost" \
  IMMICH_MACHINE_LEARNING_URL="http://127.0.0.1:3003" \
  IMMICH_MEDIA_LOCATION="/media/immich" \
  IMMICH_REVERSE_GEOCODING_ROOT="/config/reverse-geocoding" \
  TRANSFORMERS_CACHE="/config/machine-learning" \
  MACHINE_LEARNING_CACHE_FOLDER="/config/machine-learning"

# Postgres environment variables
ENV PGDATA="/config/postgres" \
    POSTGRES_INITDB_ARGS="--data-checksum" \
    POSTGRES_DB="immich" \
    POSTGRES_USER="immich" \
    POSTGRES_PASSWORD="immich"

# Postgres version and pgvecto.rs version - latests pgvecto.rs supported is 0.3.0
ARG PG_MAJOR=16 \
    PGVECTORS_VERSION=0.3.0

# Postgres & Redis install
RUN mkdir /docker-entrypoint-initdb.d; \
    apt-get update; \
    apt-get install -y lsb-release; \
    install -d /usr/share/postgresql-common/pgdg; \
    curl -o /usr/share/postgresql-common/pgdg/apt.postgresql.org.asc --fail https://www.postgresql.org/media/keys/ACCC4CF8.asc; \
    sh -c 'echo "deb [signed-by=/usr/share/postgresql-common/pgdg/apt.postgresql.org.asc] https://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'; \
    apt-get update; \
    apt-get install -y --no-install-recommends \
        logrotate \
        postgresql-$PG_MAJOR \
        redis-server; \
    if [ "$BUILD_ARCH" = "aarch64" ]; then \
        curl -L -s -o /tmp/pgvectors.deb "https://github.com/tensorchord/pgvecto.rs/releases/download/v${PGVECTORS_VERSION}/vectors-pg${PG_MAJOR}_${PGVECTORS_VERSION}_arm64.deb"; \
    else \
        curl -L -s -o /tmp/pgvectors.deb "https://github.com/tensorchord/pgvecto.rs/releases/download/v${PGVECTORS_VERSION}/vectors-pg${PG_MAJOR}_${PGVECTORS_VERSION}_${BUILD_ARCH}.deb"; \
    fi; \
    apt-get install /tmp/pgvectors.deb && rm -f /tmp/pgvectors.deb; \
    apt-get autoremove -y; \
    apt-get autoclean -y; \
    rm -rf \
        /tmp/* \
        /var/{cache,log}/* \
        /var/lib/apt/lists/*; \
#    groupadd -r -g 900 postgres; \
#    useradd -r -u 900 -g postgres --home-dir=/var/lib/postgresql --shell=/bin/bash postgres; \
	install --verbose --directory --owner postgres --group postgres --mode 1777 /var/lib/postgresql; \
    install --verbose --directory --owner postgres --group postgres --mode 3777 /var/run/postgresql

ENV PATH $PATH:/usr/lib/postgresql/$PG_MAJOR/bin

COPY rootfs/ /

RUN ln -sT docker-ensure-initdb.sh /usr/local/bin/docker-enforce-initdb.sh

VOLUME /config /data /share /media

ARG BUILD_VERSION
ARG BUILD_DATE
ARG BUILD_DESCRIPTION
ARG BUILD_NAME
ARG BUILD_REF
ARG BUILD_REPOSITORY
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
