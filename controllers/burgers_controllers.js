var express = require("express");
var db = require("../models");

var route = express.Router();


route.get("/", function (req, res) {
    // burger.selectAll(function (data) {
    //     console.log(data);
    //     res.render("index", { burgers: data });
    // })
    db.seq_burger.findAll({ include: [db.seq_customer] }).then(function (data) {
        console.log(JSON.stringify(data));
        res.render("index", { burgers: data });

    });

});

route.post("/", function (req, res) {
    if (req.body.burgerName) {
        var data = {
            burger_name: req.body.burgerName,
            devoured: false
        }
        // burger.insertOne(data, function (result) {
        //     if (result) {
        //         res.redirect("/");
        //     }
        //     else {
        //         console.log("Insert failed");
        //     }

        // });
        db.seq_burger.create(data).then(function (data) {

            console.log(data);
            res.redirect("/");

        });

    } else {
        res.redirect("/");
    }

});

route.put("/:id", function (req, res) {

    // var data = {
    //     devoured: true,
    //     segCustomerId: parseInt(req.body.customer)
    // }
    // console.log(data);
    // burger.updateOne(data, "id", req.params.id, function (result) {

    //     if (result) {
    //         console.log("devoured: " + result);
    //         res.redirect("/");
    //     }
    //     else {
    //         console.log("update failed");
    //     }
    // });



    db.seq_burger.update({ devoured: true, seqCustomerId: parseInt(req.body.customer) }, {
        where: {
            id: req.params.id
        }
    }).then(function (data) {
        console.log(data);
        res.redirect("/");
    });




});

//Manage customer Route
route.get("/customer", function (req, res) {
    db.seq_customer.findAll({ include: [db.seq_burger] }).then(function (customers) {
        if (customers.length > 0) {
            console.log(JSON.stringify(customers));
            console.log(customers[0].seq_burgers.length);
            var data = [];
            for (var i = 0; i < customers.length; i++) {
                var tmp = {
                    customer_name: customers[i].customer_name,
                    burgerCnt: customers[i].seq_burgers.length
                }
                data.push(tmp);
            }
            console.log(data);
            res.render("customer", { customers: data });

            // db.seq_customer.findAndCountAll({ 
            //     include:{
            //         model:db.seq_burger,
            //         require:true
            //     }
            //  }).then(function (data) {
            //     console.log(data);

            //     res.render("customer",{data:customers});
            // });
        } else {
            res.render("customer");
        }
    })



});

route.post("/customer/new", function (req, res) {
    if (req.body.customer) {
        var data = {
            customer_name: req.body.customer
        }
        // burger.insertOne(data, function (result) {
        //     if (result) {
        //         res.redirect("/");
        //     }
        //     else {
        //         console.log("Insert failed");
        //     }

        // });
        db.seq_customer.create(data).then(function (data) {

            //console.log(data);
            res.redirect("/customer");

        });

    } else {
        res.redirect("/customer");
    }

});

route.get("/api/customers", function (req, res) {
    db.seq_customer.findAll({}).then(function (customers) {
        res.json(customers);
    });
})

module.exports = route;