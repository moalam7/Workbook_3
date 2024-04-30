"use strict"

function getSocSecTax(grossPay){
  let socialSecurityTax = grossPay * .062;
  return socialSecurityTax;
}

function getMedicareTax(grossPay){
  let medicareTax = grossPay * .0145;
  return medicareTax.toFixed(2);
}

function getFederalTax(grossPay, withholdingCode){
  let federalTax = 0;

  if (withholdingCode < 0){
    return "Withholding code does not exist!";
  } else if(withholdingCode == 0){
    federalTax = grossPay * .23;
    return federalTax;
  } else if(withholdingCode == 1){
    federalTax = grossPay * .21;
    return federalTax;
  } else if(withholdingCode == 2){
    federalTax = grossPay * .195;
    return federalTax;
  }else if(withholdingCode == 3){
    federalTax = grossPay * .185;
    return federalTax;
  } else {
    let rate = 0.005 * (withholdingCode - 4);
    federalTax = grossPay * (.18 - rate);
    return federalTax;
  }
}

console.log(getSocSecTax(100));
console.log(getMedicareTax(100));
console.log(getFederalTax(100,-1));
console.log(getFederalTax(100,0));
console.log(getFederalTax(100,1));
console.log(getFederalTax(100,2));
console.log(getFederalTax(100,3));
console.log(getFederalTax(100,4));
console.log(getFederalTax(100,5));
