/*
============================================
; Title:  seever-exercise-5.2
; Author: Jake Seever
; Date:   09 January 2019
; Description: Use the ES5 built-in foreach function to output values from an array.
;===========================================
*/

var header = require('../seever-header.js');
// pass in the firstName, lastName, and assignment parameters required for the header and output.
console.log(header.display("Jake", "Seever", "Exercise 5.2 - ES5 Built-in Functions"));
console.log('\n');

/*
  Expected output:

  FirstName LastName
  Exercise 5.2
  Today's Date

  Lobster
  Shrimp
  Steak
  Tacos
  Sushi

*/

// start program
var foods = ["Lobster", "Shrimp", "Steak", "Tacos", "Sushi"];

foods.forEach(function(food){
  console.log(food);
});


// end program
