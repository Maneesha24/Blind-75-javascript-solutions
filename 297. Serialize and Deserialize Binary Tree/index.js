const TreeNode = require("../TreeNode");

/**
 * @author maneeshavenigalla
 * Encodes a tree to a single string.
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let str = "";

  const traverse = (node) => {
    if (!node) {
      str += "* ";
    } else {
      str += `${node.val} `;
      traverse(node.left);
      traverse(node.right);
    }
  };

  traverse(root);
  return str;
};

/**
 * Decodes your encoded data to tree.
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  let nodes = data.split(" ");

  const buildTree = () => {
    let node = nodes.shift();

    if (node == "*") {
      return null;
    }

    let root = new TreeNode(node);
    root.left = buildTree();
    root.right = buildTree();

    return root;
  };

  return buildTree();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

module.exports = { serialize, deserialize };
