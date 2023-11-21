/**
 * @author maneeshavenigalla
 * You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi]
 * indicates that there is an edge between ai and bi in the graph. Return the number of connected components in the graph.
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function (n, edges) {
  let result = 0;

  let graphObj = {};

  for (let i = 0; i < n; i++) {
    graphObj[i] = [];
  }

  for (const [node1, node2] of edges) {
    graphObj[node1].push(node2);
    graphObj[node2].push(node1);
  }

  let visited = new Set();

  const dfs = (node) => {
    if (visited.has(node)) {
      return false;
    }

    visited.add(node);

    for (const c of graphObj[node]) {
      dfs(c);
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      dfs(i);
      result++;
    }
  }

  return result;
};

module.exports = countComponents;
