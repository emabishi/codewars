// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
// which is the number of times you must multiply the digits in num until you reach a single digit.
const assert = require('assert');

function persistence(num) {
  //while num.length > 1
  // split num (''), multiply individual digits,
  // set new num as result of multiplication

  let count = 0;
  while (`${num}`.length > 1) {
    console.log(num)
    const product = Array.from(num.toString()).reduce((result, num) => result * num, 1);
    console.log(product)
    num = product
    count++;
  }
  return count;
}

/*
function persistence(num) {
  //while num.length > 1
  // split num (''), multiply individual digits,
  // set new num as result of multiplication

  let count = 0;
  while (`${num}`.length > 1) {
    num = Array.from(num.toString()).reduce((result, num) => result * num, 1);
    count++;

  }
  return count;
}
*/

console.log(persistence(39));
console.log(persistence(4));

assert(persistence(39), 3);
assert(persistence(25), 2);
assert(persistence(999), 4);
assert(persistence(4), 0);