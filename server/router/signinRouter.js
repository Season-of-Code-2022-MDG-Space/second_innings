const express = require("express");
const router = express.Router();
const con = require("../../database");
const signinController = require("../controller/signinController.js");

router.get("/", signinController.viewsignin);
router.post("/", signinController.postsignin);

module.exports = router;
