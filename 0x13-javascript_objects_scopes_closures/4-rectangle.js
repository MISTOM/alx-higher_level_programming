#!/usr/bin/node
/**
 * Rectangle - Rectangle class defination.
 *
 */
module.exports = class Rectangle {
  constructor (w, h) {
    if (w <= 0 || h <= 0) {
      return this;
    }
    this.width = w;
    this.height = h;
  }

  /**
     * Prints the Rectancle representation on the console
     */
  print () {
    for (let i = 0; i < this.height; i++) console.log('X'.repeat(this.width));
  }

  /**
     * Rotates the Rectangle by exchanging the width and height
     */
  rotate () {
    const tmp = this.width;
    this.width = this.height;
    this.height = tmp;
  }

  /**
     * Doubles the size of the rectangle
     */
  double () {
    this.width = this.width * 2;
    this.height = this.height * 2;
  }
};
