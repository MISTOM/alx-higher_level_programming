#!/usr/bin/node
/**
 * converts a number from base 10 to another
 * base passed as argument
 * @param {number} base base to convert
 * @returns function to convert num to base @base
 */
exports.converter = function (base) { return num => num.toString(base); };
