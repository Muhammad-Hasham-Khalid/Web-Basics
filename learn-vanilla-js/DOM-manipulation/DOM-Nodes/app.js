/* DOM Nodes */

var para = document.createElement("p");
var node = document.createTextNode("Up above the world so high");
para.appendChild(node);

var parent = document.getElementById("div1");
parent.appendChild(para);

var para2 = document.createElement("p");
para2.innerHTML = "Like a diamond in the sky"

var child = document.getElementById("p1");
parent.insertBefore(para2, child);

var para3 = document.createElement("p");
para3.innerHTML = "When the blazing sun is gone";
parent.replaceChild(para3, child);

parent.removeChild(para3);