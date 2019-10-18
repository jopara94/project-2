const express = require("express");
const hbs = require("hbs");
const app = express();
const hacks = require("./controllers/hacks");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "hbs");
app.use(methodOverride("_method"));
app.use("/assets", express.static("public"));
app.use("/", hacks);

// Deployment

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});