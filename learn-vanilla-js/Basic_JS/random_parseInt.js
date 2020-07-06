/* Random numbers & parseInt */

// console.log(Math.floor(Math.random() * 20));

Math.random(); // creates random number 0 inclusive, 1 exclusive
Math.floor(Math.random() * 20); // for numbers from 0-19

function randomRange(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomRange(1, 9));


console.log(parseInt("11", 2)); // it will consider 11 in base 2 due to the second argument and will result in an output 3