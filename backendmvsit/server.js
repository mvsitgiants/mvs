const express = require("express");
const mongose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const dbconnect = require("./config/dbconfig");
const router = require("./router/Router");
const app = express();
app.use(cors());

app.use(express.json());
dbconnect();
app.use("/api/v1", router);
app.listen(8080, () => {
  console.log("heloo i am start");
});
