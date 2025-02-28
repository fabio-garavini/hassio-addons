# syntax=docker/dockerfile:1

ARG BUILD_FROM

FROM $BUILD_FROM

ARG NEXTCLOUD_VERSION=31.0.0
ARG BUILD_ARCH

# environment settings
ENV LD_PRELOAD="/usr/local/lib/libjemalloc.so.2"

RUN \
  echo "**** install runtime packages ****" && \
  apk add --no-cache \
    ffmpeg \
    gnu-libiconv \
    imagemagick \
    imagemagick-pdf \
    imagemagick-jpeg \
    imagemagick-raw \
    imagemagick-tiff \
    imagemagick-heic \
    imagemagick-webp \
    imagemagick-svg \
    libxml2 \
    php83-apcu \
    php83-bcmath \
    php83-bz2 \
    php83-dom \
    php83-exif \
    php83-ftp \
    php83-gd \
    php83-gmp \
    php83-imap \
    php83-intl \
    php83-ldap \
    php83-opcache \
    php83-pcntl \
    php83-pdo_mysql \
    php83-pdo_pgsql \
    php83-pdo_sqlite \
    php83-pecl-imagick \
    php83-pecl-mcrypt \
    php83-pecl-memcached \
    php83-pecl-smbclient \
    php83-pgsql \
    php83-posix \
    php83-redis \
    php83-sodium \
    php83-sqlite3 \
    php83-sysvsem \
    php83-xmlreader \
    rsync \
    samba-client \
    util-linux \
    sudo \
    python3-dev \
    perl \
    ffmpeg \
    imagemagick \
    supervisor \
    g++ \
    redis \
    gnupg \
    mariadb \
    mariadb-client \
    mariadb-server-utils && \
  echo "**** install python packages ****" && \
  python3 -m venv /lsiopy && \
  python3 -m pip install -U pip wheel setuptools && \
  export ALPINE_VER=$(grep main /etc/apk/repositories | sed 's|.*alpine/v||' | sed 's|/main.*||') && \
  export PIP_ARGS="-f https://wheel-index.linuxserver.io/alpine-${ALPINE_VER}/" && \
  python3 -m pip install \
    asn1crypto \
    cryptography \
    hexhamming \
    numpy \
    pillow \
    pillow-heif \
    pynacl \
    pywavelets && \
  if [ "$BUILD_ARCH" = "amd64" ]; then python3 -m pip install scipy; fi && \
  echo "**** configure php-fpm to pass env vars ****" && \
  sed -E -i 's/^;?clear_env ?=.*$/clear_env = no/g' /etc/php83/php-fpm.d/www.conf && \
  grep -qxF 'clear_env = no' /etc/php83/php-fpm.d/www.conf || echo 'clear_env = no' >> /etc/php83/php-fpm.d/www.conf && \
  echo "env[PATH] = /usr/local/bin:/usr/bin:/bin" >> /etc/php83/php-fpm.conf && \
  echo "**** configure php for nextcloud ****" && \
  { \
    echo 'apc.enable_cli=1'; \
  } >> /etc/php83/conf.d/apcu.ini && \
  { \
    echo 'opcache.enable=1'; \
    echo 'opcache.interned_strings_buffer=32'; \
    echo 'opcache.max_accelerated_files=10000'; \
    echo 'opcache.memory_consumption=128'; \
    echo 'opcache.save_comments=1'; \
    echo 'opcache.revalidate_freq=60'; \
    echo 'opcache.jit=1255'; \
    echo 'opcache.jit_buffer_size=128M'; \
  } >> "/etc/php83/conf.d/00_opcache.ini" && \
  { \
    echo 'memory_limit=512M'; \
    echo 'upload_max_filesize=512M'; \
    echo 'post_max_size=512M'; \
    echo 'max_input_time=300'; \
    echo 'max_execution_time=300'; \
    echo 'output_buffering=0'; \
    echo 'always_populate_raw_post_data=-1'; \
  } >> "/etc/php83/conf.d/nextcloud.ini" && \
  echo "**** install nextcloud ****" && \
  mkdir -p /app/www/src/ && \
  curl -o /tmp/nextcloud.tar.bz2 -L "https://download.nextcloud.com/server/releases/nextcloud-${NEXTCLOUD_VERSION}.tar.bz2" && \
  tar xf /tmp/nextcloud.tar.bz2 -C /app/www/src --strip-components=1 && \
  rm -rf /app/www/src/updater && \
  mkdir -p /app/www/src/data && \
  chmod +x /app/www/src/occ && \
  echo "**** cleanup ****" && \
  rm -rf /tmp/*

ENV REDIS_HOST=localhost \
    REDIS_HOST_PORT=6379

ENV MYSQL_ROOT_PASSWORD="nextcloud" \
    MYSQL_PASSWORD="nextcloud" \
    MYSQL_DATABASE="nextcloud" \
    MYSQL_USER="nextcloud" \
    MYSQL_HOST="localhost"

ENV MARIADB_DATADIR="/config/mariadb" \
    REDIS_DATADIR="/config/redis" \
    NEXTCLOUD_DATA_DIR="/share/nextcloud"

# copy local files
COPY rootfs/ /

# ports and volumes
EXPOSE 80 443 6379 3306

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
