## Version 2026/06/27 - Changelog: https://github.com/linuxserver/docker-baseimage-alpine-nginx/commits/3.24/root/defaults/nginx/ssl.conf.sample

ssl_certificate {{ .certfile }};
ssl_certificate_key {{ .keyfile }};

# HSTS (ngx_http_headers_module is required) (63072000 seconds)
add_header Strict-Transport-Security "max-age=63072000";

### TLSRef Configuration Generator
# generated 2026-06-27, TLSRef Guideline v6.0, nginx 1.30.3, OpenSSL 3.5.7, intermediate config, HSTS, gitrev=f17a584
# https://configurator.tlsref.org/#server=nginx&version=1.30.3&config=intermediate&openssl=3.5.7&hsts&guideline=6.0
# intermediate configuration
ssl_protocols TLSv1.2 TLSv1.3;
ssl_ecdh_curve X25519MLKEM768:X25519:prime256v1:secp384r1;
ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305;
ssl_prefer_server_ciphers off;

# see also ssl_session_ticket_key alternative to stateful session cache
ssl_session_timeout 1d;
ssl_session_cache shared:MozSSL:10m; # about 40000 sessions

### Mozilla Practical security implementation
# https://developer.mozilla.org/en-US/docs/Web/Security
#add_header Access-Control-Allow-Origin $http_origin always;
#add_header Content-Security-Policy "upgrade-insecure-requests; base-uri 'self'; form-action 'self'; frame-ancestors 'self';" always;
#add_header Cross-Origin-Resource-Policy "same-origin" always;
#add_header Referrer-Policy "same-origin" always;
#add_header X-Content-Type-Options "nosniff" always;
#add_header X-Frame-Options "SAMEORIGIN" always;

### Optional additional headers
#add_header Alt-Svc 'h3=":443"' always;
#add_header Cache-Control "no-transform" always;
#add_header Permissions-Policy "interest-cohort=()" always;
#add_header X-UA-Compatible "IE=Edge" always;
#add_header X-XSS-Protection "1; mode=block" always;
