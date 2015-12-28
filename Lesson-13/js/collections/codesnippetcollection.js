import Backbone from 'backbone';
import CodeSnippet from '../models/codesnippet';
import LocalStorage from 'backbone.localStorage';

export default Backbone.Collection.extend({
    //localstorage: new LocalStorage("CodeSnippet"),
    url: 'api/snippets',

    model: CodeSnippet,
    
    getTitles: function(filterText = '') {
        return this
            .map(sn => sn.get('title'))
            .filter(t => t.indexOf(filterText) > -1);
    }
});