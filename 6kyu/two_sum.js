// Write a function that takes an array of numbers(integers
//   for the tests) and a target number.It should find two different items in the array that, when added together, 
//   give the target value.The indices of these items should then be returned in a tuple like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers;
// any valid solutions will be accepted.

// The input will always be valid(numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: http: //oj.leetcode.com/problems/two-sum/

// function twoSum (numbers, target) {
//   // find 2 numbers in numbers array that add to target

//   // target - numbers[index] = other number
//   let a;
//   let b;
//   for (i=0; i < numbers.length; i++) {
//     a = numbers[i];
//     console.log(a)
//     b = target - numbers[i];
//     console.log(b)

//     if ((a + b === target) && numbers.indexOf(a) !== -1 && numbers.indexOf(b) !== -1) {
//       return (numbers.indexOf(a) === -1 || numbers.indexOf(b) === -1) ? null : [numbers.indexOf(a), numbers.lastIndexOf(b)]
//     }
//   }
//   console.log(a, b);
//   console.log(numbers.indexOf(a))
//   console.log(numbers.indexOf(b))
// }

function twoSum(numbers, target) {
  // find 2 numbers in numbers array that add to target
  // target - numbers[index] = other number
  for (i = 0; i < numbers.length; i++) {
    let a = numbers[i];
    let b = target - numbers[i];

    if ((a + b === target) && numbers.includes(a) && numbers.includes(b)) {
      return [numbers.indexOf(a), numbers.lastIndexOf(b)]
    }
  }
  return null
}

console.log(twoSum([1,3,4,5,6], 10)) // (4,6) => (2,4)
console.log(twoSum([1,3,4,5,6,10, 11], 16)); // 
console.log(twoSum([1,3,4,5,6,10, 11], 17)); 
console.log(twoSum([1,3,4,5,6,10, 11], 100));
console.log(twoSum([1,3,4,5,6,10, -11], 100));
console.log(twoSum([1,2,3], 4));
console.log(twoSum([1234, 5678, 9012], 14690));
console.log(twoSum([2, 2, 3], 4));