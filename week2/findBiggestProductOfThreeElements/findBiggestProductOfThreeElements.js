'use strict';

// Time: O(n^3) Where n is the number of elements in the array
// Space: O(1)

const findBiggestProductOfThreeElements = (arr) => {
  if (arr.length < 3) {
    return 'input array to small';
  }

  if (arr.length === 3) {
    return arr[0] * arr[1] * arr[2];
  }

  let biggestProduct = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let n = j + 1; n < arr.length; n++) {
        const currentProduct = arr[i] * arr[j] * arr[n];

        if (currentProduct > biggestProduct) {
          biggestProduct = currentProduct;
        }
      }
    }
  }

  return biggestProduct;
};

module.exports = findBiggestProductOfThreeElements;
