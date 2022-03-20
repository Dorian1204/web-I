
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

const requestURL = 'https://dorian1204.github.io/lesson12-1/js/feed.json';
fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    
    const source = jsonObject['homeTour'];
    let homeTour = [];

    j=0;
    for (let i = 0; i < source.length; i++ ) {
        if (source[i].name == "Daily" || source[i].name == "Tours" || source[i].name == "Next" || source[i].name == "Cycle" || source[i].name == "Purchase" || source[i].name == "I Bike"){
            homeTour[j] = source[i];
            j++;
            
    }}
    
    for (let i = 0; i < homeTour.length; i++ ) {
        let card = document.createElement('section');
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let motto = document.createElement('p');
        let photo = document.createElement('media');
        
        div.classList.add('textDiv')
        h2.textContent = homeTour[i].name;
        motto.textContent = homeTour[i].motto;
        motto.classList.add('homemotto');
        div.appendChild(h2);
        div.appendChild(motto);

        card.appendChild(div);
        card.classList.add('card');

        document.querySelector('div.cards').appendChild(card);
    
    
    }});