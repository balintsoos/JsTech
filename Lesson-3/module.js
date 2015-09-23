function inherit (Child, Parent) {
	Child.prototype = Object.create(Parent.prototype);
	Child.prototype.constructor = Child;
}

var Snippet = (function () {
	function Snippet (title, code, type) {
		this.title = title || 'cim';
		this.code = code || 'kod';
		this.type = type || 'js';
		this._privat = 12;
	}
	Snippet.prototype.getCode = function() {
		return this.code;
	}
	Snippet.prototype.getPrivat = function() {
		return this._privat;
	}

	return Snippet;
})();


// BEST ES5 class gen
var SpecialSnippet = (function (Parent) {
	function SpecialSnippet (title, code, type, special = 'sp') {
		Parent.call(this, title, code, type);
		this.special = special;
	}
	inherit(SpecialSnippet, Parent);
	SpecialSnippet.prototype.getSpecial = function() {
		return this.special;
	};

	return SpecialSnippet;
})(Snippet);