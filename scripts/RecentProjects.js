$(document).ready(function() {
    $("#recent-projects").load("projects.html #projects", function() {
        console.log("Should have loaded projects."); // Callback optional here...
    });
});