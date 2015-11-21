var Promise = require('bluebird');
var serverFactory = new require(__dirname + '/serverFactory.js');

module.exports = function(options) {
    var server = serverFactory.create(options);

    return {
        start: function(port) {
            return new Promise(function(resolve, reject){
        		server.listen(port || 8000, function(err, data){
        			if (err) {
        				reject(err);
        			} else {
        				resolve(data);
        			}
        		});
        	});
        },
        stop: function() {
            return new Promise(function(resolve, reject) {
                try {
                    server.close();
                    resolve();
                } catch(err) {
                    reject(err);
                }
            });
        }
    };
};
