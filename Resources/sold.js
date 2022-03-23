let prodID;
const button = document.querySelectorAll(".sold-btn");

function checkId(elem) {
    prodID = elem;
    console.log(elem);
    soldbutton();
  }

  function soldbutton() {
    axios
      .post("/dashboard/soldpost", {
        prodID: `${prodID}`,
      })
      .then((res) => {
        console.log(res);
        window.location.href="http://localhost:8080/dashboard/listings";
      });
  }
  