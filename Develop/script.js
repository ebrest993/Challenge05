$(function () {
  let saveBtn = $(".saveBtn");
  let todayDate = dayjs();
  let timeSlot = $(".description");
  let calendForm = $(".container-lg")
  let toDo = [];
  
  // let dayEvent = localStorage.getItem("to-dos");

  $("#currentDay").text(todayDate.format("MMM, D YYYY"));

  // $(timeSlot).text(dayEvent);

  $(function () {
    $(saveBtn).on("click", function () {
      let value = $(this).siblings(".description").val();
      let time = $(this).parent().attr("id");

      localStorage.setItem(time, value); 
      });
    })
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));
  });




// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.





