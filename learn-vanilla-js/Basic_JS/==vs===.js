// == vs ===

// == abstract equality
// === strict equality

console.log(3 == "3"); // its makes the types same and then compares
console.log(3 === "3");

console.log(true == "1");
console.log(true === "1");

console.log("This is a string" == new String("This is a string.")); // string literal and string object comparison
console.log("This is a string" === new String("This is a string."));