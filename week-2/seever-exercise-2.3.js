/*
============================================
; Title:  seever-header-test.js
; Author: Jake Seever
; Date:   09 December 2018
; Description: Displays a formatted header
;===========================================
*/

var header = require('../seever-header.js');

// start program

/*
  Expected output:

  FirstName LastName
  Exercise 2.3
  Today's Date

  Hello FirstName LastName!

  Hint: Use your personal header display function and
  refer to page 178 for implementing function properties
*/

// function properties go here...
myName.jake = "Jake";

// function
function myName() {
  return myName.jake;
}

// output

// pass in the firstName, lastName, and assignment parameters required for the header.
console.log(header.display("Jake", "Seever", "Exercise 2.3 - Function Properties"));
console.log('\n');
console.log("Hello " + myName() + " Seever!");

// end program
