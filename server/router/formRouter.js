const express = require("express");
const router = express.Router();
const con = require("../../database");
const formController = require("../controller/formController.js");

router.get("/", formController.viewform);
//router.post("/", formController.postform);

module.exports = router;
