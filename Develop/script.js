$(function () {
let saveBtn = $(".saveBtn");
let todayDate = dayjs();
let timeSlot = $(".description");
let calendForm = $(".time-block")
let toDo = [];
  
let dayEvent = localStorage.getItem("to-dos");

  $("#currentDay").text(todayDate.format("MMM, D YYYY"));

  $(timeSlot).text(dayEvent);

  $(function () {
    $(saveBtn).on("click", function () {
      $.each(timeSlot, function () {
        toDo.push($(this).val());
        localStorage.setItem("to-dos", toDo);
      });
    })
  });





// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
})