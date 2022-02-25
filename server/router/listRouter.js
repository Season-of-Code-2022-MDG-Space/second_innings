const express = require("express");
const router = express.Router();
const con = require("D:/Git/MDG SoC/database.js"); //static path, needed to update at time of deployment

router.post("/", function (req, res) {
  console.log(req.body.prodCategory);
  console.log(req.body.product);
  console.log(req.body.price);
  console.log(req.body.description);

  var sql =
    "INSERT INTO sellerlist ( prodCategory, product, price, description) VALUES (" +
    con.escape(req.body.prodCategory) +
    "," +
    con.escape(req.body.product) +
    "," +
    con.escape(req.body.price) +
    "," +
    con.escape(req.body.description) +
    ")";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Success!");
    console.log(result);
    res.sendFile("D:/Git/MDG SoC/submitform.html"); //static path
  });
});

module.exports = router;
