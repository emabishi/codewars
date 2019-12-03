// Given an integral number, determine if it's a square number:

const assert = require('assert');

// Check if it's square root is an integer
const isSquare = n => Number.isInteger(Math.sqrt(n))


console.log(isSquare(-1))
console.log(isSquare(0))

// assert(isSquare(-1), false);
// assert(isSquare(0), true);
// assert(isSquare(3), false);
// assert(isSquare(4), true);
// assert(isSquare(25), true);
// assert(isSquare(26), false);