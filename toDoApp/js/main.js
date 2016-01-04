require.config({
  paths: {
    app: "app",
    router: "router",
    jquery: "lib/jquery-min",
    underscore: "lib/underscore-min",
    backbone: "lib/backbone-min",
    text:"lib/text",

    toDoModel: "app/model/toDoModel",
    toDoCollection: "app/collection/toDoCollection",
    toDoListView:"app/view/toDoListView",
  }
});

require([
  "app"
], function(App) {
  App.initialize();
});
