// Import the ORM
var orm = require('../config/orm.js');

var taco = {
    updateAll: function (cb) {
        orm.updateAll('tacos', function (res) {

            //Callback
            cb(res);
        });
    },

    insertTaco: function (cols, vals, cb) {

        orm.insertTaco('tacos', cols, vals, function (res) {

            cb(res);
        });
    },
    updateTaco: function (obj, condition, cb) {

        // Update Taco With ORM
        orm.updateTaco('tacos', obj, condition, function (res) {

            //Callback
            cb(res);
        });
    }
};

// Export to controller
module.exports = taco;