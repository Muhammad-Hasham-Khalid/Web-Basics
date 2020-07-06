## What is Express?

Express is a fast, unopinionated and minimalist web framework for Node.js

Express is a **"server-side"** or **"back-end"** framework. It is not comparable to client-side frameworks like *React*, *Angular* & *Vue*. It can be used in combination with those frameworks to build full stack applications.

## Why use Express?

- Makes building web applications with Node.js much easier.
- Used for both server rendered apps as well as API/Microservices
- Extremely light, fast and free.
- Full control of request and response.
- By far the most popular node framework
- Great to use with client side frameworks as it's all JavaScript.

## What to know first?
- JavaScript Fundamentals (Objects, Arrays, Conditionals, etc)
- Basic Node.js & NPM

**It may help to learn these first:**
- HTTP status codes
- JSON
- Higher order array methods *forEach, map, filter*
- Arrow Functions

## Basic server syntax
```Javascript
const express = require('express');

// Init Express
const app = express();

// Create your endpoints/route handlers
app.get('/', (req, res) => {
    res.send('Hello World!');
})

// Listen on a port
app.listen(5000);
```

## Basic Route handling
- Handling requests/routes is simple
- app.get(), app.post(), app.put(), app.delete(), etc
- access to params, query strings, url parts etc
- Express has a router so we can store routes in seperate files and export
- We can parse incoming data with the body parser.

## Express Middleware 
**Middleware functions** are functions that have access to the **request** and **response** object. Express has built in middleware but middleware also comes from 3rd party packages as well as custom middleware.

- Execute any code
- Make changes to the request/response objects
- End response cycle
- Call next middleware in the stack

