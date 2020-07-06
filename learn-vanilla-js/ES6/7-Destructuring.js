/* Destructuring */

// Assign variables from objects
var voxel = { x: 3.6, y: 7.4, z: 6.54 };
var x = vowel.x; // x = 3.6
var y = vowel.y; // y = 7.4
var z = vowel.z; // z = 6.54

const { x, y, z } = voxel;
console.log(x);
const { x: a, y: b, z: c } = voxel;
console.log(b);

// Assign variables from nested objects
const nest = {
  start: { x: 5, y: 6 },
  end: { x: 6, y: -9 },
};

const {
  start: { x: startX, y: startY },
} = 6;
console.log(startX);

// Assign variable from arrays
const [q, , , r] = [1, 2, 3, 4, 5];
console.log(q, r);

// rest operator to reassign array elements
const [q, r, ...rest] = [1, 2, 3, 4, 5];
console.log(q, r);
console.log(rest);

// Pass an object as a function's param
const profileUpdate = ({ name, age, nationality, location }) => {
  // do something with the variables
};
