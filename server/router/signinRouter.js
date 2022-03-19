const express = require("express");
const router = express.Router();
const con = require("../../database");
const signinController = require("../controller/signinController.js");
const password = require("../controller/password");

router.get("/", signinController.viewsignin);
router.post("/", signinController.postsignin);
router.get("/password", password.viewpage);
router.get("/logout", signinController.logout);

router.post("/password", function (req, res) {
  console.log(req.body.Pass1);
  console.log(req.body.Pass2);

  if (req.body.Pass1 == req.body.Pass2) {
    var b = req.session.eno;
    var sql =
      "UPDATE person SET password =" +
      con.escape(req.body.Pass1) +
      "WHERE enrollmentNumber=" +
      con.escape(b) +
      ")";

    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Password set");
      console.log(result);
      res.redirect("/dashboard");
    });
  } else {
    res.send("Passwords don't match");
  }
});

module.exports = router;
