'use strict';

const buildPermutations = (counstructedString, restOfString, permutations) => {
  if (restOfString.length === 1) {
    let permutation = counstructedString;
    permutation += restOfString;

    if (!permutations.includes(permutation)) {
      permutations.push(permutation);
    }

    return;
  }

  for (let i = 0; i < restOfString.length; i++) {
    let newConstructedString = counstructedString;
    newConstructedString += restOfString.charAt(i);

    let newRestOfString = restOfString;

    const firstHalfOfRest = newRestOfString.slice(0, i);
    const secondHalfOfRest = newRestOfString.slice(i + 1);

    newRestOfString = firstHalfOfRest + secondHalfOfRest;

    buildPermutations(newConstructedString, newRestOfString, permutations);
  }
};

// Time:O(n * n * 2n) -> O(n^3) Where n is the number of characters in the given string (looping
// through n remaining string characters AND includes method checking n permutations found so far, 
// inside n function calls, inside loop thorugh n string characters)

// Space: O(2n) -> O(n) Where n is the number of characters in the given string
// (n permutations stored in the return array, n first characters added to usedLetters set)

const findAllPermutations = (str) => {
  if (str.length === 0) {
    return [];
  }
  if (str.length === 1) {
    return [str];
  }

  const permutations = [];
  const usedLetters = new Set();

  for (let i = 0; i < str.length; i++) {
    if (!usedLetters.has(str.charAt(i))) {
      usedLetters.add(str.charAt(i));

      const counstructedString = str.charAt(i);

      const firstHalfOfRest = str.slice(0, i);
      const secondHalfOfRest = str.slice(i + 1);

      const restOfString = firstHalfOfRest + secondHalfOfRest;

      buildPermutations(counstructedString, restOfString, permutations);
    }
  }

  return permutations;
};

module.exports = findAllPermutations;
