const assert = require('assert');

const oddOrEven = array => array.reduce((result, num) => result + num, 0) % 2 === 0 ? 'even' : 'odd';

console.log(oddOrEven([]))

assert(oddOrEven([0]), 'even')
assert(oddOrEven([1]), 'odd')
assert(oddOrEven([]), 'even')
assert(oddOrEven([0, 1, 5]), 'even')
assert(oddOrEven([0, 1, 3]), 'even')
assert(oddOrEven([1023, 1, 2]), 'even')