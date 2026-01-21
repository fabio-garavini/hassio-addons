# Home Assistant add-on: Cloudflare Tunneling Service ☁️ by Fabio Garavini

Cloudflare Tunnel provides you with a secure way to connect your resources to Cloudflare without a publicly routable IP address.

## Setup

There are 2 ways of creating a Cloudflare tunnel:

* [**Dashboard managed**](#dashboard-managed) (recommended)

  Everything is configured through the [Cloudflare Zero Trust](https://one.dash.cloudflare.com/) web page

* [**Addon managed**](#addon-managed)

  All configurations are stored in the addon config

### Dashboard managed

You can follow the [Cloudflare guide](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/get-started/create-remote-tunnel/) on creating a tunnel through the dashboard

1. Log in to [Zero Trust](https://one.dash.cloudflare.com/) and go to **Networks** > **Tunnels**
1. Select **Create a tunnel**
1. Choose **Cloudflared** for the connector type and select **Next**
1. Enter a name for your tunnel (for example `HomeAssistant`)
1. Select **Save tunnel**
1. Next, select **Docker** and **copy only the toke** which is the string after `--token`
1. Paste your token in the addon config `TOKEN`

Now you can:
* [**connect an application**](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/get-started/create-remote-tunnel/#2a-connect-an-application) which means exposing an internal service/webpage to the public internet
* [**connect a network**](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/get-started/create-remote-tunnel/#2b-connect-a-network) which means let remotely connect to your private network another authenticated device running `cloudflared` or the `1.1.1.1` phone app

### Addon managed

1. (optional) edit your addon configuration
1. Start the addon and check the log output
1. Open the link and log into your Cloudflare account
1. Select your domain name and authorize

### Config Options

For **Dashboard managed** the only config that you need is `TOKEN`, **if you set a Cloudflare token every other configuration is ignored** and must be configured through the `Cloudflare Zero Trust` page


#### **`TOKEN`**

See the [**Dashboard managed**](#dashboard-managed) section

#### **`Ingress`**

Example:

```yaml
hostname: example.com
service: http://homeassistant:8123
```

You can find more info about in the [ingress services documentation](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/do-more-with-tunnels/local-management/configuration-file/#services)

#### **`Network Routings`**

Network subnets routed through Cloudflare addon, make your private network accessible from outside

Must be in the following format `<IP/CIDR>` example: `192.168.1.0/24`

To delete a network routing you need to do it from **Cloudflare Zero Trust** dashboard `Networks > Routes`
