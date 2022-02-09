#!/usr/bin/node
/**
 * Display status code of @url
 */
const req = require('request');
const url = process.argv[2];
req(url, function (err, res) {
  if (err) return err;
  console.log('code: ' + res && res.statusCode);
});
