'use strict';

const traverseAndCountEvenValues = (arr, index, evensNumber) => {
  if (arr.length === 0) {
    return 0;
  }

  let currentEvensNumber = evensNumber;

  if (index === arr.length - 1) {
    if (arr[index] % 2 === 0) {
      return currentEvensNumber + 1;
    }

    return currentEvensNumber;
  }

  if (arr[index] % 2 === 0) {
    currentEvensNumber += 1;
  }

  currentEvensNumber = traverseAndCountEvenValues(arr, index + 1, currentEvensNumber);

  return currentEvensNumber;
};

// Time: O(n) Where n is the number of of nodes in the tree (function calls)
// Space: O(n) Where n is the number of of nodes in the tree (function calls)

const findNumberOfEvenValuesHeadRecursion = (arr) => {
  return traverseAndCountEvenValues(arr, 0, 0);
};

module.exports = findNumberOfEvenValuesHeadRecursion;
