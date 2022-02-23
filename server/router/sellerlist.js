var express = require("express");
var router = express.Router();
var db = require("D:/Git/MDG SoC/database.js");

router.get("/", function (req, res, next) {
  var sql = "SELECT prodCategory, product, price FROM sellerlist";
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    console.log(data);
    res.render("items", { layout: "dashboard", data: data });
  });
});
module.exports = router;
