/**
 * @author maneeshavenigalla
 * Given the root of a binary tree, invert the tree, and return its root.
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = (root) => {
  if (!root) {
    return null;
  }

  let queue = [root];

  while (queue.length) {
    let node = queue.shift();

    let temp = node.left;
    node.left = node.right;
    node.right = temp;

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }

  return root;
};

module.exports = invertTree;
