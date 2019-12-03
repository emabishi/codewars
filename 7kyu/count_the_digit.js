const assert = require('assert');

function nbDig(n, d) {
  // n = 5,
  // d = 7
  // 1^2, 2^2, 3^2, 4^2, 5^2 = 1, 4, 9, 16, 25
  // make result an array, count number of ds

  // Find 0 - n

  let nums = [];
  for (i = 0; i <= n; i++) {
    nums.push(Math.pow(i,2))
  }
  console.log(nums)
  console.log(nums.toString().replace(/,/ig,'').split(''))
  const digits = nums.toString().replace(/,/ig, '').split('');
  console.log(digits)
  let count = {};
  digits.forEach((digit, idx) => count[digit] = (count[digit] || 0) + 1);
  console.log(count);
  return count[d];
}

console.log(nbDig(10, 1));

assert(nbDig(5750, 0), 4700)
assert(nbDig(11011, 2), 9481)
assert(nbDig(12224, 8), 7733)
assert(nbDig(11549, 1), 11905)