const mongoose = require("../db/connection");

const hackSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  body: { type: String, required: true }
});
const hackModel = mongoose.model("hack", hackSchema);

module.exports = hackModel;