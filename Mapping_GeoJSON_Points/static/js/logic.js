// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('map').setView([37.6213, -122.3790], 5);

// Coordinates for each point to be used in the line.
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "yellow"
  }).addTo(map);
 
// We create the tile layer that will be the background of our map.
//Leaflet doesn't provide a tile layer. Instead, it offers various tile layer APIs.

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  maxZoom: 18,
  accessToken: API_KEY,
  tileSize: 512,
    zoomOffset: -1
    
}).addTo(map);
// Then we add our 'graymap' tile layer to the map.streets.addTo(map);
//streets.addTo(map);