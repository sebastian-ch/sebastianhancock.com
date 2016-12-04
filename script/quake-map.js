/*function AJAX_JSON_Req(url) {
    
    var AJAX_req = new XMLHttpRequest();
    AJAX_req.open("GET", url, true);
    AJAX_req.setRequestHeader("Content-type", "application/json");
    AJAX_req.setRequestHeader('Access-Control-Allow-Origin', '*');
    AJAX_req.setRequestHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    AJAX_req.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Range, Content-Disposition, Content-Description');
    
    AJAX_req.onreadystatechange = function() {
        if( AJAX_req.readyState == 4 && AJAX_req.status == 200 ) {
            var response = JSON.parse(AJAX_req.responseText);
            document.write( response.name);
        }
    }
    AJAX_req.send();
}

AJAX_JSON_Req('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson');  */