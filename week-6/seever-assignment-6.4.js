/*
============================================
; Title:  seever-assignment-6.4
; Author: Jake Seever
; Date:   16 January 2019
; Description: Nested Object Literals
;===========================================
*/

var header = require('../seever-header.js');
// pass in the firstName, lastName, and assignment parameters required for the header and output.
console.log(header.display("Jake", "Seever", "Exercise 6.4"));
console.log('\n');

// Start program

// create a ticket literal object with a nested person object
var ticket = {
  id: 105,
  name: "Help Desk Request",
  dateCreated: new Date().toLocaleDateString('en-US'),
  priority: "High",
  person:{
    id: "I",
    firstName: "Bob",
    lastName: "Jones",
    jobTitle: "Programmer"
  }
}

// Output the properties of the ticket object literal and it's nested person object using dot notation to the console
 console.log("Ticket " + ticket.id + " was created on " + ticket.dateCreated + " and assigned to employee " +
  ticket.person.firstName + " " + ticket.person.lastName + " (" + ticket.person.jobTitle + " " + ticket.person.id + ").");

// End program
