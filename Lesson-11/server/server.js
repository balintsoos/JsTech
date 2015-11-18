// var http = require('http');

// var port = process.env.PORT || 3000;

// http.createServer(function (req, res) {
// 	res.writeHead(200, {'Content-Type': 'text/plain'});
// 	res.end('Hello browser!\n');
// }).listen(port);

var express = require('express');
var app = express();

app.all('*', function (req, res, next) {
	console.log(req.method, req.url);
	next();
});

app.get('/', function (req, res) {
	res.send("Hello client");
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
	console.log("Listening...");
});