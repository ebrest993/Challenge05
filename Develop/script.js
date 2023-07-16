let saveBtn;
let addedToDo = [];
let todayDate = dayjs();
let displayDate;

$("#currentDay").text(todayDate.format("MMM D, YYYY"));
console.log();
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
});
