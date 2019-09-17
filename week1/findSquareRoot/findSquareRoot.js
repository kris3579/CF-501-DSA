'use strict';

// Time: O(n) Where n is the number of times necessary to increment counter to reach the square root
// Space: O(1) Only variables are created

const findSquareRoot = (int) => {
  if (typeof int !== 'number') {
    return 'invalid input';
  }

  let squareRoot;
  let found = false;
  let counter = 1;

  while (found === false) {
    const dividedInput = Math.floor(int / counter);
    if (dividedInput * dividedInput === int) {
      squareRoot = dividedInput;
      found = true;
    }
    if (dividedInput * dividedInput < int && (dividedInput + 1) * (dividedInput + 1) > int) {
      squareRoot = dividedInput;
      found = true;
    }
    if (counter === 100) {
      break;
    }
    counter += 1;
  }

  return squareRoot;
};

module.exports = findSquareRoot;
