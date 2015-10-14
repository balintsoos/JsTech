import Backbone from 'backbone';

//var CodeSnippet = Backbone.Model.extend({
export default Backbone.Model.extend({
  defaults: function() {
    return {
        title: '',
        code: '',
        type: 'js',
    };
  },
});

//export default CodeSnippet;
