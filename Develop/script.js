$(function (event) {
  let saveBtn = $(".saveBtn");
  let currentHour = 12;
  let todayDate = dayjs();
  let timeSlot;
  let calendForm = $(".time-block");
  let xyz = [
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17
  ];
  
  console.log();
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

    // this for loop gives timeSlot a value (from 9 to 17),
    //and then compares them to the current time. These are
    //then run through some if/else statements to determine
    //the class. I got all the console logs to read correctly
    //but the classes keep overriding each other. How do I get
    //them to respond individually?

//   for (i=0; i < calendForm.length; i++) {
//       calendForm = [i];}
//  console.log(calendForm.length);
    
  for (j=0; j < xyz.length; j++) {
      timeSlot = xyz[j];

      if (timeSlot === currentHour) {
        $(`#hour-${xyz[j]}`).parent().addClass("present");
        console.log(timeSlot);

      } 
      if (timeSlot > currentHour) {
        $(`#hour-${xyz[j]}`).parent().addClass("future");
        console.log(timeSlot);
     } 
      if (timeSlot < currentHour) {
        $(`#hour-${xyz[j]}`).parent().addClass("past");
        console.log(timeSlot);
        
     }}

     console.log(currentHour);
    
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

// function checkClass () {
//   checkTime();
// }