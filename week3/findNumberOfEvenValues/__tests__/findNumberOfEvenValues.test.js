'use strict';

const findNumberOfEvenValuesHeadRecursion = require('../findNumberOfEvenValuesHeadRecursion');
const findNumberOfEvenValuesTailRecursion = require('../findNumberOfEvenValuesTailRecursion');

describe('Testing functionality of the findNumberOfEvenValuesHead/TailRecursion functions', () => {
  test('Expecting proper return of 3', () => {
    const testArray = [1, 2, 3, 4, 5, 6];

    expect(findNumberOfEvenValuesHeadRecursion(testArray)).toEqual(3);
    expect(findNumberOfEvenValuesTailRecursion(testArray)).toEqual(3);
  });

  test('Expecting proper return of 0 from an empty array', () => {
    const testArray = [];

    expect(findNumberOfEvenValuesHeadRecursion(testArray)).toEqual(0);
    expect(findNumberOfEvenValuesTailRecursion(testArray)).toEqual(0);
  });
});
