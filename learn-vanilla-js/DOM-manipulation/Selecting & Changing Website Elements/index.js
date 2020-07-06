// DOM manipulation: selecting and changing website elements

var div1 = document.getElementById('div1');

var unicycle = document.getElementsByClassName('unicycle');

// for unicycle in div1
var unicycle_div1 = div1.getElementsByClassName('unicycle');

var paragraphs = document.getElementsByTagName('p');

var queryUnicycle = document.querySelector(".unicycle");
// querySelector can accept a string containing one or more CSS selectors seperated by commas and this is gonna return the first element in the document that matches that selection

var queryAll = document.querySelectorAll(".unicycle, #div2");
// will return an array of elements having class unicycle or the id div2 

// replacing HTML with some new HTML
var text = "<h1> Hello World! </h1>";
//div1.innerHTML = text; 
// going to replace all the HTML inside div1 with this text(HTML)

var someOtherText = "<h1> Changing unicycle </h1>"
queryUnicycle.textContent = someOtherText;
// will place the text as raw text there

// for (let i = 0; i < queryAll.length; i++) {
//     queryAll[i].innerHTML = someOtherText;
// }
//going to replace HTML of all the unicycle classes or div2 id with someOthertext(HTML)