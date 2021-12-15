#!/usr/bin/node
module.exports = class Rectangle {
  constructor (w, h) {
    if (w <= 0 || h <= 0) {
      return this;
    }
    this.width = w;
    this.height = h;
  }

  print () {
    // let output = ''
    // for (let i = 1; i <= this.height; i++) {
    //     for (let j = 1; j <= this.width; j++) {
    //         output += 'X';
    //         if (j === this.width) output += '\n';
    //     }
    // }
    // console.log(output)
    for (let i = 0; i < this.height; i++) console.log('X'.repeat(this.width));
  }
};
