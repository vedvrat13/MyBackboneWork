// Create a model with Backbone.Model.extend
// idAttribute to define the attribute that needs to be treated as id
var Vehicle = Backbone.Model.extend({
  idAttribute: "registrationNumber",
  urlRoot: "/api/vehicles",

  // validate function to validate all the attributes
  validate: function(attrs) {
    if (!attrs.registrationNumber) {
      return "Vehicles is not valid"
    }
    if (!attrs.color) {
      return "Color is not valid"
    }
  },
  start: function() {
    console.log("Vehicle Started")
  }
});

var Vehicles = Backbone.Collection.extend({
  model: Vehicle
});


// In Backbone, the Child is extended via Parent.extend({})
var Car = Vehicle.extend({
  start: function() {
    console.log("Car Started " + this.get('registrationNumber'));
  }
});

var vehicles = new Vehicles([
	new Car({ registrationNumber: "XLI887", color: "Blue" }),
	new Car({ registrationNumber: "ZNP123", color: "Blue" }),
	new Car({ registrationNumber: "XUV456", color: "Gray" })
]);

// // MODEL CHAPTER
// // To remove an Attribute from the Model
// car.unset("registrationNumber");
//
// // To validate the model
// if (!car.isValid())
//   console.log(car.validationError);
//
// // Set/Get a model value
// car.set("registrationNumber", "XLI887");
// console.log(car.get("registrationNumber"));
//
// if (!car.isValid())
//   console.log(car.validationError);
//
// car.start();

// // COLLECTIONS CHAPTER
// var blueCars = vehicles.where({ color: "Blue" });
// console.log("Blue cars", blueCars);
//
// var carXLI887 = vehicles.findWhere({ registrationNumber: "XLI887" });
// console.log("Car with registration number XLI887", carXLI887);
//
// vehicles.remove(carXLI887);
//
// console.log("Vehicles as JSON", vehicles.toJSON());
