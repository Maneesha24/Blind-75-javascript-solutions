/**
 * @author maneeshavenigalla
 * Given an array of meeting time intervals intervals where intervals[i] = [starti, endi],
 * return the minimum number of conference rooms required.
 * @param {number[][]} intervals
 * @return {number}
 */
const minMeetingRooms = (intervals) => {
  let rooms = 0;
  let j = 0;

  intervals.sort((a, b) => a[0] - b[0]);
  let end = [...intervals].sort((a, b) => a[1] - b[1]);

  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] < end[j][1]) {
      rooms++;
    } else {
      j++;
    }
  }

  return rooms;
};

module.exports = minMeetingRooms;
