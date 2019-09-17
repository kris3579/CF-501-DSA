'use strict';

const findSquareRoot = require('../findSquareRoot');

describe('Testing functionality of findSqaureRoot function', () => {
  test('Expect to recieve the proper square root of the given integer', () => {
    expect(findSquareRoot(16)).toEqual(4);
    expect(findSquareRoot(25)).toEqual(5);
    expect(findSquareRoot(26)).toEqual(5);
  });
  
  test('Expect a return of "invalid input" due to int not being a number', () => {
    expect(findSquareRoot({})).toEqual('invalid input');
    expect(findSquareRoot('16')).toEqual('invalid input');
  });
});
