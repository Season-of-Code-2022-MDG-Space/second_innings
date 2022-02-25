const express = require("express");
const bodyParser = require("body-parser");
var multer = require("multer");
const exphbs = require("express-handlebars");
const app = express();
const listRouter = require("./server/router/listRouter.js");
const sellerRouter = require("./server/router/sellerRouter.js");
const signinRouter = require("./server/router/signinRouter.js");
const formRouter = require("./server/router/formRouter.js");

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

app.use(express.static(__dirname));

app.use("/submitform", listRouter);
app.use("/dashboard", sellerRouter);
app.use("/signin", signinRouter);
app.use("/form", formRouter);

app.listen(8080);

console.log("running");
