// index.js

var http = require('http');
var fs = require('fs');
var readline = require ('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


http.createServer(function (req, res) {
    rl.question('Please provide some html for this page : \n', (answer) => {
      fs.writeFile('demoFile.html', answer, function(err, data) {
        fs.readFile('demoFile.html', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          res.end();
        });
      });
    });
}).listen(8080);