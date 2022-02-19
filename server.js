const express = require("express");
const bodyParser = require("body-parser");
var multer = require("multer");
var upload = multer();
const app = express();

app.get("/", function (req, res) {
  res.render("form");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

app.set("view engine", "pug");
app.set("views", "./views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(upload.array());
app.use(express.static("public"));

app.post("/data", function (req, res) {
  console.log(req.body);
  res.send("recieved your request!");
});

app.get("/signin", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(8080);

console.log("running");
