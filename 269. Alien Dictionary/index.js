/**
 * @author maneeshavenigalla
 * There is a new alien language that uses the English alphabet. However, the order of the letters is unknown to you.
 * You are given a list of strings words from the alien language's dictionary. Now it is claimed that the strings in words are
 * sorted lexicographically by the rules of this new language. If this claim is incorrect, and the given arrangement of string
 * in words cannot correspond to any order of letters, return "". Otherwise, return a string of the unique letters in the
 * new alien language sorted in lexicographically increasing order by the new language's rules. If there are multiple solutions, return any of them.
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function (words) {
  const graph = new Map();
  const inDegree = new Map();

  // Initialize inDegree map with 0 for each character
  for (let word of words) {
    for (let char of word) {
      inDegree.set(char, 0);
      graph.set(char, new Set());
    }
  }

  // Build the graph and update inDegree map
  for (let i = 0; i < words.length - 1; i++) {
    const currentWord = words[i];
    const nextWord = words[i + 1];
    const minLength = Math.min(currentWord.length, nextWord.length);

    for (let j = 0; j < minLength; j++) {
      const currentChar = currentWord[j];
      const nextChar = nextWord[j];

      if (currentChar !== nextChar) {
        if (!graph.get(currentChar).has(nextChar)) {
          graph.get(currentChar).add(nextChar);
          inDegree.set(nextChar, inDegree.get(nextChar) + 1);
        }
        break;
      }

      // Handle case where the current word is a prefix of the next word
      if (j === minLength - 1 && currentWord.length > nextWord.length) {
        return "";
      }
    }
  }

  // Perform topological sort
  const queue = [];
  for (let [char, degree] of inDegree) {
    if (degree === 0) {
      queue.push(char);
    }
  }

  let result = "";
  while (queue.length > 0) {
    const current = queue.shift();
    result += current;

    for (let neighbor of graph.get(current)) {
      inDegree.set(neighbor, inDegree.get(neighbor) - 1);
      if (inDegree.get(neighbor) === 0) {
        queue.push(neighbor);
      }
    }
  }

  // If there is a cycle, return empty string
  if (result.length !== inDegree.size) {
    return "";
  }

  return result;
};

module.exports = alienOrder;
