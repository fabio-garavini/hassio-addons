# check=skip=SecretsUsedInArgOrEnv
ARG BUILD_FROM=ghcr.io/paperless-ngx/paperless-ngx:3.1.2

ARG TIKA_VERSION=3.3.1
ARG GOTENBERG_VERSION=8.35

FROM gotenberg/gotenberg:${GOTENBERG_VERSION} AS gotenberg

FROM apache/tika:${TIKA_VERSION}.0 AS tika

FROM $BUILD_FROM

ARG TIKA_VERSION
ARG BUILD_ARCH=amd64

ENV PAPERLESS_PORT=8000 \
    PAPERLESS_USE_X_FORWARD_HOST=true \
    PAPERLESS_USE_X_FORWARD_PORT=true \
    PAPERLESS_ENABLE_UPDATE_CHECK=false \
    PAPERLESS_PROXY_SSL_HEADER='["HTTP_X_FORWARDED_PROTO", "https"]' \
    PAPERLESS_DATA_DIR="/config/paperless" \
    PAPERLESS_LOGGING_DIR="/data/logs/paperless" \
    PAPERLESS_SCRATCH_DIR="/data/tmp" \
    PAPERLESS_REDIS="unix:///var/run/redis/redis.sock" \
    PAPERLESS_DBHOST="/var/run/postgresql" \
    PAPERLESS_TIKA_ENABLED=true \
    PAPERLESS_TIKA_GOTENBERG_ENDPOINT="http://localhost:3000" \
    PAPERLESS_TIKA_ENDPOINT="http://localhost:9998"

# hadolint ignore=DL3064
ENV \
    REDIS_DATADIR="/config/redis" \
    PG_MAJOR=15 \
    PGDATA="/config/postgres" \
    POSTGRES_INITDB_ARGS="--data-checksum" \
    POSTGRES_DB="paperless" \
    POSTGRES_USER="paperless" \
    POSTGRES_PASSWORD="paperless"

ENV \
    SERVICE_PORT=8000 \
    NGINX_PORT=8080

SHELL ["/bin/bash", "-o", "pipefail", "-c"]

#---------------------------------------------- bashio & tempio ------------------------------------------------------------#

# renovate: datasource=github-releases packageName=hassio-addons/bashio
ARG BASHIO_VERSION="v0.18.1"
# renovate: datasource=github-releases packageName=home-assistant/tempio
ARG TEMPIO_VERSION="2024.11.2"
RUN set -eux; \
    apt-get update; \
    apt-get install -y --no-install-recommends \
        ca-certificates \
        curl \
        jq \
        ncat \
        tzdata \
        xz-utils; \
    \
    curl -J -L -o /tmp/bashio.tar.gz "https://github.com/hassio-addons/bashio/archive/${BASHIO_VERSION}.tar.gz"; \
    mkdir /tmp/bashio; \
    tar zxvf /tmp/bashio.tar.gz --strip 1 -C /tmp/bashio; \
    \
    mv /tmp/bashio/lib /usr/lib/bashio; \
    ln -s /usr/lib/bashio/bashio /usr/bin/bashio; \
    \
    curl -L -s -o /usr/bin/tempio "https://github.com/home-assistant/tempio/releases/download/${TEMPIO_VERSION}/tempio_${BUILD_ARCH}"; \
    chmod a+x /usr/bin/tempio; \
    \
    apt-get purge -y --auto-remove xz-utils; \
    apt-get clean; \
    rm -fr /tmp/* /var/{cache,log}/* /var/lib/apt/lists/*

#---------------------------------------------- Postgres, Redis & NGINX ------------------------------------------------------------#

# Create Postgres user
RUN set -eux; \
	groupadd -r postgres --gid=900; \
	useradd -r -g postgres --uid=900 --home-dir=/var/lib/postgresql --shell=/bin/bash postgres; \
	install --verbose --directory --owner postgres --group postgres --mode 3777 /var/lib/postgresql; \
    install --verbose --directory --owner postgres --group postgres --mode 1777 "$PGDATA"

RUN mkdir /docker-entrypoint-initdb.d

ENV PATH="$PATH:/usr/lib/postgresql/$PG_MAJOR/bin:/usr/lib/bin"

# install Postgres & Redis
RUN set -eux; \
    apt-get update; \
    apt-get install -y --no-install-recommends libnss-wrapper lsb-release ca-certificates; \
    install -d /usr/share/postgresql-common/pgdg; \
    curl -o /usr/share/postgresql-common/pgdg/apt.postgresql.org.asc --fail https://www.postgresql.org/media/keys/ACCC4CF8.asc; \
    sh -c "echo 'deb [signed-by=/usr/share/postgresql-common/pgdg/apt.postgresql.org.asc] https://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main' > /etc/apt/sources.list.d/pgdg.list"; \
    apt-get update; \
    apt-get install -y --no-install-recommends \
        logrotate \
        postgresql-common \
        postgresql-$PG_MAJOR \
        redis-server \
        nginx; \
    rm -rf /var/lib/apt/lists/* /etc/nginx; \
    postgres --version

#--------------------------------------------------- Tika ------------------------------------------------------------#

ENV TIKA_VERSION=$TIKA_VERSION

RUN set -eux; \
    apt-get update; \
    apt-get install --yes --no-install-recommends gnupg2; \
    apt-get update; \
    DEBIAN_FRONTEND=noninteractive apt-get install --yes --no-install-recommends \
        openjdk-21-jre-headless \
        gdal-bin \
        imagemagick \
        tesseract-ocr \
        tesseract-ocr-eng \
        tesseract-ocr-ita \
        tesseract-ocr-fra \
        tesseract-ocr-spa \
        tesseract-ocr-deu \
        tesseract-ocr-jpn; \
    echo ttf-mscorefonts-installer msttcorefonts/accepted-mscorefonts-eula select true | debconf-set-selections; \
    DEBIAN_FRONTEND=noninteractive apt-get install --yes --no-install-recommends \
        xfonts-utils \
        fonts-freefont-ttf \
        fonts-liberation \
        cabextract; \
    apt-get clean -y; \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*; \
    java --version; \
    groupadd -g 9998 -o tika; \
    useradd -m -u 9998 -g 9998 -o tika

COPY --from=tika /tika-server-standard-${TIKA_VERSION}.jar /

#--------------------------------------------------- Gotenberg ------------------------------------------------------------#

# from https://github.com/gotenberg/gotenberg/blob/main/build/Dockerfile

ARG GOTENBERG_USER_GID=991
ARG GOTENBERG_USER_UID=991
# renovate: datasource=github-releases packageName=googlefonts/noto-emoji versioning=regex:^v(?<major>\d+)\.(?<minor>\d+)$
ARG NOTO_COLOR_EMOJI_VERSION="v2.051"

RUN \
    # Create a non-root user.
    # All processes in the Docker container will run with this dedicated user.
    groupadd --gid "$GOTENBERG_USER_GID" gotenberg; \
    useradd --uid "$GOTENBERG_USER_UID" --gid gotenberg --shell /bin/bash --home /home/gotenberg --no-create-home gotenberg; \
    mkdir /home/gotenberg; \
    chown gotenberg:gotenberg /home/gotenberg

RUN set -eux; \
    apt-get update -qq; \
    apt-get upgrade -yqq; \
    DEBIAN_FRONTEND=noninteractive apt-get install -y -qq --no-install-recommends \
        ca-certificates \
        # Many users rely on curl for Docker health checks.
        curl \
        # Install fonts.
        # Essential metric-compatible fonts for LibreOffice layout fidelity (replaces MS Fonts).
        fonts-crosextra-carlito \
        fonts-crosextra-caladea \
        fonts-liberation \
        fonts-liberation2 \
        # Reliable general-purpose fallback for Chromium.
        fonts-dejavu \
        # Unified CJK (Chinese, Japanese, Korean) support.
        fonts-noto-cjk \
        # Standard Emoji support.
        fonts-noto-color-emoji \
        # Tofu prevention.
        fonts-noto-core \
        # Install QPDF & ExifTool (PDF engines).
        qpdf exiftool; \
    # See https://github.com/nextcloud/docker/issues/380.
    mkdir -p /usr/share/man/man1; \
    # Cleanup.
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# PDFtk bash wrapper.
# See https://github.com/gotenberg/gotenberg/pull/273.
RUN printf '#!/bin/bash\n\nexec java -jar /usr/bin/pdftk-all.jar "$@"' > /usr/bin/pdftk \
    && chmod +x /usr/bin/pdftk

# Support for arbitrary user IDs (OpenShift).
# See:
# https://github.com/gotenberg/gotenberg/issues/1049.
# https://docs.redhat.com/en/documentation/openshift_container_platform/4.15/html/images/creating-images#use-uid_create-images.
RUN usermod -aG root gotenberg \
    && chgrp -R 0 /home/gotenberg \
    && chmod -R g=u /home/gotenberg

# Improve fonts subpixel hinting and smoothing.
# Credits:
# https://github.com/arachnys/athenapdf/issues/69.
# https://github.com/arachnys/athenapdf/commit/ba25a8d80a25d08d58865519c4cd8756dc9a336d.
COPY --from=gotenberg /etc/fonts/conf.d/100-gotenberg.conf /etc/fonts/conf.d/100-gotenberg.conf

# Copy PDFtk jar.
COPY --from=gotenberg /usr/bin/pdftk-all.jar /usr/bin/pdfcpu /usr/bin/

# Set default characterset encoding to UTF-8.
# See:
# https://github.com/gotenberg/gotenberg/issues/104
# https://github.com/gotenberg/gotenberg/issues/730
ENV LANG=C.UTF-8
ENV LC_ALL=C.UTF-8

# Install Chromium.
# On ppc64el, the latest Chromium is broken, so we pin a known working
# version from snapshot.debian.org via debsnap.
RUN set -eux; \
    apt-get update -qq; \
    apt-get upgrade -yqq; \
    DEBIAN_FRONTEND=noninteractive apt-get install -y -qq --no-install-recommends chromium; \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Install LibreOffice & unoconverter.
RUN set -eux; \
    echo "deb http://deb.debian.org/debian trixie-backports main" >> /etc/apt/sources.list; \
    apt-get update -qq; \
    apt-get upgrade -yqq; \
    DEBIAN_FRONTEND=noninteractive apt-get install -y -qq --no-install-recommends \
        python3 python3-distutils-extra \
        # Install Hyphenation for LibreOffice.
        # Credits: https://wiki.archlinux.org/title/LibreOffice.
        hyphen-af hyphen-as hyphen-be hyphen-bg hyphen-bn hyphen-ca hyphen-cs hyphen-da hyphen-de hyphen-el \
        hyphen-en-gb hyphen-en-us hyphen-eo hyphen-es hyphen-fr hyphen-gl hyphen-gu hyphen-hi hyphen-hr hyphen-hu \
        hyphen-id hyphen-is hyphen-it hyphen-kn hyphen-lt hyphen-lv hyphen-ml hyphen-mn hyphen-mr hyphen-nl \
        hyphen-no hyphen-or hyphen-pa hyphen-pl hyphen-pt-br hyphen-pt-pt hyphen-ro hyphen-ru hyphen-sk hyphen-sl \
        hyphen-sr hyphen-sv hyphen-ta hyphen-te hyphen-th hyphen-uk hyphen-zu; \
    DEBIAN_FRONTEND=noninteractive apt-get install -y -qq --no-install-recommends -t trixie-backports \
        libreoffice-writer libreoffice-calc libreoffice-impress libreoffice-draw python3-uno; \
    # unoconverter will look for the Python binary, which has to be at version 3.
    ln -s /usr/bin/python3 /usr/bin/python; \
    # Cleanup.
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*; \
    python --version; \
    soffice --version

COPY --from=gotenberg /usr/bin/gotenberg /usr/bin/

COPY --chown=gotenberg:gotenberg unoconv /usr/bin/unoconverter

# Copy dictionnaries so that hypens work on Chromium.
# See https://github.com/gotenberg/gotenberg/issues/1293.
COPY --chown=gotenberg:gotenberg --from=gotenberg /opt/gotenberg/chromium-hyphen-data /opt/gotenberg/chromium-hyphen-data

# Environment variables required by modules or else.
ENV CHROMIUM_BIN_PATH=/usr/bin/chromium \
    CHROMIUM_HYPHEN_DATA_DIR_PATH=/opt/gotenberg/chromium-hyphen-data \
    LIBREOFFICE_BIN_PATH=/usr/lib/libreoffice/program/soffice.bin \
    UNOCONVERTER_BIN_PATH=/usr/bin/unoconverter \
    PDFTK_BIN_PATH=/usr/bin/pdftk \
    QPDF_BIN_PATH=/usr/bin/qpdf \
    EXIFTOOL_BIN_PATH=/usr/bin/exiftool \
    PDFCPU_BIN_PATH=/usr/bin/pdfcpu

ENV GOTENBERG_VERSIONS_DIR_PATH=/opt/gotenberg/versions

COPY --from=gotenberg /opt/gotenberg/capture-version.sh /opt/gotenberg/capture-version.sh

RUN bash /opt/gotenberg/capture-version.sh "$GOTENBERG_VERSIONS_DIR_PATH" qpdf "$QPDF_BIN_PATH" --version \
    && bash /opt/gotenberg/capture-version.sh "$GOTENBERG_VERSIONS_DIR_PATH" exiftool "$EXIFTOOL_BIN_PATH" -ver \
    && bash /opt/gotenberg/capture-version.sh "$GOTENBERG_VERSIONS_DIR_PATH" pdftk "$PDFTK_BIN_PATH" --version \
    && bash /opt/gotenberg/capture-version.sh "$GOTENBERG_VERSIONS_DIR_PATH" pdfcpu "$PDFCPU_BIN_PATH" version \
    && bash /opt/gotenberg/capture-version.sh "$GOTENBERG_VERSIONS_DIR_PATH" chromium "$CHROMIUM_BIN_PATH" --version \
    && bash /opt/gotenberg/capture-version.sh "$GOTENBERG_VERSIONS_DIR_PATH" libreoffice-api "$LIBREOFFICE_BIN_PATH" --version

RUN set -eux; \
    apt-get update; \
    apt-get install -y --no-install-recommends \
        rsync \
        e2fsprogs \
        cifs-utils \
        nfs-common \
        parted \
        udev; \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

COPY .common/addon-config /
COPY .common/mount-external-storage /
COPY .common/nginx /
COPY .common/redis /

COPY rootfs/ /

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