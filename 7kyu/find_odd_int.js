// Given an array, find the integer that appears an odd number of times.
const assert = require('assert');

function findOdd(list) {
  // Loop through list
  // For every int, count appearances   // { int: count, int: count }
  // Return the one that has an odd value count
  let map = { };
  list.forEach(element => map[element] = (map[element] || 0) + 1);
  
  console.log(map)

  const oddInt = parseInt(Object.keys(map).find(key => map[key] % 2 !== 0));
  console.log(oddInt)
  return oddInt
}

// const findOdd = (list) => list.reduce((acc, val) => acc ^ val, 0);

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]))
console.log(findOdd([20, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], ))

assert(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5));
assert(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1));
assert(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5));
assert(findOdd([10], 10));
assert(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10));
assert(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1));