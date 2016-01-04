define([
  "jquery",
  "underscore",
  "backbone",
  "router",
], function($, _, Backbone, router) {

  var initialize = function() {
    console.log("App Entered");
    router.initialize();
  };

  return {
    initialize: initialize
  }

});
