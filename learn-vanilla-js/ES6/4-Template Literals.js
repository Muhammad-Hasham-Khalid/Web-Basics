// JS Nuggets: Template Literals

// multi-line strings
console.log(`string text line 1
string text line2`);

// expression interpolation
var a = 5;
var a = 10;
console.log(`Fifteen is ${a + b} and \nnot ${2 * a + b}.`);

// Tagged templated literals

const tag = (strings, ...values) => {
  console.log(strings);
  console.log(values);
};

tag`Hello ${a + b} world ${a * b}`;

function template(strings, ...keys) {
  return function (...values) {
    var dict = values[values.length - 1] || {};
    var result = [strings[0]];
    keys.forEach(function (key, i) {
      var value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, string[i + 1]);
    });
    return result.join("");
  };
}

var t1Closure = template`${0}${1}${0}`;
console.log(t1Closure("Y", "A"));

var t2Closure = template`${0} ${"foo"}!`;
console.log(t2Closure("Hello", { foo: "World" }));
