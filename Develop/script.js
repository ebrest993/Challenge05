$(function (event) {
  let saveBtn = $(".saveBtn");
  let currentHour = dayjs().format("HH");
  let todayDate = dayjs();
  let timeSlot;
  let calendForm = $(".time-block");
  let xyz = [
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17"
  ];
  
  $("#currentDay").text(todayDate.format("MMM, D YYYY"));

  $(function () {
    $(saveBtn).on("click", function () {
      let value = $(this).siblings(".description").val();
      let time = $(this).parent().attr("id");

      localStorage.setItem(time, value);
        console.log(time); 
        console.log(value);
      });
    })

    for (i=0; i < xyz.length; i++) {
      timeSlot = xyz[i];

      if (timeSlot === currentHour) {
        calendForm.addClass("present");
        console.log("present class");
      } 
      if (timeSlot < currentHour) {
        calendForm.addClass("past");
        console.log("past class");        
     } 
      if (timeSlot > currentHour) {
        calendForm.addClass("future");
        console.log("future class");        
     };}
    
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