// Add console.log to check to see if our code is working.
console.log("working");

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
//console.log(dark);
// Create a base layer that holds both maps.
let baseMaps = {
  light: streets,
  Dark: dark
};

let map = L.map("mapid", {
  center: [44.0, -80.0],
  zoom: 2,
  layers: [streets]
});

// Create a style for the lines.
let myStyle = {
  color: "#ffffa1",
  weight: 2
}

// Pass our map layers into our layers control and add the layers control to the map.
//console.log(map);
L.control.layers(baseMaps).addTo(map);

// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/shilpabt/Mapping_Earthquakes/main/torontoRoutes.json";

//let torontoData = "https://raw.githubusercontent.com/<GitHub_name>/Mapping_Earthquakes/main/torontoRoutes.json";

// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
  console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data, {
    style: myStyle,
    onEachFeature: function(feature, layer) {
    layer.bindPopup("<h2>Airline: " + feature.properties.airline + "<hr>Destination: " + feature.properties.dst + "</h2>");
   } 
  }).addTo(map);
});

