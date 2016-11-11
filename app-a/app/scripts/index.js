var $ = require('jquery');
var Backbone = require('backbone');
var PostCollection = require('./models').PostCollection;
var postCollection = new PostCollection();

$.fn.serializeObject = function(){
  return this.serializeArray().reduce(function(acum, input){
    acum[input.name] = input.value;
    return acum
  }, {});
};

$(function(){
  $('#blog-post-form').on('submit', function(event){
    event.preventDefault();
    var postDetails = $(event.currentTarget).serializeObject();
    postCollection.create(postDetails);
    form.reset();
  })
});
