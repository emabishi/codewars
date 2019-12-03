const assert = require('assert');

function findOutlier(list) {
  // Find unique number in oddness or evenness
  // odd: x % 2 !== 0
  // even: x % 2 === 0

  // Loop through list, stop when you find the outlier
  // { odd: [x,y,z], even: [x,y,z] }
  // Return field with length === 1

  const results = { odd: [], even: [] };

  list.forEach(function (element, idx) {
    if (element % 2 === 0) {
      results['even'].push(element)
    } else {
      results['odd'].push(element)
    }
  })

  // or
  // element % 2 === 0 ? results['even'].push(element) : results['odd'].push(element)

  return results['odd'].length === 1 ? results['odd'][0] : results['even'][0];
}

/*
function findOutlier(list) {
  let odd = list.filter(element => element % 2 !== 0);
  let even = list.filter(element => element % 2 === 0);

  return odd.length === 1 ? odd[0] : even[0];
}
*/

assert.equal(findOutlier([0, 1, 2]), 1)
assert.equal(findOutlier([1, 2, 3]), 2)
assert.equal(findOutlier([2, 6, 8, 10, 3]), 3)
assert.equal(findOutlier([0, 0, 3, 0, 0]), 3)
assert.equal(findOutlier([1, 1, 0, 1, 1]), 0)