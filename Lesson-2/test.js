
function createSnippet() {
	return {
		title: 'es6 functions',
		type: 'js',
		code: '() => 1',
		date: Date.now(),

		setType: function (sn, type) {
			this.type = type;
		}
	}
}

var sn1 = createSnippet();
var sn2 = createSnippet();
console.log(sn1 === sn2);

var snippet = {
	create: function () {
		return {
			title: 'es6 functions',
			type: 'js',
			code: '() => 1',
			date: Date.now(),

			setType: function (sn, type) {
				this.type = type;
			}
		}
	}
}

var sn3 = snippet.create();