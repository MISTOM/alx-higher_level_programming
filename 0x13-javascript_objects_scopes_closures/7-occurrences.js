#!/usr/bin/node
/**
 * Returns number of occourences of @searchElement in a @list
 * @param {array} list
 * @param {string|number} searchElement
 * @return {number} number of occourences
 */
exports.nbOccurences = function (list, searchElement) {
  return list.reduce((a, v) => (v === searchElement ? a + 1 : a), 0);
};
