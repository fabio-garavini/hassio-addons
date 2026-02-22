# check=skip=SecretsUsedInArgOrEnv
ARG BUILD_FROM=ghcr.io/paperless-ngx/paperless-ngx:2.20.8

ARG TIKA_VERSION=3.2.3
ARG GOTENBERG_VERSION=8.23

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
    \
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

ENV JAVA_HOME=/opt/openjdk
ENV PATH="$JAVA_HOME/bin:$PATH"

RUN set -eux; \
    apt-get update; \
    apt-get install -y --no-install-recommends ca-certificates netcat-traditional; \
    \
    if [ "$BUILD_ARCH" = "amd64" ]; then \
        JDK_URL="https://download.java.net/java/GA/jdk17/0d483333a00540d886896bac774ff48b/35/GPL/openjdk-17_linux-x64_bin.tar.gz"; \
    elif [ "$BUILD_ARCH" = "aarch64" ]; then \
        JDK_URL="https://download.java.net/java/GA/jdk17/0d483333a00540d886896bac774ff48b/35/GPL/openjdk-17_linux-aarch64_bin.tar.gz"; \
    else \
        echo "Unsupported BUILD_ARCH: $BUILD_ARCH" >&2; exit 1; \
    fi; \
    \
    curl -fsSL "$JDK_URL" -o /tmp/openjdk.tar.gz; \
    mkdir -p "$JAVA_HOME"; \
    tar -xzf /tmp/openjdk.tar.gz -C "$JAVA_HOME" --strip-components=1; \
    apt-get clean; \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* \
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
# renovate: datasource=gitlab-releases packageName=pdftk-java/pdftk registryUrl=https://gitlab.com
ARG PDFTK_VERSION=v3.3.3

RUN \
    # Create a non-root user.
    # All processes in the Docker container will run with this dedicated user.
    groupadd --gid "$GOTENBERG_USER_GID" gotenberg &&\
    useradd --uid "$GOTENBERG_USER_UID" --gid gotenberg --shell /bin/bash --home /home/gotenberg --no-create-home gotenberg &&\
    mkdir /home/gotenberg &&\
    chown gotenberg: /home/gotenberg

RUN \
    # Install system dependencies required for the next instructions or debugging.
    # Note: tini is a helper for reaping zombie processes.
    apt-get update -qq &&\
    apt-get upgrade -yqq &&\
    DEBIAN_FRONTEND=noninteractive apt-get install -y -qq --no-install-recommends curl gnupg tini python3 python3-distutils-extra &&\
    # Cleanup.
    # Note: the Debian image does automatically a clean after each install thanks to a hook.
    # Therefore, there is no need for apt-get clean.
    # See https://stackoverflow.com/a/24417119/3248473.
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN \
    # Install fonts.
    # Credits:
    # https://github.com/arachnys/athenapdf/blob/master/cli/Dockerfile.
    # https://help.accusoft.com/PrizmDoc/v12.1/HTML/Installing_Asian_Fonts_on_Ubuntu_and_Debian.html.
    curl -o ./ttf-mscorefonts-installer_3.8.1_all.deb http://httpredir.debian.org/debian/pool/contrib/m/msttcorefonts/ttf-mscorefonts-installer_3.8.1_all.deb &&\
    apt-get update -qq &&\
    apt-get upgrade -yqq &&\
    DEBIAN_FRONTEND=noninteractive apt-get install -y -qq --no-install-recommends \
    ./ttf-mscorefonts-installer_3.8.1_all.deb \
    culmus \
    fonts-beng \
    fonts-hosny-amiri \
    fonts-lklug-sinhala \
    fonts-lohit-guru \
    fonts-lohit-knda \
    fonts-samyak-gujr \
    fonts-samyak-mlym \
    fonts-samyak-taml \
    fonts-sarai \
    fonts-sil-abyssinica \
    fonts-sil-padauk \
    fonts-telu \
    fonts-thai-tlwg \
    ttf-wqy-zenhei \
    fonts-arphic-ukai \
    fonts-arphic-uming \
    fonts-ipafont-mincho \
    fonts-ipafont-gothic \
    fonts-unfonts-core \
    # LibreOffice recommends.
    fonts-crosextra-caladea \
    fonts-crosextra-carlito \
    fonts-dejavu \
    fonts-liberation \
    fonts-liberation2 \
    fonts-linuxlibertine \
    fonts-noto-cjk \
    fonts-noto-core \
    fonts-noto-mono \
    fonts-noto-ui-core \
    fonts-sil-gentium \
    fonts-sil-gentium-basic &&\
    rm -f ./ttf-mscorefonts-installer_3.8.1_all.deb &&\
    # Add Color and Black-and-White Noto emoji font.
    # Credits:
    # https://github.com/gotenberg/gotenberg/pull/325.
    # https://github.com/googlefonts/noto-emoji.
    curl -Ls "https://github.com/googlefonts/noto-emoji/raw/$NOTO_COLOR_EMOJI_VERSION/fonts/NotoColorEmoji.ttf" -o /usr/local/share/fonts/NotoColorEmoji.ttf &&\
    # Cleanup.
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN \
    # Install Hyphenation for LibreOffice.
    # Credits: https://wiki.archlinux.org/title/LibreOffice.
    apt-get update -qq &&\
    apt-get upgrade -yqq &&\
    DEBIAN_FRONTEND=noninteractive apt-get install -y -qq --no-install-recommends \
        hyphen-af hyphen-as hyphen-be hyphen-bg hyphen-bn hyphen-ca hyphen-cs hyphen-da hyphen-de hyphen-el \
        hyphen-en-gb hyphen-en-us hyphen-eo hyphen-es hyphen-fr hyphen-gl hyphen-gu hyphen-hi hyphen-hr hyphen-hu \
        hyphen-id hyphen-is hyphen-it hyphen-kn hyphen-lt hyphen-lv hyphen-ml hyphen-mn hyphen-mr hyphen-nl \
        hyphen-no hyphen-or hyphen-pa hyphen-pl hyphen-pt-br hyphen-pt-pt hyphen-ro hyphen-ru hyphen-sk hyphen-sl \
        hyphen-sr hyphen-sv hyphen-ta hyphen-te hyphen-th hyphen-uk hyphen-zu &&\
    # Cleanup.
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN \
    # Install Chromium.
    apt-get update -qq &&\
    apt-get upgrade -yqq &&\
    DEBIAN_FRONTEND=noninteractive apt-get install -y -qq --no-install-recommends chromium &&\
    # Verify installation.
    chromium --version &&\
    # Cleanup.
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Set default characterset encoding to UTF-8.
# See:
# https://github.com/gotenberg/gotenberg/issues/104
# https://github.com/gotenberg/gotenberg/issues/730
ENV LANG=C.UTF-8
ENV LC_ALL=C.UTF-8

COPY unoconv /usr/bin/unoconverter

RUN \
    # Install LibreOffice & unoconverter.
    echo "deb http://deb.debian.org/debian trixie-backports main" >> /etc/apt/sources.list &&\
    apt-get update -qq &&\
    apt-get upgrade -yqq &&\
    DEBIAN_FRONTEND=noninteractive apt-get install -y -qq --no-install-recommends -t trixie-backports libreoffice libreoffice-core libreoffice-common python3-uno &&\
    #curl -Ls https://raw.githubusercontent.com/gotenberg/unoconverter/v0.1.1/unoconv -o /usr/bin/unoconverter &&\
    chmod +x /usr/bin/unoconverter &&\
    # unoconverter will look for the Python binary, which has to be at version 3.
    ln -s /usr/bin/python3 /usr/bin/python &&\
    # Verify installations.
    libreoffice --version &&\
    unoconverter --version &&\
    # Cleanup.
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN \
    # Install PDFtk, QPDF & ExifTool (PDF engines).
    # See https://github.com/gotenberg/gotenberg/pull/273.
    curl -o /usr/bin/pdftk-all.jar "https://gitlab.com/api/v4/projects/5024297/packages/generic/pdftk-java/$PDFTK_VERSION/pdftk-all.jar" &&\
    chmod a+x /usr/bin/pdftk-all.jar &&\
    printf '#!/bin/bash\n\nexec java -jar /usr/bin/pdftk-all.jar "$@"' > /usr/bin/pdftk && \
    chmod +x /usr/bin/pdftk &&\
    apt-get update -qq &&\
    apt-get upgrade -yqq &&\
    DEBIAN_FRONTEND=noninteractive apt-get install -y -qq --no-install-recommends qpdf exiftool &&\
    # See https://github.com/nextcloud/docker/issues/380.
    mkdir -p /usr/share/man/man1 &&\
    # Verify installations.
    pdftk --version &&\
    qpdf --version &&\
    exiftool --version &&\
    # Cleanup.
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Support for arbitrary user IDs (OpenShift).
# See:
# https://github.com/gotenberg/gotenberg/issues/1049.
# https://docs.redhat.com/en/documentation/openshift_container_platform/4.15/html/images/creating-images#use-uid_create-images.
RUN \
    usermod -aG root gotenberg &&\
    chgrp -R 0 /home/gotenberg &&\
    chmod -R g=u /home/gotenberg

# Improve fonts subpixel hinting and smoothing.
# Credits:
# https://github.com/arachnys/athenapdf/issues/69.
# https://github.com/arachnys/athenapdf/commit/ba25a8d80a25d08d58865519c4cd8756dc9a336d.
COPY --from=gotenberg /etc/fonts/conf.d/100-gotenberg.conf /etc/fonts/conf.d/

# Copy dictionnaries so that hypens work on Chromium.
# See https://github.com/gotenberg/gotenberg/issues/1293.
COPY --chown=gotenberg:gotenberg --from=gotenberg /opt/gotenberg/chromium-hyphen-data /opt/gotenberg/chromium-hyphen-data

COPY --from=gotenberg /usr/bin/pdfcpu /usr/bin/gotenberg /usr/bin/

# Environment variables required by modules or else.
ENV CHROMIUM_BIN_PATH=/usr/bin/chromium \
    CHROMIUM_HYPHEN_DATA_DIR_PATH=/opt/gotenberg/chromium-hyphen-data \
    LIBREOFFICE_BIN_PATH=/usr/lib/libreoffice/program/soffice.bin \
    UNOCONVERTER_BIN_PATH=/usr/bin/unoconverter \
    PDFTK_BIN_PATH=/usr/bin/pdftk \
    QPDF_BIN_PATH=/usr/bin/qpdf \
    EXIFTOOL_BIN_PATH=/usr/bin/exiftool \
    PDFCPU_BIN_PATH=/usr/bin/pdfcpu

RUN apt-get update; \
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