include = "index";

const client_id = "kcogjaTJmLRcjPrppZrH7kNvPMlfBDc2KLreSsIY";

function redirect() {
  const url = "https://channeli.in/oauth/authorise/?client_id=" + client_id;
  window.location = url;
  channeli();
}
