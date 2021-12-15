#!/usr/bin/node
const Rectangle = require('./4-rectangle');

/**
 * Class defination of Class Square
 */
module.exports = class Square extends Rectangle {
  constructor (size) {
    super(size, size);
  }
};
