$(document).ready(function() {
    if (document.location.href.indexOf("index") < 0) {
        console.log("Found a file that isn't the home page.");
        $("#loaded-layout-nav").load("index.html #layout-nav", function() {
            console.log("Should have loaded the layout."); // Callback optional here...
        });
        $("#loaded-layout-footer").load("index.html #layout-footer", function() {
            console.log("Should have loaded the layout footer."); // Callback optional here...
        });
    }
});