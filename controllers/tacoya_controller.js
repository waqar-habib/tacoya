// Require the express package
var express = require("express");

// Store the router function from express in a var
var router = express.Router();

// Import the model to use its database functions.
var taco = require("../models/taco");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    taco.all(function (data) {
        var hbsObject = {
            taco: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/tacos", function (req, res) {
    taco.insert(["taco_name"], [req.body.taco_name], function (result) {
        res.json({
            id: result.insertId
        });
    });
});

router.put("/tacos/:id", function (req, res) {
    var id = "id = " + req.params.id;

    taco.update({
        picked_up: req.body.picked_up
    }, 
    id, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/tacos/:id", function (req, res) {
    var id = "id = " + req.params.id;

    taco.delete(id, function (result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;