/*jslint browser: true*/
/*global $ */

$(document).ready(function () {
    
    $("#spotsy-dot").click(function () {
        $("#spotsy-line").toggle().addClass('draw');
    });

    $("#wm-dot").click(function () {
        $("#wm-line").toggle().addClass('draw');
    });

    $("#mb-dot").click(function () {
        $("#mb-line").toggle().addClass('draw');
    });

    $("#danville-dot").click(function () {
        $("#danville-line").toggle().addClass('draw');
    });
    
    
   
});