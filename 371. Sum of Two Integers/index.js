/**
 * @author maneeshavenigalla
 * Given two integers a and b, return the sum of the two integers without using the operators + and -.
 * Time complexity - O(N) | Space complexity - O(1)
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  while (b) {
    let carry = a & b;
    a = a ^ b;
    b = carry << 1;
  }

  return a;
};

module.exports = getSum;
