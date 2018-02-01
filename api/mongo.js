var mongoose = require("mongoose");
var env = process.env.NODE_ENV || "development";
var config = require("./config/mongoose/mongo")[env];

module.exports = () => {
  let envUrl = process.env[config.use_env_variable];
  let localUrl = `mongodb://${config.host}/${config.database}`;
  let mongoUrl = envUrl ? envUrl : localUrl;
  console.log("------------------");
  console.log(envUrl);
  console.log(localUrl);
  console.log(config);
  console.log(mongoUrl);
  console.log("------------------");
  return mongoose.connect(mongoUrl);
};
