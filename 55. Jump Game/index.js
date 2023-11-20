/**
 * @author maneeshavenigalla
 * You are given an integer array nums. You are initially positioned at the array's first index, and
 * each element in the array represents your maximum jump length at that position.
 * Return true if you can reach the last index, or false otherwise.
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let reach = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > reach) {
      return false;
    }

    reach = Math.max(i + nums[i], reach);

    if (reach > nums.length - 1) {
      return true;
    }
  }

  return false;
};

module.exports = canJump;
