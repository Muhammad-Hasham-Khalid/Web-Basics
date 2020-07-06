// JS Nuggets: Check if a property is in an object

var myObject = {
    name: 'JS Nuggets'
};

if (myObject.name) {
    console.log("it is in!")
}

console.log(myObject.hasOwnProperty('name'));
console.log('name' in myObject);

console.log(myObject.hasOwnProperty('valueOf'));
console.log('valueOf' in myObject);