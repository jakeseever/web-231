/*
============================================
; Title:  seever-assignment-3.1
; Author: Jake Seever
; Date:   13 December 2018
; Description: Debug faulty code.
;===========================================
*/

var header = require('../seever-header.js');

/*
  Expected output:

  FirstName LastName
  Assignment 3.1 - Control Statements
  Today's Date

  Excellent Work, Jake!

  Better luck next time, Dakota.

*/

// start program

// test Variables
var name1 = "Jake";
var name2 = "Dakota";

// function to check the name passed in.
function evaluateWork(name) {
  if(name == "Jake"){
    return("Excellent Work, " + (name) + "!");
  }else{
    return("Better luck next time, " + (name) + ".")
  }
}

// output

// pass in the firstName, lastName, and assignment parameters required for the header and output.
console.log(header.display("Jake", "Seever", "Assignment 3.1 - Control Statements"));
console.log('\n');
console.log(evaluateWork(name1));
console.log('\n');
console.log(evaluateWork(name2));


// end program
