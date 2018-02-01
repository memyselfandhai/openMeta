const api = (module.exports = require("express").Router());
// const products = require('./products');
// const reviews = require('./reviews');
// import products from './products';
const users = require("./users.js");
const rmarkdown = require("./rmarkdown");
const analyses = require("./analyses");
const cors = require("cors");

// api.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true
//   })
// );

api.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  // "Access-Control-Allow-Methods": "PUT,GET,POST,DELETE,OPTIONS",
  // "Access-Control-Allow-Headers": "*"

  next();
});

// api.use((req, res, next) => {
//   req.setHeader("Access-Control-Allow-Origin", "*");
//   next();
// });

api
  .get("/express-test", (req, res) => res.send({ express: "working!" })) //demo route to prove api is working
  .use("/users", users)
  .use("/rmarkdown", rmarkdown)
  .use("/analyses", analyses);

// No routes matched? 404.
api.use((req, res) => res.status(404).end());
