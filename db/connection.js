const mongoose = require("mongoose");


mongoose.Promise = global.Promise;

//Mongoose Setup

let mongoURI = "";
if (process.env.NODE_ENV === 'production') {
	mongoURI = process.env.DB_URL;
} else {
	mongoURI = 'mongodb://localhost/hacksDB';
}


mongoose.connect(mongoURI, { useNewUrlParser: true });

module.exports = mongoose;