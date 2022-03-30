var ipcamera = require('node-dahua-api');
var nodeStatus = require('./utils').nodeStatus;

module.exports = function (RED) {
    function DahuaDeviceDayNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        var device = RED.nodes.getNode(config.device);

        node.status({});
        
        if (!device) {
            nodeStatus(node, 'red', 'error: no config');
        }

        var dahua = new ipcamera.dahua({
            host: device.ipaddress,
            port: device.port,
            user: device.credentials.username,
            pass: device.credentials.password,
            log: false,
            cameraAlarms: false,
        });

        dahua.on('error', function (error) {
            nodeStatus(node, 'red', 'error: ' + error);
        });

        node.on('input', function () {
            dahua.dayProfile();
            nodeStatus(node, 'green', 'success');
        });

        nodeStatus(node, 'green', 'ready');
    }

    RED.nodes.registerType('dahua-device-day', DahuaDeviceDayNode);
};