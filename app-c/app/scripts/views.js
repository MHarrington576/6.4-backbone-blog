var $ = require('jquery');
var Backbone = require('backbone');

var BlogListingView = Backbone.View.extend({
  tagName: 'ul',
  events: {
    'click .clickme': 'displayPost'
  },
  render: function(){
    var context = this.model.toJSON();
    this.$el.html(this.)
  }
});

// var BlogListing = Backbone.View.extend({
//   tagName: 'ul',
//   renderPost: function(){
//     var postLink = new BlogListingView({model: });
//   }
// });
