const express = require("express");
const bodyParser = require("body-parser");
var multer = require("multer");
const session = require("express-session");
const cookie = require("cookie-parser");
const exphbs = require("express-handlebars");
const app = express();
const listRouter = require("./server/router/listRouter.js");
const sellerRouter = require("./server/router/sellerRouter.js");
const signinRouter = require("./server/router/signinRouter.js");
const formRouter = require("./server/router/formRouter.js");
const oauth = require("./oauth.js");

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

app.use(cookie());

// const cors = require("cors");
// app.use(cors());

app.use(
  session({
    name: process.env.SESS_NAME,
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESS_SECRET,
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24, //1 day
    },
  })
);

app.use("/submitform", listRouter);
app.use("/dashboard", sellerRouter);
app.use("/signin", signinRouter);
app.use("/form", formRouter);
app.use("/oauth", oauth);

app.listen(8080);

console.log("listening on port 8080");
