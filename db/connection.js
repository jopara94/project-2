const mongoose = require("mongoose");

//Mongoose Setup
mongoose.connect("mongodb://localhost/hacksDB", { useNewUrlParser: true });
mongoose.Promise = Promise;
module.exports = mongoose;