const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const db = require("../../database");

exports.viewsignin = (req, res) => {
  res.sendFile("D:/Git/Second-Innings/index.html"); //static
};

exports.postsignin = (req, res) => {
  const { reqenrolnum, reqpassword } = req.body;
  console.log(reqenrolnum);
  db.query(
    "SELECT * FROM person WHERE enrollmentNumber =" + db.escape(reqenrolnum),
    (err, rows) => {
      if (!err) {
        if (rows[0] === undefined) {
          res.send("User doesn't exist");
        } else {
          console.log(rows[0]["password"]);

          //const verified = bcrypt.compareSync(reqpassword, rows[0]["password"]);
          if (1) {
            console.log("login successful");
            //req.session.userinfo = rows[0].email_id; //session

             res.redirect("/dashboard");
          } else {
            res.send("Incorrect Enrolment number or password");
          }
        }
      } else {
        console.log(err);
      }
    }
  );

  console.log(req.body);
};

exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.redirect("/signin");
    }
    res.clearCookie(process.env.SESS_NAME);
    res.redirect("/");
  });
};

//exports.personID = personID;
//export default personID;
//module.exports = personID;
