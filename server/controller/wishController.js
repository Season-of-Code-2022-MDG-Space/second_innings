const express = require("express");
const db = require("../../database");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

exports.wishlist = (req, res, next) => {
  //res.send("wishlist");
  var x = req.session.eno;
  console.log(x);
  var sql =
    "SELECT enrollmentNumber, prodCategory, product, price FROM sellerlist";
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render("wishItems", { layout: "wishlist", data: data });
  });
};
