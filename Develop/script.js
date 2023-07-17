$(function () {
  let saveBtn = $(".saveBtn");
  let todayDate = dayjs().format("h");
  let timeSlot = $(".description");
  let calendForm = $(".container-lg")
  let toDo = [];
  
  console.log(todayDate);
  $("#currentDay").text(todayDate.format("MMM, D YYYY"));

  $(function () {
    $(saveBtn).on("click", function () {
      let value = $(this).siblings(".description").val();
      let time = $(this).parent().attr("id");

      localStorage.setItem(time, value); 
      });
    })

  $(function () {
    if(timeSlot == todayDate) {
      console.log("whaddya know");
    }
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







