define([
  "jquery",
  "underscore",
  "backbone",
], function($, _, Backbone) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      "todoApp/List": "listToDoItems"
    },
    listToDoItems: function() {
      require(['toDoListView'], function(ToDoListView) {
        var toDoListView = new ToDoListView({
          el:"#content"
        });
        toDoListView.render();
      });
      console.log("listToDoItems Entered");
    }
  });
  var initialize = function() {
    var router = new AppRouter();
    Backbone.history.start();
  };

  return {
    initialize: initialize
  };
});
