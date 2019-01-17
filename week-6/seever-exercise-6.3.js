/*
============================================
; Title:  seever-exercise-6.3
; Author: Jake Seever
; Date:   16 January 2019
; Description: Object Literals
;===========================================
*/

var header = require('../seever-header.js');
// pass in the firstName, lastName, and assignment parameters required for the header and output.
console.log(header.display("Jake", "Seever", "Exercise 6.3"));
console.log('\n');

/*
  Expected output:

  FirstName LastName
  Exercise 6.3
  Today's Date

  {id: 101, name: Help Desk Support, requester: Bob Jones}
*/

// Start program

// Create a ticket object and assign properties
var ticket = {
  id: 101,
  name: "Help Desk Support",
  requester: "Bob Jones"
}

// Output the properties of the ticket object to the console
console.log("{id: " + ticket.id + ", name: " + ticket.name + ", requester: " + ticket.requester +"}")


// End program
