import Backbone from 'backbone';
import CodeSnippet from '../models/codesnippet';

export default Backbone.Collection.extend({
    model: CodeSnippet,
    
    getTitles: function(filterText = '') {
        return this
            .map(sn => sn.get('title'))
            .filter(t => t.indexOf(filterText) > -1);
    }
});