// Require the express package
var express = require("express");

// Store the router function from express in a var
var router = express.Router();

// Import the model to use its database functions.
var taco = require("../models/tacoya");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    taco.updateAll(function (data) {
        var hbsObject = {
            taco: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/tacos", function (req, res) {
    taco.insertTaco(["taco_name", "picked_up"], [req.body.taco_name, req.body.picked_up], function (data) {
        res.json({
            id: data.insertId
        });
    });
});

router.put("/api/tacos/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    taco.updateTaco(
        {
        picked_up: req.body.picked_up
        }, 
    condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/tacos/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    taco.deleteTaco(condition, function (result) {
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