/**
 * @author maneeshavenigalla
 * Given an m x n grid of characters board and a string word, return true if word exists in the
 * grid. The word can be constructed from letters of sequentially adjacent cells, where adjacent cells
 * are horizontally or vertically neighboring. The same letter cell may not be used more than once.
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const search = (i, j, k) => {
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
      return;
    }

    if (k === word.length - 1) {
      return true;
    }

    if (board[i][j] != word[k]) {
      return false;
    }

    const char = board[i][j];
    board[i][j] = "*";

    const found =
      search(i + 1, j, k + 1) ||
      search(i - 1, j, k + 1) ||
      search(i, j + 1, k + 1) ||
      search(i, j - 1, k + 1);

    board[i][j] = char;
    return found;
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (search(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
};

module.exports = exist;
