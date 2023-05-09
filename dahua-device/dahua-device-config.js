module.exports = function (RED) {
    /**
     * @param config
     */
    function DahuaDeviceConfigNode(config) {
        RED.nodes.createNode(this, config);

        this.ipaddress = config.ipaddress;
        this.port = config.port;
        if (this.credentials) {
            this.username = this.credentials.username;
            this.password = this.credentials.password;
        }
    }

    RED.nodes.registerType('dahua-device-config', DahuaDeviceConfigNode, {
        credentials: {
            username: { type: 'text' },
            password: { type: 'password' },
        },
    });
};
