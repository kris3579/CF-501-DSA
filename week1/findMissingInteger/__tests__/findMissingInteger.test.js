'use strict';

const findMissingInteger = require('../findMissingInteger');

describe('Testing functionality of findMissingInteger function', () => {
  test('Expecting to return proper missing integer "7" from the array', () => {
    const testArray = require('../testArray');

    expect(findMissingInteger(testArray)).toEqual(7);
  });
  test('Expecting to return "improperly sized array" if length does not equal 99', () => {
    const testArray1 = [];
    const testArray2 = [2, 3, 5, 6, 7];
    const testArray3 = require('../testArray');
    testArray3.splice(6, 0, 7);

    expect(findMissingInteger(testArray1)).toEqual('improperly sized array');
    expect(findMissingInteger(testArray2)).toEqual('improperly sized array');
    expect(findMissingInteger(testArray3)).toEqual('improperly sized array');
  });
});
