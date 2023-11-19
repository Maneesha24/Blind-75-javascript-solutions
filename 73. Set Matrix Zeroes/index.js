/**
 * @author maneeshavenigalla
 * Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
 * You must do it in place.
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let firstRowHasZero = false;
  let firstColHasZero = false;

  let m = matrix.length;
  let n = matrix[0].length;

  for (let i = 0; i < n; i++) {
    if (matrix[0][i] == 0) {
      firstRowHasZero = true;
      break;
    }
  }

  for (let i = 0; i < m; i++) {
    if (matrix[i][0] == 0) {
      firstColHasZero = true;
      break;
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] == 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < m; i++) {
    if (matrix[i][0] == 0) {
      for (let j = 1; j < n; j++) {
        matrix[i][j] = 0;
      }
    }
  }

  for (let j = 1; j < n; j++) {
    if (matrix[0][j] == 0) {
      for (let i = 1; i < m; i++) {
        matrix[i][j] = 0;
      }
    }
  }

  if (firstRowHasZero) {
    for (let i = 0; i < n; i++) {
      matrix[0][i] = 0;
    }
  }

  if (firstColHasZero) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }

  return matrix;
};

module.exports = setZeroes;
