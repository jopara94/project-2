const express = require("express");
const hbs = require("hbs");
const app = express();
const hacks = require("./controllers/hacks");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

//middleware
const parser = app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "hbs");
app.use(methodOverride("_method"));

app.listen(5000, () => console.log("connected on 5000"));
app.use("/", hacks);