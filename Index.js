//Modules imports
const express = require("express");
require("dotenv").config({ path: "./.env" });
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const App = express();
const Routers = require("./routes");
const PORT = process.env.PORT || 3000;

//App Usages
App.use(express.static(path.join(__dirname, "/public")));
App.use(cors());
App.use(express.json({ limit: "50mb" }));
App.use(bodyParser.json());
App.use("/myapi", Routers);

//App listens
App.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public", "/Index.html"));
});
App.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
