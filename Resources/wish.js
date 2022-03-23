let prodID;
const button = document.querySelectorAll(".wish-btn");

function checkId(elem) {
  prodID = elem;
  console.log(elem);
  postbutton();
}

function postbutton() {
  axios
    .post("/dashboard/wishpost", {
      prodID: `${prodID}`,
    })
    .then((res) => {
      console.log(res);
      window.location.href = "http://localhost:8080/dashboard/wishlist";
    });
}
