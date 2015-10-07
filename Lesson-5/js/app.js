
// Modell
var snippets = [
	{
		title: 'valami',
		code: 'valami',
		type: 'js',
	},
	{
		title: 'valami2',
		code: 'valami2',
		type: 'js',
	},
];

var CodeSnippet = Backbone.Model.extend({
	defaults: function() {
		return {
			title: '',
			code: '',
			type: 'js',
		};
	},
});
//Próba
//console.log(new CodeSnippet());

var CodeSnippetCollection = Backbone.Collection.extend({
	model: CodeSnippet,
	
	getTitles: function(filterText = '') {
		return this
			.map(sn => sn.get('title'))
			.filter(t => t.indexOf(filterText) > -1);
	}
});
//Próba
//console.log(new CodeSnippetCollection(snippets));

var ListItemView = Marionette.ItemView.extend({
	tagName: 'li',
	className: 'list-group-item',
	template: '#list-item-template',
});

var ListView = Marionette.CollectionView.extend({
	tagName: 'ul',
	className: 'list-group',
	childView: ListItemView
});

var FilterView = Marionette.ItemView.extend({
	template: '#filter-template',
	
	ui: {
		'filterInput': '#text-filter'
	},
	
	events: {
		'keyup @ui.filterInput': 'onFilter',
		'submit': 'onSubmit',
	},

	initialize() {
		this.filterView = new FilterView();
		this.collection = makeFilteredCollection(this.collection, function (filterText) {
			return this.filter(function (sn) {
					return sn.get('title').indexOf(filterText) > -1;
			});
		});
		this.collection.doFilter('');
						
		//this.filterView.on('filter:change', ...);
		this.listenTo(this.filterView, 'filter:change', this.updateCollection);
	},

	onFilter(e) {
		var filterText = this.ui.filterInput.val();
		//console.log(filterText);
		this.trigger('filter:change', filterText);
	},
	
	onSubmit(e) {
		e.preventDefault();
	}
});
/*
var ListView = Backbone.View.extend({
		
	el: '#list-container',
	template: _.template( $('#listItems').html() ),
	filterText: '',

	events: {
		'keyup #text-filter': 'onKeyUp'
	},
	
	initialize: function() {
		// this.render();
	},
	
	render: function () {
		this.$('#code-list').html( this.template( {
				coll: this.collection.getTitles(this.filterText)
		}));
	},
	
	onKeyUp: function (e) {
		this.filterText = e.currentTarget.value;
		this.render();
	}
});
*/

new ListView({
	collection: new CodeSnippetCollection(snippets)
});


var RootView = Marionette.LayoutView.extend({
	el: 'body',
	regions: {
		'main': '#main'
	}
});

var ListContainerView = Marionette.LayoutView.extend({
		
	el: '#list-container',
	template: false,

	regions: {
		filter: '#filter',
		list:   '#list',
	},

	onBeforeShow() {
		this.getRegion('filter').show(this.filterView);
		this.getRegion('list').show(new ListView({
			collection: this.collection
		}));
	},
});

var app = new Marionette.Application();
				
app.on('start', function () {
	this.rootView = new RootView();
	this.lcv = new ListContainerView({
			collection: new CodeSnippetCollection(snippets)
	});
	this.rootView.getRegion('main').show(this.lcv);
});

app.start();

function makeFilteredCollection(coll, filterFn) {
	var FC = Backbone.Collection.extend({
		initialize: function () {
			filterFn = filterFn.bind(coll);
		},
		doFilter: function (filterText) {
			var filtered = filterFn(filterText);
			return this.reset(filtered);
		}
	});
		
	return (new FC());
}
