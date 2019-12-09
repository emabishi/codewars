// https://www.codewars.com/kata/pairs-of-bears/train/javascript

const assert = require('assert');

function bears(required_bears,bears) {
  // Find pairs of B and 8
  const matches = bears.match(/(8B|B8)/g);
  console.log(matches);
  if (required_bears === 0 && !matches) return ["", true];
  if (!matches) return ["", false];
  return [matches.join(''), matches.length >= required_bears];
}

function bears(required_bears,bears) {
  // Find pairs of B and 8
  const matches = bears.match(/(8B|B8)/g) || [];
  return [matches.join(''), matches.length >= required_bears];
}

console.log(bears(6, 'EvHB8KN8ik8BiyxfeyKBmiCMj')) // ['B88B', false]
console.log(bears(7, '8j8mBliB8gimjB8B8jlB'));
console.log(bears(3, '88Bifk8hB8BB8BBBB888chl8BhBfd'));
console.log(bears(8, '8'));
console.log(bears(0, '888b'));
console.log(bears(0, 'B8hdBB8fbBhBBaB '));
console.log(bears(12, 'g88hBc888B8BgkBlb88B8888 '))
console.log(bears(5, 'lj8b8i  '))
console.log(bears(8, '8BB88Bf8j88Bakg88BejBB   '))

assert(bears(7, '8j8mBliB8gimjB8B8jlB'), ["B8B8B8", false]);
assert(bears(3, '88Bifk8hB8BB8BBBB888chl8BhBfd'), ["8BB8B8B88B", true]);
assert(bears(8, '8'), ["", false]);