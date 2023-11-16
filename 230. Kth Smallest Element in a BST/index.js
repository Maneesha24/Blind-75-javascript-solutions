/**
 * @author maneeshavenigalla
 * Given the root of a binary search tree, and an integer k, return the kth smallest
 * value (1-indexed) of all the values of the nodes in the tree.
 * Time complexity - O(N) | Space complexity - O(H) [height of tree]
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let current = root;
  let stack = [];

  let count = 0;

  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }

    current = stack.pop();
    count++;

    if (count == k) {
      return current.val;
    }

    current = current.right;
  }
};

module.exports = kthSmallest;
