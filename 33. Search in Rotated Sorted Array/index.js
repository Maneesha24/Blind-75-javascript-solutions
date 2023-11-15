/**
 * @author maneeshavenigalla
 * There is an integer array nums sorted in ascending order (with distinct values).
 * Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
 * You must write an algorithm with O(log n) runtime complexity.
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[start] <= nums[mid]) {
      if (nums[start] <= target && nums[mid] > target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (nums[mid] > target && nums[end] <= target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return nums[start] == target ? start : -1;
};

module.exports = search;
