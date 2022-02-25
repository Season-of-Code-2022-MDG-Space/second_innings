var express = require("express");
var router = express.Router();
var con = require("D:/Git/MDG SoC/database.js");
const sellerlistcontroller = require("../controller/dashboardController");

router.get("/", sellerlistcontroller.dashboardview);

module.exports = router;
