const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const db = require("../../database");
//let sandwich = getCookie("sandwich");

exports.listView = (req, res) => {
  //res.send("Your listings");
  var y = req.session.eno;
  console.log(y);
  var sql =
    "SELECT prodCategory, product, price, timestamp FROM sellerlist WHERE enrollmentNumber = " +
    db.escape(y);
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render("listItems", { layout: "listings", data: data });
  });
};

exports.sold = (req, res) => {
  var a = req.session.eno;
  //var sql = "DELETE FROM sellerlist [WHERE enrollmentNumber=]"

  var sql = "SELECT prodCategory, product, price, timestamp FROM sellerlist ";
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render("listItems", { layout: "listings", data: data });
  });
};

exports.chat = (req, res) => {
  let data = {};
  //const eno = req.session.eno;
  console.log(req.session.eno);
  data["name"] = eno;

  data["room"] = prodID;
  res.json(data);
};
