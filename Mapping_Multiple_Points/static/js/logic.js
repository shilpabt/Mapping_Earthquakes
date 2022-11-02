// Add console.log to check to see if our code is working.
//console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([39.8283, -98.4795], 4);

//  Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

//  Add a marker to the map for Los Angeles, California.
//L.circleMarker([34.0522, -118.2437], {
   // radius: 300,
   // color: "black",
   // fillcolor: "#ffffa1"
 //}).addTo(map);
 
// Get data from cities.js
let cityData = cities;
  
// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
  console.log(city)
  L.circleMarker(city.location,{
    radius: city.population/100000
  })
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
.addTo(map);
});

// We create the tile layer that will be the background of our map.
//Leaflet doesn't provide a tile layer. Instead, it offers various tile layer APIs.

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18,
    accessToken: API_KEY,
    tileSize: 512,
    zoomOffset: -1
    
}).addTo(map);
// Then we add our 'graymap' tile layer to the map.streets.addTo(map);
//streets.addTo(map);
