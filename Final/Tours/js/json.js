function addTownEvents() {
    const requestURL = 'https://dorian1204.github.io/lesson12-1/js/lesson10-1/tours.json'
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {

        const source = jsonObject["towns"];
        

        let events
        for (let i = 0; i < source.length; i++) {
            if (source[i].name == "Tours") {
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