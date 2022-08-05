$(document).ready(function() {
    if (document.location.href.indexOf("index") < 0) {
        console.log("Found a file that isn't the home page.");
        $("#loaded-layout-nav").load("index.html #layout-nav", function() {
            
        });
        $("#loaded-layout-footer").load("index.html #layout-footer", function() {
            
            $("#copy-notice").text($("#copy-notice").text() + new Date().getFullYear());
        });
    }
});