var express=require("express");
var md=require("method-override");
var bp=require("body-parser");
var ephb=require("express-handlebars");

var app=express();
//for heroku deployment
var port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(bp.urlencoded({extended:false}));

app.use(md("_method"));

app.engine("handlebars",ephb({defaultLayout:"main"}));
app.set("view engine","handlebars");

app.listen(port);

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controllers.js");
app.use("/", routes);