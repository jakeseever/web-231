/*
============================================
; Title:  seever-discussion-5.1
; Author: Jake Seever
; Date:   08 January 2019
; Description: Debug faulty code.
;===========================================
*/

var header = require('../seever-header.js');
// pass in the firstName, lastName, and assignment parameters required for the header and output.
console.log(header.display("Jake", "Seever", "Discussion 5.1 - Advanced Arrays"));
console.log('\n');

/*
  Expected output:

  FirstName LastName
  Discussion 5.1 - Advanced Arrays
  Today's Date

  -- THE RAT PACK --
  Frank Sinatra - Ol' Blue Eyes
  Dean Martin - The King of Cool
  Sammy Davis Jr. - Mister Show Business
  Peter Lawford - Brother In-Lawford
  Joey Bishop - The Frown Prince of Comedy


*/

// start program

// keyed collection arrays
var ratPack = [
  {
    name:'Frank Sinatra',
    nickName: "Ol' Blue Eyes",
  },
  {
    name:'Dean Martin',
    nickName: 'The King of Cool'
  },
  {
    name:'Sammy Davis Jr.',
    nickName: 'Mister Show Business'
  },
  {
    name:'Peter Lawford',
    nickName: 'Brother In-Lawford'
  },
  {
    name:'Joey Bishop',
    nickName: 'The Frown Prince of Comedy'
  }
];




// output
console.log("-- THE RAT PACK --");

// function to loop over and get the Rat Pack members from the ratPack array.
ratPack.forEach(function(member){console.log(member.name+ " - " + member.nickName)});

// end program
