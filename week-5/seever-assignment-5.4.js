/*
============================================
; Title:  seever-assignment-5.4
; Author: Jake Seever
; Date:   09 January 2019
; Description: Filtering/Reducing Complex Data Structures using the map function
;===========================================
*/

var header = require('../seever-header.js');
// pass in the firstName, lastName, and assignment parameters required for the header and output.
console.log(header.display("Jake", "Seever", "Assignment 5.4 - Filtering/Reducing Complex Data Structures"));
console.log('\n');

// start program

var composers = [
  {
    firstName: "Ludwig van",
    lastName: "Beethoven",
    genre: "Classical",
    rating: 8
  },
  {
    firstName: "Wolfgang Amadeus",
    lastName: "Mozart",
    genre: "Classical",
    rating: 10
  },
  {
    firstName: "Johann Sebastian",
    lastName: "Bach",
    genre: "Classical",
    rating: 9
  },
  {
    firstName: "Joseph",
    lastName: "Haydn",
    genre: "Classical",
    rating: 6
  },
  {
    firstName: "Franz",
    lastName: "Schubert",
    genre: "Classical",
    rating: 5
  },
];

// use the map function to return the composer's rating and lastname
var ratings = composers.map(function(composer){
  return {
    rating: composer.rating,
    lastName: composer.lastName};
});

// use the map function to return the composer's genre and lastname
var genres = composers.map(function(composer){
  return {
    genre: composer.genre,
    lastName: composer.lastName};
});

// output

console.log("-- COMPOSERS BY RATING --");

// output each composer by rating
ratings.forEach(function(composer){
  console.log(
  "Rating: " + composer.rating + "\n" + "Composer: " + composer.lastName + "\n"
)});

console.log(" ");

console.log("-- COMPOSERS BY GENRE --");

// output each composer by genre
genres.forEach(function(composer){
  console.log(
  "Genre: " + composer.genre + "\n" + "Composer: " + composer.lastName + "\n"
)});

// end program

