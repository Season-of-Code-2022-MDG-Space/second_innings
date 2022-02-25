const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

exports.viewform = (req, res) => {
  res.sendFile("D:/Git/Second-Innings/form.html"); //static
};

exports.postform = (req, res) => {
  res.redirect("/submitform/");
};
