/**
 * @author maneeshavenigalla
 * There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]).
 * The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either
 * down or right at any point in time. Given the two integers m and n, return the number of possible unique paths
 * that the robot can take to reach the bottom-right corner.
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let path = Array.from({ length: m }, () => new Array().fill(0));

  for (let i = 0; i < n; i++) {
    path[0][i] = 1;
  }

  for (let i = 0; i < m; i++) {
    path[i][0] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      path[i][j] = path[i - 1][j] + path[i][j - 1];
    }
  }

  return path[m - 1][n - 1];
};

module.exports = uniquePaths;
