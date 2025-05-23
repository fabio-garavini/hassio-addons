#!/bin/bash

if [ ! -f /config/cert.pem ]; then
    cloudflared --no-autoupdate tunnel login

    mv /root/.cloudflared/* /config/

    if [ ! -f /config/cert.pem ]; then
        echo "Login error"
        exit
    fi
fi

tunnel_id=$(find /config -maxdepth 1 -type f -name "*.json" | head -n 1 | xargs -n 1 basename 2>/dev/null)

if [ -z "$tunnel_id" ]; then
    cloudflared tunnel --origincert /config/cert.pem --credentials-file /config/tunnel.json create HomeAssistant >/dev/null 2>&1

    mv /root/.cloudflared/* /config/

    if [ ! -f /config/tunnel.json ]; then
        echo "HomeAssistant tunnel created"
    else
        echo "Could not create tunnel"
        exit
    fi
fi

if [ ! -f /config/config.yml ]; then
    tunnel_id=$(find /config -maxdepth 1 -type f -name "*.json" | head -n 1 | xargs -n 1 basename 2>/dev/null)

    if [ -n "$tunnel_id" ]; then
        cat > "/config/config.yml" <<EOF
tunnel: ${tunnel_id%.json}
credentials-file: /config/${tunnel_id}
warp-routing:
  enabled: true
EOF
    else
        echo "No available Tunnel to start"
        exit
    fi
fi

cloudflared --no-autoupdate tunnel --config /config/config.yml --origincert /config/cert.pem --credentials-file /config/"${tunnel_id:-"tunnel.json"}" run