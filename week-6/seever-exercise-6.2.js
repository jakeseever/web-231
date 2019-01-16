/*
============================================
; Title:  seever-exercise-6.2
; Author: Jake Seever
; Date:   16 January 2019
; Description: Exception Handling using try/catch
;===========================================
*/

var header = require('../seever-header.js');
// pass in the firstName, lastName, and assignment parameters required for the header and output.
console.log(header.display("Jake", "Seever", "Exercise 6.2 - Exception Handling"));
console.log('\n');

/*
  Expected output:

  FirstName LastName
  Exercise 6.2
  Today's Date

  Catch clause: <your custom message goes here>
  Finally clause reached...
*/

// Start program

// Use a try/catch to test if two values match
try {
  // test variables
  var password1 = "Tacos6";
  var password2 = "Tacos61";

  // test if the two variable values match, simulating a password match verification. If they do not, throw an error
  if (password1 != password2)throw "Passwords must match";

}catch(err) {

  // Output the error
  console.log("Catch clause: " + err);

}finally {

  // Output the end of the clause has been reached successfully
  console.log("Finally clause reached...")

}

// end program
