// Step 2, step for handling $.getJSON request
function getTeamDataWithGetJSON() {
    $.getJSON("team.json", function (data) {
        displayTeamData(data.members); // method to loop through the element
    });
}

// Step 3, step for handling $.ajax request
function getTeamDataWithAjax() {
    // show the loading message
    $("#team").text("Loading...");

    // using the http get
    $.ajax({
        url: "team.json",
        type: "GET",
        dataType: "json",
        success: function (data) {
            // Remove loading message and display team data
            $("#team").empty();
            displayTeamData(data.members);
        },
        error: function () {
            // Display an error message
            $("#team").text("Error: Content could not be retrieved.");
        }
    });
}

// Step 2(c)
// Function to display team data
function displayTeamData(members) {
    $.each(members, function (index, member) {
        // Create HTML elements for name, position, and bio
        var nameElement = $("<h2>").text(member.name);
        var positionElement = $("<h5>").text(member.position);
        var bioElement = $("<p>").text(member.bio);

        // Append the elements to the #team div
        $("#team").append(nameElement, positionElement, bioElement);
    });
}

// last step
// Call the methods to retrieve team data
getTeamDataWithGetJSON();

