const assert = require('assert');

function squareDigits(num) {
  // Create array
  // Loop through array, square each number, append it to a string
  // convert string to number
  // const list = num.toString().split('');
  const list = Array.from(num.toString());
  console.log(list);
  const squares = list.map((num, idx) => Math.pow(parseInt(num), 2)).toString().replace(/,/ig, '')
  console.log(squares);
  return parseInt(squares)
}


console.log(squareDigits(9119));

assert(squareDigits(9119), 811181);
