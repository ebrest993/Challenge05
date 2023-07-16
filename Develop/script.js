let saveBtn = $(".saveBtn");
let addedToDo = [];
let todayDate = dayjs();
let timeSlot = $("time-block");

$("#currentDay").text(todayDate.format("MMM, D YYYY"));
console.log(saveBtn);
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  $(saveBtn).on("click", function () {

  console.log("beep-boop");
  // need a jQuery function to send the entered event to local storage
  // also need a function to determine css styling and when the event occurs
  // jQuery version of localStorage.setItem to store event
  // jQuery version of localStorage.getItem to keep event displayed on calendar
})
});


