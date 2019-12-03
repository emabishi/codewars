// Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and
// return it.If the two numbers are equal
// return a or b.

// Note: a and b are not ordered!
const assert = require('assert');

function getSum(a, b) {
  // add 1 to a until b
  if (a === b) {
    return a;
  }
  const nums = [];
  const max = Math.max(a, b);
  const min = Math.min(a, b);
  for (i = min; nums.length < max - min + 1; i++) {
    console.log(i)
    nums.push(i);
  }
  console.log(nums);
  return nums.reduce((result, num) => num + result, 0)
}

// function getSum(a,b) {
// // add 1 to a until b
//   if (a === b) {
//     return a;
//   }
//   const nums = [];
//   const max = Math.max(a, b);
//   const min = Math.min(a, b);
//   for (i = min; i <= (max - min + 1); i++) {
//     console.log(i)
//     nums.push(i);
//   }
//   console.log(nums);
//   return nums.reduce((result, num) => num + result, 0)
// }

// const getSum = (a, b) => {
//   let min = Math.min(a, b);
//   let max = Math.max(a, b);
//   console.log((max - min + 1) * (min + max) / 2)
//   return (max - min + 1) * (min + max) / 2;
// }

console.log(getSum(1,7))

// assert(getSum(0, -1), -1);
// assert(getSum(0, 1), 1);