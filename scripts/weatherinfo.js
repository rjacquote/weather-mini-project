
//temp city data
let table = document.getElementById('userTable');
//will work as long as the city latitude and longitiude are valid
// let cities = [
//     {
//         "city": "Denver",
//         "state": "Colorado",
//         "latitude": 39.8526406,
//         "longitude": -105.0493497
//     },
//     {
//         "city": "Houston",
//         "state": "Texas",
//         "latitude": 29.8174782,
//         "longitude": -95.6814916
//     },
//     {
//         "city": "Test Value",
//         "state": "Texas",
//         "latitude": 32.6791,
//         "longitude": -97.4641
//     }
// ]
fetch('../scripts/locations.json')
    .then((response) => response.json())
    .then(cities =>{

let locatMenu = document.getElementById('cityName');
let locatAmount = cities.length;
for (let i = 0; i < locatAmount; i++) {
    let option = new Option(cities[i].city);
    locatMenu.appendChild(option);
 
};})



function citySelect() {
    
    

    fetch('../scripts/locations.json')
    .then((response) => response.json())
    .then(cities =>{
    let amount = cities.length
    var e = document.getElementById("cityName");
    var text = e.options[e.selectedIndex].text;
    console.log(text)

    let result = cities.filter(obj => {
        return obj.city === text
    })
    console.log(result)
    for (let i = 0; i < amount; i++) {
        if (cities[i].city == text) {
            console.log(`it worked at ${i}`)
            let lat = cities[i].latitude
            let lon = cities[i].longitude
   



// //grabing weather data from server
   
    fetch(`https://api.weather.gov/points/${lat},${lon}`)
.then(response => response.json())
.then(data =>{ let testUrl = data.properties.forecast
console.log(testUrl)
(fetch(testUrl)
.then(response => response.json())
.then(
    data => {
    let weatherUrl = data.properties;
    console.log(weatherUrl);
    let forecastArray= data.properties.periods;
    console.log(forecastArray);
    
    //loop function to create a table



        let listTime = document.getElementById('showTime')
        let listImg = document.getElementById('showImg')
        let listWeather = document.getElementById('showWeather')
        let listWind = document.getElementById('showWind')
        let listTemps = document.getElementById('showTemps')
            
        while (listTime.firstChild) {
            listTime.removeChild(listTime.firstChild);
        }
        while (listImg.firstChild) {
            listImg.removeChild(listImg.firstChild);
        }
        while (listWeather.firstChild) {
            listWeather.removeChild(listWeather.firstChild);
        }
        while (listWind.firstChild) {
            listWind.removeChild(listWind.firstChild);
        }
        while (listTemps.firstChild) {
            listTemps.removeChild(listTemps.firstChild);
        }
    for(i=0; i < forecastArray.length; i++){
            // let row=table.insertRow(-1);
            // let cell1 = row.insertCell(0);
            // let cell2 = row.insertCell(1);
            // let cell3 = row.insertCell(2);
            // let cell4 = row.insertCell(3);
            // cell1.innerHTML = data.properties.periods[i].name;
            // cell2.innerHTML = "Temperature " + data.properties.periods[i].temperature + " " +  data.properties.periods[i].temperatureUnit;
            // cell3.innerHTML = "Winds" + data.properties.periods[i].windDirection + " " + data.properties.periods[i].windSpeed;
            // cell4.innerHTML = data.properties.periods[i].shortForecast;

            
    
            let nameTime = document.createElement('th')
            listTime.appendChild(nameTime).innerText = data.properties.periods[i].name;

            
            let fitImg = document.createElement('th')
            listImg.appendChild(fitImg)
            let nameImg = document.createElement('img')
            fitImg.appendChild(nameImg).src = data.properties.periods[i].icon;
            
            
            let nameWeather = document.createElement('th')
            listWeather.appendChild(nameWeather).innerText = data.properties.periods[i].shortForecast;
            
            
            let nameWind = document.createElement('th')
            listWind.appendChild(nameWind).innerText = "Winds " + data.properties.periods[i].windDirection + " " + data.properties.periods[i].windSpeed;
            
            
            let nameTemps = document.createElement('th')
            listTemps.appendChild(nameTemps).innerText = data.properties.periods[i].temperature + " " + data.properties.periods[i].temperatureUnit;
        }
    }))})
    break}}
})}
