const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=53151408e7026616f38e9e7067d59fa2"
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        document.getElementById('current').textContent = jsObject.list[0].weather[0].main;

        document.getElementById('temp').textContent = ((jsObject.list[0].main.temp_max)*(9/5) - 459.67).toFixed(1);

        document.getElementById('humidity').textContent = jsObject.list[0].main.humidity;

        document.getElementById('windspeed').textContent = (jsObject.list[0].wind.speed).toFixed(0);  

        document.getElementById('windchill').textContent = ((jsObject.list[0].main.temp_max)*(9/5) - 459.67)+(jsObject.list[0].main.humidity/100)-(jsObject.list[0].wind.speed).toFixed(0);
        
        document.getElementById('windchill').textContent = Math.round(0.0817 * (3.71*(Math.pow(jsObject.list[0].wind.speed, 0.5))+ 5.81 - 0.25 * jsObject.list[0].wind.speed)*(((jsObject.list[0].main.temp_max)*(9/5) - 459.67)-91.4)+ 83.4);  
    })
//WindChill//
     



    const apiFive = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=53151408e7026616f38e9e7067d59fa2"

fetch(apiURL)
    .then((response) => response.json())
    .then((jsonObject) => {

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


    

    
    
