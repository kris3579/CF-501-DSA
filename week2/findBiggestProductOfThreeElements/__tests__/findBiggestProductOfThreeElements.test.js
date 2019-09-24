'use strict';

const findBiggestProductOfThreeElements = require('../findBiggestProductOfThreeElements');

describe('Testing functionality of findUnsortedBiggestProduct function', () => {
  test('Expecting to proper return of the biggest product', () => {
    const testArray1 = [1, 2, 3, 4, 5];
    const testArray2 = [5, 2, 3, 7, 1, 2, 6, 3, 2, 10];
    const testArray3 = [1, 5, 2];
    const testArray4 = [4, 4, 4, 4, 4, 4];

    expect(findBiggestProductOfThreeElements(testArray1)).toEqual(60);
    expect(findBiggestProductOfThreeElements(testArray2)).toEqual(420);
    expect(findBiggestProductOfThreeElements(testArray3)).toEqual(10);
    expect(findBiggestProductOfThreeElements(testArray4)).toEqual(64);
  });

  test('Expect to get a return of "input array to small" for an array a <3 length', () => {
    const testArray1 = [];
    const testArray2 = [5];
    const testArray3 = [10, 7];

    expect(findBiggestProductOfThreeElements(testArray1)).toEqual('input array to small');
    expect(findBiggestProductOfThreeElements(testArray2)).toEqual('input array to small');
    expect(findBiggestProductOfThreeElements(testArray3)).toEqual('input array to small');
  });
});
