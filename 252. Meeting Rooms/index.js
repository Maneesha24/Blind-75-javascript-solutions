/**
 * @author maneeshavenigalla
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of
 * the non-overlapping intervals that cover all the intervals in the input
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i++) {
    let [prevStart, prevEnd] = intervals[i - 1];
    let [currStart, currEnd] = intervals[i];

    if (prevEnd > currStart) {
      return false;
    }
  }

  return true;
};

module.exports = canAttendMeetings;
