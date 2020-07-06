// JSON stands for JavaScript Object Notation. It is a syntax for storing and exchanging data. Learn how to use it in JavaScript!

//JS Nuggets: JSON

// example
var myJSON = {
    "name": {
        "first": "Beau",
        "last": "Carnes"
    },
    "age": 33,
    "skills": ["juggling", "stiltwalking", "coding"],
    "married": true,
    "superpowers": null
}

// stringify method
var stringified = JSON.stringify(myJSON);
console.log(stringified);


// parse method
var stringJSON = '{ "name":"Beau", "kids":2,"state":"Michigan"}';
var myParse = JSON.parse(stringJSON);
console.log(myParse);