/* Getting Database */

let url = "https://kea21a2sem-d273.restdb.io/rest/t7-boardgames";

const urlParams = new URLSearchParams(window.location.search);
console.log("URL params: " + urlParams);
const category = urlParams.get("category");
console.log("category param: " + category);

if (category == "Adventure") {
  url = "https://kea21a2sem-d273.restdb.io/rest/t7-boardgames?q={\"Category\" : {\"$in\" : [\"Adventure\"]}}";
  // set the category title based on category parameter
  // document.querySelector("#categoryTitle").textContent = "Accessories";
} else if(category == "Card games") {
  url = "https://kea21a2sem-d273.restdb.io/rest/t7-boardgames?q={\"Category\" : {\"$in\" : [\"Card Game\"]}}";    
  // document.querySelector("#categoryTitle").textContent = "Apparel";
} else if(category =="Family"){
  url ="https://kea21a2sem-d273.restdb.io/rest/t7-boardgames?q={\"Category\" : {\"$in\" : [\"Family Game\"]}}"
  // document.querySelector("#categoryTitle").textContent = "Footwear";
} else if(category =="Strategy"){
  url ="https://kea21a2sem-d273.restdb.io/rest/t7-boardgames?q={\"Category\" : {\"$in\" : [\"Strategy\"]}}"
  // document.querySelector("#categoryTitle").textContent = "Free Items";
}else if(category =="Puzzle"){
  url ="https://kea21a2sem-d273.restdb.io/rest/t7-boardgames?q={\"Category\" : {\"$in\" : [\"Puzzle\"]}}"
  // document.querySelector("#categoryTitle").textContent = "Personal Care";
}else if(category =="Economic"){
  url ="https://kea21a2sem-d273.restdb.io/rest/t7-boardgames?q={\"Category\" : {\"$in\" : [\"Economic\"]}}"
  // document.querySelector("#categoryTitle").textContent = "Sport";
}else if(category =="Novel-based"){
  url ="https://kea21a2sem-d273.restdb.io/rest/t7-boardgames?q={\"Category\" : {\"$in\" : [\"Novel-based\"]}}"
  // document.querySelector("#categoryTitle").textContent = "Sport";
}else if(category =="Ancient"){
  url ="https://kea21a2sem-d273.restdb.io/rest/t7-boardgames?q={\"Category\" : {\"$in\" : [\"Ancient\"]}}"
  // document.querySelector("#categoryTitle").textContent = "Sport";
}else if(category =="Murder-myster"){
  url ="https://kea21a2sem-d273.restdb.io/rest/t7-boardgames?q={\"Category\" : {\"$in\" : [\"Murder-mystery\"]}}"
  // document.querySelector("#categoryTitle").textContent = "Sport";
}else if(category =="Dice"){
  url ="https://kea21a2sem-d273.restdb.io/rest/t7-boardgames?q={\"Category\" : {\"$in\" : [\"Dice\"]}}"
  // document.querySelector("#categoryTitle").textContent = "Sport";
}else if(category =="Fantasy"){
  url ="https://kea21a2sem-d273.restdb.io/rest/t7-boardgames?q={\"Category\" : {\"$in\" : [\"Fantasy\"]}}"
  // document.querySelector("#categoryTitle").textContent = "Sport";
}else if(category =="Bluffing"){
  url ="https://kea21a2sem-d273.restdb.io/rest/t7-boardgames?q={\"Category\" : {\"$in\" : [\"Bluffing\"]}}"
  // document.querySelector("#categoryTitle").textContent = "Sport";
}else if(category =="Horror"){
  url ="https://kea21a2sem-d273.restdb.io/rest/t7-boardgames?q={\"Category\" : {\"$in\" : [\"Horror\"]}}"
  // document.querySelector("#categoryTitle").textContent = "Sport";
}else if(category =="Childrens game"){
  url ="https://kea21a2sem-d273.restdb.io/rest/t7-boardgames?q={\"Category\" : {\"$in\" : [\"Childrens game\"]}}"
  // document.querySelector("#categoryTitle").textContent = "Sport";
}else if(category =="Medieval"){
  url ="https://kea21a2sem-d273.restdb.io/rest/t7-boardgames?q={\"Category\" : {\"$in\" : [\"Medieval\"]}}"
  // document.querySelector("#categoryTitle").textContent = "Sport";
}else if(category =="Party"){
  url ="https://kea21a2sem-d273.restdb.io/rest/t7-boardgames?q={\"Category\" : {\"$in\" : [\"Party\"]}}"
  // document.querySelector("#categoryTitle").textContent = "Sport";
}
else {
  url = "https://kea21a2sem-d273.restdb.io/rest/t7-boardgames";
}



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
    handleBoardgames(data);
  });

function handleBoardgames(data) {
  console.log(data);
  data.forEach(showBoardgames);
}

/* Changing Template */

function showBoardgames(boardGames) {
  console.log("Success!");
  //grab template
  //Clone it
  //Change Content
  //Grab parent
  //Append child
}

/* Other sections here*/
