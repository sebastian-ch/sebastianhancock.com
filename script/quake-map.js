var map = L.map('map', {
    center: [34, -13],
    zoom: 2.5,
});


var tiles = L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
    subdomains: 'abcd',
    maxZoom: 18
});


tiles.addTo(map);

function addDataToMap(data, map) {

    /*  data.features.sort(function (a, b) {
          return b.properties.mag - a.properties.mag;
      }); */

    var dataLayer = L.geoJson(data, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, {
                color: 'orange',
                weight: 1,
                stroke: 2,
                //fillOpacity: .8,
                radius: feature.properties.mag * 6
            });
        },
        onEachFeature: function (feature, layer) {
            var popupText = "Mag: " + feature.properties.mag;
            layer.bindPopup(popupText);
        },


    });
    dataLayer.addTo(map);
}



$.getJSON("http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_day.geojson", function (data) {
    addDataToMap(data, map);
});

var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
}

info.update = function () {
    this._div.innerHTML = 'This map shows the earthquakes above a 1.0 magnitude that occurred today';
};

info.addTo(map);