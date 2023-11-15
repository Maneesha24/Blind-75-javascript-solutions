const containsDuplicate = require("./index.js");

test("should pass all test conditions", () => {
  expect(containsDuplicate("()")).toEqual(true);
  expect(containsDuplicate("()[]{}")).toEqual(true);
  expect(containsDuplicate("(]")).toEqual(false);
});