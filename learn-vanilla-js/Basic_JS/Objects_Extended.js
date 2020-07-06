/* Objects in JS */

// Using objects for lookups
var alpha = {
    1: "Z",
    2: "Y",
    3: "X",
    4: "W",
    // ....
};
console.log(alpha[2]);

// Remove Object properties
let dishes = {
    plates: 8,
    cups: 10,
    forks: 28,
    bowls: 13
};
delete dishes.cups;
console.log(dishes);

// Testing objects for properties
console.log(dishes.hasOwnProperty('plates'));
console.log(dishes.hasOwnProperty('cups'));

// Accessing and modifying nested objects
var ourStorage = {
    "desk": {
        "drawer": "stapler"
    },
    "cabinet": {
        "top drawer": {
            "folder1": "a file",
            "folder2": "secrets"
        },
        "bottom drawer": "soda"
    }
};
console.log(ourStorage.cabinet["top drawer"].folder2);
console.log(ourStorage.desk.drawer);
ourStorage.cabinet['top drawer'].folder2 = "cake recipe";
console.log(ourStorage.cabinet["top drawer"].folder2);

// Generate an array of all object keys
console.log(Object.keys(ourStorage));