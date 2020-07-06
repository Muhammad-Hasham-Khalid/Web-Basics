// jasmine module
const Jasmine = require("jasmine");
const jasmine = new Jasmine();

// jasmine configuration
jasmine.loadConfig({
  spec_dir: "spec",
  spec_files: ["app.js"],
  stopSpecOnExpectationFailure: true,
  random: false,
});

jasmine.execute();

jasmine.onComplete(function (passed) {
  if (passed) {
    res.send("Test Passed");
  } else {
    res.send("Test failed");
  }
  return;
});
