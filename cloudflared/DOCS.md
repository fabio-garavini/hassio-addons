# Home Assistant add-on: Cloudflare Tunneling Service ☁️ by Fabio Garavini

Cloudflare Tunnel provides you with a secure way to connect your resources to Cloudflare without a publicly routable IP address.

## Setup

There are 2 ways of creating a Cloudflare tunnel:

* Dashboard - managed through the Cloudflare [Zero Trust](https://one.dash.cloudflare.com/) page
* Config    - all configuration are stored inside a `config.yml` file

### Dashboard managed

You can follow the [Cloudflare guide](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/get-started/create-remote-tunnel/) on creating a tunnel through the dashboard

1. Log in to [Zero Trust](https://one.dash.cloudflare.com/) and go to **Networks** > **Tunnels**
1. Select **Create a tunnel**
1. Choose **Cloudflared** for the connector type and select **Next**
1. Enter a name for your tunnel (for example `HomeAssistant`)
1. Select **Save tunnel**
1. Next, select **Docker** and copy the command
1. Paste inside Cloudflare add-on config the token **which is only the part after `--token`**

Now you can:
* [**connect an application**](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/get-started/create-remote-tunnel/#2a-connect-an-application) which means exposing an internal service to the public internet
* [**connect a network**](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/get-started/create-remote-tunnel/#2b-connect-a-network) which means let remotely connect to your private network another authenticated device running `cloudflared` or the `1.1.1.1` phone app

### Config managed

1. Start the addon and check the log output
1. Open the link and log into your Cloudflare account
1. Select your domain name
1. Now you can connect to your Home Assistant through a Cloudflared client

#### Config Options

For more advanced configurations you can view the [official documentation](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/configure-tunnels/local-management/configuration-file)

You can find your `config.yml` file under the cloudflared `addon_configs` directory
