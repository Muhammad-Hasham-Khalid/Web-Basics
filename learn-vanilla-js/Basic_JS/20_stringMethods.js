/* 20 String methods */

var stringOne = "freeCodeCamp is the best place to learn";
var stringTwo = "frontend and backend development";

// charAt()
console.log(stringOne.charAt(1));

// charCodeAt()
console.log(charCodeAt(1));
// returns unicode

// concat()
console.log(stringOne.concat(stringTwo));

// endsWith()
console.log(stringOne.endsWith("n"));

// fromCharCode()
console.log(String.fromCharCode(114));
// converts unicode into character

// includes()
console.log(stringOne.includes("is"));

// indexOf()
console.log(stringOne.indexOf("Code"));

// lastIndexOf()
console.log(stringTwo.lastIndexOf("end"));
// index of the last occurance of the param

// match()
console.log(stringTwo.match(/end/g));
// this is more like regex

// repeat()
console.log(stringOne.repeat(3));
// returns the string repeated param times 

// replace()
console.log(stringTwo.replace(/end/g, "END"));

// search()
console.log(stringTwo.search("end"));

// slice()
console.log(stringTwo.slice(2, 4));
// starts at index 2, ends at index 4

// split()
console.log(stringTwo.split(" "));

// startsWith()
console.log(stringOne.startsWith("free"));

// substr()
console.log(stringTwo.substr(2, 4));
// start from 2 and will count 4 characters 

// substring()
console.log(stringTwo.substring(2,4));
// similar to slice()

// toUpperCase()
console.log(stringOne.toUpperCase())

// toLowerCase()
console.log(stringOne.toLowerCase())

// trim()
var stringThree = "    Javascript!";
console.log(stringThree.trim())