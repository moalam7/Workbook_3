// Code that parses this string:
// supplierCode:productNumber-size

// Example:
// ACME:123-L the large (L) part 123 is supplied by ACME
// DI:12345-M the medium (M) part 12345 is supplied by DI
// ACE:1-12 the size 12 part 1 is supplied by ACE

function getSupplier(code){
  //returns all characters before the :
  let semicolon = code.indexOf(":");
  let supplierCode = code.substring(0, semicolon);
  // console.log(supplierCode);
  return supplierCode;
}

function getProductNumber(code){
//returns all characters between the : and -
  let semicolon = code.indexOf(":");
  let dash = code.indexOf("-");
  let productNumber = code.substring(semicolon + 1, dash);
  //console.log(productNumber);
  return productNumber;
}
function getProductSize(code){
//returns all characters after the -
  let dash = code.indexOf("-");
  let productSize = code.substring(dash+1);
  //Write down an if statement to differentiate between number and letter

  //console.log(productSize);
  return productSize;
}

// getSupplier("ACME:123-L");
//getProductNumber("ACME:123-L");
//getProductSize("ACME:123-L");

function productCodeParser(code){
  console.log(`
  ${code}   the ${getProductSize(code)} part ${getProductNumber(code)} is supplied by ${getSupplier(code)}`);
}


productCodeParser("ACME:123-L");
// productCodeParser("DI:12345-M");
productCodeParser("ACE:1-12");
