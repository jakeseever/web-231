/*
============================================
; Title:  seever-discussion-6.1
; Author: Jake Seever
; Date:   16 January 2019
; Description: Objects and Built-In Objects, debug faulty code
;===========================================
*/

var header = require('../seever-header.js');
// pass in the firstName, lastName, and assignment parameters required for the header and output.
console.log(header.display("Jake", "Seever", "Discussion 6.1 - Objects and Built-in Objects"));
console.log('\n');

/*
  Expected output:

  FirstName LastName
  Discussion 6.1
  Today's Date

  Aaron Rodgers plays quarterback for the Green Bay Packers

*/

// start program

// Create a player object with properties
var player = {
  firstName: "Aaron",
  lastName: "Rodgers",
  number: "12",
  position: "quarterback",
  team: "Green Bay Packers"
}

// output the properties of the player object to the console
console.log(player.firstName + " " + player.lastName + " plays " + player.position + " for the " + player.team);

// End program
