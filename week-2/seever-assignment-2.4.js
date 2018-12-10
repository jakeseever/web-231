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
  // Below is what I am expecting to see when I run your program - remove this before submitting your work
  // 50% of you will not read this and lose 25% of the awardable points.

  FirstName LastName
  Assignment 2.4
  Today's Date

  Hello my name is <your actual name goes here>!

  Today's date is <today's date> and the current temperature is <33.6 - use the formatNumber function> degrees.

  I am <your actual age - parsed int value> years old and my savings account goal is <your actual goal - parsed float value> dollars.

*/

// test Variables
var firstName = "Jake";
var lastName = "Seever";
var year = "2018";
var month = "December";
var day = "09";
var number = 33.601;
var numberOfFixedPositions = 1;
var age = "35";
var accountGoal = "10000000.00 dollars";

// function properties go here...

// function to combine name strings.
function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

// function to create a date.
function dateWriter(month, day, year) {
  return month + " " +  day + " " + year;
}

// function to format a number to fixed length.
function formatNumber(number, numberOfFixedPositions){
  // return the number with the number of fixed positions you specified in the second parameter.
  var formattedNumber = number.toFixed(numberOfFixedPositions);
  return formattedNumber;
}

// function to convert a string to int.
function convertToInt(string){
  // parse the string parameter and return the value as an integer.
  var convertedInt = parseInt(string);
  return convertedInt;
}

//function to convert a string to a float.
function convertToFloat(string){
  // parse the string parameter and return the value as a float.
  var convertedFloat = parseFloat(string);
  return convertedFloat;
}

// output

// pass in the firstName, lastName, and assignment parameters required for the header and output.
console.log(header.display("Jake", "Seever", "Exercise 2.3 - Function Properties"));
console.log('\n');

// output combined first and last name.
console.log("Hello my name is " + fullName(firstName, lastName) + "!");
console.log('\n');

// out put the date and current temperature.
console.log("Today's date is " + dateWriter(month, day, year) + " and the current temperature is " +
formatNumber(number, numberOfFixedPositions) + " degrees.");
console.log('\n');

// output your age and savings account goal.
console.log("I am " + convertToInt(age) + " years old and my savings account goal is " + convertToFloat(accountGoal) + " dollars.");

// end program
