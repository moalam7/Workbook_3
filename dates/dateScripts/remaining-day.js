function init() {
  const submitBtn = document.getElementById("submitBtn");

  submitBtn.onclick = displayRemainingDays;
}

window.onload = init;

function displayRemainingDays() {
  const dateInput = new Date(document.getElementById("dateInput").value);
  const currentDay = new Date();
  const paragraphInput = document.getElementById("paragraphInput")

  let msec_per_day = 1000 * 60 * 60 * 24;
  let dayDiff = (dateInput.getTime() - currentDay.getTime()) / msec_per_day;

  let numDays = Math.round(dayDiff) +1 ;

  paragraphInput.innerText = "Your trip is in " + numDays + " days."
}
