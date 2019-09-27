'use strict';

const traverse = (root, leavesArray) => {
  if (root.left) {
    traverse(root.left, leavesArray);
  }
  if (root.right) {
    traverse(root.right, leavesArray);
  }

  if (!root.left && !root.right) {
    leavesArray.push(root.value);
  }

  return leavesArray;
};

// Time: O(n) Where n is the number of nodes in the tree (function calls)
// Space: O(2n) -> O(n) Where n is the number of nodes in the tree 
// (function calls, elements in created array)

const findLeaves = (root) => {
  if (!root || !root.value) {
    return [];
  }

  if (!root.left && !root.right) {
    return [root.value];
  }

  return traverse(root, []);
};

module.exports = findLeaves;
