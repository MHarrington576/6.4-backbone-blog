var $ = require('jquery');
var Backbone = require('backbone');
var ContactCollection = require('./models').ContactCollection;

var contactCollection = new ContactCollection();

$.fn.serializeObject = function(){
  return this.serializeArray().reduce(function(acum, input){
    acum[input.name] = input.value;
    return acum
  }, {});
};

$(function(){
  $('#create-contact').on('submit', function(e){
    e.preventDefault();
    var contactData = $(e.currentTarget).serializeObject();
    contactCollection.create(contactData);
  });
});
