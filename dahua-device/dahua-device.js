var ipcamera = require('node-dahua-api');

module.exports = function (RED) {
    function DahuaDeviceNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        var device = RED.nodes.getNode(config.device);

        node.status({});
        node.status({fill: "yellow", shape: "dot", text: "connecting..."});

        var dahua = new ipcamera.dahua({
            host: device.ipaddress,
            port: device.port,
            user: device.credentials.username,
            pass: device.credentials.password,
            log: false
        });

        dahua.on('connect', function () {
            node.status({fill: "green", shape: "dot", text: "connected"});
        });

        dahua.on('error', function (error) {
            node.status({fill: "red", shape: "dot", text: "error: " + error});
        });

        dahua.on('end', function () {
            node.status({fill: "yellow", shape: "dot", text: "disconnected"});
        });

        dahua.on('alarm', function (code, action, index) {
            node.send({
                topic: code + '/' + index,
                payload: action,
                index,
                code
            });
        });
    }

    RED.nodes.registerType("dahua-device", DahuaDeviceNode);
};
