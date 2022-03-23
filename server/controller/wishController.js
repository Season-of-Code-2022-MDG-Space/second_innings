const express = require("express");
const db = require("../../database");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let bool = 0;

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

let postprodID;

exports.showInfo = (req, res, next) => {
  //res.send("Information about the item");
  if (bool) {
    console.log("renderinfo");
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

exports.savewish = (req, res) => {
  var z = req.session.eno;

  var sql =
    "INSERT INTO wishlist ( enrollmentNumber, prodID ) VALUES (" +
    db.escape(z) +
    "," +
    db.escape(req.body.prodID) +
    ")";

  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Success!");
    console.log(result);
  });
};

exports.wishlist = (req, res) => {
  var sql =
    "SELECT sellerlist.enrollmentNumber, sellerlist.product, sellerlist.price FROM sellerlist INNER JOIN wishlist ON sellerlist.enrollmentNumber = wishlist.enrollmentNumber WHERE wishlist.enrollmentNumber =" +
    db.escape(req.session.eno) ;

  db.query(sql, function (err, result) {
    if (err) throw err;
    res.render("wishItems", {
      layout: "wishlist",
      data: result,
    });
  });
};

//posting
exports.postwish = (req, res) => {
  const { prodID } = req.body;
  console.log(prodID);
  postprodID = prodID;
  bool = 1;
  res.end();
};
