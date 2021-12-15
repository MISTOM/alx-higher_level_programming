#!/usr/bin/node
const Square = require('./5-square');

module.exports = class Square1 extends Square {
  /**
     * prints the rectangle using the character c
     * @param {string} c Character to print the shape
     */
  charPrint (c) {
    if (c) {
      for (let i = 0; i < this.height; i++) console.log(c.repeat(this.width));
    } else {
      this.print();
    }
  }
};
