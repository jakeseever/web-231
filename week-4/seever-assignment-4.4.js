/*
============================================
; Title:  seever-exercise-4.4.js
; Author: Jake Seever
; Date:   02 January 2019
; Description: Predicates
;===========================================
*/

var header = require('../seever-header.js');
console.log(header.display("Jake", "Seever", "Assignment 4.4 - Predicates"));
console.log('\n');

// start program
var states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];

// function
function getState(str1, str2){
  if(str1 === str2){
    return true;
  }
}

// Output

// Output the original array
console.log("-- ORIGINAL ARRAY --");
for(var k = 0; k < states.length; k++){
  console.log(states[k]);
}
console.log(" ");

// Output the sorted array
console.log("-- SORTED ARRAY --");
var sortedArray = states.sort();
for(var x = 0; x < sortedArray.length; x++){
  console.log(sortedArray[x]);
}
console.log(" ");

// Output the selected value using the filter function and calling the getState function
const filteredStates = states.filter(function(z) {
  if(getState(z, 'Iowa') === true){
    console.log("-- SELECTED VALUE --");
    console.log(z);
  }
})

// end program

