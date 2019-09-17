'use strict';

// Time: O(n) Where n is the number of elements in the array we must iterate over
// Space: O(1) Only variable are created

const findThirdBiggest = (arr) => {
  if (arr.length < 3) {
    return 'array to short';
  }

  let biggest = arr[0];
  let secBiggest = arr[1];

  if (secBiggest > biggest) {
    const tempBiggest = biggest;
    biggest = secBiggest;
    secBiggest = tempBiggest;
  }

  let thirdBiggest = arr[2];

  if (thirdBiggest > biggest) {
    const tempBiggest = thirdBiggest;
    thirdBiggest = secBiggest;
    secBiggest = biggest;
    biggest = tempBiggest;
  }
  if (thirdBiggest > secBiggest) {
    const tempBiggest = thirdBiggest;
    thirdBiggest = secBiggest;
    secBiggest = tempBiggest;
  }

  if (arr.length === 3) {
    if (biggest === secBiggest || biggest === thirdBiggest || secBiggest === thirdBiggest) {
      return 'less than 3 unique values present';
    }
    return thirdBiggest;
  }
  
  for (let i = 3; i < arr.length; i++) {
    if (arr[i] > biggest) {
      thirdBiggest = secBiggest;
      secBiggest = biggest;
      biggest = arr[i];
    } else if (arr[i] > secBiggest) {
      thirdBiggest = secBiggest;
      secBiggest = arr[i];
    } else if (arr[i] > thirdBiggest) {
      thirdBiggest = arr[i];
    }
  }
  
  if (biggest === secBiggest || biggest === thirdBiggest || secBiggest === thirdBiggest) {
    return 'less than 3 unique values present';
  }

  return thirdBiggest;
};

module.exports = findThirdBiggest;
