var express = require('express');
var router = express.Router();

var Datastore = require('nedb'),
    db = new Datastore({ filename: 'snippets.nedb', autoload: true });

/*
var mongoose = require('mongoose');

var SnippetSchema = new mongoose.Schema({
    title: String,
    code: String,
    type: String,
    date: {type: Date, default: Date.now }
});

var Snippet = mongoose.model('Snippet', SnippetSchema);

router
    .get('/', function(req, res, next) {
        Snippet.find({}, function (err, docs) {
            res.json(docs);
        });
    })
    .post('/', function(req, res) {
        var snippet = new Snippet(req.body);
        snippet.save();
        res.json(snippet);
    })
    .put('/:id', function (req, res) {
        var id = req.params.id;
        var doc = req.body;
        Snippet.findByIdAndUpdate(id, doc, function (err) {
            res.json(doc);
        });
    })
    .delete('/:id', function (req, res) {
        var id = req.params.id;
        Snippet.findByIdAndRemove(id, function(err, doc) {
            res.json(doc);
        })
    });
*/
	
router
    .get('/', function(req, res, next) {
        db.find({}, function (err, docs) {
			res.json(docs);
		})
    })
    .post('/', function(req, res) {
		console.log(req.body);
        var doc = req.body;
		db.insert(doc, function (err, newDoc) {
			res.json(newDoc);
		})
    })
    .put('/:id', function (req, res) {
        
    })
    .delete('/:id', function (req, res) {
        
    });

module.exports = router;