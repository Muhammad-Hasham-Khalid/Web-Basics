/*Arrow Functions */

//Syntax
// (param1, param2) => { statements }
// (param1, param2) => expression
// (param1, param2) => { return expression; }

// (singleParam) => { statements }
// singleParam => { statements }

// () => { statements }
// () => expression
// () => { return expression; }

(param1, param2, paramN) => expression 

// NORMAL FUNCTION
var multiply = function(x, y) {
  return x * y;
}; 
 
// ARROW FUNCTION 
var multiply = (x, y) => { return x * y };
// or
var multiply = (x, y) => x*y;

// Example
var materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

var materialsLength1 = materials.map(function(material) { 
  return material.length;
});

var materialsLength2 = materials.map((material) => {
  return material.length;
});

var materialsLength3 = materials.map(material => material.length);


// No binding of 'this'
function Person(){
  this.age = 0;

  setInterval(() => {
    this.age++; // In a normal function, 'this' refers to global object, here it properly refers to the person object
    console.log(this.age)
  }, 3);
}

var p = new Person();

// Returning object literals
var func = () => ({foo: 1});

// Line breaks
var func = ()
           => 1; 