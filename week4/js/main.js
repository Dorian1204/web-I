
var n = new Date();
var y = n.getFullYear();
document.getElementById("currentyear").innerHTML = y ;

//modified date
let b = new Date();
let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.getElementById("date").innerHTML = day[b.getDay()] + ", " + 
b.getDate() + " " + month[b.getMonth()] + " " + b.getFullYear();


// var options = { month: "numeric", day: "numeric", year: "numeric", hour: "numeric", minute: "numeric"};
// var d = document.lastModified().toLocaleDateString("en-US", options);
// document.getElementById("modified").textContent = d ;