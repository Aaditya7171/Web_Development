// // When script tag is inside the head section, we need to check if our jQuery file is ready before exection, that function only executes the jQuery code when it is ready
$(document).ready(function(){
    $("h1").css("color", "red");
});

// $("h1").css("color", "red");