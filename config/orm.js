// Require mySQL connection.js file
var connection = require("./connection");

function printQuestions(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax

function sqlobject(ob) {
    var arr = [];
    
    // loop through the keys and push the key/value as a string int arr
        for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === 'string' && value.indexOf(' ') >= 0) {
            value = "'" + value + "'";
        }
        arr.push(key + '=' + value);
    }
  }

  return arr.toString();
}

// Object for all our SQL statement functions.
var orm = {
    updateAll: function(table, cb) {
      var query = 'SELECT * FROM ' + table + ';';
      connection.query(query, [table], function(err, res) {
        if (err) {
          console.log(err);
          throw err;
        }
        console.log(res);
        cb(res);
      });
    },
    insertTaco: function(table, cols, vals, cb) {
      var query = 'INSERT INTO ' + table;
      query += ' (';
      query += cols.toString();
      query += ') ';
      query += 'VALUES (';
      query += printQuestions(vals.length);
      query += ') ';
  
      connection.query(query, vals, function(err, res) {
        if (err) {
          console.log(err);
          throw err;
        }
        cb(res);
      });
    },
    updateTaco: function(table, obj, condition, cb) {
      var query = 'UPDATE ' + table;
      query += ' SET ';
      query += sqlobject(obj);
      query += ' WHERE ';
      query += condition;
      
      connection.query(query, function(err, res) {
        if (err) {
          console.log(err);
          throw err;
        }
        cb(res);
      });
    },
    deleteTaco: function(table, obj, condition, cb) {
        var query = 'DELETE ' + table;
        query += ' SET ';
        query += sqlobject(obj);
        query += ' WHERE ';
        query += condition;
        
        connection.query(query, function(err, res) {
          if (err) {
            console.log(err);
            throw err;
          }
          cb(res);
        });
    }
    
  };
  
  // Export the orm object for the model (orm.js).
  module.exports = orm;
  