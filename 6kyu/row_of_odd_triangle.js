// https://www.codewars.com/kata/row-of-the-odd-triangle/train/javascript

function oddRow(n) {
  // const steps_max = [1, ]; // [4,6,8,10] steps.length === n
  const steps_min = [1, ]
/*
  for (let i = 4; steps_max.length < n; i = i+2) {
    console.log(i)
    steps_max.push(i);
  }
  console.log(steps_max);
  let max = steps_max.reduce((result, val) => result + val, 0);
  console.log(max);
*/
  for (let i = 2; steps_min.length < n; i = i + 2) {
    console.log(i)
    steps_min.push(i);
  }

  let min = steps_min.reduce((result, val) => result + val, 0);
  console.log(min)

  // Construct an array where min is the lowest number and max is the highest
  // and the values are separated by + 2
  let result = [];

  while (result.length < n) {
    result.push(min);
    min = min+2
  }
  console.log(result);
  return result;
}


function oddRow(n) {
  // Min odds on the left the triangle follow this arithmetic pattern from one to the next
  const min = n * n - (n-1);
  // Max odds on the left the triangle follow this arithmetic pattern from one to the next
  const max = n * n + (n-1);

  console.log(min);
  console.log(max);

  return Array(n).fill(0).map((el, idx) => min + idx * 2);

}

console.log(oddRow(3))