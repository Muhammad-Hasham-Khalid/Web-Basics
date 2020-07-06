const express = require("express");
const fs = require("fs");
const path = require("path");
const shell = require("shelljs");

const app = express();

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// mock post request
app.post("/test/js/", (req, res) => {
  // code to be tested
  const js = req.body.js;

  // program file path
  const filepath = "program.js";

  // writing file
  fs.writeFile(filepath, js, () => {
    const jasminePath = path.join(
      __dirname,
      "node_modules",
      "jasmine",
      "bin",
      "jasmine.js"
    );

    shell.exec(`node ${jasminePath}`, function (code, stdout, stderr) {
      let msg = "";
      if (code) msg = "Exit code:" + code;
      if (stdout) msg += "Program output:" + stdout;
      if (stderr) msg += "Program stderr:" + stderr;
      res.send(msg);

      // delete file;
      fs.unlinkSync(filepath);
    });
  });
});

app.listen(5000, () => {
  console.log("server running on port 5000");
});
