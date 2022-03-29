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
            nodeStatus("green", "connected");
        });

        dahua.on('error', function (error) {
            nodeStatus("red", "error: " + error);
        });

        dahua.on('end', function () {
            nodeStatus("yellow", "disconnected");
        });

        dahua.on('alarm', function (code, action, index, metadata) {
            node.send({
                topic: code + '/' + index + '/' + action,
                payload: action,
                metadata,
                index,
                code
            });
        });
    }

    function nodeStatus(color, text) {
        var options = { weekday: 'short', hour12: false, month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' };
        var d = new Date(date);
        var ds = d.toLocaleDateString("en-US", options);
        node.status({fill: color, shape: "dot", text: text + " at " + ds});
    }

    RED.nodes.registerType("dahua-device", DahuaDeviceNode);
};
