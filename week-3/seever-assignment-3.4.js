/*
============================================
; Title:  seever-exercise-3.4.js
; Author: Jake Seever
; Date:   16 December 2018
; Description: Loops
;===========================================
*/

var header = require('../seever-header.js');
console.log(header.display("Jake", "Seever", "Assignment 3.4 - Loops"));
console.log('\n');

// start program

// test variables
var arg1 = 6;

// functions

/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

// test to see if the arguments match.
function match(arg1){
  for(var i = 0; i < 10; i++){
    var arg2 = randomNumber();
    if(arg1 == arg2){
      logMatch(arg1, arg2);
    }else{
      logMisMatch(arg1, arg2);
    }
  }
}

// write the mismatch to the console.
function logMisMatch(arg1, arg2){
  console.log(arg1 + " and " + arg2 + " does not match!");
}

// write the match to the console.
function logMatch(arg1, arg2){
  console.log(arg1 + " and " + arg2 + " does match!");
}

// output
console.log("--DO THE NUMBERS MATCH GAME--");

// Call the match function to start the match game.
match(arg1);

// end program
