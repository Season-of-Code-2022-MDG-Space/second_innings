const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var multer = require("multer");
var upload = multer();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(upload.array());
app.use(express.static("public"));
