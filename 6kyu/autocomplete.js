// https://www.codewars.com/kata/5389864ec72ce03383000484/train/javascript

// Takes in a string and an input array
// Returns the values from the dictionary that start with the input string
// First 5 values in array or []

// Case insensitive search
// Preserve case of the word when returned
// Any input that is NOT a letter should be treated as if it is not there

const assert = require('assert');

function autocomplete(input, dictionary) {
  let result = [];
  // remove all chars that are not letters from input string

  const normalisedInput = input.replace(/[^A-Z]+/ig, '');
  console.log(normalisedInput);
  
  // Loop through array + filter out results that don't have first 2 letters as input
  const inputReg = new RegExp(`^${normalisedInput}`, 'gi')
  result = normalisedInput.length ? dictionary.filter(word => word.match(inputReg)).slice(0,5) : result

  return result;

}



console.log(autocomplete('a#$0i', ['airplane', 'airport', 'apple', 'ball'])) // ['airplane','airport']
console.log(autocomplete('a#$0i', ['airplane', 'airport', 'apple', 'ball', 'ai', 'aint', 'ailment', 'ail'])) // ['airplane','airport']
console.log(autocomplete('ai', ['airplane', 'airport', 'apple', 'ball'])) // ['airplane','airport']
console.log(autocomplete('123', ['airplane', 'airport', 'apple', 'ball'])) // ['airplane','airport']
console.log(autocomplete('', ['airplane', 'airport', 'apple', 'ball'])) // ['airplane','airport']


assert(autocomplete('a#$0i', ['airplane', 'airport', 'apple', 'ball']), ['airplane', 'airport']) // ['airplane','airport']
assert(autocomplete('ai', ['airplane', 'airport', 'apple', 'ball']), ['airplane', 'airport']) // ['airplane','airport']
assert(autocomplete('123', ['airplane', 'airport', 'apple', 'ball']), []) // []
assert(autocomplete('', ['airplane', 'airport', 'apple', 'ball']), []) // []

