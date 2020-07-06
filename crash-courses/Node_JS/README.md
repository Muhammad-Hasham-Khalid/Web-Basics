## Why Use Node?
- Fast, efficient & highly scalable
- Event driven, non-blocking I/O model
- Popular in the industry
- Same language on the front and back end (JS)

## Non-Blocking I/O
- Workds on a single thread using non-blocking I/O calls
- Supports tens of thousands concurrent connections
- Optimizes throughout & scalability in apps with many I/O operations
- All of this makes Node.js apps very fast and efficient.

## Node's event loop
- Single threaded
- Support concurrency via events and callbacks
- EventEmitter class is used to bind events and listeners

## Types of Projects for Node
- Rest API and microservices
- Real Time Services (Chat, Live updates)
- CRUD Apps - Blogs, Shopping carts, social networks
- Tools and utilities
[Anything that is not CPU intensive]

## NPM - Node Package Manager
- Install 3rd party packages (frameworks, libraries, tools etc.)
- Packages get stored in the **node_modules** folder
- All dependencies are listed in a **package.json** file
- NPM scripts can be created to run certain tasks such as run a server.

**npm init** *Generates a package.json file*
**npm install express** *Installs a package locally*
**npm install -g nodemon** *Installs a package globally*

## Node Modules
- Node core modules (path, fs, http etc)
- 3rd part modules/packages installed via NPM
- Custom modules (files)

```Javascript
  const path = require("path");
  const myFile = require("./myFile");
```