module.exports = function() {
    return {
        create: function(options) {
            var server = null;

            if(options.cert) {
                server = require('https').createServer(options, require(__dirname + '/requestHandler.js'));
            }
            else {
                server = require('http').createServer(require(__dirname + '/requestHandler.js'));
                console.warn('[WARNING] SSL Certificate not provided, fallback to HTTP. Note that Amazon Alexa requires HTTPS to communicate');
            }

            return server;
        }
    };
};
