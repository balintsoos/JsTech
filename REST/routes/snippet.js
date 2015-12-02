var express = require('express');
var router = express.Router();

var Datastore = require('nedb'),
    db = new Datastore({ filename: 'snippets.nedb', autoload: true });

router
    .get('/', function(req, res, next) {
        
    })
    .post('/', function(req, res) {
        
    })
    .put('/:id', function (req, res) {
        
    })
    .delete('/:id', function (req, res) {
        
    });

module.exports = router;