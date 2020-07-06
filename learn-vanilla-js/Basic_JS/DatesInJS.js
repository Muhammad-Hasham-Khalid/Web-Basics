/* Dates */

var d1 = new Date();
console.log(d1.toString());
console.log(d1.toDateString());
console.log(d1.toTimeString());
console.log(d1.toUTCString());

// Months start at 0
var d2 = new Date(2017, 1, 3, 42, 43, 23, 23);
console.log(d2.toString());

var d3 = new Date(86480360);
console.log(d3.toString());

var d4 = new Date("October 13, 2020 11:13:00");
console.log(d4.toString());

var d5 = new Date("2015-03-25");
console.log(d5.toString());

var d6 = new Date("2015-03");
console.log(d6.toString());

var d7 = new Date("03/25/2020");
console.log(d7.toString());

var d8 = new Date("March 25 2020");
console.log(d8.toString());

console.log(d4.getDate());
console.log(d4.getDay());

d4.setYear(2020);
console.log(d4.toString());

var start = new Date();
doSomething();
var end = new Date();

var elapsed = end.getTime() - start.getTime();
console.log(elapsed);

function doSomething() {
    for (let i = 0; i < 10000; i++) {}
};