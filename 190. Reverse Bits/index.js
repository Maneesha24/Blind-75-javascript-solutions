/**
 * @author maneeshavenigalla
 * Reverse bits of a given 32 bits unsigned integer.
 * Time complexity - O(N) | Space complexity - O(1)
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let result = 0;

  for (let i = 0; i < 32; i++) {
    result = (result << 1) | (n & 1);
    n = n >> 1;
  }

  return result >>> 0;
};

module.exports = reverseBits;
