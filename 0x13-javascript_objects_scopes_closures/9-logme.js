#!/usr/bin/node
/**
 * prints the number of arguments already printed
 * and the new argument value
 * @param {*} item item to print
 */
exports.logMe = (function (item) {
  let count = 0;
  return (item) => {
    console.log(`${count}: ${item}`);
    count++;
  };
}());
