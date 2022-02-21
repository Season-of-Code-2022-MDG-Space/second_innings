const express = require("express");
const bodyParser = require("body-parser");
var multer = require("multer");
var upload = multer();
var mysql = require("mysql");
const app = express();
const listrouter = require("./server/router/listitems.js");

const oauth = require("./Resources/index.js");
const database = require("./database.js");
const form = require("./Resources/form.js");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("form");
});

app.use(express.static(__dirname));

app.post("/dashboard", function (req, res) {
  console.log(req.body);
  res.sendFile(__dirname + "/dashboard.html");
});

app.use("/submitform", listrouter);

app.get("/dashboard", (req, res) => {
  res.sendFile(__dirname + "/dashboard.html");
});

app.get("/signin", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/sell", (req, res) => {
  res.sendFile(__dirname + "/sell.html");
});

app.listen(8080);

console.log("running");
