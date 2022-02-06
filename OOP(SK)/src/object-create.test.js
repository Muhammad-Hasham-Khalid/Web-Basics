describe("Object.create", () => {
  it("should create an object with a set prototype", () => {
    const parent = {};
    const child = Object.create(parent);

    expect(Object.getPrototypeOf(child)).toBe(parent);
  });

  it("should be able to create an object without a prototype", () => {
    const orphan = Object.create(null);

    expect(Object.getPrototypeOf(orphan)).toBe(null);
  });

  it("should not have a property toString", () => {
    const orphan = Object.create(null);

    expect(orphan.toString).toBeUndefined();
  });

  it("should check its prototype for properties", () => {
    const parent = { lastName: "Doe" };
    const child = Object.create(parent);

    expect(child.lastName).toBe(parent.lastName);
    expect(child.hasOwnProperty("lastName")).toBeFalsy();
  });

  it("should check its prototype for properties", () => {
    const grandparent = { lastName: "Doe" };
    const parent = Object.create(grandparent);
    const child = Object.create(parent);

    expect(child.lastName).toBe(grandparent.lastName);
    expect(child.hasOwnProperty("lastName")).toBeFalsy();
  });
});
