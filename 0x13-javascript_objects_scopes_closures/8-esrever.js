#!/usr/bin/node
/**
 * Reverses the list
 * @param {array} list
 * @return {array} reversed list
 */
exports.esrever = function (list) {
  const newarr = [];
  let i = 0;
  while (i < list.length) {
    newarr.unshift(list[i]);
    i++;
  }
  return newarr;
};
