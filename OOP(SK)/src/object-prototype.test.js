describe("Object.prototype", () => {
  it("should have a property called toString", () => {
    expect(Object.prototype.toString).not.toBeUndefined();
  });

  it("should have a property called toString directly on it.", () => {
    expect(Object.prototype.hasOwnProperty("toString")).toBeTruthy();
  });

  it("should have a property called toString directly on it.", () => {
    expect(Object.prototype.hasOwnProperty("hasOwnProperty")).toBeTruthy();
  });
});
