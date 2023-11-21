const GraphNode = require("../GraphNode");

/**
 * @author maneeshavenigalla
 * Given a reference of a node in a connected undirected graph. Return a deep copy (clone) of the graph.
 * Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (!node) {
    return node;
  }

  const graphObj = {};

  const dfs = (originalNode) => {
    if (originalNode in graphObj) {
      return graphObj[originalNode];
    }

    const newNode = new GraphNode(originalNode.val);
    graphObj[originalNode] = newNode;

    for (const nei of originalNode.neighbors) {
      if (nei in graphObj) {
        nei.neighbors.push(graphObj[nei]);
      } else {
        nei.neighbors.push(dfs(nei));
      }
    }

    return newNode;
  };

  return dfs(node);
};

module.exports = cloneGraph;
