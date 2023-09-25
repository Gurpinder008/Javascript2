$(document).ready(function() {
    // Function to load content from a file using AJAX
    function onload(url) {
      $("#content").fadeOut(400, function() {    //using fade out property for animate the content
        $(this).load(url, function(response, status, xhr) {   //contect is loaded from the url using load method
          if (status == "error") {
            alert("Error loading content.");   // using method for handling the error
          } else {
            $(this).fadeIn(400);
          }
        });
      });
    }
  
    // Click event handlers for the solution links using .onload()
    //when the link clicked the corresponding html file will be displayed
    $("#prospect").click(function(event) {
        event.preventDefault(); 
        onload("prospect.html"); 
      });
    
      $("#convert").click(function(event) {
        event.preventDefault(); 
        onload("convert.html");
      });
    
      $("#retain").click(function(event) {
        event.preventDefault(); 
        onload("retain.html"); 
      });
  });