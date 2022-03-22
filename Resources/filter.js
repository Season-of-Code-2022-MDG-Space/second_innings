function filter() {
  (async () => {
    /* inputOptions can be an object or Promise */
    const inputOptions = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          electronics: "Electronics",
          utilities: "Utilities",
          appliances: "Appliances",
        });
      }, 0);
    });

    const { value: prodCategory } = await Swal.fire({
      title: "Select a category",
      input: "radio",
      inputOptions: inputOptions,
    inputValidator: (value) => {
      if (!value) {
        return 'You need to choose something!'
      }
    }
  })
  
  if (prodCategory) {
    Swal.fire("Selected!!!")
    filterpost(prodCategory)
  }
  
  })()
}

function filterpost(tag) {
  axios
    .post("/dashboard/filters", {
      tag: `${tag}`,
    })
    .then((res) => {
      window.location.href = "http://localhost:8080/dashboard/renderfilters";
      console.log(res);
    });
}
