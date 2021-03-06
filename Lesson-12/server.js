var fs          = require('fs');
var path        = require('path');
var express     = require('express');
var partials    = require('express-partials');
var bodyParser  = require('body-parser');
var session     = require('express-session');
var passport    = require('passport');
var port        = process.env.PORT || 3000;
var app         = express();

// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(partials());
app.use(express.static('public'));
app.use(session({
  cookie: { maxAge: 600000 },
  secret: 'titkos szoveg',
  resave: false,
  saveUninitialized: false,
}));

app.get('/', function (req, res) {
  // it just works without sendFile because we set express.static earlier
  //res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/count', function (req, res) {
  var sess = req.session;
  var cnt = sess.cnt || 0;

  cnt++;
  sess.cnt = cnt;

  res.render('counter', {
      cnt: cnt
  });
});

app.get('/main/:name', function (req, res) {
  var name = req.params.name;
  res.render('main', {
    nev: name
  });
});

app.post('/main', function (req, res) {
  var name = req.body.name;
  res.render('main', {
    nev: name
  });
});

app.get('*', function (req, res) {
  res.send('<p>404 - Sorry, but the page you are looking for has not been found.</p>');
});

var server = app.listen(port, function () {
  console.log('Server is running @ Port ' + port);
});
