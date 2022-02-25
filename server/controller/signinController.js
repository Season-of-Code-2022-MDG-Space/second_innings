const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

exports.viewsignin = (req, res) => {
  res.sendFile("D:/Git/Second-Innings/index.html"); //static
};

exports.postsignin = (req, res) => {
  res.redirect("/dashboard/");
};
