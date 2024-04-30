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
