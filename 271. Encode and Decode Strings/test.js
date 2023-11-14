const { encode, decode } = require("./index.js");

test("should pass all test conditions", () => {
  const str = ["Hello World"];
  expect(encode(str)).toStrictEqual("Hello World");
  expect(decode("Hello World")).toStrictEqual(str);
});
