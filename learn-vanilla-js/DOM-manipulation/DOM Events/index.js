/*DOM Events*/

function checkCookies(){
    //alert("No Cookies!!");
    console.log("Cookies checked!!");
}

function changeColor(obj){
    obj.style.color = "teal";
}

function removeLetterFromH1(){
    var head = document.getElementsByTagName('h1')[0];
    head.textContent = head.textContent.slice(0,-1);
}

function mOver(obj){
    obj.innerHTML = "GET OFF ME!!😒";
}

function mOut(obj){
    obj.innerHTML = "THANK YOU !!😊";
}

function changeBgColor(){
    var body = document.querySelector('body');
    if(body.style.background === "papayawhip")
        body.style.background = "MediumOrchid";
    else
        body.style.background = "papayawhip";
// will select the body tag and then changes its background color
}

document.getElementById("myBtn").onclick = changeBgColor;
