"use strict";

function displayMailingLabel(name, address, city, state, zip){
  console.log('', name,'\n',address,'\n', city + ',' + state + ' ' + zip );
}

displayMailingLabel("John Adams", "20 West 34th Street", "New York", "NY", "10001");

function addNumbers(num1, num2){
  let sum = num1 + num2;
  console.log(sum);
}

addNumbers(1,2);

function displayReceipt(totalDue, amountPaid){
  let change = totalDue - amountPaid;
  console.log(" Total Due:   $" + totalDue + "\n", "Amount Paid: $" + amountPaid + "\n", "Change Due:  $" + change);
}

displayReceipt(100, 45);


// function displayReceipt(totalDue, amountPaid) {
//   var change = amountPaid - totalDue;
//   console.log("Total Due: $" + totalDue);
//   console.log("Amount Paid: $" + amountPaid);

//   if (change > 0) {
//     console.log("Change: $" + change.toFixed(2));
//   } else if (change == 0) {
//     console.log("No change needed");
//   } else if (change < 0) {
//     change = Math.abs(change);
//     var changeFormatted = change.toFixed(2);
//     console.log("You still owe another: $" + changeFormatted);
//   }

//   console.log();
// }

// displayReceipt(11.75, 20);
// displayReceipt(11.75, 11.75);
// displayReceipt(11.75, 10);
// displayReceipt(22.65, 15);
