// https://www.codewars.com/kata/consonant-value/train/javascript
const assert = require('assert');

function solve(s) {
  const subs = s.split(/[aeiou]/ig);
  console.log(subs);
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const map = {}; // { a: 1, b: 2 ...}
  Array.from(alphabet).forEach(letter => map[letter] = alphabet.indexOf(letter) + 1);

  const values = subs.map(sub => {
    let value = Array.from(sub).reduce((result, letter) => result + map[letter], 0);
    return value;
  })
  console.log(values)
  return Math.max(...values)
};

console.log(solve("zodiac"));
console.log(solve("chruschtschov"));


assert(solve("zodiac"), 26);
assert(solve("chruschtschov"), 80);
assert(solve("khrushchev"), 38);
assert(solve("strength"), 57);
assert(solve("catchphrase"), 73);
assert(solve("twelfthstreet"), 103);
assert(solve("mischtschenkoana"), 80);