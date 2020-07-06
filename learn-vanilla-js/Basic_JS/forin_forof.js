/* for... in / for... of */

// usage

// for (variable in object) {
//   statements
// }

// for (variable of object) {
//   statement
// }

// for in will loop through property names
// for in will loop through property values


let person = {
    fname: "Beau",
    lname: "Carnes",
    arms: 2
};
// for of loop will not work on person because person is not iterable

let arr = [3, 5, 7];
arr.foo = 'hello';

let text = "";
for (let x in person) {
    text += person[x];
    console.log(x);
};
console.log(text);

for (let i in arr) {
    console.log(i);
};

for (let i of arr) {
    console.log(i);
};