$(document).ready(function() {
    // display current day on page
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY,   h:mm:ss a"));

    // listen for save button clicks
    $(".saveBtn").on("click", function() {
      // get nearby values
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
  
      // save in localStorage
      localStorage.setItem(time, value);
    });

}); 
