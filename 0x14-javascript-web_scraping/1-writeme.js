#!/usr/bin/node
/**
 * write to file
 */
const fs = require('fs');
const file = process.argv[2];
const content = process.argv[3];
fs.writeFile(file, content, 'utf8', function (err) { if (err) return console.log(err); });
