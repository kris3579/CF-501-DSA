'use strict';

const floodFill = (image, startRow, startCol, newColor) => {
  if (image[startRow][startCol] === newColor) {
    return image;
  }

  const oldColor = image[startRow][startCol];
  image[startRow][startCol] = newColor;


  if (image[startRow + 1]) {
    if (image[startRow + 1][startCol] === oldColor) {
      floodFill(image, startRow + 1, startCol, newColor);
    }
  }

  if (image[startRow - 1]) {
    if (image[startRow - 1][startCol] === oldColor) {
      floodFill(image, startRow - 1, startCol, newColor);
    }
  }
  
  if (image[startRow][startCol + 1] === oldColor) {
    floodFill(image, startRow, startCol + 1, newColor);
  }

  if (image[startRow][startCol - 1] === oldColor) {
    floodFill(image, startRow, startCol - 1, newColor);
  }
      
  return image;
};

module.exports = floodFill;
