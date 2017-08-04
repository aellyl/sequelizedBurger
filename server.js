var express=require("express");
var md=require("method-override");
var bp=require("body-parser");
var ephb=require("express-handlebars");

var app=express();
//for heroku deployment
var port = process.env.PORT || 4000;

var db=require("./models");

app.use(express.static("public"));
app.use(bp.urlencoded({extended:false}));

app.use(md("_method"));

app.engine("handlebars",ephb({defaultLayout:"main"}));
app.set("view engine","handlebars");

// Sets up the Express app to handle data parsing
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(bp.text());
app.use(bp.json({ type: "application/vnd.api+json" }));

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controllers.js");
app.use("/", routes);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
});