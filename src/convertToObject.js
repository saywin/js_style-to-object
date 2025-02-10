'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let convertString = sourceString.split(';');

  convertString = convertString.map((item) => item.split(':'));

  const objectConvert = {};

  for (const [title, value] of convertString) {
    if (title.trim() !== '') {
      Object.assign(objectConvert, { [title.trim()]: value.trim() });
    }
  }

  return objectConvert;
}

module.exports = convertToObject;
