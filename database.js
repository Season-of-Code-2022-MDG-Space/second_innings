var express = require("express");
var router = express.Router();
var mysql = require("mysql");

var con = mysql.createPool({
  connectionLimit: 100,
  host: "localhost",
  port : 3306,
  user: "root",
  database: "second",
  password: "Gurmannatsohal@2003",
});

con.getConnection((err, connection) => {
  if (err) throw err;
  console.log(`Database connected succesfully`);
  connection.release(error => error ? reject(error) : resolve());
});


module.exports = con;
