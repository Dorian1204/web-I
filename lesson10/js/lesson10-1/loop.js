const mydate = document.querySelector('.current-date');
let d = new Date();
let abbrw_names = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thur'];
let dayone = abbrw_names[d.getDay()+1];
let daytwo = abbrw_names[d.getDay()+2];
let daythree = abbrw_names[d.getDay()+3];
let dayfour = abbrw_names[d.getDay()+4];
let dayfive = abbrw_names[d.getDay()+5];
console.log(dayfive);

document.getElementById("day1").innerHTML = dayone;
document.getElementById("day2").innerHTML = daytwo;
document.getElementById("day3").innerHTML = daythree;
document.getElementById("day4").innerHTML = dayfour;
document.getElementById("day5").innerHTML = dayfive;