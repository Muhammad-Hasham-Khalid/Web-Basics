// Module Wrapper Function
/* (function (exports, require, __filename, __dirname) {

}) */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
  }
}

module.exports = Person;