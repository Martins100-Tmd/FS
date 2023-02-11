//Modules imports
const express = require("express");
require("dotenv").config({ path: "./.env" });
const cors = require("cors");
const bodyParser = require("body-parser");
const App = express();
const Routers = require("./routes");
const PORT = process.env.PORT || 3000;

//App Usages
App.use(cors());
App.use(express.json({ limit: "50mb" }));
App.use(bodyParser.json());
App.use("/myapi", Routers);

//App listens
App.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
