var Backbone = require('backbone');

var Post = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    title: '',
    body: ''
  }
});


var PostCollection = Backbone.Collection.extend({
  model: Post,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/mdhbackboneblogparta'
});

module.exports = {
  Post: Post,
  PostCollection: PostCollection
};
