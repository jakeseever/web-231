/*
============================================
; Title:  seever-exercise-3.2.js
; Author: Jake Seever
; Date:   15 December 2018
; Description: Pattern matching functions
;===========================================
*/

var header = require('../seever-header.js');
console.log(header.display("Jake", "Seever", "Assignment 3.2 - Pattern Matching Functions"));
console.log('\n');

// start program

/*
  Expected output:

  FirstName LastName
  Exercise 3.2
  Today's Date

  // output from the match() function
  false
  true

  // output from the if...else blocks
  Truck and Car do not match!
  Bike and Bike do match!
  Four and Three do not match!
*/

// six test variables
var testVar1 = "Truck";
var testVar2 = "Car";
var testVar3 = "Bike";
var testVar4 = "Bike";
var testVar5 = "Four";
var testVar6 = "Three";

// functions

// test to see if the arguments match.
function match(arg1, arg2){
  if(arg1 === arg2){
    return true;
  }else{
      return false;
  }
}

// write the mismatch to the console.
function logMisMatch(arg1, arg2){
  console.log(arg1 + " and " + arg2 + " do not match!");
}

// write the match to the console.
function logMatch(arg1, arg2){
  console.log(arg1 + " and " + arg2 + " do match!")
}

// Output from the match functions
console.log(match("A", "B"));
console.log(match(2, 2));
console.log('\n');

// Conditional "if...else" statements. Includes checks for all six (6) test variables>
if(match(testVar1, testVar2)){
  logMatch(testVar1, testVar2);
}else{
  logMisMatch(testVar1, testVar2);
}

if(match(testVar3, testVar4)){
  logMatch(testVar3, testVar4);
}else{
  logMisMatch(testVar3, testVar4);
}

if(match(testVar5, testVar6)){
  logMatch(testVar5, testVar6);
}else{
  logMisMatch(testVar5, testVar6);
}

// end program

