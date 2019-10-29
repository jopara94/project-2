const express = require("express");
const router = express.Router();
const hackModel = require("../models/hackModel");
// This should just be at the bottom of the file!
module.exports = router;

// I would have one space between each route
//Homepage Route
router.get("/", (req, res) => {
  hackModel
    .find({})
    .then(hacks => {
      res.render("index", { hacks: hacks });
    })
    .catch(err => console.log(err));
});
//Update/Edit
router.get("/edit/:id", (req, res) => {
  hackModel.findOne({ _id: req.params.id }).then(hacks => {
    res.render("edit", { hacks });
  });
});
router.put("/:id", (req, res) => {
  hackModel
    .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(hacks => {
      res.redirect("/");
    });
});
//Delete Route
router.delete("/:id", (req, res) => {
  hackModel.findOneAndDelete({ _id: req.params.id }).then(() => {
    res.redirect("/");
  });
});

//About Route
router.get("/About", (req, res) => {
  res.render("about");
});
//Routes to add a question
router.get("/new", (req, res) => {
  res.render("new");
});

router.post("/", (req, res) => {
  // Nice job adding validation! I would add in flash messages so that the user sees an error if they forget a field
  let err = [];
  if (!req.body.title || !req.body.author || !req.body.body) {
    err.push("All fields must be filled");
  }
  if (err.length > 0) {
    res.render("new", { errors: err });
  } else {
    hackModel.create(req.body).then(hack => {
      res.redirect("/");
    });
  }
});

module.exports = router;