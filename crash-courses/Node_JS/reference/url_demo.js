const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id100&status=active');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host
console.log(myUrl.host);

// Hostname (doesnot get port)
console.log(myUrl.hostname);

// Path name
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Params object
console.log(myUrl.searchParams);

// Add params
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, name) => {
  console.log(`${name}: ${value}`);
});