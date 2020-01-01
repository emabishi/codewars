const input = 'foobar000';
// const input = 'foobar009';
// const input = 'foobar';

const endsWithDigitReg = new RegExp('[0-9]+$', 'igm');
const number = input.match(endsWithDigitReg)[0];


const incremented = Number(number) + 1
console.log(incremented)

const originalStringLength = number.toString().length;
const resultLength = incremented.toString().length;

console.log(originalStringLength);
console.log(resultLength);
console.log(originalStringLength - resultLength);

const places = originalStringLength - resultLength;
console.log(places)

const zeroPad = (num, places) => String(num).padStart(originalStringLength, '0');

console.log(zeroPad(incremented, places))

const result = input.replace(endsWithDigitReg, zeroPad(incremented, places));
console.log(result)