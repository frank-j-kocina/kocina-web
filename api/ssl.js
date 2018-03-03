var fs = require('fs');
var http = require('http');
var https = require('https');

var privateKeyLocation = process.env.NODE_TEST_PRIVATE_KEY;
var certificateLocation = process.env.NODE_TEST_CERTIFICATE;

console.log(privateKeyLocation);
console.log(certificateLocation);

var privateKey  = fs.readFileSync(privateKeyLocation, 'utf8');
var certificate = fs.readFileSync(certificateLocation, 'utf8');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/json', function (req, res) {
  res.send(JSON.stringify({'hello': 'world'}));
});

app.get('/.well-known/acme-challenge/_____', function (req, res) {
  res.send('_____');
});

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(80);
httpsServer.listen(443);
