// Story

// Your online store likes to give out coupons
// for special occasions.Some customers
// try to cheat the system by entering invalid codes or using expired coupons.
// Task

// Your mission:
//   Write a
// function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date.All dates will be passed as strings in this format: "MONTH DATE, YEAR".

const assert = require('assert');

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  if (enteredCode !== correctCode) {
    return false;
  } else {
    if (Date.parse(currentDate) > Date.parse(expirationDate)) {
      return false;
    } else {
      return true;
    }
  }
}

const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => 
  // enteredCode !== correctCode ? false : Date.parse(currentDate) > Date.parse(expirationDate) ? false : true
  enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate)

console.log(checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014'))
console.log(checkCoupon('123', '123', 'October 1, 2014', 'October 1, 2014'))

// assert(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014'), true);
// assert(checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014'), false);
// assert(checkCoupon('123', '123', 'October 1, 2014', 'October 1, 2014'), false);