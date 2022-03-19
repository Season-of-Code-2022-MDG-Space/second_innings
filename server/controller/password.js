const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const db = require("../../database");

exports.viewpage = (req, res) => {
  res.sendFile("D:/Git/Second-Innings/password.html"); //static
};
