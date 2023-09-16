const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.listen(5000, () => {
  console.log("Server Runnging...");
});
