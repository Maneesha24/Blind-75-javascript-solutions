/**
 * @author maneeshavenigalla
 * Given an m x n board of characters and a list of strings words, return all words on the board.
 * Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically
 * neighboring. The same letter cell may not be used more than once in a word.
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = (board, words) => {
  let result = [];
  const root = buildTree(words);

  const search = (node, i, j) => {
    if (node.word != null) {
      result.push(node.word);
      node.word = null;
    }

    if (
      i < 0 ||
      i >= board.length ||
      j < 0 ||
      j >= board[0].length ||
      node[board[i][j]] == null
    ) {
      return;
    }

    const char = board[i][j];
    board[i][j] = "#";

    search(node[char], i + 1, j);
    search(node[char], i - 1, j);
    search(node[char], i, j + 1);
    search(node[char], i, j - 1);

    board[i][j] = char;
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      search(root, i, j);
    }
  }

  return result;
};

const buildTree = (words) => {
  const root = {};
  for (const w of words) {
    let node = root;
    for (const c of w) {
      if (node[c] == null) {
        node[c] = {};
      }
      node = node[c];
    }
    node.word = w;
  }
  return root;
};

module.exports = findWords;
