/* For Loops */

// for ([initialization]; [condition]; [final-expression]) {}

var ourArray = [];
for (var i = 0; i < 5; i++) {
    if (i > 2) break;
    ourArray.push(i);
}
console.log(ourArray);

var arr = [10, 9, 8, 7, 6];
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

var arr = [
    [1, 2],
    [3, 4],
    [5, 6]
];
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}