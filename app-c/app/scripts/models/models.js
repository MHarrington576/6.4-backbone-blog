var Backbone = require('backbone');

var BlogBody = Backbone.Model.extend({
  idAttribute: '_id'
});

var BlogCollection = Backbone.Collection.extend({
  model: BlogBody,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/mdhbackboneblogs'
});

module.exports = {
  BlogBody: BlogBody,
  BlogCollection: BlogCollection
}
