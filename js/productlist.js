/* Getting Database */
const url = "https://kea21a2sem-d273.restdb.io/rest/t7-boardgames";

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
  const template = document.querySelector("#templateList").content;
  //Clone it
  const copy = template.cloneNode(true);
  //Change Content
  copy.querySelector("h2").textContent = boardGames.Name;
  //Grab parent
  const parent = document.querySelector("section");
  //Append child
  parent.appendChild(copy);
}

/* Other sections here*/
