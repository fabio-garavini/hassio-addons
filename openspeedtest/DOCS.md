# Home Assistant add-on: OpenSpeedTest 🚀 by Fabio Garavini

SpeedTest by [OpenSpeedTest™](https://openspeedtest.com/) is a Free and Open-Source HTML5 Network Performance Estimation Tool Written in Vanilla Javascript

## Installation

The installation of this add-on is pretty straightforward and not different in
comparison to installing any other Home Assistant add-on.

1. Click the "Install" button to install the add-on.
1. Start the add-on.
1. Click the "OPEN WEB UI".
1. Ready to go!

## Enable SSL (optional)

It is **not recommended** to publicly expose OpenSpeedTest and therefore no need for https.

To enable HTTPS simply put your certificate and key file in the `ssl` folder:

- certificate: `/ssl/nginx.crt`
- private key: `/ssl/nginx.key`

**IMPORTANT:** file names and extensions cannot be changed
