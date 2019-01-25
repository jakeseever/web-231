/*
============================================
; Title:  seever-assignment-5.4
; Author: Jake Seever
; Date:   25 January 2019
; Description: Creating objects using constructor functions
;===========================================
*/

var header = require('../seever-header.js');
// pass in the firstName, lastName, and assignment parameters required for the header and output.
console.log(header.display("Jake", "Seever", "Exercise 7.2"));
console.log('\n');

/*
  Expected output:

  FirstName LastName
  Exercise 7.2
  Today's Date

  1 Thomas Edison Software Engineer
  2 Benjamin Franklin Programmer
  3 Nikola Tesla Project Manager
  4 Charles Babbage Product Manager
  5 Alexander Bell Business Analyst
*/

// start program

/**
 * Params: id, firstName, lastName, title
 * Response: void
 * Description: sets the id, firstName, lastName, and title of an employee.
 */
function employee(id, firstName, lastName, title) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
  }

  // create 5 new objects
var employees = [
    new employee(1, 'Thomas', 'Edison', 'Software Engineer'),
    new employee(2, 'Benjamin', 'Franklin', 'Programmer'),
    new employee(3, 'Nikola', 'Tesla', 'Project Manager'),
    new employee(4, 'Charles', 'Babbage', 'Product Manager'),
    new employee(5, 'Alexander', 'Bell', 'Business Analyst')
  ];

  // output each employee object to the console.
var index = 1
for (let x = 0; x < employees.length; x++) {
  console.log(employees[x].id + ' ' + employees[x].firstName + ' ' + employees[x].lastName + ' ' + employees[x].title);
}



// end program
