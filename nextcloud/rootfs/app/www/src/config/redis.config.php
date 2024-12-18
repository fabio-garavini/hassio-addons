<?php
if (getenv('REDIS_HOST')) {
  $CONFIG = array(
    'memcache.distributed' => '\OC\Memcache\Redis',
    'memcache.locking' => '\OC\Memcache\Redis',
    'redis' => array(
      'host' => getenv('REDIS_HOST'),
      'port' => 6379,
      'password' => getenv('REDIS_HOST_PASSWORD_FILE') ? trim(file_get_contents(getenv('REDIS_HOST_PASSWORD_FILE'))) : (string) getenv('REDIS_HOST_PASSWORD'),
      'timeout' => 0.0,
      'read_timeout' => 0.0,
    ),
  );

  if (getenv('REDIS_HOST_PORT') !== false) {
    $CONFIG['redis']['port'] = (int) getenv('REDIS_HOST_PORT');
  } elseif (getenv('REDIS_HOST')[0] != '/') {
    $CONFIG['redis']['port'] = 6379;
  }
}