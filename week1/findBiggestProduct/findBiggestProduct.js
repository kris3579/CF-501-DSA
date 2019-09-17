'use strict';

// Time: O(n^2) Where n is the number of elements in the input array
// Space: O(1) Only variable are created

const findBiggestProduct = (arr) => {
  if (arr.length < 2) {
    return 'input array to small';
  }
  if (arr.length === 2) {
    return arr[0] * arr[1];
  }

  let biggestProduct = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const currentProduct = arr[i] * arr[j];
      if (currentProduct > biggestProduct) {
        biggestProduct = currentProduct;
      }
    }
  }

  return biggestProduct;
};

module.exports = findBiggestProduct;
