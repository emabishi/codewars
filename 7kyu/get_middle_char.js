const assert = require('assert');

// odd -> return one middle char
// even -> return 2 middle chars
// return strings
// const odd = s.length % 2 !== 0;
const getMiddle = (s) => s.length % 2 !== 0 ? `${s[(s.length - 1) / 2]}` : `${s[(s.length / 2)-1]}${s[s.length / 2]}`
  

console.log(getMiddle("test"));
console.log(getMiddle("testing"))


assert(getMiddle("test"), "es");
assert(getMiddle("testing"), "t");
assert(getMiddle("middle"), "dd");
assert(getMiddle("A"), "A");