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

    function backgroundColorByTime() {
        // get current number of hours
        var currentHour = moment().hours();
    
        // loop over time blocks
        $(".time-block").each(function() {
          var blockHour = parseInt($(this).attr("id").split("-")[1]);
    
          // check if we've moved past this time
          if (blockHour < currentHour) {
            $(this).addClass("past");
          } 
          else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
          } 
          else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
          }
        });
      }

      backgroundColorByTime(); 
      
}); 
