'use strict';

const findBiggestProduct = require('../findBiggestProduct');

describe('Testing functionality for findBiggestProduct function', () => {
  test('Testing for proper return of  as biggest product from input array', () => {
    const testArray1 = [1, 5, 3, 2, 4];
    const testArray2 = [5, 5];

    expect(findBiggestProduct(testArray1)).toEqual(20);
    expect(findBiggestProduct(testArray2)).toEqual(25);
  });
  
  test('Testing for return of "input array to small" if array.length is less than 2', () => {
    const testArray1 = [];
    const testArray2 = [5];

    expect(findBiggestProduct(testArray1)).toEqual('input array to small');
    expect(findBiggestProduct(testArray2)).toEqual('input array to small');
  });
});
