const containsDuplicate = require("./index");

test("should pass all test conditions", () => {
  expect(containsDuplicate([1,2,3,1])).toBe(true);
  expect(containsDuplicate([1,2,3,4])).toBe(false);
  expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toBe(true);
});