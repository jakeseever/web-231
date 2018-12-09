/*
============================================
; Title:  seever-header-test.js
; Author: Jake Seever
; Date:   09 December 2018
; Description: Displays a formatted header
;===========================================
*/

//the variable holding the required javaScript document to display the header.
const header = require('../seever-header.js');

//Pass in the firstName, lastName, and assignment parameters required for the header.
console.log(header.display("Jake", "Seever", "Exercise 2.2-Header"));
