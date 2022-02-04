function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

function showData(jsonObj) {
  let town = jsonObj["towns"];

  for (let i = 0; i < town.length; i++) {
    if (town[i].name == "Preston") {
      let article = document.getElementById("events");
      let para1 = document.createElement("ul");

      for (let a = 0; a < town[i].events.length; a++) {
        let listItem = document.createElement("li");
        listItem.textContent = town[i].events[a];
        para1.appendChild(listItem);
      }

      article.appendChild(para1);

    }
  }
}