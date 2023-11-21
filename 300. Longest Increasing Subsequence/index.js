/**
 * @author maneeshavenigalla
 * Given an integer array nums, return the length of the longest strictly increasing subsequence.
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let dp = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];

    if (dp[0] > num) {
      dp[0] = num;
    } else if (dp[dp.length - 1] < num) {
      dp.push(num);
    } else {
      let index = binarySearch(dp, num);
      dp[index] = num;
    }
  }

  return dp.length;
};

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};

module.exports = lengthOfLIS;
