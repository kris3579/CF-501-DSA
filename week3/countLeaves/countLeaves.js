'use strict';

const traverse = (root) => {
  let leftLeaves = 0;
  let rightLeaves = 0;

  if (root.left) {
    leftLeaves = traverse(root.left);
  }
  if (root.right) {
    rightLeaves = traverse(root.right);
  }

  if (!root.left && !root.right) {
    return 1;
  }

  return leftLeaves + rightLeaves;
};

// Time: O(n) Where n is the number of nodes in the tree (function calls)
// Space: O(n) Where n is the number of nodes in the tree (function calls)

const countLeaves = (root) => {
  if (!root || !root.value) {
    return 0;
  }

  if (!root.left && !root.right) {
    return 1;
  }

  return traverse(root);
};

module.exports = countLeaves;
