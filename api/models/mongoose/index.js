var mongoose = require("mongoose");
var bluebird = require("bluebird");

mongoose.Promise = bluebird;

var models = {};

models.Analysis = require("./analysis.js");
models.Category = require("./categories.js");
models.Collection = require("./collection.js");
models.Comment = require("./comment.js");
models.Profile = require("./profile.js");
models.StudyOverflow = require("./study.js");
models.User = require("./user.js");

module.exports = models;

//
// {
//   id: 54982384,
//   hist: [
//     {id: 54982384, time: // time forked },
//     {id: 54982324, time: // time forked },
//     ...
//   ],
//   data: {
//      top-level: {
//      },
//      inclusion: {
//         included: [],
//         excluded: []
//      },
//      analyses: [
//        {
//          type: text [/graphic],
//          content: ""
//        },
//        {
//          type: graphic,
//          content: {
//            // Edwin's dustbin data
//          }
//        },
//      ]
//
//
//   }
// }
