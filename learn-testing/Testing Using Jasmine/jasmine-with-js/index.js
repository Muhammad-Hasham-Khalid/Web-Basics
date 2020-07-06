// importing jasmine test
const JasmineTest = require("./tester");
const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

app.post("/", (req, res) => {
  const js = req.body.js;

  // writing program into a file
  fs.writeFileSync("program.js", js);

  // performing test
  let passed = JasmineTest();

  res.json({ testPassed: passed });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
