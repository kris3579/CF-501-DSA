'use strict';

const findAllPermutations = require('../findAllPermutationsOfString');

describe('Testing functionality of the findAllPermutations function', () => {
  test('Expecting proper return of all permutations given a string', () => {
    const testString1 = 'cat';
    const testString2 = 'test';

    const testString1Permutations = ['cat', 'cta', 'tac', 'tca', 'act', 'atc'];
    const testString2Permutations = ['test', 'tets', 'tset', 'tste', 'ttse', 'ttes', 'etts', 'etst', 'estt', 'sett', 'stet', 'stte'];

    expect(findAllPermutations(testString1))
      .toEqual(expect.arrayContaining(testString1Permutations));
    expect(findAllPermutations(testString2))
      .toEqual(expect.arrayContaining(testString2Permutations));
  });

  test('Expecting return of an empty array given an empty string', () => {
    const testString1 = '';

    expect(findAllPermutations(testString1)).toEqual([]);
  });

  test('Expecting a return of a single letter given a single letter string', () => {
    const testString1 = 'a';
    const testString2 = 'b';

    expect(findAllPermutations(testString1)).toEqual(['a']);
    expect(findAllPermutations(testString2)).toEqual(['b']);
  });
});
