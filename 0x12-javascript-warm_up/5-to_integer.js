#!/usr/bin/bash
const arg = process.argv[2];
if (parseInt(arg)) {
  console.log('My number: ' + arg);
} else {
  console.log('Not a number');
}
