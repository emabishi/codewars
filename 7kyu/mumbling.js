
const assert = require('assert');

function accum(str) {
  // Find the index of every letter in the string
  // return the result of titlecasing and repeating each letter the number of times of its index + 1
  const arr = Array.from(str);
  console.log(arr);
  const x = arr.map((letter, index) => `${letter.toUpperCase()}${letter.toLowerCase().repeat(index)}`)
  console.log(x.toString().replace(/,/g, '-'))
  return x.toString().replace(/,/g, '-');
}

// function accum(str) {
//   // Find the index of every letter in the string
//   // return the result of titlecasing and repeating each letter the number of times of its index + 1
//   return Array.from(str)
//     .map((letter, index) => `${letter.toUpperCase()}${letter.toLowerCase().repeat(index)}`)
//     .toString()
//     .replace(/,/g, '-');
// }


console.log(accum("abcd"))
console.log(accum("RqaEzty"))

assert(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
assert(accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
assert(accum("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
assert(accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
assert(accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");