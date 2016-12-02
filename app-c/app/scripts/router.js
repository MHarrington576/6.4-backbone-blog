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
    this.collection.fetch();
  },

  index: function(){
    var homepageView = new views.BlogListingView({collection: this.collection});
    $('#blog-links').html(homepageView.el);
  },

  blogBody: function(id){
    var self = this;
    var blog = this.collection.get(id);
    var bodyView = new views.BlogBodyView({model: blog});
    if(!blog){
      this.collection.fetch().then(function(){
        self.blogBody(id);
      });
      return
    };

    $('#blog-body').html(bodyView.render().el);
  }
});

var router = new AppRouter();

module.exports = {
  router: router
};
