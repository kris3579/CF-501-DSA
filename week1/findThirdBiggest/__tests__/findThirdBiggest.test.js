'use strict';

const findThirdBiggest = require('../findThirdBiggest');

describe('Testing functionality of findThirdBiggest function', () => {
  test('Expecting proper return of 2', () => {
    const testArray = [1, 2, 3, 4];

    expect(findThirdBiggest(testArray)).toEqual(2);
  });

  test('Expecting return of "array to short" for arrays with a length less than 3', () => {
    const testArray1 = [];
    const testArray2 = [1, 2];

    expect(findThirdBiggest(testArray1)).toEqual('array to short');
    expect(findThirdBiggest(testArray2)).toEqual('array to short');
  });

  test('Expecting return of "less than 3 unique values present" because of less than 3 unique integers', () => {
    const testArray1 = [1, 3, 3];
    const testArray2 = [5, 5, 5, 5, 5, 5];
    const testArray3 = [4, 4, 4, 5, 5, 5];

    expect(findThirdBiggest(testArray1)).toEqual('less than 3 unique values present');
    expect(findThirdBiggest(testArray2)).toEqual('less than 3 unique values present');
    expect(findThirdBiggest(testArray3)).toEqual('less than 3 unique values present');
  });
});
