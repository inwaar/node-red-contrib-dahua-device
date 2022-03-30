var ipcamera = require('node-dahua-api');
var nodeStatus = require('./utils').nodeStatus;

module.exports = function (RED) {
    function DahuaDeviceNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        var device = RED.nodes.getNode(config.device);

        node.status({});
        node.status({fill: 'yellow', shape: 'dot', text: 'connecting...'});

        var dahua = new ipcamera.dahua({
            host: device.ipaddress,
            port: device.port,
            user: device.credentials.username,
            pass: device.credentials.password,
            log: false
        });

        dahua.on('connect', function (options) {
            nodeStatus(node, 'green', 'connected to ' + options.host );
        });

        dahua.on('error', function (error) {
            nodeStatus(node, 'red', 'error: ' + error);
        });

        dahua.on('end', function () {
            nodeStatus(node, 'yellow', 'disconnected');
        });

        dahua.on('alarm', function (code, action, index, metadata) {
            node.send({
                topic: code + '/' + action,
                payload: action,
                metadata,
                index,
                code
            });
            nodeStatus(node, 'green', 'processed ' + code + ' event');
        });
    }

    RED.nodes.registerType('dahua-device', DahuaDeviceNode);
};
