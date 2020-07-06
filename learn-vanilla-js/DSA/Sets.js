/* Sets */

function mySet () {
  // the var collection will hold the set
  collection = Array();

  // this method will check for the presence of an element and return true or false
  this.has = function (element) {
    return (collection.indexOf(element) !== -1);
  };

  // this method will return all the values in the set
  this.values = function () {
    return collection;
  };

  // this method will add an element to the set
  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  // this method will remove an element from a set
  // In ES6 sets remove is named as delete
  this.remove = function (element) {
    if(this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  // this method will return the size of the collection
  // In ES6 size is not a method it's property
  this.size = function () {
    return collection.length;
  };

  // These methods are not present in ES6 sets

  // this method will return the union of the two sets
  this.union = function (otherSet) {
    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach(item => unionSet.add(item));
    secondSet.forEach(item => unionSet.add(item));
    return unionSet;
  };

  // this method will return the intersection of two sets as a new set
  this.intersection = function(otherSet) {
    var intersectionSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(item => {
      if (otherSet.has(item)) {
        intersectionSet.add(item);
      }
    });
    return intersectionSet;
  };

  // this method will return the difference of two sets as a new set
  this.difference = function (otherSet) {
    var differenceSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(item => {
      if(!otherSet.has(item))
        differenceSet.add(item);
    });
    return differenceSet;
  };

  // this method will return if the set is a subset of a different set
  this.subset = function(otherSet) {
    var firstSet = this.values();
    return firstSet.every(value => otherSet.has(value));
  };
};

var setA = new mySet();
var setB = new mySet();

setA.add('a');
setB.add('b');
setB.add('c');
setB.add('a');
setB.add('d');

console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());


var setC = new Set();
var setD = new Set();

setC.add('a');
setD.add('b');
setD.add('c');
setD.add('a');
setD.add('d');
console.log(setD.values()); // returns an iterator
setD.delete('a');
console.log(setD.has('a'));
console.log(setD.add('d')); // will return the full object set
