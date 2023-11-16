const TrieNode = require("../TrieNode");

/**
 * @author maneeshavenigalla
 * Design a data structure that supports adding new words and finding if a string matches any previously added string.
 * Implement the WordDictionary class: WordDictionary() Initializes the object.
 */
var WordDictionary = function () {
  this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let current = this.root;

  for (const char of word) {
    if (!(char in current.children)) {
      current.children[char] = new TrieNode(char);
    }

    current = current.children[char];
  }

  current.endOfWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  const search = (currentNode, index) => {
    if (index == word.length) {
      return currentNode.endOfWord;
    }

    const char = word[index];

    if (char === ".") {
      for (const key of Object.keys(currentNode.children)) {
        const child = currentNode.children[key];
        if (search(child, index + 1)) {
          return true;
        }

        return false;
      }
    } else {
      if (!(char in currentNode.children)) {
        return false;
      }
      return search(currentNode.children[char], index + 1);
    }
  };

  return search(this.root, 0);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

module.exports = WordDictionary;
