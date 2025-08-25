ARG BUILD_FROM=ghcr.io/imagegenius/immich:v1.139.4-ig416

FROM ${BUILD_FROM}

ARG BUILD_ARCH

# Container Environment variables
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

# Shell
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

# Postgres and VectorChord version
# pgvecto.rs is deprecated
ARG PG_MAJOR=16 \
    PGVECTORS_VERSION=0.3.0 \
    VECTORCHORD_VERSION=0.3.0

# Remove conflicting packages
RUN apt-get remove -y postgresql-client-14 postgresql-client-15 postgresql-client-17 && \
    apt-get autoremove -y && \
    apt-get clean -y

#---------------------------------------------- Postgres & Redis ------------------------------------------------------------#

# Create Postgres user
RUN set -eux; \
	groupadd -r postgres --gid=900; \
	useradd -r -g postgres --uid=900 --home-dir=/var/lib/postgresql --shell=/bin/bash postgres; \
	install --verbose --directory --owner postgres --group postgres --mode 1777 /var/lib/postgresql

# make the "en_US.UTF-8" locale so postgres will be utf-8 enabled by default
RUN set -eux; \
    if [ -f /etc/dpkg/dpkg.cfg.d/docker ]; then \
        grep -q '/usr/share/locale' /etc/dpkg/dpkg.cfg.d/docker; \
        sed -ri '/\/usr\/share\/locale/d' /etc/dpkg/dpkg.cfg.d/docker; \
        grep -q '/usr/share/locale' /etc/dpkg/dpkg.cfg.d/docker && exit 1; \
    fi; \
    apt-get update; \
    apt-get install -y --no-install-recommends locales; \
    rm -rf /var/lib/apt/lists/*; \
    echo 'en_US.UTF-8 UTF-8' >> /etc/locale.gen; \
    locale-gen; \
    locale -a | grep 'en_US.utf8'

ENV LANG=en_US.utf8

RUN set -eux; \
	apt-get update; \
	apt-get install -y --no-install-recommends \
		libnss-wrapper \
		xz-utils \
		zstd \
	; \
	rm -rf /var/lib/apt/lists/*

RUN mkdir /docker-entrypoint-initdb.d

ENV PATH="$PATH:/usr/lib/postgresql/$PG_MAJOR/bin:/usr/lib/bin"

# install Postgres & Redis
RUN set -eux; \
    apt-get update; \
    apt-get install -y --no-install-recommends libnss-wrapper lsb-release; \
    curl -o /usr/share/postgresql-common/pgdg/apt.postgresql.org.asc --fail https://www.postgresql.org/media/keys/ACCC4CF8.asc; \
    sh -c 'echo "deb [signed-by=/usr/share/postgresql-common/pgdg/apt.postgresql.org.asc] https://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'; \
    apt-get update; \
    apt-get install -y --no-install-recommends \
        logrotate \
        postgresql-common \
        postgresql-$PG_MAJOR \
        postgresql-${PG_MAJOR}-pgvector \
        redis-server; \
    rm -rf /var/lib/apt/lists/*; \
    \
    postgres --version

RUN set -eux; \
	dpkg-divert --add --rename --divert "/usr/share/postgresql/postgresql.conf.sample.dpkg" "/usr/share/postgresql/$PG_MAJOR/postgresql.conf.sample"; \
	cp -v /usr/share/postgresql/postgresql.conf.sample.dpkg /usr/share/postgresql/postgresql.conf.sample; \
	ln -sv ../postgresql.conf.sample "/usr/share/postgresql/$PG_MAJOR/"; \
	sed -ri "s!^#?(listen_addresses)\s*=\s*\S+.*!\1 = '*'!" /usr/share/postgresql/postgresql.conf.sample; \
	grep -F "listen_addresses = '*'" /usr/share/postgresql/postgresql.conf.sample

RUN install --verbose --directory --owner postgres --group postgres --mode 3777 /var/run/postgresql && \
    install --verbose --directory --owner postgres --group postgres --mode 1777 "$PGDATA"

#--------------------------------------------------------- PG Vectors extensions ------------------------------------------------------------------------#

RUN set -eux; \
    apt-get update && \
    if [ "$BUILD_ARCH" = "aarch64" ]; then \
        curl -L -s -o /tmp/vchord.deb https://github.com/tensorchord/VectorChord/releases/download/$VECTORCHORD_VERSION/postgresql-${PG_MAJOR%.*}-vchord_${VECTORCHORD_VERSION#"v"}-1_arm64.deb; \
    else \
        curl -L -s -o /tmp/vchord.deb https://github.com/tensorchord/VectorChord/releases/download/$VECTORCHORD_VERSION/postgresql-${PG_MAJOR%.*}-vchord_${VECTORCHORD_VERSION#"v"}-1_${BUILD_ARCH}.deb; \
    fi; \
    if [ "$BUILD_ARCH" = "aarch64" ]; then \
        curl -L -s -o /tmp/pgvectors.deb https://github.com/tensorchord/pgvecto.rs/releases/download/v${PGVECTORS_VERSION}/vectors-pg${PG_MAJOR}_${PGVECTORS_VERSION}_arm64_vectors.deb; \
    else \
        curl -L -s -o /tmp/pgvectors.deb https://github.com/tensorchord/pgvecto.rs/releases/download/v${PGVECTORS_VERSION}/vectors-pg${PG_MAJOR}_${PGVECTORS_VERSION}_${BUILD_ARCH}_vectors.deb; \
    fi; \
    apt-get install -y --no-install-recommends /tmp/pgvectors.deb; \
    apt-get install -y --no-install-recommends /tmp/vchord.deb; \
    apt-get autoremove -y; \
    apt-get autoclean -y; \
    rm -rf \
        /tmp/* \
        /var/{cache,log}/* \
        /var/lib/apt/lists/*

#----------------------------------------------- S6 & Custom files ---------------------------------------------------------------------#

COPY rootfs/ /

RUN ln -sT docker-ensure-initdb.sh /usr/local/bin/docker-enforce-initdb.sh

STOPSIGNAL SIGINT

VOLUME /config /data /share /media

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
