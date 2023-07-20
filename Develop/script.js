// entire js file wrapped in jQuery function to be sure the page loads first
$(function (event) {
  let hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  let calendForm = $(".time-block");
  let saveBtn = $(".saveBtn");
  
  let currentHour = dayjs().format("HH");
  let todayDate = dayjs();
  let timeSlot;
  
  
  // establishes and displays current date at top of the page.
  $("#currentDay").text(todayDate.format("MMM, D YYYY"));

  // enters data the User wants to save from each time slot into local storage
  $(function () {
    $(saveBtn).on("click", function () {
      let value = $(this).siblings(".description").val();
      let time = $(this).parent().attr("id");
      localStorage.setItem(time, value);
      });
    })
    
  // for loop that combs through the 'hours' array
  for (j=0; j < hours.length; j++) {
      timeSlot = hours[j];
      if (timeSlot == currentHour) {
        $(`#hour-${hours[j]}`).parent().addClass("present");
      } 

  // these three take the 'hours' array and compare to the number value of each "hour-" id
      if (timeSlot > currentHour) {
        $(`#hour-${hours[j]}`).parent().addClass("future");
     } 
      if (timeSlot < currentHour) {
        $(`#hour-${hours[j]}`).parent().addClass("past");
     }}

  // pulls calendar entries for each hour from local storage and displays
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));
})