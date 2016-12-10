var map = L.map('map', {
            center: [36, -94],
            zoom: 2,
        });
var tiles =
    L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
        subdomains: 'abcd',
        maxZoom: 19
    });

tiles.addTo(map);

//var earthquakes = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson";

function addDataToMap(data, map) {
    var dataLayer = L.geoJson(data, {
        onEachFeature: function (feature, layer) {
            var popupText = "Mag: " + feature.properties.mag;
            layer.bindPopup(popupText);
        }

    });
    dataLayer.addTo(map);
}


$.getJSON("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson", function (data) {
    addDataToMap(data, map);
}); 


