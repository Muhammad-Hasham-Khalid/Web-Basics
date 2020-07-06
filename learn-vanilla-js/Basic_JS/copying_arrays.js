/* Copying Arrays */

var original = [true, true, undefined, false, null];

// slice
var copy1 = original.slice(0);


// spread operator
var copy2 = [...original];
console.log(copy1, copy2);


// DEEP copying
// if we have an object/array inside an array then actual array just has a pointer to that object/array so in order to copy them we need to do DEEP copy
var deepArray = [
    ["freeCodeCamp"]
];
var shallowCopy = deepArray.slice(0);

shallowCopy[0].push("is great");
console.log(deepArray[0], shallowCopy[0])

var deepCopy = JSON.parse(JSON.stringify(deepArray));
// JSON.stringify will convert whole array into string
// JSON.parse will convert that string back to JS object

deepCopy[0].push("is great");
console.log(deepArray[0], deepCopy[0])