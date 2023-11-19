const minMeetingRooms = require("./index.js");

test("should pass all the test conditions", () => {
  expect(
    minMeetingRooms([
      [0, 30],
      [5, 10],
      [15, 20],
    ])
  ).toEqual(false);
  expect(
    minMeetingRooms([
      [7, 10],
      [2, 4],
    ])
  ).toEqual(true);
});
