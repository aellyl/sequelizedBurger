var express = require("express");
var burger = require("../models/burger.js");

var route = express.Router();


route.get("/", function (req, res) {
    burger.selectAll(function (data) {
        console.log(data);
        res.render("index", { burgers: data });
    })

});

route.post("/", function (req, res) {
    if (req.body.burgerName) {
        var data = {
            burger_name: req.body.burgerName,
            devoured: false
        }
        burger.insertOne(data, function (result) {
            if (result) {
                res.redirect("/");
            }
            else {
                console.log("Insert failed");
            }

        });

    }else
    {
        res.redirect("/");
    }

});

route.put("/:id", function (req, res) {
    // if (req.body.devour === "true") {
    //     var data = {
    //         devoured: true
    //     }
    // }
    var data = {
        devoured: true
    }

    burger.updateOne(data, "id", req.params.id, function (result) {

        if (result) {
            console.log("devoured: " + result);
            res.redirect("/");
        }
        else {
            console.log("update failed");
        }
    });
});

module.exports = route;