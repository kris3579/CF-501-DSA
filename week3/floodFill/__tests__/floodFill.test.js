'use strict';

const floodFill = require('../floodFill');

describe('Testing functionality of the floodFill function', () => {
  test('Expecting return of a properly flood filled image', () => {
    const testImage1 = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];
    const testImage2 = [[0, 0, 0], [0, 0, 0]];

    expect(floodFill(testImage1, 1, 1, 2)).toEqual([[2, 2, 2], [2, 2, 0], [2, 0, 1]]);
    expect(floodFill(testImage2, 0, 0, 2)).toEqual([[2, 2, 2], [2, 2, 2]]);
  });

  test('Expecting return of the original image if the given index matrix has a value of newColor', () => {
    const testImage = [[1, 1, 1], [1, 2, 1], [1, 1, 1]];

    expect(floodFill(testImage, 1, 1, 2)).toEqual([[1, 1, 1], [1, 2, 1], [1, 1, 1]]);
  });
});
