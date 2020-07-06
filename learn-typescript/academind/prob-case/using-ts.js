var button = document.querySelector("#button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
console.log(document.querySelector('#button'));
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener('click', function () {
    console.log(add(+input1.value, +input2.value));
});
// 17:20
// https://youtu.be/BwuLxPH8IDs
