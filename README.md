node-red-contrib-dahua-device
========================

![NPM status](https://img.shields.io/npm/v/node-red-contrib-dahua-device)
![Node-RED status](https://img.shields.io/badge/dynamic/xml?label=Node-RED%20catalog&query=%2F%2Fdiv%5B%40class%3D%27flowmeta%27%5D%5B1%5D%2Fdiv%5B%40class%3D%27flowinfo%27%5D%5B1%5D%2Ftext%28%29%5B1%5D&url=https%3A%2F%2Fflows.nodered.org%2Fnode%2Fnode-red-contrib-dahua-device)
![Github Actions status](https://img.shields.io/github/actions/workflow/status/inwaar/node-red-contrib-dahua-device/release.yml?label=release)

Provides a node for grabbing Dahua DVR/NVR (digital video recorder) or IP-camera events like
<code>VideoMotion</code>, <code>AlarmLocal</code>, <code>VideoLoss</code> and <code>VideoBlind</code>.</p>

Additionally it provides nodes to set Day or Night profile.

Supports digest authentication for the last Dahua firmware devices.


Install
-------

Debian based operation systems:

    sudo apt-get install build-essential git

Other operation systems: follow instructions https://github.com/nodejs/node-gyp#on-unix

### Installation:

Run the following command in your Node-RED user directory - typically `~/.node-red`

    npm i node-red-contrib-dahua-device

Usage
-----

Configure motion detection on a Dahua device. Drop the Dahua device node to a flow. 

If you want to trigger day or night profile, drop the Dahua device day / night node to a flow.

Example
-------
![example](./images/example.png)
