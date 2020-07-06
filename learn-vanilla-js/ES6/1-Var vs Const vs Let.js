// JS Nuggets: Const vs Let vs Var

// const - for values that never change

const Pi = 3.14;
// Pi = 1 //error
console.log(Pi);

// let - for block-level variables

for (let i = 0; i < 3; i++) {
  console.log(i);
}
// console.log(i) //error

// var - for variables available to entire function or program

console.log(j);
for (var j = 0; j < 3; j++) {
  console.log(j);
}
console.log(j);
