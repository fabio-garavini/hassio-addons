<?php
if (getenv('DEFAULT_PHONE_REGION')) {
  $CONFIG = array(
    'default_phone_region' => getenv('DEFAULT_PHONE_REGION'),
  );
}