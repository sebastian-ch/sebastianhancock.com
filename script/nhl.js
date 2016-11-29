var xhr = new XMLHttpRequest();

xhr.open('GET', "//www.nicetimeonice.com/api/seasons/2016/games", true);
xhr.send();

//xhr.addEventListener("readystatechange", processRequest, false);
xhr.onreadystatechange = processRequest;

var days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                  'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var d = new Date();
var day = d.getDate();
var m = d.getMonth();
var weekday = d.getDay() - 1;
var y = d.getFullYear();

var theDateIs = days[weekday] + " " + months[m] + " " + day + ", " + y;

console.log(theDateIs);
function processRequest() {
    "use strict";

    if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        var games = [];
        for (var x in response) {
            if (response[x].date === theDateIs) {
                games.push(response[x]);
                
                console.log(response[x].date);
                console.log(response[x].homeTeam);
                console.log(response[x].awayTeam);
                console.log("---");
            }
        }
        console.log(games.length);
        
        for(var y in games) {
            var newDiv = document.createElement("div");
            var content = document.createTextNode("The " + games[y].awayTeam + " at the " + games[y].homeTeam);
            newDiv.appendChild(content);
            var currentDiv = document.getElementById("game1");
            document.body.insertBefore(newDiv, currentDiv);
        }
    
    }
}