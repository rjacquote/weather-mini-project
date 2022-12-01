let table = document.getElementById('userTable');
//grabing weather data from server
fetch('https://api.weather.gov/gridpoints/TOP/31,80/forecast')
.then(console.log('fetch was called'))
.then(response => response.json())
.then(data => {
    let weatherUrl = data.properties;
    console.log(weatherUrl);
    let forecastArray= data.properties.periods;
    console.log(forecastArray);
    //loop function to create a table
    for(i=0; i < forecastArray.length; i++){
            let row=table.insertRow(-1);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            let cell4 = row.insertCell(3);
            cell1.innerHTML = data.properties.periods[i].name;
            cell2.innerHTML = "Temperature " + data.properties.periods[i].temperature + " " +  data.properties.periods[i].temperatureUnit;
            cell3.innerHTML = "Winds" + data.properties.periods[i].windDirection + " " + data.properties.periods[i].windSpeed;
            cell4.innerHTML = data.properties.periods[i].shortForecast;
        }
    });