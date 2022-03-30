module.exports = {
    nodeStatus: function (node, color, text) {
        var options = { hour12: false, month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        var d = new Date();
        var ds = d.toLocaleDateString('en-US', options);
        node.status({fill: color, shape: 'dot', text: text + ' at ' + ds});
    }
}
