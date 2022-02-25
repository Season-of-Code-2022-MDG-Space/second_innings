const express = require("express");
const router = express.Router();
const con = require("D:/Git/MDG SoC/database.js"); //static path, needed to update at time of deployment
const signinController = require("../controller/signinController.js");

/*router.post("/", function (req, res) {
  res.sendFile("D:/Git/MDG SoC/dashboard.hbs"); //static path
});

router.get("/", function (req, res) {
  res.sendFile(__dirname + "../index.html");
});*/

router.get("/", signinController.viewsignin);
router.post("/", signinController.postsignin);

module.exports = router;
