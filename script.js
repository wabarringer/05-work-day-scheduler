// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var hour09 = $("#hour-09");
var hour10 = $("#hour-10");
var hour11 = $("#hour-11");
var hour12 = $("#hour-12");
var hour13 = $("#hour-13");
var hour14 = $("#hour-14");
var hour15 = $("#hour-15");
var hour16 = $("#hour-16");
var hour17 = $("#hour-17");
var hourArray = [hour09,hour10,hour11,hour12,hour13,hour14,hour15,hour16,hour17]
// console.log(hourArray)
// DONE: Add code to display the current date in the header of the page.
var today = dayjs().format("MMM D, YYYY");
// console.log(today);
document.querySelector("#currentDay").textContent = today;

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  var inputArray = [];
  var hourContainer = $("#hour-container");
  
  var saveBtn = $(".saveBtn");
  saveBtn.click(function(event){
    event.preventDefault();
    // console.log("working");
    
     // TODO: save the hour id of the time block that is clicked to local storage
    // localStorage.setItem("Time Block", $(this).parent().attr("id"));

    // TODO: grab value from text area that is being saved
   
  
  for (let i = 0; i < 9; i++) {
    var containerWalk = hourContainer.children().eq(i).
    children(".description").val(); 
    console.log(containerWalk);
  // DONE: Push containerWalk to an array
  // PROBLEM: only pushes last input
  // SOLVED: was pushing outside of for loop
    inputArray.push(containerWalk);
    console.log(inputArray);
    
    }
    
    storeInput();

    
    
    // PROBLEM: Only pulls the text value from hour-9 block; for all other time blocks the text logs as an empty string
    // grabbing first item that is .description  
});

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
function storeInput(){
  localStorage.setItem("Inputs", JSON.stringify(inputArray));
}

function renderInput(){
  var savedInputs = JSON.parse(localStorage.getItem("Inputs"));
  console.log(savedInputs);
  if (savedInputs){
  for (let i = 0; i < 9; i++) {
    hourContainer.children().eq(i).
    children(".description").val(savedInputs[i]);
  }
}
}
renderInput();


  // DONE: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. 
  function timeDetect() {
    var currentHour = dayjs().format("H")
    // testing after 5pm
    // var currentHour = 14
    for (let i = 0; i < hourArray.length; i++) {
     if (hourArray[i][0].id.slice(-2) == currentHour){
      hourArray[i].addClass("present")
     } else if (hourArray[i][0].id.slice(-2) < currentHour){
      hourArray[i].addClass("past")
     } else {hourArray[i].addClass("future")
    }
    }}
timeDetect()

});
