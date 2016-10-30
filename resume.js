/*jslint browser: true*/
/*global $ */

$("g").click(function() {
    alert($(this).attr("id"));
});