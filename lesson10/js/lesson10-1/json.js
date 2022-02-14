

var now = new Date();
var days = new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');
var months = new Array('January','February','March','April','May','June','July','August','September','October','November','December');
var date = ((now.getDate()<10) ? "0" : "")+ now.getDate();
function fourdigits(number) {
    return (number < 1000) ? number + 1900 : number;
}
today =  days[now.getDay()] + ", " +
         date + " " +
         months[now.getMonth()] + " " +
         (fourdigits(now.getYear())) ;
document.getElementById("currentdate").innerHTML = today;

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