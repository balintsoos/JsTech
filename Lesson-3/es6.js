class Snippet {
	constructor(title='cim', code='kod', type='js') {
		this.title = title;
		this.code = code;
		this.type = type;
	}
	getCode() {
		return this.code;
	}
}

class SpecialSnippet extends Snippet {
	constructor(title='cim', code='kod', type='js', special='sp') {
		super(title, code, type);
		this.special = special;
	}
	getCode() {
		return 'Special ' + super.getCode();
	}
}

var ssn = new SpecialSnippet();
console.log(ssn);
console.log(ssn.getCode());
//console.log(typeof Snippet);