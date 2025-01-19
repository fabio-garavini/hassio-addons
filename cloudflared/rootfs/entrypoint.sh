#!/bin/bash

if [ ! -f /config/cert.pem ]; then
    cloudflared --no-autoupdate tunnel login
    cloudflared tunnel create HomeAssistant
    mv ~/.cloudflared/* /config/.
fi

if [ ! -f /config/config.yml ]; then
    tunnel_id=$(find /config -maxdepth 1 -type f -name "*.json" | head -n 1 | xargs -n 1 basename)

    if [ -n "$tunnel_id" ]; then
        cat > "/config/config.yml" <<EOF
tunnel: ${tunnel_id%.json}
credentials-file: /config/${tunnel_id}
warp-routing:
  enabled: true
EOF
    else
        echo "No JSON file found"
    fi
fi

cloudflared --no-autoupdate tunnel --config /config/config.yml run