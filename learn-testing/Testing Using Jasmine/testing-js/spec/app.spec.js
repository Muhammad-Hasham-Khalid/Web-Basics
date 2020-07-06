const add = require("../program");

describe("Task # 1", () => {
  it("should add 10 and 15", () => {
    expect(add(10, 15)).toEqual(25);
  });
});
