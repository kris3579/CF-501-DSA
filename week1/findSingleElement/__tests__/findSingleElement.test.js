'use strict';

const findSingleElement = require('../findSingleElement');

describe('Testing functionality of findSingleElement function', () => {
  test('Expecting proper return of 3, the single element in the array of duplicates', () => {
    const testArray1 = [1, 1, 2, 2, 3, 4, 4];
    const testArray2 = [1, 4, 3, 2, 2, 1, 4];

    expect(findSingleElement(testArray1)).toEqual(3);
    expect(findSingleElement(testArray2)).toEqual(3);
  });
  
  test('Expecting return of "input array to small" for array.length less than 3', () => {
    const testArray1 = [];
    const testArray2 = [1, 1];

    expect(findSingleElement(testArray1)).toEqual('input array to small');
    expect(findSingleElement(testArray2)).toEqual('input array to small');
  });

  test('Expecting return of "no single element found" if there is no single element present', () => {
    const testArray = [1, 1, 2, 2, 3, 3, 4, 4];

    expect(findSingleElement(testArray)).toEqual('no single element found');
  });
});
