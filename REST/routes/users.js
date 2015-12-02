var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send("Hello " + (req.user ? req.user.username : ""));
});

router.get('/settings', function(req, res, next) {
  res.send('respond with settings');
});

module.exports = router;
