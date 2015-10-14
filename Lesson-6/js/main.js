import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import CodeSnippetCollection from './collections/codesnippetcollection';
import ListItemView from './views/listitemview';
import ListView from './views/listview';

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

var FilterView = Marionette.ItemView.extend({
    template: '#filter-template',
    ui: {
        'filterInput': '#text-filter'
    },
    events: {
        'keyup @ui.filterInput': 'onFilter',
        'submit': 'onSubmit',
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

var RootView = Marionette.LayoutView.extend({
    el: 'body',
    regions: {
        'main': '#main'
    }
});

var ListContainerView = Marionette.LayoutView.extend({
    
    el: '#list-container',
    //template: false,
    template: '#list-container-template',

    regions: {
        filter: '#filter',
        list:   '#list',
    },
	
	initialize() {
        this.filterView = new FilterView();
        this.collection = makeFilteredCollection(this.collection, function (filterText) {
            return this.filter(function (sn) {
                return sn.get('title').indexOf(filterText) > -1;
            });
        });
        this.collection.doFilter('');
                
        // this.filterView.on('filter:change', ...);
        this.listenTo(this.filterView, 'filter:change', this.updateCollection);
    },

    onBeforeShow() {
        this.getRegion('filter').show(this.filterView);
        this.getRegion('list').show(new ListView({
            collection: this.collection
        }));
    },
	
	updateCollection: function (filterText) {
        this.collection.doFilter(filterText);
    }
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