/*
============================================
; Title:  seever-exercise-3.3.js
; Author: Jake Seever
; Date:   15 December 2018
; Description: Control Statements
;===========================================
*/

var header = require('../seever-header.js');
console.log(header.display("Jake", "Seever", "Assignment 3.2 - Pattern Matching Functions"));
console.log('\n');

// start program

/*
  Expected output:

  FirstName LastName
  Exercise 3.3
  Today's Date

  // Expected output
  The enter key was pressed
*/

// test variables.
let eventKeyCode = 13

// Switch case control statement for the key that was pressed.
switch(eventKeyCode){
  case 13:
    console.log("The enter key was pressed.");
    break;
  case 16:
    console.log('The shift key was pressed.')
    break;
  case 32:
    console.log('The spacebar key was pressed.')
    break;
  case 8:
    console.log('The backspace / delete key was pressed.')
    break;
  default:
    console.log('Unrecognized key pressed.')
    break;
}

// end program
