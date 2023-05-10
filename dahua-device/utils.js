module.exports = {
    nodeStatus: function (node, color, text) {
        const options = {
            hour12: false,
            month: 'short',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        };
        const d = new Date();
        const ds = d.toLocaleDateString('en-US', options);

        node.status({ fill: color, shape: 'dot', text: text + ' at ' + ds });
    },
};
