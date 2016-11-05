var $ = require('jquery');
var Backbone = require('backbone');

var models = require('./models/models');
var views = require('./views/views');

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'blog/:id': 'blogBody'
  },

  initialize: function(){
    this.collection = new models.BlogCollection();
  },

  index: function(){
    var homepageView = new views.BlogListingView({collection: this.collection});
    this.collection.fetch();
    $('#blog-links').html(homepageView.el);
  },

  blogBody: function(body){
    var self = this;
    var blog = this.collection.get(body);
    var bodyView = new views.BlogBodyView({model: blog});
    $('#blog-body').html(bodyView.el);
  }
});

var router = new AppRouter();

module.exports = {
  router: router
}
