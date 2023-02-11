//Modules imports
const express = require("express");
const route = express.Router();
const bodyParser = require("body-parser");
const info = require("./user");

//route Usages
route.use(bodyParser.json());
route.use(express.json({ limit: "50mb" }));

//routes path
route.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to my express API",
    success: true,
    info,
  });
});
module.exports = route;
