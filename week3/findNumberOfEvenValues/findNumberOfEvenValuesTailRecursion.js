'use strict';

const traverseAndCountEvenValues = (arr, index) => {
  if (arr.length === 0) {
    return 0;
  }

  if (index === arr.length - 1) {
    if (arr[index] % 2 === 0) {
      return 1;
    }
    
    return 0;
  }
  
  if (arr[index] % 2 === 0) {
    return traverseAndCountEvenValues(arr, index + 1) + 1;
  } 

  return traverseAndCountEvenValues(arr, index + 1);
};

// Time: O(n) Where n is the number of of nodes in the tree (function calls)
// Space: O(n) Where n is the number of of nodes in the tree (function calls)

const findNumberOfEvenValuesTailRecursion = (arr) => {
  return traverseAndCountEvenValues(arr, 0);
};

module.exports = findNumberOfEvenValuesTailRecursion;
