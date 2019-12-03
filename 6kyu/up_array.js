// Given an array of integers of any length,
//   return an array that has 1 added to the value represented by the array.

// the array can 't be empty
// only non - negative, single digit integers are allowed

// Return nil(or your language 's equivalent) for invalid inputs.

// https: //www.codewars.com/kata/5514e5b77e6b2f38e0000ca9/train/javascript
const assert = require('assert');

function upArray(arr) {
  // convert arr into string then number
  // add one to number
  // return string split by  '';
  if (!arr.length) {
    return null
  }
  for (i = 0; i < arr.length; i++) {
    // test for double digits
    if (/^[0-9]{2}$/ig.test(arr[i])) {
      return null
    }
    // test for -ve numbers
    if (/^-[0-9]{2}$/ig.test(arr[i])) {
      return null
    }
  }
  // const num = (Number(arr.join('')) + 1) > Number.MAX_SAFE_INTEGER ? `${arr.join('')}n` + 1n : Number(arr.join('')) + 1

  const num = Number(arr.join('')) + 1;
  console.log(num)
  return isNaN(num) ? null : Array.from(num.toString()).map(e => Number(e))
}

console.log(upArray([2, 3, 9]))
console.log(upArray([1,2,3,3]))
console.log(upArray([9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 7]))
console.log(upArray([1, -9]))


assert(upArray([2, 3, 9]), [2, 4, 0]);
assert(upArray([4, 3, 2, 5]), [4, 3, 2, 6]);
assert(upArray([1, -9]), null);