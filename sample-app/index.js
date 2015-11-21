var alexa = require('alexafy');
var fs = require('fs');

var options = {
    key: fs.readFileSync('./ssl/alexafy.local.key'),
    cert: fs.readFileSync('./ssl/alexafy.local.crt'),
};

var app = new alexa(options);

app.start()
  .then(function() {
      console.log("Server started");
  });
