function display(msg){ //message is the parameter
  console.log(msg);
}

//The literal "Howdy" is the argument
display("Howdy");

//the variable is the argument
let x = "Chicken";
display(x);

function displayNameAndAge(name, age) {
  let message = name + " is " + age;


 console.log(message);
 }

 // elsewhere

 let someName = "Ezra";
 let someAge = 17;

 displayNameAndAge(someName, someAge);

 someName = "Ian";
 someAge = 16;

 displayNameAndAge(someName, someAge);
