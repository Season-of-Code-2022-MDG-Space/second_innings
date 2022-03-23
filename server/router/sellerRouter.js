var express = require("express");
var router = express.Router();
var con = require("D:/Git/MDG SoC/database.js");
const sellerlistcontroller = require("../controller/dashboardController");
const wishController = require("../controller/wishController");
const listController = require("../controller/listController");
const infoController = require("../controller/infoController");
const filterController = require("../controller/filterController");

router.get("/", sellerlistcontroller.dashboardview);
router.get("/wishlist", wishController.wishlist);
router.post("/wishpost", wishController.postwish);
router.get("/listings", listController.listView);
router.get("/info", infoController.showInfo);
router.post("/infopost", infoController.postprod);
router.get("/listings/sold", listController.sold);
router.post("/filters", filterController.filter);
router.get("/renderfilters", filterController.filterender);

module.exports = router;
