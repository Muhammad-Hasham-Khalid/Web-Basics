// Setting and getting CSS

var line = document.getElementById("line");
var attribute = document.getElementById('attribute');

line.style.backgroundColor = "teal"; // JS will add it in inline style of that element
line.style.color = "white"; // JS will add it in inline style of that element

attribute.style.boxShadow = "2px 2px 5px 1px blue"; // JS will add it in inline style of that element

// For Multiple styling
line.style.cssText = "color: blue; border: 1px solid black";
attribute.setAttribute("style,color: red; border: 1px solid blue;")
// if we use any of these 2 to give multiple styling at a time then it will remove any default inline styling of that HTML element

// to See which inline styles an element has
console.log(line.style.backgroundColor);
console.log(line.style); // its only going to show inline styles


// to see all the styles an element has
console.log(window.getComputedStyle(line));