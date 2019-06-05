// Import ORM to initialize functions that utilize mySQL tacoya_db database
var orm = require("../config/orm");

var taco = {
  all: function(cb) {
    orm.selectAll("tacos", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insert: function(cols, vals, cb) {
    orm.insertOne("tacos", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(colValObj, id, cb) {
    orm.updateOne("tacos", colValObj, id, function(res) {
      cb(res);
    });
  },
  delete: function(id, cb) {
    orm.delete("tacos", id, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (tacoya_controller.js).
module.exports = tacos;