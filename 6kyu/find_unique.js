const assert = require('assert');
// Same as find_stray
/*
function findUniq(arr) {
  let map = {};
  arr.map(el => map[el] = (map[el] || 0) + 1);
  return Number(Object.keys(map).find(el => map[el] === 1));
}
*/

function findUniq(arr) {
  // The unique element will have the same index of and last index of value
  return arr.find(num => arr.indexOf(num) === arr.lastIndexOf(num));
}

console.log(findUniq([1, 1, 1, 2, 1, 1]))

assert(findUniq([0, 1, 0]), 1);
assert(findUniq([1, 1, 1, 2, 1, 1]), 2);
assert(findUniq([3, 10, 3, 3, 3]), 10);