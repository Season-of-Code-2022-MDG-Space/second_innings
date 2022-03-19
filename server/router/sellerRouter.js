var express = require("express");
var router = express.Router();
var con = require("D:/Git/MDG SoC/database.js");
const sellerlistcontroller = require("../controller/dashboardController");
const wishController = require("../controller/wishController");
const listController = require("../controller/listController");
const infoController = require("../controller/infoController");

router.get("/", sellerlistcontroller.dashboardview);
router.get("/wishlist", wishController.wishlist);
router.get("/listings", listController.listView);
router.get("/info", infoController.showInfo);
router.get("/listings/sold", listController.sold);
router.get("/info/wishlist", infoController.wishlist);

module.exports = router;
