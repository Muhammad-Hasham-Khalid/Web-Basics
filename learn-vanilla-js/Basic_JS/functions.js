/* Functions */

function square(number) {
    return number * number;
}

console.log(square(4));

var someVar = "Hat";

function myFun() {
    var someVar = "Shoes";
    console.log(someVar);
}

myFun();
console.log(someVar);

function addSquares(a, b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
}

a = addSquares(2, 3); // returns 13
b = addSquares(3, 4); // returns 25
c = addSquares(4, 5); // returns 41

// we can actually call the function before it actually appears in the code : Hoisting