ARG BUILD_FROM
ARG BUILD_VERSION

FROM $BUILD_FROM:feature-s6-overlay

ENV PAPERLESS_DATA_DIR="/config/paperless" \
    PAPERLESS_MEDIA_ROOT="/share/paperless" \
    PAPERLESS_EMPTY_TRASH_DIR="/share/paperless/.trash" \
    PAPERLESS_LOGGING_DIR="/config/logs/paperless" \
    PAPERLESS_REDIS="redis://127.0.0.1:6379" \
    PAPERLESS_DBHOST=127.0.0.1 \
    REDIS_DATADIR="/config/redis" \
    PGDATA="/config/postgres" \
    POSTGRES_DB=paperless \
    POSTGRES_USER=paperless \
    POSTGRES_PASSWORD=paperless

ARG PG_MAJOR=15

RUN apt-get update; \
    apt-get install -y --no-install-recommends \
        jq \
        netcat-traditional \
        lsb-release \
        curl \
        gpg \
        postgresql-$PG_MAJOR \
        redis-server; \
    apt-get autoclean -y; \
    rm -rf \
        /tmp/* \
        /var/{cache,log}/* \
        /var/lib/apt/lists/*; \
    mkdir /docker-entrypoint-initdb.d; \
#    groupadd -r -g 900 postgres; \
#    useradd -r -u 900 -g postgres --home-dir=/var/lib/postgresql --shell=/bin/bash postgres; \
	install --verbose --directory --owner postgres --group postgres --mode 1777 /var/lib/postgresql; \
    install --verbose --directory --owner postgres --group postgres --mode 3777 /var/run/postgresql

ENV PATH $PATH:/usr/lib/postgresql/$PG_MAJOR/bin

COPY rootfs/ /