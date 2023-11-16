/**
 * @author maneeshavenigalla
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 * A valid BST is defined as follows:
 * The left  subtree of a node contains only nodes with keys less than the node's key.
 * The right subtree of a node contains only nodes with keys greater than the node's key.
 * Both the left and right subtrees must also be binary search trees.
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = (root) => {
  return validate(root, null, null);
};

const validate = (node, min, max) => {
  if (!node) {
    return true;
  }

  if ((min != null && min > node.val) || (max != null && max < node.val)) {
    return false;
  }

  return (
    validate(node.left, min, node.val) && validate(node.right, node.val, max)
  );
};

module.exports = isValidBST;
