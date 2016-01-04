define([
  "jquery",
  "underscore",
  "backbone",
  "toDoModel",
  "toDoCollection",
], function($, _, Backbone, ToDoModel, ToDoCollection) {
  var toDoListView = Backbone.View.extend({

    initialize: function(options) {
      var self = this;

      self.toDoCollection = new ToDoCollection([
        new ToDoModel({
          name: "test1",
          description: "desc1"
        }),
        new ToDoModel({
          name: "test2",
          description: "desc2"
        })
      ]);
    },
    render: function() {
      var self = this;
      var landingTemplate = $('#toDoMainTemplate').html();

      self.toDoCollection.each(function(item) {
        var template = _.template(landingTemplate);
        self.$el.append(template(item.attributes));
      });
      console.log("Render Called");
    }
  });
  return toDoListView;

});
