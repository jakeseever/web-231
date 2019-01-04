/*
============================================
; Title:  seever-assignment-4.1
; Author: Jake Seever
; Date:   27 December 2018
; Description: Debug faulty code.
;===========================================
*/

var header = require('../seever-header.js');

/*
  Expected output:

  FirstName LastName
  Assignment 4.1 - Arrays
  Today's Date

  The Rat Pack:
  Frank Sinatra - Ol' Blue Eyes
  Dean Martin - The King of Cool
  Sammy Davis Jr. - Mister Show Business
  Peter Lawford - Brother In-Lawford
  Joey Bishop - The Frown Prince of Comedy

*/

// start program

// arrays
var ratPack = ["Frank Sinatra", "Dean Martin", "Sammy Davis Jr.","Peter Lawford", "Joey Bishop" ];
var nickName = ["Ol' Blue Eyes", "The King of Cool", "Mister Show Business", "Brother In-Lawford", "The Frown Prince of Comedy"];


// function to get the Rat Pack members from the ratPack array.
function getRatPack(arr) {
  for(var i =0; i < arr.length; i++){
    console.log(arr[i] + " - " + getNickName(nickName, i));
  }
}

// function that loops over the nick name array and returns the result.
function getNickName(arr, index){
  for(var n = 0; n < arr.length; n++){
    if(n == index){
      return arr[n];
    }
  }
}

// output

// pass in the firstName, lastName, and assignment parameters required for the header and output.
console.log(header.display("Jake", "Seever", "Assignment 4.1 - Arrays"));
console.log('\n');
console.log("The Rat Pack:");
getRatPack(ratPack);

// end program
