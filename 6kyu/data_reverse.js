// https: //www.codewars.com/kata/data-reverse/train/javascript
const assert = require('assert');

function dataReverse(data) {
  // Form a string from the input
  // split it into strings of 8bits@
  // Create an array from these
  // call Array.reverse on it
  // Make a string

    if (!data) {
      return null
    }
    if (data && !data.length) {
      return data;
    }

    if (data && data.length) {
    // Joined string
    data = data.join('')
    // Split into arrays with 8 bits each
    data = data.match(/[0-1]{8}/ig)
    // Reverse the order of the arrays
    console.log(data)
    data = data.reverse()
    // Join all the elenents of the array
    data = data.join('');
    console.log(data)
    // Get a single array
    data = Array.from(data)
    // Convert each element into numbers
    data = data.map(e => Number(e))
    return data
  } else {
    return null;
  }
}

/*
const dataReverse = data => {
  const bytes = [];
  for (let i = 0; i < data.length; i += 8) {
    console.log(...data.slice(i, i + 8))
    bytes.unshift(...data.slice(i, i + 8));
  }
  return bytes;
};
*/

const data1 = [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0]
const data2 = [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]
console.log(dataReverse(data1))


assert(dataReverse(data1), data2)
const data3 = [0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1]
const data4 = [0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0]
assert(dataReverse(data3), data4)