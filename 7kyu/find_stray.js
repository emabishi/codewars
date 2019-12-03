// You are given an odd - length array of integers, in which all of them are the same, except
// for one single number.

// Complete the method which accepts such an array, and returns that single different number.
// The input array will always be valid! (odd-length >= 3)


function stray(arr) {
  // Find element that is not repeated in array
  // { element: count }
  const map = {};
  arr.forEach(num => map[num] = (map[num] || 0) + 1);
  console.log(map)
  return parseInt(Object.keys(map).find(key => map[key] === 1))
}


console.log(stray([1, 1, 2]))
console.log(stray([17, 17, 3, 17, 17, 17, 17]))
