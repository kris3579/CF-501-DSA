'use strict';

// Time: O(1) The length of the input array should be constant
// Space: O(1) Only variables are created

const findMissingInteger = (arr) => {
  if (arr.length !== 99) {
    return 'improperly sized array';
  }

  let counter = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== counter) {
      return counter;
    }
    counter += 1;
  }

  return null;
};

module.exports = findMissingInteger;
