/**
 * @author maneeshavenigalla
 * Given an array nums containing n distinct numbers in the range [0, n], return the only
 * number in the range that is missing from the array.
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
  let n = nums.length;

  let expectedSum = (n * (n + 1)) / 2;

  let actualSum = 0;
  nums.map((num) => (actualSum += num));

  return expectedSum - actualSum;
};

module.exports = missingNumber;
