const express = require("express");
const router = express.Router();
const con = require("D:/Git/MDG SoC/database.js"); //static path, needed to update at time of deployment
const formController = require("../controller/formController.js");

router.get("/", formController.viewform);
router.post("/", formController.postform);

module.exports = router;