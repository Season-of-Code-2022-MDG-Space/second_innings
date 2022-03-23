const passport = require("passport");
const OAuth2Strategy = require("passport-oauth2");
const express = require("express");
const router = express.Router();
const XMLHttpRequest = require("xhr2");
const Http = new XMLHttpRequest();
const db = require("./database");
const con = require("./database");
require("dotenv").config();

//var a = 0;

router.get("/", (req, res) => {
  return res.sendFile("./submitform");
});

router.get("/channeli", passport.authenticate("oauth2"));

router.get(
  "/callback",
  passport.authenticate("oauth2", {
    failureRedirect: "/signin",
    session: false,
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    console.log("Success");

    res.redirect("/dashboard");

    // if (a) {
    //   res.sendFile("password.html", { root: "." });
    // } else {
    //   res.redirect("/dashboard");
    // }
  }
);

// getenr = (req, res) => {
//   req.session.enum = rows[0].reqenrollment_number; //session
//   console.log(req.session.enum);
// };

passport.use(
  new OAuth2Strategy(
    {
      authorizationURL: "https://channeli.in/oauth/authorise",
      tokenURL: "https://channeli.in/open_auth/token/",
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:8080/oauth/callback",
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log(accessToken);
      console.log("oauth attempted");
      const url = `https://channeli.in/open_auth/get_user_data/`;
      Http.open("GET", url);
      Http.setRequestHeader("Authorization", `Bearer ${accessToken}`);
      Http.send();
      Http.onreadystatechange = function () {
        if (Http.readyState === XMLHttpRequest.DONE && Http.status === 200) {
          console.log(Http.responseText);
          const data = JSON.parse(Http.responseText);
          const reqenrollment_number = data.student.enrolmentNumber;
          const reqname = data.person["fullName"];
          const reqdegree = data.student["branch degree name"];
          const reqbranch = data.student["branch name"];
          const reqyear = data.student.currentYear;
          const reqemail_id = data.contactInformation.instituteWebmailAddress;

          // getenr();

          db.query(
            "SELECT * FROM person WHERE enrollmentNumber=" +
              db.escape(reqenrollment_number),
            (err, rows) => {
              if (!err) {
                if (rows[0] === undefined) {
                 // a = 1;
                  db.query(
                    "INSERT INTO person ( enrollmentNumber, name, degree, branch, year, email) VALUES (" +
                      con.escape(reqenrollment_number) +
                      "," +
                      con.escape(reqname) +
                      "," +
                      con.escape(reqdegree) +
                      "," +
                      con.escape(reqbranch) +
                      "," +
                      con.escape(reqyear) +
                      "," +
                      con.escape(reqemail_id) +
                      ")",
                    (err, row) => {
                      if (!err) {
                        console.log("Person database updated");
                        return cb(null, Http.responseText);
                      } else {
                        console.log(err);
                      }
                    }
                  );
                } else {
                  console.log("Logged in using OAuth");
                  return cb(null, Http.responseText);
                }
              } else throw err;
            }
          );
        }
      };
    }
  )
);

(module.exports = router), passport;
