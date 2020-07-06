"use strict";
/* Strict Mode */

function myFunction() {
    "use strict";
    var y = 3.14;
}

// CONVERTING MISTAKES INTO ERRORS

var x = 3.14;
delete x; // deleting variables is not allowed in strict mode.

var obj = {};
Object.defineProperty(obj, "x", {
    value: 0,
    writable: false
});
obj.x = 3.14;

var obj = {
    get x() {
        return 0
    }
};
obj.x = 3.14;

delete Object.prototype;

function sum(a, a, c) {
    'use strict';
    return a + b + c;
}


// WITH AND EVAL CHANGES

var x = 17;
with(obj) {
    x; // Is this var x or obj.x?
}

eval("var x;")

var x = 17;
var evalX = eval("'use strict'; var x = 42; x;");
console.assert(x === 17);
console.assert(evalX === 42);


// SECURING JAVASCRIPT