define([
  "backbone",
  "toDoModel"
], function(Backbone, toDoModel) {
  var toDoCollection = Backbone.Collection.extend({
    model: toDoModel
  });

  return toDoCollection;

});
