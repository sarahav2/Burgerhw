var express = require("express");

var router = express.Router();

// Import the ORM to create functions that will interact with the database.
// var orm = require("../config/orm.js");

// Import the model to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
// router.get("/", function(req, res) {
//   res.redirect("/burgers");
// });

router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers/create", function(req, res) {
  burger.create([
    "burger_name"
  ], [
    req.body.burger_name
  ], function() {
    res.redirect("/burgers");
  });
});

router.put("/burgers/update/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/burgers");
  });
});

// Export routes for server.js to use.
module.exports = router;