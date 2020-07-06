// * ✅ expect 2+3 = 5
// ! ❌ Only num params
// ! ❌ 0.1 + 0.2 === 0.3

const expect = require("expect");

function add(a, b) {
  var result;
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Params must be number.");
  }
  result = a + b;
  if (parseInt(result) !== result) {
    result = parseFloat(result.toFixed(1));
  }
  return result;
}

// function addtest(a, b) {
//   return a + b;
// }

// Always write the expectations with the code
// Example:
// Expect add(2, 3) to equal 5

expect(add(2, 3)).toBe(5);
console.log({ test: 1, status: "cleared" });

// Example
// Expect add() to throw and error if a/b are not numbers
expect(add(2, "test")).toThrow();
console.log({ test: 2, status: "cleared" });

// Example
// Expect add(0.1, 0.2) to equal to 0.3
expect(add(0.1, 0.2)).toBe(0.3);
console.log({ test: 3, status: "cleared" });
