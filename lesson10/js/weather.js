const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=22c67a292f3d2aebe9c48c2ee625f611"

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject.list[0]);

        document.getElementById('current').textContent = jsObject.list[0].weather[0].main;

        document.getElementById('temp').textContent = ((jsObject.list[0].main.temp_max)*(9/5) - 459.67).toFixed(1);

        document.getElementById('humidity').textContent = jsObject.list[0].main.humidity;

        document.getElementById('windspeed').textContent = (jsObject.list[0].wind.speed).toFixed(0);    
        })

    .catch(function(error){
        alert("Sorry, the data for the weather summary is not available right now.");
    })



const apiFive = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=22c67a292f3d2aebe9c48c2ee625f611"

fetch(apiURL)
    .then((response) => response.json())
    .then((jsonObject) => {
        console.log(jsonObject);

        for (let i = 1; i < 6; i++){
            fore = document.textContent = jsonObject.list[i].main.temp;
            convTemp = (fore * (9/5) - 459.67).toFixed(0);
            document.getElementById('tempd' + i).textContent = convTemp;

            imagesrc = jsonObject.list[i].weather[0].icon;
            desc = jsonObject.list[i].weather[0].description;
            console.log(jsonObject.list[i].weather[0].icon);

            document.getElementById('icon' + i).setAttribute('src', 'http://openweathermap.org/img/w/' + imagesrc + '.png');
            document.getElementById('icon' + i).setAttribute('alt', desc);
        }}    
    )


    
    
    function addTownEvents() {
        const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'
    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
    
            const source = jsonObject["towns"];
            
    
            let events
            for (let i = 0; i < source.length; i++) {
                if (source[i].name == "Soda Springs") {
                    events = source[i].events
                   
                    
                }
            }
            let eventDates = document.createElement('div')
            eventDates.id = 'event-dates'
    
            let eventTitles = document.createElement('div')
            eventTitles.id = 'event-titles'
            
            let event
            for (let i = 0; i < events.length; i++){
                event = events[i]
                
                let split = event.split(":")
                
    
    
                let eventDate = document.createElement('p')
                eventDate.textContent = split[0] + ":"
                eventDates.appendChild(eventDate)
    
                let eventTitle = document.createElement('p')
                eventTitle.textContent = split[1]
                eventTitles.appendChild(eventTitle)
     
            }
            document.getElementById('event-content').appendChild(eventDates)
            document.getElementById('event-content').appendChild(eventTitles)
            
        })
    }
    
    addTownEvents()