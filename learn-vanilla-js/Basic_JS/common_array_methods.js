// JS Nuggets: 10 Common Array Methods

var arr = ["a", "b", "c"];

arr.push("d");
console.log(arr);

console.log(arr.pop());
console.log(arr);

var arr2 = ["g", "q"];
console.log(arr.concat(arr2));
console.log(arr2);

console.log(arr.join("!"));

console.log(arr.reverse());
console.log(arr);

console.log(arr.shift());
console.log(arr);

console.log(arr.unshift("p")); // returns the length of the array
console.log(arr);

console.log(arr.slice(1, 3)); // it won't modify the original array

arr.push("i");
arr.push("f");
arr.sort();
console.log(arr);

// array.splice(startingIndex, numberOfItemsToRemove, anyItemThatWeWantToAdd)
console.log(arr.splice(2, 2, "JS Nuggets")); // it will modify the original array
console.log(arr);