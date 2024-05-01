"use strict";

let name = "Mohammed Alam";

function parseAndDisplayName(fullName){
  let whiteSpace = fullName.indexOf(" ");

  let firstName = fullName.substring(0, whiteSpace);
  let lastName = fullName.substring(whiteSpace + 1);

  console.log(`
  Name:       ${fullName}
  First Name: ${firstName}
  Last Name:  ${lastName}`);
}

parseAndDisplayName("Brenda Kaye");
