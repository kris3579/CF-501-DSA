'use strict';

const findUnsortedBiggestProducts = require('../findUnsortedBiggestProduct');

describe('Testing functionality of findUnsortedBiggestProduct function', () => {
  test('Expecting to proper return of the biggest product', () => {
    const testArray1 = [1, 2, 3, 4, 5];
    const testArray2 = [5, 2, 3, 7, 1, 2, 6, 3, 2, 10];
    const testArray3 = [1, 5];
    const testArray4 = [4, 4, 4, 4, 4];

    expect(findUnsortedBiggestProducts(testArray1)).toEqual(20);
    expect(findUnsortedBiggestProducts(testArray2)).toEqual(70);
    expect(findUnsortedBiggestProducts(testArray3)).toEqual(5);
    expect(findUnsortedBiggestProducts(testArray4)).toEqual(16);
  });

  test('Expect to get a return of "input array to small" for an array a <2 length', () => {
    const testArray1 = [];
    const testArray2 = [5];

    expect(findUnsortedBiggestProducts(testArray1)).toEqual('input array to small');
    expect(findUnsortedBiggestProducts(testArray2)).toEqual('input array to small');
  });
});
