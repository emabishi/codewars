const assert = require('assert');

function count(string) {
  let map = {};
  if (!(string.length)) {
  } else {
    Array.from(string).map(e => map[e] = (map[e] || 0) + 1);
  }
  return map;
}

console.log(count("aba"));

assert(count("aba"), { a: 2, b: 1 }); 
assert(count(""), {}); 