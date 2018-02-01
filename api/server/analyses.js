var express = require("express");
var router = express.Router();

//access to database

let models = require("./../models/mongoose");
let Analysis = models.Analysis;

/* GET home page. */
router.get("/", function(req, res, next) {
  console.log("response from route", res.Header);
  console.log("are we getting here?");
  Study.findAll({
    include: [{ model: Tag, as: "TaggedStudy" }]
  })
    .then(users => {
      res.status(200).send(users);
    })
    .catch(e => res.status(500).send(e.stack));
});

module.exports = router;
