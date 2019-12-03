// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
const assert = require('assert')

const binaryArrayToNumber = arr => {
  // convert array to int
  const binaryInt = arr.toString().replace(/,/ig, '');
  console.log(binaryInt)
  return parseInt(binaryInt, 2);

};

console.log(binaryArrayToNumber([0, 0, 0, 1]))
console.log(binaryArrayToNumber([0, 0, 1, 0]))
console.log(binaryArrayToNumber([1, 1, 1, 1]))

assert(binaryArrayToNumber([0, 0, 0, 1]), 1);
assert(binaryArrayToNumber([0, 0, 1, 0]), 2);
assert(binaryArrayToNumber([1, 1, 1, 1]), 15);
assert(binaryArrayToNumber([0, 1, 1, 0]), 6);