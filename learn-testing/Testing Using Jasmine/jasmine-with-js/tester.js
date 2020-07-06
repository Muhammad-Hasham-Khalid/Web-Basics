const Jasmine = require("jasmine");

const jasmine = new Jasmine();
let testStatus = false;

console.log("Loading Jasmine Configs ...");
jasmine.loadConfig({
  spec_dir: "tests",
  spec_files: ["test.js"],
  stopSpecOnExpectationFailure: false,
  random: false,
});

const reporter = {
  jasmineStarted: function (suiteInfo) {
    console.log("Running suite with " + suiteInfo.totalSpecsDefined);
  },
};

console.log("Starting Jasmine Execution ...");
jasmine.execute(["./tests/test.js"]);

jasmine.onComplete((passed) => {
  console.log("Jasmine Execution completed");
  testStatus = passed;
  jasmine.exitCodeCompletion(passed);
  delete jasmine;
});

return testStatus;
