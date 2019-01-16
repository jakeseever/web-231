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
Frank Sinatra is known as Ol'Blue Eyes
Dean Martin is known as The King of Cool
Sammy Davis Jr. is known as Mister Show Business
Peter Lawford is known as Brother In-Lawford
Joey Bishop is known as The Frown Prince of Comedy

*/

// start program

// keyed collection

var nickNames = new Map();
nickNames.set('Frank Sinatra', "Ol'Blue Eyes");
nickNames.set('Dean Martin', 'The King of Cool');
nickNames.set('Sammy Davis Jr.', 'Mister Show Business');
nickNames.set('Peter Lawford', 'Brother In-Lawford');
nickNames.set('Joey Bishop', 'The Frown Prince of Comedy');


// output

console.log("-- THE RAT PACK --");
for (var[key, value] of nickNames){
  console.log(key + " is known as " +  value);
}

// end program
