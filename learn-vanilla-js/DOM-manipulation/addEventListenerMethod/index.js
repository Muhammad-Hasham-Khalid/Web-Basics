/* Event Listeners */

/* 
attaches an event listener to the specified element without overriding existing event handlers so we can many event handlers to one event
*/

//Syntax: element.addEventListener(event, function, useCapture);

var myP= document.getElementById("myP");
var myDiv = document.getElementById("myDiv");
var myP2= document.getElementById("myP2");
var myDiv2 = document.getElementById("myDiv2");

myP.addEventListener("click", function(){
    myDiv.style.backgroundColor = "lightblue";
});

function changeText(){
    myP2.textContent = myP2.textContent += "~Here is some new content!!!~";
}

function changeText2(){
    myP2.textContent = myP2.textContent += "THE REAL ANSWER";
}

myP.addEventListener("click", changeText, true); // will only pass the function reference here
/* if this last parameter is true the outer most element's event is handled first and if it is set to false the inner most element's event is handled first */
myDiv.addEventListener("click",changeText2, true);

myDiv.addEventListener("mouseover", function(){
    myDiv2.style.backgroundColor = "darkkhaki";
});

myDiv.addEventListener("mouseout", function(){
    myDiv2.style.backgroundColor = "coral";
});
/*
myP.onclick(function(){
    myDiv.style.background = "lighblue";
});
*/
myP.removeEventListener("click", changeText, true);
// for remove event listener the arguments should be the same as the addEventListener
// we can only remove those event listeners in which we have passed some function reference
/* we are not using onclick here because by using onclick we may have only event assigned to a kind
 so if we assign another event to onclick it will override the first event */