const express = require("express");
const bodyParser = require("body-parser");
var multer = require("multer");
var upload = multer();
var mysql = require("mysql");
const exphbs = require("express-handlebars");
const app = express();
const listrouter = require("./server/router/listitems.js");
const sellerRouter = require("./server/router/sellerlist.js");

const oauth = require("./Resources/index.js");
const database = require("./database.js");
const form = require("./Resources/form.js");
const handlebars = exphbs.create({
  extname: ".hbs",
});
app.engine(".hbs", handlebars.engine);
app.set("view engine", ".hbs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("form");
});

app.use(express.static(__dirname));

app.post("/dashboard", function (req, res) {
  console.log(req.body);
  res.sendFile(__dirname + "/views/layouts/dashboard.hbs");
});

app.use("/submitform", listrouter);
app.use("/dashboard", sellerRouter);

app.get("/dashboard", (req, res) => {
  res.sendFile(__dirname + "/dashboard.hbs");
});

app.get("/signin", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/sell", (req, res) => {
  res.sendFile(__dirname + "/sell.html");
});

app.listen(8080);

console.log("running");
