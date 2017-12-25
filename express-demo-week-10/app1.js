var app = require('express')();
var server = require('http').Server(app);
var PORT = 3000;

app.get('/', function(request, response) {
  response.send('<h1>hello express<h1>');
});

server.listen(PORT, function() {
  console.log('listening on port ' + PORT);
});
