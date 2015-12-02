var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');

var routes = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');
// var snippets = require('./routes/snippet');

//Passport
var credentials = {
  'user1': 'user1',
  'a': 'a',
  'user3': 'user3',
};

passport.use('local', new LocalStrategy(
  function(username, password, done) {
    // console.log(username, password);
    if (!credentials[username]) {
     return done(null, false, { message: 'Incorrect username.' });
    }
    if (credentials[username] !== password) {
     return done(null, false, { message: 'Incorrect password.' });
    }
    var user = {
     id: username,
     username: username
    };
    return done(null, user);
  }
));

passport.serializeUser(function(user, done) {
   done(null, user.id);
});
 
passport.deserializeUser(function(id, done) {
   var user = credentials[id];
   done(null, user);
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  cookie: { maxAge: 60000 },
  secret: 'titkos szoveg',
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);
app.use('/users', users);
app.use('/auth', login);
// app.use('/api/snippets', snippets);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
