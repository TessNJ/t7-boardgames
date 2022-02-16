/* Getting Database */
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url = "https://kea21a2sem-d273.restdb.io/rest/t7-boardgames/" + id;

const options = {
  headers: {
    "x-apikey": "6207b72c34fd621565858402",
  },
};

/* Fetching Data */

fetch(url, options)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    showGames(data);
    console.log(data);
  });

/* Changing Content */

function showGames(Games) {
  document.querySelector(".productPrice").textContent = `${Games.Price} DKK`;
  document.querySelector(".productName").textContent = Games.Name;
  document.querySelector(
    ".productPlayers"
  ).textContent = `${Games.MinPlayerAmount} - ${Games.MaxPlayerAmount}`;
  document.querySelector(".productDescription").textContent = Games.Description;
  document.querySelector(
    ".productAge"
  ).textContent = `Minimum ${Games.AgeGroup}+`;
  document.querySelector(".productImg").src = Games.ImgSRC;
  document.querySelector(".productImg").alt = Games.ImgALT;
  document.querySelector(".productCategory").textContent =
    Games.Category.join(" | ");
}

/* Other sections here*/
