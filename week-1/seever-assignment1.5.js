/*
============================================
; Title:  Assignment 1.5
; Author: Albert Einstein
; Date:   25 June 2017
; Modified By: Jake Seever
; Description: This program demonstrates the
;   use of JavaScript types, values, and 
;   and variables in an application.
;===========================================
*/ 

/*
    The code below builds a properly formatted
    header and must be included in all applications
    you write. In subsequent week's we will build this
    functionality into a function and place it in a separate file.
*/

var myFirstName = "Jake";
var myLastName = "Seever";
var todaysDate = new Date().toLocaleDateString();
var assignmentNum = "Assignment 1.5";

var programHeader = "\n" + myFirstName + " " + myLastName + "\n"
    + assignmentNum + "\nDate: " + todaysDate;

console.log(programHeader);
console.log("\n"); 

// start of program - your code goes below this line
var employeeFirstName = "Bob";
var employeeLastName = "Smith";
var employeeAddress = "505 Main Street Omaha, NE";
var employeePayRate = 10.50;
employeePayRate.toFixed(1);
var employeeHireDate = new Date(2016, 5, 22).toLocaleDateString('en-US');

var output = "First Name: " + employeeFirstName + "\n" + "Last Name: " + employeeLastName +
"\n" + "Address: " + employeeAddress + "\n" + "Pay Rate: $" + employeePayRate + "\n" +
 "Hire Date: " + employeeHireDate;

 console.log(output);

// end of program 