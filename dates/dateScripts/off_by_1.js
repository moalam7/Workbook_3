function init() {
  const displayButton = document.getElementById("displayButton");
  // displayButton.onclick = displayRemainingDays;
  displayButton.onclick = displayDate;

}

window.onload = init;

// function displayRemainingDays() {
//   const dateInput = new Date(document.getElementById("dateInput").value);
//   const currentDay = new Date();
//   const messageParagraph = document.getElementById("messageParagraph")

//   let msec_per_day = 1000 * 60 * 60 * 24;
//   let dayDiff = (dateInput.getTime() - currentDay.getTime()) / msec_per_day;

//   let numDays = Math.round(dayDiff) +1 ;

//   messageParagraph.innerText = "Your trip is in " + numDays + " days."
// }

function displayDate(){
  let messageParagraph = document.getElementById("messageParagraph");
  let dateInput = document.getElementById("dateInput");
  messageParagraph.innerText = dateInput.value;
  // let d = new Date(dateInput.value);
  // console.log(d.toString());
}
