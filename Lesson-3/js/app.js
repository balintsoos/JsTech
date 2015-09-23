// Lesson-3
var log = console.log.bind(console);

// ECMAScript 6 feature
var a = 3;
//log(`ki ${a}`);

/*
var sn = {
	title: "cim",
	code: "code",
	type: "js",
}
*/

function inherit (Child, Parent) {
	Child.prototype = Object.create(Parent.prototype);
	Child.prototype.constructor = Child;
}

// with uppercase this is a constructor function
function Snippet (title, code, type) {
	this.title = title || 'cim';
	this.code = code || 'kod';
	this.type = type || 'js';
	this._privat = 12;
}
// methods of the Snippet constructor
Snippet.prototype.getCode = function() {
	return this.code;
};
Snippet.prototype.getPrivat = function() {
	return this._privat;
};

function SpecialSnippet (title, code, type, special = 'sp') {
	Snippet.call(this, title, code, type);
	this.special = special;
}
SpecialSnippet.prototype = Object.create(Snippet.prototype);
SpecialSnippet.prototype.constructor = SpecialSnippet;
SpecialSnippet.prototype.getSpecial = function() {
	return this.special;
};

var ssn = new SpecialSnippet();
log(ssn);
log(ssn.getSpecial());
log(ssn.getPrivat());
log(ssn.getCode());
