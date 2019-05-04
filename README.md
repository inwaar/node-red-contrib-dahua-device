node-red-contrib-dahua-device
========================

Provides a node for grabbing Dahua DVR/NVR (digital video recorder) or IP-camera events like
<code>VideoMotion</code>, <code>AlarmLocal</code>, <code>VideoLoss</code> and <code>VideoBlind</code>.</p>
Supports digest authentication for the last Dahua firmware devices.


Install
-------

Run the following command in your Node-RED user directory - typically `~/.node-red`

    npm install node-red-contrib-dahua-device

Usage
-----

Configure motion detection on a Dahua device. Drop the Dahua device node to a flow. 

Example
-------
![emaple](https://raw.githubusercontent.com/inwaar/node-red-contrib-dahua-device/master/images/example.png)
