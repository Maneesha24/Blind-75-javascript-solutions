/**
 * @author maneeshavenigalla
 * Given a string s, return the longest palindromic substring in s.
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const getPalindrome = (left, right) => {
    while (left >= 0 && right < s.length && s[left] == s[right]) {
      left--;
      right++;
    }

    return s.substring(left + 1, right);
  };

  for (let i = 1; i < s.length; i++) {
    let longest = "";

    let oddPalindrome = getPalindrome(i, i);
    let evenPalindrome = getPalindrome(i, i + 1);

    if (longest.length < oddPalindrome.length) {
      longest = oddPalindrome;
    }

    if (longest.length < evenPalindrome.length) {
      longest = evenPalindrome;
    }

    return longest;
  }
};

module.exports = longestPalindrome;
