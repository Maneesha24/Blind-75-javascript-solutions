/**
 * @author maneeshavenigalla
 * Write a function that takes the binary representation of an unsigned integer and
 * returns the number of '1' bits it has (also known as the Hamming weight).
 * Time complexity - O(log N) | Space complexity - O(1)
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0;

  while (n > 0) {
    n = n & (n - 1);
    count++;
  }

  return count;
};

module.exports = hammingWeight;
