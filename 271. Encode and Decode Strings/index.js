/**
 * @author maneeshavenigalla
 * Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.
 * Encodes a list of strings to a single string.
 * @param {string[]} strs
 * @return {string}
 */
var encode = function (strs) {
  return strs.join(String.fromCharCode(257));
};

/**
 * @author maneeshavenigalla
 * Decodes a single string to a list of strings.
 * @param {string} s
 * @return {string[]}
 */
var decode = function (s) {
  return s.split(String.fromCharCode(257));
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

module.exports = { encode, decode };
