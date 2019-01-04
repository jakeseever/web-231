/*
============================================
; Title:  seever-exercise-4.3.js
; Author: Jake Seever
; Date:   02 January 2019
; Description: Filtering
;===========================================
*/

var header = require('../seever-header.js');
console.log(header.display("Jake", "Seever", "Assignment 4.3 - Filtering"));
console.log('\n');

/*
  Expected output:

  FirstName LastName
  Exercise 4.3
  Today's Date

  -- DISPLAYING ARRAY ITEMS --
  Car
  Truck
  Motorcycle
  Airplane
  Bus

  -- SELECTED VALUE --
  Motorcycle

  -- SELECTED VALUE --
  Bus
*/

// start program
var vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"];

// function
function getValue(arr, val){
  for(var k = 0; k < arr.length; k++){
    if(arr[k] === val){
      console.log(arr[k]);
    }
  }
}

// Output
console.log("-- DISPLAYING ARRAY ITEMS --");
// output each item from the vehicles array
for(var x = 0; x < vehicles.length; x++){
  console.log(vehicles[x]);
}

// new line
console.log(" ");

console.log("-- Selected Value --");
// output the selected value of Motorcycle
getValue(vehicles, "Motorcycle");

// new line
console.log(" ");

console.log("-- Selected Value --");
// output the selected item of Bus
getValue(vehicles, "Bus");

// end program
