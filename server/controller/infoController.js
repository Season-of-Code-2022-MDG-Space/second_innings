const express = require("express");
const db = require("../../database");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let bool = 0;

let postprodID;

exports.showInfo = (req, res, next) => {
  //res.send("Information about the item");
  if (bool) {
    var sql =
      "SELECT person.name, person.branch, person.year, person.email, sellerlist.prodCategory, sellerlist.product, sellerlist.price, sellerlist.description FROM person INNER JOIN sellerlist ON person.enrollmentNumber=sellerlist.enrollmentNumber where prodID=" +
      db.escape(postprodID);
    db.query(sql, function (err, data, fields) {
      if (err) throw err;
      res.render("infoItems", { layout: "info", data: data });
    });
  } else {
    res.redirect("/dashboard");
  }
};

exports.wishlist = (req, res) => {
  //add to table if not already added
  res.render("wishItems", {
    layout: "wishlist", //, data:data
  });
};

//posting
exports.postprod = (req, res) => {
  const { prodID } = req.body;
  console.log(prodID);
  postprodID = prodID;
  bool = 1;
  res.end();
};
