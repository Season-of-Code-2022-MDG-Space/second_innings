let prodID;
const button = document.querySelectorAll(".info-btn");

function checkId(elem) {
  prodID = elem;
  console.log(elem);
  postbutton();
}

function postbutton() {
  axios
    .post("/dashboard/infopost", {
      prodID: `${prodID}`,
    })
    .then((res) => {
      console.log(res);
      window.location.href="http://localhost:8080/dashboard/info";
    });
}
