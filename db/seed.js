const hackModel = require("../models/hackModel");
const seedData = require("./seeds.json");
//Populating db w/ seed data
hackModel
  .deleteMany({})
  .then(() => {
    return hackModel.insertMany(seedData);
  })
  .then(() => {
    console.log("seeded with data");
    process.exit();
  });
