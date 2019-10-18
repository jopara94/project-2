const mongoose = require("mongoose");

//Mongoose Setup
mongoose.connect("mongodb://localhost/hacksDB", { useNewUrlParser: true });
mongoose.Promise = global.Promise;
module.exports = mongoose;