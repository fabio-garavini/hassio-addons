server {
    {{ if not .ssl }}
    listen {{ .port }} default_server;
    {{ else }}
    listen {{ .port }} default_server ssl http2;
    {{ end }}

    include /etc/nginx/includes/server_params.conf;
    include /etc/nginx/includes/proxy_params.conf;

    {{ if .ssl }}
    include /etc/nginx/includes/ssl_params.conf;

    ssl_certificate {{ .certfile }};
    ssl_certificate_key {{ .keyfile }};
    {{ end }}

    location / {
        proxy_pass {{ .protocol }}://backend;
    }
}