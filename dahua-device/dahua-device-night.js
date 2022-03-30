var ipcamera = require('node-dahua-api');

module.exports = function (RED) {
    function DahuaDeviceNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        var device = RED.nodes.getNode(config.device);

        node.status({});
        
        if (!device) {
            nodeStatus(node, 'red', 'error: no config');
        }

        nodeStatus(node, 'yellow', 'dot', 'connecting...');

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
            dahua.nightProfile();
            nodeStatus(node, 'green', 'success');
        });
    }

    function nodeStatus(node, color, text) {
        var options = { hour12: false, month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        var d = new Date();
        var ds = d.toLocaleDateString('en-US', options);
        node.status({fill: color, shape: 'dot', text: text + ' at ' + ds});
    }

    RED.nodes.registerType('dahua-device-night', DahuaDeviceNode);
};
