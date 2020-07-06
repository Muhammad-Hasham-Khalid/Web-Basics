/* cookies vs local storage vs session storage */

localStorage.setItem("lunch", "cereal");
console.log(localStorage.getItem("breakfast"));

localStorage.removeItem("lunch");
localStorage.clear();

document.cookie = "hello=true";
document.cookie =
  "doSomethingOnlyOnce=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
document.cookie = "person=beau; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";

document.cookie = "person=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

console.log(document.cookie);
