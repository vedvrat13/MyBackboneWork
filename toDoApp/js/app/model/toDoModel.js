define([
  "backbone"
], function(Backbone) {
  var toDoModel = Backbone.Model.extend({
    defaults: {
      name:"",
      description: ""
    },
    validate: function(attr) {
      if (!attr.description)
        throw new error("Description is required");
    }
  });
  return toDoModel;
});
