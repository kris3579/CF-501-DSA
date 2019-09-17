'use strict';

const findSingleElement = (arr) => {
  if (arr.length < 3) {
    return 'input array to small';
  }  

  const elementStorage = {};

  for (let i = 0; i < arr.length; i++) {
    if (Object.hasOwnProperty.call(elementStorage, arr[i]) === true) {
      elementStorage[arr[i]] += 1;
    }
    if (Object.hasOwnProperty.call(elementStorage, arr[i]) === false) {
      elementStorage[arr[i]] = 1;
    }
  }

  const elementKeys = Object.keys(elementStorage);

  for (let j = 0; j < elementKeys.length; j++) {
    if (elementStorage[elementKeys[j]] === 1) {
      return Number(elementKeys[j]);
    }
  }

  return 'no single element found';
};

module.exports = findSingleElement;
