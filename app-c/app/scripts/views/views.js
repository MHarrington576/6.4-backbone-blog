var $ = require('jquery');
var Backbone = require('backbone');

var blogListingTemplate = require('../../templates/blog-title-template.hbs');
var blogBodyTemplate = require('../../templates/blog-body-template.hbs');

var BlogListingView = Backbone.View.extend({
  tagName: 'ul',
  className: 'well',
  template: blogListingTemplate,

  initialize: function(){
    this.listenTo(this.collection, 'add', this.render);
  },

  render: function(post){
    post = post.toJSON();
    if(post.title){
      this.$el.append(this.template(post));
    }
    return this;
  }
});

var BlogBodyView = Backbone.View.extend({
  tagName: 'div',
  className: 'well',
  template: blogBodyTemplate,

  initialize: function(){
    this.listenTo(this.model, 'changed', this.render);
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

module.exports = {
  BlogListingView: BlogListingView,
  BlogBodyView: BlogBodyView
};
