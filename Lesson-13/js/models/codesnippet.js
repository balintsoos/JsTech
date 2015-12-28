import Backbone from 'backbone';

export default Backbone.Model.extend({
    defaults() {
        return {
            title: '',
            code: '',
            type: 'js',
        };
    },
});