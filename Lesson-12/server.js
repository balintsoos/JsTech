var fs        = require('fs');
var path      = require('path');
var express   = require('express');
var partials  = require('express-partials');
var port      = process.env.PORT || 3000;
var app       = express();

// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// middlewares
app.use(partials());
app.use(express.static('public'));

app.get('/', function (req, res) {
  //res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/name/:name', function (req, res) {
  var name = req.params.name;
  res.render('main', {
    nev: name
  });
});

app.get('*', function (req, res) {
  res.send('<p>404 - Sorry, but the page you are looking for has not been found.</p>');
});

var server = app.listen(port, function () {
  console.log('Server is running!');
});
