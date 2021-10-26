let js = 'amazing';
10 + 20 + 30 - 10;

// New Code
// let firstName = 'Mukesh';
// console.log(firstName);

// Wrong way of writting variable names
let job1 = "Programmer";
let job2 = "Teacher";

// Right way of writting variable names
let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";


/*-------------------------------------------------------------------------------------------*/
/*                                         Data Type                                         */
/*-------------------------------------------------------------------------------------------*/
// let javascriptFun = true;
// console.log(javascriptFun);

// console.log(typeof javascriptFun);
// console.log(typeof 23);
// console.log(typeof "Mukesh");
// console.log(typeof true);

// // Change Data Type
// javascriptFun = "Mukesh";
// console.log(typeof javascriptFun);

// // "undefined" Data Type
// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// // It's a bug of javaScript
// console.log(typeof null);

/*-------------------------------------------------------------------------------------------*/
/*                                        Operators                                          */
/*-------------------------------------------------------------------------------------------*/
// Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Martin';
console.log(firstName + ' ' + lastName);

// Assignment Operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
console.log(x);

// Comparision Operators
console.log(ageJonas > ageSarah);
console.log(ageJonas < ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

