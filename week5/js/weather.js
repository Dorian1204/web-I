const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=53151408e7026616f38e9e7067d59fa2"
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        document.getElementById('current').textContent = jsObject.list[0].weather[0].main;

        document.getElementById('temp').textContent = ((jsObject.list[0].main.temp_max)*(9/5) - 459.67).toFixed(1);

        document.getElementById('humidity').textContent = jsObject.list[0].main.humidity;

        document.getElementById('2speed').textContent = (jsObject.list[0].wind.speed).toFixed(0);  
        
        document.getElementById('4chill').textContent = Math.round(0.0817 * (3.71*(Math.pow(jsObject.list[0].wind.speed, 0.5))+ 5.81 - 0.25 * jsObject.list[0].wind.speed)*(((jsObject.list[0].main.temp_max)*(9/5) - 459.67)-95.4)+ 83.4);  
    })
//WindChill//