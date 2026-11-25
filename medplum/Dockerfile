# check=skip=SecretsUsedInArgOrEnv
ARG MEDPLUM_VERSION=5.2.18

FROM medplum/medplum-server:${MEDPLUM_VERSION} AS medplum-server
FROM medplum/medplum-app:${MEDPLUM_VERSION} AS medplum-app

FROM node:24.22.1-trixie-slim

ENV \
    TERM="xterm-256color" \
    HOME="/root" \
    LANG="C.UTF-8" \
    PS1="$(whoami)@$(hostname):$(pwd)$ " \
    S6_BEHAVIOUR_IF_STAGE2_FAILS=2 \
    S6_CMD_WAIT_FOR_SERVICES_MAXTIME=0 \
    S6_CMD_WAIT_FOR_SERVICES=1 \
    S6_SERVICES_READYTIME=50

# Medplum and bundled database configuration.
# hadolint ignore=DL3064
ENV \
    NODE_ENV=production \
    SERVICE_PORT=8104 \
    NGINX_PORT=8080 \
    INGRESS_PORT=8099 \
    INGRESS_EXTERNAL_PORT=8123 \
    MEDPLUM_PORT=8104 \
    MEDPLUM_DATABASE_HOST=/var/run/postgresql \
    MEDPLUM_DATABASE_PORT=5432 \
    MEDPLUM_DATABASE_DBNAME=medplum \
    MEDPLUM_DATABASE_USERNAME=medplum \
    MEDPLUM_DATABASE_PASSWORD=medplum \
    MEDPLUM_REDIS_PATH=/var/run/redis/redis.sock \
    MEDPLUM_BINARY_STORAGE=file:/config/binary \
    MEDPLUM_MAX_JSON_SIZE=1mb \
    MEDPLUM_MAX_BATCH_SIZE=50mb \
    MEDPLUM_BOT_LAMBDA_ROLE_ARN="" \
    MEDPLUM_BOT_LAMBDA_LAYER_NAME=medplum-bot-layer \
    MEDPLUM_VM_CONTEXT_BOTS_ENABLED=true \
    MEDPLUM_DEFAULT_BOT_RUNTIME_VERSION=vmcontext \
    MEDPLUM_INTROSPECTION_ENABLED=true \
    MEDPLUM_SHUTDOWN_TIMEOUT_MILLISECONDS=30000 \
    MEDPLUM_EMAIL_PROVIDER=none \
    MEDPLUM_AWS_TEXTRACT_ENABLED=false \
    MEDPLUM_SIGNING_KEY_ID=home-assistant

# hadolint ignore=DL3064
ENV \
    PG_MAJOR=16 \
    PGDATA=/config/postgres \
    POSTGRES_DB=medplum \
    POSTGRES_USER=medplum \
    POSTGRES_PASSWORD=medplum \
    POSTGRES_INITDB_ARGS="--data-checksum" \
    POSTGRES_SHARED_PRELOAD_LIBRARIES="pg_stat_statements,auto_explain" \
    POSTGRES_SEARCH_PATH=public \
    REDIS_DATADIR=/config/redis \
    REDIS_PORT=0

SHELL ["/bin/bash", "-o", "pipefail", "-c"]

ARG BUILD_ARCH=amd64
# renovate: datasource=github-releases packageName=hassio-addons/bashio
ARG BASHIO_VERSION="v0.20.0"
# renovate: datasource=github-releases packageName=just-containers/s6-overlay versioning=regex:^(?<major>\d+)\.(?<minor>\d+)\.(?<patch>\d+)\.(?<other>\d+)$
ARG S6_OVERLAY_VERSION="3.2.1.0"
# renovate: datasource=github-releases packageName=home-assistant/tempio
ARG TEMPIO_VERSION="2024.11.2"

COPY .common/addon-base /
RUN /usr/local/bin/install-addon-base-debian.sh

# Install PostgreSQL 16 from PGDG and Redis from Debian.
RUN set -eux; \
    apt-get update; \
    apt-get install -y --no-install-recommends libnss-wrapper lsb-release; \
    mkdir -p /usr/share/postgresql-common/pgdg; \
    curl -fLsS -o /usr/share/postgresql-common/pgdg/apt.postgresql.org.asc \
        https://www.postgresql.org/media/keys/ACCC4CF8.asc; \
    codename="$(lsb_release -cs)"; \
    case "${BUILD_ARCH}" in \
        aarch64) pg_arch="arm64" ;; \
        amd64) pg_arch="amd64" ;; \
        *) echo "Unsupported BUILD_ARCH: ${BUILD_ARCH}" >&2; exit 1 ;; \
    esac; \
    printf '%s\n' \
        "Types: deb deb-src" \
        "URIs: https://apt.postgresql.org/pub/repos/apt" \
        "Suites: ${codename}-pgdg" \
        "Architectures: ${pg_arch}" \
        "Components: main" \
        "Signed-By: /usr/share/postgresql-common/pgdg/apt.postgresql.org.asc" \
        > /etc/apt/sources.list.d/pgdg.sources; \
    apt-get update; \
    apt-get install -y --no-install-recommends \
        logrotate \
        postgresql-common \
        postgresql-${PG_MAJOR} \
        redis-server; \
    rm -rf /var/lib/apt/lists/*; \
    /usr/lib/postgresql/${PG_MAJOR}/bin/postgres --version

ENV PATH="$PATH:/usr/lib/postgresql/$PG_MAJOR/bin:/usr/lib/bin"

RUN install --verbose --directory --owner postgres --group postgres --mode 3777 /var/run/postgresql; \
    install --verbose --directory --owner postgres --group postgres --mode 1777 "$PGDATA"; \
    mkdir -p /docker-entrypoint-initdb.d /var/www/medplum

COPY --from=medplum-server --chown=node:node /usr/src/medplum /usr/src/medplum
COPY --from=medplum-app /usr/share/nginx/html /opt/medplum/app

COPY .common/addon-config /
COPY .common/postgres /
COPY .common/redis /
COPY .common/nginx /
COPY rootfs/ /

WORKDIR /usr/src/medplum
ENTRYPOINT ["/init"]
CMD []

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
    org.opencontainers.image.vendor="Fabio Garavini Hassio Apps" \
    org.opencontainers.image.authors="Fabio Garavini <info@fabiogaravini.dev>" \
    org.opencontainers.image.licenses="MIT" \
    org.opencontainers.image.url="https://github.com/fabio-garavini" \
    org.opencontainers.image.source="https://github.com/${BUILD_REPOSITORY}" \
    org.opencontainers.image.documentation="https://github.com/${BUILD_REPOSITORY}/blob/main/README.md" \
    org.opencontainers.image.created=${BUILD_DATE} \
    org.opencontainers.image.revision=${BUILD_REF} \
    org.opencontainers.image.version=${BUILD_VERSION}
