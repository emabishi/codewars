const assert = require('assert');

function highAndLow(numbers) {
  // return highest and lowest in the form "highest lowest"
  // push individual numbers into an array
  // find min and max
  // combine into literal

  const list = numbers.split(' ');

  // ------
  // const max_callback = (a, b) => Math.max(a, b);
  // const min_callback = (a, b) => Math.min(a, b);

  // const max = list.reduce(max_callback);
  // const min = list.reduce(min_callback);

  // .....OR

  const max = Math.max(...list);
  const min = Math.min(...list);

  return `${max} ${min}`
}

assert(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");
