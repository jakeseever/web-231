/*
============================================
; Title:  seever-exercise-4.2.js
; Author: Jake Seever
; Date:   02 January 2019
; Description: Arrays
;===========================================
*/

var header = require('../seever-header.js');
console.log(header.display("Jake", "Seever", "Assignment 4.2 - Arrays"));
console.log('\n');

/*
  Expected output:

  FirstName LastName
  Exercise 3.3
  Today's Date

  Apple
  Orange
  Banana
  Mango
  Pear
*/

// start program
var fruits = ["Apple", "Orange", "Banana", "Mango", "Pear"];

// function
function getFruit(arr){
  for(var k = 0; k < arr.length; k++){
    console.log(arr[k]);
  }
}

// Output from the getFruit function
getFruit(fruits);


// end program
