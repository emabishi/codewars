const assert = require('assert');

function bonusTime(salary, bonus) {
  // salary = int
  // bonus = bool;

  return bonus ? `£${salary * 10}` : `£${salary}`;
}

assert(bonusTime(10000, true), '£100000');
assert(bonusTime(25000, true), '£250000');
assert(bonusTime(10000, false), '£10000');
assert(bonusTime(60000, false), '£60000');
assert(bonusTime(2, true), '£20');
assert(bonusTime(78, false), '£78');
assert(bonusTime(67890, true), '£678900');