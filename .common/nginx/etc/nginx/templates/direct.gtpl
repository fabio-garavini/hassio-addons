server {
    {{ if not .ssl }}
    listen {{ .port }} default_server;
    {{ else }}
    listen {{ .port }} default_server ssl;
    {{ end }}

    include /etc/nginx/includes/server_params.conf;
    include /etc/nginx/includes/proxy_params.conf;

    {{ if .ssl }}
    include /etc/nginx/includes/ssl_params.conf;

    ssl_certificate {{ .certfile }};
    ssl_certificate_key {{ .keyfile }};

    # Upgrade clients that accidentally use plain HTTP on the HTTPS listener.
    error_page 497 =301 https://$http_host$request_uri;
    {{ end }}

    location / {
        {{ if .ingress_user }}
        set $ingress_user "";

        if ($remote_addr = 172.30.32.2) {
            set $ingress_user {{ .ingress_user }};
        }

        proxy_set_header X-WebAuth-User $ingress_user;
        {{ end }}

        proxy_pass {{ .protocol }}://backend;
        proxy_http_version 1.1;
        proxy_set_header Upgrade    $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
        proxy_set_header Host $http_host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header x-forwarded-host $http_host;
        proxy_set_header X-Forwarded-Proto $scheme;

        include /etc/nginx/location/*.conf;
    }
}

{{ if .ingress_port }}
server {
    listen {{ .ingress_port }} default_server;

    # Home Assistant Ingress uses plain HTTP between Supervisor and the app.
    allow 172.30.32.2;
    deny all;

    include /etc/nginx/includes/server_params.conf;
    include /etc/nginx/includes/proxy_params.conf;

    location / {
        {{ if .ingress_user }}
        set $ingress_user "";

        if ($remote_addr = 172.30.32.2) {
            set $ingress_user {{ .ingress_user }};
        }

        proxy_set_header X-WebAuth-User $ingress_user;
        {{ end }}

        proxy_pass {{ .protocol }}://backend;
        proxy_http_version 1.1;
        proxy_set_header Upgrade    $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
        proxy_set_header Host $http_host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header x-forwarded-host $http_host;
        proxy_set_header X-Forwarded-Proto $scheme;

        include /etc/nginx/location/*.conf;
    }
}
{{ end }}