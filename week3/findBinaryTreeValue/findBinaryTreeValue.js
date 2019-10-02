'use strict';

// Time: O(n) Where n is the number of of nodes in the tree (function calls)
// Space: O(n) Where n is the number of of nodes in the tree (function calls)

const findBinaryTreeValue = (root, value) => {  
  if (root.value === value) {
    return true;
  }

  if (root.left) {
    if (findBinaryTreeValue(root.left, value) === true) {
      return true;
    }
  }

  if (root.right) {
    if (findBinaryTreeValue(root.right, value) === true) {
      return true;
    }
  }

  return false;
};

module.exports = findBinaryTreeValue;
