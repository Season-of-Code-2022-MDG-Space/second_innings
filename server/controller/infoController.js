const express = require("express");
const db = require("../../database");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

exports.showInfo = (req, res, next) => {
  //res.send("Information about the item");
  var sql =
    "SELECT person.name, person.branch, person.year, person.email, sellerlist.prodCategory, sellerlist.product, sellerlist.price, sellerlist.description, sellerlist.timestamp FROM person INNER JOIN sellerlist ON person.enrollmentNumber=sellerlist.enrollmentNumber ";
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render("infoItems", { layout: "info", data: data });
  });
};

exports.wishlist = (req, res) => {
  //add to table if not already added
};
