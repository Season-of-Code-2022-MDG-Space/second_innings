const express = require("express");
const db = require("../../database");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

exports.wishlist = (req, res, next) => {
  //res.send("wishlist");

  var sql =
    "SELECT wishlist.enrollmentNumber, sellerlist.prodCategory, sellerlist.product, sellerlist.price, sellerlist.timestamp FROM sellerlist INNER JOIN wishlist ON wishlist.enrollmentNumber=sellerlist.enrollmentNumber";
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render("wishItems", { layout: "wishlist", data: data });
  });
};
