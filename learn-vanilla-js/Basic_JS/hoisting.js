// Hoisting

// variable declarations and function declarations are processed before any code is executed
// variable definitions are not hoisted to the top

// console.log(notDeclared); // Uncaught ReferenceError: notDeclared is not defined

// console.log(definedLater);
var definedLater;
definedLater = 'I am defined!';
// console.log(definedLater);


console.log(definedSimulateneously);
var definedSimulateneously = 'I am defined!';
// console.log(definedSimulateneously);

// doSomethingElse();
function doSomethingElse(){
    console.log("I did it!");
}

// functionVar(); // Uncaught TypeError: functionVar is not a function

var functionVar = function(){
    console.log("I did it!");
}