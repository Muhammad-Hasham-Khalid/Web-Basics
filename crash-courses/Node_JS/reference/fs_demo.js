const fs = require('fs');
const path = require('path');

// Create a folder
// it's by default async
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//   if (err) throw err;
//   console.log("Folder created...");
// });

// Create and write to file
// it's by default async
// fs.writeFile(path.join(__dirname, '\\test', 'hello.txt'), "Hello World", err => {
//   if (err) throw err;
//   console.log("File written to...");

//   // File append
//   fs.appendFile(path.join(__dirname, '\\test', 'hello.txt'), " I love Node.js", err => {
//     if (err) throw err;
//     console.log("File append to...");
//   });
// });

// Read File
// fs.readFile(path.join(__dirname, '\\test', 'hello.txt'), 'utf-8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Rename file
fs.rename(path.join(__dirname, '\\test', "\\hello.txt"), path.join(__dirname, '\\test', "helloWorld.txt"), err => {
  if (err) throw err;
  console.log("File renamed...");
})