<?php

$autoconfig_enabled = false;

if (getenv('SQLITE_DATABASE')) {
    $AUTOCONFIG['dbtype'] = 'sqlite';
    $AUTOCONFIG['dbname'] = getenv('SQLITE_DATABASE');
    $autoconfig_enabled = true;
} elseif (getenv('MYSQL_DATABASE_FILE') && getenv('MYSQL_USER_FILE') && getenv('MYSQL_PASSWORD_FILE') && getenv('MYSQL_HOST')) {
    $AUTOCONFIG['dbtype'] = 'mysql';
    $AUTOCONFIG['dbname'] = trim(file_get_contents(getenv('MYSQL_DATABASE_FILE')));
    $AUTOCONFIG['dbuser'] = trim(file_get_contents(getenv('MYSQL_USER_FILE')));
    $AUTOCONFIG['dbpass'] = trim(file_get_contents(getenv('MYSQL_PASSWORD_FILE')));
    $AUTOCONFIG['dbhost'] = getenv('MYSQL_HOST');
    $autoconfig_enabled = true;
} elseif (getenv('MYSQL_DATABASE') && getenv('MYSQL_USER') && getenv('MYSQL_PASSWORD') && getenv('MYSQL_HOST')) {
    $AUTOCONFIG['dbtype'] = 'mysql';
    $AUTOCONFIG['dbname'] = getenv('MYSQL_DATABASE');
    $AUTOCONFIG['dbuser'] = getenv('MYSQL_USER');
    $AUTOCONFIG['dbpass'] = getenv('MYSQL_PASSWORD');
    $AUTOCONFIG['dbhost'] = getenv('MYSQL_HOST');
    $AUTOCONFIG['dbport'] = 3306;
    $autoconfig_enabled = true;
} elseif (getenv('POSTGRES_DB_FILE') && getenv('POSTGRES_USER_FILE') && getenv('POSTGRES_PASSWORD_FILE') && getenv('POSTGRES_HOST')) {
    $AUTOCONFIG['dbtype'] = 'pgsql';
    $AUTOCONFIG['dbname'] = trim(file_get_contents(getenv('POSTGRES_DB_FILE')));
    $AUTOCONFIG['dbuser'] = trim(file_get_contents(getenv('POSTGRES_USER_FILE')));
    $AUTOCONFIG['dbpass'] = trim(file_get_contents(getenv('POSTGRES_PASSWORD_FILE')));
    $AUTOCONFIG['dbhost'] = getenv('POSTGRES_HOST');
    $autoconfig_enabled = true;
} elseif (getenv('POSTGRES_DB') && getenv('POSTGRES_USER') && getenv('POSTGRES_PASSWORD') && getenv('POSTGRES_HOST')) {
    $AUTOCONFIG['dbtype'] = 'pgsql';
    $AUTOCONFIG['dbname'] = getenv('POSTGRES_DB');
    $AUTOCONFIG['dbuser'] = getenv('POSTGRES_USER');
    $AUTOCONFIG['dbpass'] = getenv('POSTGRES_PASSWORD');
    $AUTOCONFIG['dbhost'] = getenv('POSTGRES_HOST');
    $autoconfig_enabled = true;
}

if ($autoconfig_enabled) {
    $AUTOCONFIG['directory'] = getenv('NEXTCLOUD_DATADIR') ?: '/share/nextcloud';
    $AUTOCONFIG['enable_previews'] = true;
    $AUTOCONFIG['enabledPreviewProviders'] = array (
        0 => 'OC\\Preview\\PNG',
        1 => 'OC\\Preview\\JPEG',
        2 => 'OC\\Preview\\GIF',
        3 => 'OC\\Preview\\BMP',
        4 => 'OC\\Preview\\XBitmap',
        5 => 'OC\\Preview\\MP3',
        6 => 'OC\\Preview\\TXT',
        7 => 'OC\\Preview\\MarkDown',
        8 => 'OC\\Preview\\OpenDocument',
        9 => 'OC\\Preview\\Krita',
        10 => 'OC\\Preview\\HEIC',
    );
}