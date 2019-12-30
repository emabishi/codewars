// https://www.codewars.com/kata/string-incrementer/train/javascript

const assert = require('assert');

function incrementString(input) {
  // Find the number at the end
  // If it exists: Extract it and add 1, if not return string + 1

  let result = `${input}1`;

  const endsWithDigitReg = new RegExp('[0-9]+$', 'igm');
  const match = input.match(endsWithDigitReg);
  const number = match ? match[0] : null

  if (!number) return result;

  const incremented = Number(number) + 1;
  console.log(incremented);

  const originalStringLength = number.toString().length;

  const zeroPad = (num) => String(num).padStart(originalStringLength, '0');

  console.log(zeroPad(incremented));

  // Replace original digit with zero padded digit
  result = input.replace(endsWithDigitReg, zeroPad(incremented));
  
  return result; 

}

console.log(incrementString("foobar000"))
console.log(incrementString("foobar009"))
console.log(incrementString("foo"))
console.log(incrementString("foobar001"))

assert(incrementString("foobar000"), "foobar001");
assert(incrementString("foo"), "foo1");
assert(incrementString("foobar001"), "foobar002");
assert(incrementString("foobar99"), "foobar100");
assert(incrementString("foobar099"), "foobar100");
assert(incrementString(""), "1");