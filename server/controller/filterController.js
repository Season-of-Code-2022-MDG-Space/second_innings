const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const db = require("../../database");

let filterdata;

//filter the data tmrw
exports.filter = (req, res) => {
  console.log(req.body);
  const { tag } = req.body;

  db.query(
    `SELECT * FROM sellerlist WHERE prodCategory="${tag}"`,
    (err, rows) => {
      if (err) throw err;
      filterdata = rows;
      console.log(filterdata);
      res.send(rows);
    }
  );
};

//render filtered data

exports.filterender = (req, res) => {
  console.log("hello");
  res.render("items", { layout: "dashboard", data: filterdata });
};
