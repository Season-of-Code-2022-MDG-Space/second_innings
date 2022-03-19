function savetolocal() {
  localStorage.setItem(
    "Enr",
    JSON.stringify(document.getElementById("Number").value)
  );
}
