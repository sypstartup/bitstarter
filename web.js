var express = require('express');
var app = express();
app.use(express.logger());

var fs = require('fs');
var filename = './bitstarter/index.html';
var buf = fs.readFileSync(filename);
var len = buf.write(fs.readFileSync(filename, 'utf8'), 0);

app.get('/', function(request, response) {
  response.send(buf.toString('utf8', 0, len));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
