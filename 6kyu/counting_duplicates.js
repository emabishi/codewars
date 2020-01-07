// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

const assert = require('assert');

function duplicateCount(text) {
  // Normalize text
  // If duplicate, add it into the object below
  //{ letter: count, letter2: count }
  // increment result where letter count > 1

  text = text.toLowerCase();
  const map = {};
  Array.from(text).forEach(el => map[el] = map[el] + 1 || 1);
  console.log(map);

  let result = 0;
  
  Object.keys(map).forEach(el =>  map[el] > 1 ? result = result + 1 : result = result);

  console.log(result)
  return result;
}


function duplicateCount(text) {
  return text.toLowerCase().split('').filter(function (val, i, arr) {
    console.log(val, i)
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
}

console.log(duplicateCount('Dohadear'))
console.log(duplicateCount(''));
console.log(duplicateCount("aabbcde"))
console.log(duplicateCount("Indivisibility"))
console.log(duplicateCount("Indivisibilies"))

assert(duplicateCount(""), 0);
assert(duplicateCount("abcde"), 0);
assert(duplicateCount("aabbcde"), 2);
assert(duplicateCount("aabBcde"), 2);
assert(duplicateCount("Indivisibility"), 1)
assert(duplicateCount("Indivisibilities"), 2)
