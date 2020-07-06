console.log("Let's learn the console");

// logging the console object
console.log(console);

// conditional logging
// console.assert(bool, ...)
console.assert(false, 'Condition False 😷');

// Logging with braces to provide the labels to the things being logged
let foo = 5,
    bar = 10;
console.log({
    foo,
    bar
});

// table
console.table([foo, bar]);

// grouping things
// console.groupCollapsed('Things not working 🚫');

// Get much cleaner drop down
console.dir(screen);

// incrementing
function doSomething() {};

console.count('clicks');
doSomething();
console.count('clicks');
doSomething();
console.count('clicks');

// tracking the time in console
console.time(); // starting a timer for some process
console.timeLog(); // to log the elapsed time

// Tracing the stack
function bottom() {
    function top() {
        console.trace("I m called here!");
    }
    top();
}
bottom();

// CSS in console
console.log("%c JavaScript is amazing!!🌈", "background-color: purple; color: yellow; font-weight: bold;");