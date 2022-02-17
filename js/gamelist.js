/* Getting Database */

let url = "https://kea21a2sem-d273.restdb.io/rest/t7-boardgames";

const urlParams = new URLSearchParams(window.location.search);
console.log("URL params: " + urlParams);
const category = urlParams.get("category");
console.log("category param: " + category);

const options = {
  headers: {
    "x-apikey": "6207b72c34fd621565858402",
  },
};





/* Changing Template */

function showBoardgames(boardGames) {
  console.log("Success!");
  //grab template
  const template = document.querySelector("#templateList").content;
  //Clone it
  const copy = template.cloneNode(true);
  //Change Content
  copy.querySelector(".listName").textContent = boardGames.Name;
  copy.querySelector(".productImg").src = boardGames.ImgSRC;
  copy.querySelector(".productImg").alt = boardGames.ImgALT;
  copy.querySelector(".listPrice").textContent = `${boardGames.Price} DKK`;
  copy.querySelector(".listDescription").textContent = boardGames.Description;
  copy.querySelector(".listAge").textContent = `${boardGames.AgeGroup}+`;
  copy.querySelector(
    ".listPlayers"
  ).textContent = `Player amount: ${boardGames.MinPlayerAmount} - ${boardGames.MaxPlayerAmount}`;
  copy.querySelector(".listCategory").textContent =
    boardGames.Category.join(" | ");
  copy
    .querySelector(".listMore")
    .setAttribute("href", `product.html?id=${boardGames._id}`);
  //Grab parent
  const parent = document.querySelector("section");
  //Append child
  parent.appendChild(copy);
}

/* Other sections here*/

if (category == "Adventure") {
  url =
    'https://kea21a2sem-d273.restdb.io/rest/t7-boardgames?q={"Category" : {"$in" : ["Adventure"]}}';
  // set the category title based on category parameter
  // document.querySelector("#categoryTitle").textContent = "Accessories";
} else if (category == "Card games") {
  url =
    'https://kea21a2sem-d273.restdb.io/rest/t7-boardgames?q={"Category" : {"$in" : ["Card Game"]}}';
  // document.querySelector("#categoryTitle").textContent = "Apparel";
} else if (category == "Family") {
  url =
    'https://kea21a2sem-d273.restdb.io/rest/t7-boardgames?q={"Category" : {"$in" : ["Family Game"]}}';
  // document.querySelector("#categoryTitle").textContent = "Footwear";
} else if (category == "Strategy") {
  url =
    'https://kea21a2sem-d273.restdb.io/rest/t7-boardgames?q={"Category" : {"$in" : ["Strategy"]}}';
  // document.querySelector("#categoryTitle").textContent = "Free Items";
} else if (category == "Puzzle") {
  url =
    'https://kea21a2sem-d273.restdb.io/rest/t7-boardgames?q={"Category" : {"$in" : ["Puzzle"]}}';
  // document.querySelector("#categoryTitle").textContent = "Personal Care";
} else if (category == "Economic") {
  url =
    'https://kea21a2sem-d273.restdb.io/rest/t7-boardgames?q={"Category" : {"$in" : ["Economic"]}}';
  // document.querySelector("#categoryTitle").textContent = "Sport";
} else if (category == "Novel-based") {
  url =
    'https://kea21a2sem-d273.restdb.io/rest/t7-boardgames?q={"Category" : {"$in" : ["Novel-based"]}}';
  // document.querySelector("#categoryTitle").textContent = "Sport";
} else if (category == "Ancient") {
  url =
    'https://kea21a2sem-d273.restdb.io/rest/t7-boardgames?q={"Category" : {"$in" : ["Ancient"]}}';
  // document.querySelector("#categoryTitle").textContent = "Sport";
} else if (category == "Murder-myster") {
  url =
    'https://kea21a2sem-d273.restdb.io/rest/t7-boardgames?q={"Category" : {"$in" : ["Murder-mystery"]}}';
  // document.querySelector("#categoryTitle").textContent = "Sport";
} else if (category == "Dice") {
  url =
    'https://kea21a2sem-d273.restdb.io/rest/t7-boardgames?q={"Category" : {"$in" : ["Dice"]}}';
  // document.querySelector("#categoryTitle").textContent = "Sport";
} else if (category == "Fantasy") {
  url =
    'https://kea21a2sem-d273.restdb.io/rest/t7-boardgames?q={"Category" : {"$in" : ["Fantasy"]}}';
  // document.querySelector("#categoryTitle").textContent = "Sport";
} else if (category == "Bluffing") {
  url =
    'https://kea21a2sem-d273.restdb.io/rest/t7-boardgames?q={"Category" : {"$in" : ["Bluffing"]}}';
  // document.querySelector("#categoryTitle").textContent = "Sport";
} else if (category == "Horror") {
  url =
    'https://kea21a2sem-d273.restdb.io/rest/t7-boardgames?q={"Category" : {"$in" : ["Horror"]}}';
  // document.querySelector("#categoryTitle").textContent = "Sport";
} else if (category == "Childrens game") {
  url =
    'https://kea21a2sem-d273.restdb.io/rest/t7-boardgames?q={"Category" : {"$in" : ["Childrens game"]}}';
  // document.querySelector("#categoryTitle").textContent = "Sport";
} else if (category == "Medieval") {
  url =
    'https://kea21a2sem-d273.restdb.io/rest/t7-boardgames?q={"Category" : {"$in" : ["Medieval"]}}';
  // document.querySelector("#categoryTitle").textContent = "Sport";
} else if (category == "Party") {
  url =
    'https://kea21a2sem-d273.restdb.io/rest/t7-boardgames?q={"Category" : {"$in" : ["Party"]}}';
  // document.querySelector("#categoryTitle").textContent = "Sport";
} else {
  url = "https://kea21a2sem-d273.restdb.io/rest/t7-boardgames";
}

/* Fetching Data */
fetch(url, options)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleBoardgames(data);
  });

function handleBoardgames(data) {
  console.log(data);
  data.forEach(showBoardgames);
}